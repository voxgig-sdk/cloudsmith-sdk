# Org entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from cloudsmith_sdk import CloudsmithSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestOrgEntity:

    def test_should_create_instance(self):
        testsdk = CloudsmithSDK.test(None, None)
        ent = testsdk.Org(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "org": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = CloudsmithSDK.test(seed, None)
        seen = list(base.Org(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from config import make_config
        cfg = make_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = CloudsmithSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Org(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _org_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "org." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDSMITH_TEST_ORG_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        org_ref01_ent = client.Org(None)
        org_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.org"), "org_ref01"))
        org_ref01_data["org"] = setup["idmap"]["org01"]

        org_ref01_data = helpers.to_map(org_ref01_ent.create(org_ref01_data, None))
        assert org_ref01_data is not None

        # LIST
        org_ref01_match = {}

        org_ref01_list_result = org_ref01_ent.list(org_ref01_match, None)
        assert isinstance(org_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(org_ref01_list_result),
            {"id": org_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        org_ref01_data_up0_up = {
        }

        org_ref01_markdef_up0_name = "country"
        org_ref01_markdef_up0_value = "Mark01-org_ref01_" + str(setup["now"])
        org_ref01_data_up0_up[org_ref01_markdef_up0_name] = org_ref01_markdef_up0_value

        org_ref01_resdata_up0 = helpers.to_map(org_ref01_ent.update(org_ref01_data_up0_up, None))
        assert org_ref01_resdata_up0 is not None
        assert org_ref01_resdata_up0[org_ref01_markdef_up0_name] == org_ref01_markdef_up0_value

        # LOAD
        org_ref01_match_dt0 = {}
        org_ref01_data_dt0_loaded = org_ref01_ent.load(org_ref01_match_dt0, None)
        assert org_ref01_data_dt0_loaded is not None

        # REMOVE
        org_ref01_match_rm0 = {
            "id": org_ref01_data["id"],
        }
        org_ref01_ent.remove(org_ref01_match_rm0, None)

        # LIST
        org_ref01_match_rt0 = {}

        org_ref01_list_rt0_result = org_ref01_ent.list(org_ref01_match_rt0, None)
        assert isinstance(org_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(org_ref01_list_rt0_result),
            {"id": org_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _org_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/org/OrgTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudsmithSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["org01", "org02", "org03", "deny_policy01", "deny_policy02", "deny_policy03", "invite01", "invite02", "invite03", "license_policy01", "license_policy02", "license_policy03", "member01", "member02", "member03", "openid_connect01", "openid_connect02", "openid_connect03", "saml_group_sync01", "saml_group_sync02", "saml_group_sync03", "service01", "service02", "service03", "team01", "team02", "team03", "vulnerability_policy01", "vulnerability_policy02", "vulnerability_policy03"],
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
        "CLOUDSMITH_TEST_ORG_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDSMITH_TEST_ORG_ENTID": idmap,
        "CLOUDSMITH_TEST_LIVE": "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN": "FALSE",
        "CLOUDSMITH_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDSMITH_TEST_ORG_ENTID"))
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
