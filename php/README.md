# Cloudsmith PHP SDK



The PHP SDK for the Cloudsmith API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Abort()` — with named operations (`list`/`load`/`create`/`update`/`remove`/`patch`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/cloudsmith-sdk/releases](https://github.com/voxgig-sdk/cloudsmith-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'cloudsmith_sdk.php';

$client = new CloudsmithSDK([
    "apikey" => getenv("CLOUDSMITH_APIKEY"),
]);
```

### 3. Load a cargo

Cargo is nested under identifier, so provide the `identifier`.

```php
try {
    // load() returns the bare Cargo record (throws on error).
    $cargo = $client->Cargo()->load(["identifier" => "example_identifier", "owner" => "example_owner", "id" => "example_id"]);
    print_r($cargo);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $cargos = $client->Cargo()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = CloudsmithSDK::test([
    "entity" => ["cargo" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the bare mock record (throws on error).
$cargo = $client->Cargo()->list();
print_r($cargo);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new CloudsmithSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDSMITH_TEST_LIVE=TRUE
CLOUDSMITH_APIKEY=<your-key>
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### CloudsmithSDK

```php
require_once 'cloudsmith_sdk.php';
$client = new CloudsmithSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = CloudsmithSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### CloudsmithSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Abort` | `($data): AbortEntity` | Create an Abort entity instance. |
| `Alpine` | `($data): AlpineEntity` | Create an Alpine entity instance. |
| `AuditLog` | `($data): AuditLogEntity` | Create an AuditLog entity instance. |
| `Basic` | `($data): BasicEntity` | Create a Basic entity instance. |
| `Cargo` | `($data): CargoEntity` | Create a Cargo entity instance. |
| `Cocoapod` | `($data): CocoapodEntity` | Create a Cocoapod entity instance. |
| `Complete` | `($data): CompleteEntity` | Create a Complete entity instance. |
| `Composer` | `($data): ComposerEntity` | Create a Composer entity instance. |
| `Conan` | `($data): ConanEntity` | Create a Conan entity instance. |
| `Conda` | `($data): CondaEntity` | Create a Conda entity instance. |
| `Copy` | `($data): CopyEntity` | Create a Copy entity instance. |
| `Cran` | `($data): CranEntity` | Create a Cran entity instance. |
| `Dart` | `($data): DartEntity` | Create a Dart entity instance. |
| `Deb` | `($data): DebEntity` | Create a Deb entity instance. |
| `DenyPolicy` | `($data): DenyPolicyEntity` | Create a DenyPolicy entity instance. |
| `Dependency` | `($data): DependencyEntity` | Create a Dependency entity instance. |
| `Disable` | `($data): DisableEntity` | Create a Disable entity instance. |
| `DistributionFull` | `($data): DistributionFullEntity` | Create a DistributionFull entity instance. |
| `Distro` | `($data): DistroEntity` | Create a Distro entity instance. |
| `Docker` | `($data): DockerEntity` | Create a Docker entity instance. |
| `DynamicMapping` | `($data): DynamicMappingEntity` | Create a DynamicMapping entity instance. |
| `Ecdsa` | `($data): EcdsaEntity` | Create an Ecdsa entity instance. |
| `Enable` | `($data): EnableEntity` | Create an Enable entity instance. |
| `Entitlement` | `($data): EntitlementEntity` | Create an Entitlement entity instance. |
| `Evaluation` | `($data): EvaluationEntity` | Create an Evaluation entity instance. |
| `File` | `($data): FileEntity` | Create a File entity instance. |
| `Format` | `($data): FormatEntity` | Create a Format entity instance. |
| `Geoip` | `($data): GeoipEntity` | Create a Geoip entity instance. |
| `Gon` | `($data): GonEntity` | Create a Gon entity instance. |
| `Gon2` | `($data): Gon2Entity` | Create a Gon2 entity instance. |
| `Gon3` | `($data): Gon3Entity` | Create a Gon3 entity instance. |
| `Gon4` | `($data): Gon4Entity` | Create a Gon4 entity instance. |
| `Gon5` | `($data): Gon5Entity` | Create a Gon5 entity instance. |
| `Gon6` | `($data): Gon6Entity` | Create a Gon6 entity instance. |
| `Gon7` | `($data): Gon7Entity` | Create a Gon7 entity instance. |
| `Gon8` | `($data): Gon8Entity` | Create a Gon8 entity instance. |
| `Gon9` | `($data): Gon9Entity` | Create a Gon9 entity instance. |
| `Gpg` | `($data): GpgEntity` | Create a Gpg entity instance. |
| `Group` | `($data): GroupEntity` | Create a Group entity instance. |
| `Helm` | `($data): HelmEntity` | Create a Helm entity instance. |
| `Hex` | `($data): HexEntity` | Create a Hex entity instance. |
| `History` | `($data): HistoryEntity` | Create a History entity instance. |
| `Huggingface` | `($data): HuggingfaceEntity` | Create a Huggingface entity instance. |
| `Info` | `($data): InfoEntity` | Create an Info entity instance. |
| `Invite` | `($data): InviteEntity` | Create an Invite entity instance. |
| `LicensePolicy` | `($data): LicensePolicyEntity` | Create a LicensePolicy entity instance. |
| `Limit` | `($data): LimitEntity` | Create a Limit entity instance. |
| `Luarock` | `($data): LuarockEntity` | Create a Luarock entity instance. |
| `Maven` | `($data): MavenEntity` | Create a Maven entity instance. |
| `Member` | `($data): MemberEntity` | Create a Member entity instance. |
| `Move` | `($data): MoveEntity` | Create a Move entity instance. |
| `Namespace` | `($data): NamespaceEntity` | Create a Namespace entity instance. |
| `NamespaceAuditLog` | `($data): NamespaceAuditLogEntity` | Create a NamespaceAuditLog entity instance. |
| `Npm` | `($data): NpmEntity` | Create a Npm entity instance. |
| `Nuget` | `($data): NugetEntity` | Create a Nuget entity instance. |
| `OpenidConnect` | `($data): OpenidConnectEntity` | Create an OpenidConnect entity instance. |
| `Org` | `($data): OrgEntity` | Create an Org entity instance. |
| `OrganizationGroupSync` | `($data): OrganizationGroupSyncEntity` | Create an OrganizationGroupSync entity instance. |
| `OrganizationGroupSyncStatus` | `($data): OrganizationGroupSyncStatusEntity` | Create an OrganizationGroupSyncStatus entity instance. |
| `OrganizationInvite` | `($data): OrganizationInviteEntity` | Create an OrganizationInvite entity instance. |
| `OrganizationInviteExtend` | `($data): OrganizationInviteExtendEntity` | Create an OrganizationInviteExtend entity instance. |
| `OrganizationMembership` | `($data): OrganizationMembershipEntity` | Create an OrganizationMembership entity instance. |
| `OrganizationMembershipRoleUpdate` | `($data): OrganizationMembershipRoleUpdateEntity` | Create an OrganizationMembershipRoleUpdate entity instance. |
| `OrganizationMembershipVisibilityUpdate` | `($data): OrganizationMembershipVisibilityUpdateEntity` | Create an OrganizationMembershipVisibilityUpdate entity instance. |
| `OrganizationPackageLicensePolicy` | `($data): OrganizationPackageLicensePolicyEntity` | Create an OrganizationPackageLicensePolicy entity instance. |
| `OrganizationPackageVulnerabilityPolicy` | `($data): OrganizationPackageVulnerabilityPolicyEntity` | Create an OrganizationPackageVulnerabilityPolicy entity instance. |
| `OrganizationSamlAuth` | `($data): OrganizationSamlAuthEntity` | Create an OrganizationSamlAuth entity instance. |
| `OrganizationTeam` | `($data): OrganizationTeamEntity` | Create an OrganizationTeam entity instance. |
| `OrganizationTeamMember` | `($data): OrganizationTeamMemberEntity` | Create an OrganizationTeamMember entity instance. |
| `Oss` | `($data): OssEntity` | Create an Oss entity instance. |
| `P2n` | `($data): P2nEntity` | Create a P2n entity instance. |
| `P2n2` | `($data): P2n2Entity` | Create a P2n2 entity instance. |
| `Package` | `($data): PackageEntity` | Create a Package entity instance. |
| `PackageDenyPolicy` | `($data): PackageDenyPolicyEntity` | Create a PackageDenyPolicy entity instance. |
| `PackageFilePartsUpload` | `($data): PackageFilePartsUploadEntity` | Create a PackageFilePartsUpload entity instance. |
| `PackageFileUpload` | `($data): PackageFileUploadEntity` | Create a PackageFileUpload entity instance. |
| `PackageLicensePolicyEvaluation` | `($data): PackageLicensePolicyEvaluationEntity` | Create a PackageLicensePolicyEvaluation entity instance. |
| `PackageVersionBadge` | `($data): PackageVersionBadgeEntity` | Create a PackageVersionBadge entity instance. |
| `PackageVulnerabilityPolicyEvaluation` | `($data): PackageVulnerabilityPolicyEvaluationEntity` | Create a PackageVulnerabilityPolicyEvaluation entity instance. |
| `Privilege` | `($data): PrivilegeEntity` | Create a Privilege entity instance. |
| `Profile` | `($data): ProfileEntity` | Create a Profile entity instance. |
| `ProviderSetting` | `($data): ProviderSettingEntity` | Create a ProviderSetting entity instance. |
| `ProviderSettingsWrite` | `($data): ProviderSettingsWriteEntity` | Create a ProviderSettingsWrite entity instance. |
| `Python` | `($data): PythonEntity` | Create a Python entity instance. |
| `Quarantine` | `($data): QuarantineEntity` | Create a Quarantine entity instance. |
| `Quota` | `($data): QuotaEntity` | Create a Quota entity instance. |
| `Raw` | `($data): RawEntity` | Create a Raw entity instance. |
| `Refresh` | `($data): RefreshEntity` | Create a Refresh entity instance. |
| `Regenerate` | `($data): RegenerateEntity` | Create a Regenerate entity instance. |
| `Repo` | `($data): RepoEntity` | Create a Repo entity instance. |
| `RepositoryAuditLog` | `($data): RepositoryAuditLogEntity` | Create a RepositoryAuditLog entity instance. |
| `RepositoryEcdsaKey` | `($data): RepositoryEcdsaKeyEntity` | Create a RepositoryEcdsaKey entity instance. |
| `RepositoryGeoIpRule` | `($data): RepositoryGeoIpRuleEntity` | Create a RepositoryGeoIpRule entity instance. |
| `RepositoryGeoIpStatus` | `($data): RepositoryGeoIpStatusEntity` | Create a RepositoryGeoIpStatus entity instance. |
| `RepositoryGeoIpTestAddress` | `($data): RepositoryGeoIpTestAddressEntity` | Create a RepositoryGeoIpTestAddress entity instance. |
| `RepositoryGpgKey` | `($data): RepositoryGpgKeyEntity` | Create a RepositoryGpgKey entity instance. |
| `RepositoryPrivilegeInput` | `($data): RepositoryPrivilegeInputEntity` | Create a RepositoryPrivilegeInput entity instance. |
| `RepositoryRetentionRule` | `($data): RepositoryRetentionRuleEntity` | Create a RepositoryRetentionRule entity instance. |
| `RepositoryRsaKey` | `($data): RepositoryRsaKeyEntity` | Create a RepositoryRsaKey entity instance. |
| `RepositoryToken` | `($data): RepositoryTokenEntity` | Create a RepositoryToken entity instance. |
| `RepositoryTokenRefresh` | `($data): RepositoryTokenRefreshEntity` | Create a RepositoryTokenRefresh entity instance. |
| `RepositoryTokenSync` | `($data): RepositoryTokenSyncEntity` | Create a RepositoryTokenSync entity instance. |
| `RepositoryWebhook` | `($data): RepositoryWebhookEntity` | Create a RepositoryWebhook entity instance. |
| `RepositoryX509EcdsaCertificate` | `($data): RepositoryX509EcdsaCertificateEntity` | Create a RepositoryX509EcdsaCertificate entity instance. |
| `RepositoryX509RsaCertificate` | `($data): RepositoryX509RsaCertificateEntity` | Create a RepositoryX509RsaCertificate entity instance. |
| `Reset` | `($data): ResetEntity` | Create a Reset entity instance. |
| `ResourcesRateCheck` | `($data): ResourcesRateCheckEntity` | Create a ResourcesRateCheck entity instance. |
| `Resync` | `($data): ResyncEntity` | Create a Resync entity instance. |
| `Retention` | `($data): RetentionEntity` | Create a Retention entity instance. |
| `Rpm` | `($data): RpmEntity` | Create a Rpm entity instance. |
| `Rsa` | `($data): RsaEntity` | Create a Rsa entity instance. |
| `Ruby` | `($data): RubyEntity` | Create a Ruby entity instance. |
| `SamlGroupSync` | `($data): SamlGroupSyncEntity` | Create a SamlGroupSync entity instance. |
| `Scan` | `($data): ScanEntity` | Create a Scan entity instance. |
| `Self` | `($data): SelfEntity` | Create a Self entity instance. |
| `Service` | `($data): ServiceEntity` | Create a Service entity instance. |
| `Status` | `($data): StatusEntity` | Create a Status entity instance. |
| `StatusBasic` | `($data): StatusBasicEntity` | Create a StatusBasic entity instance. |
| `StorageRegion` | `($data): StorageRegionEntity` | Create a StorageRegion entity instance. |
| `Swift` | `($data): SwiftEntity` | Create a Swift entity instance. |
| `Sync` | `($data): SyncEntity` | Create a Sync entity instance. |
| `Tag` | `($data): TagEntity` | Create a Tag entity instance. |
| `Team` | `($data): TeamEntity` | Create a Team entity instance. |
| `Terraform` | `($data): TerraformEntity` | Create a Terraform entity instance. |
| `Test` | `($data): TestEntity` | Create a Test entity instance. |
| `Token` | `($data): TokenEntity` | Create a Token entity instance. |
| `TransferRegion` | `($data): TransferRegionEntity` | Create a TransferRegion entity instance. |
| `User` | `($data): UserEntity` | Create an User entity instance. |
| `UserAuthToken` | `($data): UserAuthTokenEntity` | Create an UserAuthToken entity instance. |
| `UserAuthenticationToken` | `($data): UserAuthenticationTokenEntity` | Create an UserAuthenticationToken entity instance. |
| `UserBrief` | `($data): UserBriefEntity` | Create an UserBrief entity instance. |
| `UserProfile` | `($data): UserProfileEntity` | Create an UserProfile entity instance. |
| `Vagrant` | `($data): VagrantEntity` | Create a Vagrant entity instance. |
| `Validate` | `($data): ValidateEntity` | Create a Validate entity instance. |
| `Version` | `($data): VersionEntity` | Create a Version entity instance. |
| `Vulnerability` | `($data): VulnerabilityEntity` | Create a Vulnerability entity instance. |
| `VulnerabilityPolicy` | `($data): VulnerabilityPolicyEntity` | Create a VulnerabilityPolicy entity instance. |
| `Webhook` | `($data): WebhookEntity` | Create a Webhook entity instance. |
| `X509Ecdsa` | `($data): X509EcdsaEntity` | Create a X509Ecdsa entity instance. |
| `X509Rsa` | `($data): X509RsaEntity` | Create a X509Rsa entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

