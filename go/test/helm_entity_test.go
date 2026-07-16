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

func TestHelmEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Helm(nil)
		if ent == nil {
			t.Fatal("expected non-nil HelmEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"helm": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Helm(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Helm(nil).Stream("list", nil, nil) {
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
		setup := helmBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "helm." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_HELM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		helmRef01Ent := client.Helm(nil)
		helmRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "helm"}, setup.data), "helm_ref01"))
		helmRef01Data["identifier"] = setup.idmap["identifier01"]
		helmRef01Data["owner"] = setup.idmap["owner01"]

		helmRef01DataResult, err := helmRef01Ent.Create(helmRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		helmRef01Data = core.ToMapAny(helmRef01DataResult)
		if helmRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		helmRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
		}

		helmRef01ListResult, err := helmRef01Ent.List(helmRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		helmRef01List, helmRef01ListOk := helmRef01ListResult.([]any)
		if !helmRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", helmRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(helmRef01List), map[string]any{"id": helmRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		helmRef01DataUp0Up := map[string]any{
			"identifier": setup.idmap["identifier"],
			"owner": setup.idmap["owner"],
		}

		helmRef01MarkdefUp0Name := "auth_mode"
		helmRef01MarkdefUp0Value := fmt.Sprintf("Mark01-helm_ref01_%d", setup.now)
		helmRef01DataUp0Up[helmRef01MarkdefUp0Name] = helmRef01MarkdefUp0Value

		helmRef01ResdataUp0Result, err := helmRef01Ent.Update(helmRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		helmRef01ResdataUp0 := core.ToMapAny(helmRef01ResdataUp0Result)
		if helmRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if helmRef01ResdataUp0[helmRef01MarkdefUp0Name] != helmRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", helmRef01MarkdefUp0Name, helmRef01ResdataUp0[helmRef01MarkdefUp0Name])
		}

		// LOAD
		helmRef01MatchDt0 := map[string]any{}
		helmRef01DataDt0Loaded, err := helmRef01Ent.Load(helmRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if helmRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func helmBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "helm", "HelmTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read helm test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse helm test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"helm01", "helm02", "helm03", "package01", "package02", "package03", "repo01", "repo02", "repo03", "identifier01", "owner01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_HELM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_HELM_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_HELM_ENTID"])
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
