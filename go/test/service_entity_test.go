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

func TestServiceEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Service(nil)
		if ent == nil {
			t.Fatal("expected non-nil ServiceEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"service": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.Service(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.Service(nil).Stream("list", nil, nil) {
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
		setup := serviceBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "service." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_SERVICE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		serviceRef01Ent := client.Service(nil)
		serviceRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "service"}, setup.data), "service_ref01"))
		serviceRef01Data["org_id"] = setup.idmap["org01"]
		serviceRef01Data["service"] = setup.idmap["service01"]

		serviceRef01DataResult, err := serviceRef01Ent.Create(serviceRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		serviceRef01Data = core.ToMapAny(serviceRef01DataResult)
		if serviceRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		serviceRef01Match := map[string]any{
			"org_id": setup.idmap["org01"],
		}

		serviceRef01ListResult, err := serviceRef01Ent.List(serviceRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		serviceRef01List, serviceRef01ListOk := serviceRef01ListResult.([]any)
		if !serviceRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", serviceRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(serviceRef01List), map[string]any{"id": serviceRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		serviceRef01DataUp0Up := map[string]any{
			"org_id": setup.idmap["org_id"],
		}

		serviceRef01MarkdefUp0Name := "created_at"
		serviceRef01MarkdefUp0Value := fmt.Sprintf("Mark01-service_ref01_%d", setup.now)
		serviceRef01DataUp0Up[serviceRef01MarkdefUp0Name] = serviceRef01MarkdefUp0Value

		serviceRef01ResdataUp0Result, err := serviceRef01Ent.Update(serviceRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		serviceRef01ResdataUp0 := core.ToMapAny(serviceRef01ResdataUp0Result)
		if serviceRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if serviceRef01ResdataUp0[serviceRef01MarkdefUp0Name] != serviceRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", serviceRef01MarkdefUp0Name, serviceRef01ResdataUp0[serviceRef01MarkdefUp0Name])
		}

		// LOAD
		serviceRef01MatchDt0 := map[string]any{}
		serviceRef01DataDt0Loaded, err := serviceRef01Ent.Load(serviceRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if serviceRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func serviceBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "service", "ServiceTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read service test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse service test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"service01", "service02", "service03", "org01", "org02", "org03"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_SERVICE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_SERVICE_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_SERVICE_ENTID"])
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
