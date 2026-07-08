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

func TestOrgEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Org(nil)
		if ent == nil {
			t.Fatal("expected non-nil OrgEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := orgBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load", "remove"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "org." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORG_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		orgRef01Ent := client.Org(nil)
		orgRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "org"}, setup.data), "org_ref01"))
		orgRef01Data["org"] = setup.idmap["org01"]

		orgRef01DataResult, err := orgRef01Ent.Create(orgRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		orgRef01Data = core.ToMapAny(orgRef01DataResult)
		if orgRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		orgRef01Match := map[string]any{}

		orgRef01ListResult, err := orgRef01Ent.List(orgRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		orgRef01List, orgRef01ListOk := orgRef01ListResult.([]any)
		if !orgRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", orgRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(orgRef01List), map[string]any{"id": orgRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		orgRef01DataUp0Up := map[string]any{
		}

		orgRef01MarkdefUp0Name := "country"
		orgRef01MarkdefUp0Value := fmt.Sprintf("Mark01-org_ref01_%d", setup.now)
		orgRef01DataUp0Up[orgRef01MarkdefUp0Name] = orgRef01MarkdefUp0Value

		orgRef01ResdataUp0Result, err := orgRef01Ent.Update(orgRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		orgRef01ResdataUp0 := core.ToMapAny(orgRef01ResdataUp0Result)
		if orgRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if orgRef01ResdataUp0[orgRef01MarkdefUp0Name] != orgRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", orgRef01MarkdefUp0Name, orgRef01ResdataUp0[orgRef01MarkdefUp0Name])
		}

		// LOAD
		orgRef01MatchDt0 := map[string]any{}
		orgRef01DataDt0Loaded, err := orgRef01Ent.Load(orgRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if orgRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

		// REMOVE
		orgRef01MatchRm0 := map[string]any{
			"id": orgRef01Data["id"],
		}
		_, err = orgRef01Ent.Remove(orgRef01MatchRm0, nil)
		if err != nil {
			t.Fatalf("remove failed: %v", err)
		}

		// LIST
		orgRef01MatchRt0 := map[string]any{}

		orgRef01ListRt0Result, err := orgRef01Ent.List(orgRef01MatchRt0, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		orgRef01ListRt0, orgRef01ListRt0Ok := orgRef01ListRt0Result.([]any)
		if !orgRef01ListRt0Ok {
			t.Fatalf("expected list result to be an array, got %T", orgRef01ListRt0Result)
		}

		notFoundItem := vs.Select(entityListToData(orgRef01ListRt0), map[string]any{"id": orgRef01Data["id"]})
		if !vs.IsEmpty(notFoundItem) {
			t.Fatal("expected removed entity to not be in list")
		}

	})
}

func orgBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "org", "OrgTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read org test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse org test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"org01", "org02", "org03", "deny_policy01", "deny_policy02", "deny_policy03", "invite01", "invite02", "invite03", "license_policy01", "license_policy02", "license_policy03", "member01", "member02", "member03", "openid_connect01", "openid_connect02", "openid_connect03", "saml_group_sync01", "saml_group_sync02", "saml_group_sync03", "service01", "service02", "service03", "team01", "team02", "team03", "vulnerability_policy01", "vulnerability_policy02", "vulnerability_policy03"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_ORG_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_ORG_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_ORG_ENTID"])
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