### Entities

#### Abort

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Alpine

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### AuditLog

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Basic

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Cargo

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/cargo/`

#### Cocoapod

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Complete

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Composer

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/composer/`

#### Conan

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Conda

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/conda/`

#### Copy

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Cran

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/cran/`

#### Dart

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/dart/`

#### Deb

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `component` |  |
| `created_at` |  |
| `disable_reason` |  |
| `distro_version` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `gpg_key_inline` |  |
| `gpg_key_url` |  |
| `gpg_verification` |  |
| `include_source` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_distribution` |  |
| `upstream_url` |  |
| `verification_status` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/deb/`

#### DenyPolicy

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Dependency

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Disable

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### DistributionFull

| Field | Description |
| --- | --- |
| `format` |  |
| `format_url` |  |
| `name` |  |
| `self_url` |  |
| `slug` |  |
| `variant` |  |
| `version` |  |

Operations: List, Load.

API path: `/distros/`

#### Distro

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Docker

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/docker/`

#### DynamicMapping

| Field | Description |
| --- | --- |
| `claim_value` |  |
| `service_account` |  |

Operations: List, Load.

API path: `/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/`

#### Ecdsa

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Enable

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Entitlement

| Field | Description |
| --- | --- |
| `token` |  |

Operations: Create, Load, Remove.

API path: `/entitlements/{owner}/{repo}/{identifier}/reset/`

#### Evaluation

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### File

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/files/{owner}/{repo}/{identifier}/abort/`

#### Format

| Field | Description |
| --- | --- |
| `description` |  |
| `distribution` |  |
| `extension` |  |
| `name` |  |
| `premium` |  |
| `premium_plan_id` |  |
| `premium_plan_name` |  |
| `slug` |  |
| `support` |  |

Operations: List, Load.

API path: `/formats/`

#### Geoip

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon2

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon3

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: List.

API path: `/repos/{owner}/{identifier}/upstream/go/`

#### Gon4

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon5

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/repos/{owner}/{identifier}/upstream/go/`

#### Gon6

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/upstream/go/{slug_perm}/`

#### Gon7

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Gon8

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Update.

API path: `/repos/{owner}/{identifier}/upstream/go/{slug_perm}/`

#### Gon9

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Update.

API path: `/repos/{owner}/{identifier}/upstream/go/{slug_perm}/`

#### Gpg

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Group

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Helm

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/helm/`

#### Hex

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/hex/`

#### History

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Huggingface

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/huggingface/`

#### Info

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Invite

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### LicensePolicy

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Limit

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Luarock

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Maven

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `gpg_key_inline` |  |
| `gpg_key_url` |  |
| `gpg_verification` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verification_status` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/maven/`

#### Member

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Move

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Namespace

| Field | Description |
| --- | --- |
| `name` |  |
| `slug` |  |
| `slug_perm` |  |
| `type_name` |  |

Operations: List, Load.

API path: `/namespaces/`

#### NamespaceAuditLog

| Field | Description |
| --- | --- |
| `actor` |  |
| `actor_ip_address` |  |
| `actor_kind` |  |
| `actor_location` |  |
| `actor_slug_perm` |  |
| `actor_url` |  |
| `context` |  |
| `event` |  |
| `event_at` |  |
| `object` |  |
| `object_kind` |  |
| `object_slug_perm` |  |
| `target` |  |
| `target_kind` |  |
| `target_slug_perm` |  |
| `uuid` |  |

Operations: Load.

API path: `/audit-log/{owner}/`

#### Npm

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/npm/`

#### Nuget

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/nuget/`

#### OpenidConnect

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Org

| Field | Description |
| --- | --- |
| `country` |  |
| `created_at` |  |
| `event_at` |  |
| `location` |  |
| `name` |  |
| `package` |  |
| `policy` |  |
| `reason` |  |
| `slug` |  |
| `slug_perm` |  |
| `tagline` |  |
| `vulnerability_scan_result` |  |

Operations: Create, List, Load, Remove, Update.

API path: `/orgs/{org}/members/{member}/refresh/`

#### OrganizationGroupSync

| Field | Description |
| --- | --- |
| `idp_key` |  |
| `idp_value` |  |
| `role` |  |
| `slug_perm` |  |
| `team` |  |

Operations: Create, List.

API path: `/orgs/{org}/saml-group-sync/`

#### OrganizationGroupSyncStatus

| Field | Description |
| --- | --- |
| `saml_group_sync_status` |  |

Operations: Load.

API path: `/orgs/{org}/saml-group-sync/status/`

#### OrganizationInvite

| Field | Description |
| --- | --- |
| `email` |  |
| `expires_at` |  |
| `inviter` |  |
| `inviter_url` |  |
| `org` |  |
| `role` |  |
| `slug_perm` |  |
| `team` |  |
| `user` |  |
| `user_url` |  |

Operations: Create, List, Update.

API path: `/orgs/{org}/invites/`

#### OrganizationInviteExtend

| Field | Description |
| --- | --- |
| `email` |  |
| `expires_at` |  |
| `inviter` |  |
| `inviter_url` |  |
| `org` |  |
| `role` |  |
| `slug_perm` |  |
| `team` |  |
| `user` |  |
| `user_url` |  |

Operations: Create.

API path: `/orgs/{org}/invites/{slug_perm}/extend/`

#### OrganizationMembership

| Field | Description |
| --- | --- |
| `email` |  |
| `has_two_factor` |  |
| `is_active` |  |
| `joined_at` |  |
| `last_login_at` |  |
| `last_login_method` |  |
| `role` |  |
| `user` |  |
| `user_id` |  |
| `user_name` |  |
| `user_url` |  |
| `visibility` |  |

Operations: List, Load, Update.

API path: `/orgs/{org}/members/`

#### OrganizationMembershipRoleUpdate

| Field | Description |
| --- | --- |
| `email` |  |
| `has_two_factor` |  |
| `joined_at` |  |
| `last_login_at` |  |
| `last_login_method` |  |
| `role` |  |
| `user` |  |
| `user_id` |  |
| `user_name` |  |
| `user_url` |  |
| `visibility` |  |

Operations: Update.

API path: `/orgs/{org}/members/{member}/update-role/`

