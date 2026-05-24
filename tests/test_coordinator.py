"""Tests for coordinator helpers."""

import time

from conftest import load_module

jwt_utils = load_module("uc_jwt_utils", "jwt_utils.py")
parse_jwt_expiry = jwt_utils.parse_jwt_expiry


def _make_jwt(payload: dict) -> str:
    import base64
    import json

    header = base64.urlsafe_b64encode(json.dumps({"alg": "none"}).encode()).decode().rstrip("=")
    body = base64.urlsafe_b64encode(json.dumps(payload).encode()).decode().rstrip("=")
    return f"{header}.{body}.signature"


def test_parse_jwt_expiry_reads_exp_claim() -> None:
    exp = int(time.time()) + 3600
    token = _make_jwt({"exp": exp})
    assert parse_jwt_expiry(token) == exp


def test_parse_jwt_expiry_returns_none_for_invalid_token() -> None:
    assert parse_jwt_expiry("not-a-jwt") is None
