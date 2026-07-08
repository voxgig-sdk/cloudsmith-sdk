package sdktest

import (
	"encoding/json"
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

func TestOrganizationTeamMemberEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OrganizationTeamMember(nil)
		if ent == nil {
			t.Fatal("expected non-nil OrganizationTeamMemberEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := organization_team_memberBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "organization_team_member." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		organizationTeamMemberRef01Ent := client.OrganizationTeamMember(nil)
		organizationTeamMemberRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "organization_team_member"}, setup.data), "organization_team_member_ref01"))
		organizationTeamMemberRef01Data["org_id"] = setup.idmap["org01"]
		organizationTeamMemberRef01Data["team_id"] = setup.idmap["team01"]

		organizationTeamMemberRef01DataResult, err := organizationTeamMemberRef01Ent.Create(organizationTeamMemberRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		organizationTeamMemberRef01Data = core.ToMapAny(organizationTeamMemberRef01DataResult)
		if organizationTeamMemberRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		organizationTeamMemberRef01Match := map[string]any{
			"org_id": setup.idmap["org01"],
			"team_id": setup.idmap["team01"],
		}

		organizationTeamMemberRef01ListResult, err := organizationTeamMemberRef01Ent.List(organizationTeamMemberRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		organizationTeamMemberRef01List, organizationTeamMemberRef01ListOk := organizationTeamMemberRef01ListResult.([]any)
		if !organizationTeamMemberRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", organizationTeamMemberRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(organizationTeamMemberRef01List), map[string]any{"id": organizationTeamMemberRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

	})
}

func organization_team_memberBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "organization_team_member", "OrganizationTeamMemberTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read organization_team_member test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse organization_team_member test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"organization_team_member01", "organization_team_member02", "organization_team_member03", "org01", "org02", "org03", "team01", "team02", "team03"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_ORGANIZATION_TEAM_MEMBER_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
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
