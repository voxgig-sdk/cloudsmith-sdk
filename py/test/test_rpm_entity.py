# Rpm entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from cloudsmith_sdk import CloudsmithSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestRpmEntity:

    def test_should_create_instance(self):
        testsdk = CloudsmithSDK.test(None, None)
        ent = testsdk.Rpm(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _rpm_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "rpm." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDSMITH_TEST_RPM_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        rpm_ref01_ent = client.Rpm(None)
        rpm_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.rpm"), "rpm_ref01"))
        rpm_ref01_data["identifier"] = setup["idmap"]["identifier01"]
        rpm_ref01_data["owner"] = setup["idmap"]["owner01"]

        rpm_ref01_data = helpers.to_map(rpm_ref01_ent.create(rpm_ref01_data, None))
        assert rpm_ref01_data is not None

        # LIST
        rpm_ref01_match = {
            "identifier": setup["idmap"]["identifier01"],
            "owner": setup["idmap"]["owner01"],
        }

        rpm_ref01_list_result = rpm_ref01_ent.list(rpm_ref01_match, None)
        assert isinstance(rpm_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(rpm_ref01_list_result),
            {"id": rpm_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        rpm_ref01_data_up0_up = {
            "identifier": setup["idmap"]["identifier"],
            "owner": setup["idmap"]["owner"],
        }

        rpm_ref01_markdef_up0_name = "auth_mode"
        rpm_ref01_markdef_up0_value = "Mark01-rpm_ref01_" + str(setup["now"])
        rpm_ref01_data_up0_up[rpm_ref01_markdef_up0_name] = rpm_ref01_markdef_up0_value

        rpm_ref01_resdata_up0 = helpers.to_map(rpm_ref01_ent.update(rpm_ref01_data_up0_up, None))
        assert rpm_ref01_resdata_up0 is not None
        assert rpm_ref01_resdata_up0[rpm_ref01_markdef_up0_name] == rpm_ref01_markdef_up0_value

        # LOAD
        rpm_ref01_match_dt0 = {}
        rpm_ref01_data_dt0_loaded = rpm_ref01_ent.load(rpm_ref01_match_dt0, None)
        assert rpm_ref01_data_dt0_loaded is not None



def _rpm_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/rpm/RpmTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudsmithSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["rpm01", "rpm02", "rpm03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"],
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
        "CLOUDSMITH_TEST_RPM_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDSMITH_TEST_RPM_ENTID": idmap,
        "CLOUDSMITH_TEST_LIVE": "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN": "FALSE",
        "CLOUDSMITH_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDSMITH_TEST_RPM_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("identifier") is None:
        idmap_resolved["identifier"] = idmap_resolved.get("identifier01")
    if idmap_resolved.get("owner") is None:
        idmap_resolved["owner"] = idmap_resolved.get("owner01")

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
