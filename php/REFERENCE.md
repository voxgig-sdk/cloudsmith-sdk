# Cloudsmith PHP SDK Reference

Complete API reference for the Cloudsmith PHP SDK.


## CloudsmithSDK

### Constructor

```php
require_once __DIR__ . '/cloudsmith_sdk.php';

$client = new CloudsmithSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudsmithSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CloudsmithSDK::test();
```


### Instance Methods

#### `Abort($data = null)`

Create a new `AbortEntity` instance. Pass `null` for no initial data.

#### `Alpine($data = null)`

Create a new `AlpineEntity` instance. Pass `null` for no initial data.

#### `AuditLog($data = null)`

Create a new `AuditLogEntity` instance. Pass `null` for no initial data.

#### `Basic($data = null)`

Create a new `BasicEntity` instance. Pass `null` for no initial data.

#### `Cargo($data = null)`

Create a new `CargoEntity` instance. Pass `null` for no initial data.

#### `Cocoapod($data = null)`

Create a new `CocoapodEntity` instance. Pass `null` for no initial data.

#### `Complete($data = null)`

Create a new `CompleteEntity` instance. Pass `null` for no initial data.

#### `Composer($data = null)`

Create a new `ComposerEntity` instance. Pass `null` for no initial data.

#### `Conan($data = null)`

Create a new `ConanEntity` instance. Pass `null` for no initial data.

#### `Conda($data = null)`

Create a new `CondaEntity` instance. Pass `null` for no initial data.

#### `Copy($data = null)`

Create a new `CopyEntity` instance. Pass `null` for no initial data.

#### `Cran($data = null)`

Create a new `CranEntity` instance. Pass `null` for no initial data.

#### `Dart($data = null)`

Create a new `DartEntity` instance. Pass `null` for no initial data.

#### `Deb($data = null)`

Create a new `DebEntity` instance. Pass `null` for no initial data.

#### `DenyPolicy($data = null)`

Create a new `DenyPolicyEntity` instance. Pass `null` for no initial data.

#### `Dependency($data = null)`

Create a new `DependencyEntity` instance. Pass `null` for no initial data.

#### `Disable($data = null)`

Create a new `DisableEntity` instance. Pass `null` for no initial data.

#### `DistributionFull($data = null)`

Create a new `DistributionFullEntity` instance. Pass `null` for no initial data.

#### `Distro($data = null)`

Create a new `DistroEntity` instance. Pass `null` for no initial data.

#### `Docker($data = null)`

Create a new `DockerEntity` instance. Pass `null` for no initial data.

#### `DynamicMapping($data = null)`

Create a new `DynamicMappingEntity` instance. Pass `null` for no initial data.

#### `Ecdsa($data = null)`

Create a new `EcdsaEntity` instance. Pass `null` for no initial data.

#### `Enable($data = null)`

Create a new `EnableEntity` instance. Pass `null` for no initial data.

#### `Entitlement($data = null)`

Create a new `EntitlementEntity` instance. Pass `null` for no initial data.

#### `Evaluation($data = null)`

Create a new `EvaluationEntity` instance. Pass `null` for no initial data.

#### `File($data = null)`

Create a new `FileEntity` instance. Pass `null` for no initial data.

#### `Format($data = null)`

Create a new `FormatEntity` instance. Pass `null` for no initial data.

#### `Geoip($data = null)`

Create a new `GeoipEntity` instance. Pass `null` for no initial data.

#### `Gon($data = null)`

Create a new `GonEntity` instance. Pass `null` for no initial data.

#### `Gon2($data = null)`

Create a new `Gon2Entity` instance. Pass `null` for no initial data.

#### `Gon3($data = null)`

Create a new `Gon3Entity` instance. Pass `null` for no initial data.

#### `Gon4($data = null)`

Create a new `Gon4Entity` instance. Pass `null` for no initial data.

#### `Gon5($data = null)`

Create a new `Gon5Entity` instance. Pass `null` for no initial data.

#### `Gon6($data = null)`

Create a new `Gon6Entity` instance. Pass `null` for no initial data.

#### `Gon7($data = null)`

Create a new `Gon7Entity` instance. Pass `null` for no initial data.

#### `Gon8($data = null)`

Create a new `Gon8Entity` instance. Pass `null` for no initial data.

#### `Gon9($data = null)`

Create a new `Gon9Entity` instance. Pass `null` for no initial data.

#### `Gpg($data = null)`

Create a new `GpgEntity` instance. Pass `null` for no initial data.

#### `Group($data = null)`

Create a new `GroupEntity` instance. Pass `null` for no initial data.

#### `Helm($data = null)`

Create a new `HelmEntity` instance. Pass `null` for no initial data.

#### `Hex($data = null)`

Create a new `HexEntity` instance. Pass `null` for no initial data.

#### `History($data = null)`

Create a new `HistoryEntity` instance. Pass `null` for no initial data.

#### `Huggingface($data = null)`

Create a new `HuggingfaceEntity` instance. Pass `null` for no initial data.

#### `Info($data = null)`

Create a new `InfoEntity` instance. Pass `null` for no initial data.

#### `Invite($data = null)`

Create a new `InviteEntity` instance. Pass `null` for no initial data.

#### `LicensePolicy($data = null)`

Create a new `LicensePolicyEntity` instance. Pass `null` for no initial data.

#### `Limit($data = null)`

Create a new `LimitEntity` instance. Pass `null` for no initial data.

#### `Luarock($data = null)`

Create a new `LuarockEntity` instance. Pass `null` for no initial data.

#### `Maven($data = null)`

Create a new `MavenEntity` instance. Pass `null` for no initial data.

#### `Member($data = null)`

Create a new `MemberEntity` instance. Pass `null` for no initial data.

#### `Move($data = null)`

Create a new `MoveEntity` instance. Pass `null` for no initial data.

#### `Namespace($data = null)`

Create a new `NamespaceEntity` instance. Pass `null` for no initial data.

#### `NamespaceAuditLog($data = null)`

Create a new `NamespaceAuditLogEntity` instance. Pass `null` for no initial data.

#### `Npm($data = null)`

Create a new `NpmEntity` instance. Pass `null` for no initial data.

#### `Nuget($data = null)`

Create a new `NugetEntity` instance. Pass `null` for no initial data.

#### `OpenidConnect($data = null)`

Create a new `OpenidConnectEntity` instance. Pass `null` for no initial data.

#### `Org($data = null)`

Create a new `OrgEntity` instance. Pass `null` for no initial data.

#### `OrganizationGroupSync($data = null)`

Create a new `OrganizationGroupSyncEntity` instance. Pass `null` for no initial data.

#### `OrganizationGroupSyncStatus($data = null)`

Create a new `OrganizationGroupSyncStatusEntity` instance. Pass `null` for no initial data.

#### `OrganizationInvite($data = null)`

Create a new `OrganizationInviteEntity` instance. Pass `null` for no initial data.

#### `OrganizationInviteExtend($data = null)`

Create a new `OrganizationInviteExtendEntity` instance. Pass `null` for no initial data.

#### `OrganizationMembership($data = null)`

Create a new `OrganizationMembershipEntity` instance. Pass `null` for no initial data.

#### `OrganizationMembershipRoleUpdate($data = null)`

Create a new `OrganizationMembershipRoleUpdateEntity` instance. Pass `null` for no initial data.

#### `OrganizationMembershipVisibilityUpdate($data = null)`

Create a new `OrganizationMembershipVisibilityUpdateEntity` instance. Pass `null` for no initial data.

#### `OrganizationPackageLicensePolicy($data = null)`

Create a new `OrganizationPackageLicensePolicyEntity` instance. Pass `null` for no initial data.

#### `OrganizationPackageVulnerabilityPolicy($data = null)`

Create a new `OrganizationPackageVulnerabilityPolicyEntity` instance. Pass `null` for no initial data.

#### `OrganizationSamlAuth($data = null)`

Create a new `OrganizationSamlAuthEntity` instance. Pass `null` for no initial data.

#### `OrganizationTeam($data = null)`

Create a new `OrganizationTeamEntity` instance. Pass `null` for no initial data.

#### `OrganizationTeamMember($data = null)`

Create a new `OrganizationTeamMemberEntity` instance. Pass `null` for no initial data.

#### `Oss($data = null)`

Create a new `OssEntity` instance. Pass `null` for no initial data.

#### `P2n($data = null)`

Create a new `P2nEntity` instance. Pass `null` for no initial data.

