# OrganizationMembership entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from cloudsmith_sdk import CloudsmithSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestOrganizationMembershipEntity:

    def test_should_create_instance(self):
        testsdk = CloudsmithSDK.test(None, None)
        ent = testsdk.OrganizationMembership(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _organization_membership_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["list", "update", "load"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "organization_membership." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID JSON to run live")
        client = setup["client"]

        # Bootstrap entity data from existing test data.
        organization_membership_ref01_data_raw = vs.items(helpers.to_map(
            vs.getpath(setup["data"], "existing.organization_membership")))
        organization_membership_ref01_data = None
        if len(organization_membership_ref01_data_raw) > 0:
            organization_membership_ref01_data = helpers.to_map(organization_membership_ref01_data_raw[0][1])

        # LIST
        organization_membership_ref01_ent = client.OrganizationMembership(None)
        organization_membership_ref01_match = {
            "org_id": setup["idmap"]["org01"],
        }

        organization_membership_ref01_list_result = organization_membership_ref01_ent.list(organization_membership_ref01_match, None)
        assert isinstance(organization_membership_ref01_list_result, list)

        # UPDATE
        organization_membership_ref01_data_up0_up = {
            "org_id": setup["idmap"]["org_id"],
        }

        organization_membership_ref01_markdef_up0_name = "email"
        organization_membership_ref01_markdef_up0_value = "Mark01-organization_membership_ref01_" + str(setup["now"])
        organization_membership_ref01_data_up0_up[organization_membership_ref01_markdef_up0_name] = organization_membership_ref01_markdef_up0_value

        organization_membership_ref01_resdata_up0 = helpers.to_map(organization_membership_ref01_ent.update(organization_membership_ref01_data_up0_up, None))
        assert organization_membership_ref01_resdata_up0 is not None
        assert organization_membership_ref01_resdata_up0[organization_membership_ref01_markdef_up0_name] == organization_membership_ref01_markdef_up0_value

        # LOAD
        organization_membership_ref01_match_dt0 = {}
        organization_membership_ref01_data_dt0_loaded = organization_membership_ref01_ent.load(organization_membership_ref01_match_dt0, None)
        assert organization_membership_ref01_data_dt0_loaded is not None



def _organization_membership_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/organization_membership/OrganizationMembershipTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudsmithSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["organization_membership01", "organization_membership02", "organization_membership03", "org01", "org02", "org03", "member01", "member02", "member03"],
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
        "CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID": idmap,
        "CLOUDSMITH_TEST_LIVE": "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN": "FALSE",
        "CLOUDSMITH_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("org_id") is None:
        idmap_resolved["org_id"] = idmap_resolved.get("org01")

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
