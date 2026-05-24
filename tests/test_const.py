"""Tests for integration constants and proxy URL policy."""

from conftest import load_module

const = load_module("uc_const", "const.py")


def test_is_proxy_url_allowed_accepts_known_endpoints() -> None:
    assert const.is_proxy_url_allowed(
        f"{const.API_BASE_URL}/ultra-card/v1/subscription"
    )
    assert const.is_proxy_url_allowed(f"{const.API_BASE_URL}/jwt-auth/v1/token")
    assert const.is_proxy_url_allowed(
        f"{const.API_BASE_URL}/wp/v2/users/me?context=edit"
    )


def test_is_proxy_url_allowed_rejects_unknown_paths() -> None:
    assert not const.is_proxy_url_allowed(f"{const.API_BASE_URL}/wp/v2/posts")
    assert not const.is_proxy_url_allowed(
        "https://example.com/wp-json/ultra-card/v1/subscription"
    )
    assert not const.is_proxy_url_allowed("")
