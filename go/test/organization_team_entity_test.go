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

func TestOrganizationTeamEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OrganizationTeam(nil)
		if ent == nil {
			t.Fatal("expected non-nil OrganizationTeamEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"organization_team": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.OrganizationTeam(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.OrganizationTeam(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := organization_teamBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "organization_team." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORGANIZATION_TEAM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		organizationTeamRef01Ent := client.OrganizationTeam(nil)
		organizationTeamRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "organization_team"}, setup.data), "organization_team_ref01"))
		organizationTeamRef01Data["org_id"] = setup.idmap["org01"]

		organizationTeamRef01DataResult, err := organizationTeamRef01Ent.Create(organizationTeamRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		organizationTeamRef01Data = core.ToMapAny(organizationTeamRef01DataResult)
		if organizationTeamRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		organizationTeamRef01Match := map[string]any{
			"org_id": setup.idmap["org01"],
		}

		organizationTeamRef01ListResult, err := organizationTeamRef01Ent.List(organizationTeamRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		organizationTeamRef01List, organizationTeamRef01ListOk := organizationTeamRef01ListResult.([]any)
		if !organizationTeamRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", organizationTeamRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(organizationTeamRef01List), map[string]any{"id": organizationTeamRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		organizationTeamRef01DataUp0Up := map[string]any{
			"org_id": setup.idmap["org_id"],
		}

		organizationTeamRef01MarkdefUp0Name := "description"
		organizationTeamRef01MarkdefUp0Value := fmt.Sprintf("Mark01-organization_team_ref01_%d", setup.now)
		organizationTeamRef01DataUp0Up[organizationTeamRef01MarkdefUp0Name] = organizationTeamRef01MarkdefUp0Value

		organizationTeamRef01ResdataUp0Result, err := organizationTeamRef01Ent.Update(organizationTeamRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		organizationTeamRef01ResdataUp0 := core.ToMapAny(organizationTeamRef01ResdataUp0Result)
		if organizationTeamRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if organizationTeamRef01ResdataUp0[organizationTeamRef01MarkdefUp0Name] != organizationTeamRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", organizationTeamRef01MarkdefUp0Name, organizationTeamRef01ResdataUp0[organizationTeamRef01MarkdefUp0Name])
		}

		// LOAD
		organizationTeamRef01MatchDt0 := map[string]any{}
		organizationTeamRef01DataDt0Loaded, err := organizationTeamRef01Ent.Load(organizationTeamRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if organizationTeamRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func organization_teamBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "organization_team", "OrganizationTeamTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read organization_team test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse organization_team test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"organization_team01", "organization_team02", "organization_team03", "org01", "org02", "org03"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_ORGANIZATION_TEAM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_ORGANIZATION_TEAM_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_ORGANIZATION_TEAM_ENTID"])
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
