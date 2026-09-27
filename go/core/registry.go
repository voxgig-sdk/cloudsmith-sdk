package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewDebugFeatureFunc func() Feature

var NewIdempotencyFeatureFunc func() Feature

var NewMetricsFeatureFunc func() Feature

var NewPagingFeatureFunc func() Feature

var NewRatelimitFeatureFunc func() Feature

var NewRetryFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewTimeoutFeatureFunc func() Feature

var NewCargoEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewComposerEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewCondaEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewCranEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewDartEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewDebEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewDistributionFullEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewDockerEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewDynamicMappingEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewEntitlementEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewFileEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewFormatEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewGonEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewHelmEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewHexEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewHuggingfaceEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewMavenEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewNamespaceEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewNamespaceAuditLogEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewNpmEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewNugetEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrgEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationGroupSyncEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationGroupSyncStatusEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationInviteEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationInviteExtendEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationMembershipEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationMembershipRoleUpdateEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationMembershipVisibilityUpdateEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationPackageLicensePolicyEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationPackageVulnerabilityPolicyEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationSamlAuthEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationTeamEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewOrganizationTeamMemberEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewPackageEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewPackageDenyPolicyEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewPackageFilePartsUploadEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewPackageFileUploadEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewPackageLicensePolicyEvaluationEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewPackageVersionBadgeEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewPackageVulnerabilityPolicyEvaluationEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewProviderSettingEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewProviderSettingsWriteEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewPythonEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewQuotaEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepoEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryAuditLogEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryEcdsaKeyEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryGeoIpRuleEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryGeoIpStatusEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryGeoIpTestAddressEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryGpgKeyEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryPrivilegeDictEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryRetentionRuleEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryRsaKeyEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryTokenEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryTokenRefreshEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryTokenSyncEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryWebhookEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryX509EcdsaCertificateEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRepositoryX509RsaCertificateEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewResourcesRateCheckEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRpmEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewRubyEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewServiceEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewStatusBasicEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewStorageRegionEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewSwiftEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewUserEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewUserAuthTokenEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewUserAuthenticationTokenEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewUserBriefEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewUserProfileEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewVulnerabilityEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

var NewWebhookEntityFunc func(client *CloudsmithSDK, entopts map[string]any) CloudsmithEntity

