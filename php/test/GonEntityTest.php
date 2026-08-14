<?php
declare(strict_types=1);

// Gon entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class GonEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->Gon(null);
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
                "gon" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CloudsmithSDK::test($seed, null);
        $seen = iterator_to_array($base->Gon(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CloudsmithConfig::shared_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CloudsmithSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Gon(null)->stream("list", null, null) as $item) {
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
        $setup = gon_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "gon." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_GON_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $gon_ref01_ent = $client->Gon(null);
        $gon_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.gon"), "gon_ref01"));
        $gon_ref01_data["identifier"] = $setup["idmap"]["identifier01"];
        $gon_ref01_data["owner"] = $setup["idmap"]["owner01"];

        $gon_ref01_data_result = $gon_ref01_ent->create($gon_ref01_data, null);
        $gon_ref01_data = Helpers::to_map(is_object($gon_ref01_data_result) && method_exists($gon_ref01_data_result, 'data_get') ? $gon_ref01_data_result->data_get() : $gon_ref01_data_result);
        $this->assertNotNull($gon_ref01_data);

        // LIST
        $gon_ref01_match = [
            "identifier" => $setup["idmap"]["identifier01"],
            "owner" => $setup["idmap"]["owner01"],
        ];

        $gon_ref01_list_result = $gon_ref01_ent->list($gon_ref01_match, null);
        $this->assertIsArray($gon_ref01_list_result);

        // UPDATE
        $gon_ref01_data_up0_up = [
            "identifier" => $setup["idmap"]["identifier"],
            "owner" => $setup["idmap"]["owner"],
        ];

        $gon_ref01_markdef_up0_name = "auth_mode";
        $gon_ref01_markdef_up0_value = "Mark01-gon_ref01_" . $setup["now"];
        $gon_ref01_data_up0_up[$gon_ref01_markdef_up0_name] = $gon_ref01_markdef_up0_value;

        $gon_ref01_resdata_up0_result = $gon_ref01_ent->update($gon_ref01_data_up0_up, null);
        $gon_ref01_resdata_up0 = Helpers::to_map(is_object($gon_ref01_resdata_up0_result) && method_exists($gon_ref01_resdata_up0_result, 'data_get') ? $gon_ref01_resdata_up0_result->data_get() : $gon_ref01_resdata_up0_result);
        $this->assertNotNull($gon_ref01_resdata_up0);
        $this->assertEquals($gon_ref01_resdata_up0[$gon_ref01_markdef_up0_name], $gon_ref01_markdef_up0_value);

        // LOAD
        $gon_ref01_match_dt0 = [];
        $gon_ref01_data_dt0_loaded = $gon_ref01_ent->load($gon_ref01_match_dt0, null);
        $this->assertNotNull($gon_ref01_data_dt0_loaded);

    }
}

function gon_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/gon/GonTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["gon01", "gon02", "gon03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "go01", "go02", "go03", "identifier01", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_GON_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_GON_ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_GON_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }
    if (!isset($idmap_resolved["identifier"])) {
        $idmap_resolved["identifier"] = $idmap_resolved["identifier01"];
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
