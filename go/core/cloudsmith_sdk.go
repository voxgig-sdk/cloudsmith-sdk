package core

import (
	"fmt"

	vs "github.com/voxgig-sdk/cloudsmith-sdk/go/utility/struct"
)

type CloudsmithSDK struct {
	Mode     string
	options  map[string]any
	utility  *Utility
	Features []Feature
	rootctx  *Context
}

func NewCloudsmithSDK(options map[string]any) *CloudsmithSDK {
	sdk := &CloudsmithSDK{
		Mode:     "live",
		Features: []Feature{},
	}

	sdk.utility = NewUtility()

	config := MakeConfig()

	sdk.rootctx = sdk.utility.MakeContext(map[string]any{
		"client":  sdk,
		"utility": sdk.utility,
		"config":  config,
		"options": options,
		"shared":  map[string]any{},
	}, nil)

	sdk.options = sdk.utility.MakeOptions(sdk.rootctx)

	if vs.GetPath([]any{"feature", "test", "active"}, sdk.options) == true {
		sdk.Mode = "test"
	}

	sdk.rootctx.Options = sdk.options

	// Add features from config.
	featureOpts := ToMapAny(vs.GetProp(sdk.options, "feature"))
	if featureOpts != nil {
		for _, item := range vs.Items(featureOpts) {
			fname, _ := item[0].(string)
			fopts := ToMapAny(item[1])
			if fopts != nil {
				if active, ok := fopts["active"]; ok {
					if ab, ok := active.(bool); ok && ab {
						sdk.utility.FeatureAdd(sdk.rootctx, makeFeature(fname))
					}
				}
			}
		}
	}

	// Add extension features.
	if extend := vs.GetProp(sdk.options, "extend"); extend != nil {
		if extList, ok := extend.([]any); ok {
			for _, f := range extList {
				if feat, ok := f.(Feature); ok {
					sdk.utility.FeatureAdd(sdk.rootctx, feat)
				}
			}
		}
	}

	// Initialize features.
	for _, f := range sdk.Features {
		sdk.utility.FeatureInit(sdk.rootctx, f)
	}

	sdk.utility.FeatureHook(sdk.rootctx, "PostConstruct")

	return sdk
}

func (sdk *CloudsmithSDK) OptionsMap() map[string]any {
	out := vs.Clone(sdk.options)
	if om, ok := out.(map[string]any); ok {
		return om
	}
	return map[string]any{}
}

func (sdk *CloudsmithSDK) GetUtility() *Utility {
	return CopyUtility(sdk.utility)
}

func (sdk *CloudsmithSDK) GetRootCtx() *Context {
	return sdk.rootctx
}

func (sdk *CloudsmithSDK) Prepare(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "prepare",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	options := sdk.options

	path, _ := vs.GetProp(fetchargs, "path").(string)
	method, _ := vs.GetProp(fetchargs, "method").(string)
	if method == "" {
		method = "GET"
	}

	params := ToMapAny(vs.GetProp(fetchargs, "params"))
	if params == nil {
		params = map[string]any{}
	}
	query := ToMapAny(vs.GetProp(fetchargs, "query"))
	if query == nil {
		query = map[string]any{}
	}

	headers := utility.PrepareHeaders(ctx)

	base, _ := vs.GetProp(options, "base").(string)
	prefix, _ := vs.GetProp(options, "prefix").(string)
	suffix, _ := vs.GetProp(options, "suffix").(string)

	ctx.Spec = NewSpec(map[string]any{
		"base":    base,
		"prefix":  prefix,
		"suffix":  suffix,
		"path":    path,
		"method":  method,
		"params":  params,
		"query":   query,
		"headers": headers,
		"body":    vs.GetProp(fetchargs, "body"),
		"step":    "start",
	})

	// Merge user-provided headers.
	if uh := vs.GetProp(fetchargs, "headers"); uh != nil {
		if uhm, ok := uh.(map[string]any); ok {
			for k, v := range uhm {
				ctx.Spec.Headers[k] = v
			}
		}
	}

	_, err := utility.PrepareAuth(ctx)
	if err != nil {
		return nil, err
	}

	return utility.MakeFetchDef(ctx)
}

func (sdk *CloudsmithSDK) Direct(fetchargs map[string]any) (map[string]any, error) {
	utility := sdk.utility

	fetchdef, err := sdk.Prepare(fetchargs)
	if err != nil {
		return map[string]any{"ok": false, "err": err}, nil
	}

	if fetchargs == nil {
		fetchargs = map[string]any{}
	}

	var ctrl map[string]any
	if c := vs.GetProp(fetchargs, "ctrl"); c != nil {
		if cm, ok := c.(map[string]any); ok {
			ctrl = cm
		}
	}
	if ctrl == nil {
		ctrl = map[string]any{}
	}

	ctx := utility.MakeContext(map[string]any{
		"opname": "direct",
		"ctrl":   ctrl,
	}, sdk.rootctx)

	url, _ := fetchdef["url"].(string)
	fetched, fetchErr := utility.Fetcher(ctx, url, fetchdef)

	if fetchErr != nil {
		return map[string]any{"ok": false, "err": fetchErr}, nil
	}

	if fetched == nil {
		return map[string]any{
			"ok":  false,
			"err": ctx.MakeError("direct_no_response", "response: undefined"),
		}, nil
	}

	if fm, ok := fetched.(map[string]any); ok {
		status := ToInt(vs.GetProp(fm, "status"))
		headers := vs.GetProp(fm, "headers")

		// No-body responses (204, 304) and explicit zero content-length
		// must skip JSON parsing — calling json() on an empty body errors.
		var contentLength string
		if hm, ok := headers.(map[string]any); ok {
			if cl, ok := hm["content-length"]; ok {
				contentLength = fmt.Sprintf("%v", cl)
			}
		}
		noBody := status == 204 || status == 304 || contentLength == "0"

		var jsonData any
		if !noBody {
			if jf := vs.GetProp(fm, "json"); jf != nil {
				if f, ok := jf.(func() any); ok {
					// f() returns nil on parse error in our fetcher.
					jsonData = f()
				}
			}
		}

		return map[string]any{
			"ok":      status >= 200 && status < 300,
			"status":  status,
			"headers": headers,
			"data":    jsonData,
		}, nil
	}

	return map[string]any{"ok": false, "err": ctx.MakeError("direct_invalid", "invalid response type")}, nil
}


