"""The Ultra Card Pro Cloud integration."""
from __future__ import annotations

import asyncio
import json
import logging
import os
import secrets
from pathlib import Path
from typing import Any
from datetime import datetime, timezone

from aiohttp import web
from homeassistant.components.http import HomeAssistantView
from homeassistant.config_entries import ConfigEntry
from homeassistant.const import Platform
from homeassistant.core import HomeAssistant
from homeassistant.helpers.aiohttp_client import async_get_clientsession
from homeassistant.helpers.storage import Store

from .const import (
    API_BASE_URL,
    CONF_PASSWORD,
    CONF_USERNAME,
    DOMAIN,
    DATA_COORDINATOR,
    DATA_AUTH,
    PANEL_URL_PATH,
    PANEL_JS_URL,
    PANEL_STATIC_URL_PATH,
    PANEL_CUSTOM_ELEMENT,
    PROXY_ALLOWED_METHODS,
    is_proxy_url_allowed,
)
from .coordinator import UltraCardProCloudCoordinator
from .helpers import (
    build_local_smart_preset,
    build_smart_tier_access,
    extract_conversation_text,
    extract_user_colors,
    normalize_smart_connector_preference,
    normalize_proxy_payload,
    safe_upload_filename,
    store_user_colors,
)


def _post_media_to_ultracard_sync(
    url: str,
    token: str,
    raw_bytes: bytes,
    filename: str,
    content_type: str,
    field_name: str = "photo",
) -> tuple[int, bytes]:
    """POST multipart to WordPress using requests (reliable $_FILES vs aiohttp + HA session)."""
    import io

    import requests

    field = (field_name or "photo").strip() or "photo"
    files = {field: (filename, io.BytesIO(raw_bytes), content_type)}
    r = requests.post(
        url,
        headers={"Authorization": f"Bearer {token}"},
        files=files,
        timeout=120,
    )
    return r.status_code, r.content


async def _post_media_multipart(
    hass: HomeAssistant,
    url: str,
    token: str,
    raw_bytes: bytes,
    filename: str,
    content_type: str,
    field_name: str = "photo",
) -> tuple[int, bytes]:
    """Run blocking requests.post in HA executor."""
    return await hass.async_add_executor_job(
        _post_media_to_ultracard_sync,
        url,
        token,
        raw_bytes,
        filename,
        content_type,
        field_name,
    )


def _user_attrs_for_frontend(attrs: dict | None) -> dict:
    """Return sensor attributes safe for frontend (no token)."""
    if not attrs:
        return {}
    return {k: v for k, v in attrs.items() if k != "token"}


def _request_hass_user(request: web.Request):
    """Return the current HA user object when available."""
    return request.get("hass_user")


def _request_hass_user_id(request: web.Request) -> str | None:
    """Return the current HA user id when available."""
    user = _request_hass_user(request)
    user_id = getattr(user, "id", None)
    return str(user_id) if user_id else None


def _request_can_manage_shared_auth(request: web.Request) -> bool:
    """Only admins/owners can mutate shared integration auth state."""
    user = _request_hass_user(request)
    if not user:
        return False
    return bool(getattr(user, "is_admin", False) or getattr(user, "is_owner", False))


def _get_primary_coordinator(hass: HomeAssistant):
    """Return the first configured coordinator instance (if any)."""
    entries = hass.config_entries.async_entries(DOMAIN)
    if not entries:
        return None
    entry = entries[0]
    domain_data = hass.data.get(DOMAIN, {})
    entry_data = domain_data.get(entry.entry_id, {})
    return entry_data.get(DATA_COORDINATOR)


# ---------------------------------------------------------------------------
# HTTP API views — single source of auth for the Ultra Card frontend.
# The frontend NEVER stores credentials in localStorage; instead it calls
# these endpoints (authenticated via the user's existing HA session) and the
# integration stores username/password securely in HA's config entry storage.
# ---------------------------------------------------------------------------

AUTH_SENSOR_ID = "sensor.ultra_card_pro_cloud_authentication_status"
# Wait for coordinator to finish auth and sensor to update (avoids "succeeds on 3rd attempt" race)
AUTH_SENSOR_WAIT_TIMEOUT = 15  # seconds
AUTH_SENSOR_POLL_INTERVAL = 0.5  # seconds
SMART_QUOTA_STORAGE_KEY = "ultra_card_pro_cloud.smart_generation_quotas"
SMART_QUOTA_STORAGE_VERSION = 1
SMART_FREE_DAILY_GENERATION_LIMIT = 5


def _quota_user_key(user_id: str | None) -> str:
    """Return storage key for per-user quota tracking."""
    return user_id or "_anonymous"


def _quota_today_utc_iso() -> str:
    """Return UTC date string used for daily quota reset."""
    from datetime import datetime, timezone

    return datetime.now(timezone.utc).date().isoformat()


