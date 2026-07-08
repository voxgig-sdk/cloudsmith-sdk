# UserAuthenticationToken entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from cloudsmith_sdk import CloudsmithSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestUserAuthenticationTokenEntity:

    def test_should_create_instance(self):
        testsdk = CloudsmithSDK.test(None, None)
        ent = testsdk.UserAuthenticationToken(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _user_authentication_token_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "user_authentication_token." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        user_authentication_token_ref01_ent = client.UserAuthenticationToken(None)
        user_authentication_token_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.user_authentication_token"), "user_authentication_token_ref01"))

        user_authentication_token_ref01_data = helpers.to_map(user_authentication_token_ref01_ent.create(user_authentication_token_ref01_data, None))
        assert user_authentication_token_ref01_data is not None

        # UPDATE
        user_authentication_token_ref01_data_up0_up = {
        }

        user_authentication_token_ref01_markdef_up0_name = "created"
        user_authentication_token_ref01_markdef_up0_value = "Mark01-user_authentication_token_ref01_" + str(setup["now"])
        user_authentication_token_ref01_data_up0_up[user_authentication_token_ref01_markdef_up0_name] = user_authentication_token_ref01_markdef_up0_value

        user_authentication_token_ref01_resdata_up0 = helpers.to_map(user_authentication_token_ref01_ent.update(user_authentication_token_ref01_data_up0_up, None))
        assert user_authentication_token_ref01_resdata_up0 is not None
        assert user_authentication_token_ref01_resdata_up0[user_authentication_token_ref01_markdef_up0_name] == user_authentication_token_ref01_markdef_up0_value



def _user_authentication_token_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/user_authentication_token/UserAuthenticationTokenTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudsmithSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["user_authentication_token01", "user_authentication_token02", "user_authentication_token03", "token01", "token02", "token03"],
        {
            "`$PACK`": ["", {
                "`$KEY`": "`$COPY`",
                "`$VAL`": ["`$FORMAT`", "upper", "`$COPY`"],
            }],
        }
    )

    # Detect ENTID env override before envOverride consumes it. When live
    # mode is on without a real override, the basic test runs against synthetic
    # IDs from the fixture and 4xx's. We surface this so the test can skip.
    _entid_env_raw = os.environ.get(
        "CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID": idmap,
        "CLOUDSMITH_TEST_LIVE": "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN": "FALSE",
        "CLOUDSMITH_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)

    if env.get("CLOUDSMITH_TEST_LIVE") == "TRUE":
        merged_opts = vs.merge([
            {
                "apikey": env.get("CLOUDSMITH_APIKEY"),
            },
            extra or {},
        ])
        client = CloudsmithSDK(helpers.to_map(merged_opts))

    _live = env.get("CLOUDSMITH_TEST_LIVE") == "TRUE"
    return {
        "client": client,
        "data": entity_data,
        "idmap": idmap_resolved,
        "env": env,
        "explain": env.get("CLOUDSMITH_TEST_EXPLAIN") == "TRUE",
        "live": _live,
        "synthetic_only": _live and not _idmap_overridden,
        "now": int(time.time() * 1000),
    }