// Abort returns a Abort entity bound to this client.
// Idiomatic usage: client.Abort(nil).List(nil, nil) or
// client.Abort(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Abort(data map[string]any) CloudsmithEntity {
	return NewAbortEntityFunc(sdk, data)
}


// Alpine returns a Alpine entity bound to this client.
// Idiomatic usage: client.Alpine(nil).List(nil, nil) or
// client.Alpine(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Alpine(data map[string]any) CloudsmithEntity {
	return NewAlpineEntityFunc(sdk, data)
}


// AuditLog returns a AuditLog entity bound to this client.
// Idiomatic usage: client.AuditLog(nil).List(nil, nil) or
// client.AuditLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) AuditLog(data map[string]any) CloudsmithEntity {
	return NewAuditLogEntityFunc(sdk, data)
}


// Basic returns a Basic entity bound to this client.
// Idiomatic usage: client.Basic(nil).List(nil, nil) or
// client.Basic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Basic(data map[string]any) CloudsmithEntity {
	return NewBasicEntityFunc(sdk, data)
}


// Cargo returns a Cargo entity bound to this client.
// Idiomatic usage: client.Cargo(nil).List(nil, nil) or
// client.Cargo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Cargo(data map[string]any) CloudsmithEntity {
	return NewCargoEntityFunc(sdk, data)
}


// Cocoapod returns a Cocoapod entity bound to this client.
// Idiomatic usage: client.Cocoapod(nil).List(nil, nil) or
// client.Cocoapod(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Cocoapod(data map[string]any) CloudsmithEntity {
	return NewCocoapodEntityFunc(sdk, data)
}


// Complete returns a Complete entity bound to this client.
// Idiomatic usage: client.Complete(nil).List(nil, nil) or
// client.Complete(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Complete(data map[string]any) CloudsmithEntity {
	return NewCompleteEntityFunc(sdk, data)
}


// Composer returns a Composer entity bound to this client.
// Idiomatic usage: client.Composer(nil).List(nil, nil) or
// client.Composer(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Composer(data map[string]any) CloudsmithEntity {
	return NewComposerEntityFunc(sdk, data)
}


// Conan returns a Conan entity bound to this client.
// Idiomatic usage: client.Conan(nil).List(nil, nil) or
// client.Conan(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Conan(data map[string]any) CloudsmithEntity {
	return NewConanEntityFunc(sdk, data)
}


// Conda returns a Conda entity bound to this client.
// Idiomatic usage: client.Conda(nil).List(nil, nil) or
// client.Conda(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Conda(data map[string]any) CloudsmithEntity {
	return NewCondaEntityFunc(sdk, data)
}


// Copy returns a Copy entity bound to this client.
// Idiomatic usage: client.Copy(nil).List(nil, nil) or
// client.Copy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Copy(data map[string]any) CloudsmithEntity {
	return NewCopyEntityFunc(sdk, data)
}


// Cran returns a Cran entity bound to this client.
// Idiomatic usage: client.Cran(nil).List(nil, nil) or
// client.Cran(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Cran(data map[string]any) CloudsmithEntity {
	return NewCranEntityFunc(sdk, data)
}


// Dart returns a Dart entity bound to this client.
// Idiomatic usage: client.Dart(nil).List(nil, nil) or
// client.Dart(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Dart(data map[string]any) CloudsmithEntity {
	return NewDartEntityFunc(sdk, data)
}


// Deb returns a Deb entity bound to this client.
// Idiomatic usage: client.Deb(nil).List(nil, nil) or
// client.Deb(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Deb(data map[string]any) CloudsmithEntity {
	return NewDebEntityFunc(sdk, data)
}


// DenyPolicy returns a DenyPolicy entity bound to this client.
// Idiomatic usage: client.DenyPolicy(nil).List(nil, nil) or
// client.DenyPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) DenyPolicy(data map[string]any) CloudsmithEntity {
	return NewDenyPolicyEntityFunc(sdk, data)
}


// Dependency returns a Dependency entity bound to this client.
// Idiomatic usage: client.Dependency(nil).List(nil, nil) or
// client.Dependency(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Dependency(data map[string]any) CloudsmithEntity {
	return NewDependencyEntityFunc(sdk, data)
}


// Disable returns a Disable entity bound to this client.
// Idiomatic usage: client.Disable(nil).List(nil, nil) or
// client.Disable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Disable(data map[string]any) CloudsmithEntity {
	return NewDisableEntityFunc(sdk, data)
}


// DistributionFull returns a DistributionFull entity bound to this client.
// Idiomatic usage: client.DistributionFull(nil).List(nil, nil) or
// client.DistributionFull(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) DistributionFull(data map[string]any) CloudsmithEntity {
	return NewDistributionFullEntityFunc(sdk, data)
}


// Distro returns a Distro entity bound to this client.
// Idiomatic usage: client.Distro(nil).List(nil, nil) or
// client.Distro(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Distro(data map[string]any) CloudsmithEntity {
	return NewDistroEntityFunc(sdk, data)
}


// Docker returns a Docker entity bound to this client.
// Idiomatic usage: client.Docker(nil).List(nil, nil) or
// client.Docker(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Docker(data map[string]any) CloudsmithEntity {
	return NewDockerEntityFunc(sdk, data)
}


// DynamicMapping returns a DynamicMapping entity bound to this client.
// Idiomatic usage: client.DynamicMapping(nil).List(nil, nil) or
// client.DynamicMapping(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) DynamicMapping(data map[string]any) CloudsmithEntity {
	return NewDynamicMappingEntityFunc(sdk, data)
}


