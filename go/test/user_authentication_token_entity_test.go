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

func TestUserAuthenticationTokenEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.UserAuthenticationToken(nil)
		if ent == nil {
			t.Fatal("expected non-nil UserAuthenticationTokenEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := user_authentication_tokenBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"create", "update"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "user_authentication_token." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID JSON to run live")
			return
		}
		client := setup.client

		// CREATE
		userAuthenticationTokenRef01Ent := client.UserAuthenticationToken(nil)
		userAuthenticationTokenRef01Data := core.ToMapAny(vs.GetProp(
			vs.GetPath(setup.data, []any{"new", "user_authentication_token"}), "user_authentication_token_ref01"))

		userAuthenticationTokenRef01DataResult, err := userAuthenticationTokenRef01Ent.Create(userAuthenticationTokenRef01Data, nil)
		if err != nil {
			t.Fatalf("create failed: %v", err)
		}
		userAuthenticationTokenRef01Data = core.ToMapAny(entityData(userAuthenticationTokenRef01DataResult))
		if userAuthenticationTokenRef01Data == nil {
			t.Fatal("expected create result to be a map")
		}

		// UPDATE
		userAuthenticationTokenRef01DataUp0Up := map[string]any{
		}

		userAuthenticationTokenRef01ResdataUp0Result, err := userAuthenticationTokenRef01Ent.Update(userAuthenticationTokenRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		userAuthenticationTokenRef01ResdataUp0 := core.ToMapAny(entityData(userAuthenticationTokenRef01ResdataUp0Result))
		if userAuthenticationTokenRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}

	})
}

func user_authentication_tokenBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "user_authentication_token", "UserAuthenticationTokenTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read user_authentication_token test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse user_authentication_token test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap, _ := vs.Transform(
		[]any{"user_authentication_token01", "user_authentication_token02", "user_authentication_token03", "token01", "token02", "token03"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_USER_AUTHENTICATION_TOKEN_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["CLOUDSMITH_TEST_LIVE"] == "TRUE" {
		// An empty map, not a nil one: Merge returns nil when its last entry
		// is nil, and BasicSetup is normally called with no extras - so a
		// bare nil silently discarded the apikey and server values below.
		extraOpts := extra
		if extraOpts == nil {
			extraOpts = map[string]any{}
		}

		mergedOpts := vs.Merge([]any{
			// liveClientOptions() FIRST, so the generated fields below win:
			// sdk-test-control.json's test.client.options adds to the live
			// client, it does not redirect it.
			liveClientOptions(),
			map[string]any{
				"apikey": env["CLOUDSMITH_APIKEY"],
			},
			extraOpts,
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
