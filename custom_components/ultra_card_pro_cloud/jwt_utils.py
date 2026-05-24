"""JWT helpers without Home Assistant dependencies."""

from __future__ import annotations

import base64
import json as json_module
import logging
import time

_LOGGER = logging.getLogger(__name__)


def parse_jwt_expiry(token: str) -> int | None:
    """Parse the expiry timestamp from a JWT token."""
    try:
        parts = token.split(".")
        if len(parts) != 3:
            _LOGGER.debug("Invalid JWT format - expected 3 parts, got %d", len(parts))
            return None

        payload_b64 = parts[1]
        padding = 4 - len(payload_b64) % 4
        if padding != 4:
            payload_b64 += "=" * padding

        payload_bytes = base64.urlsafe_b64decode(payload_b64)
        payload = json_module.loads(payload_bytes.decode("utf-8"))

        exp = payload.get("exp")
        if exp:
            _LOGGER.debug(
                "Parsed JWT expiry: %s (in %d seconds)",
                exp,
                exp - int(time.time()),
            )
            return int(exp)

        _LOGGER.debug("No 'exp' claim found in JWT payload")
        return None

    except Exception as err:
        _LOGGER.debug("Failed to parse JWT expiry: %s", err)
        return None
