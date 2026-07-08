package core

type CloudsmithError struct {
	IsCloudsmithError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewCloudsmithError(code string, msg string, ctx *Context) *CloudsmithError {
	return &CloudsmithError{
		IsCloudsmithError: true,
		Sdk:              "Cloudsmith",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *CloudsmithError) Error() string {
	return e.Msg
}