async def _get_free_quota_limits(
    hass: HomeAssistant, user_id: str | None
) -> dict[str, Any]:
    """Return current daily free generation limits for the user."""
    store = Store(hass, SMART_QUOTA_STORAGE_VERSION, SMART_QUOTA_STORAGE_KEY)
    data = await store.async_load()
    users = data.get("users") if isinstance(data, dict) else {}
    bucket = users.get(_quota_user_key(user_id)) if isinstance(users, dict) else {}
    today = _quota_today_utc_iso()

    used = 0
    if isinstance(bucket, dict) and bucket.get("date") == today:
        bucket_used = bucket.get("free_used")
        if isinstance(bucket_used, int) and bucket_used > 0:
            used = bucket_used

    free_remaining = max(0, SMART_FREE_DAILY_GENERATION_LIMIT - used)
    return {
        "free_daily_generations": SMART_FREE_DAILY_GENERATION_LIMIT,
        "free_remaining": free_remaining,
        "pro_unlimited": True,
    }


async def _consume_free_quota_generation(
    hass: HomeAssistant, user_id: str | None
) -> dict[str, Any]:
    """Consume one free generation and return updated limits."""
    store = Store(hass, SMART_QUOTA_STORAGE_VERSION, SMART_QUOTA_STORAGE_KEY)
    data = await store.async_load()
    payload = data if isinstance(data, dict) else {}
    users = payload.get("users") if isinstance(payload.get("users"), dict) else {}

    today = _quota_today_utc_iso()
    key = _quota_user_key(user_id)
    bucket = users.get(key)
    used = 0
    if isinstance(bucket, dict) and bucket.get("date") == today:
        bucket_used = bucket.get("free_used")
        if isinstance(bucket_used, int) and bucket_used > 0:
            used = bucket_used

    used += 1
    users[key] = {"date": today, "free_used": used}
    payload["users"] = users
    await store.async_save(payload)

    free_remaining = max(0, SMART_FREE_DAILY_GENERATION_LIMIT - used)
    return {
        "free_daily_generations": SMART_FREE_DAILY_GENERATION_LIMIT,
        "free_remaining": free_remaining,
        "pro_unlimited": True,
    }


def _has_ha_assist(hass: HomeAssistant) -> bool:
    """Return whether Home Assistant exposes an Assist/conversation path."""
    if hass.services.has_service("conversation", "process"):
        return True
    try:
        return any(
            entity_id.startswith("conversation.")
            for entity_id in hass.states.async_entity_ids()
        )
    except Exception:
        return False


async def _wait_for_auth_sensor(hass: HomeAssistant) -> dict | None:
    """Poll until auth sensor is 'connected' or timeout. Returns attributes dict or None."""
    loop = asyncio.get_running_loop()
    deadline = loop.time() + AUTH_SENSOR_WAIT_TIMEOUT
    while loop.time() < deadline:
        state = hass.states.get(AUTH_SENSOR_ID)
        if state and state.state == "connected":
            return dict(state.attributes)
        await asyncio.sleep(AUTH_SENSOR_POLL_INTERVAL)
    return None


class UltraCardLoginView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/login — store credentials and authenticate."""

    url = "/api/ultra_card_pro_cloud/login"
    name = "api:ultra_card_pro_cloud:login"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if not _request_can_manage_shared_auth(request):
            return self.json(
                {"error": "Only Home Assistant admins can manage Ultra Card shared sign-in."},
                status_code=403,
            )
        try:
            body = await request.json()
        except Exception:
            return self.json({"error": "Invalid JSON"}, status_code=400)

        username = (body.get("username") or body.get("email") or "").strip()
        password = (body.get("password") or "").strip()

        if not username or not password:
            return self.json({"error": "username and password are required"}, status_code=400)

        entries = hass.config_entries.async_entries(DOMAIN)

        if entries:
            # Update the existing config entry with the new credentials
            entry = entries[0]
            hass.config_entries.async_update_entry(
                entry,
                data={**entry.data, CONF_USERNAME: username, CONF_PASSWORD: password},
            )
            # Force the coordinator to re-authenticate with fresh credentials
            domain_data = hass.data.get(DOMAIN, {})
            entry_data = domain_data.get(entry.entry_id, {})
            coordinator = entry_data.get(DATA_COORDINATOR)
            if coordinator:
                coordinator._jwt_token = None
                coordinator._refresh_token = None
                coordinator._token_expires_at = 0
                await coordinator.async_refresh()
        else:
            # No config entry yet — create one via the config flow
            result = await hass.config_entries.flow.async_init(
                DOMAIN,
                context={"source": "user_api"},
                data={CONF_USERNAME: username, CONF_PASSWORD: password},
            )
            if result.get("type") not in ("create_entry", "abort"):
                return self.json({"error": "Failed to create integration entry"}, status_code=500)

        # Wait for coordinator to finish and sensor to show connected (fixes race where
        # first attempt returned 401 because we checked the sensor too soon)
        attrs = await _wait_for_auth_sensor(hass)
        if attrs is not None:
            return self.json({"success": True, "user": _user_attrs_for_frontend(attrs)})

        return self.json({"error": "Authentication failed — check your credentials"}, status_code=401)


class UltraCardLogoutView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/logout — clear stored credentials."""

    url = "/api/ultra_card_pro_cloud/logout"
    name = "api:ultra_card_pro_cloud:logout"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if not _request_can_manage_shared_auth(request):
            return self.json(
                {"error": "Only Home Assistant admins can manage Ultra Card shared sign-in."},
                status_code=403,
            )
        entries = hass.config_entries.async_entries(DOMAIN)
        if entries:
            entry = entries[0]
            # Remove credentials from config entry data but keep the entry itself
            clean_data = {
                k: v for k, v in entry.data.items()
                if k not in (CONF_USERNAME, CONF_PASSWORD)
            }
            hass.config_entries.async_update_entry(entry, data=clean_data)
            domain_data = hass.data.get(DOMAIN, {})
            entry_data = domain_data.get(entry.entry_id, {})
            coordinator = entry_data.get(DATA_COORDINATOR)
            if coordinator:
                coordinator._jwt_token = None
                coordinator._refresh_token = None
                coordinator._token_expires_at = 0
                await coordinator.async_refresh()
        return self.json({"success": True})