#### `P2n2($data = null)`

Create a new `P2n2Entity` instance. Pass `null` for no initial data.

#### `Package($data = null)`

Create a new `PackageEntity` instance. Pass `null` for no initial data.

#### `PackageDenyPolicy($data = null)`

Create a new `PackageDenyPolicyEntity` instance. Pass `null` for no initial data.

#### `PackageFilePartsUpload($data = null)`

Create a new `PackageFilePartsUploadEntity` instance. Pass `null` for no initial data.

#### `PackageFileUpload($data = null)`

Create a new `PackageFileUploadEntity` instance. Pass `null` for no initial data.

#### `PackageLicensePolicyEvaluation($data = null)`

Create a new `PackageLicensePolicyEvaluationEntity` instance. Pass `null` for no initial data.

#### `PackageVersionBadge($data = null)`

Create a new `PackageVersionBadgeEntity` instance. Pass `null` for no initial data.

#### `PackageVulnerabilityPolicyEvaluation($data = null)`

Create a new `PackageVulnerabilityPolicyEvaluationEntity` instance. Pass `null` for no initial data.

#### `Privilege($data = null)`

Create a new `PrivilegeEntity` instance. Pass `null` for no initial data.

#### `Profile($data = null)`

Create a new `ProfileEntity` instance. Pass `null` for no initial data.

#### `ProviderSetting($data = null)`

Create a new `ProviderSettingEntity` instance. Pass `null` for no initial data.

#### `ProviderSettingsWrite($data = null)`

Create a new `ProviderSettingsWriteEntity` instance. Pass `null` for no initial data.

#### `Python($data = null)`

Create a new `PythonEntity` instance. Pass `null` for no initial data.

#### `Quarantine($data = null)`

Create a new `QuarantineEntity` instance. Pass `null` for no initial data.

#### `Quota($data = null)`

Create a new `QuotaEntity` instance. Pass `null` for no initial data.

#### `Raw($data = null)`

Create a new `RawEntity` instance. Pass `null` for no initial data.

#### `Refresh($data = null)`

Create a new `RefreshEntity` instance. Pass `null` for no initial data.

#### `Regenerate($data = null)`

Create a new `RegenerateEntity` instance. Pass `null` for no initial data.

#### `Repo($data = null)`

Create a new `RepoEntity` instance. Pass `null` for no initial data.

#### `RepositoryAuditLog($data = null)`

Create a new `RepositoryAuditLogEntity` instance. Pass `null` for no initial data.

#### `RepositoryEcdsaKey($data = null)`

Create a new `RepositoryEcdsaKeyEntity` instance. Pass `null` for no initial data.

#### `RepositoryGeoIpRule($data = null)`

Create a new `RepositoryGeoIpRuleEntity` instance. Pass `null` for no initial data.

#### `RepositoryGeoIpStatus($data = null)`

Create a new `RepositoryGeoIpStatusEntity` instance. Pass `null` for no initial data.

#### `RepositoryGeoIpTestAddress($data = null)`

Create a new `RepositoryGeoIpTestAddressEntity` instance. Pass `null` for no initial data.

#### `RepositoryGpgKey($data = null)`

Create a new `RepositoryGpgKeyEntity` instance. Pass `null` for no initial data.

#### `RepositoryPrivilegeInput($data = null)`

Create a new `RepositoryPrivilegeInputEntity` instance. Pass `null` for no initial data.

#### `RepositoryRetentionRule($data = null)`

Create a new `RepositoryRetentionRuleEntity` instance. Pass `null` for no initial data.

#### `RepositoryRsaKey($data = null)`

Create a new `RepositoryRsaKeyEntity` instance. Pass `null` for no initial data.

#### `RepositoryToken($data = null)`

Create a new `RepositoryTokenEntity` instance. Pass `null` for no initial data.

#### `RepositoryTokenRefresh($data = null)`

Create a new `RepositoryTokenRefreshEntity` instance. Pass `null` for no initial data.

#### `RepositoryTokenSync($data = null)`

Create a new `RepositoryTokenSyncEntity` instance. Pass `null` for no initial data.

#### `RepositoryWebhook($data = null)`

Create a new `RepositoryWebhookEntity` instance. Pass `null` for no initial data.

#### `RepositoryX509EcdsaCertificate($data = null)`

Create a new `RepositoryX509EcdsaCertificateEntity` instance. Pass `null` for no initial data.

#### `RepositoryX509RsaCertificate($data = null)`

Create a new `RepositoryX509RsaCertificateEntity` instance. Pass `null` for no initial data.

#### `Reset($data = null)`

Create a new `ResetEntity` instance. Pass `null` for no initial data.

#### `ResourcesRateCheck($data = null)`

Create a new `ResourcesRateCheckEntity` instance. Pass `null` for no initial data.

#### `Resync($data = null)`

Create a new `ResyncEntity` instance. Pass `null` for no initial data.

#### `Retention($data = null)`

Create a new `RetentionEntity` instance. Pass `null` for no initial data.

#### `Rpm($data = null)`

Create a new `RpmEntity` instance. Pass `null` for no initial data.

#### `Rsa($data = null)`

Create a new `RsaEntity` instance. Pass `null` for no initial data.

#### `Ruby($data = null)`

Create a new `RubyEntity` instance. Pass `null` for no initial data.

#### `SamlGroupSync($data = null)`

Create a new `SamlGroupSyncEntity` instance. Pass `null` for no initial data.

#### `Scan($data = null)`

Create a new `ScanEntity` instance. Pass `null` for no initial data.

#### `Self($data = null)`

Create a new `SelfEntity` instance. Pass `null` for no initial data.

#### `Service($data = null)`

Create a new `ServiceEntity` instance. Pass `null` for no initial data.

#### `Status($data = null)`

Create a new `StatusEntity` instance. Pass `null` for no initial data.

#### `StatusBasic($data = null)`

Create a new `StatusBasicEntity` instance. Pass `null` for no initial data.

#### `StorageRegion($data = null)`

Create a new `StorageRegionEntity` instance. Pass `null` for no initial data.

#### `Swift($data = null)`

Create a new `SwiftEntity` instance. Pass `null` for no initial data.

#### `Sync($data = null)`

Create a new `SyncEntity` instance. Pass `null` for no initial data.

#### `Tag($data = null)`

Create a new `TagEntity` instance. Pass `null` for no initial data.

#### `Team($data = null)`

Create a new `TeamEntity` instance. Pass `null` for no initial data.

#### `Terraform($data = null)`

Create a new `TerraformEntity` instance. Pass `null` for no initial data.

#### `Test($data = null)`

Create a new `TestEntity` instance. Pass `null` for no initial data.

#### `Token($data = null)`

Create a new `TokenEntity` instance. Pass `null` for no initial data.

#### `TransferRegion($data = null)`

Create a new `TransferRegionEntity` instance. Pass `null` for no initial data.

#### `User($data = null)`

Create a new `UserEntity` instance. Pass `null` for no initial data.

#### `UserAuthToken($data = null)`

Create a new `UserAuthTokenEntity` instance. Pass `null` for no initial data.

#### `UserAuthenticationToken($data = null)`

Create a new `UserAuthenticationTokenEntity` instance. Pass `null` for no initial data.

#### `UserBrief($data = null)`

Create a new `UserBriefEntity` instance. Pass `null` for no initial data.

#### `UserProfile($data = null)`

Create a new `UserProfileEntity` instance. Pass `null` for no initial data.

#### `Vagrant($data = null)`

Create a new `VagrantEntity` instance. Pass `null` for no initial data.

#### `Validate($data = null)`

Create a new `ValidateEntity` instance. Pass `null` for no initial data.

#### `Version($data = null)`

Create a new `VersionEntity` instance. Pass `null` for no initial data.

#### `Vulnerability($data = null)`

Create a new `VulnerabilityEntity` instance. Pass `null` for no initial data.

#### `VulnerabilityPolicy($data = null)`

Create a new `VulnerabilityPolicyEntity` instance. Pass `null` for no initial data.

#### `Webhook($data = null)`

Create a new `WebhookEntity` instance. Pass `null` for no initial data.

#### `X509Ecdsa($data = null)`

Create a new `X509EcdsaEntity` instance. Pass `null` for no initial data.

#### `X509Rsa($data = null)`

Create a new `X509RsaEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CloudsmithUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## AbortEntity

```php
$abort = $client->Abort();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AbortEntity`

Create a new `AbortEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AlpineEntity

```php
$alpine = $client->Alpine();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AlpineEntity`

