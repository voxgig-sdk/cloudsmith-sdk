package entity

import (
	"github.com/voxgig-sdk/cloudsmith-sdk/go/core"

	vs "github.com/voxgig-sdk/cloudsmith-sdk/go/utility/struct"
)

type UserAuthenticationTokenEntity struct {
	name    string
	client  *core.CloudsmithSDK
	utility *core.Utility
	entopts map[string]any
	data    map[string]any
	match   map[string]any
	entctx  *core.Context
}

func NewUserAuthenticationTokenEntity(client *core.CloudsmithSDK, entopts map[string]any) *UserAuthenticationTokenEntity {
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

	e := &UserAuthenticationTokenEntity{
		name:    "user_authentication_token",
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

func (e *UserAuthenticationTokenEntity) GetName() string { return e.name }

func (e *UserAuthenticationTokenEntity) Make() core.Entity {
	opts := map[string]any{}
	for k, v := range e.entopts {
		opts[k] = v
	}
	return NewUserAuthenticationTokenEntity(e.client, opts)
}

func (e *UserAuthenticationTokenEntity) Data(args ...any) any {
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

func (e *UserAuthenticationTokenEntity) Match(args ...any) any {
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
// argument it returns the current data as an UserAuthenticationToken; with an argument it
// sets the data and returns the stored value. It delegates to the untyped Data
// (identical runtime) and converts at the typed boundary.
func (e *UserAuthenticationTokenEntity) DataTyped(data ...UserAuthenticationToken) UserAuthenticationToken {
	if len(data) > 0 {
		return typedFrom[UserAuthenticationToken](e.Data(asMap(data[0])))
	}
	return typedFrom[UserAuthenticationToken](e.Data())
}

// MatchTyped mirrors DataTyped for the entity's match filter. The match is a
// partial of the entity, so it round-trips through UserAuthenticationToken (all fields
// optional at the wire level).
func (e *UserAuthenticationTokenEntity) MatchTyped(match ...UserAuthenticationToken) UserAuthenticationToken {
	if len(match) > 0 {
		return typedFrom[UserAuthenticationToken](e.Match(asMap(match[0])))
	}
	return typedFrom[UserAuthenticationToken](e.Match())
}

func (e *UserAuthenticationTokenEntity) Load(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("load", e.name)
}


func (e *UserAuthenticationTokenEntity) List(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("list", e.name)
}



func (e *UserAuthenticationTokenEntity) Create(reqdata map[string]any, ctrl map[string]any) (any, error) {
	utility := e.utility
	ctx := utility.MakeContext(map[string]any{
		"opname":  "create",
		"ctrl":    ctrl,
		"match":   e.match,
		"data":    e.data,
		"reqdata": reqdata,
	}, e.entctx)

	return e.runOp(ctx, func() {
		if ctx.Result != nil {
			if ctx.Result.Resdata != nil {
				e.data = core.ToMapAny(vs.Clone(ctx.Result.Resdata))
				if e.data == nil {
					e.data = map[string]any{}
				}
			}
		}
	})
}

// CreateTyped is the statically-typed variant of Create: it takes an
// UserAuthenticationTokenCreateData and returns an UserAuthenticationToken. It delegates to the untyped
// Create (identical runtime) and converts at the typed boundary.
func (e *UserAuthenticationTokenEntity) CreateTyped(reqdata UserAuthenticationTokenCreateData, ctrl map[string]any) (UserAuthenticationToken, error) {
	res, err := e.Create(asMap(reqdata), ctrl)
	if err != nil {
		return UserAuthenticationToken{}, err
	}
	return typedFrom[UserAuthenticationToken](res), nil
}




func (e *UserAuthenticationTokenEntity) Update(reqdata map[string]any, ctrl map[string]any) (any, error) {
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
// UserAuthenticationTokenUpdateData and returns an UserAuthenticationToken. It delegates to the untyped
// Update (identical runtime) and converts at the typed boundary.
func (e *UserAuthenticationTokenEntity) UpdateTyped(reqdata UserAuthenticationTokenUpdateData, ctrl map[string]any) (UserAuthenticationToken, error) {
	res, err := e.Update(asMap(reqdata), ctrl)
	if err != nil {
		return UserAuthenticationToken{}, err
	}
	return typedFrom[UserAuthenticationToken](res), nil
}



func (e *UserAuthenticationTokenEntity) Remove(_ map[string]any, _ map[string]any) (any, error) {
	return core.UnsupportedOp("remove", e.name)
}


func (e *UserAuthenticationTokenEntity) runOp(ctx *core.Context, postDone func()) (any, error) {
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
