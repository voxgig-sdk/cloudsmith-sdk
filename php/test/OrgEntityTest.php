<?php
declare(strict_types=1);

// Org entity test

require_once __DIR__ . '/../cloudsmith_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class OrgEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $ent = $testsdk->Org(null);
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
                "org" => [
                    "s1" => ["id" => "s1"],
                    "s2" => ["id" => "s2"],
                    "s3" => ["id" => "s3"],
                ],
            ],
        ];

        // Fallback: streaming inactive -> yields the materialised list items.
        $base = CloudsmithSDK::test($seed, null);
        $seen = iterator_to_array($base->Org(null)->stream("list", null, null), false);
        $this->assertCount(3, $seen);

        // Inbound: streaming active -> yields each item from the feature.
        $cfg = CloudsmithConfig::make_config();
        if (isset($cfg["feature"]) && is_array($cfg["feature"]) && isset($cfg["feature"]["streaming"])) {
            $sdk = CloudsmithSDK::test($seed, ["feature" => ["streaming" => ["active" => true]]]);
            $got = [];
            foreach ($sdk->Org(null)->stream("list", null, null) as $item) {
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
        $setup = org_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["create", "list", "update", "load", "remove"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "org." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORG_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // CREATE
        $org_ref01_ent = $client->Org(null);
        $org_ref01_data = Helpers::to_map(Vs::getprop(
            Vs::getpath($setup["data"], "new.org"), "org_ref01"));
        $org_ref01_data["org"] = $setup["idmap"]["org01"];

        $org_ref01_data_result = $org_ref01_ent->create($org_ref01_data, null);
        $org_ref01_data = Helpers::to_map($org_ref01_data_result);
        $this->assertNotNull($org_ref01_data);

        // LIST
        $org_ref01_match = [];

        $org_ref01_list_result = $org_ref01_ent->list($org_ref01_match, null);
        $this->assertIsArray($org_ref01_list_result);

        $found_item = sdk_select(
            Runner::entity_list_to_data($org_ref01_list_result),
            ["id" => $org_ref01_data["id"]]);
        $this->assertNotEmpty($found_item);

        // UPDATE
        $org_ref01_data_up0_up = [
        ];

        $org_ref01_markdef_up0_name = "country";
        $org_ref01_markdef_up0_value = "Mark01-org_ref01_" . $setup["now"];
        $org_ref01_data_up0_up[$org_ref01_markdef_up0_name] = $org_ref01_markdef_up0_value;

        $org_ref01_resdata_up0_result = $org_ref01_ent->update($org_ref01_data_up0_up, null);
        $org_ref01_resdata_up0 = Helpers::to_map($org_ref01_resdata_up0_result);
        $this->assertNotNull($org_ref01_resdata_up0);
        $this->assertEquals($org_ref01_resdata_up0[$org_ref01_markdef_up0_name], $org_ref01_markdef_up0_value);

        // LOAD
        $org_ref01_match_dt0 = [];
        $org_ref01_data_dt0_loaded = $org_ref01_ent->load($org_ref01_match_dt0, null);
        $this->assertNotNull($org_ref01_data_dt0_loaded);

        // REMOVE
        $org_ref01_match_rm0 = [
            "id" => $org_ref01_data["id"],
        ];
        $org_ref01_ent->remove($org_ref01_match_rm0, null);

        // LIST
        $org_ref01_match_rt0 = [];

        $org_ref01_list_rt0_result = $org_ref01_ent->list($org_ref01_match_rt0, null);
        $this->assertIsArray($org_ref01_list_rt0_result);

        $not_found_item = sdk_select(
            Runner::entity_list_to_data($org_ref01_list_rt0_result),
            ["id" => $org_ref01_data["id"]]);
        $this->assertEmpty($not_found_item);

    }
}

function org_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/org/OrgTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = CloudsmithSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["org01", "org02", "org03", "deny_policy01", "deny_policy02", "deny_policy03", "invite01", "invite02", "invite03", "license_policy01", "license_policy02", "license_policy03", "member01", "member02", "member03", "openid_connect01", "openid_connect02", "openid_connect03", "saml_group_sync01", "saml_group_sync02", "saml_group_sync03", "service01", "service02", "service03", "team01", "team02", "team03", "vulnerability_policy01", "vulnerability_policy02", "vulnerability_policy03"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("CLOUDSMITH_TEST_ORG_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "CLOUDSMITH_TEST_ORG_ENTID" => $idmap,
        "CLOUDSMITH_TEST_LIVE" => "FALSE",
        "CLOUDSMITH_TEST_EXPLAIN" => "FALSE",
        "CLOUDSMITH_APIKEY" => "NONE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["CLOUDSMITH_TEST_ORG_ENTID"]);
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
