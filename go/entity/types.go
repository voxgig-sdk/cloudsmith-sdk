// Typed models for the Cloudsmith SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/cloudsmith-sdk/go/core"
)

// Abort is the typed data model for the abort entity.
type Abort struct {
}

// Alpine is the typed data model for the alpine entity.
type Alpine struct {
}

// AuditLog is the typed data model for the audit_log entity.
type AuditLog struct {
}

// Basic is the typed data model for the basic entity.
type Basic struct {
}

// Cargo is the typed data model for the cargo entity.
type Cargo struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// CargoLoadMatch is the typed request payload for Cargo.LoadTyped.
type CargoLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// CargoListMatch is the typed request payload for Cargo.ListTyped.
type CargoListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// CargoCreateData is the typed request payload for Cargo.CreateTyped.
type CargoCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// CargoUpdateData is the typed request payload for Cargo.UpdateTyped.
type CargoUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Cocoapod is the typed data model for the cocoapod entity.
type Cocoapod struct {
}

// Complete is the typed data model for the complete entity.
type Complete struct {
}

// Composer is the typed data model for the composer entity.
type Composer struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// ComposerLoadMatch is the typed request payload for Composer.LoadTyped.
type ComposerLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// ComposerListMatch is the typed request payload for Composer.ListTyped.
type ComposerListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// ComposerCreateData is the typed request payload for Composer.CreateTyped.
type ComposerCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// ComposerUpdateData is the typed request payload for Composer.UpdateTyped.
type ComposerUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Conan is the typed data model for the conan entity.
type Conan struct {
}

// Conda is the typed data model for the conda entity.
type Conda struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// CondaLoadMatch is the typed request payload for Conda.LoadTyped.
type CondaLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// CondaListMatch is the typed request payload for Conda.ListTyped.
type CondaListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// CondaCreateData is the typed request payload for Conda.CreateTyped.
type CondaCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// CondaUpdateData is the typed request payload for Conda.UpdateTyped.
type CondaUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Copy is the typed data model for the copy entity.
type Copy struct {
}

// Cran is the typed data model for the cran entity.
type Cran struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// CranLoadMatch is the typed request payload for Cran.LoadTyped.
type CranLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// CranListMatch is the typed request payload for Cran.ListTyped.
type CranListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// CranCreateData is the typed request payload for Cran.CreateTyped.
type CranCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// CranUpdateData is the typed request payload for Cran.UpdateTyped.
type CranUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Dart is the typed data model for the dart entity.
type Dart struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// DartLoadMatch is the typed request payload for Dart.LoadTyped.
type DartLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// DartListMatch is the typed request payload for Dart.ListTyped.
type DartListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// DartCreateData is the typed request payload for Dart.CreateTyped.
type DartCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// DartUpdateData is the typed request payload for Dart.UpdateTyped.
type DartUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Deb is the typed data model for the deb entity.
type Deb struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	Component *string `json:"component,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	DistroVersions []any `json:"distro_versions"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	GpgKeyInline *string `json:"gpg_key_inline,omitempty"`
	GpgKeyUrl *string `json:"gpg_key_url,omitempty"`
	GpgVerification *string `json:"gpg_verification,omitempty"`
	IncludeSources *bool `json:"include_sources,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamDistribution *string `json:"upstream_distribution,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerificationStatus *string `json:"verification_status,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// DebLoadMatch is the typed request payload for Deb.LoadTyped.
type DebLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// DebListMatch is the typed request payload for Deb.ListTyped.
type DebListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// DebCreateData is the typed request payload for Deb.CreateTyped.
type DebCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	Component *string `json:"component,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	DistroVersions []any `json:"distro_versions"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	GpgKeyInline *string `json:"gpg_key_inline,omitempty"`
	GpgKeyUrl *string `json:"gpg_key_url,omitempty"`
	GpgVerification *string `json:"gpg_verification,omitempty"`
	IncludeSources *bool `json:"include_sources,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamDistribution *string `json:"upstream_distribution,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerificationStatus *string `json:"verification_status,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// DebUpdateData is the typed request payload for Deb.UpdateTyped.
type DebUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	Component *string `json:"component,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	DistroVersions *[]any `json:"distro_versions,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	GpgKeyInline *string `json:"gpg_key_inline,omitempty"`
	GpgKeyUrl *string `json:"gpg_key_url,omitempty"`
	GpgVerification *string `json:"gpg_verification,omitempty"`
	IncludeSources *bool `json:"include_sources,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamDistribution *string `json:"upstream_distribution,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerificationStatus *string `json:"verification_status,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// DenyPolicy is the typed data model for the deny_policy entity.
type DenyPolicy struct {
}

// Dependency is the typed data model for the dependency entity.
type Dependency struct {
}

// Disable is the typed data model for the disable entity.
type Disable struct {
}

// DistributionFull is the typed data model for the distribution_full entity.
type DistributionFull struct {
	Format *string `json:"format,omitempty"`
	FormatUrl *string `json:"format_url,omitempty"`
	Name string `json:"name"`
	SelfUrl *string `json:"self_url,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Variants *string `json:"variants,omitempty"`
	Versions *[]any `json:"versions,omitempty"`
}

// DistributionFullLoadMatch is the typed request payload for DistributionFull.LoadTyped.
type DistributionFullLoadMatch struct {
	Slug string `json:"slug"`
}

// DistributionFullListMatch is the typed request payload for DistributionFull.ListTyped.
type DistributionFullListMatch struct {
	Format *string `json:"format,omitempty"`
	FormatUrl *string `json:"format_url,omitempty"`
	Name *string `json:"name,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Variants *string `json:"variants,omitempty"`
	Versions *[]any `json:"versions,omitempty"`
}

// Distro is the typed data model for the distro entity.
type Distro struct {
}

// Docker is the typed data model for the docker entity.
type Docker struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// DockerLoadMatch is the typed request payload for Docker.LoadTyped.
type DockerLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// DockerListMatch is the typed request payload for Docker.ListTyped.
type DockerListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// DockerCreateData is the typed request payload for Docker.CreateTyped.
type DockerCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// DockerUpdateData is the typed request payload for Docker.UpdateTyped.
type DockerUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// DynamicMapping is the typed data model for the dynamic_mapping entity.
type DynamicMapping struct {
	ClaimValue string `json:"claim_value"`
	ServiceAccount string `json:"service_account"`
}

// DynamicMappingLoadMatch is the typed request payload for DynamicMapping.LoadTyped.
type DynamicMappingLoadMatch struct {
	Id string `json:"id"`
	OpenidConnectId string `json:"openid_connect_id"`
	OrgId string `json:"org_id"`
}

// DynamicMappingListMatch is the typed request payload for DynamicMapping.ListTyped.
type DynamicMappingListMatch struct {
	OrgId string `json:"org_id"`
	ProviderSetting any `json:"provider_setting"`
}

// Ecdsa is the typed data model for the ecdsa entity.
type Ecdsa struct {
}

// Enable is the typed data model for the enable entity.
type Enable struct {
}

// Entitlement is the typed data model for the entitlement entity.
type Entitlement struct {
	Active *int `json:"active,omitempty"`
	Bandwidth map[string]any `json:"bandwidth"`
	Downloads map[string]any `json:"downloads"`
	Inactive *int `json:"inactive,omitempty"`
	Total *int `json:"total,omitempty"`
}

// EntitlementLoadMatch is the typed request payload for Entitlement.LoadTyped.
type EntitlementLoadMatch struct {
	Owner *any `json:"owner,omitempty"`
	Repo *any `json:"repo,omitempty"`
	Id *string `json:"id,omitempty"`
}

// EntitlementCreateData is the typed request payload for Entitlement.CreateTyped.
type EntitlementCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	Active *int `json:"active,omitempty"`
	Bandwidth map[string]any `json:"bandwidth"`
	Downloads map[string]any `json:"downloads"`
	Inactive *int `json:"inactive,omitempty"`
	Total *int `json:"total,omitempty"`
}

// EntitlementRemoveMatch is the typed request payload for Entitlement.RemoveTyped.
type EntitlementRemoveMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// Evaluation is the typed data model for the evaluation entity.
type Evaluation struct {
}

// File is the typed data model for the file entity.
type File struct {
}

// FileCreateData is the typed request payload for File.CreateTyped.
type FileCreateData struct {
	Identifier *any `json:"identifier,omitempty"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// Format is the typed data model for the format entity.
type Format struct {
	Description string `json:"description"`
	Distributions *[]any `json:"distributions,omitempty"`
	Extensions []any `json:"extensions"`
	Name string `json:"name"`
	Premium bool `json:"premium"`
	PremiumPlanId *string `json:"premium_plan_id,omitempty"`
	PremiumPlanName *string `json:"premium_plan_name,omitempty"`
	Slug string `json:"slug"`
	Supports map[string]any `json:"supports"`
}

// FormatLoadMatch is the typed request payload for Format.LoadTyped.
type FormatLoadMatch struct {
	Id string `json:"id"`
}

// FormatListMatch is the typed request payload for Format.ListTyped.
type FormatListMatch struct {
	Description *string `json:"description,omitempty"`
	Distributions *[]any `json:"distributions,omitempty"`
	Extensions *[]any `json:"extensions,omitempty"`
	Name *string `json:"name,omitempty"`
	Premium *bool `json:"premium,omitempty"`
	PremiumPlanId *string `json:"premium_plan_id,omitempty"`
	PremiumPlanName *string `json:"premium_plan_name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Supports *map[string]any `json:"supports,omitempty"`
}

// Geoip is the typed data model for the geoip entity.
type Geoip struct {
}

// Gon is the typed data model for the gon entity.
type Gon struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// GonLoadMatch is the typed request payload for Gon.LoadTyped.
type GonLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	SlugPerm any `json:"slug_perm"`
}

// GonListMatch is the typed request payload for Gon.ListTyped.
type GonListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// GonCreateData is the typed request payload for Gon.CreateTyped.
type GonCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// GonUpdateData is the typed request payload for Gon.UpdateTyped.
type GonUpdateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	SlugPerm any `json:"slug_perm"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Gpg is the typed data model for the gpg entity.
type Gpg struct {
}

// Group is the typed data model for the group entity.
type Group struct {
}

// Helm is the typed data model for the helm entity.
type Helm struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// HelmLoadMatch is the typed request payload for Helm.LoadTyped.
type HelmLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// HelmListMatch is the typed request payload for Helm.ListTyped.
type HelmListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// HelmCreateData is the typed request payload for Helm.CreateTyped.
type HelmCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// HelmUpdateData is the typed request payload for Helm.UpdateTyped.
type HelmUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Hex is the typed data model for the hex entity.
type Hex struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// HexLoadMatch is the typed request payload for Hex.LoadTyped.
type HexLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// HexListMatch is the typed request payload for Hex.ListTyped.
type HexListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// HexCreateData is the typed request payload for Hex.CreateTyped.
type HexCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// HexUpdateData is the typed request payload for Hex.UpdateTyped.
type HexUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// History is the typed data model for the history entity.
type History struct {
}

// Huggingface is the typed data model for the huggingface entity.
type Huggingface struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// HuggingfaceLoadMatch is the typed request payload for Huggingface.LoadTyped.
type HuggingfaceLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// HuggingfaceListMatch is the typed request payload for Huggingface.ListTyped.
type HuggingfaceListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// HuggingfaceCreateData is the typed request payload for Huggingface.CreateTyped.
type HuggingfaceCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// HuggingfaceUpdateData is the typed request payload for Huggingface.UpdateTyped.
type HuggingfaceUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Info is the typed data model for the info entity.
type Info struct {
}

// Invite is the typed data model for the invite entity.
type Invite struct {
}

// LicensePolicy is the typed data model for the license_policy entity.
type LicensePolicy struct {
}

// Limit is the typed data model for the limit entity.
type Limit struct {
}

// Luarock is the typed data model for the luarock entity.
type Luarock struct {
}

// Maven is the typed data model for the maven entity.
type Maven struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	GpgKeyInline *string `json:"gpg_key_inline,omitempty"`
	GpgKeyUrl *string `json:"gpg_key_url,omitempty"`
	GpgVerification *string `json:"gpg_verification,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerificationStatus *string `json:"verification_status,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// MavenLoadMatch is the typed request payload for Maven.LoadTyped.
type MavenLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// MavenListMatch is the typed request payload for Maven.ListTyped.
type MavenListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// MavenCreateData is the typed request payload for Maven.CreateTyped.
type MavenCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	GpgKeyInline *string `json:"gpg_key_inline,omitempty"`
	GpgKeyUrl *string `json:"gpg_key_url,omitempty"`
	GpgVerification *string `json:"gpg_verification,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerificationStatus *string `json:"verification_status,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// MavenUpdateData is the typed request payload for Maven.UpdateTyped.
type MavenUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	GpgKeyInline *string `json:"gpg_key_inline,omitempty"`
	GpgKeyUrl *string `json:"gpg_key_url,omitempty"`
	GpgVerification *string `json:"gpg_verification,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerificationStatus *string `json:"verification_status,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Member is the typed data model for the member entity.
type Member struct {
}

// Move is the typed data model for the move entity.
type Move struct {
}

// Namespace is the typed data model for the namespace entity.
type Namespace struct {
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	TypeName *string `json:"type_name,omitempty"`
}

// NamespaceLoadMatch is the typed request payload for Namespace.LoadTyped.
type NamespaceLoadMatch struct {
	Id string `json:"id"`
}

// NamespaceListMatch is the typed request payload for Namespace.ListTyped.
type NamespaceListMatch struct {
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	TypeName *string `json:"type_name,omitempty"`
}

// NamespaceAuditLog is the typed data model for the namespace_audit_log entity.
type NamespaceAuditLog struct {
	Actor string `json:"actor"`
	ActorIpAddress string `json:"actor_ip_address"`
	ActorKind *string `json:"actor_kind,omitempty"`
	ActorLocation map[string]any `json:"actor_location"`
	ActorSlugPerm string `json:"actor_slug_perm"`
	ActorUrl *string `json:"actor_url,omitempty"`
	Context string `json:"context"`
	Event string `json:"event"`
	EventAt string `json:"event_at"`
	Object string `json:"object"`
	ObjectKind string `json:"object_kind"`
	ObjectSlugPerm string `json:"object_slug_perm"`
	Target string `json:"target"`
	TargetKind string `json:"target_kind"`
	TargetSlugPerm *string `json:"target_slug_perm,omitempty"`
	Uuid *string `json:"uuid,omitempty"`
}

// NamespaceAuditLogLoadMatch is the typed request payload for NamespaceAuditLog.LoadTyped.
type NamespaceAuditLogLoadMatch struct {
	Id string `json:"id"`
}

// Npm is the typed data model for the npm entity.
type Npm struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// NpmLoadMatch is the typed request payload for Npm.LoadTyped.
type NpmLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// NpmListMatch is the typed request payload for Npm.ListTyped.
type NpmListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// NpmCreateData is the typed request payload for Npm.CreateTyped.
type NpmCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// NpmUpdateData is the typed request payload for Npm.UpdateTyped.
type NpmUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Nuget is the typed data model for the nuget entity.
type Nuget struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// NugetLoadMatch is the typed request payload for Nuget.LoadTyped.
type NugetLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// NugetListMatch is the typed request payload for Nuget.ListTyped.
type NugetListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// NugetCreateData is the typed request payload for Nuget.CreateTyped.
type NugetCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// NugetUpdateData is the typed request payload for Nuget.UpdateTyped.
type NugetUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// OpenidConnect is the typed data model for the openid_connect entity.
type OpenidConnect struct {
}

// Org is the typed data model for the org entity.
type Org struct {
	Country *string `json:"country,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EventAt *string `json:"event_at,omitempty"`
	Location *string `json:"location,omitempty"`
	Name string `json:"name"`
	Package map[string]any `json:"package"`
	Policy map[string]any `json:"policy"`
	Reasons []any `json:"reasons"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Tagline *string `json:"tagline,omitempty"`
	VulnerabilityScanResults map[string]any `json:"vulnerability_scan_results"`
}

// OrgLoadMatch is the typed request payload for Org.LoadTyped.
type OrgLoadMatch struct {
	Id string `json:"id"`
	MemberId *string `json:"member_id,omitempty"`
}

// OrgListMatch is the typed request payload for Org.ListTyped.
type OrgListMatch struct {
	Country *string `json:"country,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EventAt *string `json:"event_at,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Package *map[string]any `json:"package,omitempty"`
	Policy *map[string]any `json:"policy,omitempty"`
	Reasons *[]any `json:"reasons,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Tagline *string `json:"tagline,omitempty"`
	VulnerabilityScanResults *map[string]any `json:"vulnerability_scan_results,omitempty"`
}

// OrgCreateData is the typed request payload for Org.CreateTyped.
type OrgCreateData struct {
	Id string `json:"id"`
	MemberId *string `json:"member_id,omitempty"`
	Country *string `json:"country,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EventAt *string `json:"event_at,omitempty"`
	Location *string `json:"location,omitempty"`
	Name string `json:"name"`
	Package map[string]any `json:"package"`
	Policy map[string]any `json:"policy"`
	Reasons []any `json:"reasons"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Tagline *string `json:"tagline,omitempty"`
	VulnerabilityScanResults map[string]any `json:"vulnerability_scan_results"`
}

// OrgUpdateData is the typed request payload for Org.UpdateTyped.
type OrgUpdateData struct {
	Id string `json:"id"`
	TeamId string `json:"team_id"`
	Country *string `json:"country,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	EventAt *string `json:"event_at,omitempty"`
	Location *string `json:"location,omitempty"`
	Name *string `json:"name,omitempty"`
	Package *map[string]any `json:"package,omitempty"`
	Policy *map[string]any `json:"policy,omitempty"`
	Reasons *[]any `json:"reasons,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Tagline *string `json:"tagline,omitempty"`
	VulnerabilityScanResults *map[string]any `json:"vulnerability_scan_results,omitempty"`
}

// OrgRemoveMatch is the typed request payload for Org.RemoveTyped.
type OrgRemoveMatch struct {
	Id string `json:"id"`
	Member *any `json:"member,omitempty"`
	Service *any `json:"service,omitempty"`
	SlugPerm *any `json:"slug_perm,omitempty"`
	Team *any `json:"team,omitempty"`
}

// OrganizationGroupSync is the typed data model for the organization_group_sync entity.
type OrganizationGroupSync struct {
	IdpKey string `json:"idp_key"`
	IdpValue string `json:"idp_value"`
	Role *string `json:"role,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Team string `json:"team"`
}

// OrganizationGroupSyncListMatch is the typed request payload for OrganizationGroupSync.ListTyped.
type OrganizationGroupSyncListMatch struct {
	OrgId string `json:"org_id"`
}

