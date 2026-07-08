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

func TestProviderSettingsWriteEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ProviderSettingsWrite(nil)
		if ent == nil {
			t.Fatal("expected non-nil ProviderSettingsWriteEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := provider_settings_writeBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "provider_settings_write." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		providerSettingsWriteRef01Ent := client.ProviderSettingsWrite(nil)
		providerSettingsWriteRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "provider_settings_write"}, setup.data), "provider_settings_write_ref01"))
		providerSettingsWriteRef01Data["org_id"] = setup.idmap["org01"]

		providerSettingsWriteRef01DataResult, err := providerSettingsWriteRef01Ent.Create(providerSettingsWriteRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		providerSettingsWriteRef01Data = core.ToMapAny(providerSettingsWriteRef01DataResult)
		if providerSettingsWriteRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		providerSettingsWriteRef01DataUp0Up := map[string]any{
			"org_id": setup.idmap["org_id"],
		}

		providerSettingsWriteRef01MarkdefUp0Name := "mapping_claim"
		providerSettingsWriteRef01MarkdefUp0Value := fmt.Sprintf("Mark01-provider_settings_write_ref01_%d", setup.now)
		providerSettingsWriteRef01DataUp0Up[providerSettingsWriteRef01MarkdefUp0Name] = providerSettingsWriteRef01MarkdefUp0Value

		providerSettingsWriteRef01ResdataUp0Result, err := providerSettingsWriteRef01Ent.Update(providerSettingsWriteRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		providerSettingsWriteRef01ResdataUp0 := core.ToMapAny(providerSettingsWriteRef01ResdataUp0Result)
		if providerSettingsWriteRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if providerSettingsWriteRef01ResdataUp0[providerSettingsWriteRef01MarkdefUp0Name] != providerSettingsWriteRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", providerSettingsWriteRef01MarkdefUp0Name, providerSettingsWriteRef01ResdataUp0[providerSettingsWriteRef01MarkdefUp0Name])
		}

	})
}

func provider_settings_writeBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "provider_settings_write", "ProviderSettingsWriteTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read provider_settings_write test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse provider_settings_write test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"provider_settings_write01", "provider_settings_write02", "provider_settings_write03", "org01", "org02", "org03", "openid_connect01", "openid_connect02", "openid_connect03"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_PROVIDER_SETTINGS_WRITE_ENTID"])
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
