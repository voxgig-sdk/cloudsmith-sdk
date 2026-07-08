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
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewAbortEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewAbortEntity(client, entopts)
	}
	core.NewAlpineEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewAlpineEntity(client, entopts)
	}
	core.NewAuditLogEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewAuditLogEntity(client, entopts)
	}
	core.NewBasicEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewBasicEntity(client, entopts)
	}
	core.NewCargoEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewCargoEntity(client, entopts)
	}
	core.NewCocoapodEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewCocoapodEntity(client, entopts)
	}
	core.NewCompleteEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewCompleteEntity(client, entopts)
	}
	core.NewComposerEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewComposerEntity(client, entopts)
	}
	core.NewConanEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewConanEntity(client, entopts)
	}
	core.NewCondaEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewCondaEntity(client, entopts)
	}
	core.NewCopyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewCopyEntity(client, entopts)
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
	core.NewDenyPolicyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDenyPolicyEntity(client, entopts)
	}
	core.NewDependencyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDependencyEntity(client, entopts)
	}
	core.NewDisableEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDisableEntity(client, entopts)
	}
	core.NewDistributionFullEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDistributionFullEntity(client, entopts)
	}
	core.NewDistroEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDistroEntity(client, entopts)
	}
	core.NewDockerEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDockerEntity(client, entopts)
	}
	core.NewDynamicMappingEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewDynamicMappingEntity(client, entopts)
	}
	core.NewEcdsaEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewEcdsaEntity(client, entopts)
	}
	core.NewEnableEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewEnableEntity(client, entopts)
	}
	core.NewEntitlementEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewEntitlementEntity(client, entopts)
	}
	core.NewEvaluationEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewEvaluationEntity(client, entopts)
	}
	core.NewFileEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewFileEntity(client, entopts)
	}
	core.NewFormatEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewFormatEntity(client, entopts)
	}
	core.NewGeoipEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGeoipEntity(client, entopts)
	}
	core.NewGonEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGonEntity(client, entopts)
	}
	core.NewGon2EntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGon2Entity(client, entopts)
	}
	core.NewGon3EntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGon3Entity(client, entopts)
	}
	core.NewGon4EntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGon4Entity(client, entopts)
	}
	core.NewGon5EntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGon5Entity(client, entopts)
	}
	core.NewGon6EntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGon6Entity(client, entopts)
	}
	core.NewGon7EntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGon7Entity(client, entopts)
	}
	core.NewGon8EntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGon8Entity(client, entopts)
	}
	core.NewGon9EntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGon9Entity(client, entopts)
	}
	core.NewGpgEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGpgEntity(client, entopts)
	}
	core.NewGroupEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewGroupEntity(client, entopts)
	}
	core.NewHelmEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewHelmEntity(client, entopts)
	}
	core.NewHexEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewHexEntity(client, entopts)
	}
	core.NewHistoryEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewHistoryEntity(client, entopts)
	}
	core.NewHuggingfaceEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewHuggingfaceEntity(client, entopts)
	}
	core.NewInfoEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewInfoEntity(client, entopts)
	}
	core.NewInviteEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewInviteEntity(client, entopts)
	}
	core.NewLicensePolicyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewLicensePolicyEntity(client, entopts)
	}
	core.NewLimitEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewLimitEntity(client, entopts)
	}
	core.NewLuarockEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewLuarockEntity(client, entopts)
	}
	core.NewMavenEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewMavenEntity(client, entopts)
	}
	core.NewMemberEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewMemberEntity(client, entopts)
	}
	core.NewMoveEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewMoveEntity(client, entopts)
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
	core.NewOpenidConnectEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOpenidConnectEntity(client, entopts)
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
	core.NewOssEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewOssEntity(client, entopts)
	}
	core.NewP2nEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewP2nEntity(client, entopts)
	}
	core.NewP2n2EntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewP2n2Entity(client, entopts)
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
	core.NewPrivilegeEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewPrivilegeEntity(client, entopts)
	}
	core.NewProfileEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewProfileEntity(client, entopts)
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
	core.NewQuarantineEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewQuarantineEntity(client, entopts)
	}
	core.NewQuotaEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewQuotaEntity(client, entopts)
	}
	core.NewRawEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRawEntity(client, entopts)
	}
	core.NewRefreshEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRefreshEntity(client, entopts)
	}
	core.NewRegenerateEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRegenerateEntity(client, entopts)
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
	core.NewRepositoryPrivilegeInputEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRepositoryPrivilegeInputEntity(client, entopts)
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
	core.NewResetEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewResetEntity(client, entopts)
	}
	core.NewResourcesRateCheckEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewResourcesRateCheckEntity(client, entopts)
	}
	core.NewResyncEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewResyncEntity(client, entopts)
	}
	core.NewRetentionEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRetentionEntity(client, entopts)
	}
	core.NewRpmEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRpmEntity(client, entopts)
	}
	core.NewRsaEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRsaEntity(client, entopts)
	}
	core.NewRubyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewRubyEntity(client, entopts)
	}
	core.NewSamlGroupSyncEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewSamlGroupSyncEntity(client, entopts)
	}
	core.NewScanEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewScanEntity(client, entopts)
	}
	core.NewSelfEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewSelfEntity(client, entopts)
	}
	core.NewServiceEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewServiceEntity(client, entopts)
	}
	core.NewStatusEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewStatusEntity(client, entopts)
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
	core.NewSyncEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewSyncEntity(client, entopts)
	}
	core.NewTagEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewTagEntity(client, entopts)
	}
	core.NewTeamEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewTeamEntity(client, entopts)
	}
	core.NewTerraformEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewTerraformEntity(client, entopts)
	}
	core.NewTestEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewTestEntity(client, entopts)
	}
	core.NewTokenEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewTokenEntity(client, entopts)
	}
	core.NewTransferRegionEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewTransferRegionEntity(client, entopts)
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
	core.NewVagrantEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewVagrantEntity(client, entopts)
	}
	core.NewValidateEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewValidateEntity(client, entopts)
	}
	core.NewVersionEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewVersionEntity(client, entopts)
	}
	core.NewVulnerabilityEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewVulnerabilityEntity(client, entopts)
	}
	core.NewVulnerabilityPolicyEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewVulnerabilityPolicyEntity(client, entopts)
	}
	core.NewWebhookEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewWebhookEntity(client, entopts)
	}
	core.NewX509EcdsaEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewX509EcdsaEntity(client, entopts)
	}
	core.NewX509RsaEntityFunc = func(client *core.CloudsmithSDK, entopts map[string]any) core.CloudsmithEntity {
		return entity.NewX509RsaEntity(client, entopts)
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

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewCloudsmithSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *CloudsmithSDK  { return NewCloudsmithSDK(nil) }
func Test() *CloudsmithSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