class UltraCardRegisterView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/register — create account and send password setup email."""

    url = "/api/ultra_card_pro_cloud/register"
    name = "api:ultra_card_pro_cloud:register"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        try:
            body = await request.json()
        except Exception:
            return self.json({"error": "Invalid JSON"}, status_code=400)

        username = (body.get("username") or "").strip()
        email = (body.get("email") or "").strip()
        display_name = (body.get("display_name") or username or email.split("@")[0]).strip()

        if not username or not email:
            return self.json({"error": "username and email are required"}, status_code=400)

        # Register on ultracard.io via our custom WordPress endpoint
        session = async_get_clientsession(hass)
        payload = {
            "username": username or email.split("@")[0],
            "email": email,
            "display_name": display_name,
            # Backward compatibility for older ultracard.io builds that still
            # require a password field during registration.
            "password": secrets.token_urlsafe(24),
        }
        try:
            async with session.post(
                f"{API_BASE_URL}/ultra-card/v1/register",
                json=payload,
                timeout=aiohttp_timeout(15),
            ) as resp:
                data = await resp.json()
                if resp.ok:
                    message = data.get("message") or (
                        "Account created. Check your email inbox, junk, or spam for the ultracard.io message to finish setting your password, then come back here to sign in."
                    )
                    return self.json({"success": True, "message": message})

                msg = data.get("message") or data.get("error") or "Registration failed"

                # Some older ultracard.io builds parse form-encoded request bodies
                # but ignore JSON payloads, which makes password appear missing.
                should_retry_as_form = (
                    resp.status == 400
                    and isinstance(msg, str)
                    and "password" in msg.lower()
                    and "required" in msg.lower()
                )
                if should_retry_as_form:
                    async with session.post(
                        f"{API_BASE_URL}/ultra-card/v1/register",
                        data=payload,
                        timeout=aiohttp_timeout(15),
                    ) as retry_resp:
                        retry_data = await retry_resp.json()
                        if retry_resp.ok:
                            message = retry_data.get("message") or (
                                "Account created. Check your email inbox, junk, or spam for the ultracard.io message to finish setting your password, then come back here to sign in."
                            )
                            return self.json({"success": True, "message": message})

                        msg = (
                            retry_data.get("message")
                            or retry_data.get("error")
                            or msg
                            or "Registration failed"
                        )

                return self.json({"error": msg}, status_code=resp.status)
        except Exception as err:
            _LOGGER.error("Registration request failed: %s", err)
            return self.json({"error": "Could not reach ultracard.io — check your network"}, status_code=503)


# Favorite colors storage key and version (persisted in HA .storage)
FAVORITE_COLORS_STORAGE_KEY = "ultra_card_pro_cloud.favorite_colors"
FAVORITE_COLORS_STORAGE_VERSION = 1


class UltraCardFavoriteColorsView(HomeAssistantView):
    """GET/POST /api/ultra_card_pro_cloud/favorite_colors — load/save favorite colors in HA store."""

    url = "/api/ultra_card_pro_cloud/favorite_colors"
    name = "api:ultra_card_pro_cloud:favorite_colors"
    requires_auth = True

    async def get(self, request: web.Request) -> web.Response:
        """Return stored favorite colors from HA store."""
        hass: HomeAssistant = request.app["hass"]
        user_id = _request_hass_user_id(request)
        store = Store(hass, FAVORITE_COLORS_STORAGE_VERSION, FAVORITE_COLORS_STORAGE_KEY)
        data = await store.async_load()
        return self.json({"colors": extract_user_colors(data, user_id)})

    async def post(self, request: web.Request) -> web.Response:
        """Save favorite colors to HA store."""
        hass: HomeAssistant = request.app["hass"]
        user_id = _request_hass_user_id(request)
        try:
            body = await request.json()
        except Exception:
            return self.json({"error": "Invalid JSON"}, status_code=400)
        colors = body.get("colors") if isinstance(body, dict) else body
        if not isinstance(colors, list):
            return self.json({"error": "colors must be an array"}, status_code=400)
        # Basic validation: each item must have id, name, color, order
        validated = []
        for i, item in enumerate(colors):
            if not isinstance(item, dict):
                continue
            if not all(k in item for k in ("id", "name", "color", "order")):
                continue
            validated.append({
                "id": str(item["id"]),
                "name": str(item["name"]),
                "color": str(item["color"]),
                "order": int(item["order"]) if isinstance(item.get("order"), (int, float)) else i,
            })
        store = Store(hass, FAVORITE_COLORS_STORAGE_VERSION, FAVORITE_COLORS_STORAGE_KEY)
        existing = await store.async_load()
        await store.async_save(store_user_colors(existing, user_id, validated))
        return self.json({"success": True, "colors": validated})


class UltraCardProxyView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/proxy — forward API calls to ultracard.io with integration token.

    The frontend never receives the JWT; it sends method/url/body and the integration
    adds the token and returns the response. Only allows URLs under API_BASE_URL.
    """

    url = "/api/ultra_card_pro_cloud/proxy"
    name = "api:ultra_card_pro_cloud:proxy"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if not _request_can_manage_shared_auth(request):
            return self.json(
                {
                    "error": "Only Home Assistant admins can use the Ultra Card cloud proxy.",
                    "_status": 403,
                    "_body": None,
                },
                status_code=403,
            )
        try:
            body = await request.json()
        except Exception:
            return self.json({"error": "Invalid JSON", "_status": 400, "_body": None}, status_code=400)

        method = (body.get("method") or "GET").upper()
        url = (body.get("url") or "").strip()
        payload = normalize_proxy_payload(body)

        if method not in PROXY_ALLOWED_METHODS:
            return self.json(
                {"error": "Method not allowed", "_status": 405, "_body": None},
                status_code=405,
            )

        if not is_proxy_url_allowed(url):
            return self.json({"error": "Invalid URL", "_status": 400, "_body": None}, status_code=400)

        entries = hass.config_entries.async_entries(DOMAIN)
        if not entries:
            return self.json({"error": "Integration not configured", "_status": 503, "_body": None}, status_code=503)

        entry = entries[0]
        domain_data = hass.data.get(DOMAIN, {})
        entry_data = domain_data.get(entry.entry_id, {})
        coordinator = entry_data.get(DATA_COORDINATOR)
        if not coordinator or not getattr(coordinator, "_jwt_token", None):
            return self.json({"error": "Not authenticated", "_status": 401, "_body": None}, status_code=401)

        token = coordinator._jwt_token
        session = async_get_clientsession(hass)
        headers = {"Authorization": f"Bearer {token}", "Content-Type": "application/json"}

        try:
            if method == "GET":
                async with session.get(url, headers=headers, timeout=aiohttp_timeout(30)) as resp:
                    return await _proxy_response(resp, self.json)
            if method == "POST":
                # Multipart media upload encoded as base64 in JSON (fallback when
                # /api/.../media_upload is missing on older integration builds).
                if isinstance(payload, dict) and "__media_upload_b64" in payload:
                    media_url = f"{API_BASE_URL}/ultra-card/v1/media"
                    if url.rstrip("/") != media_url.rstrip("/"):
                        return self.json(
                            {"error": "Invalid URL for media upload", "_status": 400, "_body": None},
                            status_code=400,
                        )
                    import base64

                    spec = payload.get("__media_upload_b64") or {}
                    try:
                        raw_bytes = base64.b64decode(spec.get("data") or "")
                    except Exception:
                        return self.json({"message": "Invalid base64", "_status": 400, "_body": None}, status_code=400)
                    if not raw_bytes:
                        return self.json({"message": "Empty file data", "_status": 400, "_body": None}, status_code=400)
                    fname = safe_upload_filename(str(spec.get("filename") or "upload.bin"))
                    ctype = (
                        spec.get("content_type")
                        or spec.get("contentType")
                        or "application/octet-stream"
                    )
                    field_nm = str(spec.get("field") or "photo").strip() or "photo"
                    http_status, raw = await _post_media_multipart(
                        hass, url, token, raw_bytes, fname, ctype, field_nm
                    )
                    return await _proxy_response_from_bytes(http_status, raw, self.json)
                async with session.post(url, headers=headers, json=payload, timeout=aiohttp_timeout(30)) as resp:
                    return await _proxy_response(resp, self.json)
            if method == "PUT":
                async with session.put(url, headers=headers, json=payload, timeout=aiohttp_timeout(30)) as resp:
                    return await _proxy_response(resp, self.json)
            if method == "DELETE":
                async with session.delete(url, headers=headers, timeout=aiohttp_timeout(30)) as resp:
                    return await _proxy_response(resp, self.json)
        except Exception as err:
            _LOGGER.exception("Proxy request failed: %s", err)
            return self.json({"_status": 502, "_body": {"message": str(err)}}, status_code=502)

        return self.json({"error": "Method not allowed", "_status": 405, "_body": None}, status_code=405)