#### OrganizationMembershipVisibilityUpdate

| Field | Description |
| --- | --- |
| `email` |  |
| `has_two_factor` |  |
| `joined_at` |  |
| `last_login_at` |  |
| `last_login_method` |  |
| `role` |  |
| `user` |  |
| `user_id` |  |
| `user_name` |  |
| `user_url` |  |
| `visibility` |  |

Operations: Update.

API path: `/orgs/{org}/members/{member}/update-visibility/`

#### OrganizationPackageLicensePolicy

| Field | Description |
| --- | --- |
| `allow_unknown_license` |  |
| `created_at` |  |
| `description` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `slug_perm` |  |
| `spdx_identifier` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/license-policy/`

#### OrganizationPackageVulnerabilityPolicy

| Field | Description |
| --- | --- |
| `allow_unknown_severity` |  |
| `created_at` |  |
| `description` |  |
| `min_severity` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `slug_perm` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/vulnerability-policy/`

#### OrganizationSamlAuth

| Field | Description |
| --- | --- |
| `saml_auth_enabled` |  |
| `saml_auth_enforced` |  |
| `saml_metadata_inline` |  |
| `saml_metadata_url` |  |

Operations: Load, Update.

API path: `/orgs/{org}/saml-authentication`

#### OrganizationTeam

| Field | Description |
| --- | --- |
| `description` |  |
| `name` |  |
| `slug` |  |
| `slug_perm` |  |
| `visibility` |  |

Operations: Create, List, Load, Update.

API path: `/orgs/{org}/teams/`

#### OrganizationTeamMember

| Field | Description |
| --- | --- |
| `role` |  |
| `user` |  |

Operations: Create, List.

API path: `/orgs/{org}/teams/{team}/members`

#### Oss

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### P2n

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### P2n2

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Package

| Field | Description |
| --- | --- |
| `architecture` |  |
| `backend_kind` |  |
| `cdn_url` |  |
| `checksum_md5` |  |
| `checksum_sha1` |  |
| `checksum_sha256` |  |
| `checksum_sha512` |  |
| `count` |  |
| `dep_type` |  |
| `dependencies_checksum_md5` |  |
| `dependencies_url` |  |
| `description` |  |
| `display_name` |  |
| `distro` |  |
| `distro_version` |  |
| `download` |  |
| `epoch` |  |
| `extension` |  |
| `file` |  |
| `filename` |  |
| `format` |  |
| `format_url` |  |
| `freeable_storage` |  |
| `fully_qualified_name` |  |
| `identifier` |  |
| `identifier_perm` |  |
| `indexed` |  |
| `is_cancellable` |  |
| `is_copyable` |  |
| `is_deleteable` |  |
| `is_downloadable` |  |
| `is_moveable` |  |
| `is_quarantinable` |  |
| `is_quarantined` |  |
| `is_resyncable` |  |
| `is_security_scannable` |  |
| `is_sync_awaiting` |  |
| `is_sync_completed` |  |
| `is_sync_failed` |  |
| `is_sync_in_flight` |  |
| `is_sync_in_progress` |  |
| `last_push` |  |
| `license` |  |
| `name` |  |
| `namespace` |  |
| `namespace_url` |  |
| `num_download` |  |
| `num_file` |  |
| `operator` |  |
| `origin_repository` |  |
| `origin_repository_url` |  |
| `package` |  |
| `package_type` |  |
| `policy_violated` |  |
| `release` |  |
| `repository` |  |
| `repository_url` |  |
| `security_scan_completed_at` |  |
| `security_scan_started_at` |  |
| `security_scan_status` |  |
| `security_scan_status_updated_at` |  |
| `self_html_url` |  |
| `self_url` |  |
| `signature_url` |  |
| `size` |  |
| `slug` |  |
| `slug_perm` |  |
| `stage` |  |
| `stage_str` |  |
| `stage_updated_at` |  |
| `status` |  |
| `status_reason` |  |
| `status_str` |  |
| `status_updated_at` |  |
| `status_url` |  |
| `subtype` |  |
| `summary` |  |
| `sync_finished_at` |  |
| `sync_progress` |  |
| `tag` |  |
| `tags_immutable` |  |
| `type_display` |  |
| `uploaded_at` |  |
| `uploader` |  |
| `uploader_url` |  |
| `version` |  |
| `version_orig` |  |
| `vulnerability_scan_results_url` |  |

Operations: Create, List, Load, Remove.

API path: `/packages/{owner}/{repo}/{identifier}/copy/`

#### PackageDenyPolicy

| Field | Description |
| --- | --- |
| `action` |  |
| `created_at` |  |
| `description` |  |
| `enabled` |  |
| `name` |  |
| `package_query_string` |  |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/deny-policy/`

#### PackageFilePartsUpload

| Field | Description |
| --- | --- |
| `identifier` |  |
| `upload_querystring` |  |
| `upload_url` |  |

Operations: Load.

API path: `/files/{owner}/{repo}/{identifier}/info/`

#### PackageFileUpload

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/files/{owner}/{repo}/{identifier}/complete/`

#### PackageLicensePolicyEvaluation

| Field | Description |
| --- | --- |
| `created_at` |  |
| `evaluation_count` |  |
| `policy` |  |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |
| `violation_count` |  |

Operations: Create, List, Load.

API path: `/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/`

#### PackageVersionBadge

| Field | Description |
| --- | --- |

Operations: Load.

API path: `/badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/`

#### PackageVulnerabilityPolicyEvaluation

| Field | Description |
| --- | --- |
| `created_at` |  |
| `evaluation_count` |  |
| `policy` |  |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |
| `violation_count` |  |

Operations: Create, List, Load.

API path: `/orgs/{org}/vulnerability-policy/{policy_slug_perm}/evaluation/`

#### Privilege

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Profile

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ProviderSetting

| Field | Description |
| --- | --- |
| `claim` |  |
| `enabled` |  |
| `mapping_claim` |  |
| `name` |  |
| `provider_url` |  |
| `service_account` |  |
| `slug` |  |
| `slug_perm` |  |

Operations: List, Load.

API path: `/orgs/{org}/openid-connect/`

#### ProviderSettingsWrite

| Field | Description |
| --- | --- |
| `claim` |  |
| `dynamic_mapping` |  |
| `enabled` |  |
| `mapping_claim` |  |
| `name` |  |
| `provider_url` |  |
| `service_account` |  |
| `slug` |  |
| `slug_perm` |  |

Operations: Create, Patch, Update.

API path: `/orgs/{org}/openid-connect/`

#### Python

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/python/`

#### Quarantine

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Quota

| Field | Description |
| --- | --- |
| `history` |  |
| `usage` |  |

Operations: Load.

API path: `/quota/{owner}/`

#### Raw

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Refresh

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Regenerate

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Repo

| Field | Description |
| --- | --- |
| `cdn_url` |  |
| `content_kind` |  |
| `contextual_auth_realm` |  |
| `copy_own` |  |
| `copy_package` |  |
| `cosign_signing_enabled` |  |
| `created_at` |  |
| `default_privilege` |  |
| `delete_own` |  |
| `delete_package` |  |
| `deleted_at` |  |
| `description` |  |
| `distribute` |  |
| `docker_refresh_tokens_enabled` |  |
| `ecdsa_key` |  |
| `enforce_eula` |  |
| `gpg_key` |  |
| `index_file` |  |
| `is_open_source` |  |
| `is_private` |  |
| `is_public` |  |
| `manage_entitlements_privilege` |  |
| `move_own` |  |
| `move_package` |  |
| `name` |  |
| `namespace` |  |
| `namespace_url` |  |
| `nuget_native_signing_enabled` |  |
| `num_download` |  |
| `num_policy_violated_package` |  |
| `num_quarantined_package` |  |
| `open_source_license` |  |
| `open_source_project_url` |  |
| `package_count` |  |
| `package_group_count` |  |
| `proxy_npmj` |  |
| `proxy_pypi` |  |
| `raw_package_index_enabled` |  |
| `raw_package_index_signatures_enabled` |  |
| `replace_package` |  |
| `replace_packages_by_default` |  |
| `repository_type` |  |
| `repository_type_str` |  |
| `resync_own` |  |
| `resync_package` |  |
| `scan_own` |  |
| `scan_package` |  |
| `self_html_url` |  |
| `self_url` |  |
| `show_setup_all` |  |
| `size` |  |
| `size_str` |  |
| `slug` |  |
| `slug_perm` |  |
| `storage_region` |  |
| `strict_npm_validation` |  |
| `tag_pre_releases_as_latest` |  |
| `use_debian_label` |  |
| `use_default_cargo_upstream` |  |
| `use_entitlements_privilege` |  |
| `use_noarch_package` |  |
| `use_source_package` |  |
| `use_vulnerability_scanning` |  |
| `user_entitlements_enabled` |  |
| `view_statistic` |  |

Operations: Create, List, Load, Patch, Remove, Update.

API path: `/repos/{owner}/{identifier}/geoip/disable/`

#### RepositoryAuditLog

| Field | Description |
| --- | --- |
| `actor` |  |
| `actor_ip_address` |  |
| `actor_kind` |  |
| `actor_location` |  |
| `actor_slug_perm` |  |
| `actor_url` |  |
| `context` |  |
| `event` |  |
| `event_at` |  |
| `object` |  |
| `object_kind` |  |
| `object_slug_perm` |  |
| `uuid` |  |

Operations: List.

API path: `/audit-log/{owner}/{repo}/`

#### RepositoryEcdsaKey

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `default` |  |
| `fingerprint` |  |
| `fingerprint_short` |  |
| `public_key` |  |
| `ssh_fingerprint` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/ecdsa/`

#### RepositoryGeoIpRule

| Field | Description |
| --- | --- |
| `cidr` |  |
| `country_code` |  |

Operations: Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/geoip`

#### RepositoryGeoIpStatus

| Field | Description |
| --- | --- |
| `geoip_enabled` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/geoip/status/`

#### RepositoryGeoIpTestAddress

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/repos/{owner}/{identifier}/geoip/test/`

#### RepositoryGpgKey

| Field | Description |
| --- | --- |
| `active` |  |
| `comment` |  |
| `created_at` |  |
| `default` |  |
| `fingerprint` |  |
| `fingerprint_short` |  |
| `public_key` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/gpg/`

#### RepositoryPrivilegeInput

| Field | Description |
| --- | --- |
| `privilege` |  |
| `service` |  |
| `team` |  |
| `user` |  |

Operations: List.

API path: `/repos/{owner}/{identifier}/privileges`

#### RepositoryRetentionRule

