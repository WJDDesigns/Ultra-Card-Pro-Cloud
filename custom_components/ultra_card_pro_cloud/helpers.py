"""Pure helper utilities without Home Assistant dependencies."""

from __future__ import annotations

import json
import re


def safe_upload_filename(name: str) -> str:
    """ASCII-only filename for multipart uploads."""
    sanitized = re.sub(r"[^A-Za-z0-9._-]", "_", (name or "").strip())
    return (sanitized or "upload.png")[:180]


def normalize_proxy_payload(body: dict) -> dict | None:
    """Extract inner proxy payload from HA HTTP/WS bodies."""
    if not isinstance(body, dict):
        return None
    payload = body.get("body")
    if payload is None and isinstance(body.get("data"), dict):
        payload = body["data"]
    if payload is None and "__media_upload_b64" in body:
        payload = {"__media_upload_b64": body["__media_upload_b64"]}
    if isinstance(payload, str):
        try:
            payload = json.loads(payload)
        except Exception:
            return None
    if payload is None:
        return None
    if not isinstance(payload, dict):
        return None
    for _ in range(4):
        if "__media_upload_b64" in payload:
            return payload
        if "body" in payload:
            inner = payload["body"]
            if isinstance(inner, str):
                try:
                    inner = json.loads(inner)
                except Exception:
                    return None
            payload = inner
            if not isinstance(payload, dict):
                return None
            continue
        break
    return payload


def extract_user_colors(data: dict | None, user_id: str | None) -> list[dict]:
    """Return per-user colors with fallback to legacy global storage."""
    if not isinstance(data, dict):
        return []

    if user_id:
        users = data.get("users")
        if isinstance(users, dict):
            user_bucket = users.get(user_id)
            if isinstance(user_bucket, dict):
                colors = user_bucket.get("colors")
                if isinstance(colors, list):
                    return colors

    colors = data.get("colors")
    return colors if isinstance(colors, list) else []


def store_user_colors(data: dict | None, user_id: str | None, colors: list[dict]) -> dict:
    """Persist per-user colors while preserving legacy/global keys."""
    next_data = dict(data) if isinstance(data, dict) else {}

    if not user_id:
        next_data["colors"] = colors
        return next_data

    users = next_data.get("users")
    if not isinstance(users, dict):
        users = {}

    user_bucket = users.get(user_id)
    if not isinstance(user_bucket, dict):
        user_bucket = {}

    user_bucket["colors"] = colors
    users[user_id] = user_bucket
    next_data["users"] = users
    return next_data
