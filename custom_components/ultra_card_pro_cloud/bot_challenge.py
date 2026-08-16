"""Detection for edge bot-protection challenges in front of ultracard.io.

SiteGround's Anti-Bot AI (and comparable CDN/WAF products) answer with an HTML
JavaScript proof-of-work page instead of the API response — typically HTTP 202
carrying an ``sg-captcha: challenge`` header. The request never reaches
WordPress, so no credential, token, or plugin change can help, and retrying only
pushes the classifier to escalate. Detecting this lets the integration report the
real cause instead of blaming the user's password.

Kept free of Home Assistant imports so it can be unit tested standalone.
"""

from __future__ import annotations

from typing import Any, Mapping

BOT_CHALLENGE_MESSAGE = (
    "ultracard.io is serving a bot-protection challenge (SiteGround Anti-Bot AI) "
    "instead of the REST API. The request is blocked at the CDN before WordPress "
    "sees it, and Home Assistant cannot solve a JavaScript challenge. Ask "
    "SiteGround support to disable Anti-Bot AI for ultracard.io, or to exempt "
    "/wp-json/ from it."
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
