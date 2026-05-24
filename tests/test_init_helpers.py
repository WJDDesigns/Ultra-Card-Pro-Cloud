"""Tests for HTTP helper utilities."""

from conftest import load_module

helpers = load_module("uc_helpers", "helpers.py")


def test_normalize_proxy_payload_unwraps_nested_body() -> None:
    payload = helpers.normalize_proxy_payload(
        {"body": {"body": {"__media_upload_b64": {"data": "abc", "filename": "x.png"}}}}
    )
    assert payload == {"__media_upload_b64": {"data": "abc", "filename": "x.png"}}


def test_safe_upload_filename_sanitizes_invalid_chars() -> None:
    assert helpers.safe_upload_filename("my photo!.png") == "my_photo_.png"


def test_extract_and_store_user_colors_round_trip() -> None:
    stored = helpers.store_user_colors(
        None,
        "user-1",
        [{"id": "1", "name": "Primary", "color": "#fff", "order": 0}],
    )
    colors = helpers.extract_user_colors(stored, "user-1")
    assert len(colors) == 1
    assert colors[0]["name"] == "Primary"
