<?php
declare(strict_types=1);

// Huggingface entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class HuggingfaceEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->Huggingface(null);
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
                "huggingface" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CloudsmithSDK::test($seed, null);
        $seen = iterator_to_array($base->Huggingface(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CloudsmithConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CloudsmithSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Huggingface(null)->stream("list", null, null) as $item) {
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
        $setup = huggingface_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "huggingface." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_HUGGINGFACE_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $huggingface_ref01_ent = $client->Huggingface(null);
        $huggingface_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.huggingface"), "huggingface_ref01"));
        $huggingface_ref01_data["identifier"] = $setup["idmap"]["identifier01"];
        $huggingface_ref01_data["owner"] = $setup["idmap"]["owner01"];

        $huggingface_ref01_data_result = $huggingface_ref01_ent->create($huggingface_ref01_data, null);
        $huggingface_ref01_data = Helpers::to_map($huggingface_ref01_data_result);
        $this->assertNotNull($huggingface_ref01_data);

        // LIST
        $huggingface_ref01_match = [
            "identifier" => $setup["idmap"]["identifier01"],
            "owner" => $setup["idmap"]["owner01"],
        ];

        $huggingface_ref01_list_result = $huggingface_ref01_ent->list($huggingface_ref01_match, null);
        $this->assertIsArray($huggingface_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($huggingface_ref01_list_result),
            ["id" => $huggingface_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $huggingface_ref01_data_up0_up = [
            "identifier" => $setup["idmap"]["identifier"],
            "owner" => $setup["idmap"]["owner"],
        ];

        $huggingface_ref01_markdef_up0_name = "auth_mode";
        $huggingface_ref01_markdef_up0_value = "Mark01-huggingface_ref01_" . $setup["now"];
        $huggingface_ref01_data_up0_up[$huggingface_ref01_markdef_up0_name] = $huggingface_ref01_markdef_up0_value;

        $huggingface_ref01_resdata_up0_result = $huggingface_ref01_ent->update($huggingface_ref01_data_up0_up, null);
        $huggingface_ref01_resdata_up0 = Helpers::to_map($huggingface_ref01_resdata_up0_result);
        $this->assertNotNull($huggingface_ref01_resdata_up0);
        $this->assertEquals($huggingface_ref01_resdata_up0[$huggingface_ref01_markdef_up0_name], $huggingface_ref01_markdef_up0_value);

        // LOAD
        $huggingface_ref01_match_dt0 = [];
        $huggingface_ref01_data_dt0_loaded = $huggingface_ref01_ent->load($huggingface_ref01_match_dt0, null);
        $this->assertNotNull($huggingface_ref01_data_dt0_loaded);

    }
}

function huggingface_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/huggingface/HuggingfaceTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["huggingface01", "huggingface02", "huggingface03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_HUGGINGFACE_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_HUGGINGFACE_ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_HUGGINGFACE_ENTID"]);
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
