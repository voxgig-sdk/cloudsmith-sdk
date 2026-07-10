<?php
declare(strict_types=1);

// Repo entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class RepoEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->Repo(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = repo_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "repo." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPO_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $repo_ref01_ent = $client->Repo(null);
        $repo_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.repo"), "repo_ref01"));
        $repo_ref01_data["identifier"] = $setup["idmap"]["identifier01"];
        $repo_ref01_data["owner"] = $setup["idmap"]["owner01"];

        $repo_ref01_data_result = $repo_ref01_ent->create($repo_ref01_data, null);
        $repo_ref01_data = Helpers::to_map($repo_ref01_data_result);
        $this->assertNotNull($repo_ref01_data);

        // LIST
        $repo_ref01_match = [];

        $repo_ref01_list_result = $repo_ref01_ent->list($repo_ref01_match, null);
        $this->assertIsArray($repo_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($repo_ref01_list_result),
            ["id" => $repo_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $repo_ref01_data_up0_up = [
            "owner" => $setup["idmap"]["owner"],
        ];

        $repo_ref01_markdef_up0_name = "cdn_url";
        $repo_ref01_markdef_up0_value = "Mark01-repo_ref01_" . $setup["now"];
        $repo_ref01_data_up0_up[$repo_ref01_markdef_up0_name] = $repo_ref01_markdef_up0_value;

        $repo_ref01_resdata_up0_result = $repo_ref01_ent->update($repo_ref01_data_up0_up, null);
        $repo_ref01_resdata_up0 = Helpers::to_map($repo_ref01_resdata_up0_result);
        $this->assertNotNull($repo_ref01_resdata_up0);
        $this->assertEquals($repo_ref01_resdata_up0[$repo_ref01_markdef_up0_name], $repo_ref01_markdef_up0_value);

        // LOAD
        $repo_ref01_match_dt0 = [];
        $repo_ref01_data_dt0_loaded = $repo_ref01_ent->load($repo_ref01_match_dt0, null);
        $this->assertNotNull($repo_ref01_data_dt0_loaded);

        // REMOVE
        $repo_ref01_match_rm0 = [
            "id" => $repo_ref01_data["id"],
        ];
        $repo_ref01_ent->remove($repo_ref01_match_rm0, null);

        // LIST
        $repo_ref01_match_rt0 = [];

        $repo_ref01_list_rt0_result = $repo_ref01_ent->list($repo_ref01_match_rt0, null);
        $this->assertIsArray($repo_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($repo_ref01_list_rt0_result),
            ["id" => $repo_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function repo_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/repo/RepoTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["repo01", "repo02", "repo03", "cargo01", "cargo02", "cargo03", "composer01", "composer02", "composer03", "conda01", "conda02", "conda03", "cran01", "cran02", "cran03", "dart01", "dart02", "dart03", "deb01", "deb02", "deb03", "docker01", "docker02", "docker03", "go01", "go02", "go03", "helm01", "helm02", "helm03", "hex01", "hex02", "hex03", "huggingface01", "huggingface02", "huggingface03", "maven01", "maven02", "maven03", "npm01", "npm02", "npm03", "nuget01", "nuget02", "nuget03", "python01", "python02", "python03", "rpm01", "rpm02", "rpm03", "ruby01", "ruby02", "ruby03", "swift01", "swift02", "swift03", "identifier01", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_REPO_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_REPO_ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_REPO_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["owner"])) {
        $idmap_resolved["owner"] = $idmap_resolved["owner01"];
    }

    if ($env["CLOUDSMITH_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
                "apikey" => $env["CLOUDSMITH_APIKEY"],
            ],
            $extra ?? [],
        ]);
        $client = new CloudsmithSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["CLOUDSMITH_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["CLOUDSMITH_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
