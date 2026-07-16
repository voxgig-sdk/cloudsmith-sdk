# Repo entity test

import json
import os
import time

import pytest

from utility.voxgig_struct import voxgig_struct as vs
from cloudsmith_sdk import CloudsmithSDK
from core import helpers

_TEST_DIR = os.path.dirname(os.path.abspath(__file__))
from test import runner


class TestRepoEntity:

    def test_should_create_instance(self):
        testsdk = CloudsmithSDK.test(None, None)
        ent = testsdk.Repo(None)
        assert ent is not None

    def test_should_stream(self):
        # Feature #4: the entity stream(action, ...) method runs the op
        # pipeline and yields result items. With the streaming feature active
        # it yields the feature's incremental output; otherwise it falls back
        # to the materialised list so stream always yields.
        seed = {
            "entity": {
                "repo": {
                    "s1": {"id": "s1"},
                    "s2": {"id": "s2"},
                    "s3": {"id": "s3"},
                }
            }
        }

        # Fallback: streaming inactive -> yields the materialised list items.
        base = CloudsmithSDK.test(seed, None)
        seen = list(base.Repo(None).stream("list", None, None))
        assert len(seen) == 3

        # Inbound: streaming active -> yields each item from the feature.
        from config import make_config
        cfg = make_config()
        if isinstance(cfg.get("feature"), dict) and "streaming" in cfg["feature"]:
            sdk = CloudsmithSDK.test(
                seed, {"feature": {"streaming": {"active": True}}})
            got = []
            for item in sdk.Repo(None).stream("list", None, None):
                if isinstance(item, list):
                    got.extend(item)
                else:
                    got.append(item)
            assert len(got) == 3

    def test_should_run_basic_flow(self):
        setup = _repo_basic_setup(None)
        # Per-op sdk-test-control.json skip — basic test exercises a flow with
        # multiple ops; skipping any one skips the whole flow (steps depend
        # on each other).
        _live = setup.get("live", False)
        for _op in ["create", "list", "update", "load", "remove"]:
            _skip, _reason = runner.is_control_skipped("entityOp", "repo." + _op, "live" if _live else "unit")
            if _skip:
                pytest.skip(_reason or "skipped via sdk-test-control.json")
                return
        # The basic flow consumes synthetic IDs from the fixture. In live mode
        # without an *_ENTID env override, those IDs hit the live API and 4xx.
        if setup.get("synthetic_only"):
            pytest.skip("live entity test uses synthetic IDs from fixture — "
                        "set CLOUDSMITH_TEST_REPO_ENTID JSON to run live")
        client = setup["client"]

        # CREATE
        repo_ref01_ent = client.Repo(None)
        repo_ref01_data = helpers.to_map(vs.getprop(
            vs.getpath(setup["data"], "new.repo"), "repo_ref01"))
        repo_ref01_data["identifier"] = setup["idmap"]["identifier01"]
        repo_ref01_data["owner"] = setup["idmap"]["owner01"]

        repo_ref01_data = helpers.to_map(repo_ref01_ent.create(repo_ref01_data, None))
        assert repo_ref01_data is not None

        # LIST
        repo_ref01_match = {}

        repo_ref01_list_result = repo_ref01_ent.list(repo_ref01_match, None)
        assert isinstance(repo_ref01_list_result, list)

        found_item = vs.select(
            runner.entity_list_to_data(repo_ref01_list_result),
            {"id": repo_ref01_data["id"]})
        assert not vs.isempty(found_item)

        # UPDATE
        repo_ref01_data_up0_up = {
            "owner": setup["idmap"]["owner"],
        }

        repo_ref01_markdef_up0_name = "cdn_url"
        repo_ref01_markdef_up0_value = "Mark01-repo_ref01_" + str(setup["now"])
        repo_ref01_data_up0_up[repo_ref01_markdef_up0_name] = repo_ref01_markdef_up0_value

        repo_ref01_resdata_up0 = helpers.to_map(repo_ref01_ent.update(repo_ref01_data_up0_up, None))
        assert repo_ref01_resdata_up0 is not None
        assert repo_ref01_resdata_up0[repo_ref01_markdef_up0_name] == repo_ref01_markdef_up0_value

        # LOAD
        repo_ref01_match_dt0 = {}
        repo_ref01_data_dt0_loaded = repo_ref01_ent.load(repo_ref01_match_dt0, None)
        assert repo_ref01_data_dt0_loaded is not None

        # REMOVE
        repo_ref01_match_rm0 = {
            "id": repo_ref01_data["id"],
        }
        repo_ref01_ent.remove(repo_ref01_match_rm0, None)

        # LIST
        repo_ref01_match_rt0 = {}

        repo_ref01_list_rt0_result = repo_ref01_ent.list(repo_ref01_match_rt0, None)
        assert isinstance(repo_ref01_list_rt0_result, list)

        not_found_item = vs.select(
            runner.entity_list_to_data(repo_ref01_list_rt0_result),
            {"id": repo_ref01_data["id"]})
        assert vs.isempty(not_found_item)



def _repo_basic_setup(extra):
    runner.load_env_local()

    entity_data_file = os.path.join(_TEST_DIR, "../../.sdk/test/entity/repo/RepoTestData.json")
    with open(entity_data_file, "r") as f:
        entity_data_source = f.read()

    entity_data = json.loads(entity_data_source)

    options = {}
    options["entity"] = entity_data.get("existing")

    client = CloudsmithSDK.test(options, extra)

    # Generate idmap via transform.
    idmap = vs.transform(
        ["repo01", "repo02", "repo03", "cargo01", "cargo02", "cargo03", "composer01", "composer02", "composer03", "conda01", "conda02", "conda03", "cran01", "cran02", "cran03", "dart01", "dart02", "dart03", "deb01", "deb02", "deb03", "docker01", "docker02", "docker03", "go01", "go02", "go03", "helm01", "helm02", "helm03", "hex01", "hex02", "hex03", "huggingface01", "huggingface02", "huggingface03", "maven01", "maven02", "maven03", "npm01", "npm02", "npm03", "nuget01", "nuget02", "nuget03", "python01", "python02", "python03", "rpm01", "rpm02", "rpm03", "ruby01", "ruby02", "ruby03", "swift01", "swift02", "swift03", "identifier01", "owner01"],
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
        "CLOUDSMITH_TEST_REPO_ENTID")
    _idmap_overridden = _entid_env_raw is not None and _entid_env_raw.strip().startswith("{")

    env = runner.env_override({
        "CLOUDSMITH_TEST_REPO_ENTID": idmap,
        "CLOUDSMITH_TEST_LIVE": "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN": "FALSE",
        "CLOUDSMITH_APIKEY": "NONE",
    })

    idmap_resolved = helpers.to_map(
        env.get("CLOUDSMITH_TEST_REPO_ENTID"))
    if idmap_resolved is None:
        idmap_resolved = helpers.to_map(idmap)
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
