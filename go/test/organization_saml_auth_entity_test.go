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

func TestOrganizationSamlAuthEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.OrganizationSamlAuth(nil)
		if ent == nil {
			t.Fatal("expected non-nil OrganizationSamlAuthEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := organization_saml_authBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"update", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "organization_saml_auth." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		organizationSamlAuthRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.organization_saml_auth", setup.data)))
		var organizationSamlAuthRef01Data map[string]any
		if len(organizationSamlAuthRef01DataRaw) > 0 {
			organizationSamlAuthRef01Data = core.ToMapAny(organizationSamlAuthRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = organizationSamlAuthRef01Data

		// UPDATE
		organizationSamlAuthRef01Ent := client.OrganizationSamlAuth(nil)
		organizationSamlAuthRef01DataUp0Up := map[string]any{
		}

		organizationSamlAuthRef01MarkdefUp0Name := "saml_metadata_inline"
		organizationSamlAuthRef01MarkdefUp0Value := fmt.Sprintf("Mark01-organization_saml_auth_ref01_%d", setup.now)
		organizationSamlAuthRef01DataUp0Up[organizationSamlAuthRef01MarkdefUp0Name] = organizationSamlAuthRef01MarkdefUp0Value

		organizationSamlAuthRef01ResdataUp0Result, err := organizationSamlAuthRef01Ent.Update(organizationSamlAuthRef01DataUp0Up, nil)
		if err != nil {
			t.Fatalf("update failed: %v", err)
		}
		organizationSamlAuthRef01ResdataUp0 := core.ToMapAny(organizationSamlAuthRef01ResdataUp0Result)
		if organizationSamlAuthRef01ResdataUp0 == nil {
			t.Fatal("expected update result to be a map")
		}
		if organizationSamlAuthRef01ResdataUp0[organizationSamlAuthRef01MarkdefUp0Name] != organizationSamlAuthRef01MarkdefUp0Value {
			t.Fatalf("expected %s to be updated, got %v", organizationSamlAuthRef01MarkdefUp0Name, organizationSamlAuthRef01ResdataUp0[organizationSamlAuthRef01MarkdefUp0Name])
		}

		// LOAD
		organizationSamlAuthRef01MatchDt0 := map[string]any{}
		organizationSamlAuthRef01DataDt0Loaded, err := organizationSamlAuthRef01Ent.Load(organizationSamlAuthRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if organizationSamlAuthRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func organization_saml_authBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "organization_saml_auth", "OrganizationSamlAuthTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read organization_saml_auth test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse organization_saml_auth test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"organization_saml_auth01", "organization_saml_auth02", "organization_saml_auth03", "org01", "org02", "org03"},
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
	entidEnvRaw := os.Getenv("CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID": idmap,
		"CLOUDSMITH_TEST_LIVE":      "FALSE",
		"CLOUDSMITH_TEST_EXPLAIN":   "FALSE",
		"CLOUDSMITH_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID"])
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