// Ecdsa returns a Ecdsa entity bound to this client.
// Idiomatic usage: client.Ecdsa(nil).List(nil, nil) or
// client.Ecdsa(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Ecdsa(data map[string]any) CloudsmithEntity {
	return NewEcdsaEntityFunc(sdk, data)
}


// Enable returns a Enable entity bound to this client.
// Idiomatic usage: client.Enable(nil).List(nil, nil) or
// client.Enable(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Enable(data map[string]any) CloudsmithEntity {
	return NewEnableEntityFunc(sdk, data)
}


// Entitlement returns a Entitlement entity bound to this client.
// Idiomatic usage: client.Entitlement(nil).List(nil, nil) or
// client.Entitlement(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Entitlement(data map[string]any) CloudsmithEntity {
	return NewEntitlementEntityFunc(sdk, data)
}


// Evaluation returns a Evaluation entity bound to this client.
// Idiomatic usage: client.Evaluation(nil).List(nil, nil) or
// client.Evaluation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Evaluation(data map[string]any) CloudsmithEntity {
	return NewEvaluationEntityFunc(sdk, data)
}


// File returns a File entity bound to this client.
// Idiomatic usage: client.File(nil).List(nil, nil) or
// client.File(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) File(data map[string]any) CloudsmithEntity {
	return NewFileEntityFunc(sdk, data)
}


// Format returns a Format entity bound to this client.
// Idiomatic usage: client.Format(nil).List(nil, nil) or
// client.Format(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Format(data map[string]any) CloudsmithEntity {
	return NewFormatEntityFunc(sdk, data)
}


// Geoip returns a Geoip entity bound to this client.
// Idiomatic usage: client.Geoip(nil).List(nil, nil) or
// client.Geoip(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Geoip(data map[string]any) CloudsmithEntity {
	return NewGeoipEntityFunc(sdk, data)
}


// Gon returns a Gon entity bound to this client.
// Idiomatic usage: client.Gon(nil).List(nil, nil) or
// client.Gon(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon(data map[string]any) CloudsmithEntity {
	return NewGonEntityFunc(sdk, data)
}


// Gon2 returns a Gon2 entity bound to this client.
// Idiomatic usage: client.Gon2(nil).List(nil, nil) or
// client.Gon2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon2(data map[string]any) CloudsmithEntity {
	return NewGon2EntityFunc(sdk, data)
}


// Gon3 returns a Gon3 entity bound to this client.
// Idiomatic usage: client.Gon3(nil).List(nil, nil) or
// client.Gon3(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon3(data map[string]any) CloudsmithEntity {
	return NewGon3EntityFunc(sdk, data)
}


// Gon4 returns a Gon4 entity bound to this client.
// Idiomatic usage: client.Gon4(nil).List(nil, nil) or
// client.Gon4(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon4(data map[string]any) CloudsmithEntity {
	return NewGon4EntityFunc(sdk, data)
}


// Gon5 returns a Gon5 entity bound to this client.
// Idiomatic usage: client.Gon5(nil).List(nil, nil) or
// client.Gon5(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon5(data map[string]any) CloudsmithEntity {
	return NewGon5EntityFunc(sdk, data)
}


// Gon6 returns a Gon6 entity bound to this client.
// Idiomatic usage: client.Gon6(nil).List(nil, nil) or
// client.Gon6(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon6(data map[string]any) CloudsmithEntity {
	return NewGon6EntityFunc(sdk, data)
}


// Gon7 returns a Gon7 entity bound to this client.
// Idiomatic usage: client.Gon7(nil).List(nil, nil) or
// client.Gon7(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon7(data map[string]any) CloudsmithEntity {
	return NewGon7EntityFunc(sdk, data)
}


// Gon8 returns a Gon8 entity bound to this client.
// Idiomatic usage: client.Gon8(nil).List(nil, nil) or
// client.Gon8(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon8(data map[string]any) CloudsmithEntity {
	return NewGon8EntityFunc(sdk, data)
}


// Gon9 returns a Gon9 entity bound to this client.
// Idiomatic usage: client.Gon9(nil).List(nil, nil) or
// client.Gon9(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gon9(data map[string]any) CloudsmithEntity {
	return NewGon9EntityFunc(sdk, data)
}


// Gpg returns a Gpg entity bound to this client.
// Idiomatic usage: client.Gpg(nil).List(nil, nil) or
// client.Gpg(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Gpg(data map[string]any) CloudsmithEntity {
	return NewGpgEntityFunc(sdk, data)
}


// Group returns a Group entity bound to this client.
// Idiomatic usage: client.Group(nil).List(nil, nil) or
// client.Group(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Group(data map[string]any) CloudsmithEntity {
	return NewGroupEntityFunc(sdk, data)
}


// Helm returns a Helm entity bound to this client.
// Idiomatic usage: client.Helm(nil).List(nil, nil) or
// client.Helm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Helm(data map[string]any) CloudsmithEntity {
	return NewHelmEntityFunc(sdk, data)
}


// Hex returns a Hex entity bound to this client.
// Idiomatic usage: client.Hex(nil).List(nil, nil) or
// client.Hex(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Hex(data map[string]any) CloudsmithEntity {
	return NewHexEntityFunc(sdk, data)
}


// History returns a History entity bound to this client.
// Idiomatic usage: client.History(nil).List(nil, nil) or
// client.History(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) History(data map[string]any) CloudsmithEntity {
	return NewHistoryEntityFunc(sdk, data)
}


// Huggingface returns a Huggingface entity bound to this client.
// Idiomatic usage: client.Huggingface(nil).List(nil, nil) or
// client.Huggingface(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Huggingface(data map[string]any) CloudsmithEntity {
	return NewHuggingfaceEntityFunc(sdk, data)
}


// Info returns a Info entity bound to this client.
// Idiomatic usage: client.Info(nil).List(nil, nil) or
// client.Info(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Info(data map[string]any) CloudsmithEntity {
	return NewInfoEntityFunc(sdk, data)
}


// Invite returns a Invite entity bound to this client.
// Idiomatic usage: client.Invite(nil).List(nil, nil) or
// client.Invite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Invite(data map[string]any) CloudsmithEntity {
	return NewInviteEntityFunc(sdk, data)
}


