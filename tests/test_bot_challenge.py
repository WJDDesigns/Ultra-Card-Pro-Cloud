"""Tests for edge bot-protection challenge detection."""

from conftest import load_module

bot_challenge = load_module("uc_bot_challenge", "bot_challenge.py")
is_bot_challenge_response = bot_challenge.is_bot_challenge_response

# Verbatim body SiteGround returned for https://ultracard.io/wp-json/ while the
# Anti-Bot AI was challenging Home Assistant.
SG_CHALLENGE_BODY = (
    '<html><head><link rel="icon" href="data:;">'
    '<meta http-equiv="refresh" content="0;/.well-known/sgcaptcha/'
    '?r=%2Fwp-json%2F&y=ipc:203.0.113.10:1786914264.781"></meta></head></html>'
)


def test_detects_sg_captcha_header() -> None:
    headers = {"sg-captcha": "challenge", "Content-Type": "text/html"}
    assert is_bot_challenge_response(headers, SG_CHALLENGE_BODY) is True


def test_detects_challenge_body_without_header() -> None:
    """Other SiteGround edges omit the header but still serve the challenge."""
    headers = {"Content-Type": "text/html; charset=UTF-8"}
    assert is_bot_challenge_response(headers, SG_CHALLENGE_BODY) is True


def test_detects_robot_challenge_screen() -> None:
    headers = {"Content-Type": "text/html"}
    body = "<html><head><title>Robot Challenge Screen</title></head></html>"
    assert is_bot_challenge_response(headers, body) is True


def test_ignores_valid_json_token_response() -> None:
    headers = {"Content-Type": "application/json"}
    body = '{"token":"a.b.c","user_id":1,"refresh_token":"abc123"}'
    assert is_bot_challenge_response(headers, body) is False


def test_ignores_genuine_json_auth_error() -> None:
    """A real 403 from JWT Auth Pro must not be mistaken for bot protection."""
    headers = {"Content-Type": "application/json"}
    body = '{"code":"jwt_auth_invalid_token","message":"Wrong number of segments"}'
    assert is_bot_challenge_response(headers, body) is False


def test_ignores_html_that_is_not_a_challenge() -> None:
    headers = {"Content-Type": "text/html"}
    body = "<html><body><h1>502 Bad Gateway</h1></body></html>"
    assert is_bot_challenge_response(headers, body) is False


def test_handles_empty_body() -> None:
    assert is_bot_challenge_response({"Content-Type": "text/html"}, "") is False


def test_handles_lowercase_content_type_key() -> None:
    headers = {"content-type": "text/html"}
    assert is_bot_challenge_response(headers, SG_CHALLENGE_BODY) is True
