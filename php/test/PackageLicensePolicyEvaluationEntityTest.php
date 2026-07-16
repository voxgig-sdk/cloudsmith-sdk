<?php
declare(strict_types=1);

// PackageLicensePolicyEvaluation entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class PackageLicensePolicyEvaluationEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->PackageLicensePolicyEvaluation(null);
        $this->assertNotNull($ent);
    }

    // Feature #4: the entity stream(action, ...) method runs the op pipeline
    // and yields result items. With the streaming feature active it yields the
    // feature's incremental output; otherwise it falls back to the materialised
    // list so stream always yields.
    public function test_stream(): void
    {
        $seed = [
            "entity" => [
                "package_license_policy_evaluation" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CloudsmithSDK::test($seed, null);
        $seen = iterator_to_array($base->PackageLicensePolicyEvaluation(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CloudsmithConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CloudsmithSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->PackageLicensePolicyEvaluation(null)->stream("list", null, null) as $item) {
                if (is_array($item) && array_is_list($item)) {
                    foreach ($item as $sub) {
                        $got[] = $sub;
                    }
                } else {
                    $got[] = $item;
                }
            }
            $this->assertCount(3, $got);
        }
    }

    public function test_basic_flow(): void
    {
        $setup = package_license_policy_evaluation_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "package_license_policy_evaluation." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $package_license_policy_evaluation_ref01_ent = $client->PackageLicensePolicyEvaluation(null);
        $package_license_policy_evaluation_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.package_license_policy_evaluation"), "package_license_policy_evaluation_ref01"));
        $package_license_policy_evaluation_ref01_data["license_policy_id"] = $setup["idmap"]["license_policy01"];
        $package_license_policy_evaluation_ref01_data["org_id"] = $setup["idmap"]["org01"];
        $package_license_policy_evaluation_ref01_data["policy_slug_perm"] = $setup["idmap"]["policy_slug_perm01"];

        $package_license_policy_evaluation_ref01_data_result = $package_license_policy_evaluation_ref01_ent->create($package_license_policy_evaluation_ref01_data, null);
        $package_license_policy_evaluation_ref01_data = Helpers::to_map($package_license_policy_evaluation_ref01_data_result);
        $this->assertNotNull($package_license_policy_evaluation_ref01_data);

        // LIST
        $package_license_policy_evaluation_ref01_match = [
            "org_id" => $setup["idmap"]["org01"],
            "policy_slug_perm" => $setup["idmap"]["policy_slug_perm01"],
        ];

        $package_license_policy_evaluation_ref01_list_result = $package_license_policy_evaluation_ref01_ent->list($package_license_policy_evaluation_ref01_match, null);
        $this->assertIsArray($package_license_policy_evaluation_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($package_license_policy_evaluation_ref01_list_result),
            ["id" => $package_license_policy_evaluation_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // LOAD
        $package_license_policy_evaluation_ref01_match_dt0 = [];
        $package_license_policy_evaluation_ref01_data_dt0_loaded = $package_license_policy_evaluation_ref01_ent->load($package_license_policy_evaluation_ref01_match_dt0, null);
        $this->assertNotNull($package_license_policy_evaluation_ref01_data_dt0_loaded);

    }
}

function package_license_policy_evaluation_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/package_license_policy_evaluation/PackageLicensePolicyEvaluationTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["package_license_policy_evaluation01", "package_license_policy_evaluation02", "package_license_policy_evaluation03", "org01", "org02", "org03", "license_policy01", "license_policy02", "license_policy03", "policy_slug_perm01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
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
