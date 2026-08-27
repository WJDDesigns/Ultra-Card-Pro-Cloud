"""Detection for edge bot-protection challenges in front of ultracard.io.

Kept free of Home Assistant imports so it can be unit tested standalone.

User-facing copy must stay generic. Do not name the host, CDN, WAF, or the
remediation in logs, diagnostics, or changelog notes.
"""

from __future__ import annotations

from typing import Any, Mapping

BOT_CHALLENGE_MESSAGE = (
    "Can't reach Ultra Card cloud right now. Please try again in a few minutes. "
    "If this keeps happening, contact support."
)

CHALLENGE_HEADER = "sg-captcha"

BODY_MARKERS = (
    "sgcaptcha",
    "/.well-known/captcha",
    "robot challenge screen",
    "checking the site connection security",
)

# Only inspect the start of the body; challenge pages declare themselves early
# and API error payloads are small.
_BODY_SCAN_LIMIT = 2000


def is_bot_challenge_response(headers: Mapping[str, Any], body: str) -> bool:
    """Return True when headers/body describe an edge bot-protection challenge."""
    if headers.get(CHALLENGE_HEADER):
        return True
    content_type = str(headers.get("Content-Type") or headers.get("content-type") or "")
    if "html" not in content_type.lower():
        return False
    lowered = (body or "")[:_BODY_SCAN_LIMIT].lower()
    return any(marker in lowered for marker in BODY_MARKERS)


def is_bot_challenge(response: Any, body: str) -> bool:
    """Return True when an aiohttp response is a bot-protection challenge page."""
    return is_bot_challenge_response(response.headers, body)
