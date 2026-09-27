package voxgigcloudsmithsdk

import (
	"github.com/voxgig-sdk/cloudsmith-sdk/go/core"
	"github.com/voxgig-sdk/cloudsmith-sdk/go/entity"
	"github.com/voxgig-sdk/cloudsmith-sdk/go/feature"
	_ "github.com/voxgig-sdk/cloudsmith-sdk/go/utility"
)

// Type aliases preserve external API.
type CloudsmithSDK = core.CloudsmithSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type CloudsmithEntity = core.CloudsmithEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type CloudsmithError = core.CloudsmithError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewDebugFeatureFunc = func() core.Feature {
		return feature.NewDebugFeature()
	}
	core.NewIdempotencyFeatureFunc = func() core.Feature {
		return feature.NewIdempotencyFeature()
	}
	core.NewMetricsFeatureFunc = func() core.Feature {
		return feature.NewMetricsFeature()
	}
	core.NewPagingFeatureFunc = func() core.Feature {
		return feature.NewPagingFeature()
	}
	core.NewRatelimitFeatureFunc = func() core.Feature {
		return feature.NewRatelimitFeature()
	}
	core.NewRetryFeatureFunc = func() core.Feature {
		return feature.NewRetryFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewTimeoutFeatureFunc = func() core.Feature {
		return feature.NewTimeoutFeature()
	}
	core.NewCargoEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewCargoEntity(client, entopts)
	}
	core.NewComposerEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewComposerEntity(client, entopts)
	}
	core.NewCondaEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewCondaEntity(client, entopts)
	}
	core.NewCranEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewCranEntity(client, entopts)
	}
	core.NewDartEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDartEntity(client, entopts)
	}
	core.NewDebEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDebEntity(client, entopts)
	}
	core.NewDistributionFullEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDistributionFullEntity(client, entopts)
	}
	core.NewDockerEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDockerEntity(client, entopts)
	}
	core.NewDynamicMappingEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDynamicMappingEntity(client, entopts)
	}
	core.NewEntitlementEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewEntitlementEntity(client, entopts)
	}
	core.NewFileEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewFileEntity(client, entopts)
	}
	core.NewFormatEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewFormatEntity(client, entopts)
	}
	core.NewGonEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGonEntity(client, entopts)
	}
	core.NewHelmEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewHelmEntity(client, entopts)
	}
	core.NewHexEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewHexEntity(client, entopts)
	}
	core.NewHuggingfaceEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewHuggingfaceEntity(client, entopts)
	}
	core.NewMavenEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewMavenEntity(client, entopts)
	}
	core.NewNamespaceEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewNamespaceEntity(client, entopts)
	}
	core.NewNamespaceAuditLogEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewNamespaceAuditLogEntity(client, entopts)
	}
	core.NewNpmEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewNpmEntity(client, entopts)
	}
	core.NewNugetEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewNugetEntity(client, entopts)
	}
	core.NewOrgEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrgEntity(client, entopts)
	}
	core.NewOrganizationGroupSyncEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationGroupSyncEntity(client, entopts)
	}
	core.NewOrganizationGroupSyncStatusEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationGroupSyncStatusEntity(client, entopts)
	}
	core.NewOrganizationInviteEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationInviteEntity(client, entopts)
	}
	core.NewOrganizationInviteExtendEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationInviteExtendEntity(client, entopts)
	}
	core.NewOrganizationMembershipEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationMembershipEntity(client, entopts)
	}
	core.NewOrganizationMembershipRoleUpdateEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationMembershipRoleUpdateEntity(client, entopts)
	}
	core.NewOrganizationMembershipVisibilityUpdateEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationMembershipVisibilityUpdateEntity(client, entopts)
	}
	core.NewOrganizationPackageLicensePolicyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationPackageLicensePolicyEntity(client, entopts)
	}
	core.NewOrganizationPackageVulnerabilityPolicyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationPackageVulnerabilityPolicyEntity(client, entopts)
	}
	core.NewOrganizationSamlAuthEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationSamlAuthEntity(client, entopts)
	}
	core.NewOrganizationTeamEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationTeamEntity(client, entopts)
	}
	core.NewOrganizationTeamMemberEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOrganizationTeamMemberEntity(client, entopts)
	}
	core.NewPackageEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewPackageEntity(client, entopts)
	}
	core.NewPackageDenyPolicyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewPackageDenyPolicyEntity(client, entopts)
	}
	core.NewPackageFilePartsUploadEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewPackageFilePartsUploadEntity(client, entopts)
	}
	core.NewPackageFileUploadEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewPackageFileUploadEntity(client, entopts)
	}
	core.NewPackageLicensePolicyEvaluationEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewPackageLicensePolicyEvaluationEntity(client, entopts)
	}
	core.NewPackageVersionBadgeEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewPackageVersionBadgeEntity(client, entopts)
	}
	core.NewPackageVulnerabilityPolicyEvaluationEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewPackageVulnerabilityPolicyEvaluationEntity(client, entopts)
	}
	core.NewProviderSettingEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewProviderSettingEntity(client, entopts)
	}
	core.NewProviderSettingsWriteEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewProviderSettingsWriteEntity(client, entopts)
	}
	core.NewPythonEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewPythonEntity(client, entopts)
	}
	core.NewQuotaEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewQuotaEntity(client, entopts)
	}
	core.NewRepoEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepoEntity(client, entopts)
	}
	core.NewRepositoryAuditLogEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryAuditLogEntity(client, entopts)
	}
	core.NewRepositoryEcdsaKeyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryEcdsaKeyEntity(client, entopts)
	}
	core.NewRepositoryGeoIpRuleEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryGeoIpRuleEntity(client, entopts)
	}
	core.NewRepositoryGeoIpStatusEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryGeoIpStatusEntity(client, entopts)
	}
	core.NewRepositoryGeoIpTestAddressEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryGeoIpTestAddressEntity(client, entopts)
	}
	core.NewRepositoryGpgKeyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryGpgKeyEntity(client, entopts)
	}
	core.NewRepositoryPrivilegeDictEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryPrivilegeDictEntity(client, entopts)
	}
	core.NewRepositoryRetentionRuleEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryRetentionRuleEntity(client, entopts)
	}
	core.NewRepositoryRsaKeyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryRsaKeyEntity(client, entopts)
	}
	core.NewRepositoryTokenEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryTokenEntity(client, entopts)
	}
	core.NewRepositoryTokenRefreshEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryTokenRefreshEntity(client, entopts)
	}
	core.NewRepositoryTokenSyncEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryTokenSyncEntity(client, entopts)
	}
	core.NewRepositoryWebhookEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryWebhookEntity(client, entopts)
	}
	core.NewRepositoryX509EcdsaCertificateEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryX509EcdsaCertificateEntity(client, entopts)
	}
	core.NewRepositoryX509RsaCertificateEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryX509RsaCertificateEntity(client, entopts)
	}
	core.NewResourcesRateCheckEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewResourcesRateCheckEntity(client, entopts)
	}
	core.NewRpmEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRpmEntity(client, entopts)
	}
	core.NewRubyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRubyEntity(client, entopts)
	}
	core.NewServiceEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewServiceEntity(client, entopts)
	}
	core.NewStatusBasicEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewStatusBasicEntity(client, entopts)
	}
	core.NewStorageRegionEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewStorageRegionEntity(client, entopts)
	}
	core.NewSwiftEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewSwiftEntity(client, entopts)
	}
	core.NewUserEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewUserEntity(client, entopts)
	}
	core.NewUserAuthTokenEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewUserAuthTokenEntity(client, entopts)
	}
	core.NewUserAuthenticationTokenEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewUserAuthenticationTokenEntity(client, entopts)
	}
	core.NewUserBriefEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewUserBriefEntity(client, entopts)
	}
	core.NewUserProfileEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewUserProfileEntity(client, entopts)
	}
	core.NewVulnerabilityEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewVulnerabilityEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewCloudsmithSDK = core.NewCloudsmithSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var SharedConfig = core.SharedConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudsmithSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudsmithSDK  { return NewCloudsmithSDK(nil) }
func Test() *CloudsmithSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewDebugFeature = feature.NewDebugFeature
var NewIdempotencyFeature = feature.NewIdempotencyFeature
var NewMetricsFeature = feature.NewMetricsFeature
var NewPagingFeature = feature.NewPagingFeature
var NewRatelimitFeature = feature.NewRatelimitFeature
var NewRetryFeature = feature.NewRetryFeature
var NewTestFeature = feature.NewTestFeature
var NewTimeoutFeature = feature.NewTimeoutFeature
