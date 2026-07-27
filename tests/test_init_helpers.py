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


def test_normalize_smart_connector_preference() -> None:
    assert helpers.normalize_smart_connector_preference("ha_assist") == "ha_assist"
    assert helpers.normalize_smart_connector_preference("USER_PROVIDER") == "user_provider"
    assert helpers.normalize_smart_connector_preference("unknown") == "auto"


def test_extract_conversation_text_from_nested_payload() -> None:
    payload = {
        "response": {
            "speech": {"plain": {"speech": "Lights are now on"}}
        }
    }
    assert helpers.extract_conversation_text(payload) == "Lights are now on"


def test_build_local_smart_preset_contract_shape() -> None:
    result = helpers.build_local_smart_preset(
        prompt="Build me a kitchen dashboard",
        tier="free",
        connector_used="ha_assist",
        warnings=["fallback"],
    )
    assert "smart_preset" in result
    assert "generation" in result
    assert result["smart_preset"]["category"] == "layouts"
    assert result["generation"]["connector_used"] == "ha_assist"
    assert result["generation"]["tier_required"] == "free"


def test_merge_smart_status_merges_nested_objects() -> None:
    base = {
        "available": {"ha_assist": True, "user_provider": False, "cloud_default": False},
        "limits": {"free_daily_generations": 5, "free_remaining": 3},
    }
    upstream = {
        "available": {"user_provider": True},
        "limits": {"free_remaining": 2},
        "default_connector": "ha_assist",
    }
    merged = helpers.merge_smart_status(base, upstream)
    assert merged["available"]["ha_assist"] is True
    assert merged["available"]["user_provider"] is True
    assert merged["limits"]["free_daily_generations"] == 5
    assert merged["limits"]["free_remaining"] == 2


def test_build_smart_tier_access_contract_shape() -> None:
    access = helpers.build_smart_tier_access(
        is_pro_user=False,
        free_daily_generations=5,
        free_remaining=1,
    )
    assert access["can_generate_free"] is True
    assert access["can_generate_pro"] is False
    assert access["is_pro_user"] is False
    assert access["free_daily_generations"] == 5
    assert access["free_remaining"] == 1