// LicensePolicy returns a LicensePolicy entity bound to this client.
// Idiomatic usage: client.LicensePolicy(nil).List(nil, nil) or
// client.LicensePolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) LicensePolicy(data map[string]any) CloudsmithEntity {
	return NewLicensePolicyEntityFunc(sdk, data)
}


// Limit returns a Limit entity bound to this client.
// Idiomatic usage: client.Limit(nil).List(nil, nil) or
// client.Limit(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Limit(data map[string]any) CloudsmithEntity {
	return NewLimitEntityFunc(sdk, data)
}


// Luarock returns a Luarock entity bound to this client.
// Idiomatic usage: client.Luarock(nil).List(nil, nil) or
// client.Luarock(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Luarock(data map[string]any) CloudsmithEntity {
	return NewLuarockEntityFunc(sdk, data)
}


// Maven returns a Maven entity bound to this client.
// Idiomatic usage: client.Maven(nil).List(nil, nil) or
// client.Maven(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Maven(data map[string]any) CloudsmithEntity {
	return NewMavenEntityFunc(sdk, data)
}


// Member returns a Member entity bound to this client.
// Idiomatic usage: client.Member(nil).List(nil, nil) or
// client.Member(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Member(data map[string]any) CloudsmithEntity {
	return NewMemberEntityFunc(sdk, data)
}


// Move returns a Move entity bound to this client.
// Idiomatic usage: client.Move(nil).List(nil, nil) or
// client.Move(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Move(data map[string]any) CloudsmithEntity {
	return NewMoveEntityFunc(sdk, data)
}


// Namespace returns a Namespace entity bound to this client.
// Idiomatic usage: client.Namespace(nil).List(nil, nil) or
// client.Namespace(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Namespace(data map[string]any) CloudsmithEntity {
	return NewNamespaceEntityFunc(sdk, data)
}


// NamespaceAuditLog returns a NamespaceAuditLog entity bound to this client.
// Idiomatic usage: client.NamespaceAuditLog(nil).List(nil, nil) or
// client.NamespaceAuditLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) NamespaceAuditLog(data map[string]any) CloudsmithEntity {
	return NewNamespaceAuditLogEntityFunc(sdk, data)
}


// Npm returns a Npm entity bound to this client.
// Idiomatic usage: client.Npm(nil).List(nil, nil) or
// client.Npm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Npm(data map[string]any) CloudsmithEntity {
	return NewNpmEntityFunc(sdk, data)
}


// Nuget returns a Nuget entity bound to this client.
// Idiomatic usage: client.Nuget(nil).List(nil, nil) or
// client.Nuget(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Nuget(data map[string]any) CloudsmithEntity {
	return NewNugetEntityFunc(sdk, data)
}


// OpenidConnect returns a OpenidConnect entity bound to this client.
// Idiomatic usage: client.OpenidConnect(nil).List(nil, nil) or
// client.OpenidConnect(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OpenidConnect(data map[string]any) CloudsmithEntity {
	return NewOpenidConnectEntityFunc(sdk, data)
}


// Org returns a Org entity bound to this client.
// Idiomatic usage: client.Org(nil).List(nil, nil) or
// client.Org(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Org(data map[string]any) CloudsmithEntity {
	return NewOrgEntityFunc(sdk, data)
}


// OrganizationGroupSync returns a OrganizationGroupSync entity bound to this client.
// Idiomatic usage: client.OrganizationGroupSync(nil).List(nil, nil) or
// client.OrganizationGroupSync(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationGroupSync(data map[string]any) CloudsmithEntity {
	return NewOrganizationGroupSyncEntityFunc(sdk, data)
}


// OrganizationGroupSyncStatus returns a OrganizationGroupSyncStatus entity bound to this client.
// Idiomatic usage: client.OrganizationGroupSyncStatus(nil).List(nil, nil) or
// client.OrganizationGroupSyncStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationGroupSyncStatus(data map[string]any) CloudsmithEntity {
	return NewOrganizationGroupSyncStatusEntityFunc(sdk, data)
}


// OrganizationInvite returns a OrganizationInvite entity bound to this client.
// Idiomatic usage: client.OrganizationInvite(nil).List(nil, nil) or
// client.OrganizationInvite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationInvite(data map[string]any) CloudsmithEntity {
	return NewOrganizationInviteEntityFunc(sdk, data)
}


// OrganizationInviteExtend returns a OrganizationInviteExtend entity bound to this client.
// Idiomatic usage: client.OrganizationInviteExtend(nil).List(nil, nil) or
// client.OrganizationInviteExtend(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationInviteExtend(data map[string]any) CloudsmithEntity {
	return NewOrganizationInviteExtendEntityFunc(sdk, data)
}


// OrganizationMembership returns a OrganizationMembership entity bound to this client.
// Idiomatic usage: client.OrganizationMembership(nil).List(nil, nil) or
// client.OrganizationMembership(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationMembership(data map[string]any) CloudsmithEntity {
	return NewOrganizationMembershipEntityFunc(sdk, data)
}


// OrganizationMembershipRoleUpdate returns a OrganizationMembershipRoleUpdate entity bound to this client.
// Idiomatic usage: client.OrganizationMembershipRoleUpdate(nil).List(nil, nil) or
// client.OrganizationMembershipRoleUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationMembershipRoleUpdate(data map[string]any) CloudsmithEntity {
	return NewOrganizationMembershipRoleUpdateEntityFunc(sdk, data)
}


// OrganizationMembershipVisibilityUpdate returns a OrganizationMembershipVisibilityUpdate entity bound to this client.
// Idiomatic usage: client.OrganizationMembershipVisibilityUpdate(nil).List(nil, nil) or
// client.OrganizationMembershipVisibilityUpdate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationMembershipVisibilityUpdate(data map[string]any) CloudsmithEntity {
	return NewOrganizationMembershipVisibilityUpdateEntityFunc(sdk, data)
}