// OrganizationGroupSyncCreateData is the typed request payload for OrganizationGroupSync.CreateTyped.
type OrganizationGroupSyncCreateData struct {
	OrgId string `json:"org_id"`
	IdpKey string `json:"idp_key"`
	IdpValue string `json:"idp_value"`
	Role *string `json:"role,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Team string `json:"team"`
}

// OrganizationGroupSyncStatus is the typed data model for the organization_group_sync_status entity.
type OrganizationGroupSyncStatus struct {
	SamlGroupSyncStatus *bool `json:"saml_group_sync_status,omitempty"`
}

// OrganizationGroupSyncStatusLoadMatch is the typed request payload for OrganizationGroupSyncStatus.LoadTyped.
type OrganizationGroupSyncStatusLoadMatch struct {
	OrgId string `json:"org_id"`
}

// OrganizationInvite is the typed data model for the organization_invite entity.
type OrganizationInvite struct {
	Email *string `json:"email,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Inviter *string `json:"inviter,omitempty"`
	InviterUrl *string `json:"inviter_url,omitempty"`
	Org *string `json:"org,omitempty"`
	Role *string `json:"role,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// OrganizationInviteListMatch is the typed request payload for OrganizationInvite.ListTyped.
type OrganizationInviteListMatch struct {
	OrgId string `json:"org_id"`
}

// OrganizationInviteCreateData is the typed request payload for OrganizationInvite.CreateTyped.
type OrganizationInviteCreateData struct {
	OrgId string `json:"org_id"`
	Email *string `json:"email,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Inviter *string `json:"inviter,omitempty"`
	InviterUrl *string `json:"inviter_url,omitempty"`
	Org *string `json:"org,omitempty"`
	Role *string `json:"role,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// OrganizationInviteUpdateData is the typed request payload for OrganizationInvite.UpdateTyped.
type OrganizationInviteUpdateData struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	Email *string `json:"email,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Inviter *string `json:"inviter,omitempty"`
	InviterUrl *string `json:"inviter_url,omitempty"`
	Org *string `json:"org,omitempty"`
	Role *string `json:"role,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// OrganizationInviteExtend is the typed data model for the organization_invite_extend entity.
type OrganizationInviteExtend struct {
	Email *string `json:"email,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Inviter *string `json:"inviter,omitempty"`
	InviterUrl *string `json:"inviter_url,omitempty"`
	Org *string `json:"org,omitempty"`
	Role *string `json:"role,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// OrganizationInviteExtendCreateData is the typed request payload for OrganizationInviteExtend.CreateTyped.
type OrganizationInviteExtendCreateData struct {
	OrgId string `json:"org_id"`
	SlugPerm any `json:"slug_perm"`
	Email *string `json:"email,omitempty"`
	ExpiresAt *string `json:"expires_at,omitempty"`
	Inviter *string `json:"inviter,omitempty"`
	InviterUrl *string `json:"inviter_url,omitempty"`
	Org *string `json:"org,omitempty"`
	Role *string `json:"role,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// OrganizationMembership is the typed data model for the organization_membership entity.
type OrganizationMembership struct {
	Email *string `json:"email,omitempty"`
	HasTwoFactor *bool `json:"has_two_factor,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	JoinedAt *string `json:"joined_at,omitempty"`
	LastLoginAt *string `json:"last_login_at,omitempty"`
	LastLoginMethod *string `json:"last_login_method,omitempty"`
	Role *string `json:"role,omitempty"`
	User *string `json:"user,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	UserName *string `json:"user_name,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// OrganizationMembershipLoadMatch is the typed request payload for OrganizationMembership.LoadTyped.
type OrganizationMembershipLoadMatch struct {
	Member any `json:"member"`
	OrgId string `json:"org_id"`
}

// OrganizationMembershipListMatch is the typed request payload for OrganizationMembership.ListTyped.
type OrganizationMembershipListMatch struct {
	OrgId string `json:"org_id"`
}

// OrganizationMembershipUpdateData is the typed request payload for OrganizationMembership.UpdateTyped.
type OrganizationMembershipUpdateData struct {
	Member any `json:"member"`
	OrgId string `json:"org_id"`
	Email *string `json:"email,omitempty"`
	HasTwoFactor *bool `json:"has_two_factor,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	JoinedAt *string `json:"joined_at,omitempty"`
	LastLoginAt *string `json:"last_login_at,omitempty"`
	LastLoginMethod *string `json:"last_login_method,omitempty"`
	Role *string `json:"role,omitempty"`
	User *string `json:"user,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	UserName *string `json:"user_name,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// OrganizationMembershipRoleUpdate is the typed data model for the organization_membership_role_update entity.
type OrganizationMembershipRoleUpdate struct {
	Email *string `json:"email,omitempty"`
	HasTwoFactor *bool `json:"has_two_factor,omitempty"`
	JoinedAt *string `json:"joined_at,omitempty"`
	LastLoginAt *string `json:"last_login_at,omitempty"`
	LastLoginMethod *string `json:"last_login_method,omitempty"`
	Role *string `json:"role,omitempty"`
	User *string `json:"user,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	UserName *string `json:"user_name,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// OrganizationMembershipRoleUpdateUpdateData is the typed request payload for OrganizationMembershipRoleUpdate.UpdateTyped.
type OrganizationMembershipRoleUpdateUpdateData struct {
	MemberId string `json:"member_id"`
	OrgId string `json:"org_id"`
	Email *string `json:"email,omitempty"`
	HasTwoFactor *bool `json:"has_two_factor,omitempty"`
	JoinedAt *string `json:"joined_at,omitempty"`
	LastLoginAt *string `json:"last_login_at,omitempty"`
	LastLoginMethod *string `json:"last_login_method,omitempty"`
	Role *string `json:"role,omitempty"`
	User *string `json:"user,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	UserName *string `json:"user_name,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// OrganizationMembershipVisibilityUpdate is the typed data model for the organization_membership_visibility_update entity.
type OrganizationMembershipVisibilityUpdate struct {
	Email *string `json:"email,omitempty"`
	HasTwoFactor *bool `json:"has_two_factor,omitempty"`
	JoinedAt *string `json:"joined_at,omitempty"`
	LastLoginAt *string `json:"last_login_at,omitempty"`
	LastLoginMethod *string `json:"last_login_method,omitempty"`
	Role *string `json:"role,omitempty"`
	User *string `json:"user,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	UserName *string `json:"user_name,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// OrganizationMembershipVisibilityUpdateUpdateData is the typed request payload for OrganizationMembershipVisibilityUpdate.UpdateTyped.
type OrganizationMembershipVisibilityUpdateUpdateData struct {
	MemberId string `json:"member_id"`
	OrgId string `json:"org_id"`
	Email *string `json:"email,omitempty"`
	HasTwoFactor *bool `json:"has_two_factor,omitempty"`
	JoinedAt *string `json:"joined_at,omitempty"`
	LastLoginAt *string `json:"last_login_at,omitempty"`
	LastLoginMethod *string `json:"last_login_method,omitempty"`
	Role *string `json:"role,omitempty"`
	User *string `json:"user,omitempty"`
	UserId *string `json:"user_id,omitempty"`
	UserName *string `json:"user_name,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// OrganizationPackageLicensePolicy is the typed data model for the organization_package_license_policy entity.
type OrganizationPackageLicensePolicy struct {
	AllowUnknownLicenses *bool `json:"allow_unknown_licenses,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Name string `json:"name"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	SpdxIdentifiers []any `json:"spdx_identifiers"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// OrganizationPackageLicensePolicyLoadMatch is the typed request payload for OrganizationPackageLicensePolicy.LoadTyped.
type OrganizationPackageLicensePolicyLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// OrganizationPackageLicensePolicyListMatch is the typed request payload for OrganizationPackageLicensePolicy.ListTyped.
type OrganizationPackageLicensePolicyListMatch struct {
	OrgId string `json:"org_id"`
}

// OrganizationPackageLicensePolicyCreateData is the typed request payload for OrganizationPackageLicensePolicy.CreateTyped.
type OrganizationPackageLicensePolicyCreateData struct {
	OrgId string `json:"org_id"`
	AllowUnknownLicenses *bool `json:"allow_unknown_licenses,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Name string `json:"name"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	SpdxIdentifiers []any `json:"spdx_identifiers"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// OrganizationPackageLicensePolicyUpdateData is the typed request payload for OrganizationPackageLicensePolicy.UpdateTyped.
type OrganizationPackageLicensePolicyUpdateData struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	AllowUnknownLicenses *bool `json:"allow_unknown_licenses,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	SpdxIdentifiers *[]any `json:"spdx_identifiers,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// OrganizationPackageVulnerabilityPolicy is the typed data model for the organization_package_vulnerability_policy entity.
type OrganizationPackageVulnerabilityPolicy struct {
	AllowUnknownSeverity *bool `json:"allow_unknown_severity,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	MinSeverity *string `json:"min_severity,omitempty"`
	Name string `json:"name"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// OrganizationPackageVulnerabilityPolicyLoadMatch is the typed request payload for OrganizationPackageVulnerabilityPolicy.LoadTyped.
type OrganizationPackageVulnerabilityPolicyLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// OrganizationPackageVulnerabilityPolicyListMatch is the typed request payload for OrganizationPackageVulnerabilityPolicy.ListTyped.
type OrganizationPackageVulnerabilityPolicyListMatch struct {
	OrgId string `json:"org_id"`
}

// OrganizationPackageVulnerabilityPolicyCreateData is the typed request payload for OrganizationPackageVulnerabilityPolicy.CreateTyped.
type OrganizationPackageVulnerabilityPolicyCreateData struct {
	OrgId string `json:"org_id"`
	AllowUnknownSeverity *bool `json:"allow_unknown_severity,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	MinSeverity *string `json:"min_severity,omitempty"`
	Name string `json:"name"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// OrganizationPackageVulnerabilityPolicyUpdateData is the typed request payload for OrganizationPackageVulnerabilityPolicy.UpdateTyped.
type OrganizationPackageVulnerabilityPolicyUpdateData struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	AllowUnknownSeverity *bool `json:"allow_unknown_severity,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	MinSeverity *string `json:"min_severity,omitempty"`
	Name *string `json:"name,omitempty"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// OrganizationSamlAuth is the typed data model for the organization_saml_auth entity.
type OrganizationSamlAuth struct {
	SamlAuthEnabled bool `json:"saml_auth_enabled"`
	SamlAuthEnforced bool `json:"saml_auth_enforced"`
	SamlMetadataInline *string `json:"saml_metadata_inline,omitempty"`
	SamlMetadataUrl *string `json:"saml_metadata_url,omitempty"`
}

// OrganizationSamlAuthLoadMatch is the typed request payload for OrganizationSamlAuth.LoadTyped.
type OrganizationSamlAuthLoadMatch struct {
	OrgId string `json:"org_id"`
}

// OrganizationSamlAuthUpdateData is the typed request payload for OrganizationSamlAuth.UpdateTyped.
type OrganizationSamlAuthUpdateData struct {
	OrgId string `json:"org_id"`
	SamlAuthEnabled *bool `json:"saml_auth_enabled,omitempty"`
	SamlAuthEnforced *bool `json:"saml_auth_enforced,omitempty"`
	SamlMetadataInline *string `json:"saml_metadata_inline,omitempty"`
	SamlMetadataUrl *string `json:"saml_metadata_url,omitempty"`
}

// OrganizationTeam is the typed data model for the organization_team entity.
type OrganizationTeam struct {
	Description *string `json:"description,omitempty"`
	Name string `json:"name"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// OrganizationTeamLoadMatch is the typed request payload for OrganizationTeam.LoadTyped.
type OrganizationTeamLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// OrganizationTeamListMatch is the typed request payload for OrganizationTeam.ListTyped.
type OrganizationTeamListMatch struct {
	OrgId string `json:"org_id"`
}

// OrganizationTeamCreateData is the typed request payload for OrganizationTeam.CreateTyped.
type OrganizationTeamCreateData struct {
	OrgId string `json:"org_id"`
	Description *string `json:"description,omitempty"`
	Name string `json:"name"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// OrganizationTeamUpdateData is the typed request payload for OrganizationTeam.UpdateTyped.
type OrganizationTeamUpdateData struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	Description *string `json:"description,omitempty"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Visibility *string `json:"visibility,omitempty"`
}

// OrganizationTeamMember is the typed data model for the organization_team_member entity.
type OrganizationTeamMember struct {
	Role string `json:"role"`
	User string `json:"user"`
}

// OrganizationTeamMemberListMatch is the typed request payload for OrganizationTeamMember.ListTyped.
type OrganizationTeamMemberListMatch struct {
	OrgId string `json:"org_id"`
	TeamId string `json:"team_id"`
}

// OrganizationTeamMemberCreateData is the typed request payload for OrganizationTeamMember.CreateTyped.
type OrganizationTeamMemberCreateData struct {
	OrgId string `json:"org_id"`
	TeamId string `json:"team_id"`
	Role string `json:"role"`
	User string `json:"user"`
}

// Oss is the typed data model for the oss entity.
type Oss struct {
}

// P2n is the typed data model for the p2n entity.
type P2n struct {
}

// Package is the typed data model for the package entity.
type Package struct {
	Active *int `json:"active,omitempty"`
	Architectures *[]any `json:"architectures,omitempty"`
	BackendKind *int `json:"backend_kind,omitempty"`
	Bandwidth map[string]any `json:"bandwidth"`
	CdnUrl *string `json:"cdn_url,omitempty"`
	ChecksumMd5 *string `json:"checksum_md5,omitempty"`
	ChecksumSha1 *string `json:"checksum_sha1,omitempty"`
	ChecksumSha256 *string `json:"checksum_sha256,omitempty"`
	ChecksumSha512 *string `json:"checksum_sha512,omitempty"`
	Count int `json:"count"`
	DepType *string `json:"dep_type,omitempty"`
	DependenciesChecksumMd5 *string `json:"dependencies_checksum_md5,omitempty"`
	DependenciesUrl *string `json:"dependencies_url,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	Distro map[string]any `json:"distro"`
	DistroVersion *map[string]any `json:"distro_version,omitempty"`
	Downloads map[string]any `json:"downloads"`
	Epoch *int `json:"epoch,omitempty"`
	Extension *string `json:"extension,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Files *[]any `json:"files,omitempty"`
	Format *string `json:"format,omitempty"`
	FormatUrl *string `json:"format_url,omitempty"`
	FreeableStorage *int `json:"freeable_storage,omitempty"`
	FullyQualifiedName *string `json:"fully_qualified_name,omitempty"`
	IdentifierPerm *string `json:"identifier_perm,omitempty"`
	Identifiers *map[string]any `json:"identifiers,omitempty"`
	Inactive *int `json:"inactive,omitempty"`
	Indexed *bool `json:"indexed,omitempty"`
	IsCancellable *bool `json:"is_cancellable,omitempty"`
	IsCopyable *bool `json:"is_copyable,omitempty"`
	IsDeleteable *bool `json:"is_deleteable,omitempty"`
	IsDownloadable *bool `json:"is_downloadable,omitempty"`
	IsMoveable *bool `json:"is_moveable,omitempty"`
	IsQuarantinable *bool `json:"is_quarantinable,omitempty"`
	IsQuarantined *bool `json:"is_quarantined,omitempty"`
	IsResyncable *bool `json:"is_resyncable,omitempty"`
	IsSecurityScannable *bool `json:"is_security_scannable,omitempty"`
	IsSyncAwaiting *bool `json:"is_sync_awaiting,omitempty"`
	IsSyncCompleted *bool `json:"is_sync_completed,omitempty"`
	IsSyncFailed *bool `json:"is_sync_failed,omitempty"`
	IsSyncInFlight *bool `json:"is_sync_in_flight,omitempty"`
	IsSyncInProgress *bool `json:"is_sync_in_progress,omitempty"`
	LastPush string `json:"last_push"`
	License *string `json:"license,omitempty"`
	Name *string `json:"name,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	NamespaceUrl *string `json:"namespace_url,omitempty"`
	NumDownloads int `json:"num_downloads"`
	NumFiles *int `json:"num_files,omitempty"`
	Operator *string `json:"operator,omitempty"`
	OriginRepository *string `json:"origin_repository,omitempty"`
	OriginRepositoryUrl *string `json:"origin_repository_url,omitempty"`
	PackageType *int `json:"package_type,omitempty"`
	PolicyViolated *bool `json:"policy_violated,omitempty"`
	Release *string `json:"release,omitempty"`
	Repository *string `json:"repository,omitempty"`
	RepositoryUrl *string `json:"repository_url,omitempty"`
	SecurityScanCompletedAt *string `json:"security_scan_completed_at,omitempty"`
	SecurityScanStartedAt *string `json:"security_scan_started_at,omitempty"`
	SecurityScanStatus *string `json:"security_scan_status,omitempty"`
	SecurityScanStatusUpdatedAt *string `json:"security_scan_status_updated_at,omitempty"`
	SelfHtmlUrl *string `json:"self_html_url,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SignatureUrl *string `json:"signature_url,omitempty"`
	Size *int `json:"size,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Stage *int `json:"stage,omitempty"`
	StageStr *string `json:"stage_str,omitempty"`
	StageUpdatedAt *string `json:"stage_updated_at,omitempty"`
	Status *int `json:"status,omitempty"`
	StatusReason *string `json:"status_reason,omitempty"`
	StatusStr *string `json:"status_str,omitempty"`
	StatusUpdatedAt *string `json:"status_updated_at,omitempty"`
	StatusUrl *string `json:"status_url,omitempty"`
	Subtype *string `json:"subtype,omitempty"`
	Summary *string `json:"summary,omitempty"`
	SyncFinishedAt *string `json:"sync_finished_at,omitempty"`
	SyncProgress *int `json:"sync_progress,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	TagsImmutable *map[string]any `json:"tags_immutable,omitempty"`
	Total *int `json:"total,omitempty"`
	TypeDisplay *string `json:"type_display,omitempty"`
	UploadedAt *string `json:"uploaded_at,omitempty"`
	Uploader *string `json:"uploader,omitempty"`
	UploaderUrl *string `json:"uploader_url,omitempty"`
	Version *string `json:"version,omitempty"`
	VersionOrig *string `json:"version_orig,omitempty"`
	VulnerabilityScanResultsUrl *string `json:"vulnerability_scan_results_url,omitempty"`
}

// PackageLoadMatch is the typed request payload for Package.LoadTyped.
type PackageLoadMatch struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	Identifier *any `json:"identifier,omitempty"`
}

// PackageListMatch is the typed request payload for Package.ListTyped.
type PackageListMatch struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	Identifier *any `json:"identifier,omitempty"`
}

// PackageCreateData is the typed request payload for Package.CreateTyped.
type PackageCreateData struct {
	Identifier *any `json:"identifier,omitempty"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	Active *int `json:"active,omitempty"`
	Architectures *[]any `json:"architectures,omitempty"`
	BackendKind *int `json:"backend_kind,omitempty"`
	Bandwidth map[string]any `json:"bandwidth"`
	CdnUrl *string `json:"cdn_url,omitempty"`
	ChecksumMd5 *string `json:"checksum_md5,omitempty"`
	ChecksumSha1 *string `json:"checksum_sha1,omitempty"`
	ChecksumSha256 *string `json:"checksum_sha256,omitempty"`
	ChecksumSha512 *string `json:"checksum_sha512,omitempty"`
	Count int `json:"count"`
	DepType *string `json:"dep_type,omitempty"`
	DependenciesChecksumMd5 *string `json:"dependencies_checksum_md5,omitempty"`
	DependenciesUrl *string `json:"dependencies_url,omitempty"`
	Description *string `json:"description,omitempty"`
	DisplayName *string `json:"display_name,omitempty"`
	Distro map[string]any `json:"distro"`
	DistroVersion *map[string]any `json:"distro_version,omitempty"`
	Downloads map[string]any `json:"downloads"`
	Epoch *int `json:"epoch,omitempty"`
	Extension *string `json:"extension,omitempty"`
	Filename *string `json:"filename,omitempty"`
	Files *[]any `json:"files,omitempty"`
	Format *string `json:"format,omitempty"`
	FormatUrl *string `json:"format_url,omitempty"`
	FreeableStorage *int `json:"freeable_storage,omitempty"`
	FullyQualifiedName *string `json:"fully_qualified_name,omitempty"`
	IdentifierPerm *string `json:"identifier_perm,omitempty"`
	Identifiers *map[string]any `json:"identifiers,omitempty"`
	Inactive *int `json:"inactive,omitempty"`
	Indexed *bool `json:"indexed,omitempty"`
	IsCancellable *bool `json:"is_cancellable,omitempty"`
	IsCopyable *bool `json:"is_copyable,omitempty"`
	IsDeleteable *bool `json:"is_deleteable,omitempty"`
	IsDownloadable *bool `json:"is_downloadable,omitempty"`
	IsMoveable *bool `json:"is_moveable,omitempty"`
	IsQuarantinable *bool `json:"is_quarantinable,omitempty"`
	IsQuarantined *bool `json:"is_quarantined,omitempty"`
	IsResyncable *bool `json:"is_resyncable,omitempty"`
	IsSecurityScannable *bool `json:"is_security_scannable,omitempty"`
	IsSyncAwaiting *bool `json:"is_sync_awaiting,omitempty"`
	IsSyncCompleted *bool `json:"is_sync_completed,omitempty"`
	IsSyncFailed *bool `json:"is_sync_failed,omitempty"`
	IsSyncInFlight *bool `json:"is_sync_in_flight,omitempty"`
	IsSyncInProgress *bool `json:"is_sync_in_progress,omitempty"`
	LastPush string `json:"last_push"`
	License *string `json:"license,omitempty"`
	Name *string `json:"name,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	NamespaceUrl *string `json:"namespace_url,omitempty"`
	NumDownloads int `json:"num_downloads"`
	NumFiles *int `json:"num_files,omitempty"`
	Operator *string `json:"operator,omitempty"`
	OriginRepository *string `json:"origin_repository,omitempty"`
	OriginRepositoryUrl *string `json:"origin_repository_url,omitempty"`
	PackageType *int `json:"package_type,omitempty"`
	PolicyViolated *bool `json:"policy_violated,omitempty"`
	Release *string `json:"release,omitempty"`
	Repository *string `json:"repository,omitempty"`
	RepositoryUrl *string `json:"repository_url,omitempty"`
	SecurityScanCompletedAt *string `json:"security_scan_completed_at,omitempty"`
	SecurityScanStartedAt *string `json:"security_scan_started_at,omitempty"`
	SecurityScanStatus *string `json:"security_scan_status,omitempty"`
	SecurityScanStatusUpdatedAt *string `json:"security_scan_status_updated_at,omitempty"`
	SelfHtmlUrl *string `json:"self_html_url,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SignatureUrl *string `json:"signature_url,omitempty"`
	Size *int `json:"size,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Stage *int `json:"stage,omitempty"`
	StageStr *string `json:"stage_str,omitempty"`
	StageUpdatedAt *string `json:"stage_updated_at,omitempty"`
	Status *int `json:"status,omitempty"`
	StatusReason *string `json:"status_reason,omitempty"`
	StatusStr *string `json:"status_str,omitempty"`
	StatusUpdatedAt *string `json:"status_updated_at,omitempty"`
	StatusUrl *string `json:"status_url,omitempty"`
	Subtype *string `json:"subtype,omitempty"`
	Summary *string `json:"summary,omitempty"`
	SyncFinishedAt *string `json:"sync_finished_at,omitempty"`
	SyncProgress *int `json:"sync_progress,omitempty"`
	Tags *map[string]any `json:"tags,omitempty"`
	TagsImmutable *map[string]any `json:"tags_immutable,omitempty"`
	Total *int `json:"total,omitempty"`
	TypeDisplay *string `json:"type_display,omitempty"`
	UploadedAt *string `json:"uploaded_at,omitempty"`
	Uploader *string `json:"uploader,omitempty"`
	UploaderUrl *string `json:"uploader_url,omitempty"`
	Version *string `json:"version,omitempty"`
	VersionOrig *string `json:"version_orig,omitempty"`
	VulnerabilityScanResultsUrl *string `json:"vulnerability_scan_results_url,omitempty"`
}

// PackageRemoveMatch is the typed request payload for Package.RemoveTyped.
type PackageRemoveMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// PackageDenyPolicy is the typed data model for the package_deny_policy entity.
type PackageDenyPolicy struct {
	Action *string `json:"action,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Name *string `json:"name,omitempty"`
	PackageQueryString string `json:"package_query_string"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// PackageDenyPolicyLoadMatch is the typed request payload for PackageDenyPolicy.LoadTyped.
type PackageDenyPolicyLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// PackageDenyPolicyListMatch is the typed request payload for PackageDenyPolicy.ListTyped.
type PackageDenyPolicyListMatch struct {
	OrgId string `json:"org_id"`
}

// PackageDenyPolicyCreateData is the typed request payload for PackageDenyPolicy.CreateTyped.
type PackageDenyPolicyCreateData struct {
	OrgId string `json:"org_id"`
	Action *string `json:"action,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Name *string `json:"name,omitempty"`
	PackageQueryString string `json:"package_query_string"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// PackageDenyPolicyUpdateData is the typed request payload for PackageDenyPolicy.UpdateTyped.
type PackageDenyPolicyUpdateData struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	Action *string `json:"action,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	Name *string `json:"name,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
}

// PackageFilePartsUpload is the typed data model for the package_file_parts_upload entity.
type PackageFilePartsUpload struct {
	Identifier *string `json:"identifier,omitempty"`
	UploadQuerystring *string `json:"upload_querystring,omitempty"`
	UploadUrl *string `json:"upload_url,omitempty"`
}

// PackageFilePartsUploadLoadMatch is the typed request payload for PackageFilePartsUpload.LoadTyped.
type PackageFilePartsUploadLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// PackageFileUpload is the typed data model for the package_file_upload entity.
type PackageFileUpload struct {
}

// PackageFileUploadCreateData is the typed request payload for PackageFileUpload.CreateTyped.
type PackageFileUploadCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// PackageLicensePolicyEvaluation is the typed data model for the package_license_policy_evaluation entity.
type PackageLicensePolicyEvaluation struct {
	AllowUnknownLicenses *bool `json:"allow_unknown_licenses,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EvaluationCount *int `json:"evaluation_count,omitempty"`
	Name *string `json:"name,omitempty"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	Policy map[string]any `json:"policy"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	SpdxIdentifiers []any `json:"spdx_identifiers"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	ViolationCount *int `json:"violation_count,omitempty"`
}

// PackageLicensePolicyEvaluationLoadMatch is the typed request payload for PackageLicensePolicyEvaluation.LoadTyped.
type PackageLicensePolicyEvaluationLoadMatch struct {
	Id string `json:"id"`
	LicensePolicyId string `json:"license_policy_id"`
	OrgId string `json:"org_id"`
}

// PackageLicensePolicyEvaluationListMatch is the typed request payload for PackageLicensePolicyEvaluation.ListTyped.
type PackageLicensePolicyEvaluationListMatch struct {
	OrgId string `json:"org_id"`
	PolicySlugPerm any `json:"policy_slug_perm"`
}

// PackageLicensePolicyEvaluationCreateData is the typed request payload for PackageLicensePolicyEvaluation.CreateTyped.
type PackageLicensePolicyEvaluationCreateData struct {
	OrgId string `json:"org_id"`
	PolicySlugPerm any `json:"policy_slug_perm"`
	AllowUnknownLicenses *bool `json:"allow_unknown_licenses,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EvaluationCount *int `json:"evaluation_count,omitempty"`
	Name *string `json:"name,omitempty"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	Policy map[string]any `json:"policy"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	SpdxIdentifiers []any `json:"spdx_identifiers"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	ViolationCount *int `json:"violation_count,omitempty"`
}

// PackageVersionBadge is the typed data model for the package_version_badge entity.
type PackageVersionBadge struct {
}

// PackageVersionBadgeLoadMatch is the typed request payload for PackageVersionBadge.LoadTyped.
type PackageVersionBadgeLoadMatch struct {
	Owner any `json:"owner"`
	PackageFormat any `json:"package_format"`
	PackageIdentifier any `json:"package_identifier"`
	PackageName any `json:"package_name"`
	PackageVersion any `json:"package_version"`
	Repo any `json:"repo"`
}

// PackageVulnerabilityPolicyEvaluation is the typed data model for the package_vulnerability_policy_evaluation entity.
type PackageVulnerabilityPolicyEvaluation struct {
	AllowUnknownSeverity *bool `json:"allow_unknown_severity,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EvaluationCount *int `json:"evaluation_count,omitempty"`
	MinSeverity *string `json:"min_severity,omitempty"`
	Name *string `json:"name,omitempty"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	Policy *map[string]any `json:"policy,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	ViolationCount *int `json:"violation_count,omitempty"`
}

// PackageVulnerabilityPolicyEvaluationLoadMatch is the typed request payload for PackageVulnerabilityPolicyEvaluation.LoadTyped.
type PackageVulnerabilityPolicyEvaluationLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	VulnerabilityPolicyId string `json:"vulnerability_policy_id"`
}

// PackageVulnerabilityPolicyEvaluationListMatch is the typed request payload for PackageVulnerabilityPolicyEvaluation.ListTyped.
type PackageVulnerabilityPolicyEvaluationListMatch struct {
	OrgId string `json:"org_id"`
	PolicySlugPerm any `json:"policy_slug_perm"`
}

// PackageVulnerabilityPolicyEvaluationCreateData is the typed request payload for PackageVulnerabilityPolicyEvaluation.CreateTyped.
type PackageVulnerabilityPolicyEvaluationCreateData struct {
	OrgId string `json:"org_id"`
	PolicySlugPerm any `json:"policy_slug_perm"`
	AllowUnknownSeverity *bool `json:"allow_unknown_severity,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	EvaluationCount *int `json:"evaluation_count,omitempty"`
	MinSeverity *string `json:"min_severity,omitempty"`
	Name *string `json:"name,omitempty"`
	OnViolationQuarantine *bool `json:"on_violation_quarantine,omitempty"`
	PackageQueryString *string `json:"package_query_string,omitempty"`
	Policy *map[string]any `json:"policy,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Status *string `json:"status,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	Url *string `json:"url,omitempty"`
	ViolationCount *int `json:"violation_count,omitempty"`
}

// Privilege is the typed data model for the privilege entity.
type Privilege struct {
}

// Profile is the typed data model for the profile entity.
type Profile struct {
}

// ProviderSetting is the typed data model for the provider_setting entity.
type ProviderSetting struct {
	Claims map[string]any `json:"claims"`
	Enabled bool `json:"enabled"`
	MappingClaim *string `json:"mapping_claim,omitempty"`
	Name string `json:"name"`
	ProviderUrl string `json:"provider_url"`
	ServiceAccounts *[]any `json:"service_accounts,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
}

// ProviderSettingLoadMatch is the typed request payload for ProviderSetting.LoadTyped.
type ProviderSettingLoadMatch struct {
	OrgId string `json:"org_id"`
	SlugPerm any `json:"slug_perm"`
}

// ProviderSettingListMatch is the typed request payload for ProviderSetting.ListTyped.
type ProviderSettingListMatch struct {
	OrgId string `json:"org_id"`
}

// ProviderSettingsWrite is the typed data model for the provider_settings_write entity.
type ProviderSettingsWrite struct {
	Claims map[string]any `json:"claims"`
	DynamicMappings *[]any `json:"dynamic_mappings,omitempty"`
	Enabled bool `json:"enabled"`
	MappingClaim *string `json:"mapping_claim,omitempty"`
	Name string `json:"name"`
	ProviderUrl string `json:"provider_url"`
	ServiceAccounts *[]any `json:"service_accounts,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
}

// ProviderSettingsWriteCreateData is the typed request payload for ProviderSettingsWrite.CreateTyped.
type ProviderSettingsWriteCreateData struct {
	OrgId string `json:"org_id"`
	Claims map[string]any `json:"claims"`
	DynamicMappings *[]any `json:"dynamic_mappings,omitempty"`
	Enabled bool `json:"enabled"`
	MappingClaim *string `json:"mapping_claim,omitempty"`
	Name string `json:"name"`
	ProviderUrl string `json:"provider_url"`
	ServiceAccounts *[]any `json:"service_accounts,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
}

// ProviderSettingsWriteUpdateData is the typed request payload for ProviderSettingsWrite.UpdateTyped.
type ProviderSettingsWriteUpdateData struct {
	OrgId string `json:"org_id"`
	SlugPerm any `json:"slug_perm"`
	Claims *map[string]any `json:"claims,omitempty"`
	DynamicMappings *[]any `json:"dynamic_mappings,omitempty"`
	Enabled *bool `json:"enabled,omitempty"`
	MappingClaim *string `json:"mapping_claim,omitempty"`
	Name *string `json:"name,omitempty"`
	ProviderUrl *string `json:"provider_url,omitempty"`
	ServiceAccounts *[]any `json:"service_accounts,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// Python is the typed data model for the python entity.
type Python struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// PythonLoadMatch is the typed request payload for Python.LoadTyped.
type PythonLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// PythonListMatch is the typed request payload for Python.ListTyped.
type PythonListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// PythonCreateData is the typed request payload for Python.CreateTyped.
type PythonCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// PythonUpdateData is the typed request payload for Python.UpdateTyped.
type PythonUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Quarantine is the typed data model for the quarantine entity.
type Quarantine struct {
}

// Quota is the typed data model for the quota entity.
type Quota struct {
	Display map[string]any `json:"display"`
	History []any `json:"history"`
	Raw map[string]any `json:"raw"`
}

// QuotaLoadMatch is the typed request payload for Quota.LoadTyped.
type QuotaLoadMatch struct {
	Id *string `json:"id,omitempty"`
	Owner *any `json:"owner,omitempty"`
}

// Raw is the typed data model for the raw entity.
type Raw struct {
}

// Refresh is the typed data model for the refresh entity.
type Refresh struct {
}

// Regenerate is the typed data model for the regenerate entity.
type Regenerate struct {
}

// Repo is the typed data model for the repo entity.
type Repo struct {
	CdnUrl *string `json:"cdn_url,omitempty"`
	ContentKind *string `json:"content_kind,omitempty"`
	ContextualAuthRealm *bool `json:"contextual_auth_realm,omitempty"`
	CopyOwn *bool `json:"copy_own,omitempty"`
	CopyPackages *string `json:"copy_packages,omitempty"`
	CosignSigningEnabled *bool `json:"cosign_signing_enabled,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultPrivilege *string `json:"default_privilege,omitempty"`
	DeleteOwn *bool `json:"delete_own,omitempty"`
	DeletePackages *string `json:"delete_packages,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Distributes *[]any `json:"distributes,omitempty"`
	DockerRefreshTokensEnabled *bool `json:"docker_refresh_tokens_enabled,omitempty"`
	EcdsaKeys *[]any `json:"ecdsa_keys,omitempty"`
	EnforceEula *bool `json:"enforce_eula,omitempty"`
	GpgKeys *[]any `json:"gpg_keys,omitempty"`
	IndexFiles *bool `json:"index_files,omitempty"`
	IsOpenSource *bool `json:"is_open_source,omitempty"`
	IsPrivate *bool `json:"is_private,omitempty"`
	IsPublic *bool `json:"is_public,omitempty"`
	ManageEntitlementsPrivilege *string `json:"manage_entitlements_privilege,omitempty"`
	MoveOwn *bool `json:"move_own,omitempty"`
	MovePackages *string `json:"move_packages,omitempty"`
	Name string `json:"name"`
	Namespace *string `json:"namespace,omitempty"`
	NamespaceUrl *string `json:"namespace_url,omitempty"`
	NugetNativeSigningEnabled *bool `json:"nuget_native_signing_enabled,omitempty"`
	NumDownloads *int `json:"num_downloads,omitempty"`
	NumPolicyViolatedPackages *int `json:"num_policy_violated_packages,omitempty"`
	NumQuarantinedPackages *int `json:"num_quarantined_packages,omitempty"`
	OpenSourceLicense *string `json:"open_source_license,omitempty"`
	OpenSourceProjectUrl *string `json:"open_source_project_url,omitempty"`
	PackageCount *int `json:"package_count,omitempty"`
	PackageGroupCount *int `json:"package_group_count,omitempty"`
	ProxyNpmjs *bool `json:"proxy_npmjs,omitempty"`
	ProxyPypi *bool `json:"proxy_pypi,omitempty"`
	RawPackageIndexEnabled *bool `json:"raw_package_index_enabled,omitempty"`
	RawPackageIndexSignaturesEnabled *bool `json:"raw_package_index_signatures_enabled,omitempty"`
	ReplacePackages *string `json:"replace_packages,omitempty"`
	ReplacePackagesByDefault *bool `json:"replace_packages_by_default,omitempty"`
	RepositoryType *int `json:"repository_type,omitempty"`
	RepositoryTypeStr *string `json:"repository_type_str,omitempty"`
	ResyncOwn *bool `json:"resync_own,omitempty"`
	ResyncPackages *string `json:"resync_packages,omitempty"`
	ScanOwn *bool `json:"scan_own,omitempty"`
	ScanPackages *string `json:"scan_packages,omitempty"`
	SelfHtmlUrl *string `json:"self_html_url,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	ShowSetupAll *bool `json:"show_setup_all,omitempty"`
	Size *int `json:"size,omitempty"`
	SizeStr *string `json:"size_str,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	StorageRegion *string `json:"storage_region,omitempty"`
	StrictNpmValidation *bool `json:"strict_npm_validation,omitempty"`
	TagPreReleasesAsLatest *bool `json:"tag_pre_releases_as_latest,omitempty"`
	UseDebianLabels *bool `json:"use_debian_labels,omitempty"`
	UseDefaultCargoUpstream *bool `json:"use_default_cargo_upstream,omitempty"`
	UseEntitlementsPrivilege *string `json:"use_entitlements_privilege,omitempty"`
	UseNoarchPackages *bool `json:"use_noarch_packages,omitempty"`
	UseSourcePackages *bool `json:"use_source_packages,omitempty"`
	UseVulnerabilityScanning *bool `json:"use_vulnerability_scanning,omitempty"`
	UserEntitlementsEnabled *bool `json:"user_entitlements_enabled,omitempty"`
	ViewStatistics *string `json:"view_statistics,omitempty"`
}

// RepoLoadMatch is the typed request payload for Repo.LoadTyped.
type RepoLoadMatch struct {
	Id string `json:"id"`
}

// RepoListMatch is the typed request payload for Repo.ListTyped.
type RepoListMatch struct {
	Identifier *any `json:"identifier,omitempty"`
	Owner *any `json:"owner,omitempty"`
}

// RepoCreateData is the typed request payload for Repo.CreateTyped.
type RepoCreateData struct {
	Identifier *any `json:"identifier,omitempty"`
	Owner *any `json:"owner,omitempty"`
	Id *string `json:"id,omitempty"`
	CdnUrl *string `json:"cdn_url,omitempty"`
	ContentKind *string `json:"content_kind,omitempty"`
	ContextualAuthRealm *bool `json:"contextual_auth_realm,omitempty"`
	CopyOwn *bool `json:"copy_own,omitempty"`
	CopyPackages *string `json:"copy_packages,omitempty"`
	CosignSigningEnabled *bool `json:"cosign_signing_enabled,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultPrivilege *string `json:"default_privilege,omitempty"`
	DeleteOwn *bool `json:"delete_own,omitempty"`
	DeletePackages *string `json:"delete_packages,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Distributes *[]any `json:"distributes,omitempty"`
	DockerRefreshTokensEnabled *bool `json:"docker_refresh_tokens_enabled,omitempty"`
	EcdsaKeys *[]any `json:"ecdsa_keys,omitempty"`
	EnforceEula *bool `json:"enforce_eula,omitempty"`
	GpgKeys *[]any `json:"gpg_keys,omitempty"`
	IndexFiles *bool `json:"index_files,omitempty"`
	IsOpenSource *bool `json:"is_open_source,omitempty"`
	IsPrivate *bool `json:"is_private,omitempty"`
	IsPublic *bool `json:"is_public,omitempty"`
	ManageEntitlementsPrivilege *string `json:"manage_entitlements_privilege,omitempty"`
	MoveOwn *bool `json:"move_own,omitempty"`
	MovePackages *string `json:"move_packages,omitempty"`
	Name string `json:"name"`
	Namespace *string `json:"namespace,omitempty"`
	NamespaceUrl *string `json:"namespace_url,omitempty"`
	NugetNativeSigningEnabled *bool `json:"nuget_native_signing_enabled,omitempty"`
	NumDownloads *int `json:"num_downloads,omitempty"`
	NumPolicyViolatedPackages *int `json:"num_policy_violated_packages,omitempty"`
	NumQuarantinedPackages *int `json:"num_quarantined_packages,omitempty"`
	OpenSourceLicense *string `json:"open_source_license,omitempty"`
	OpenSourceProjectUrl *string `json:"open_source_project_url,omitempty"`
	PackageCount *int `json:"package_count,omitempty"`
	PackageGroupCount *int `json:"package_group_count,omitempty"`
	ProxyNpmjs *bool `json:"proxy_npmjs,omitempty"`
	ProxyPypi *bool `json:"proxy_pypi,omitempty"`
	RawPackageIndexEnabled *bool `json:"raw_package_index_enabled,omitempty"`
	RawPackageIndexSignaturesEnabled *bool `json:"raw_package_index_signatures_enabled,omitempty"`
	ReplacePackages *string `json:"replace_packages,omitempty"`
	ReplacePackagesByDefault *bool `json:"replace_packages_by_default,omitempty"`
	RepositoryType *int `json:"repository_type,omitempty"`
	RepositoryTypeStr *string `json:"repository_type_str,omitempty"`
	ResyncOwn *bool `json:"resync_own,omitempty"`
	ResyncPackages *string `json:"resync_packages,omitempty"`
	ScanOwn *bool `json:"scan_own,omitempty"`
	ScanPackages *string `json:"scan_packages,omitempty"`
	SelfHtmlUrl *string `json:"self_html_url,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	ShowSetupAll *bool `json:"show_setup_all,omitempty"`
	Size *int `json:"size,omitempty"`
	SizeStr *string `json:"size_str,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	StorageRegion *string `json:"storage_region,omitempty"`
	StrictNpmValidation *bool `json:"strict_npm_validation,omitempty"`
	TagPreReleasesAsLatest *bool `json:"tag_pre_releases_as_latest,omitempty"`
	UseDebianLabels *bool `json:"use_debian_labels,omitempty"`
	UseDefaultCargoUpstream *bool `json:"use_default_cargo_upstream,omitempty"`
	UseEntitlementsPrivilege *string `json:"use_entitlements_privilege,omitempty"`
	UseNoarchPackages *bool `json:"use_noarch_packages,omitempty"`
	UseSourcePackages *bool `json:"use_source_packages,omitempty"`
	UseVulnerabilityScanning *bool `json:"use_vulnerability_scanning,omitempty"`
	UserEntitlementsEnabled *bool `json:"user_entitlements_enabled,omitempty"`
	ViewStatistics *string `json:"view_statistics,omitempty"`
}

// RepoUpdateData is the typed request payload for Repo.UpdateTyped.
type RepoUpdateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	CdnUrl *string `json:"cdn_url,omitempty"`
	ContentKind *string `json:"content_kind,omitempty"`
	ContextualAuthRealm *bool `json:"contextual_auth_realm,omitempty"`
	CopyOwn *bool `json:"copy_own,omitempty"`
	CopyPackages *string `json:"copy_packages,omitempty"`
	CosignSigningEnabled *bool `json:"cosign_signing_enabled,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DefaultPrivilege *string `json:"default_privilege,omitempty"`
	DeleteOwn *bool `json:"delete_own,omitempty"`
	DeletePackages *string `json:"delete_packages,omitempty"`
	DeletedAt *string `json:"deleted_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Distributes *[]any `json:"distributes,omitempty"`
	DockerRefreshTokensEnabled *bool `json:"docker_refresh_tokens_enabled,omitempty"`
	EcdsaKeys *[]any `json:"ecdsa_keys,omitempty"`
	EnforceEula *bool `json:"enforce_eula,omitempty"`
	GpgKeys *[]any `json:"gpg_keys,omitempty"`
	IndexFiles *bool `json:"index_files,omitempty"`
	IsOpenSource *bool `json:"is_open_source,omitempty"`
	IsPrivate *bool `json:"is_private,omitempty"`
	IsPublic *bool `json:"is_public,omitempty"`
	ManageEntitlementsPrivilege *string `json:"manage_entitlements_privilege,omitempty"`
	MoveOwn *bool `json:"move_own,omitempty"`
	MovePackages *string `json:"move_packages,omitempty"`
	Name *string `json:"name,omitempty"`
	Namespace *string `json:"namespace,omitempty"`
	NamespaceUrl *string `json:"namespace_url,omitempty"`
	NugetNativeSigningEnabled *bool `json:"nuget_native_signing_enabled,omitempty"`
	NumDownloads *int `json:"num_downloads,omitempty"`
	NumPolicyViolatedPackages *int `json:"num_policy_violated_packages,omitempty"`
	NumQuarantinedPackages *int `json:"num_quarantined_packages,omitempty"`
	OpenSourceLicense *string `json:"open_source_license,omitempty"`
	OpenSourceProjectUrl *string `json:"open_source_project_url,omitempty"`
	PackageCount *int `json:"package_count,omitempty"`
	PackageGroupCount *int `json:"package_group_count,omitempty"`
	ProxyNpmjs *bool `json:"proxy_npmjs,omitempty"`
	ProxyPypi *bool `json:"proxy_pypi,omitempty"`
	RawPackageIndexEnabled *bool `json:"raw_package_index_enabled,omitempty"`
	RawPackageIndexSignaturesEnabled *bool `json:"raw_package_index_signatures_enabled,omitempty"`
	ReplacePackages *string `json:"replace_packages,omitempty"`
	ReplacePackagesByDefault *bool `json:"replace_packages_by_default,omitempty"`
	RepositoryType *int `json:"repository_type,omitempty"`
	RepositoryTypeStr *string `json:"repository_type_str,omitempty"`
	ResyncOwn *bool `json:"resync_own,omitempty"`
	ResyncPackages *string `json:"resync_packages,omitempty"`
	ScanOwn *bool `json:"scan_own,omitempty"`
	ScanPackages *string `json:"scan_packages,omitempty"`
	SelfHtmlUrl *string `json:"self_html_url,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	ShowSetupAll *bool `json:"show_setup_all,omitempty"`
	Size *int `json:"size,omitempty"`
	SizeStr *string `json:"size_str,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	StorageRegion *string `json:"storage_region,omitempty"`
	StrictNpmValidation *bool `json:"strict_npm_validation,omitempty"`
	TagPreReleasesAsLatest *bool `json:"tag_pre_releases_as_latest,omitempty"`
	UseDebianLabels *bool `json:"use_debian_labels,omitempty"`
	UseDefaultCargoUpstream *bool `json:"use_default_cargo_upstream,omitempty"`
	UseEntitlementsPrivilege *string `json:"use_entitlements_privilege,omitempty"`
	UseNoarchPackages *bool `json:"use_noarch_packages,omitempty"`
	UseSourcePackages *bool `json:"use_source_packages,omitempty"`
	UseVulnerabilityScanning *bool `json:"use_vulnerability_scanning,omitempty"`
	UserEntitlementsEnabled *bool `json:"user_entitlements_enabled,omitempty"`
	ViewStatistics *string `json:"view_statistics,omitempty"`
}

// RepoRemoveMatch is the typed request payload for Repo.RemoveTyped.
type RepoRemoveMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	SlugPerm *any `json:"slug_perm,omitempty"`
}

// RepositoryAuditLog is the typed data model for the repository_audit_log entity.
type RepositoryAuditLog struct {
	Actor string `json:"actor"`
	ActorIpAddress string `json:"actor_ip_address"`
	ActorKind *string `json:"actor_kind,omitempty"`
	ActorLocation map[string]any `json:"actor_location"`
	ActorSlugPerm string `json:"actor_slug_perm"`
	ActorUrl *string `json:"actor_url,omitempty"`
	Context string `json:"context"`
	Event string `json:"event"`
	EventAt string `json:"event_at"`
	Object string `json:"object"`
	ObjectKind string `json:"object_kind"`
	ObjectSlugPerm string `json:"object_slug_perm"`
	Uuid *string `json:"uuid,omitempty"`
}

// RepositoryAuditLogListMatch is the typed request payload for RepositoryAuditLog.ListTyped.
type RepositoryAuditLogListMatch struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// RepositoryEcdsaKey is the typed data model for the repository_ecdsa_key entity.
type RepositoryEcdsaKey struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Default *bool `json:"default,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FingerprintShort *string `json:"fingerprint_short,omitempty"`
	PublicKey *string `json:"public_key,omitempty"`
	SshFingerprint *string `json:"ssh_fingerprint,omitempty"`
}

// RepositoryEcdsaKeyLoadMatch is the typed request payload for RepositoryEcdsaKey.LoadTyped.
type RepositoryEcdsaKeyLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RepositoryEcdsaKeyCreateData is the typed request payload for RepositoryEcdsaKey.CreateTyped.
type RepositoryEcdsaKeyCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Default *bool `json:"default,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FingerprintShort *string `json:"fingerprint_short,omitempty"`
	PublicKey *string `json:"public_key,omitempty"`
	SshFingerprint *string `json:"ssh_fingerprint,omitempty"`
}

// RepositoryGeoIpRule is the typed data model for the repository_geo_ip_rule entity.
type RepositoryGeoIpRule struct {
	Cidr map[string]any `json:"cidr"`
	CountryCode map[string]any `json:"country_code"`
}

// RepositoryGeoIpRuleLoadMatch is the typed request payload for RepositoryGeoIpRule.LoadTyped.
type RepositoryGeoIpRuleLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RepositoryGeoIpRuleUpdateData is the typed request payload for RepositoryGeoIpRule.UpdateTyped.
type RepositoryGeoIpRuleUpdateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Cidr *map[string]any `json:"cidr,omitempty"`
	CountryCode *map[string]any `json:"country_code,omitempty"`
}

// RepositoryGeoIpStatus is the typed data model for the repository_geo_ip_status entity.
type RepositoryGeoIpStatus struct {
	GeoipEnabled *bool `json:"geoip_enabled,omitempty"`
}

// RepositoryGeoIpStatusLoadMatch is the typed request payload for RepositoryGeoIpStatus.LoadTyped.
type RepositoryGeoIpStatusLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RepositoryGeoIpTestAddress is the typed data model for the repository_geo_ip_test_address entity.
type RepositoryGeoIpTestAddress struct {
}

// RepositoryGeoIpTestAddressCreateData is the typed request payload for RepositoryGeoIpTestAddress.CreateTyped.
type RepositoryGeoIpTestAddressCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RepositoryGpgKey is the typed data model for the repository_gpg_key entity.
type RepositoryGpgKey struct {
	Active *bool `json:"active,omitempty"`
	Comment string `json:"comment"`
	CreatedAt *string `json:"created_at,omitempty"`
	Default *bool `json:"default,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FingerprintShort *string `json:"fingerprint_short,omitempty"`
	PublicKey *string `json:"public_key,omitempty"`
}

// RepositoryGpgKeyLoadMatch is the typed request payload for RepositoryGpgKey.LoadTyped.
type RepositoryGpgKeyLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RepositoryGpgKeyCreateData is the typed request payload for RepositoryGpgKey.CreateTyped.
type RepositoryGpgKeyCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Active *bool `json:"active,omitempty"`
	Comment string `json:"comment"`
	CreatedAt *string `json:"created_at,omitempty"`
	Default *bool `json:"default,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FingerprintShort *string `json:"fingerprint_short,omitempty"`
	PublicKey *string `json:"public_key,omitempty"`
}

// RepositoryPrivilegeInput is the typed data model for the repository_privilege_input entity.
type RepositoryPrivilegeInput struct {
	Privilege string `json:"privilege"`
	Service *string `json:"service,omitempty"`
	Team *string `json:"team,omitempty"`
	User *string `json:"user,omitempty"`
}

// RepositoryPrivilegeInputListMatch is the typed request payload for RepositoryPrivilegeInput.ListTyped.
type RepositoryPrivilegeInputListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RepositoryRetentionRule is the typed data model for the repository_retention_rule entity.
type RepositoryRetentionRule struct {
	RetentionCountLimit *int `json:"retention_count_limit,omitempty"`
	RetentionDaysLimit *int `json:"retention_days_limit,omitempty"`
	RetentionEnabled *bool `json:"retention_enabled,omitempty"`
	RetentionGroupByFormat *bool `json:"retention_group_by_format,omitempty"`
	RetentionGroupByName *bool `json:"retention_group_by_name,omitempty"`
	RetentionGroupByPackageType *bool `json:"retention_group_by_package_type,omitempty"`
	RetentionPackageQueryString *string `json:"retention_package_query_string,omitempty"`
	RetentionSizeLimit *int `json:"retention_size_limit,omitempty"`
}

// RepositoryRetentionRuleLoadMatch is the typed request payload for RepositoryRetentionRule.LoadTyped.
type RepositoryRetentionRuleLoadMatch struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// RepositoryRetentionRuleUpdateData is the typed request payload for RepositoryRetentionRule.UpdateTyped.
type RepositoryRetentionRuleUpdateData struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	RetentionCountLimit *int `json:"retention_count_limit,omitempty"`
	RetentionDaysLimit *int `json:"retention_days_limit,omitempty"`
	RetentionEnabled *bool `json:"retention_enabled,omitempty"`
	RetentionGroupByFormat *bool `json:"retention_group_by_format,omitempty"`
	RetentionGroupByName *bool `json:"retention_group_by_name,omitempty"`
	RetentionGroupByPackageType *bool `json:"retention_group_by_package_type,omitempty"`
	RetentionPackageQueryString *string `json:"retention_package_query_string,omitempty"`
	RetentionSizeLimit *int `json:"retention_size_limit,omitempty"`
}

// RepositoryRsaKey is the typed data model for the repository_rsa_key entity.
type RepositoryRsaKey struct {
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Default *bool `json:"default,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FingerprintShort *string `json:"fingerprint_short,omitempty"`
	PublicKey *string `json:"public_key,omitempty"`
	SshFingerprint *string `json:"ssh_fingerprint,omitempty"`
}

// RepositoryRsaKeyLoadMatch is the typed request payload for RepositoryRsaKey.LoadTyped.
type RepositoryRsaKeyLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RepositoryRsaKeyCreateData is the typed request payload for RepositoryRsaKey.CreateTyped.
type RepositoryRsaKeyCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Active *bool `json:"active,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Default *bool `json:"default,omitempty"`
	Fingerprint *string `json:"fingerprint,omitempty"`
	FingerprintShort *string `json:"fingerprint_short,omitempty"`
	PublicKey *string `json:"public_key,omitempty"`
	SshFingerprint *string `json:"ssh_fingerprint,omitempty"`
}

// RepositoryToken is the typed data model for the repository_token entity.
type RepositoryToken struct {
	Clients *int `json:"clients,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	Default *bool `json:"default,omitempty"`
	DisableUrl *string `json:"disable_url,omitempty"`
	Downloads *int `json:"downloads,omitempty"`
	EnableUrl *string `json:"enable_url,omitempty"`
	EulaAccepted *map[string]any `json:"eula_accepted,omitempty"`
	EulaAcceptedAt *string `json:"eula_accepted_at,omitempty"`
	EulaAcceptedFrom *string `json:"eula_accepted_from,omitempty"`
	EulaRequired *bool `json:"eula_required,omitempty"`
	HasLimits *bool `json:"has_limits,omitempty"`
	Identifier *int `json:"identifier,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	IsLimited *bool `json:"is_limited,omitempty"`
	LimitBandwidth *int `json:"limit_bandwidth,omitempty"`
	LimitBandwidthUnit *string `json:"limit_bandwidth_unit,omitempty"`
	LimitDateRangeFrom *string `json:"limit_date_range_from,omitempty"`
	LimitDateRangeTo *string `json:"limit_date_range_to,omitempty"`
	LimitNumClients *int `json:"limit_num_clients,omitempty"`
	LimitNumDownloads *int `json:"limit_num_downloads,omitempty"`
	LimitPackageQuery *string `json:"limit_package_query,omitempty"`
	LimitPathQuery *string `json:"limit_path_query,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name string `json:"name"`
	RefreshUrl *string `json:"refresh_url,omitempty"`
	ResetUrl *string `json:"reset_url,omitempty"`
	ScheduledResetAt *string `json:"scheduled_reset_at,omitempty"`
	ScheduledResetPeriod *string `json:"scheduled_reset_period,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Token *string `json:"token,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
	UpdatedByUrl *string `json:"updated_by_url,omitempty"`
	Usage *string `json:"usage,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// RepositoryTokenLoadMatch is the typed request payload for RepositoryToken.LoadTyped.
type RepositoryTokenLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// RepositoryTokenListMatch is the typed request payload for RepositoryToken.ListTyped.
type RepositoryTokenListMatch struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// RepositoryTokenCreateData is the typed request payload for RepositoryToken.CreateTyped.
type RepositoryTokenCreateData struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	Clients *int `json:"clients,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	Default *bool `json:"default,omitempty"`
	DisableUrl *string `json:"disable_url,omitempty"`
	Downloads *int `json:"downloads,omitempty"`
	EnableUrl *string `json:"enable_url,omitempty"`
	EulaAccepted *map[string]any `json:"eula_accepted,omitempty"`
	EulaAcceptedAt *string `json:"eula_accepted_at,omitempty"`
	EulaAcceptedFrom *string `json:"eula_accepted_from,omitempty"`
	EulaRequired *bool `json:"eula_required,omitempty"`
	HasLimits *bool `json:"has_limits,omitempty"`
	Identifier *int `json:"identifier,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	IsLimited *bool `json:"is_limited,omitempty"`
	LimitBandwidth *int `json:"limit_bandwidth,omitempty"`
	LimitBandwidthUnit *string `json:"limit_bandwidth_unit,omitempty"`
	LimitDateRangeFrom *string `json:"limit_date_range_from,omitempty"`
	LimitDateRangeTo *string `json:"limit_date_range_to,omitempty"`
	LimitNumClients *int `json:"limit_num_clients,omitempty"`
	LimitNumDownloads *int `json:"limit_num_downloads,omitempty"`
	LimitPackageQuery *string `json:"limit_package_query,omitempty"`
	LimitPathQuery *string `json:"limit_path_query,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name string `json:"name"`
	RefreshUrl *string `json:"refresh_url,omitempty"`
	ResetUrl *string `json:"reset_url,omitempty"`
	ScheduledResetAt *string `json:"scheduled_reset_at,omitempty"`
	ScheduledResetPeriod *string `json:"scheduled_reset_period,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Token *string `json:"token,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
	UpdatedByUrl *string `json:"updated_by_url,omitempty"`
	Usage *string `json:"usage,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// RepositoryTokenUpdateData is the typed request payload for RepositoryToken.UpdateTyped.
type RepositoryTokenUpdateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	Clients *int `json:"clients,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	Default *bool `json:"default,omitempty"`
	DisableUrl *string `json:"disable_url,omitempty"`
	Downloads *int `json:"downloads,omitempty"`
	EnableUrl *string `json:"enable_url,omitempty"`
	EulaAccepted *map[string]any `json:"eula_accepted,omitempty"`
	EulaAcceptedAt *string `json:"eula_accepted_at,omitempty"`
	EulaAcceptedFrom *string `json:"eula_accepted_from,omitempty"`
	EulaRequired *bool `json:"eula_required,omitempty"`
	HasLimits *bool `json:"has_limits,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	IsLimited *bool `json:"is_limited,omitempty"`
	LimitBandwidth *int `json:"limit_bandwidth,omitempty"`
	LimitBandwidthUnit *string `json:"limit_bandwidth_unit,omitempty"`
	LimitDateRangeFrom *string `json:"limit_date_range_from,omitempty"`
	LimitDateRangeTo *string `json:"limit_date_range_to,omitempty"`
	LimitNumClients *int `json:"limit_num_clients,omitempty"`
	LimitNumDownloads *int `json:"limit_num_downloads,omitempty"`
	LimitPackageQuery *string `json:"limit_package_query,omitempty"`
	LimitPathQuery *string `json:"limit_path_query,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	RefreshUrl *string `json:"refresh_url,omitempty"`
	ResetUrl *string `json:"reset_url,omitempty"`
	ScheduledResetAt *string `json:"scheduled_reset_at,omitempty"`
	ScheduledResetPeriod *string `json:"scheduled_reset_period,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Token *string `json:"token,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
	UpdatedByUrl *string `json:"updated_by_url,omitempty"`
	Usage *string `json:"usage,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// RepositoryTokenRefresh is the typed data model for the repository_token_refresh entity.
type RepositoryTokenRefresh struct {
	Clients *int `json:"clients,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	Default *bool `json:"default,omitempty"`
	DisableUrl *string `json:"disable_url,omitempty"`
	Downloads *int `json:"downloads,omitempty"`
	EnableUrl *string `json:"enable_url,omitempty"`
	EulaAccepted *map[string]any `json:"eula_accepted,omitempty"`
	EulaAcceptedAt *string `json:"eula_accepted_at,omitempty"`
	EulaAcceptedFrom *string `json:"eula_accepted_from,omitempty"`
	EulaRequired *bool `json:"eula_required,omitempty"`
	HasLimits *bool `json:"has_limits,omitempty"`
	Identifier *int `json:"identifier,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	IsLimited *bool `json:"is_limited,omitempty"`
	LimitBandwidth *int `json:"limit_bandwidth,omitempty"`
	LimitBandwidthUnit *string `json:"limit_bandwidth_unit,omitempty"`
	LimitDateRangeFrom *string `json:"limit_date_range_from,omitempty"`
	LimitDateRangeTo *string `json:"limit_date_range_to,omitempty"`
	LimitNumClients *int `json:"limit_num_clients,omitempty"`
	LimitNumDownloads *int `json:"limit_num_downloads,omitempty"`
	LimitPackageQuery *string `json:"limit_package_query,omitempty"`
	LimitPathQuery *string `json:"limit_path_query,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	RefreshUrl *string `json:"refresh_url,omitempty"`
	ResetUrl *string `json:"reset_url,omitempty"`
	ScheduledResetAt *string `json:"scheduled_reset_at,omitempty"`
	ScheduledResetPeriod *string `json:"scheduled_reset_period,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Token *string `json:"token,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
	UpdatedByUrl *string `json:"updated_by_url,omitempty"`
	Usage *string `json:"usage,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// RepositoryTokenRefreshCreateData is the typed request payload for RepositoryTokenRefresh.CreateTyped.
type RepositoryTokenRefreshCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	Clients *int `json:"clients,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	Default *bool `json:"default,omitempty"`
	DisableUrl *string `json:"disable_url,omitempty"`
	Downloads *int `json:"downloads,omitempty"`
	EnableUrl *string `json:"enable_url,omitempty"`
	EulaAccepted *map[string]any `json:"eula_accepted,omitempty"`
	EulaAcceptedAt *string `json:"eula_accepted_at,omitempty"`
	EulaAcceptedFrom *string `json:"eula_accepted_from,omitempty"`
	EulaRequired *bool `json:"eula_required,omitempty"`
	HasLimits *bool `json:"has_limits,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	IsLimited *bool `json:"is_limited,omitempty"`
	LimitBandwidth *int `json:"limit_bandwidth,omitempty"`
	LimitBandwidthUnit *string `json:"limit_bandwidth_unit,omitempty"`
	LimitDateRangeFrom *string `json:"limit_date_range_from,omitempty"`
	LimitDateRangeTo *string `json:"limit_date_range_to,omitempty"`
	LimitNumClients *int `json:"limit_num_clients,omitempty"`
	LimitNumDownloads *int `json:"limit_num_downloads,omitempty"`
	LimitPackageQuery *string `json:"limit_package_query,omitempty"`
	LimitPathQuery *string `json:"limit_path_query,omitempty"`
	Metadata *map[string]any `json:"metadata,omitempty"`
	Name *string `json:"name,omitempty"`
	RefreshUrl *string `json:"refresh_url,omitempty"`
	ResetUrl *string `json:"reset_url,omitempty"`
	ScheduledResetAt *string `json:"scheduled_reset_at,omitempty"`
	ScheduledResetPeriod *string `json:"scheduled_reset_period,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Token *string `json:"token,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
	UpdatedByUrl *string `json:"updated_by_url,omitempty"`
	Usage *string `json:"usage,omitempty"`
	User *string `json:"user,omitempty"`
	UserUrl *string `json:"user_url,omitempty"`
}

// RepositoryTokenSync is the typed data model for the repository_token_sync entity.
type RepositoryTokenSync struct {
	Tokens *[]any `json:"tokens,omitempty"`
}

// RepositoryTokenSyncCreateData is the typed request payload for RepositoryTokenSync.CreateTyped.
type RepositoryTokenSyncCreateData struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	Tokens *[]any `json:"tokens,omitempty"`
}

// RepositoryWebhook is the typed data model for the repository_webhook entity.
type RepositoryWebhook struct {
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	DisableReason *int `json:"disable_reason,omitempty"`
	DisableReasonStr *string `json:"disable_reason_str,omitempty"`
	Event string `json:"event"`
	Events []any `json:"events"`
	Identifier *int `json:"identifier,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	IsLastResponseBad *bool `json:"is_last_response_bad,omitempty"`
	LastResponseStatus *int `json:"last_response_status,omitempty"`
	LastResponseStatusStr *string `json:"last_response_status_str,omitempty"`
	NumSent *int `json:"num_sent,omitempty"`
	PackageQuery *string `json:"package_query,omitempty"`
	RequestBodyFormat *int `json:"request_body_format,omitempty"`
	RequestBodyFormatStr *string `json:"request_body_format_str,omitempty"`
	RequestBodyTemplateFormat *int `json:"request_body_template_format,omitempty"`
	RequestBodyTemplateFormatStr *string `json:"request_body_template_format_str,omitempty"`
	RequestContentType *string `json:"request_content_type,omitempty"`
	SecretHeader *string `json:"secret_header,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	TargetUrl string `json:"target_url"`
	Template *string `json:"template,omitempty"`
	Templates []any `json:"templates"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
	UpdatedByUrl *string `json:"updated_by_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// RepositoryWebhookListMatch is the typed request payload for RepositoryWebhook.ListTyped.
type RepositoryWebhookListMatch struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	Identifier *any `json:"identifier,omitempty"`
}

// RepositoryWebhookCreateData is the typed request payload for RepositoryWebhook.CreateTyped.
type RepositoryWebhookCreateData struct {
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	DisableReason *int `json:"disable_reason,omitempty"`
	DisableReasonStr *string `json:"disable_reason_str,omitempty"`
	Event string `json:"event"`
	Events []any `json:"events"`
	Identifier *int `json:"identifier,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	IsLastResponseBad *bool `json:"is_last_response_bad,omitempty"`
	LastResponseStatus *int `json:"last_response_status,omitempty"`
	LastResponseStatusStr *string `json:"last_response_status_str,omitempty"`
	NumSent *int `json:"num_sent,omitempty"`
	PackageQuery *string `json:"package_query,omitempty"`
	RequestBodyFormat *int `json:"request_body_format,omitempty"`
	RequestBodyFormatStr *string `json:"request_body_format_str,omitempty"`
	RequestBodyTemplateFormat *int `json:"request_body_template_format,omitempty"`
	RequestBodyTemplateFormatStr *string `json:"request_body_template_format_str,omitempty"`
	RequestContentType *string `json:"request_content_type,omitempty"`
	SecretHeader *string `json:"secret_header,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	TargetUrl string `json:"target_url"`
	Template *string `json:"template,omitempty"`
	Templates []any `json:"templates"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
	UpdatedByUrl *string `json:"updated_by_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// RepositoryWebhookUpdateData is the typed request payload for RepositoryWebhook.UpdateTyped.
type RepositoryWebhookUpdateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	DisableReason *int `json:"disable_reason,omitempty"`
	DisableReasonStr *string `json:"disable_reason_str,omitempty"`
	Event *string `json:"event,omitempty"`
	Events *[]any `json:"events,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	IsLastResponseBad *bool `json:"is_last_response_bad,omitempty"`
	LastResponseStatus *int `json:"last_response_status,omitempty"`
	LastResponseStatusStr *string `json:"last_response_status_str,omitempty"`
	NumSent *int `json:"num_sent,omitempty"`
	PackageQuery *string `json:"package_query,omitempty"`
	RequestBodyFormat *int `json:"request_body_format,omitempty"`
	RequestBodyFormatStr *string `json:"request_body_format_str,omitempty"`
	RequestBodyTemplateFormat *int `json:"request_body_template_format,omitempty"`
	RequestBodyTemplateFormatStr *string `json:"request_body_template_format_str,omitempty"`
	RequestContentType *string `json:"request_content_type,omitempty"`
	SecretHeader *string `json:"secret_header,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	TargetUrl *string `json:"target_url,omitempty"`
	Template *string `json:"template,omitempty"`
	Templates *[]any `json:"templates,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpdatedBy *string `json:"updated_by,omitempty"`
	UpdatedByUrl *string `json:"updated_by_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// RepositoryX509EcdsaCertificate is the typed data model for the repository_x509_ecdsa_certificate entity.
type RepositoryX509EcdsaCertificate struct {
	Active *bool `json:"active,omitempty"`
	Certificate *string `json:"certificate,omitempty"`
	CertificateChain *string `json:"certificate_chain,omitempty"`
	CertificateChainFingerprint *string `json:"certificate_chain_fingerprint,omitempty"`
	CertificateChainFingerprintShort *string `json:"certificate_chain_fingerprint_short,omitempty"`
	CertificateFingerprint *string `json:"certificate_fingerprint,omitempty"`
	CertificateFingerprintShort *string `json:"certificate_fingerprint_short,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Default *bool `json:"default,omitempty"`
	IssuingStatus *string `json:"issuing_status,omitempty"`
}

// RepositoryX509EcdsaCertificateLoadMatch is the typed request payload for RepositoryX509EcdsaCertificate.LoadTyped.
type RepositoryX509EcdsaCertificateLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RepositoryX509RsaCertificate is the typed data model for the repository_x509_rsa_certificate entity.
type RepositoryX509RsaCertificate struct {
	Active *bool `json:"active,omitempty"`
	Certificate *string `json:"certificate,omitempty"`
	CertificateChain *string `json:"certificate_chain,omitempty"`
	CertificateChainFingerprint *string `json:"certificate_chain_fingerprint,omitempty"`
	CertificateChainFingerprintShort *string `json:"certificate_chain_fingerprint_short,omitempty"`
	CertificateFingerprint *string `json:"certificate_fingerprint,omitempty"`
	CertificateFingerprintShort *string `json:"certificate_fingerprint_short,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Default *bool `json:"default,omitempty"`
	IssuingStatus *string `json:"issuing_status,omitempty"`
}

// RepositoryX509RsaCertificateLoadMatch is the typed request payload for RepositoryX509RsaCertificate.LoadTyped.
type RepositoryX509RsaCertificateLoadMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// Reset is the typed data model for the reset entity.
type Reset struct {
}

// ResourcesRateCheck is the typed data model for the resources_rate_check entity.
type ResourcesRateCheck struct {
	Interval *float64 `json:"interval,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Remaining *int `json:"remaining,omitempty"`
	Reset *int `json:"reset,omitempty"`
	ResetIso8601 *string `json:"reset_iso_8601,omitempty"`
	Throttled *bool `json:"throttled,omitempty"`
}

// ResourcesRateCheckLoadMatch is the typed request payload for ResourcesRateCheck.LoadTyped.
type ResourcesRateCheckLoadMatch struct {
	Interval *float64 `json:"interval,omitempty"`
	Limit *int `json:"limit,omitempty"`
	Remaining *int `json:"remaining,omitempty"`
	Reset *int `json:"reset,omitempty"`
	ResetIso8601 *string `json:"reset_iso_8601,omitempty"`
	Throttled *bool `json:"throttled,omitempty"`
}

// Resync is the typed data model for the resync entity.
type Resync struct {
}

// Retention is the typed data model for the retention entity.
type Retention struct {
}

// Rpm is the typed data model for the rpm entity.
type Rpm struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	DistroVersion string `json:"distro_version"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	GpgKeyInline *string `json:"gpg_key_inline,omitempty"`
	GpgKeyUrl *string `json:"gpg_key_url,omitempty"`
	GpgVerification *string `json:"gpg_verification,omitempty"`
	IncludeSources *bool `json:"include_sources,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerificationStatus *string `json:"verification_status,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// RpmLoadMatch is the typed request payload for Rpm.LoadTyped.
type RpmLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RpmListMatch is the typed request payload for Rpm.ListTyped.
type RpmListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RpmCreateData is the typed request payload for Rpm.CreateTyped.
type RpmCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	DistroVersion string `json:"distro_version"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	GpgKeyInline *string `json:"gpg_key_inline,omitempty"`
	GpgKeyUrl *string `json:"gpg_key_url,omitempty"`
	GpgVerification *string `json:"gpg_verification,omitempty"`
	IncludeSources *bool `json:"include_sources,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerificationStatus *string `json:"verification_status,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// RpmUpdateData is the typed request payload for Rpm.UpdateTyped.
type RpmUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	DistroVersion *string `json:"distro_version,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	GpgKeyInline *string `json:"gpg_key_inline,omitempty"`
	GpgKeyUrl *string `json:"gpg_key_url,omitempty"`
	GpgVerification *string `json:"gpg_verification,omitempty"`
	IncludeSources *bool `json:"include_sources,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerificationStatus *string `json:"verification_status,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Rsa is the typed data model for the rsa entity.
type Rsa struct {
}

// Ruby is the typed data model for the ruby entity.
type Ruby struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// RubyLoadMatch is the typed request payload for Ruby.LoadTyped.
type RubyLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RubyListMatch is the typed request payload for Ruby.ListTyped.
type RubyListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// RubyCreateData is the typed request payload for Ruby.CreateTyped.
type RubyCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// RubyUpdateData is the typed request payload for Ruby.UpdateTyped.
type RubyUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// SamlGroupSync is the typed data model for the saml_group_sync entity.
type SamlGroupSync struct {
}

// Scan is the typed data model for the scan entity.
type Scan struct {
}

// Self is the typed data model for the self entity.
type Self struct {
}

// Service is the typed data model for the service entity.
type Service struct {
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Key *string `json:"key,omitempty"`
	KeyExpiresAt *string `json:"key_expires_at,omitempty"`
	Name string `json:"name"`
	Role *string `json:"role,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
}

// ServiceLoadMatch is the typed request payload for Service.LoadTyped.
type ServiceLoadMatch struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
}

// ServiceListMatch is the typed request payload for Service.ListTyped.
type ServiceListMatch struct {
	OrgId string `json:"org_id"`
}

// ServiceCreateData is the typed request payload for Service.CreateTyped.
type ServiceCreateData struct {
	OrgId string `json:"org_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Key *string `json:"key,omitempty"`
	KeyExpiresAt *string `json:"key_expires_at,omitempty"`
	Name string `json:"name"`
	Role *string `json:"role,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
}

// ServiceUpdateData is the typed request payload for Service.UpdateTyped.
type ServiceUpdateData struct {
	Id string `json:"id"`
	OrgId string `json:"org_id"`
	CreatedAt *string `json:"created_at,omitempty"`
	CreatedBy *string `json:"created_by,omitempty"`
	CreatedByUrl *string `json:"created_by_url,omitempty"`
	Description *string `json:"description,omitempty"`
	Key *string `json:"key,omitempty"`
	KeyExpiresAt *string `json:"key_expires_at,omitempty"`
	Name *string `json:"name,omitempty"`
	Role *string `json:"role,omitempty"`
	Slug *string `json:"slug,omitempty"`
	Teams *[]any `json:"teams,omitempty"`
}

// Status is the typed data model for the status entity.
type Status struct {
}

// StatusBasic is the typed data model for the status_basic entity.
type StatusBasic struct {
	Detail *string `json:"detail,omitempty"`
	Version *string `json:"version,omitempty"`
}

// StatusBasicLoadMatch is the typed request payload for StatusBasic.LoadTyped.
type StatusBasicLoadMatch struct {
	Detail *string `json:"detail,omitempty"`
	Version *string `json:"version,omitempty"`
}

// StorageRegion is the typed data model for the storage_region entity.
type StorageRegion struct {
	Label string `json:"label"`
	Slug string `json:"slug"`
}

// StorageRegionLoadMatch is the typed request payload for StorageRegion.LoadTyped.
type StorageRegionLoadMatch struct {
	Id string `json:"id"`
}

// StorageRegionListMatch is the typed request payload for StorageRegion.ListTyped.
type StorageRegionListMatch struct {
	Label *string `json:"label,omitempty"`
	Slug *string `json:"slug,omitempty"`
}

// Swift is the typed data model for the swift entity.
type Swift struct {
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// SwiftLoadMatch is the typed request payload for Swift.LoadTyped.
type SwiftLoadMatch struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// SwiftListMatch is the typed request payload for Swift.ListTyped.
type SwiftListMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
}

// SwiftCreateData is the typed request payload for Swift.CreateTyped.
type SwiftCreateData struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name string `json:"name"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl string `json:"upstream_url"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// SwiftUpdateData is the typed request payload for Swift.UpdateTyped.
type SwiftUpdateData struct {
	Id string `json:"id"`
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	AuthMode *string `json:"auth_mode,omitempty"`
	AuthSecret *string `json:"auth_secret,omitempty"`
	AuthUsername *string `json:"auth_username,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	DisableReason *string `json:"disable_reason,omitempty"`
	ExtraHeader1 *string `json:"extra_header_1,omitempty"`
	ExtraHeader2 *string `json:"extra_header_2,omitempty"`
	ExtraValue1 *string `json:"extra_value_1,omitempty"`
	ExtraValue2 *string `json:"extra_value_2,omitempty"`
	IsActive *bool `json:"is_active,omitempty"`
	Mode *string `json:"mode,omitempty"`
	Name *string `json:"name,omitempty"`
	PendingValidation *bool `json:"pending_validation,omitempty"`
	Priority *int `json:"priority,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	UpdatedAt *string `json:"updated_at,omitempty"`
	UpstreamUrl *string `json:"upstream_url,omitempty"`
	VerifySsl *bool `json:"verify_ssl,omitempty"`
}

// Sync is the typed data model for the sync entity.
type Sync struct {
}

// Tag is the typed data model for the tag entity.
type Tag struct {
}

// Team is the typed data model for the team entity.
type Team struct {
}

// Terraform is the typed data model for the terraform entity.
type Terraform struct {
}

// Test is the typed data model for the test entity.
type Test struct {
}

// Token is the typed data model for the token entity.
type Token struct {
}

// TransferRegion is the typed data model for the transfer_region entity.
type TransferRegion struct {
}

// User is the typed data model for the user entity.
type User struct {
	Created *string `json:"created,omitempty"`
	Key *string `json:"key,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	Created *string `json:"created,omitempty"`
	Key *string `json:"key,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
}

// UserAuthToken is the typed data model for the user_auth_token entity.
type UserAuthToken struct {
}

// UserAuthTokenCreateData is the typed request payload for UserAuthToken.CreateTyped.
type UserAuthTokenCreateData struct {
}

// UserAuthenticationToken is the typed data model for the user_authentication_token entity.
type UserAuthenticationToken struct {
	Created *string `json:"created,omitempty"`
	Key *string `json:"key,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
}

// UserAuthenticationTokenCreateData is the typed request payload for UserAuthenticationToken.CreateTyped.
type UserAuthenticationTokenCreateData struct {
	Created *string `json:"created,omitempty"`
	Key *string `json:"key,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
}

// UserAuthenticationTokenUpdateData is the typed request payload for UserAuthenticationToken.UpdateTyped.
type UserAuthenticationTokenUpdateData struct {
	SlugPerm any `json:"slug_perm"`
	Created *string `json:"created,omitempty"`
	Key *string `json:"key,omitempty"`
}

// UserBrief is the typed data model for the user_brief entity.
type UserBrief struct {
	Authenticated *bool `json:"authenticated,omitempty"`
	Email *string `json:"email,omitempty"`
	Name *string `json:"name,omitempty"`
	ProfileUrl *string `json:"profile_url,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
}

// UserBriefLoadMatch is the typed request payload for UserBrief.LoadTyped.
type UserBriefLoadMatch struct {
	Authenticated *bool `json:"authenticated,omitempty"`
	Email *string `json:"email,omitempty"`
	Name *string `json:"name,omitempty"`
	ProfileUrl *string `json:"profile_url,omitempty"`
	SelfUrl *string `json:"self_url,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
}

// UserProfile is the typed data model for the user_profile entity.
type UserProfile struct {
	Company *string `json:"company,omitempty"`
	FirstName string `json:"first_name"`
	JobTitle *string `json:"job_title,omitempty"`
	JoinedAt *string `json:"joined_at,omitempty"`
	LastName string `json:"last_name"`
	Name *string `json:"name,omitempty"`
	Slug *string `json:"slug,omitempty"`
	SlugPerm *string `json:"slug_perm,omitempty"`
	Tagline *string `json:"tagline,omitempty"`
	Url *string `json:"url,omitempty"`
}

// UserProfileLoadMatch is the typed request payload for UserProfile.LoadTyped.
type UserProfileLoadMatch struct {
	Id string `json:"id"`
}

// Vagrant is the typed data model for the vagrant entity.
type Vagrant struct {
}

// Validate is the typed data model for the validate entity.
type Validate struct {
}

// Version is the typed data model for the version entity.
type Version struct {
}

// Vulnerability is the typed data model for the vulnerability entity.
type Vulnerability struct {
	CreatedAt *string `json:"created_at,omitempty"`
	HasVulnerabilities *bool `json:"has_vulnerabilities,omitempty"`
	Identifier string `json:"identifier"`
	MaxSeverity *string `json:"max_severity,omitempty"`
	NumVulnerabilities *int `json:"num_vulnerabilities,omitempty"`
	Package map[string]any `json:"package"`
	Results []any `json:"results"`
	ScanId int `json:"scan_id"`
	Target string `json:"target"`
	Type string `json:"type"`
}

// VulnerabilityLoadMatch is the typed request payload for Vulnerability.LoadTyped.
type VulnerabilityLoadMatch struct {
	Id string `json:"id"`
}

// VulnerabilityListMatch is the typed request payload for Vulnerability.ListTyped.
type VulnerabilityListMatch struct {
	Owner any `json:"owner"`
	Package *any `json:"package,omitempty"`
	Repo any `json:"repo"`
	Identifier *any `json:"identifier,omitempty"`
}

// VulnerabilityPolicy is the typed data model for the vulnerability_policy entity.
type VulnerabilityPolicy struct {
}

// Webhook is the typed data model for the webhook entity.
type Webhook struct {
}

// WebhookRemoveMatch is the typed request payload for Webhook.RemoveTyped.
type WebhookRemoveMatch struct {
	Identifier any `json:"identifier"`
	Owner any `json:"owner"`
	Repo any `json:"repo"`
}

// X509Ecdsa is the typed data model for the x509_ecdsa entity.
type X509Ecdsa struct {
}

// X509Rsa is the typed data model for the x509_rsa entity.
type X509Rsa struct {
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