| Field | Description |
| --- | --- |
| `retention_count_limit` |  |
| `retention_days_limit` |  |
| `retention_enabled` |  |
| `retention_group_by_format` |  |
| `retention_group_by_name` |  |
| `retention_group_by_package_type` |  |
| `retention_package_query_string` |  |
| `retention_size_limit` |  |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/retention/`

#### RepositoryRsaKey

| Field | Description |
| --- | --- |
| `active` |  |
| `created_at` |  |
| `default` |  |
| `fingerprint` |  |
| `fingerprint_short` |  |
| `public_key` |  |
| `ssh_fingerprint` |  |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/rsa/`

#### RepositoryToken

| Field | Description |
| --- | --- |
| `client` |  |
| `created_at` |  |
| `created_by` |  |
| `created_by_url` |  |
| `default` |  |
| `disable_url` |  |
| `download` |  |
| `enable_url` |  |
| `eula_accepted` |  |
| `eula_accepted_at` |  |
| `eula_accepted_from` |  |
| `eula_required` |  |
| `has_limit` |  |
| `identifier` |  |
| `is_active` |  |
| `is_limited` |  |
| `limit_bandwidth` |  |
| `limit_bandwidth_unit` |  |
| `limit_date_range_from` |  |
| `limit_date_range_to` |  |
| `limit_num_client` |  |
| `limit_num_download` |  |
| `limit_package_query` |  |
| `limit_path_query` |  |
| `metadata` |  |
| `name` |  |
| `refresh_url` |  |
| `reset_url` |  |
| `scheduled_reset_at` |  |
| `scheduled_reset_period` |  |
| `self_url` |  |
| `slug_perm` |  |
| `token` |  |
| `updated_at` |  |
| `updated_by` |  |
| `updated_by_url` |  |
| `usage` |  |
| `user` |  |
| `user_url` |  |

Operations: Create, List, Load, Update.

API path: `/entitlements/{owner}/{repo}/`

#### RepositoryTokenRefresh

| Field | Description |
| --- | --- |
| `client` |  |
| `created_at` |  |
| `created_by` |  |
| `created_by_url` |  |
| `default` |  |
| `disable_url` |  |
| `download` |  |
| `enable_url` |  |
| `eula_accepted` |  |
| `eula_accepted_at` |  |
| `eula_accepted_from` |  |
| `eula_required` |  |
| `has_limit` |  |
| `identifier` |  |
| `is_active` |  |
| `is_limited` |  |
| `limit_bandwidth` |  |
| `limit_bandwidth_unit` |  |
| `limit_date_range_from` |  |
| `limit_date_range_to` |  |
| `limit_num_client` |  |
| `limit_num_download` |  |
| `limit_package_query` |  |
| `limit_path_query` |  |
| `metadata` |  |
| `name` |  |
| `refresh_url` |  |
| `reset_url` |  |
| `scheduled_reset_at` |  |
| `scheduled_reset_period` |  |
| `self_url` |  |
| `slug_perm` |  |
| `token` |  |
| `updated_at` |  |
| `updated_by` |  |
| `updated_by_url` |  |
| `usage` |  |
| `user` |  |
| `user_url` |  |

Operations: Create.

API path: `/entitlements/{owner}/{repo}/{identifier}/refresh/`

#### RepositoryTokenSync

| Field | Description |
| --- | --- |
| `token` |  |

Operations: Create.

API path: `/entitlements/{owner}/{repo}/sync/`

#### RepositoryWebhook

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `created_by_url` |  |
| `disable_reason` |  |
| `disable_reason_str` |  |
| `event` |  |
| `identifier` |  |
| `is_active` |  |
| `is_last_response_bad` |  |
| `last_response_status` |  |
| `last_response_status_str` |  |
| `num_sent` |  |
| `package_query` |  |
| `request_body_format` |  |
| `request_body_format_str` |  |
| `request_body_template_format` |  |
| `request_body_template_format_str` |  |
| `request_content_type` |  |
| `secret_header` |  |
| `self_url` |  |
| `slug_perm` |  |
| `target_url` |  |
| `template` |  |
| `updated_at` |  |
| `updated_by` |  |
| `updated_by_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Update.

API path: `/webhooks/{owner}/{repo}/`

#### RepositoryX509EcdsaCertificate

| Field | Description |
| --- | --- |
| `active` |  |
| `certificate` |  |
| `certificate_chain` |  |
| `certificate_chain_fingerprint` |  |
| `certificate_chain_fingerprint_short` |  |
| `certificate_fingerprint` |  |
| `certificate_fingerprint_short` |  |
| `created_at` |  |
| `default` |  |
| `issuing_status` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/x509-ecdsa/`

#### RepositoryX509RsaCertificate

| Field | Description |
| --- | --- |
| `active` |  |
| `certificate` |  |
| `certificate_chain` |  |
| `certificate_chain_fingerprint` |  |
| `certificate_chain_fingerprint_short` |  |
| `certificate_fingerprint` |  |
| `certificate_fingerprint_short` |  |
| `created_at` |  |
| `default` |  |
| `issuing_status` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/x509-rsa/`

#### Reset

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### ResourcesRateCheck

| Field | Description |
| --- | --- |
| `resource` |  |

Operations: Load.

API path: `/rates/limits/`

#### Resync

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Retention

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Rpm

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `distro_version` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `gpg_key_inline` |  |
| `gpg_key_url` |  |
| `gpg_verification` |  |
| `include_source` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verification_status` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/rpm/`

#### Rsa

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Ruby

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/ruby/`

#### SamlGroupSync

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Scan

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Self

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Service

| Field | Description |
| --- | --- |
| `created_at` |  |
| `created_by` |  |
| `created_by_url` |  |
| `description` |  |
| `key` |  |
| `key_expires_at` |  |
| `name` |  |
| `role` |  |
| `slug` |  |
| `team` |  |

Operations: Create, List, Load, Update.

API path: `/orgs/{org}/services/`

#### Status

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### StatusBasic

| Field | Description |
| --- | --- |
| `detail` |  |
| `version` |  |

Operations: Load.

API path: `/status/check/basic/`

#### StorageRegion

| Field | Description |
| --- | --- |
| `label` |  |
| `slug` |  |

Operations: List, Load.

API path: `/storage-regions/`

#### Swift

| Field | Description |
| --- | --- |
| `auth_mode` |  |
| `auth_secret` |  |
| `auth_username` |  |
| `created_at` |  |
| `disable_reason` |  |
| `extra_header_1` |  |
| `extra_header_2` |  |
| `extra_value_1` |  |
| `extra_value_2` |  |
| `is_active` |  |
| `mode` |  |
| `name` |  |
| `pending_validation` |  |
| `priority` |  |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` |  |
| `verify_ssl` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/swift/`

#### Sync

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Tag

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Team

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Terraform

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Test

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Token

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### TransferRegion

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### User

| Field | Description |
| --- | --- |
| `created` |  |
| `key` |  |
| `slug_perm` |  |

Operations: List.

API path: `/user/tokens/`

#### UserAuthToken

| Field | Description |
| --- | --- |

Operations: Create.

API path: `/user/token/`

#### UserAuthenticationToken

| Field | Description |
| --- | --- |
| `created` |  |
| `key` |  |
| `slug_perm` |  |

Operations: Create, Update.

API path: `/user/tokens/`

#### UserBrief

| Field | Description |
| --- | --- |
| `authenticated` |  |
| `email` |  |
| `name` |  |
| `profile_url` |  |
| `self_url` |  |
| `slug` |  |
| `slug_perm` |  |

Operations: Load.

API path: `/user/self/`

#### UserProfile

| Field | Description |
| --- | --- |
| `company` |  |
| `first_name` |  |
| `job_title` |  |
| `joined_at` |  |
| `last_name` |  |
| `name` |  |
| `slug` |  |
| `slug_perm` |  |
| `tagline` |  |
| `url` |  |

Operations: Load.

API path: `/users/profile/{slug}/`

#### Vagrant

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Validate

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Version

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Vulnerability

| Field | Description |
| --- | --- |
| `created_at` |  |
| `has_vulnerability` |  |
| `identifier` |  |
| `max_severity` |  |
| `num_vulnerability` |  |
| `package` |  |
| `result` |  |
| `scan_id` |  |
| `target` |  |
| `type` |  |

Operations: List, Load.

API path: `/vulnerabilities/{owner}/{repo}/{package}/`

#### VulnerabilityPolicy

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### Webhook

| Field | Description |
| --- | --- |

Operations: Remove.

API path: `/webhooks/{owner}/{repo}/{identifier}/`

#### X509Ecdsa

| Field | Description |
| --- | --- |

Operations: .

API path: ``

#### X509Rsa

| Field | Description |
| --- | --- |

Operations: .

API path: ``



## Entities


### Abort

Create an instance: `$abort = $client->Abort();`


### Alpine

Create an instance: `$alpine = $client->Alpine();`


### AuditLog

Create an instance: `$audit_log = $client->AuditLog();`


### Basic

Create an instance: `$basic = $client->Basic();`


### Cargo

Create an instance: `$cargo = $client->Cargo();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Cargo record (throws on error).
$cargo = $client->Cargo()->load(["id" => "cargo_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Cargo records (throws on error).
$cargos = $client->Cargo()->list();
```

#### Example: Create

