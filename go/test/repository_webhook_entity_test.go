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

func TestRepositoryWebhookEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.RepositoryWebhook(nil)
		if ent == nil {
			t.Fatal("expected non-nil RepositoryWebhookEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"repository_webhook": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.RepositoryWebhook(nil).Stream("list", nil, nil) {
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
			for item := range streamSdk.RepositoryWebhook(nil).Stream("list", nil, nil) {
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
		setup := repository_webhookBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "list", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "repository_webhook." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		repositoryWebhookRef01Ent := client.RepositoryWebhook(nil)
		repositoryWebhookRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath([]any{"new", "repository_webhook"}, setup.data), "repository_webhook_ref01"))
		repositoryWebhookRef01Data["identifier"] = setup.idmap["identifier01"]
		repositoryWebhookRef01Data["owner"] = setup.idmap["owner01"]
		repositoryWebhookRef01Data["repo"] = setup.idmap["repo01"]

		repositoryWebhookRef01DataResult, err := repositoryWebhookRef01Ent.Create(repositoryWebhookRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		repositoryWebhookRef01Data = core.ToMapAny(repositoryWebhookRef01DataResult)
		if repositoryWebhookRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// LIST
		repositoryWebhookRef01Match := map[string]any{
			"identifier": setup.idmap["identifier01"],
			"owner": setup.idmap["owner01"],
			"repo": setup.idmap["repo01"],
		}

		repositoryWebhookRef01ListResult, err := repositoryWebhookRef01Ent.List(repositoryWebhookRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		repositoryWebhookRef01List, repositoryWebhookRef01ListOk := repositoryWebhookRef01ListResult.([]any)
		if !repositoryWebhookRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", repositoryWebhookRef01ListResult)
		}

		foundItem := vs.Select(entityListToData(repositoryWebhookRef01List), map[string]any{"id": repositoryWebhookRef01Data["id"]})
		if vs.IsEmpty(foundItem) {
			t.Fatal("expected to find created entity in list")
		}

		// UPDATE
		repositoryWebhookRef01DataUp0Up := map[string]any{
			"owner": setup.idmap["owner"],
			"repo": setup.idmap["repo"],
		}

		repositoryWebhookRef01MarkdefUp0Name := "created_at"
		repositoryWebhookRef01MarkdefUp0Value := fmt.Sprintf("Mark01-repository_webhook_ref01_%d", setup.now)
		repositoryWebhookRef01DataUp0Up[repositoryWebhookRef01MarkdefUp0Name] = repositoryWebhookRef01MarkdefUp0Value

		repositoryWebhookRef01ResdataUp0Result, err := repositoryWebhookRef01Ent.Update(repositoryWebhookRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		repositoryWebhookRef01ResdataUp0 := core.ToMapAny(repositoryWebhookRef01ResdataUp0Result)
		if repositoryWebhookRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if repositoryWebhookRef01ResdataUp0[repositoryWebhookRef01MarkdefUp0Name] != repositoryWebhookRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", repositoryWebhookRef01MarkdefUp0Name, repositoryWebhookRef01ResdataUp0[repositoryWebhookRef01MarkdefUp0Name])
		}

	})
}

func repository_webhookBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "repository_webhook", "RepositoryWebhookTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read repository_webhook test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse repository_webhook test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"repository_webhook01", "repository_webhook02", "repository_webhook03", "webhook01", "webhook02", "webhook03", "identifier01", "owner01", "repo01"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_REPOSITORY_WEBHOOK_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}
	// Add owner alias for update test.
	if idmapResolved["owner"] == nil {
		idmapResolved["owner"] = idmapResolved["owner01"]
	}
	// Add repo alias for update test.
	if idmapResolved["repo"] == nil {
		idmapResolved["repo"] = idmapResolved["repo01"]
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