Create a new `AlpineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## AuditLogEntity

```php
$audit_log = $client->AuditLog();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): AuditLogEntity`

Create a new `AuditLogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## BasicEntity

```php
$basic = $client->Basic();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): BasicEntity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CargoEntity

```php
$cargo = $client->Cargo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Cargo()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Cargo()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Cargo()->load(["id" => "cargo_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Cargo()->update([
  "id" => "cargo_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CargoEntity`

Create a new `CargoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CocoapodEntity

```php
$cocoapod = $client->Cocoapod();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CocoapodEntity`

Create a new `CocoapodEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CompleteEntity

```php
$complete = $client->Complete();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CompleteEntity`

Create a new `CompleteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ComposerEntity

```php
$composer = $client->Composer();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Composer()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Composer()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Composer()->load(["id" => "composer_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Composer()->update([
  "id" => "composer_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ComposerEntity`

Create a new `ComposerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ConanEntity

```php
$conan = $client->Conan();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ConanEntity`

Create a new `ConanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CondaEntity

```php
$conda = $client->Conda();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Conda()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Conda()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Conda()->load(["id" => "conda_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Conda()->update([
  "id" => "conda_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CondaEntity`

Create a new `CondaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CopyEntity

```php
$copy = $client->Copy();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CopyEntity`

Create a new `CopyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## CranEntity

```php
$cran = $client->Cran();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Cran()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Cran()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Cran()->load(["id" => "cran_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Cran()->update([
  "id" => "cran_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): CranEntity`

Create a new `CranEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DartEntity

```php
$dart = $client->Dart();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Dart()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Dart()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Dart()->load(["id" => "dart_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Dart()->update([
  "id" => "dart_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DartEntity`

Create a new `DartEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DebEntity

```php
$deb = $client->Deb();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `component` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `distro_version` | `array` | Yes |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `gpg_key_inline` | `string` | No |  |
| `gpg_key_url` | `string` | No |  |
| `gpg_verification` | `string` | No |  |
| `include_source` | `bool` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_distribution` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verification_status` | `string` | No |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Deb()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Deb()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Deb()->load(["id" => "deb_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Deb()->update([
  "id" => "deb_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DebEntity`

Create a new `DebEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DenyPolicyEntity

```php
$deny_policy = $client->DenyPolicy();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DenyPolicyEntity`

Create a new `DenyPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DependencyEntity

```php
$dependency = $client->Dependency();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DependencyEntity`

Create a new `DependencyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DisableEntity

```php
$disable = $client->Disable();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DisableEntity`

Create a new `DisableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DistributionFullEntity

```php
$distribution_full = $client->DistributionFull();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `string` | No |  |
| `format_url` | `string` | No |  |
| `name` | `string` | Yes |  |
| `self_url` | `string` | No |  |
| `slug` | `string` | No |  |
| `variant` | `string` | No |  |
| `version` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DistributionFull()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DistributionFull()->load(["slug" => "slug"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DistributionFullEntity`

Create a new `DistributionFullEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DistroEntity

```php
$distro = $client->Distro();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DistroEntity`

Create a new `DistroEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DockerEntity

```php
$docker = $client->Docker();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Docker()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Docker()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Docker()->load(["id" => "docker_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Docker()->update([
  "id" => "docker_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DockerEntity`

Create a new `DockerEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## DynamicMappingEntity

```php
$dynamic_mapping = $client->DynamicMapping();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim_value` | `string` | Yes |  |
| `service_account` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->DynamicMapping()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->DynamicMapping()->load(["id" => "dynamic_mapping_id", "openid_connect_id" => "openid_connect_id", "org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): DynamicMappingEntity`

Create a new `DynamicMappingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EcdsaEntity

```php
$ecdsa = $client->Ecdsa();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EcdsaEntity`

Create a new `EcdsaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EnableEntity

```php
$enable = $client->Enable();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EnableEntity`

Create a new `EnableEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EntitlementEntity

```php
$entitlement = $client->Entitlement();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Entitlement()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
  "repo" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Entitlement()->load(["id" => "entitlement_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Entitlement()->remove(["identifier" => "identifier", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EntitlementEntity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## EvaluationEntity

```php
$evaluation = $client->Evaluation();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): EvaluationEntity`

Create a new `EvaluationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FileEntity

```php
$file = $client->File();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->File()->create([
  "owner" => null, // mixed
  "repo" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FileEntity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## FormatEntity

```php
$format = $client->Format();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `distribution` | `array` | No |  |
| `extension` | `array` | Yes |  |
| `name` | `string` | Yes |  |
| `premium` | `bool` | Yes |  |
| `premium_plan_id` | `string` | No |  |
| `premium_plan_name` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `support` | `array` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Format()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Format()->load(["id" => "format_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): FormatEntity`

Create a new `FormatEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GeoipEntity

```php
$geoip = $client->Geoip();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GeoipEntity`

Create a new `GeoipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GonEntity

```php
$gon = $client->Gon();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GonEntity`

Create a new `GonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Gon2Entity

```php
$gon2 = $client->Gon2();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Gon2Entity`

Create a new `Gon2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Gon3Entity

```php
$gon3 = $client->Gon3();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Gon3()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Gon3Entity`

Create a new `Gon3Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Gon4Entity

```php
$gon4 = $client->Gon4();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Gon4Entity`

Create a new `Gon4Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Gon5Entity

```php
$gon5 = $client->Gon5();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Gon5()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Gon5Entity`

Create a new `Gon5Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Gon6Entity

```php
$gon6 = $client->Gon6();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Gon6()->load(["identifier" => "identifier", "owner" => "owner", "slug_perm" => "slug_perm"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Gon6Entity`

Create a new `Gon6Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Gon7Entity

```php
$gon7 = $client->Gon7();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Gon7Entity`

Create a new `Gon7Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Gon8Entity

```php
$gon8 = $client->Gon8();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Gon8()->update([
  "identifier" => "identifier",
  "owner" => "owner",
  "slug_perm" => "slug_perm",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Gon8Entity`

Create a new `Gon8Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Gon9Entity

```php
$gon9 = $client->Gon9();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Gon9()->update([
  "identifier" => "identifier",
  "owner" => "owner",
  "slug_perm" => "slug_perm",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): Gon9Entity`

Create a new `Gon9Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GpgEntity

```php
$gpg = $client->Gpg();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GpgEntity`

Create a new `GpgEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## GroupEntity

```php
$group = $client->Group();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GroupEntity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HelmEntity

```php
$helm = $client->Helm();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Helm()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Helm()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Helm()->load(["id" => "helm_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Helm()->update([
  "id" => "helm_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HelmEntity`

Create a new `HelmEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HexEntity

```php
$hex = $client->Hex();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Hex()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Hex()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Hex()->load(["id" => "hex_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Hex()->update([
  "id" => "hex_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HexEntity`

Create a new `HexEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HistoryEntity

```php
$history = $client->History();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HistoryEntity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## HuggingfaceEntity

```php
$huggingface = $client->Huggingface();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Huggingface()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Huggingface()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Huggingface()->load(["id" => "huggingface_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Huggingface()->update([
  "id" => "huggingface_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): HuggingfaceEntity`

Create a new `HuggingfaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InfoEntity

```php
$info = $client->Info();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InfoEntity`

Create a new `InfoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## InviteEntity

```php
$invite = $client->Invite();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): InviteEntity`

Create a new `InviteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LicensePolicyEntity

```php
$license_policy = $client->LicensePolicy();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LicensePolicyEntity`

Create a new `LicensePolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LimitEntity

```php
$limit = $client->Limit();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LimitEntity`

Create a new `LimitEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## LuarockEntity

```php
$luarock = $client->Luarock();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): LuarockEntity`

Create a new `LuarockEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MavenEntity

```php
$maven = $client->Maven();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `gpg_key_inline` | `string` | No |  |
| `gpg_key_url` | `string` | No |  |
| `gpg_verification` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verification_status` | `string` | No |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Maven()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Maven()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Maven()->load(["id" => "maven_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Maven()->update([
  "id" => "maven_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MavenEntity`

Create a new `MavenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MemberEntity

```php
$member = $client->Member();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MemberEntity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## MoveEntity

```php
$move = $client->Move();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): MoveEntity`

Create a new `MoveEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NamespaceEntity

```php
$namespace = $client->Namespace();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `type_name` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Namespace()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Namespace()->load(["id" => "namespace_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NamespaceEntity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NamespaceAuditLogEntity

```php
$namespace_audit_log = $client->NamespaceAuditLog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `string` | Yes |  |
| `actor_ip_address` | `string` | Yes |  |
| `actor_kind` | `string` | No |  |
| `actor_location` | `array` | Yes |  |
| `actor_slug_perm` | `string` | Yes |  |
| `actor_url` | `string` | No |  |
| `context` | `string` | Yes |  |
| `event` | `string` | Yes |  |
| `event_at` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `object_kind` | `string` | Yes |  |
| `object_slug_perm` | `string` | Yes |  |
| `target` | `string` | Yes |  |
| `target_kind` | `string` | Yes |  |
| `target_slug_perm` | `string` | No |  |
| `uuid` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->NamespaceAuditLog()->load(["id" => "namespace_audit_log_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NamespaceAuditLogEntity`

Create a new `NamespaceAuditLogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NpmEntity

```php
$npm = $client->Npm();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Npm()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Npm()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Npm()->load(["id" => "npm_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Npm()->update([
  "id" => "npm_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NpmEntity`

Create a new `NpmEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## NugetEntity

```php
$nuget = $client->Nuget();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Nuget()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Nuget()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Nuget()->load(["id" => "nuget_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Nuget()->update([
  "id" => "nuget_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): NugetEntity`

Create a new `NugetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OpenidConnectEntity

```php
$openid_connect = $client->OpenidConnect();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OpenidConnectEntity`

Create a new `OpenidConnectEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrgEntity

```php
$org = $client->Org();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | No |  |
| `created_at` | `string` | No |  |
| `event_at` | `string` | No |  |
| `location` | `string` | No |  |
| `name` | `string` | Yes |  |
| `package` | `array` | Yes |  |
| `policy` | `array` | Yes |  |
| `reason` | `array` | Yes |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `tagline` | `string` | No |  |
| `vulnerability_scan_result` | `array` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Org()->create([
  "id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Org()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Org()->load(["id" => "org_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Org()->remove(["id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Org()->update([
  "id" => "org_id",
  "team_id" => "team_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrgEntity`

Create a new `OrgEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationGroupSyncEntity

```php
$organization_group_sync = $client->OrganizationGroupSync();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idp_key` | `string` | Yes |  |
| `idp_value` | `string` | Yes |  |
| `role` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `team` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationGroupSync()->create([
  "org_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationGroupSync()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationGroupSyncEntity`

Create a new `OrganizationGroupSyncEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationGroupSyncStatusEntity

```php
$organization_group_sync_status = $client->OrganizationGroupSyncStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_group_sync_status` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationGroupSyncStatus()->load(["org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationGroupSyncStatusEntity`

Create a new `OrganizationGroupSyncStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationInviteEntity

```php
$organization_invite = $client->OrganizationInvite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `inviter` | `string` | No |  |
| `inviter_url` | `string` | No |  |
| `org` | `string` | No |  |
| `role` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `team` | `array` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationInvite()->create([
  "org_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationInvite()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationInvite()->update([
  "id" => "id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationInviteEntity`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationInviteExtendEntity

```php
$organization_invite_extend = $client->OrganizationInviteExtend();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `expires_at` | `string` | No |  |
| `inviter` | `string` | No |  |
| `inviter_url` | `string` | No |  |
| `org` | `string` | No |  |
| `role` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `team` | `array` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationInviteExtend()->create([
  "org_id" => null, // string
  "slug_perm" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationInviteExtendEntity`

Create a new `OrganizationInviteExtendEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationMembershipEntity

```php
$organization_membership = $client->OrganizationMembership();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `bool` | No |  |
| `is_active` | `bool` | No |  |
| `joined_at` | `string` | No |  |
| `last_login_at` | `string` | No |  |
| `last_login_method` | `string` | No |  |
| `role` | `string` | No |  |
| `user` | `string` | No |  |
| `user_id` | `string` | No |  |
| `user_name` | `string` | No |  |
| `user_url` | `string` | No |  |
| `visibility` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationMembership()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationMembership()->load(["member" => "member", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationMembership()->update([
  "member" => "member",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationMembershipEntity`

Create a new `OrganizationMembershipEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationMembershipRoleUpdateEntity

```php
$organization_membership_role_update = $client->OrganizationMembershipRoleUpdate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `bool` | No |  |
| `joined_at` | `string` | No |  |
| `last_login_at` | `string` | No |  |
| `last_login_method` | `string` | No |  |
| `role` | `string` | No |  |
| `user` | `string` | No |  |
| `user_id` | `string` | No |  |
| `user_name` | `string` | No |  |
| `user_url` | `string` | No |  |
| `visibility` | `string` | No |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationMembershipRoleUpdate()->update([
  "member_id" => "member_id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationMembershipRoleUpdateEntity`

Create a new `OrganizationMembershipRoleUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationMembershipVisibilityUpdateEntity

```php
$organization_membership_visibility_update = $client->OrganizationMembershipVisibilityUpdate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `bool` | No |  |
| `joined_at` | `string` | No |  |
| `last_login_at` | `string` | No |  |
| `last_login_method` | `string` | No |  |
| `role` | `string` | No |  |
| `user` | `string` | No |  |
| `user_id` | `string` | No |  |
| `user_name` | `string` | No |  |
| `user_url` | `string` | No |  |
| `visibility` | `string` | No |  |

### Operations

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationMembershipVisibilityUpdate()->update([
  "member_id" => "member_id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationMembershipVisibilityUpdateEntity`

Create a new `OrganizationMembershipVisibilityUpdateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationPackageLicensePolicyEntity

```php
$organization_package_license_policy = $client->OrganizationPackageLicensePolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_license` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `name` | `string` | Yes |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `spdx_identifier` | `array` | Yes |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationPackageLicensePolicy()->create([
  "org_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationPackageLicensePolicy()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationPackageLicensePolicy()->load(["id" => "organization_package_license_policy_id", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationPackageLicensePolicy()->update([
  "id" => "organization_package_license_policy_id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationPackageLicensePolicyEntity`

Create a new `OrganizationPackageLicensePolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationPackageVulnerabilityPolicyEntity

```php
$organization_package_vulnerability_policy = $client->OrganizationPackageVulnerabilityPolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_severity` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `min_severity` | `string` | No |  |
| `name` | `string` | Yes |  |
| `on_violation_quarantine` | `bool` | No |  |
| `package_query_string` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationPackageVulnerabilityPolicy()->create([
  "org_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationPackageVulnerabilityPolicy()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationPackageVulnerabilityPolicy()->load(["id" => "organization_package_vulnerability_policy_id", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationPackageVulnerabilityPolicy()->update([
  "id" => "organization_package_vulnerability_policy_id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationPackageVulnerabilityPolicyEntity`

Create a new `OrganizationPackageVulnerabilityPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationSamlAuthEntity

```php
$organization_saml_auth = $client->OrganizationSamlAuth();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_auth_enabled` | `bool` | Yes |  |
| `saml_auth_enforced` | `bool` | Yes |  |
| `saml_metadata_inline` | `string` | No |  |
| `saml_metadata_url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationSamlAuth()->load(["org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationSamlAuth()->update([
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationSamlAuthEntity`

Create a new `OrganizationSamlAuthEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationTeamEntity

```php
$organization_team = $client->OrganizationTeam();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | No |  |
| `name` | `string` | Yes |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `visibility` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationTeam()->create([
  "org_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationTeam()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->OrganizationTeam()->load(["id" => "organization_team_id", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->OrganizationTeam()->update([
  "id" => "organization_team_id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationTeamEntity`

Create a new `OrganizationTeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OrganizationTeamMemberEntity

```php
$organization_team_member = $client->OrganizationTeamMember();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | `string` | Yes |  |
| `user` | `string` | Yes |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->OrganizationTeamMember()->create([
  "org_id" => null, // string
  "team_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->OrganizationTeamMember()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OrganizationTeamMemberEntity`

Create a new `OrganizationTeamMemberEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## OssEntity

```php
$oss = $client->Oss();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): OssEntity`

Create a new `OssEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## P2nEntity

```php
$p2n = $client->P2n();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): P2nEntity`

Create a new `P2nEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## P2n2Entity

```php
$p2n2 = $client->P2n2();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): P2n2Entity`

Create a new `P2n2Entity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PackageEntity

```php
$package = $client->Package();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `array` | No |  |
| `backend_kind` | `int` | No |  |
| `cdn_url` | `string` | No |  |
| `checksum_md5` | `string` | No |  |
| `checksum_sha1` | `string` | No |  |
| `checksum_sha256` | `string` | No |  |
| `checksum_sha512` | `string` | No |  |
| `count` | `int` | Yes |  |
| `dep_type` | `string` | No |  |
| `dependencies_checksum_md5` | `string` | No |  |
| `dependencies_url` | `string` | No |  |
| `description` | `string` | No |  |
| `display_name` | `string` | No |  |
| `distro` | `array` | Yes |  |
| `distro_version` | `array` | No |  |
| `download` | `int` | No |  |
| `epoch` | `int` | No |  |
| `extension` | `string` | No |  |
| `file` | `array` | No |  |
| `filename` | `string` | No |  |
| `format` | `string` | No |  |
| `format_url` | `string` | No |  |
| `freeable_storage` | `int` | No |  |
| `fully_qualified_name` | `string` | No |  |
| `identifier` | `array` | No |  |
| `identifier_perm` | `string` | No |  |
| `indexed` | `bool` | No |  |
| `is_cancellable` | `bool` | No |  |
| `is_copyable` | `bool` | No |  |
| `is_deleteable` | `bool` | No |  |
| `is_downloadable` | `bool` | No |  |
| `is_moveable` | `bool` | No |  |
| `is_quarantinable` | `bool` | No |  |
| `is_quarantined` | `bool` | No |  |
| `is_resyncable` | `bool` | No |  |
| `is_security_scannable` | `bool` | No |  |
| `is_sync_awaiting` | `bool` | No |  |
| `is_sync_completed` | `bool` | No |  |
| `is_sync_failed` | `bool` | No |  |
| `is_sync_in_flight` | `bool` | No |  |
| `is_sync_in_progress` | `bool` | No |  |
| `last_push` | `string` | Yes |  |
| `license` | `string` | No |  |
| `name` | `string` | No |  |
| `namespace` | `string` | No |  |
| `namespace_url` | `string` | No |  |
| `num_download` | `int` | Yes |  |
| `num_file` | `int` | No |  |
| `operator` | `string` | No |  |
| `origin_repository` | `string` | No |  |
| `origin_repository_url` | `string` | No |  |
| `package` | `array` | Yes |  |
| `package_type` | `int` | No |  |
| `policy_violated` | `bool` | No |  |
| `release` | `string` | No |  |
| `repository` | `string` | No |  |
| `repository_url` | `string` | No |  |
| `security_scan_completed_at` | `string` | No |  |
| `security_scan_started_at` | `string` | No |  |
| `security_scan_status` | `string` | No |  |
| `security_scan_status_updated_at` | `string` | No |  |
| `self_html_url` | `string` | No |  |
| `self_url` | `string` | No |  |
| `signature_url` | `string` | No |  |
| `size` | `int` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `stage` | `int` | No |  |
| `stage_str` | `string` | No |  |
| `stage_updated_at` | `string` | No |  |
| `status` | `int` | No |  |
| `status_reason` | `string` | No |  |
| `status_str` | `string` | No |  |
| `status_updated_at` | `string` | No |  |
| `status_url` | `string` | No |  |
| `subtype` | `string` | No |  |
| `summary` | `string` | No |  |
| `sync_finished_at` | `string` | No |  |
| `sync_progress` | `int` | No |  |
| `tag` | `array` | No |  |
| `tags_immutable` | `array` | No |  |
| `type_display` | `string` | No |  |
| `uploaded_at` | `string` | No |  |
| `uploader` | `string` | No |  |
| `uploader_url` | `string` | No |  |
| `version` | `string` | No |  |
| `version_orig` | `string` | No |  |
| `vulnerability_scan_results_url` | `string` | No |  |

### Field Usage by Operation

| Field | load | list | create | remove |
| --- | --- | --- | --- | --- |
| `architecture` | - | - | - | - |
| `backend_kind` | - | - | - | - |
| `cdn_url` | - | - | - | - |
| `checksum_md5` | - | - | - | - |
| `checksum_sha1` | - | - | - | - |
| `checksum_sha256` | - | - | - | - |
| `checksum_sha512` | - | - | - | - |
| `count` | - | - | - | - |
| `dep_type` | - | - | - | - |
| `dependencies_checksum_md5` | - | - | - | - |
| `dependencies_url` | - | - | - | - |
| `description` | - | - | - | - |
| `display_name` | - | - | - | - |
| `distro` | - | - | - | - |
| `distro_version` | - | - | - | - |
| `download` | - | - | - | - |
| `epoch` | - | - | - | - |
| `extension` | - | - | - | - |
| `file` | - | - | - | - |
| `filename` | - | - | - | - |
| `format` | - | - | - | - |
| `format_url` | - | - | - | - |
| `freeable_storage` | - | - | - | - |
| `fully_qualified_name` | - | - | - | - |
| `identifier` | - | - | - | - |
| `identifier_perm` | - | - | - | - |
| `indexed` | - | - | - | - |
| `is_cancellable` | - | - | - | - |
| `is_copyable` | - | - | - | - |
| `is_deleteable` | - | - | - | - |
| `is_downloadable` | - | - | - | - |
| `is_moveable` | - | - | - | - |
| `is_quarantinable` | - | - | - | - |
| `is_quarantined` | - | - | - | - |
| `is_resyncable` | - | - | - | - |
| `is_security_scannable` | - | - | - | - |
| `is_sync_awaiting` | - | - | - | - |
| `is_sync_completed` | - | - | - | - |
| `is_sync_failed` | - | - | - | - |
| `is_sync_in_flight` | - | - | - | - |
| `is_sync_in_progress` | - | - | - | - |
| `last_push` | - | - | - | - |
| `license` | - | - | - | - |
| `name` | - | - | - | - |
| `namespace` | - | - | - | - |
| `namespace_url` | - | - | - | - |
| `num_download` | - | - | - | - |
| `num_file` | - | - | - | - |
| `operator` | - | - | - | - |
| `origin_repository` | - | - | - | - |
| `origin_repository_url` | - | - | - | - |
| `package` | - | - | - | - |
| `package_type` | - | - | - | - |
| `policy_violated` | - | - | - | - |
| `release` | - | - | - | - |
| `repository` | - | - | - | - |
| `repository_url` | - | - | - | - |
| `security_scan_completed_at` | - | - | - | - |
| `security_scan_started_at` | - | - | - | - |
| `security_scan_status` | - | - | - | - |
| `security_scan_status_updated_at` | - | - | - | - |
| `self_html_url` | - | - | - | - |
| `self_url` | - | - | - | - |
| `signature_url` | - | - | - | - |
| `size` | - | Yes | - | - |
| `slug` | - | - | - | - |
| `slug_perm` | - | - | - | - |
| `stage` | - | - | - | - |
| `stage_str` | - | - | - | - |
| `stage_updated_at` | - | - | - | - |
| `status` | - | - | - | - |
| `status_reason` | - | - | - | - |
| `status_str` | - | - | - | - |
| `status_updated_at` | - | - | - | - |
| `status_url` | - | - | - | - |
| `subtype` | - | - | - | - |
| `summary` | - | - | - | - |
| `sync_finished_at` | - | - | - | - |
| `sync_progress` | - | - | - | - |
| `tag` | - | - | - | - |
| `tags_immutable` | - | - | - | - |
| `type_display` | - | - | - | - |
| `uploaded_at` | - | - | - | - |
| `uploader` | - | - | - | - |
| `uploader_url` | - | - | - | - |
| `version` | - | - | - | - |
| `version_orig` | - | - | - | - |
| `vulnerability_scan_results_url` | - | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Package()->create([
  "owner" => null, // mixed
  "repo" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Package()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Package()->load(["owner" => "owner", "repo" => "repo"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Package()->remove(["identifier" => "identifier", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PackageEntity`

Create a new `PackageEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PackageDenyPolicyEntity

```php
$package_deny_policy = $client->PackageDenyPolicy();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `enabled` | `bool` | No |  |
| `name` | `string` | No |  |
| `package_query_string` | `string` | Yes |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PackageDenyPolicy()->create([
  "org_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PackageDenyPolicy()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PackageDenyPolicy()->load(["id" => "package_deny_policy_id", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->PackageDenyPolicy()->update([
  "id" => "package_deny_policy_id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PackageDenyPolicyEntity`

Create a new `PackageDenyPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PackageFilePartsUploadEntity

```php
$package_file_parts_upload = $client->PackageFilePartsUpload();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `identifier` | `string` | No |  |
| `upload_querystring` | `string` | No |  |
| `upload_url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PackageFilePartsUpload()->load(["identifier" => "identifier", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PackageFilePartsUploadEntity`

Create a new `PackageFilePartsUploadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PackageFileUploadEntity

```php
$package_file_upload = $client->PackageFileUpload();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PackageFileUpload()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
  "repo" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PackageFileUploadEntity`

Create a new `PackageFileUploadEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PackageLicensePolicyEvaluationEntity

```php
$package_license_policy_evaluation = $client->PackageLicensePolicyEvaluation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `evaluation_count` | `int` | No |  |
| `policy` | `array` | Yes |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `violation_count` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PackageLicensePolicyEvaluation()->create([
  "org_id" => null, // string
  "policy_slug_perm" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PackageLicensePolicyEvaluation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PackageLicensePolicyEvaluation()->load(["id" => "package_license_policy_evaluation_id", "license_policy_id" => "license_policy_id", "org_id" => "org_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PackageLicensePolicyEvaluationEntity`

Create a new `PackageLicensePolicyEvaluationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PackageVersionBadgeEntity

```php
$package_version_badge = $client->PackageVersionBadge();
```

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PackageVersionBadge()->load(["owner" => "owner", "package_format" => "package_format", "package_identifier" => "package_identifier", "package_name" => "package_name", "package_version" => "package_version", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PackageVersionBadgeEntity`

Create a new `PackageVersionBadgeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PackageVulnerabilityPolicyEvaluationEntity

```php
$package_vulnerability_policy_evaluation = $client->PackageVulnerabilityPolicyEvaluation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `evaluation_count` | `int` | No |  |
| `policy` | `array` | No |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `violation_count` | `int` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->PackageVulnerabilityPolicyEvaluation()->create([
  "org_id" => null, // string
  "policy_slug_perm" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->PackageVulnerabilityPolicyEvaluation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->PackageVulnerabilityPolicyEvaluation()->load(["id" => "package_vulnerability_policy_evaluation_id", "org_id" => "org_id", "vulnerability_policy_id" => "vulnerability_policy_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PackageVulnerabilityPolicyEvaluationEntity`

Create a new `PackageVulnerabilityPolicyEvaluationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PrivilegeEntity

```php
$privilege = $client->Privilege();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PrivilegeEntity`

Create a new `PrivilegeEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProfileEntity

```php
$profile = $client->Profile();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProfileEntity`

Create a new `ProfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProviderSettingEntity

```php
$provider_setting = $client->ProviderSetting();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim` | `array` | Yes |  |
| `enabled` | `bool` | Yes |  |
| `mapping_claim` | `string` | No |  |
| `name` | `string` | Yes |  |
| `provider_url` | `string` | Yes |  |
| `service_account` | `array` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ProviderSetting()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ProviderSetting()->load(["org_id" => "org_id", "slug_perm" => "slug_perm"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProviderSettingEntity`

Create a new `ProviderSettingEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ProviderSettingsWriteEntity

```php
$provider_settings_write = $client->ProviderSettingsWrite();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim` | `array` | Yes |  |
| `dynamic_mapping` | `array` | No |  |
| `enabled` | `bool` | Yes |  |
| `mapping_claim` | `string` | No |  |
| `name` | `string` | Yes |  |
| `provider_url` | `string` | Yes |  |
| `service_account` | `array` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->ProviderSettingsWrite()->create([
  "org_id" => null, // string
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->ProviderSettingsWrite()->update([
  "org_id" => "org_id",
  "slug_perm" => "slug_perm",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ProviderSettingsWriteEntity`

Create a new `ProviderSettingsWriteEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## PythonEntity

```php
$python = $client->Python();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Python()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Python()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Python()->load(["id" => "python_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Python()->update([
  "id" => "python_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): PythonEntity`

Create a new `PythonEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## QuarantineEntity

```php
$quarantine = $client->Quarantine();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): QuarantineEntity`

Create a new `QuarantineEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## QuotaEntity

```php
$quota = $client->Quota();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `history` | `array` | Yes |  |
| `usage` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Quota()->load(["id" => "quota_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): QuotaEntity`

Create a new `QuotaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RawEntity

```php
$raw = $client->Raw();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RawEntity`

Create a new `RawEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RefreshEntity

```php
$refresh = $client->Refresh();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RefreshEntity`

Create a new `RefreshEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RegenerateEntity

```php
$regenerate = $client->Regenerate();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RegenerateEntity`

Create a new `RegenerateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepoEntity

```php
$repo = $client->Repo();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cdn_url` | `string` | No |  |
| `content_kind` | `string` | No |  |
| `contextual_auth_realm` | `bool` | No |  |
| `copy_own` | `bool` | No |  |
| `copy_package` | `string` | No |  |
| `cosign_signing_enabled` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `default_privilege` | `string` | No |  |
| `delete_own` | `bool` | No |  |
| `delete_package` | `string` | No |  |
| `deleted_at` | `string` | No |  |
| `description` | `string` | No |  |
| `distribute` | `array` | No |  |
| `docker_refresh_tokens_enabled` | `bool` | No |  |
| `ecdsa_key` | `array` | No |  |
| `enforce_eula` | `bool` | No |  |
| `gpg_key` | `array` | No |  |
| `index_file` | `bool` | No |  |
| `is_open_source` | `bool` | No |  |
| `is_private` | `bool` | No |  |
| `is_public` | `bool` | No |  |
| `manage_entitlements_privilege` | `string` | No |  |
| `move_own` | `bool` | No |  |
| `move_package` | `string` | No |  |
| `name` | `string` | Yes |  |
| `namespace` | `string` | No |  |
| `namespace_url` | `string` | No |  |
| `nuget_native_signing_enabled` | `bool` | No |  |
| `num_download` | `int` | No |  |
| `num_policy_violated_package` | `int` | No |  |
| `num_quarantined_package` | `int` | No |  |
| `open_source_license` | `string` | No |  |
| `open_source_project_url` | `string` | No |  |
| `package_count` | `int` | No |  |
| `package_group_count` | `int` | No |  |
| `proxy_npmj` | `bool` | No |  |
| `proxy_pypi` | `bool` | No |  |
| `raw_package_index_enabled` | `bool` | No |  |
| `raw_package_index_signatures_enabled` | `bool` | No |  |
| `replace_package` | `string` | No |  |
| `replace_packages_by_default` | `bool` | No |  |
| `repository_type` | `int` | No |  |
| `repository_type_str` | `string` | No |  |
| `resync_own` | `bool` | No |  |
| `resync_package` | `string` | No |  |
| `scan_own` | `bool` | No |  |
| `scan_package` | `string` | No |  |
| `self_html_url` | `string` | No |  |
| `self_url` | `string` | No |  |
| `show_setup_all` | `bool` | No |  |
| `size` | `int` | No |  |
| `size_str` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `storage_region` | `string` | No |  |
| `strict_npm_validation` | `bool` | No |  |
| `tag_pre_releases_as_latest` | `bool` | No |  |
| `use_debian_label` | `bool` | No |  |
| `use_default_cargo_upstream` | `bool` | No |  |
| `use_entitlements_privilege` | `string` | No |  |
| `use_noarch_package` | `bool` | No |  |
| `use_source_package` | `bool` | No |  |
| `use_vulnerability_scanning` | `bool` | No |  |
| `user_entitlements_enabled` | `bool` | No |  |
| `view_statistic` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Repo()->create([
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Repo()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Repo()->load(["id" => "repo_id"]);
```

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Repo()->remove(["identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Repo()->update([
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepoEntity`

Create a new `RepoEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryAuditLogEntity

```php
$repository_audit_log = $client->RepositoryAuditLog();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `string` | Yes |  |
| `actor_ip_address` | `string` | Yes |  |
| `actor_kind` | `string` | No |  |
| `actor_location` | `array` | Yes |  |
| `actor_slug_perm` | `string` | Yes |  |
| `actor_url` | `string` | No |  |
| `context` | `string` | Yes |  |
| `event` | `string` | Yes |  |
| `event_at` | `string` | Yes |  |
| `object` | `string` | Yes |  |
| `object_kind` | `string` | Yes |  |
| `object_slug_perm` | `string` | Yes |  |
| `uuid` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RepositoryAuditLog()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryAuditLogEntity`

Create a new `RepositoryAuditLogEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryEcdsaKeyEntity

```php
$repository_ecdsa_key = $client->RepositoryEcdsaKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `default` | `bool` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No |  |
| `ssh_fingerprint` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryEcdsaKey()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryEcdsaKey()->load(["identifier" => "identifier", "owner" => "owner"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryEcdsaKeyEntity`

Create a new `RepositoryEcdsaKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryGeoIpRuleEntity

```php
$repository_geo_ip_rule = $client->RepositoryGeoIpRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `array` | Yes |  |
| `country_code` | `array` | Yes |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryGeoIpRule()->load(["identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RepositoryGeoIpRule()->update([
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryGeoIpRuleEntity`

Create a new `RepositoryGeoIpRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryGeoIpStatusEntity

```php
$repository_geo_ip_status = $client->RepositoryGeoIpStatus();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoip_enabled` | `bool` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryGeoIpStatus()->load(["identifier" => "identifier", "owner" => "owner"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryGeoIpStatusEntity`

Create a new `RepositoryGeoIpStatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryGeoIpTestAddressEntity

```php
$repository_geo_ip_test_address = $client->RepositoryGeoIpTestAddress();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryGeoIpTestAddress()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryGeoIpTestAddressEntity`

Create a new `RepositoryGeoIpTestAddressEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryGpgKeyEntity

```php
$repository_gpg_key = $client->RepositoryGpgKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `comment` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `default` | `bool` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryGpgKey()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryGpgKey()->load(["identifier" => "identifier", "owner" => "owner"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryGpgKeyEntity`

Create a new `RepositoryGpgKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryPrivilegeInputEntity

```php
$repository_privilege_input = $client->RepositoryPrivilegeInput();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `privilege` | `string` | Yes |  |
| `service` | `string` | No |  |
| `team` | `string` | No |  |
| `user` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RepositoryPrivilegeInput()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryPrivilegeInputEntity`

Create a new `RepositoryPrivilegeInputEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryRetentionRuleEntity

```php
$repository_retention_rule = $client->RepositoryRetentionRule();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `retention_count_limit` | `int` | No |  |
| `retention_days_limit` | `int` | No |  |
| `retention_enabled` | `bool` | No |  |
| `retention_group_by_format` | `bool` | No |  |
| `retention_group_by_name` | `bool` | No |  |
| `retention_group_by_package_type` | `bool` | No |  |
| `retention_package_query_string` | `string` | No |  |
| `retention_size_limit` | `int` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryRetentionRule()->load(["owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RepositoryRetentionRule()->update([
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryRetentionRuleEntity`

Create a new `RepositoryRetentionRuleEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryRsaKeyEntity

```php
$repository_rsa_key = $client->RepositoryRsaKey();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `created_at` | `string` | No |  |
| `default` | `bool` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No |  |
| `ssh_fingerprint` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryRsaKey()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryRsaKey()->load(["identifier" => "identifier", "owner" => "owner"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryRsaKeyEntity`

Create a new `RepositoryRsaKeyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryTokenEntity

```php
$repository_token = $client->RepositoryToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `int` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `bool` | No |  |
| `disable_url` | `string` | No |  |
| `download` | `int` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `array` | No |  |
| `eula_accepted_at` | `string` | No |  |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `bool` | No |  |
| `has_limit` | `bool` | No |  |
| `identifier` | `int` | No |  |
| `is_active` | `bool` | No |  |
| `is_limited` | `bool` | No |  |
| `limit_bandwidth` | `int` | No |  |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No |  |
| `limit_date_range_to` | `string` | No |  |
| `limit_num_client` | `int` | No |  |
| `limit_num_download` | `int` | No |  |
| `limit_package_query` | `string` | No |  |
| `limit_path_query` | `string` | No |  |
| `metadata` | `array` | No |  |
| `name` | `string` | Yes |  |
| `refresh_url` | `string` | No |  |
| `reset_url` | `string` | No |  |
| `scheduled_reset_at` | `string` | No |  |
| `scheduled_reset_period` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `updated_by` | `string` | No |  |
| `updated_by_url` | `string` | No |  |
| `usage` | `string` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryToken()->create([
  "owner" => null, // mixed
  "repo" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RepositoryToken()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryToken()->load(["identifier" => "identifier", "owner" => "owner", "repo" => "repo"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RepositoryToken()->update([
  "identifier" => "identifier",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryTokenEntity`

Create a new `RepositoryTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryTokenRefreshEntity

```php
$repository_token_refresh = $client->RepositoryTokenRefresh();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `int` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `bool` | No |  |
| `disable_url` | `string` | No |  |
| `download` | `int` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `array` | No |  |
| `eula_accepted_at` | `string` | No |  |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `bool` | No |  |
| `has_limit` | `bool` | No |  |
| `identifier` | `int` | No |  |
| `is_active` | `bool` | No |  |
| `is_limited` | `bool` | No |  |
| `limit_bandwidth` | `int` | No |  |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No |  |
| `limit_date_range_to` | `string` | No |  |
| `limit_num_client` | `int` | No |  |
| `limit_num_download` | `int` | No |  |
| `limit_package_query` | `string` | No |  |
| `limit_path_query` | `string` | No |  |
| `metadata` | `array` | No |  |
| `name` | `string` | No |  |
| `refresh_url` | `string` | No |  |
| `reset_url` | `string` | No |  |
| `scheduled_reset_at` | `string` | No |  |
| `scheduled_reset_period` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `token` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `updated_by` | `string` | No |  |
| `updated_by_url` | `string` | No |  |
| `usage` | `string` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryTokenRefresh()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
  "repo" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryTokenRefreshEntity`

Create a new `RepositoryTokenRefreshEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryTokenSyncEntity

```php
$repository_token_sync = $client->RepositoryTokenSync();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryTokenSync()->create([
  "owner" => null, // mixed
  "repo" => null, // mixed
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryTokenSyncEntity`

Create a new `RepositoryTokenSyncEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryWebhookEntity

```php
$repository_webhook = $client->RepositoryWebhook();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `disable_reason` | `int` | No |  |
| `disable_reason_str` | `string` | No |  |
| `event` | `array` | Yes |  |
| `identifier` | `int` | No |  |
| `is_active` | `bool` | No |  |
| `is_last_response_bad` | `bool` | No |  |
| `last_response_status` | `int` | No |  |
| `last_response_status_str` | `string` | No |  |
| `num_sent` | `int` | No |  |
| `package_query` | `string` | No |  |
| `request_body_format` | `int` | No |  |
| `request_body_format_str` | `string` | No |  |
| `request_body_template_format` | `int` | No |  |
| `request_body_template_format_str` | `string` | No |  |
| `request_content_type` | `string` | No |  |
| `secret_header` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `target_url` | `string` | Yes |  |
| `template` | `array` | Yes |  |
| `updated_at` | `string` | No |  |
| `updated_by` | `string` | No |  |
| `updated_by_url` | `string` | No |  |
| `verify_ssl` | `bool` | No |  |

### Field Usage by Operation

| Field | list | create | update |
| --- | --- | --- | --- |
| `created_at` | - | - | - |
| `created_by` | - | - | - |
| `created_by_url` | - | - | - |
| `disable_reason` | - | - | - |
| `disable_reason_str` | - | - | - |
| `event` | - | - | - |
| `identifier` | - | - | - |
| `is_active` | - | - | - |
| `is_last_response_bad` | - | - | - |
| `last_response_status` | - | - | - |
| `last_response_status_str` | - | - | - |
| `num_sent` | - | - | - |
| `package_query` | - | - | - |
| `request_body_format` | - | - | - |
| `request_body_format_str` | - | - | - |
| `request_body_template_format` | - | - | - |
| `request_body_template_format_str` | - | - | - |
| `request_content_type` | - | - | - |
| `secret_header` | - | - | - |
| `self_url` | - | - | - |
| `slug_perm` | - | - | - |
| `target_url` | - | - | - |
| `template` | Yes | - | - |
| `updated_at` | - | - | - |
| `updated_by` | - | - | - |
| `updated_by_url` | - | - | - |
| `verify_ssl` | - | - | - |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->RepositoryWebhook()->create([
  "owner" => null, // mixed
  "repo" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->RepositoryWebhook()->list();
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->RepositoryWebhook()->update([
  "identifier" => "identifier",
  "owner" => "owner",
  "repo" => "repo",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryWebhookEntity`

Create a new `RepositoryWebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryX509EcdsaCertificateEntity

```php
$repository_x509_ecdsa_certificate = $client->RepositoryX509EcdsaCertificate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `certificate` | `string` | No |  |
| `certificate_chain` | `string` | No |  |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No |  |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `bool` | No |  |
| `issuing_status` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryX509EcdsaCertificate()->load(["identifier" => "identifier", "owner" => "owner"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryX509EcdsaCertificateEntity`

Create a new `RepositoryX509EcdsaCertificateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RepositoryX509RsaCertificateEntity

```php
$repository_x509_rsa_certificate = $client->RepositoryX509RsaCertificate();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `bool` | No |  |
| `certificate` | `string` | No |  |
| `certificate_chain` | `string` | No |  |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No |  |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `bool` | No |  |
| `issuing_status` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->RepositoryX509RsaCertificate()->load(["identifier" => "identifier", "owner" => "owner"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RepositoryX509RsaCertificateEntity`

Create a new `RepositoryX509RsaCertificateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResetEntity

```php
$reset = $client->Reset();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResetEntity`

Create a new `ResetEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResourcesRateCheckEntity

```php
$resources_rate_check = $client->ResourcesRateCheck();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resource` | `array` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ResourcesRateCheck()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResourcesRateCheckEntity`

Create a new `ResourcesRateCheckEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ResyncEntity

```php
$resync = $client->Resync();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ResyncEntity`

Create a new `ResyncEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RetentionEntity

```php
$retention = $client->Retention();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RetentionEntity`

Create a new `RetentionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RpmEntity

```php
$rpm = $client->Rpm();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `distro_version` | `string` | Yes |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `gpg_key_inline` | `string` | No |  |
| `gpg_key_url` | `string` | No |  |
| `gpg_verification` | `string` | No |  |
| `include_source` | `bool` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verification_status` | `string` | No |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Rpm()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Rpm()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Rpm()->load(["id" => "rpm_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Rpm()->update([
  "id" => "rpm_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RpmEntity`

Create a new `RpmEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RsaEntity

```php
$rsa = $client->Rsa();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RsaEntity`

Create a new `RsaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RubyEntity

```php
$ruby = $client->Ruby();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Ruby()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Ruby()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Ruby()->load(["id" => "ruby_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Ruby()->update([
  "id" => "ruby_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RubyEntity`

Create a new `RubyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SamlGroupSyncEntity

```php
$saml_group_sync = $client->SamlGroupSync();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SamlGroupSyncEntity`

Create a new `SamlGroupSyncEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ScanEntity

```php
$scan = $client->Scan();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ScanEntity`

Create a new `ScanEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SelfEntity

```php
$self = $client->Self();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SelfEntity`

Create a new `SelfEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ServiceEntity

```php
$service = $client->Service();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `description` | `string` | No |  |
| `key` | `string` | No |  |
| `key_expires_at` | `string` | No |  |
| `name` | `string` | Yes |  |
| `role` | `string` | No |  |
| `slug` | `string` | No |  |
| `team` | `array` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Service()->create([
  "org_id" => null, // string
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Service()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Service()->load(["id" => "service_id", "org_id" => "org_id"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Service()->update([
  "id" => "service_id",
  "org_id" => "org_id",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ServiceEntity`

Create a new `ServiceEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusEntity

```php
$status = $client->Status();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusEntity`

Create a new `StatusEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StatusBasicEntity

```php
$status_basic = $client->StatusBasic();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->StatusBasic()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StatusBasicEntity`

Create a new `StatusBasicEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## StorageRegionEntity

```php
$storage_region = $client->StorageRegion();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->StorageRegion()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->StorageRegion()->load(["id" => "storage_region_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): StorageRegionEntity`

Create a new `StorageRegionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SwiftEntity

```php
$swift = $client->Swift();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `string` | No |  |
| `auth_secret` | `string` | No |  |
| `auth_username` | `string` | No |  |
| `created_at` | `string` | No |  |
| `disable_reason` | `string` | No |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `is_active` | `bool` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `bool` | No |  |
| `priority` | `int` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `bool` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->Swift()->create([
  "identifier" => null, // mixed
  "owner" => null, // mixed
]);
```

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Swift()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Swift()->load(["id" => "swift_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->Swift()->update([
  "id" => "swift_id",
  "identifier" => "identifier",
  "owner" => "owner",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SwiftEntity`

Create a new `SwiftEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## SyncEntity

```php
$sync = $client->Sync();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): SyncEntity`

Create a new `SyncEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TagEntity

```php
$tag = $client->Tag();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TagEntity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TeamEntity

```php
$team = $client->Team();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TeamEntity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TerraformEntity

```php
$terraform = $client->Terraform();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TerraformEntity`

Create a new `TerraformEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TestEntity

```php
$test = $client->Test();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TestEntity`

Create a new `TestEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TokenEntity

```php
$token = $client->Token();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TokenEntity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## TransferRegionEntity

```php
$transfer_region = $client->TransferRegion();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): TransferRegionEntity`

Create a new `TransferRegionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserEntity

```php
$user = $client->User();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No |  |
| `key` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->User()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserEntity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserAuthTokenEntity

```php
$user_auth_token = $client->UserAuthToken();
```

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UserAuthToken()->create([
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserAuthTokenEntity`

Create a new `UserAuthTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserAuthenticationTokenEntity

```php
$user_authentication_token = $client->UserAuthenticationToken();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No |  |
| `key` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `create(array $reqdata, ?array $ctrl = null): mixed`

Create a new entity with the given data. Throws on error.

```php
$result = $client->UserAuthenticationToken()->create([
]);
```

#### `update(array $reqdata, ?array $ctrl = null): mixed`

Update an existing entity. The data must include the entity `id`. Throws on error.

```php
$result = $client->UserAuthenticationToken()->update([
  "slug_perm" => "slug_perm",
  // Fields to update
]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserAuthenticationTokenEntity`

Create a new `UserAuthenticationTokenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserBriefEntity

```php
$user_brief = $client->UserBrief();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authenticated` | `bool` | No |  |
| `email` | `string` | No |  |
| `name` | `string` | No |  |
| `profile_url` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UserBrief()->load();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserBriefEntity`

Create a new `UserBriefEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## UserProfileEntity

```php
$user_profile = $client->UserProfile();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `company` | `string` | No |  |
| `first_name` | `string` | Yes |  |
| `job_title` | `string` | No |  |
| `joined_at` | `string` | No |  |
| `last_name` | `string` | Yes |  |
| `name` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `tagline` | `string` | No |  |
| `url` | `string` | No |  |

### Operations

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->UserProfile()->load(["id" => "user_profile_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): UserProfileEntity`

Create a new `UserProfileEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VagrantEntity

```php
$vagrant = $client->Vagrant();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VagrantEntity`

Create a new `VagrantEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ValidateEntity

```php
$validate = $client->Validate();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ValidateEntity`

Create a new `ValidateEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VersionEntity

```php
$version = $client->Version();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VersionEntity`

Create a new `VersionEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VulnerabilityEntity

```php
$vulnerability = $client->Vulnerability();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `has_vulnerability` | `bool` | No |  |
| `identifier` | `string` | Yes |  |
| `max_severity` | `string` | No |  |
| `num_vulnerability` | `int` | No |  |
| `package` | `array` | Yes |  |
| `result` | `array` | Yes |  |
| `scan_id` | `int` | Yes |  |
| `target` | `string` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Vulnerability()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Vulnerability()->load(["id" => "vulnerability_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VulnerabilityEntity`

Create a new `VulnerabilityEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## VulnerabilityPolicyEntity

```php
$vulnerability_policy = $client->VulnerabilityPolicy();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): VulnerabilityPolicyEntity`

Create a new `VulnerabilityPolicyEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebhookEntity

```php
$webhook = $client->Webhook();
```

### Operations

#### `remove(array $reqmatch, ?array $ctrl = null): mixed`

Remove the entity matching the given criteria. Throws on error.

```php
$result = $client->Webhook()->remove(["identifier" => "identifier", "owner" => "owner", "repo" => "repo"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebhookEntity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## X509EcdsaEntity

```php
$x509_ecdsa = $client->X509Ecdsa();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): X509EcdsaEntity`

Create a new `X509EcdsaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## X509RsaEntity

```php
$x509_rsa = $client->X509Rsa();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): X509RsaEntity`

Create a new `X509RsaEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new CloudsmithSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