```php
$cargo = $client->Cargo()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Cocoapod

Create an instance: `$cocoapod = $client->Cocoapod();`


### Complete

Create an instance: `$complete = $client->Complete();`


### Composer

Create an instance: `$composer = $client->Composer();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Composer record (throws on error).
$composer = $client->Composer()->load(["id" => "composer_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Composer records (throws on error).
$composers = $client->Composer()->list();
```

#### Example: Create

```php
$composer = $client->Composer()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Conan

Create an instance: `$conan = $client->Conan();`


### Conda

Create an instance: `$conda = $client->Conda();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Conda record (throws on error).
$conda = $client->Conda()->load(["id" => "conda_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Conda records (throws on error).
$condas = $client->Conda()->list();
```

#### Example: Create

```php
$conda = $client->Conda()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Copy

Create an instance: `$copy = $client->Copy();`


### Cran

Create an instance: `$cran = $client->Cran();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Cran record (throws on error).
$cran = $client->Cran()->load(["id" => "cran_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Cran records (throws on error).
$crans = $client->Cran()->list();
```

#### Example: Create

```php
$cran = $client->Cran()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Dart

Create an instance: `$dart = $client->Dart();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Dart record (throws on error).
$dart = $client->Dart()->load(["id" => "dart_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Dart records (throws on error).
$darts = $client->Dart()->list();
```

#### Example: Create

```php
$dart = $client->Dart()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Deb

Create an instance: `$deb = $client->Deb();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `component` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `distro_version` | `array` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `gpg_key_inline` | `string` |  |
| `gpg_key_url` | `string` |  |
| `gpg_verification` | `string` |  |
| `include_source` | `bool` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_distribution` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Deb record (throws on error).
$deb = $client->Deb()->load(["id" => "deb_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Deb records (throws on error).
$debs = $client->Deb()->list();
```

#### Example: Create

```php
$deb = $client->Deb()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### DenyPolicy

Create an instance: `$deny_policy = $client->DenyPolicy();`


### Dependency

Create an instance: `$dependency = $client->Dependency();`


### Disable

Create an instance: `$disable = $client->Disable();`


### DistributionFull

Create an instance: `$distribution_full = $client->DistributionFull();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `name` | `string` |  |
| `self_url` | `string` |  |
| `slug` | `string` |  |
| `variant` | `string` |  |
| `version` | `array` |  |

#### Example: Load

```php
// load() returns the bare DistributionFull record (throws on error).
$distribution_full = $client->DistributionFull()->load(["slug" => "slug"]);
```

#### Example: List

```php
// list() returns an array of DistributionFull records (throws on error).
$distribution_fulls = $client->DistributionFull()->list();
```


### Distro

Create an instance: `$distro = $client->Distro();`


### Docker

Create an instance: `$docker = $client->Docker();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Docker record (throws on error).
$docker = $client->Docker()->load(["id" => "docker_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Docker records (throws on error).
$dockers = $client->Docker()->list();
```

#### Example: Create

```php
$docker = $client->Docker()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### DynamicMapping

Create an instance: `$dynamic_mapping = $client->DynamicMapping();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim_value` | `string` |  |
| `service_account` | `string` |  |

#### Example: Load

```php
// load() returns the bare DynamicMapping record (throws on error).
$dynamic_mapping = $client->DynamicMapping()->load(["id" => "dynamic_mapping_id", "openid_connect_id" => "openid_connect_id", "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of DynamicMapping records (throws on error).
$dynamic_mappings = $client->DynamicMapping()->list();
```


### Ecdsa

Create an instance: `$ecdsa = $client->Ecdsa();`


### Enable

Create an instance: `$enable = $client->Enable();`


### Entitlement

Create an instance: `$entitlement = $client->Entitlement();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `token` | `array` |  |

#### Example: Load

```php
// load() returns the bare Entitlement record (throws on error).
$entitlement = $client->Entitlement()->load(["id" => "entitlement_id"]);
```

#### Example: Create

```php
$entitlement = $client->Entitlement()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
    "repo" => null, // mixed
]);
```


### Evaluation

Create an instance: `$evaluation = $client->Evaluation();`


### File

Create an instance: `$file = $client->File();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$file = $client->File()->create([
    "owner" => null, // mixed
    "repo" => null, // mixed
]);
```


### Format

Create an instance: `$format = $client->Format();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `distribution` | `array` |  |
| `extension` | `array` |  |
| `name` | `string` |  |
| `premium` | `bool` |  |
| `premium_plan_id` | `string` |  |
| `premium_plan_name` | `string` |  |
| `slug` | `string` |  |
| `support` | `array` |  |

#### Example: Load

```php
// load() returns the bare Format record (throws on error).
$format = $client->Format()->load(["id" => "format_id"]);
```

#### Example: List

```php
// list() returns an array of Format records (throws on error).
$formats = $client->Format()->list();
```


### Geoip

Create an instance: `$geoip = $client->Geoip();`


### Gon

Create an instance: `$gon = $client->Gon();`


### Gon2

Create an instance: `$gon2 = $client->Gon2();`


### Gon3

Create an instance: `$gon3 = $client->Gon3();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: List

```php
// list() returns an array of Gon3 records (throws on error).
$gon3s = $client->Gon3()->list();
```


### Gon4

Create an instance: `$gon4 = $client->Gon4();`


### Gon5

Create an instance: `$gon5 = $client->Gon5();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$gon5 = $client->Gon5()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Gon6

Create an instance: `$gon6 = $client->Gon6();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Gon6 record (throws on error).
$gon6 = $client->Gon6()->load(["identifier" => "identifier", "owner" => "owner", "slug_perm" => "slug_perm"]);
```


### Gon7

Create an instance: `$gon7 = $client->Gon7();`


### Gon8

Create an instance: `$gon8 = $client->Gon8();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |


### Gon9

Create an instance: `$gon9 = $client->Gon9();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |


### Gpg

Create an instance: `$gpg = $client->Gpg();`


### Group

Create an instance: `$group = $client->Group();`


### Helm

Create an instance: `$helm = $client->Helm();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Helm record (throws on error).
$helm = $client->Helm()->load(["id" => "helm_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Helm records (throws on error).
$helms = $client->Helm()->list();
```

#### Example: Create

```php
$helm = $client->Helm()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Hex

Create an instance: `$hex = $client->Hex();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Hex record (throws on error).
$hex = $client->Hex()->load(["id" => "hex_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Hex records (throws on error).
$hexs = $client->Hex()->list();
```

#### Example: Create

```php
$hex = $client->Hex()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### History

Create an instance: `$history = $client->History();`


### Huggingface

Create an instance: `$huggingface = $client->Huggingface();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Huggingface record (throws on error).
$huggingface = $client->Huggingface()->load(["id" => "huggingface_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Huggingface records (throws on error).
$huggingfaces = $client->Huggingface()->list();
```

#### Example: Create

```php
$huggingface = $client->Huggingface()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Info

Create an instance: `$info = $client->Info();`


### Invite

Create an instance: `$invite = $client->Invite();`


### LicensePolicy

Create an instance: `$license_policy = $client->LicensePolicy();`


### Limit

Create an instance: `$limit = $client->Limit();`


### Luarock

Create an instance: `$luarock = $client->Luarock();`


### Maven

Create an instance: `$maven = $client->Maven();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `gpg_key_inline` | `string` |  |
| `gpg_key_url` | `string` |  |
| `gpg_verification` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Maven record (throws on error).
$maven = $client->Maven()->load(["id" => "maven_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Maven records (throws on error).
$mavens = $client->Maven()->list();
```

#### Example: Create

```php
$maven = $client->Maven()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Member

Create an instance: `$member = $client->Member();`


### Move

Create an instance: `$move = $client->Move();`


### Namespace

Create an instance: `$namespace = $client->Namespace();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `name` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `type_name` | `string` |  |

#### Example: Load

```php
// load() returns the bare Namespace record (throws on error).
$namespace = $client->Namespace()->load(["id" => "namespace_id"]);
```

#### Example: List

```php
// list() returns an array of Namespace records (throws on error).
$namespaces = $client->Namespace()->list();
```


### NamespaceAuditLog

Create an instance: `$namespace_audit_log = $client->NamespaceAuditLog();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `string` |  |
| `actor_ip_address` | `string` |  |
| `actor_kind` | `string` |  |
| `actor_location` | `array` |  |
| `actor_slug_perm` | `string` |  |
| `actor_url` | `string` |  |
| `context` | `string` |  |
| `event` | `string` |  |
| `event_at` | `string` |  |
| `object` | `string` |  |
| `object_kind` | `string` |  |
| `object_slug_perm` | `string` |  |
| `target` | `string` |  |
| `target_kind` | `string` |  |
| `target_slug_perm` | `string` |  |
| `uuid` | `string` |  |

#### Example: Load

```php
// load() returns the bare NamespaceAuditLog record (throws on error).
$namespace_audit_log = $client->NamespaceAuditLog()->load(["id" => "namespace_audit_log_id"]);
```


### Npm

Create an instance: `$npm = $client->Npm();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Npm record (throws on error).
$npm = $client->Npm()->load(["id" => "npm_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Npm records (throws on error).
$npms = $client->Npm()->list();
```

#### Example: Create

```php
$npm = $client->Npm()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Nuget

Create an instance: `$nuget = $client->Nuget();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Nuget record (throws on error).
$nuget = $client->Nuget()->load(["id" => "nuget_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Nuget records (throws on error).
$nugets = $client->Nuget()->list();
```

#### Example: Create

```php
$nuget = $client->Nuget()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### OpenidConnect

Create an instance: `$openid_connect = $client->OpenidConnect();`


### Org

Create an instance: `$org = $client->Org();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `country` | `string` |  |
| `created_at` | `string` |  |
| `event_at` | `string` |  |
| `location` | `string` |  |
| `name` | `string` |  |
| `package` | `array` |  |
| `policy` | `array` |  |
| `reason` | `array` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `tagline` | `string` |  |
| `vulnerability_scan_result` | `array` |  |

#### Example: Load

```php
// load() returns the bare Org record (throws on error).
$org = $client->Org()->load(["id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of Org records (throws on error).
$orgs = $client->Org()->list();
```

#### Example: Create

```php
$org = $client->Org()->create([
    "id" => null, // string
]);
```


### OrganizationGroupSync

Create an instance: `$organization_group_sync = $client->OrganizationGroupSync();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `idp_key` | `string` |  |
| `idp_value` | `string` |  |
| `role` | `string` |  |
| `slug_perm` | `string` |  |
| `team` | `string` |  |

#### Example: List

```php
// list() returns an array of OrganizationGroupSync records (throws on error).
$organization_group_syncs = $client->OrganizationGroupSync()->list();
```

#### Example: Create

```php
$organization_group_sync = $client->OrganizationGroupSync()->create([
    "org_id" => null, // string
]);
```


### OrganizationGroupSyncStatus

Create an instance: `$organization_group_sync_status = $client->OrganizationGroupSyncStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_group_sync_status` | `bool` |  |

#### Example: Load

```php
// load() returns the bare OrganizationGroupSyncStatus record (throws on error).
$organization_group_sync_status = $client->OrganizationGroupSyncStatus()->load(["org_id" => "org_id"]);
```


### OrganizationInvite

Create an instance: `$organization_invite = $client->OrganizationInvite();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` |  |
| `slug_perm` | `string` |  |
| `team` | `array` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: List

```php
// list() returns an array of OrganizationInvite records (throws on error).
$organization_invites = $client->OrganizationInvite()->list();
```

#### Example: Create

```php
$organization_invite = $client->OrganizationInvite()->create([
    "org_id" => null, // string
]);
```


### OrganizationInviteExtend

Create an instance: `$organization_invite_extend = $client->OrganizationInviteExtend();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` |  |
| `slug_perm` | `string` |  |
| `team` | `array` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: Create

```php
$organization_invite_extend = $client->OrganizationInviteExtend()->create([
    "org_id" => null, // string
    "slug_perm" => null, // mixed
]);
```


### OrganizationMembership

Create an instance: `$organization_membership = $client->OrganizationMembership();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `bool` |  |
| `is_active` | `bool` |  |
| `joined_at` | `string` |  |
| `last_login_at` | `string` |  |
| `last_login_method` | `string` |  |
| `role` | `string` |  |
| `user` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `user_url` | `string` |  |
| `visibility` | `string` |  |

#### Example: Load

```php
// load() returns the bare OrganizationMembership record (throws on error).
$organization_membership = $client->OrganizationMembership()->load(["member" => "member", "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of OrganizationMembership records (throws on error).
$organization_memberships = $client->OrganizationMembership()->list();
```


### OrganizationMembershipRoleUpdate

Create an instance: `$organization_membership_role_update = $client->OrganizationMembershipRoleUpdate();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `bool` |  |
| `joined_at` | `string` |  |
| `last_login_at` | `string` |  |
| `last_login_method` | `string` |  |
| `role` | `string` |  |
| `user` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `user_url` | `string` |  |
| `visibility` | `string` |  |


### OrganizationMembershipVisibilityUpdate

Create an instance: `$organization_membership_visibility_update = $client->OrganizationMembershipVisibilityUpdate();`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `bool` |  |
| `joined_at` | `string` |  |
| `last_login_at` | `string` |  |
| `last_login_method` | `string` |  |
| `role` | `string` |  |
| `user` | `string` |  |
| `user_id` | `string` |  |
| `user_name` | `string` |  |
| `user_url` | `string` |  |
| `visibility` | `string` |  |


### OrganizationPackageLicensePolicy

Create an instance: `$organization_package_license_policy = $client->OrganizationPackageLicensePolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_license` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `spdx_identifier` | `array` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare OrganizationPackageLicensePolicy record (throws on error).
$organization_package_license_policy = $client->OrganizationPackageLicensePolicy()->load(["id" => "organization_package_license_policy_id", "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of OrganizationPackageLicensePolicy records (throws on error).
$organization_package_license_policys = $client->OrganizationPackageLicensePolicy()->list();
```

#### Example: Create

```php
$organization_package_license_policy = $client->OrganizationPackageLicensePolicy()->create([
    "org_id" => null, // string
]);
```


### OrganizationPackageVulnerabilityPolicy

Create an instance: `$organization_package_vulnerability_policy = $client->OrganizationPackageVulnerabilityPolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `allow_unknown_severity` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `min_severity` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare OrganizationPackageVulnerabilityPolicy record (throws on error).
$organization_package_vulnerability_policy = $client->OrganizationPackageVulnerabilityPolicy()->load(["id" => "organization_package_vulnerability_policy_id", "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of OrganizationPackageVulnerabilityPolicy records (throws on error).
$organization_package_vulnerability_policys = $client->OrganizationPackageVulnerabilityPolicy()->list();
```

#### Example: Create

```php
$organization_package_vulnerability_policy = $client->OrganizationPackageVulnerabilityPolicy()->create([
    "org_id" => null, // string
]);
```


### OrganizationSamlAuth

Create an instance: `$organization_saml_auth = $client->OrganizationSamlAuth();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_auth_enabled` | `bool` |  |
| `saml_auth_enforced` | `bool` |  |
| `saml_metadata_inline` | `string` |  |
| `saml_metadata_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare OrganizationSamlAuth record (throws on error).
$organization_saml_auth = $client->OrganizationSamlAuth()->load(["org_id" => "org_id"]);
```


### OrganizationTeam

Create an instance: `$organization_team = $client->OrganizationTeam();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `visibility` | `string` |  |

#### Example: Load

```php
// load() returns the bare OrganizationTeam record (throws on error).
$organization_team = $client->OrganizationTeam()->load(["id" => "organization_team_id", "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of OrganizationTeam records (throws on error).
$organization_teams = $client->OrganizationTeam()->list();
```

#### Example: Create

```php
$organization_team = $client->OrganizationTeam()->create([
    "org_id" => null, // string
]);
```


### OrganizationTeamMember

Create an instance: `$organization_team_member = $client->OrganizationTeamMember();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `role` | `string` |  |
| `user` | `string` |  |

#### Example: List

```php
// list() returns an array of OrganizationTeamMember records (throws on error).
$organization_team_members = $client->OrganizationTeamMember()->list();
```

#### Example: Create

```php
$organization_team_member = $client->OrganizationTeamMember()->create([
    "org_id" => null, // string
    "team_id" => null, // string
]);
```


### Oss

Create an instance: `$oss = $client->Oss();`


### P2n

Create an instance: `$p2n = $client->P2n();`


### P2n2

Create an instance: `$p2n2 = $client->P2n2();`


### Package

Create an instance: `$package = $client->Package();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `architecture` | `array` |  |
| `backend_kind` | `int` |  |
| `cdn_url` | `string` |  |
| `checksum_md5` | `string` |  |
| `checksum_sha1` | `string` |  |
| `checksum_sha256` | `string` |  |
| `checksum_sha512` | `string` |  |
| `count` | `int` |  |
| `dep_type` | `string` |  |
| `dependencies_checksum_md5` | `string` |  |
| `dependencies_url` | `string` |  |
| `description` | `string` |  |
| `display_name` | `string` |  |
| `distro` | `array` |  |
| `distro_version` | `array` |  |
| `download` | `int` |  |
| `epoch` | `int` |  |
| `extension` | `string` |  |
| `file` | `array` |  |
| `filename` | `string` |  |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `freeable_storage` | `int` |  |
| `fully_qualified_name` | `string` |  |
| `identifier` | `array` |  |
| `identifier_perm` | `string` |  |
| `indexed` | `bool` |  |
| `is_cancellable` | `bool` |  |
| `is_copyable` | `bool` |  |
| `is_deleteable` | `bool` |  |
| `is_downloadable` | `bool` |  |
| `is_moveable` | `bool` |  |
| `is_quarantinable` | `bool` |  |
| `is_quarantined` | `bool` |  |
| `is_resyncable` | `bool` |  |
| `is_security_scannable` | `bool` |  |
| `is_sync_awaiting` | `bool` |  |
| `is_sync_completed` | `bool` |  |
| `is_sync_failed` | `bool` |  |
| `is_sync_in_flight` | `bool` |  |
| `is_sync_in_progress` | `bool` |  |
| `last_push` | `string` |  |
| `license` | `string` |  |
| `name` | `string` |  |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `num_download` | `int` |  |
| `num_file` | `int` |  |
| `operator` | `string` |  |
| `origin_repository` | `string` |  |
| `origin_repository_url` | `string` |  |
| `package` | `array` |  |
| `package_type` | `int` |  |
| `policy_violated` | `bool` |  |
| `release` | `string` |  |
| `repository` | `string` |  |
| `repository_url` | `string` |  |
| `security_scan_completed_at` | `string` |  |
| `security_scan_started_at` | `string` |  |
| `security_scan_status` | `string` |  |
| `security_scan_status_updated_at` | `string` |  |
| `self_html_url` | `string` |  |
| `self_url` | `string` |  |
| `signature_url` | `string` |  |
| `size` | `int` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `stage` | `int` |  |
| `stage_str` | `string` |  |
| `stage_updated_at` | `string` |  |
| `status` | `int` |  |
| `status_reason` | `string` |  |
| `status_str` | `string` |  |
| `status_updated_at` | `string` |  |
| `status_url` | `string` |  |
| `subtype` | `string` |  |
| `summary` | `string` |  |
| `sync_finished_at` | `string` |  |
| `sync_progress` | `int` |  |
| `tag` | `array` |  |
| `tags_immutable` | `array` |  |
| `type_display` | `string` |  |
| `uploaded_at` | `string` |  |
| `uploader` | `string` |  |
| `uploader_url` | `string` |  |
| `version` | `string` |  |
| `version_orig` | `string` |  |
| `vulnerability_scan_results_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare Package record (throws on error).
$package = $client->Package()->load(["owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of Package records (throws on error).
$packages = $client->Package()->list();
```

#### Example: Create

```php
$package = $client->Package()->create([
    "owner" => null, // mixed
    "repo" => null, // mixed
]);
```


### PackageDenyPolicy

Create an instance: `$package_deny_policy = $client->PackageDenyPolicy();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `action` | `string` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `enabled` | `bool` |  |
| `name` | `string` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the bare PackageDenyPolicy record (throws on error).
$package_deny_policy = $client->PackageDenyPolicy()->load(["id" => "package_deny_policy_id", "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of PackageDenyPolicy records (throws on error).
$package_deny_policys = $client->PackageDenyPolicy()->list();
```

#### Example: Create

```php
$package_deny_policy = $client->PackageDenyPolicy()->create([
    "org_id" => null, // string
]);
```


### PackageFilePartsUpload

Create an instance: `$package_file_parts_upload = $client->PackageFilePartsUpload();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `identifier` | `string` |  |
| `upload_querystring` | `string` |  |
| `upload_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare PackageFilePartsUpload record (throws on error).
$package_file_parts_upload = $client->PackageFilePartsUpload()->load(["identifier" => "identifier", "owner" => "owner", "repo" => "repo"]);
```


### PackageFileUpload

Create an instance: `$package_file_upload = $client->PackageFileUpload();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$package_file_upload = $client->PackageFileUpload()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
    "repo" => null, // mixed
]);
```


### PackageLicensePolicyEvaluation

Create an instance: `$package_license_policy_evaluation = $client->PackageLicensePolicyEvaluation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `evaluation_count` | `int` |  |
| `policy` | `array` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `violation_count` | `int` |  |

#### Example: Load

```php
// load() returns the bare PackageLicensePolicyEvaluation record (throws on error).
$package_license_policy_evaluation = $client->PackageLicensePolicyEvaluation()->load(["id" => "package_license_policy_evaluation_id", "license_policy_id" => "license_policy_id", "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of PackageLicensePolicyEvaluation records (throws on error).
$package_license_policy_evaluations = $client->PackageLicensePolicyEvaluation()->list();
```

#### Example: Create

```php
$package_license_policy_evaluation = $client->PackageLicensePolicyEvaluation()->create([
    "org_id" => null, // string
    "policy_slug_perm" => null, // mixed
]);
```


### PackageVersionBadge

Create an instance: `$package_version_badge = $client->PackageVersionBadge();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```php
// load() returns the bare PackageVersionBadge record (throws on error).
$package_version_badge = $client->PackageVersionBadge()->load(["owner" => "owner", "package_format" => "package_format", "package_identifier" => "package_identifier", "package_name" => "package_name", "package_version" => "package_version", "repo" => "repo"]);
```


### PackageVulnerabilityPolicyEvaluation

Create an instance: `$package_vulnerability_policy_evaluation = $client->PackageVulnerabilityPolicyEvaluation();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `evaluation_count` | `int` |  |
| `policy` | `array` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `violation_count` | `int` |  |

#### Example: Load

```php
// load() returns the bare PackageVulnerabilityPolicyEvaluation record (throws on error).
$package_vulnerability_policy_evaluation = $client->PackageVulnerabilityPolicyEvaluation()->load(["id" => "package_vulnerability_policy_evaluation_id", "org_id" => "org_id", "vulnerability_policy_id" => "vulnerability_policy_id"]);
```

#### Example: List

```php
// list() returns an array of PackageVulnerabilityPolicyEvaluation records (throws on error).
$package_vulnerability_policy_evaluations = $client->PackageVulnerabilityPolicyEvaluation()->list();
```

#### Example: Create

```php
$package_vulnerability_policy_evaluation = $client->PackageVulnerabilityPolicyEvaluation()->create([
    "org_id" => null, // string
    "policy_slug_perm" => null, // mixed
]);
```


### Privilege

Create an instance: `$privilege = $client->Privilege();`


### Profile

Create an instance: `$profile = $client->Profile();`


### ProviderSetting

Create an instance: `$provider_setting = $client->ProviderSetting();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim` | `array` |  |
| `enabled` | `bool` |  |
| `mapping_claim` | `string` |  |
| `name` | `string` |  |
| `provider_url` | `string` |  |
| `service_account` | `array` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Load

```php
// load() returns the bare ProviderSetting record (throws on error).
$provider_setting = $client->ProviderSetting()->load(["org_id" => "org_id", "slug_perm" => "slug_perm"]);
```

#### Example: List

```php
// list() returns an array of ProviderSetting records (throws on error).
$provider_settings = $client->ProviderSetting()->list();
```


### ProviderSettingsWrite

Create an instance: `$provider_settings_write = $client->ProviderSettingsWrite();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim` | `array` |  |
| `dynamic_mapping` | `array` |  |
| `enabled` | `bool` |  |
| `mapping_claim` | `string` |  |
| `name` | `string` |  |
| `provider_url` | `string` |  |
| `service_account` | `array` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Create

```php
$provider_settings_write = $client->ProviderSettingsWrite()->create([
    "org_id" => null, // string
]);
```


### Python

Create an instance: `$python = $client->Python();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Python record (throws on error).
$python = $client->Python()->load(["id" => "python_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Python records (throws on error).
$pythons = $client->Python()->list();
```

#### Example: Create

```php
$python = $client->Python()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Quarantine

Create an instance: `$quarantine = $client->Quarantine();`


### Quota

Create an instance: `$quota = $client->Quota();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `history` | `array` |  |
| `usage` | `array` |  |

#### Example: Load

```php
// load() returns the bare Quota record (throws on error).
$quota = $client->Quota()->load(["id" => "quota_id"]);
```


### Raw

Create an instance: `$raw = $client->Raw();`


### Refresh

Create an instance: `$refresh = $client->Refresh();`


### Regenerate

Create an instance: `$regenerate = $client->Regenerate();`


### Repo

Create an instance: `$repo = $client->Repo();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cdn_url` | `string` |  |
| `content_kind` | `string` |  |
| `contextual_auth_realm` | `bool` |  |
| `copy_own` | `bool` |  |
| `copy_package` | `string` |  |
| `cosign_signing_enabled` | `bool` |  |
| `created_at` | `string` |  |
| `default_privilege` | `string` |  |
| `delete_own` | `bool` |  |
| `delete_package` | `string` |  |
| `deleted_at` | `string` |  |
| `description` | `string` |  |
| `distribute` | `array` |  |
| `docker_refresh_tokens_enabled` | `bool` |  |
| `ecdsa_key` | `array` |  |
| `enforce_eula` | `bool` |  |
| `gpg_key` | `array` |  |
| `index_file` | `bool` |  |
| `is_open_source` | `bool` |  |
| `is_private` | `bool` |  |
| `is_public` | `bool` |  |
| `manage_entitlements_privilege` | `string` |  |
| `move_own` | `bool` |  |
| `move_package` | `string` |  |
| `name` | `string` |  |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `nuget_native_signing_enabled` | `bool` |  |
| `num_download` | `int` |  |
| `num_policy_violated_package` | `int` |  |
| `num_quarantined_package` | `int` |  |
| `open_source_license` | `string` |  |
| `open_source_project_url` | `string` |  |
| `package_count` | `int` |  |
| `package_group_count` | `int` |  |
| `proxy_npmj` | `bool` |  |
| `proxy_pypi` | `bool` |  |
| `raw_package_index_enabled` | `bool` |  |
| `raw_package_index_signatures_enabled` | `bool` |  |
| `replace_package` | `string` |  |
| `replace_packages_by_default` | `bool` |  |
| `repository_type` | `int` |  |
| `repository_type_str` | `string` |  |
| `resync_own` | `bool` |  |
| `resync_package` | `string` |  |
| `scan_own` | `bool` |  |
| `scan_package` | `string` |  |
| `self_html_url` | `string` |  |
| `self_url` | `string` |  |
| `show_setup_all` | `bool` |  |
| `size` | `int` |  |
| `size_str` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `storage_region` | `string` |  |
| `strict_npm_validation` | `bool` |  |
| `tag_pre_releases_as_latest` | `bool` |  |
| `use_debian_label` | `bool` |  |
| `use_default_cargo_upstream` | `bool` |  |
| `use_entitlements_privilege` | `string` |  |
| `use_noarch_package` | `bool` |  |
| `use_source_package` | `bool` |  |
| `use_vulnerability_scanning` | `bool` |  |
| `user_entitlements_enabled` | `bool` |  |
| `view_statistic` | `string` |  |

#### Example: Load

```php
// load() returns the bare Repo record (throws on error).
$repo = $client->Repo()->load(["id" => "repo_id"]);
```

#### Example: List

```php
// list() returns an array of Repo records (throws on error).
$repos = $client->Repo()->list();
```

#### Example: Create

```php
$repo = $client->Repo()->create([
]);
```


### RepositoryAuditLog

Create an instance: `$repository_audit_log = $client->RepositoryAuditLog();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `actor` | `string` |  |
| `actor_ip_address` | `string` |  |
| `actor_kind` | `string` |  |
| `actor_location` | `array` |  |
| `actor_slug_perm` | `string` |  |
| `actor_url` | `string` |  |
| `context` | `string` |  |
| `event` | `string` |  |
| `event_at` | `string` |  |
| `object` | `string` |  |
| `object_kind` | `string` |  |
| `object_slug_perm` | `string` |  |
| `uuid` | `string` |  |

#### Example: List

```php
// list() returns an array of RepositoryAuditLog records (throws on error).
$repository_audit_logs = $client->RepositoryAuditLog()->list();
```


### RepositoryEcdsaKey

Create an instance: `$repository_ecdsa_key = $client->RepositoryEcdsaKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |
| `ssh_fingerprint` | `string` |  |

#### Example: Load

```php
// load() returns the bare RepositoryEcdsaKey record (throws on error).
$repository_ecdsa_key = $client->RepositoryEcdsaKey()->load(["identifier" => "identifier", "owner" => "owner"]);
```

#### Example: Create

```php
$repository_ecdsa_key = $client->RepositoryEcdsaKey()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### RepositoryGeoIpRule

Create an instance: `$repository_geo_ip_rule = $client->RepositoryGeoIpRule();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `array` |  |
| `country_code` | `array` |  |

#### Example: Load

```php
// load() returns the bare RepositoryGeoIpRule record (throws on error).
$repository_geo_ip_rule = $client->RepositoryGeoIpRule()->load(["identifier" => "identifier", "owner" => "owner"]);
```


### RepositoryGeoIpStatus

Create an instance: `$repository_geo_ip_status = $client->RepositoryGeoIpStatus();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `geoip_enabled` | `bool` |  |

#### Example: Load

```php
// load() returns the bare RepositoryGeoIpStatus record (throws on error).
$repository_geo_ip_status = $client->RepositoryGeoIpStatus()->load(["identifier" => "identifier", "owner" => "owner"]);
```


### RepositoryGeoIpTestAddress

Create an instance: `$repository_geo_ip_test_address = $client->RepositoryGeoIpTestAddress();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$repository_geo_ip_test_address = $client->RepositoryGeoIpTestAddress()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### RepositoryGpgKey

Create an instance: `$repository_gpg_key = $client->RepositoryGpgKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |

#### Example: Load

```php
// load() returns the bare RepositoryGpgKey record (throws on error).
$repository_gpg_key = $client->RepositoryGpgKey()->load(["identifier" => "identifier", "owner" => "owner"]);
```

#### Example: Create

```php
$repository_gpg_key = $client->RepositoryGpgKey()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### RepositoryPrivilegeInput

Create an instance: `$repository_privilege_input = $client->RepositoryPrivilegeInput();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `privilege` | `string` |  |
| `service` | `string` |  |
| `team` | `string` |  |
| `user` | `string` |  |

#### Example: List

```php
// list() returns an array of RepositoryPrivilegeInput records (throws on error).
$repository_privilege_inputs = $client->RepositoryPrivilegeInput()->list();
```


### RepositoryRetentionRule

Create an instance: `$repository_retention_rule = $client->RepositoryRetentionRule();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `retention_count_limit` | `int` |  |
| `retention_days_limit` | `int` |  |
| `retention_enabled` | `bool` |  |
| `retention_group_by_format` | `bool` |  |
| `retention_group_by_name` | `bool` |  |
| `retention_group_by_package_type` | `bool` |  |
| `retention_package_query_string` | `string` |  |
| `retention_size_limit` | `int` |  |

#### Example: Load

```php
// load() returns the bare RepositoryRetentionRule record (throws on error).
$repository_retention_rule = $client->RepositoryRetentionRule()->load(["owner" => "owner", "repo" => "repo"]);
```


### RepositoryRsaKey

Create an instance: `$repository_rsa_key = $client->RepositoryRsaKey();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |
| `ssh_fingerprint` | `string` |  |

#### Example: Load

```php
// load() returns the bare RepositoryRsaKey record (throws on error).
$repository_rsa_key = $client->RepositoryRsaKey()->load(["identifier" => "identifier", "owner" => "owner"]);
```

#### Example: Create

```php
$repository_rsa_key = $client->RepositoryRsaKey()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### RepositoryToken

Create an instance: `$repository_token = $client->RepositoryToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `int` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `bool` |  |
| `disable_url` | `string` |  |
| `download` | `int` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `array` |  |
| `eula_accepted_at` | `string` |  |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `bool` |  |
| `has_limit` | `bool` |  |
| `identifier` | `int` |  |
| `is_active` | `bool` |  |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` |  |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` |  |
| `limit_date_range_to` | `string` |  |
| `limit_num_client` | `int` |  |
| `limit_num_download` | `int` |  |
| `limit_package_query` | `string` |  |
| `limit_path_query` | `string` |  |
| `metadata` | `array` |  |
| `name` | `string` |  |
| `refresh_url` | `string` |  |
| `reset_url` | `string` |  |
| `scheduled_reset_at` | `string` |  |
| `scheduled_reset_period` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `token` | `string` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `usage` | `string` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: Load

```php
// load() returns the bare RepositoryToken record (throws on error).
$repository_token = $client->RepositoryToken()->load(["identifier" => "identifier", "owner" => "owner", "repo" => "repo"]);
```

#### Example: List

```php
// list() returns an array of RepositoryToken records (throws on error).
$repository_tokens = $client->RepositoryToken()->list();
```

#### Example: Create

```php
$repository_token = $client->RepositoryToken()->create([
    "owner" => null, // mixed
    "repo" => null, // mixed
]);
```


### RepositoryTokenRefresh

Create an instance: `$repository_token_refresh = $client->RepositoryTokenRefresh();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `int` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `bool` |  |
| `disable_url` | `string` |  |
| `download` | `int` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `array` |  |
| `eula_accepted_at` | `string` |  |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `bool` |  |
| `has_limit` | `bool` |  |
| `identifier` | `int` |  |
| `is_active` | `bool` |  |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` |  |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` |  |
| `limit_date_range_to` | `string` |  |
| `limit_num_client` | `int` |  |
| `limit_num_download` | `int` |  |
| `limit_package_query` | `string` |  |
| `limit_path_query` | `string` |  |
| `metadata` | `array` |  |
| `name` | `string` |  |
| `refresh_url` | `string` |  |
| `reset_url` | `string` |  |
| `scheduled_reset_at` | `string` |  |
| `scheduled_reset_period` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `token` | `string` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `usage` | `string` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: Create

```php
$repository_token_refresh = $client->RepositoryTokenRefresh()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
    "repo" => null, // mixed
]);
```


### RepositoryTokenSync

Create an instance: `$repository_token_sync = $client->RepositoryTokenSync();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `token` | `array` |  |

#### Example: Create

```php
$repository_token_sync = $client->RepositoryTokenSync()->create([
    "owner" => null, // mixed
    "repo" => null, // mixed
]);
```


### RepositoryWebhook

Create an instance: `$repository_webhook = $client->RepositoryWebhook();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `disable_reason` | `int` |  |
| `disable_reason_str` | `string` |  |
| `event` | `array` |  |
| `identifier` | `int` |  |
| `is_active` | `bool` |  |
| `is_last_response_bad` | `bool` |  |
| `last_response_status` | `int` |  |
| `last_response_status_str` | `string` |  |
| `num_sent` | `int` |  |
| `package_query` | `string` |  |
| `request_body_format` | `int` |  |
| `request_body_format_str` | `string` |  |
| `request_body_template_format` | `int` |  |
| `request_body_template_format_str` | `string` |  |
| `request_content_type` | `string` |  |
| `secret_header` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `target_url` | `string` |  |
| `template` | `array` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: List

```php
// list() returns an array of RepositoryWebhook records (throws on error).
$repository_webhooks = $client->RepositoryWebhook()->list();
```

#### Example: Create

```php
$repository_webhook = $client->RepositoryWebhook()->create([
    "owner" => null, // mixed
    "repo" => null, // mixed
]);
```


### RepositoryX509EcdsaCertificate

Create an instance: `$repository_x509_ecdsa_certificate = $client->RepositoryX509EcdsaCertificate();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `certificate` | `string` |  |
| `certificate_chain` | `string` |  |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` |  |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `issuing_status` | `string` |  |

#### Example: Load

```php
// load() returns the bare RepositoryX509EcdsaCertificate record (throws on error).
$repository_x509_ecdsa_certificate = $client->RepositoryX509EcdsaCertificate()->load(["identifier" => "identifier", "owner" => "owner"]);
```


### RepositoryX509RsaCertificate

Create an instance: `$repository_x509_rsa_certificate = $client->RepositoryX509RsaCertificate();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `bool` |  |
| `certificate` | `string` |  |
| `certificate_chain` | `string` |  |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` |  |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` |  |
| `issuing_status` | `string` |  |

#### Example: Load

```php
// load() returns the bare RepositoryX509RsaCertificate record (throws on error).
$repository_x509_rsa_certificate = $client->RepositoryX509RsaCertificate()->load(["identifier" => "identifier", "owner" => "owner"]);
```


### Reset

Create an instance: `$reset = $client->Reset();`


### ResourcesRateCheck

Create an instance: `$resources_rate_check = $client->ResourcesRateCheck();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resource` | `array` |  |

#### Example: Load

```php
// load() returns the bare ResourcesRateCheck record (throws on error).
$resources_rate_check = $client->ResourcesRateCheck()->load();
```


### Resync

Create an instance: `$resync = $client->Resync();`


### Retention

Create an instance: `$retention = $client->Retention();`


### Rpm

Create an instance: `$rpm = $client->Rpm();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `distro_version` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `gpg_key_inline` | `string` |  |
| `gpg_key_url` | `string` |  |
| `gpg_verification` | `string` |  |
| `include_source` | `bool` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Rpm record (throws on error).
$rpm = $client->Rpm()->load(["id" => "rpm_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Rpm records (throws on error).
$rpms = $client->Rpm()->list();
```

#### Example: Create

```php
$rpm = $client->Rpm()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Rsa

Create an instance: `$rsa = $client->Rsa();`


### Ruby

Create an instance: `$ruby = $client->Ruby();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Ruby record (throws on error).
$ruby = $client->Ruby()->load(["id" => "ruby_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Ruby records (throws on error).
$rubys = $client->Ruby()->list();
```

#### Example: Create

```php
$ruby = $client->Ruby()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### SamlGroupSync

Create an instance: `$saml_group_sync = $client->SamlGroupSync();`


### Scan

Create an instance: `$scan = $client->Scan();`


### Self

Create an instance: `$self = $client->Self();`


### Service

Create an instance: `$service = $client->Service();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `description` | `string` |  |
| `key` | `string` |  |
| `key_expires_at` | `string` |  |
| `name` | `string` |  |
| `role` | `string` |  |
| `slug` | `string` |  |
| `team` | `array` |  |

#### Example: Load

```php
// load() returns the bare Service record (throws on error).
$service = $client->Service()->load(["id" => "service_id", "org_id" => "org_id"]);
```

#### Example: List

```php
// list() returns an array of Service records (throws on error).
$services = $client->Service()->list();
```

#### Example: Create

```php
$service = $client->Service()->create([
    "org_id" => null, // string
]);
```


### Status

Create an instance: `$status = $client->Status();`


### StatusBasic

Create an instance: `$status_basic = $client->StatusBasic();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `detail` | `string` |  |
| `version` | `string` |  |

#### Example: Load

```php
// load() returns the bare StatusBasic record (throws on error).
$status_basic = $client->StatusBasic()->load();
```


### StorageRegion

Create an instance: `$storage_region = $client->StorageRegion();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `label` | `string` |  |
| `slug` | `string` |  |

#### Example: Load

```php
// load() returns the bare StorageRegion record (throws on error).
$storage_region = $client->StorageRegion()->load(["id" => "storage_region_id"]);
```

#### Example: List

```php
// list() returns an array of StorageRegion records (throws on error).
$storage_regions = $client->StorageRegion()->list();
```


### Swift

Create an instance: `$swift = $client->Swift();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `auth_mode` | `string` |  |
| `auth_secret` | `string` |  |
| `auth_username` | `string` |  |
| `created_at` | `string` |  |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `is_active` | `bool` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `bool` |  |
| `priority` | `int` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `bool` |  |

#### Example: Load

```php
// load() returns the bare Swift record (throws on error).
$swift = $client->Swift()->load(["id" => "swift_id", "identifier" => "identifier", "owner" => "owner"]);
```

#### Example: List

```php
// list() returns an array of Swift records (throws on error).
$swifts = $client->Swift()->list();
```

#### Example: Create

```php
$swift = $client->Swift()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
]);
```


### Sync

Create an instance: `$sync = $client->Sync();`


### Tag

Create an instance: `$tag = $client->Tag();`


### Team

Create an instance: `$team = $client->Team();`


### Terraform

Create an instance: `$terraform = $client->Terraform();`


### Test

Create an instance: `$test = $client->Test();`


### Token

Create an instance: `$token = $client->Token();`


### TransferRegion

Create an instance: `$transfer_region = $client->TransferRegion();`


### User

Create an instance: `$user = $client->User();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `key` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: List

```php
// list() returns an array of User records (throws on error).
$users = $client->User()->list();
```


### UserAuthToken

Create an instance: `$user_auth_token = $client->UserAuthToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```php
$user_auth_token = $client->UserAuthToken()->create([
]);
```


### UserAuthenticationToken

Create an instance: `$user_authentication_token = $client->UserAuthenticationToken();`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created` | `string` |  |
| `key` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Create

```php
$user_authentication_token = $client->UserAuthenticationToken()->create([
]);
```


### UserBrief

Create an instance: `$user_brief = $client->UserBrief();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authenticated` | `bool` |  |
| `email` | `string` |  |
| `name` | `string` |  |
| `profile_url` | `string` |  |
| `self_url` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Load

```php
// load() returns the bare UserBrief record (throws on error).
$user_brief = $client->UserBrief()->load();
```


### UserProfile

Create an instance: `$user_profile = $client->UserProfile();`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `company` | `string` |  |
| `first_name` | `string` |  |
| `job_title` | `string` |  |
| `joined_at` | `string` |  |
| `last_name` | `string` |  |
| `name` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `tagline` | `string` |  |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the bare UserProfile record (throws on error).
$user_profile = $client->UserProfile()->load(["id" => "user_profile_id"]);
```


### Vagrant

Create an instance: `$vagrant = $client->Vagrant();`


### Validate

Create an instance: `$validate = $client->Validate();`


### Version

Create an instance: `$version = $client->Version();`


### Vulnerability

Create an instance: `$vulnerability = $client->Vulnerability();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `has_vulnerability` | `bool` |  |
| `identifier` | `string` |  |
| `max_severity` | `string` |  |
| `num_vulnerability` | `int` |  |
| `package` | `array` |  |
| `result` | `array` |  |
| `scan_id` | `int` |  |
| `target` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```php
// load() returns the bare Vulnerability record (throws on error).
$vulnerability = $client->Vulnerability()->load(["id" => "vulnerability_id"]);
```

#### Example: List

```php
// list() returns an array of Vulnerability records (throws on error).
$vulnerabilitys = $client->Vulnerability()->list();
```


### VulnerabilityPolicy

Create an instance: `$vulnerability_policy = $client->VulnerabilityPolicy();`


### Webhook

Create an instance: `$webhook = $client->Webhook();`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### X509Ecdsa

Create an instance: `$x509_ecdsa = $client->X509Ecdsa();`


### X509Rsa

Create an instance: `$x509_rsa = $client->X509Rsa();`


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── cloudsmith_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`cloudsmith_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$cargo = $client->Cargo();
$cargo->list();

// $cargo->data_get() now returns the cargo data from the last list
// $cargo->match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
