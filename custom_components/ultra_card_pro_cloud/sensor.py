"""Sensor platform for Ultra Card Pro Cloud."""
from __future__ import annotations

import logging
from typing import Any

from homeassistant.components.sensor import (
    SensorEntity,
    SensorDeviceClass,
)
from homeassistant.config_entries import ConfigEntry
from homeassistant.core import HomeAssistant, callback
from homeassistant.helpers.entity import EntityCategory
from homeassistant.helpers.entity_platform import AddEntitiesCallback
from homeassistant.helpers.update_coordinator import CoordinatorEntity

from .const import DOMAIN, DATA_COORDINATOR, INTEGRATION_CAPABILITIES
from .coordinator import UltraCardProCloudCoordinator

_LOGGER = logging.getLogger(__name__)


def _read_integration_version() -> str:
    """Read version from manifest.json (always present in HACS installs)."""
    import json
    import os

    manifest_path = os.path.join(os.path.dirname(__file__), "manifest.json")
    try:
        with open(manifest_path, encoding="utf-8") as handle:
            data = json.load(handle)
        version = data.get("version")
        if isinstance(version, str) and version.strip():
            return version.strip()
    except Exception:  # pragma: no cover - never break sensor setup
        _LOGGER.debug("Could not read integration version from manifest.json", exc_info=True)

    # Dev checkout fallback: repo-root version.py
    try:
        version_file = os.path.join(os.path.dirname(__file__), "..", "..", "version.py")
        if os.path.exists(version_file):
            with open(version_file, encoding="utf-8") as handle:
                for line in handle:
                    if line.startswith("__version__"):
                        return line.split("=", 1)[1].strip().strip('"').strip("'")
    except Exception:  # pragma: no cover
        pass
    return "0.0.0"


INTEGRATION_VERSION = _read_integration_version()


async def async_setup_entry(
    hass: HomeAssistant,
    entry: ConfigEntry,
    async_add_entities: AddEntitiesCallback,
) -> None:
    """Set up Ultra Card Pro Cloud sensor."""
    coordinator: UltraCardProCloudCoordinator = hass.data[DOMAIN][entry.entry_id][
        DATA_COORDINATOR
    ]

    async_add_entities([UltraCardProCloudAuthSensor(coordinator, entry)])


class UltraCardProCloudAuthSensor(CoordinatorEntity, SensorEntity):
    """Sensor that exposes Ultra Card Pro Cloud authentication status.
    
    This sensor is protected and cannot be manipulated by users.
    It serves as the authoritative source for PRO feature unlocking.
    """

    _attr_has_entity_name = True
    _attr_entity_category = EntityCategory.DIAGNOSTIC
    _attr_device_class = SensorDeviceClass.ENUM
    _attr_options = ["connected", "disconnected", "authenticating"]
    _attr_translation_key = "auth_status"
    _attr_icon = "mdi:cloud"

    def __init__(
        self,
        coordinator: UltraCardProCloudCoordinator,
        entry: ConfigEntry,
    ) -> None:
        """Initialize the sensor."""
        super().__init__(coordinator)
        
        self._attr_unique_id = f"{entry.entry_id}_auth_status"
        self._attr_name = "Authentication Status"
        
        # This makes the entity ID predictable: sensor.ultra_card_pro_cloud_authentication_status
        self.entity_id = "sensor.ultra_card_pro_cloud_authentication_status"

    @property
    def native_value(self) -> str:
        """Return the state of the sensor."""
        if not self.coordinator.data:
            return "disconnected"
        
        if self.coordinator.data.get("authenticated"):
            return "connected"
        
        return "disconnected"

    @property
    def extra_state_attributes(self) -> dict[str, Any]:
        """Return the state attributes.
        
        These attributes contain the PRO subscription data that
        Ultra Card will use to unlock PRO features.
        
        SECURITY: This data comes from the authenticated API and
        cannot be manipulated by users through the frontend.

        Always includes integration_version + capabilities so Ultra Card
        can detect outdated Connect installs even when signed out.
        """
        handshake = {
            "integration_version": INTEGRATION_VERSION,
            "capabilities": dict(INTEGRATION_CAPABILITIES),
        }

        if not self.coordinator.data or not self.coordinator.data.get("authenticated"):
            return {
                **handshake,
                "authenticated": False,
                "subscription_tier": "free",
                "subscription_status": "expired",
                "needs_reauth": bool(
                    getattr(self.coordinator, "_reauth_requested", False)
                ),
                "last_poll": None,
            }

        subscription = self.coordinator.data.get("subscription", {})
        
        # Get user data with fallbacks
        username = self.coordinator.data.get("username") or "User"
        display_name = self.coordinator.data.get("display_name") or username
        
        # Do NOT expose token in entity state; frontend uses integration proxy for API calls
        return {
            **handshake,
            "authenticated": True,
            "user_id": self.coordinator.data.get("user_id"),
            "username": username,
            "email": self.coordinator.data.get("email") or "",
            "display_name": display_name,
            "subscription_tier": subscription.get("tier", "free"),
            "subscription_status": subscription.get("status", "expired"),
            "subscription_expires": subscription.get("expires"),
            "connected_at": self.coordinator.data.get("connected_at"),
            "last_poll": self.coordinator.data.get("last_poll"),
            "needs_reauth": bool(
                getattr(self.coordinator, "_reauth_requested", False)
            ),
            "features": subscription.get("features", {}),
        }


    @property
    def available(self) -> bool:
        """Return if entity is available."""
        return self.coordinator.last_update_success

    @callback
    def _handle_coordinator_update(self) -> None:
        """Handle updated data from the coordinator."""
        self.async_write_ha_state()
        _LOGGER.debug(
            "Auth sensor updated: %s (authenticated: %s)",
            self.native_value,
            self.coordinator.data.get("authenticated") if self.coordinator.data else False,
        )