// OrganizationPackageLicensePolicy returns a OrganizationPackageLicensePolicy entity bound to this client.
// Idiomatic usage: client.OrganizationPackageLicensePolicy(nil).List(nil, nil) or
// client.OrganizationPackageLicensePolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationPackageLicensePolicy(data map[string]any) CloudsmithEntity {
	return NewOrganizationPackageLicensePolicyEntityFunc(sdk, data)
}


// OrganizationPackageVulnerabilityPolicy returns a OrganizationPackageVulnerabilityPolicy entity bound to this client.
// Idiomatic usage: client.OrganizationPackageVulnerabilityPolicy(nil).List(nil, nil) or
// client.OrganizationPackageVulnerabilityPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationPackageVulnerabilityPolicy(data map[string]any) CloudsmithEntity {
	return NewOrganizationPackageVulnerabilityPolicyEntityFunc(sdk, data)
}


// OrganizationSamlAuth returns a OrganizationSamlAuth entity bound to this client.
// Idiomatic usage: client.OrganizationSamlAuth(nil).List(nil, nil) or
// client.OrganizationSamlAuth(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationSamlAuth(data map[string]any) CloudsmithEntity {
	return NewOrganizationSamlAuthEntityFunc(sdk, data)
}


// OrganizationTeam returns a OrganizationTeam entity bound to this client.
// Idiomatic usage: client.OrganizationTeam(nil).List(nil, nil) or
// client.OrganizationTeam(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationTeam(data map[string]any) CloudsmithEntity {
	return NewOrganizationTeamEntityFunc(sdk, data)
}


// OrganizationTeamMember returns a OrganizationTeamMember entity bound to this client.
// Idiomatic usage: client.OrganizationTeamMember(nil).List(nil, nil) or
// client.OrganizationTeamMember(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) OrganizationTeamMember(data map[string]any) CloudsmithEntity {
	return NewOrganizationTeamMemberEntityFunc(sdk, data)
}


// Oss returns a Oss entity bound to this client.
// Idiomatic usage: client.Oss(nil).List(nil, nil) or
// client.Oss(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Oss(data map[string]any) CloudsmithEntity {
	return NewOssEntityFunc(sdk, data)
}


// P2n returns a P2n entity bound to this client.
// Idiomatic usage: client.P2n(nil).List(nil, nil) or
// client.P2n(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) P2n(data map[string]any) CloudsmithEntity {
	return NewP2nEntityFunc(sdk, data)
}


// P2n2 returns a P2n2 entity bound to this client.
// Idiomatic usage: client.P2n2(nil).List(nil, nil) or
// client.P2n2(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) P2n2(data map[string]any) CloudsmithEntity {
	return NewP2n2EntityFunc(sdk, data)
}


// Package returns a Package entity bound to this client.
// Idiomatic usage: client.Package(nil).List(nil, nil) or
// client.Package(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Package(data map[string]any) CloudsmithEntity {
	return NewPackageEntityFunc(sdk, data)
}


// PackageDenyPolicy returns a PackageDenyPolicy entity bound to this client.
// Idiomatic usage: client.PackageDenyPolicy(nil).List(nil, nil) or
// client.PackageDenyPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageDenyPolicy(data map[string]any) CloudsmithEntity {
	return NewPackageDenyPolicyEntityFunc(sdk, data)
}


// PackageFilePartsUpload returns a PackageFilePartsUpload entity bound to this client.
// Idiomatic usage: client.PackageFilePartsUpload(nil).List(nil, nil) or
// client.PackageFilePartsUpload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageFilePartsUpload(data map[string]any) CloudsmithEntity {
	return NewPackageFilePartsUploadEntityFunc(sdk, data)
}


// PackageFileUpload returns a PackageFileUpload entity bound to this client.
// Idiomatic usage: client.PackageFileUpload(nil).List(nil, nil) or
// client.PackageFileUpload(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageFileUpload(data map[string]any) CloudsmithEntity {
	return NewPackageFileUploadEntityFunc(sdk, data)
}


// PackageLicensePolicyEvaluation returns a PackageLicensePolicyEvaluation entity bound to this client.
// Idiomatic usage: client.PackageLicensePolicyEvaluation(nil).List(nil, nil) or
// client.PackageLicensePolicyEvaluation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageLicensePolicyEvaluation(data map[string]any) CloudsmithEntity {
	return NewPackageLicensePolicyEvaluationEntityFunc(sdk, data)
}


// PackageVersionBadge returns a PackageVersionBadge entity bound to this client.
// Idiomatic usage: client.PackageVersionBadge(nil).List(nil, nil) or
// client.PackageVersionBadge(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageVersionBadge(data map[string]any) CloudsmithEntity {
	return NewPackageVersionBadgeEntityFunc(sdk, data)
}


// PackageVulnerabilityPolicyEvaluation returns a PackageVulnerabilityPolicyEvaluation entity bound to this client.
// Idiomatic usage: client.PackageVulnerabilityPolicyEvaluation(nil).List(nil, nil) or
// client.PackageVulnerabilityPolicyEvaluation(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) PackageVulnerabilityPolicyEvaluation(data map[string]any) CloudsmithEntity {
	return NewPackageVulnerabilityPolicyEvaluationEntityFunc(sdk, data)
}


// Privilege returns a Privilege entity bound to this client.
// Idiomatic usage: client.Privilege(nil).List(nil, nil) or
// client.Privilege(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Privilege(data map[string]any) CloudsmithEntity {
	return NewPrivilegeEntityFunc(sdk, data)
}


// Profile returns a Profile entity bound to this client.
// Idiomatic usage: client.Profile(nil).List(nil, nil) or
// client.Profile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Profile(data map[string]any) CloudsmithEntity {
	return NewProfileEntityFunc(sdk, data)
}


// ProviderSetting returns a ProviderSetting entity bound to this client.
// Idiomatic usage: client.ProviderSetting(nil).List(nil, nil) or
// client.ProviderSetting(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) ProviderSetting(data map[string]any) CloudsmithEntity {
	return NewProviderSettingEntityFunc(sdk, data)
}


