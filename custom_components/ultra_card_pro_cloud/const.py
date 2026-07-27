"""Constants for the Ultra Card Connect integration."""

DOMAIN = "ultra_card_pro_cloud"

# API Configuration
API_BASE_URL = "https://ultracard.io/wp-json"
JWT_ENDPOINT = "/jwt-auth/v1"
SUBSCRIPTION_ENDPOINT = "/ultra-card/v1/subscription"

# Update intervals
TOKEN_REFRESH_INTERVAL = 3300  # 55 minutes (refresh before 1 hour expiry)

# Proxy hardening — only these API paths may be forwarded with the shared JWT
PROXY_ALLOWED_METHODS = frozenset({"GET", "POST", "PUT", "DELETE"})
PROXY_ALLOWED_PATH_PREFIXES = (
    "/jwt-auth/v1",
    "/ultra-card/v1",
    "/wp/v2/users/me",
)

# Grace period - maintain Pro access during server outages
GRACE_PERIOD_HOURS = 24  # Hours to maintain Pro access when server is unreachable

# Config entry keys
CONF_USERNAME = "username"
CONF_PASSWORD = "password"

# Data keys
DATA_COORDINATOR = "coordinator"
DATA_AUTH = "auth_data"

# Error messages
ERROR_INVALID_AUTH = "invalid_auth"
ERROR_CANNOT_CONNECT = "cannot_connect"
ERROR_UNKNOWN = "unknown"

# Panel (Ultra Card Hub sidebar)
# Served directly from this integration's www/ folder — no dependency on the
# Ultra Card HACS frontend card being installed separately.
PANEL_URL_PATH = "ultra-card-hub"
PANEL_STATIC_URL_PATH = "/ultra_card_pro_cloud_panel"
PANEL_JS_URL = "/ultra_card_pro_cloud_panel/ultra-card-panel.js"
PANEL_CUSTOM_ELEMENT = "ultra-card-panel"

# Integration capability flags exposed on the auth sensor for Ultra Card handshake.
# Add a key (always True while shipped) whenever a new REST surface is introduced.
CAPABILITY_FAVORITE_COLORS = "favorite_colors"
CAPABILITY_PROXY = "proxy"
CAPABILITY_MEDIA_UPLOAD = "media_upload"
CAPABILITY_SMART = "smart"

INTEGRATION_CAPABILITIES: dict[str, bool] = {
    CAPABILITY_FAVORITE_COLORS: True,
    CAPABILITY_PROXY: True,
    CAPABILITY_MEDIA_UPLOAD: True,
    CAPABILITY_SMART: True,
    "diagnostics": True,
}


def is_proxy_url_allowed(url: str) -> bool:
    """Return True when url is an allowed ultracard.io API endpoint."""
    if not url or not url.startswith(API_BASE_URL):
        return False
    path = url[len(API_BASE_URL) :]
    if "?" in path:
        path = path.split("?", 1)[0]
    if not path.startswith("/"):
        path = f"/{path}"
    return any(
        path == prefix or path.startswith(f"{prefix}/")
        for prefix in PROXY_ALLOWED_PATH_PREFIXES
    )

