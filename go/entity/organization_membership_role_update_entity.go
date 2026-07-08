package entity

import (
	"github.com/voxgig-sdk/cloudsmith-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudsmith-sdk/go/utility/struct"
)

type OrganizationMembershipRoleUpdateEntity struct {
	name    string
	client  *core.CloudsmithSDK
	utility *core.Utility
	entopts map[string]any
	data    map[string]any
	match   map[string]any
	entctx  *core.Context
}

func NewOrganizationMembershipRoleUpdateEntity(client *core.CloudsmithSDK, entopts map[string]any) *OrganizationMembershipRoleUpdateEntity {
	if entopts == nil {
		entopts = map[string]any{}
	}
	if _, ok := entopts["active"]; !ok {
		entopts["active"] = true
	} else if entopts["active"] == false {
		// keep false
	} else {
		entopts["active"] = true
	}

	e := &OrganizationMembershipRoleUpdateEntity{
		name:    "organization_membership_role_update",
		client:  client,
		utility: client.GetUtility(),
		entopts: entopts,
		data:    map[string]any{},
		match:   map[string]any{},
	}

	e.entctx = e.utility.MakeContext(map[string]any{
		"entity":  e,
		"entopts": entopts,
	}, client.GetRootCtx())

	e.utility.FeatureHook(e.entctx, "PostConstructEntity")

	return e
}

func (e *OrganizationMembershipRoleUpdateEntity) GetName() string { return e.name }

func (e *OrganizationMembershipRoleUpdateEntity) Make() core.Entity {
	opts := map[string]any{}
	for k, v := range e.entopts {
		opts[k] = v
	}
	return NewOrganizationMembershipRoleUpdateEntity(e.client, opts)
}

func (e *OrganizationMembershipRoleUpdateEntity) Data(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.data = core.ToMapAny(vs.Clone(args[0]))
		if e.data == nil {
			e.data = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetData")
	}

	e.utility.FeatureHook(e.entctx, "GetData")
	out := vs.Clone(e.data)
	return out
}

func (e *OrganizationMembershipRoleUpdateEntity) Match(args ...any) any {
	if len(args) > 0 && args[0] != nil {
		e.match = core.ToMapAny(vs.Clone(args[0]))
		if e.match == nil {
			e.match = map[string]any{}
		}
		e.utility.FeatureHook(e.entctx, "SetMatch")
	}

	e.utility.FeatureHook(e.entctx, "GetMatch")
	out := vs.Clone(e.match)
	return out
}

// DataTyped is the statically-typed accessor for this entity's data. With no
// argument it returns the current data as an OrganizationMembershipRoleUpdate; with an argument it
// sets the data and returns the stored value. It delegates to the untyped Data
// (identical runtime) and converts at the typed boundary.
func (e *OrganizationMembershipRoleUpdateEntity) DataTyped(data ...OrganizationMembershipRoleUpdate) OrganizationMembershipRoleUpdate {
	if len(data) > 0 {
		return typedFrom[OrganizationMembershipRoleUpdate](e.Data(asMap(data[0])))
	}
	return typedFrom[OrganizationMembershipRoleUpdate](e.Data())
}

// MatchTyped mirrors DataTyped for the entity's match filter. The match is a
// partial of the entity, so it round-trips through OrganizationMembershipRoleUpdate (all fields
// optional at the wire level).
func (e *OrganizationMembershipRoleUpdateEntity) MatchTyped(match ...OrganizationMembershipRoleUpdate) OrganizationMembershipRoleUpdate {
	if len(match) > 0 {
		return typedFrom[OrganizationMembershipRoleUpdate](e.Match(asMap(match[0])))
	}
	return typedFrom[OrganizationMembershipRoleUpdate](e.Match())
}

func (e *OrganizationMembershipRoleUpdateEntity) Load(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("load", e.name)
}


func (e *OrganizationMembershipRoleUpdateEntity) List(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("list", e.name)
}


func (e *OrganizationMembershipRoleUpdateEntity) Create(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("create", e.name)
}



func (e *OrganizationMembershipRoleUpdateEntity) Update(reqdata map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":  "update",
		"ctrl":    ctrl,
		"match":   e.match,
		"data":    e.data,
		"reqdata": reqdata,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resmatch != nil {
				e.match = ctx.Result.Resmatch
			}
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// UpdateTyped is the statically-typed variant of Update: it takes an
// OrganizationMembershipRoleUpdateUpdateData and returns an OrganizationMembershipRoleUpdate. It delegates to the untyped
// Update (identical runtime) and converts at the typed boundary.
func (e *OrganizationMembershipRoleUpdateEntity) UpdateTyped(reqdata OrganizationMembershipRoleUpdateUpdateData, ctrl map[string]any) (OrganizationMembershipRoleUpdate, error) {
	res, err := e.Update(asMap(reqdata), ctrl)
	if err != nil {
		return OrganizationMembershipRoleUpdate{}, err
	}
	return typedFrom[OrganizationMembershipRoleUpdate](res), nil
}



func (e *OrganizationMembershipRoleUpdateEntity) Remove(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("remove", e.name)
}


func (e *OrganizationMembershipRoleUpdateEntity) runOp(ctx *core.Context, postDone func()) (any, error) {
	utility := e.utility

	utility.FeatureHook(ctx, "PrePoint")
	point, err := utility.MakePoint(ctx)
	ctx.Out["point"] = point
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreSpec")
	spec, err := utility.MakeSpec(ctx)
	ctx.Out["spec"] = spec
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreRequest")
	resp, err := utility.MakeRequest(ctx)
	ctx.Out["request"] = resp
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResponse")
	resp2, err := utility.MakeResponse(ctx)
	ctx.Out["response"] = resp2
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreResult")
	result, err := utility.MakeResult(ctx)
	ctx.Out["result"] = result
	if err != nil {
		return utility.MakeError(ctx, err)
	}

	utility.FeatureHook(ctx, "PreDone")
	postDone()

	return utility.Done(ctx)
}
