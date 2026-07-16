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

func TestRpmEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Rpm(nil)
		if ent == nil {
			t.Fatal("expected non-nil RpmEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"rpm": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Rpm(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Rpm(nil).Stream("list", nil, nil) {
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
		setup := rpmBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "rpm." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_RPM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		rpmRef01Ent := client.Rpm(nil)
		rpmRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "rpm"}, setup.data), "rpm_ref01"))
		rpmRef01Data["identifier"] = setup.idmap["identifier01"]
		rpmRef01Data["owner"] = setup.idmap["owner01"]

		rpmRef01DataResult, err := rpmRef01Ent.Create(rpmRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		rpmRef01Data = core.ToMapAny(rpmRef01DataResult)
		if rpmRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		rpmRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
		}

		rpmRef01ListResult, err := rpmRef01Ent.List(rpmRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		rpmRef01List, rpmRef01ListOk := rpmRef01ListResult.([]any)
		if !rpmRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", rpmRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(rpmRef01List), map[string]any{"id": rpmRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		rpmRef01DataUp0Up := map[string]any{
			"identifier": setup.idmap["identifier"],
			"owner": setup.idmap["owner"],
		}

		rpmRef01MarkdefUp0Name := "auth_mode"
		rpmRef01MarkdefUp0Value := fmt.Sprintf("Mark01-rpm_ref01_%d", setup.now)
		rpmRef01DataUp0Up[rpmRef01MarkdefUp0Name] = rpmRef01MarkdefUp0Value

		rpmRef01ResdataUp0Result, err := rpmRef01Ent.Update(rpmRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		rpmRef01ResdataUp0 := core.ToMapAny(rpmRef01ResdataUp0Result)
		if rpmRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if rpmRef01ResdataUp0[rpmRef01MarkdefUp0Name] != rpmRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", rpmRef01MarkdefUp0Name, rpmRef01ResdataUp0[rpmRef01MarkdefUp0Name])
		}

		// LOAD
		rpmRef01MatchDt0 := map[string]any{}
		rpmRef01DataDt0Loaded, err := rpmRef01Ent.Load(rpmRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if rpmRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func rpmBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "rpm", "RpmTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read rpm test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse rpm test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"rpm01", "rpm02", "rpm03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_RPM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_RPM_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_RPM_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add identifier alias for update test.
	if idmapResolved["identifier"] == nil {
		idmapResolved["identifier"] = idmapResolved["identifier01"]
	}
	// Add owner alias for update test.
	if idmapResolved["owner"] == nil {
		idmapResolved["owner"] = idmapResolved["owner01"]
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