// ProviderSettingsWrite returns a ProviderSettingsWrite entity bound to this client.
// Idiomatic usage: client.ProviderSettingsWrite(nil).List(nil, nil) or
// client.ProviderSettingsWrite(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) ProviderSettingsWrite(data map[string]any) CloudsmithEntity {
	return NewProviderSettingsWriteEntityFunc(sdk, data)
}


// Python returns a Python entity bound to this client.
// Idiomatic usage: client.Python(nil).List(nil, nil) or
// client.Python(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Python(data map[string]any) CloudsmithEntity {
	return NewPythonEntityFunc(sdk, data)
}


// Quarantine returns a Quarantine entity bound to this client.
// Idiomatic usage: client.Quarantine(nil).List(nil, nil) or
// client.Quarantine(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Quarantine(data map[string]any) CloudsmithEntity {
	return NewQuarantineEntityFunc(sdk, data)
}


// Quota returns a Quota entity bound to this client.
// Idiomatic usage: client.Quota(nil).List(nil, nil) or
// client.Quota(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Quota(data map[string]any) CloudsmithEntity {
	return NewQuotaEntityFunc(sdk, data)
}


// Raw returns a Raw entity bound to this client.
// Idiomatic usage: client.Raw(nil).List(nil, nil) or
// client.Raw(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Raw(data map[string]any) CloudsmithEntity {
	return NewRawEntityFunc(sdk, data)
}


// Refresh returns a Refresh entity bound to this client.
// Idiomatic usage: client.Refresh(nil).List(nil, nil) or
// client.Refresh(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Refresh(data map[string]any) CloudsmithEntity {
	return NewRefreshEntityFunc(sdk, data)
}


// Regenerate returns a Regenerate entity bound to this client.
// Idiomatic usage: client.Regenerate(nil).List(nil, nil) or
// client.Regenerate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Regenerate(data map[string]any) CloudsmithEntity {
	return NewRegenerateEntityFunc(sdk, data)
}


// Repo returns a Repo entity bound to this client.
// Idiomatic usage: client.Repo(nil).List(nil, nil) or
// client.Repo(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Repo(data map[string]any) CloudsmithEntity {
	return NewRepoEntityFunc(sdk, data)
}


// RepositoryAuditLog returns a RepositoryAuditLog entity bound to this client.
// Idiomatic usage: client.RepositoryAuditLog(nil).List(nil, nil) or
// client.RepositoryAuditLog(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryAuditLog(data map[string]any) CloudsmithEntity {
	return NewRepositoryAuditLogEntityFunc(sdk, data)
}


// RepositoryEcdsaKey returns a RepositoryEcdsaKey entity bound to this client.
// Idiomatic usage: client.RepositoryEcdsaKey(nil).List(nil, nil) or
// client.RepositoryEcdsaKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryEcdsaKey(data map[string]any) CloudsmithEntity {
	return NewRepositoryEcdsaKeyEntityFunc(sdk, data)
}


// RepositoryGeoIpRule returns a RepositoryGeoIpRule entity bound to this client.
// Idiomatic usage: client.RepositoryGeoIpRule(nil).List(nil, nil) or
// client.RepositoryGeoIpRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryGeoIpRule(data map[string]any) CloudsmithEntity {
	return NewRepositoryGeoIpRuleEntityFunc(sdk, data)
}


// RepositoryGeoIpStatus returns a RepositoryGeoIpStatus entity bound to this client.
// Idiomatic usage: client.RepositoryGeoIpStatus(nil).List(nil, nil) or
// client.RepositoryGeoIpStatus(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryGeoIpStatus(data map[string]any) CloudsmithEntity {
	return NewRepositoryGeoIpStatusEntityFunc(sdk, data)
}


// RepositoryGeoIpTestAddress returns a RepositoryGeoIpTestAddress entity bound to this client.
// Idiomatic usage: client.RepositoryGeoIpTestAddress(nil).List(nil, nil) or
// client.RepositoryGeoIpTestAddress(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryGeoIpTestAddress(data map[string]any) CloudsmithEntity {
	return NewRepositoryGeoIpTestAddressEntityFunc(sdk, data)
}


// RepositoryGpgKey returns a RepositoryGpgKey entity bound to this client.
// Idiomatic usage: client.RepositoryGpgKey(nil).List(nil, nil) or
// client.RepositoryGpgKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryGpgKey(data map[string]any) CloudsmithEntity {
	return NewRepositoryGpgKeyEntityFunc(sdk, data)
}


// RepositoryPrivilegeInput returns a RepositoryPrivilegeInput entity bound to this client.
// Idiomatic usage: client.RepositoryPrivilegeInput(nil).List(nil, nil) or
// client.RepositoryPrivilegeInput(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryPrivilegeInput(data map[string]any) CloudsmithEntity {
	return NewRepositoryPrivilegeInputEntityFunc(sdk, data)
}


// RepositoryRetentionRule returns a RepositoryRetentionRule entity bound to this client.
// Idiomatic usage: client.RepositoryRetentionRule(nil).List(nil, nil) or
// client.RepositoryRetentionRule(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryRetentionRule(data map[string]any) CloudsmithEntity {
	return NewRepositoryRetentionRuleEntityFunc(sdk, data)
}


// RepositoryRsaKey returns a RepositoryRsaKey entity bound to this client.
// Idiomatic usage: client.RepositoryRsaKey(nil).List(nil, nil) or
// client.RepositoryRsaKey(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryRsaKey(data map[string]any) CloudsmithEntity {
	return NewRepositoryRsaKeyEntityFunc(sdk, data)
}


// RepositoryToken returns a RepositoryToken entity bound to this client.
// Idiomatic usage: client.RepositoryToken(nil).List(nil, nil) or
// client.RepositoryToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryToken(data map[string]any) CloudsmithEntity {
	return NewRepositoryTokenEntityFunc(sdk, data)
}


