package sdktest

import (
	"encoding/json"
	"fmt"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/cloudsmith-sdk/go"
	"github.com/voxgig-sdk/cloudsmith-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudsmith-sdk/go/utility/struct"
)

func TestOrganizationPackageLicensePolicyEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OrganizationPackageLicensePolicy(nil)
		if ent == nil {
			t.Fatal("expected non-nil OrganizationPackageLicensePolicyEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := organization_package_license_policyBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "organization_package_license_policy." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		organizationPackageLicensePolicyRef01Ent := client.OrganizationPackageLicensePolicy(nil)
		organizationPackageLicensePolicyRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "organization_package_license_policy"}, setup.data), "organization_package_license_policy_ref01"))
		organizationPackageLicensePolicyRef01Data["org_id"] = setup.idmap["org01"]

		organizationPackageLicensePolicyRef01DataResult, err := organizationPackageLicensePolicyRef01Ent.Create(organizationPackageLicensePolicyRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		organizationPackageLicensePolicyRef01Data = core.ToMapAny(organizationPackageLicensePolicyRef01DataResult)
		if organizationPackageLicensePolicyRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		organizationPackageLicensePolicyRef01Match := map[string]any{
			"org_id": setup.idmap["org01"],
		}

		organizationPackageLicensePolicyRef01ListResult, err := organizationPackageLicensePolicyRef01Ent.List(organizationPackageLicensePolicyRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		organizationPackageLicensePolicyRef01List, organizationPackageLicensePolicyRef01ListOk := organizationPackageLicensePolicyRef01ListResult.([]any)
		if !organizationPackageLicensePolicyRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", organizationPackageLicensePolicyRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(organizationPackageLicensePolicyRef01List), map[string]any{"id": organizationPackageLicensePolicyRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		organizationPackageLicensePolicyRef01DataUp0Up := map[string]any{
			"org_id": setup.idmap["org_id"],
		}

		organizationPackageLicensePolicyRef01MarkdefUp0Name := "created_at"
		organizationPackageLicensePolicyRef01MarkdefUp0Value := fmt.Sprintf("Mark01-organization_package_license_policy_ref01_%d", setup.now)
		organizationPackageLicensePolicyRef01DataUp0Up[organizationPackageLicensePolicyRef01MarkdefUp0Name] = organizationPackageLicensePolicyRef01MarkdefUp0Value

		organizationPackageLicensePolicyRef01ResdataUp0Result, err := organizationPackageLicensePolicyRef01Ent.Update(organizationPackageLicensePolicyRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		organizationPackageLicensePolicyRef01ResdataUp0 := core.ToMapAny(organizationPackageLicensePolicyRef01ResdataUp0Result)
		if organizationPackageLicensePolicyRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if organizationPackageLicensePolicyRef01ResdataUp0[organizationPackageLicensePolicyRef01MarkdefUp0Name] != organizationPackageLicensePolicyRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", organizationPackageLicensePolicyRef01MarkdefUp0Name, organizationPackageLicensePolicyRef01ResdataUp0[organizationPackageLicensePolicyRef01MarkdefUp0Name])
		}

		// LOAD
		organizationPackageLicensePolicyRef01MatchDt0 := map[string]any{}
		organizationPackageLicensePolicyRef01DataDt0Loaded, err := organizationPackageLicensePolicyRef01Ent.Load(organizationPackageLicensePolicyRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if organizationPackageLicensePolicyRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func organization_package_license_policyBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "organization_package_license_policy", "OrganizationPackageLicensePolicyTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read organization_package_license_policy test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse organization_package_license_policy test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"organization_package_license_policy01", "organization_package_license_policy02", "organization_package_license_policy03", "org01", "org02", "org03"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_ORGANIZATION_PACKAGE_LICENSE_POLICY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add org_id alias for update test.
	if idmapResolved["org_id"] == nil {
		idmapResolved["org_id"] = idmapResolved["org01"]
	}

	if env["CLOUDSMITH_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["CLOUDSMITH_APIKEY"],
			},
			extra,
		})
		client = sdk.NewCloudsmithSDK(core.ToMapAny(mergedOpts))
	}

	live := env["CLOUDSMITH_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["CLOUDSMITH_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