class UltraCardSmartConnectorsStatusView(HomeAssistantView):
    """GET /api/ultra_card_pro_cloud/smart/connectors/status."""

    url = "/api/ultra_card_pro_cloud/smart/connectors/status"
    name = "api:ultra_card_pro_cloud:smart_connectors_status"
    requires_auth = True

    async def get(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        user_id = _request_hass_user_id(request)
        coordinator = _get_primary_coordinator(hass)
        has_ha_assist = _has_ha_assist(hass)
        subscription = (getattr(coordinator, "data", None) or {}).get("subscription", {})
        is_pro = (
            isinstance(subscription, dict)
            and subscription.get("tier") == "pro"
            and subscription.get("status") == "active"
        )
        limits = await _get_free_quota_limits(hass, user_id)
        warnings: list[str] = []

        status: dict[str, Any] = {
            "available": {
                "ha_assist": has_ha_assist,
                "user_provider": False,
                "cloud_default": False,
            },
            "default_connector": "ha_assist" if has_ha_assist else "auto",
            "ha": {
                "supports_text": has_ha_assist,
            },
            "limits": limits,
            "tier_access": build_smart_tier_access(
                is_pro_user=is_pro,
                free_daily_generations=limits.get("free_daily_generations"),
                free_remaining=limits.get("free_remaining"),
            ),
        }

        if not has_ha_assist:
            warnings.append(
                "Home Assistant Assist is not configured. Set up an Assist pipeline to use Smart Cards."
            )

        if warnings:
            status["warnings"] = warnings
        return self.json(status)


class UltraCardSmartGenerateView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/smart/generate."""

    url = "/api/ultra_card_pro_cloud/smart/generate"
    name = "api:ultra_card_pro_cloud:smart_generate"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        user_id = _request_hass_user_id(request)
        try:
            body = await request.json()
        except Exception:
            return self.json({"error": "Invalid JSON"}, status_code=400)

        if not isinstance(body, dict):
            return self.json({"error": "Request body must be an object"}, status_code=400)

        prompt = str(body.get("prompt") or "").strip()
        if not prompt:
            return self.json({"error": "prompt is required"}, status_code=400)

        connector_preference = normalize_smart_connector_preference(
            body.get("connector_preference")
        )

        coordinator = _get_primary_coordinator(hass)
        subscription = (getattr(coordinator, "data", None) or {}).get("subscription", {})
        is_pro = (
            isinstance(subscription, dict)
            and subscription.get("tier") == "pro"
            and subscription.get("status") == "active"
        )
        requested_tier = "pro" if str(body.get("tier") or "free").lower() == "pro" else "free"
        warnings: list[str] = []
        if requested_tier == "pro" and not is_pro:
            requested_tier = "free"
            warnings.append("Pro generation requested but account is not Pro; using free tier.")

        limits = await _get_free_quota_limits(hass, user_id)

        if requested_tier == "free" and not is_pro:
            free_remaining = limits.get("free_remaining")
            if isinstance(free_remaining, int) and free_remaining <= 0:
                return self.json(
                    {
                        "error": "Daily free Smart generations reached. Upgrade to Pro for unlimited generations.",
                        "limits": limits,
                        "tier_access": build_smart_tier_access(
                            is_pro_user=is_pro,
                            free_daily_generations=limits.get("free_daily_generations"),
                            free_remaining=limits.get("free_remaining"),
                        ),
                    },
                    status_code=429,
                )

        if connector_preference not in ("ha_assist", "auto"):
            warnings.append("Smart Cards now use Home Assistant Assist; ignoring other connector preferences.")

        try:
            assist_result = await hass.services.async_call(
                "conversation",
                "process",
                {"text": prompt},
                blocking=True,
                return_response=True,
            )
            assist_text = extract_conversation_text(assist_result)
        except Exception as err:
            return self.json(
                {"error": "Home Assistant Assist failed", "details": str(err)},
                status_code=502,
            )

        if requested_tier == "free" and not is_pro:
            limits = await _consume_free_quota_generation(hass, user_id)

        payload = build_local_smart_preset(
            prompt,
            requested_tier,
            "ha_assist",
            warnings,
            assist_text,
        )
        payload["limits"] = limits
        payload["tier_access"] = build_smart_tier_access(
            is_pro_user=is_pro,
            free_daily_generations=limits.get("free_daily_generations"),
            free_remaining=limits.get("free_remaining"),
        )
        return self.json(payload, status_code=200)


class UltraCardDiagnosticsView(HomeAssistantView):
    """GET/POST /api/ultra_card_pro_cloud/diagnostics — redacted Connect health report."""

    url = "/api/ultra_card_pro_cloud/diagnostics"
    name = "api:ultra_card_pro_cloud:diagnostics"
    requires_auth = True

    async def get(self, request: web.Request) -> web.Response:
        return await self._build(request, run_connectivity=False)

    async def post(self, request: web.Request) -> web.Response:
        run_connectivity = True
        try:
            body = await request.json()
            if isinstance(body, dict) and "run_connectivity" in body:
                run_connectivity = bool(body.get("run_connectivity"))
        except Exception:
            pass
        return await self._build(request, run_connectivity=run_connectivity)

    async def _build(self, request: web.Request, *, run_connectivity: bool) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if not _request_can_manage_shared_auth(request):
            return self.json(
                {"error": "Only Home Assistant admins can download Ultra Card Connect diagnostics."},
                status_code=403,
            )

        from .diagnostics import async_get_config_entry_diagnostics
        from .sensor import INTEGRATION_VERSION
        from .const import INTEGRATION_CAPABILITIES

        entries = hass.config_entries.async_entries(DOMAIN)
        report: dict[str, Any] = {
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "integration_version": INTEGRATION_VERSION,
            "capabilities": dict(INTEGRATION_CAPABILITIES),
            "panel": _read_panel_asset_meta(),
            "entries": [],
        }

        if not entries:
            report["error"] = "Ultra Card Connect is not configured (no config entry)."
            return self.json(report, status_code=200)

        for entry in entries:
            try:
                entry_diag = await async_get_config_entry_diagnostics(hass, entry)
                report["entries"].append(entry_diag)
            except Exception as err:
                report["entries"].append({"error": str(err), "entry_id": entry.entry_id})

        # Optional live connectivity for the first entry when requested
        if run_connectivity and entries and report["entries"]:
            entry = entries[0]
            entry_data = hass.data.get(DOMAIN, {}).get(entry.entry_id, {})
            coordinator = entry_data.get(DATA_COORDINATOR)
            if coordinator is not None:
                try:
                    report["entries"][0]["connectivity"] = (
                        await coordinator.async_test_connectivity()
                    )
                except Exception as err:
                    report["entries"][0]["connectivity"] = {"errors": [str(err)]}

        return self.json(report, status_code=200)


def _read_panel_asset_meta() -> dict[str, Any]:
    """Read optional panel-assets.json metadata for diagnostics."""
    import json
    from pathlib import Path

    manifest = Path(__file__).parent / "www" / "panel-assets.json"
    if not manifest.exists():
        return {"manifest_present": False}
    try:
        data = json.loads(manifest.read_text(encoding="utf-8"))
        return {
            "manifest_present": True,
            "synced_at": data.get("synced_at"),
            "ultra_card_version": data.get("ultra_card_version"),
            "ultra_card_commit": data.get("ultra_card_commit"),
            "file_count": len(data.get("files") or {}),
        }
    except Exception:
        return {"manifest_present": True, "error": "unreadable"}


class UltraCardMediaUploadView(HomeAssistantView):
    """POST /api/ultra_card_pro_cloud/media_upload — forward multipart photo to ultracard.io.

    The JSON-based proxy cannot carry binary FormData. When the Ultra Card frontend
    uses Home Assistant integration auth (JWT only on the server), photo uploads must
    use this endpoint so the file bytes reach WordPress with the integration token.
    """

    url = "/api/ultra_card_pro_cloud/media_upload"
    name = "api:ultra_card_pro_cloud:media_upload"
    requires_auth = True

    async def post(self, request: web.Request) -> web.Response:
        hass: HomeAssistant = request.app["hass"]
        if not _request_can_manage_shared_auth(request):
            return self.json(
                {"message": "Only Home Assistant admins can upload media via Ultra Card Connect."},
                status_code=403,
            )

        entries = hass.config_entries.async_entries(DOMAIN)
        if not entries:
            return self.json({"message": "Integration not configured"}, status_code=503)

        entry = entries[0]
        domain_data = hass.data.get(DOMAIN, {})
        entry_data = domain_data.get(entry.entry_id, {})
        coordinator = entry_data.get(DATA_COORDINATOR)
        if not coordinator or not getattr(coordinator, "_jwt_token", None):
            return self.json({"message": "Not authenticated"}, status_code=401)

        token = coordinator._jwt_token
        reader = await request.multipart()
        photo_bytes: bytes | None = None
        filename = "upload.bin"
        content_type = "application/octet-stream"

        async for part in reader:
            if part.name == "photo":
                photo_bytes = await part.read(decode=False)
                filename = safe_upload_filename(part.filename or filename)
                content_type = part.headers.get("Content-Type", "application/octet-stream")
                break

        if not photo_bytes:
            return self.json({"message": "Missing photo field"}, status_code=400)

        target_url = f"{API_BASE_URL}/ultra-card/v1/media"

        try:
            http_status, raw = await _post_media_multipart(
                hass,
                target_url,
                token,
                photo_bytes,
                filename,
                content_type,
            )
        except Exception as err:
            logging.getLogger(__name__).exception("Media upload forward failed: %s", err)
            return self.json({"message": str(err)}, status_code=502)

        try:
            body = json.loads(raw) if raw else None
        except Exception:
            body = raw.decode("utf-8", errors="replace") if isinstance(raw, bytes) else None

        if http_status >= 200 and http_status < 300:
            return self.json(body if isinstance(body, dict) else {"data": body})
        if isinstance(body, dict) and body.get("message"):
            return self.json(body, status_code=http_status)
        return self.json(
            {"message": (body if isinstance(body, str) else None) or f"HTTP {http_status}"},
            status_code=http_status,
        )


async def _proxy_response(resp, json_response_fn):
    """Read aiohttp response and return JSON with _status and _body for frontend."""
    try:
        raw = await resp.read()
    except Exception:
        raw = b""
    return await _proxy_response_from_bytes(resp.status, raw, json_response_fn)


async def _proxy_response_from_bytes(http_status: int, raw: bytes, json_response_fn):
    """Build the same proxy payload from raw HTTP status + body bytes."""
    try:
        _body = json.loads(raw) if raw else None
    except Exception:
        _body = raw.decode("utf-8", errors="replace") if isinstance(raw, bytes) else None
    return json_response_fn({"_status": http_status, "_body": _body})


def aiohttp_timeout(seconds: int):
    """Return an aiohttp ClientTimeout."""
    import aiohttp
    return aiohttp.ClientTimeout(total=seconds)

# Read version from root version.py file
__version__ = "1.0.0"
try:
    version_file = os.path.join(os.path.dirname(__file__), "..", "..", "version.py")
    if os.path.exists(version_file):
        with open(version_file) as f:
            for line in f:
                if line.startswith("__version__"):
                    __version__ = line.split("=")[1].strip().strip('"').strip("'")
                    break
except Exception:
    pass  # Fall back to default version

_LOGGER = logging.getLogger(__name__)

PLATFORMS: list[Platform] = [Platform.SENSOR]  # Sensor platform for authentication status


async def async_setup(hass: HomeAssistant, config: dict) -> bool:
    """Set up the Ultra Card Pro Cloud component."""
    from homeassistant.components import frontend

    # Register HTTP API views — available immediately, no config entry required.
    # These let the Ultra Card frontend store/clear credentials through HA's auth
    # layer instead of browser localStorage.
    hass.http.register_view(UltraCardLoginView())
    hass.http.register_view(UltraCardLogoutView())
    hass.http.register_view(UltraCardRegisterView())
    hass.http.register_view(UltraCardFavoriteColorsView())
    hass.http.register_view(UltraCardProxyView())
    hass.http.register_view(UltraCardSmartConnectorsStatusView())
    hass.http.register_view(UltraCardSmartGenerateView())
    hass.http.register_view(UltraCardMediaUploadView())
    hass.http.register_view(UltraCardDiagnosticsView())

    _LOGGER.info("Ultra Card Pro Cloud v%s component setup called", __version__)

    # Serve ultra-card-panel.js from this integration's own www/ folder so the
    # panel works regardless of whether the Ultra Card HACS frontend card is
    # also installed. This eliminates the "Unable to load custom panel" error
    # that occurs when the /hacsfiles/Ultra-Card/ path doesn't exist.
    www_path = Path(__file__).parent / "www"
    if www_path.exists() and not hass.data.get(f"{DOMAIN}_static_registered"):
        try:
            # Use the modern async API (HA 2024.x+). Falls back to the legacy
            # synchronous method for older installations.
            from homeassistant.components.http import StaticPathConfig
            await hass.http.async_register_static_paths([
                StaticPathConfig(PANEL_STATIC_URL_PATH, str(www_path), cache_headers=True),
            ])
            hass.data[f"{DOMAIN}_static_registered"] = True
            _LOGGER.info("Registered static path %s → %s", PANEL_STATIC_URL_PATH, www_path)
        except (ImportError, AttributeError):
            # Fallback for HA versions that don't have async_register_static_paths
            try:
                hass.http.register_static_path(PANEL_STATIC_URL_PATH, str(www_path), cache_headers=True)
                hass.data[f"{DOMAIN}_static_registered"] = True
                _LOGGER.info("Registered static path (legacy) %s → %s", PANEL_STATIC_URL_PATH, www_path)
            except Exception as static_err:
                _LOGGER.warning("Could not register static path for panel JS: %s", static_err)
        except Exception as static_err:
            _LOGGER.warning("Could not register static path for panel JS: %s", static_err)
    elif not www_path.exists():
        _LOGGER.warning(
            "ultra-card-panel.js not found in %s — sidebar panel may fail to load. "
            "Re-deploy the integration to include the www/ folder.",
            www_path,
        )

    # Register Ultra Card Hub sidebar panel so it appears as soon as the integration is installed via HACS (no config entry needed)
    hass.data.setdefault(DOMAIN, {})
    if not hass.data[DOMAIN].get("_panel_registered"):
        try:
            frontend.async_register_built_in_panel(
                hass,
                component_name="custom",
                sidebar_title="Ultra Card",
                sidebar_icon="mdi:cards",
                sidebar_default_visible=True,
                frontend_url_path=PANEL_URL_PATH,
                config={
                    "_panel_custom": {
                        "name": PANEL_CUSTOM_ELEMENT,
                        "js_url": PANEL_JS_URL,
                        "module_url": PANEL_JS_URL,
                        "embed_iframe": False,
                        "trust_external": False,
                    }
                },
                require_admin=False,
            )
            hass.data[DOMAIN]["_panel_registered"] = True
            _LOGGER.info("Registered Ultra Card Hub panel at /%s (sidebar title: Ultra Card)", PANEL_URL_PATH)
        except Exception as panel_err:
            _LOGGER.exception("Could not register Ultra Card Hub panel: %s", panel_err)

    return True


async def async_setup_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Set up Ultra Card Pro Cloud from a config entry."""
    _LOGGER.info("Starting Ultra Card Pro Cloud v%s integration setup for entry: %s", __version__, entry.entry_id)

    # Initialize domain in hass.data - this is critical for frontend access (panel already registered in async_setup)
    hass.data.setdefault(DOMAIN, {})

    try:
        session = async_get_clientsession(hass)
        coordinator = UltraCardProCloudCoordinator(hass, session, entry)

        _LOGGER.info("Attempting first data refresh...")
        await coordinator.async_config_entry_first_refresh()

        _LOGGER.info("Coordinator data after first refresh: %s", coordinator.data)

        hass.data[DOMAIN][entry.entry_id] = {
            DATA_COORDINATOR: coordinator,
        }

        if coordinator.data and coordinator.data.get("authenticated"):
            hass.data[DOMAIN][DATA_AUTH] = {
                "authenticated": True,
                "user_id": coordinator.data.get("user_id"),
                "username": coordinator.data.get("username"),
                "email": coordinator.data.get("email"),
                "display_name": coordinator.data.get("display_name"),
                "subscription_tier": coordinator.data.get("subscription", {}).get("tier", "free"),
                "subscription_status": coordinator.data.get("subscription", {}).get("status", "expired"),
                "subscription_expires": coordinator.data.get("subscription", {}).get("expires"),
            }
            _LOGGER.info("✅ User authenticated, exposing PRO data")
        else:
            hass.data[DOMAIN][DATA_AUTH] = {
                "authenticated": False,
            }
            _LOGGER.warning("⚠️ Authentication failed, exposing unauthenticated state")

        _LOGGER.info("Final exposed auth data: %s", hass.data[DOMAIN][DATA_AUTH])
        coordinator.async_add_listener(_create_update_listener(hass, entry))

        await hass.config_entries.async_forward_entry_setups(entry, PLATFORMS)
        _LOGGER.info("✅ Ultra Card Pro Cloud integration initialized successfully")
        return True

    except Exception as err:
        _LOGGER.exception("❌ Coordinator/sensor setup failed: %s", err)
        hass.data[DOMAIN][DATA_AUTH] = {"authenticated": False}
        # Return False so HA marks the config entry as failed and surfaces the error;
        # user can fix credentials/network and retry from the integration config.
        return False


def _create_update_listener(hass: HomeAssistant, entry: ConfigEntry):
    """Create a listener that updates hass.data when coordinator data changes."""

    def update_exposed_data():
        """Update the exposed data in hass.data."""
        try:
            if DOMAIN not in hass.data or entry.entry_id not in hass.data[DOMAIN]:
                _LOGGER.warning("Domain or entry not found in hass.data during update")
                return
                
            coordinator = hass.data[DOMAIN][entry.entry_id][DATA_COORDINATOR]
            
            if coordinator.data and coordinator.data.get("authenticated"):
                hass.data[DOMAIN][DATA_AUTH] = {
                    "authenticated": True,
                    "user_id": coordinator.data.get("user_id"),
                    "username": coordinator.data.get("username"),
                    "email": coordinator.data.get("email"),
                    "display_name": coordinator.data.get("display_name"),
                    "subscription_tier": coordinator.data.get("subscription", {}).get("tier", "free"),
                    "subscription_status": coordinator.data.get("subscription", {}).get("status", "expired"),
                    "subscription_expires": coordinator.data.get("subscription", {}).get("expires"),
                }
                _LOGGER.info("🔄 Updated auth data (authenticated): %s", hass.data[DOMAIN][DATA_AUTH])
            else:
                hass.data[DOMAIN][DATA_AUTH] = {"authenticated": False}
                _LOGGER.info("🔄 Updated auth data (unauthenticated)")
                
        except Exception as err:
            _LOGGER.error("❌ Error updating exposed auth data: %s", err)

    return update_exposed_data


async def async_unload_entry(hass: HomeAssistant, entry: ConfigEntry) -> bool:
    """Unload a config entry. Panel stays registered (registered in async_setup) until integration is uninstalled."""
    if unload_ok := await hass.config_entries.async_unload_platforms(entry, PLATFORMS):
        hass.data[DOMAIN].pop(entry.entry_id)
        # Clear exposed auth data
        if DATA_AUTH in hass.data[DOMAIN]:
            hass.data[DOMAIN][DATA_AUTH] = {"authenticated": False}

    return unload_ok


async def async_reload_entry(hass: HomeAssistant, entry: ConfigEntry) -> None:
    """Reload config entry."""
    await async_unload_entry(hass, entry)
    await async_setup_entry(hass, entry)

