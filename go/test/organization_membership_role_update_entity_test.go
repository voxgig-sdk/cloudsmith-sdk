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

func TestOrganizationMembershipRoleUpdateEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OrganizationMembershipRoleUpdate(nil)
		if ent == nil {
			t.Fatal("expected non-nil OrganizationMembershipRoleUpdateEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := organization_membership_role_updateBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "organization_membership_role_update." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ROLE_UPDATE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		organizationMembershipRoleUpdateRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.organization_membership_role_update", setup.data)))
		var organizationMembershipRoleUpdateRef01Data map[string]any
		if len(organizationMembershipRoleUpdateRef01DataRaw) > 0 {
			organizationMembershipRoleUpdateRef01Data = core.ToMapAny(organizationMembershipRoleUpdateRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = organizationMembershipRoleUpdateRef01Data

		// UPDATE
		organizationMembershipRoleUpdateRef01Ent := client.OrganizationMembershipRoleUpdate(nil)
		organizationMembershipRoleUpdateRef01DataUp0Up := map[string]any{
			"org_id": setup.idmap["org_id"],
		}

		organizationMembershipRoleUpdateRef01MarkdefUp0Name := "email"
		organizationMembershipRoleUpdateRef01MarkdefUp0Value := fmt.Sprintf("Mark01-organization_membership_role_update_ref01_%d", setup.now)
		organizationMembershipRoleUpdateRef01DataUp0Up[organizationMembershipRoleUpdateRef01MarkdefUp0Name] = organizationMembershipRoleUpdateRef01MarkdefUp0Value

		organizationMembershipRoleUpdateRef01ResdataUp0Result, err := organizationMembershipRoleUpdateRef01Ent.Update(organizationMembershipRoleUpdateRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		organizationMembershipRoleUpdateRef01ResdataUp0 := core.ToMapAny(organizationMembershipRoleUpdateRef01ResdataUp0Result)
		if organizationMembershipRoleUpdateRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if organizationMembershipRoleUpdateRef01ResdataUp0[organizationMembershipRoleUpdateRef01MarkdefUp0Name] != organizationMembershipRoleUpdateRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", organizationMembershipRoleUpdateRef01MarkdefUp0Name, organizationMembershipRoleUpdateRef01ResdataUp0[organizationMembershipRoleUpdateRef01MarkdefUp0Name])
		}

	})
}

func organization_membership_role_updateBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "organization_membership_role_update", "OrganizationMembershipRoleUpdateTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read organization_membership_role_update test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse organization_membership_role_update test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"organization_membership_role_update01", "organization_membership_role_update02", "organization_membership_role_update03", "org01", "org02", "org03", "member01", "member02", "member03"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ROLE_UPDATE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ROLE_UPDATE_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ROLE_UPDATE_ENTID"])
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
