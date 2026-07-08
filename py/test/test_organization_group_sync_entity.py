# OrganizationGroupSync entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from cloudsmith_sdk import CloudsmithSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestOrganizationGroupSyncEntity:

    def test_should_create_instance(self):
        testsdk = CloudsmithSDK.test(None, None)
        ent = testsdk.OrganizationGroupSync(None)
        assert ent is not None

    def test_should_run_basic_flow(self):
        setup = _organization_group_sync_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "organization_group_sync." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDSMITH_TEST_ORGANIZATION_GROUP_SYNC_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        organization_group_sync_ref01_ent = client.OrganizationGroupSync(None)
        organization_group_sync_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.organization_group_sync"), "organization_group_sync_ref01"))
        organization_group_sync_ref01_data["org_id"] = setup["idmap"]["org01"]

        organization_group_sync_ref01_data = helpers.to_map(organization_group_sync_ref01_ent.create(organization_group_sync_ref01_data, None))
        assert organization_group_sync_ref01_data is not None

        # LIST
        organization_group_sync_ref01_match = {
            "org_id": setup["idmap"]["org01"],
        }

        organization_group_sync_ref01_list_result = organization_group_sync_ref01_ent.list(organization_group_sync_ref01_match, None)
        assert isinstance(organization_group_sync_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(organization_group_sync_ref01_list_result),
            {"id": organization_group_sync_ref01_data["id"]})
        assert not vs.isempty(found_item)



def _organization_group_sync_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/organization_group_sync/OrganizationGroupSyncTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudsmithSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["organization_group_sync01", "organization_group_sync02", "organization_group_sync03", "org01", "org02", "org03"],
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
        "CLOUDSMITH_TEST_ORGANIZATION_GROUP_SYNC_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDSMITH_TEST_ORGANIZATION_GROUP_SYNC_ENTID": idmap,
        "CLOUDSMITH_TEST_LIVE": "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN": "FALSE",
        "CLOUDSMITH_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDSMITH_TEST_ORGANIZATION_GROUP_SYNC_ENTID"))
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