// RepositoryTokenRefresh returns a RepositoryTokenRefresh entity bound to this client.
// Idiomatic usage: client.RepositoryTokenRefresh(nil).List(nil, nil) or
// client.RepositoryTokenRefresh(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryTokenRefresh(data map[string]any) CloudsmithEntity {
	return NewRepositoryTokenRefreshEntityFunc(sdk, data)
}


// RepositoryTokenSync returns a RepositoryTokenSync entity bound to this client.
// Idiomatic usage: client.RepositoryTokenSync(nil).List(nil, nil) or
// client.RepositoryTokenSync(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryTokenSync(data map[string]any) CloudsmithEntity {
	return NewRepositoryTokenSyncEntityFunc(sdk, data)
}


// RepositoryWebhook returns a RepositoryWebhook entity bound to this client.
// Idiomatic usage: client.RepositoryWebhook(nil).List(nil, nil) or
// client.RepositoryWebhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryWebhook(data map[string]any) CloudsmithEntity {
	return NewRepositoryWebhookEntityFunc(sdk, data)
}


// RepositoryX509EcdsaCertificate returns a RepositoryX509EcdsaCertificate entity bound to this client.
// Idiomatic usage: client.RepositoryX509EcdsaCertificate(nil).List(nil, nil) or
// client.RepositoryX509EcdsaCertificate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryX509EcdsaCertificate(data map[string]any) CloudsmithEntity {
	return NewRepositoryX509EcdsaCertificateEntityFunc(sdk, data)
}


// RepositoryX509RsaCertificate returns a RepositoryX509RsaCertificate entity bound to this client.
// Idiomatic usage: client.RepositoryX509RsaCertificate(nil).List(nil, nil) or
// client.RepositoryX509RsaCertificate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) RepositoryX509RsaCertificate(data map[string]any) CloudsmithEntity {
	return NewRepositoryX509RsaCertificateEntityFunc(sdk, data)
}


// Reset returns a Reset entity bound to this client.
// Idiomatic usage: client.Reset(nil).List(nil, nil) or
// client.Reset(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Reset(data map[string]any) CloudsmithEntity {
	return NewResetEntityFunc(sdk, data)
}


// ResourcesRateCheck returns a ResourcesRateCheck entity bound to this client.
// Idiomatic usage: client.ResourcesRateCheck(nil).List(nil, nil) or
// client.ResourcesRateCheck(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) ResourcesRateCheck(data map[string]any) CloudsmithEntity {
	return NewResourcesRateCheckEntityFunc(sdk, data)
}


// Resync returns a Resync entity bound to this client.
// Idiomatic usage: client.Resync(nil).List(nil, nil) or
// client.Resync(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Resync(data map[string]any) CloudsmithEntity {
	return NewResyncEntityFunc(sdk, data)
}


// Retention returns a Retention entity bound to this client.
// Idiomatic usage: client.Retention(nil).List(nil, nil) or
// client.Retention(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Retention(data map[string]any) CloudsmithEntity {
	return NewRetentionEntityFunc(sdk, data)
}


// Rpm returns a Rpm entity bound to this client.
// Idiomatic usage: client.Rpm(nil).List(nil, nil) or
// client.Rpm(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Rpm(data map[string]any) CloudsmithEntity {
	return NewRpmEntityFunc(sdk, data)
}


// Rsa returns a Rsa entity bound to this client.
// Idiomatic usage: client.Rsa(nil).List(nil, nil) or
// client.Rsa(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Rsa(data map[string]any) CloudsmithEntity {
	return NewRsaEntityFunc(sdk, data)
}


// Ruby returns a Ruby entity bound to this client.
// Idiomatic usage: client.Ruby(nil).List(nil, nil) or
// client.Ruby(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Ruby(data map[string]any) CloudsmithEntity {
	return NewRubyEntityFunc(sdk, data)
}


// SamlGroupSync returns a SamlGroupSync entity bound to this client.
// Idiomatic usage: client.SamlGroupSync(nil).List(nil, nil) or
// client.SamlGroupSync(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) SamlGroupSync(data map[string]any) CloudsmithEntity {
	return NewSamlGroupSyncEntityFunc(sdk, data)
}


// Scan returns a Scan entity bound to this client.
// Idiomatic usage: client.Scan(nil).List(nil, nil) or
// client.Scan(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Scan(data map[string]any) CloudsmithEntity {
	return NewScanEntityFunc(sdk, data)
}


// Self returns a Self entity bound to this client.
// Idiomatic usage: client.Self(nil).List(nil, nil) or
// client.Self(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Self(data map[string]any) CloudsmithEntity {
	return NewSelfEntityFunc(sdk, data)
}


// Service returns a Service entity bound to this client.
// Idiomatic usage: client.Service(nil).List(nil, nil) or
// client.Service(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Service(data map[string]any) CloudsmithEntity {
	return NewServiceEntityFunc(sdk, data)
}


// Status returns a Status entity bound to this client.
// Idiomatic usage: client.Status(nil).List(nil, nil) or
// client.Status(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Status(data map[string]any) CloudsmithEntity {
	return NewStatusEntityFunc(sdk, data)
}


// StatusBasic returns a StatusBasic entity bound to this client.
// Idiomatic usage: client.StatusBasic(nil).List(nil, nil) or
// client.StatusBasic(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) StatusBasic(data map[string]any) CloudsmithEntity {
	return NewStatusBasicEntityFunc(sdk, data)
}


// StorageRegion returns a StorageRegion entity bound to this client.
// Idiomatic usage: client.StorageRegion(nil).List(nil, nil) or
// client.StorageRegion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) StorageRegion(data map[string]any) CloudsmithEntity {
	return NewStorageRegionEntityFunc(sdk, data)
}


// Swift returns a Swift entity bound to this client.
// Idiomatic usage: client.Swift(nil).List(nil, nil) or
// client.Swift(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Swift(data map[string]any) CloudsmithEntity {
	return NewSwiftEntityFunc(sdk, data)
}


// Sync returns a Sync entity bound to this client.
// Idiomatic usage: client.Sync(nil).List(nil, nil) or
// client.Sync(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Sync(data map[string]any) CloudsmithEntity {
	return NewSyncEntityFunc(sdk, data)
}


