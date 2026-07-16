# RepositoryWebhook entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from cloudsmith_sdk import CloudsmithSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestRepositoryWebhookEntity:

    def test_should_create_instance(self):
        testsdk = CloudsmithSDK.test(None, None)
        ent = testsdk.RepositoryWebhook(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "repository_webhook": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = CloudsmithSDK.test(seed, None)
        seen = list(base.RepositoryWebhook(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from config import make_config
        cfg = make_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = CloudsmithSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.RepositoryWebhook(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _repository_webhook_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "repository_webhook." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        repository_webhook_ref01_ent = client.RepositoryWebhook(None)
        repository_webhook_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.repository_webhook"), "repository_webhook_ref01"))
        repository_webhook_ref01_data["identifier"] = setup["idmap"]["identifier01"]
        repository_webhook_ref01_data["owner"] = setup["idmap"]["owner01"]
        repository_webhook_ref01_data["repo"] = setup["idmap"]["repo01"]

        repository_webhook_ref01_data = helpers.to_map(repository_webhook_ref01_ent.create(repository_webhook_ref01_data, None))
        assert repository_webhook_ref01_data is not None

        # LIST
        repository_webhook_ref01_match = {
            "identifier": setup["idmap"]["identifier01"],
            "owner": setup["idmap"]["owner01"],
            "repo": setup["idmap"]["repo01"],
        }

        repository_webhook_ref01_list_result = repository_webhook_ref01_ent.list(repository_webhook_ref01_match, None)
        assert isinstance(repository_webhook_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(repository_webhook_ref01_list_result),
            {"id": repository_webhook_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        repository_webhook_ref01_data_up0_up = {
            "owner": setup["idmap"]["owner"],
            "repo": setup["idmap"]["repo"],
        }

        repository_webhook_ref01_markdef_up0_name = "created_at"
        repository_webhook_ref01_markdef_up0_value = "Mark01-repository_webhook_ref01_" + str(setup["now"])
        repository_webhook_ref01_data_up0_up[repository_webhook_ref01_markdef_up0_name] = repository_webhook_ref01_markdef_up0_value

        repository_webhook_ref01_resdata_up0 = helpers.to_map(repository_webhook_ref01_ent.update(repository_webhook_ref01_data_up0_up, None))
        assert repository_webhook_ref01_resdata_up0 is not None
        assert repository_webhook_ref01_resdata_up0[repository_webhook_ref01_markdef_up0_name] == repository_webhook_ref01_markdef_up0_value



def _repository_webhook_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/repository_webhook/RepositoryWebhookTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudsmithSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["repository_webhook01", "repository_webhook02", "repository_webhook03", "webhook01", "webhook02", "webhook03", "identifier01", "owner01", "repo01"],
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
        "CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID": idmap,
        "CLOUDSMITH_TEST_LIVE": "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN": "FALSE",
        "CLOUDSMITH_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
    if idmap_resolved.get("owner") is None:
        idmap_resolved["owner"] = idmap_resolved.get("owner01")
    if idmap_resolved.get("repo") is None:
        idmap_resolved["repo"] = idmap_resolved.get("repo01")

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