// Tag returns a Tag entity bound to this client.
// Idiomatic usage: client.Tag(nil).List(nil, nil) or
// client.Tag(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Tag(data map[string]any) CloudsmithEntity {
	return NewTagEntityFunc(sdk, data)
}


// Team returns a Team entity bound to this client.
// Idiomatic usage: client.Team(nil).List(nil, nil) or
// client.Team(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Team(data map[string]any) CloudsmithEntity {
	return NewTeamEntityFunc(sdk, data)
}


// Terraform returns a Terraform entity bound to this client.
// Idiomatic usage: client.Terraform(nil).List(nil, nil) or
// client.Terraform(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Terraform(data map[string]any) CloudsmithEntity {
	return NewTerraformEntityFunc(sdk, data)
}


// Test returns a Test entity bound to this client.
// Idiomatic usage: client.Test(nil).List(nil, nil) or
// client.Test(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Test(data map[string]any) CloudsmithEntity {
	return NewTestEntityFunc(sdk, data)
}


// Token returns a Token entity bound to this client.
// Idiomatic usage: client.Token(nil).List(nil, nil) or
// client.Token(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Token(data map[string]any) CloudsmithEntity {
	return NewTokenEntityFunc(sdk, data)
}


// TransferRegion returns a TransferRegion entity bound to this client.
// Idiomatic usage: client.TransferRegion(nil).List(nil, nil) or
// client.TransferRegion(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) TransferRegion(data map[string]any) CloudsmithEntity {
	return NewTransferRegionEntityFunc(sdk, data)
}


// User returns a User entity bound to this client.
// Idiomatic usage: client.User(nil).List(nil, nil) or
// client.User(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) User(data map[string]any) CloudsmithEntity {
	return NewUserEntityFunc(sdk, data)
}


// UserAuthToken returns a UserAuthToken entity bound to this client.
// Idiomatic usage: client.UserAuthToken(nil).List(nil, nil) or
// client.UserAuthToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) UserAuthToken(data map[string]any) CloudsmithEntity {
	return NewUserAuthTokenEntityFunc(sdk, data)
}


// UserAuthenticationToken returns a UserAuthenticationToken entity bound to this client.
// Idiomatic usage: client.UserAuthenticationToken(nil).List(nil, nil) or
// client.UserAuthenticationToken(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) UserAuthenticationToken(data map[string]any) CloudsmithEntity {
	return NewUserAuthenticationTokenEntityFunc(sdk, data)
}


// UserBrief returns a UserBrief entity bound to this client.
// Idiomatic usage: client.UserBrief(nil).List(nil, nil) or
// client.UserBrief(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) UserBrief(data map[string]any) CloudsmithEntity {
	return NewUserBriefEntityFunc(sdk, data)
}


// UserProfile returns a UserProfile entity bound to this client.
// Idiomatic usage: client.UserProfile(nil).List(nil, nil) or
// client.UserProfile(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) UserProfile(data map[string]any) CloudsmithEntity {
	return NewUserProfileEntityFunc(sdk, data)
}


// Vagrant returns a Vagrant entity bound to this client.
// Idiomatic usage: client.Vagrant(nil).List(nil, nil) or
// client.Vagrant(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Vagrant(data map[string]any) CloudsmithEntity {
	return NewVagrantEntityFunc(sdk, data)
}


// Validate returns a Validate entity bound to this client.
// Idiomatic usage: client.Validate(nil).List(nil, nil) or
// client.Validate(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Validate(data map[string]any) CloudsmithEntity {
	return NewValidateEntityFunc(sdk, data)
}


// Version returns a Version entity bound to this client.
// Idiomatic usage: client.Version(nil).List(nil, nil) or
// client.Version(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Version(data map[string]any) CloudsmithEntity {
	return NewVersionEntityFunc(sdk, data)
}


// Vulnerability returns a Vulnerability entity bound to this client.
// Idiomatic usage: client.Vulnerability(nil).List(nil, nil) or
// client.Vulnerability(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Vulnerability(data map[string]any) CloudsmithEntity {
	return NewVulnerabilityEntityFunc(sdk, data)
}


// VulnerabilityPolicy returns a VulnerabilityPolicy entity bound to this client.
// Idiomatic usage: client.VulnerabilityPolicy(nil).List(nil, nil) or
// client.VulnerabilityPolicy(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) VulnerabilityPolicy(data map[string]any) CloudsmithEntity {
	return NewVulnerabilityPolicyEntityFunc(sdk, data)
}


// Webhook returns a Webhook entity bound to this client.
// Idiomatic usage: client.Webhook(nil).List(nil, nil) or
// client.Webhook(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) Webhook(data map[string]any) CloudsmithEntity {
	return NewWebhookEntityFunc(sdk, data)
}


// X509Ecdsa returns a X509Ecdsa entity bound to this client.
// Idiomatic usage: client.X509Ecdsa(nil).List(nil, nil) or
// client.X509Ecdsa(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) X509Ecdsa(data map[string]any) CloudsmithEntity {
	return NewX509EcdsaEntityFunc(sdk, data)
}


// X509Rsa returns a X509Rsa entity bound to this client.
// Idiomatic usage: client.X509Rsa(nil).List(nil, nil) or
// client.X509Rsa(nil).Load(map[string]any{"id": ...}, nil).
func (sdk *CloudsmithSDK) X509Rsa(data map[string]any) CloudsmithEntity {
	return NewX509RsaEntityFunc(sdk, data)
}



func TestSDK(testopts map[string]any, sdkopts map[string]any) *CloudsmithSDK {
	if sdkopts == nil {
		sdkopts = map[string]any{}
	}
	sdkopts = vs.Clone(sdkopts).(map[string]any)

	if testopts == nil {
		testopts = map[string]any{}
	}
	testopts = vs.Clone(testopts).(map[string]any)
	testopts["active"] = true

	vs.SetPath(sdkopts, []any{"feature", "test"}, testopts)

	sdk := NewCloudsmithSDK(sdkopts)
	sdk.Mode = "test"

	return sdk
}
