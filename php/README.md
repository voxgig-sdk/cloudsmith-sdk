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
    // load() returns the ENTITY — call data_get() for the Cargo record (throws on error).
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
    $userprofile = $client->UserProfile()->load(["id" => "example_id"]);
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
    "entity" => ["userprofile" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the ENTITY (throws on error);
// call data_get() for the mock record.
$userprofile = $client->UserProfile()->load(["id" => "test01"]);
print_r($userprofile);
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

Entity operations return the ENTITY (call data_get() for the record) (an `array` for single-entity
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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/cran/`

#### Dart

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/dart/`

#### Deb

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `component` | The component to fetch from the upstream |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `distro_versions` | The distribution version that packages found on this upstream could be associated with. |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | The GPG signature verification mode for this upstream. |
| `include_sources` | When true, source packages will be available from this upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_distribution` | The distribution to fetch from the upstream |
| `upstream_url` | The URL for this upstream source. |
| `verification_status` | The signature verification status for this upstream. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `slug` | The slug identifier for this distribution |
| `variants` |  |
| `versions` | A list of the versions for this distribution |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/docker/`

#### DynamicMapping

| Field | Description |
| --- | --- |
| `claim_value` | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

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
| `active` | Number of packages with at least 1 download |
| `bandwidth` |  |
| `downloads` |  |
| `inactive` | Packages with zero downloads |
| `total` | Total number of packages in repo |

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
| `description` | Description of the package format |
| `distributions` | The distributions supported by this package format |
| `extensions` | A non-exhaustive list of extensions supported |
| `name` | Name for the package format |
| `premium` | If true the package format is a premium-only feature |
| `premium_plan_id` | The minimum plan id required for this package format |
| `premium_plan_name` | The minimum plan name required for this package format |
| `slug` | Slug for the package format |
| `supports` | A set of what the package format supports |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/go/`

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/helm/`

#### Hex

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | The GPG signature verification mode for this upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verification_status` | The signature verification status for this upstream. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

Operations: Create, List, Load, Patch, Update.

API path: `/repos/{owner}/{identifier}/upstream/npm/`

#### Nuget

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `location` | The city/town/area your organization is based in. |
| `name` |  |
| `package` |  |
| `policy` |  |
| `reasons` |  |
| `slug` |  |
| `slug_perm` |  |
| `tagline` | A short public descriptive for your organization. |
| `vulnerability_scan_results` |  |

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
| `email` | The email of the user to be invited. |
| `expires_at` |  |
| `inviter` |  |
| `inviter_url` |  |
| `org` |  |
| `role` | The role to be assigned to the invited user. |
| `slug_perm` |  |
| `teams` |  |
| `user` | The slug of the user to be invited. |
| `user_url` |  |

Operations: Create, List, Update.

API path: `/orgs/{org}/invites/`

#### OrganizationInviteExtend

| Field | Description |
| --- | --- |
| `email` | The email of the user to be invited. |
| `expires_at` |  |
| `inviter` |  |
| `inviter_url` |  |
| `org` |  |
| `role` | The role to be assigned to the invited user. |
| `slug_perm` | The slug_perm of the invite to be extended. |
| `teams` |  |
| `user` | The slug of the user to be invited. |
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
| `allow_unknown_licenses` |  |
| `created_at` |  |
| `description` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `slug_perm` |  |
| `spdx_identifiers` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/license-policy/`

#### OrganizationPackageVulnerabilityPolicy

| Field | Description |
| --- | --- |
| `allow_unknown_severity` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
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
| `saml_metadata_inline` | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | If configured, SAML metadata be retrieved from a remote URL. |

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

#### Package

| Field | Description |
| --- | --- |
| `active` | Number of packages with at least 1 download |
| `architectures` |  |
| `backend_kind` |  |
| `bandwidth` |  |
| `cdn_url` |  |
| `checksum_md5` |  |
| `checksum_sha1` |  |
| `checksum_sha256` |  |
| `checksum_sha512` |  |
| `count` |  |
| `dep_type` |  |
| `dependencies_checksum_md5` | A checksum of all of the package's dependencies. |
| `dependencies_url` |  |
| `description` | A textual description of this package. |
| `display_name` |  |
| `distro` | The distributions supported by this package format |
| `distro_version` | A list of the versions for this distribution |
| `downloads` |  |
| `epoch` | The epoch of the package version (if any). |
| `extension` |  |
| `filename` |  |
| `files` |  |
| `format` |  |
| `format_url` |  |
| `freeable_storage` | Amount of storage that will be freed if this package is deleted |
| `fully_qualified_name` |  |
| `identifier_perm` | Unique and permanent identifier for the package. |
| `identifiers` | Return a map of identifier field names and their values. |
| `inactive` | Packages with zero downloads |
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
| `license` | The license of this package. |
| `name` | The name of this package. |
| `namespace` |  |
| `namespace_url` |  |
| `num_downloads` |  |
| `num_files` |  |
| `operator` |  |
| `origin_repository` |  |
| `origin_repository_url` |  |
| `package_type` | The type of package contents. |
| `policy_violated` | Whether or not the package has violated any policy. |
| `release` | The release of the package version (if any). |
| `repository` | The repository the package will be copied to. |
| `repository_url` |  |
| `security_scan_completed_at` | The datetime the security scanning was completed. |
| `security_scan_started_at` | The datetime the security scanning was started. |
| `security_scan_status` |  |
| `security_scan_status_updated_at` | The datetime the security scanning status was updated. |
| `self_html_url` |  |
| `self_url` |  |
| `signature_url` |  |
| `size` | The calculated size of the package. |
| `slug` | The public unique identifier for the package. |
| `slug_perm` |  |
| `stage` | The synchronisation (in progress) stage of the package. |
| `stage_str` |  |
| `stage_updated_at` | The datetime the package stage was updated at. |
| `status` | The synchronisation status of the package. |
| `status_reason` | A textual description for the synchronous status reason (if any |
| `status_str` |  |
| `status_updated_at` | The datetime the package status was updated at. |
| `status_url` |  |
| `subtype` |  |
| `summary` | A one-liner synopsis of this package. |
| `sync_finished_at` | The datetime the package sync was finished at. |
| `sync_progress` | Synchronisation progress (from 0-100) |
| `tags` | All tags on the package, grouped by tag type. |
| `tags_immutable` | All tags on the package, grouped by tag type. |
| `total` | Total number of packages in repo |
| `type_display` |  |
| `uploaded_at` | The date this package was uploaded. |
| `uploader` |  |
| `uploader_url` |  |
| `version` | The raw version for this package. |
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
| `enabled` | Whether this rule is enabled or disabled. |
| `name` |  |
| `package_query_string` | Packages that match this query will trigger this deny rule. |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |

Operations: Create, List, Load, Patch, Update.

API path: `/orgs/{org}/deny-policy/`

#### PackageFilePartsUpload

| Field | Description |
| --- | --- |
| `identifier` | The identifier for the file to use uploading parts. |
| `upload_querystring` | The querystring to use for the next-step PUT upload. |
| `upload_url` | The URL to use for the next-step PUT upload |

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
| `allow_unknown_licenses` |  |
| `created_at` |  |
| `description` |  |
| `evaluation_count` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `policy` |  |
| `slug_perm` |  |
| `spdx_identifiers` |  |
| `status` |  |
| `updated_at` |  |
| `url` |  |
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
| `allow_unknown_severity` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` |  |
| `description` |  |
| `evaluation_count` |  |
| `min_severity` |  |
| `name` |  |
| `on_violation_quarantine` |  |
| `package_query_string` |  |
| `policy` |  |
| `slug_perm` |  |
| `status` |  |
| `updated_at` |  |
| `url` |  |
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
| `claims` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | The name of the provider settings are being configured for |
| `provider_url` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | The service accounts associated with these provider settings. |
| `slug` | The slug of the provider settings |
| `slug_perm` | The unique, immutable identifier of the provider settings. |

Operations: List, Load.

API path: `/orgs/{org}/openid-connect/`

#### ProviderSettingsWrite

| Field | Description |
| --- | --- |
| `claims` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `dynamic_mappings` | The dynamic mappings of `mapping_claim` values to service accounts. |
| `enabled` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | The name of the provider settings are being configured for |
| `provider_url` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | The service accounts associated with these provider settings. |
| `slug` | The slug of the provider settings |
| `slug_perm` | The unique, immutable identifier of the provider settings. |

Operations: Create, Patch, Update.

API path: `/orgs/{org}/openid-connect/`

#### Python

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `display` |  |
| `history` |  |
| `raw` |  |

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
| `cdn_url` | Base URL from which packages and other artifacts are downloaded. |
| `content_kind` | The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. |
| `contextual_auth_realm` | If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. |
| `copy_own` | If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `copy_packages` | This defines the minimum level of privilege required for a user to copy packages. |
| `cosign_signing_enabled` | When enabled, all pushed (or pulled from upstream) OCI packages and artifacts will be signed using cosign with the repository's ECDSA key. |
| `created_at` |  |
| `default_privilege` | This defines the default level of privilege that all of your organization members have for this repository. |
| `delete_own` | If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `delete_packages` | This defines the minimum level of privilege required for a user to delete packages. |
| `deleted_at` | The datetime the repository was manually deleted at. |
| `description` | A description of the repository's purpose/contents. |
| `distributes` | The repositories distributed through this repo. |
| `docker_refresh_tokens_enabled` | If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. |
| `ecdsa_keys` |  |
| `enforce_eula` | If checked, downloads will explicitly require acceptance of an EULA. |
| `gpg_keys` |  |
| `index_files` | If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. |
| `is_open_source` |  |
| `is_private` |  |
| `is_public` |  |
| `manage_entitlements_privilege` | This defines the minimum level of privilege required for a user to manage entitlement tokens with private repositories. |
| `move_own` | If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `move_packages` | This defines the minimum level of privilege required for a user to move packages. |
| `name` | A descriptive name for the repository. |
| `namespace` | Namespace to which this repository belongs. |
| `namespace_url` | API endpoint where data about this namespace can be retrieved. |
| `nuget_native_signing_enabled` | When enabled, all pushed (or pulled from upstream) nuget packages and artifacts will be signed using the repository's X.509 RSA certificate. |
| `num_downloads` | The number of downloads for packages in the repository. |
| `num_policy_violated_packages` | Number of packages with policy violations in a repository. |
| `num_quarantined_packages` | Number of quarantined packages in a repository. |
| `open_source_license` | The SPDX identifier of the open source license. |
| `open_source_project_url` | The URL to the Open-Source project, used for validating that the project meets the requirements for Open-Source. |
| `package_count` | The number of packages in the repository. |
| `package_group_count` | The number of groups in the repository. |
| `proxy_npmjs` | If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. |
| `proxy_pypi` | If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. |
| `raw_package_index_enabled` | If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository. |
| `raw_package_index_signatures_enabled` | If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages. |
| `replace_packages` | This defines the minimum level of privilege required for a user to republish packages. |
| `replace_packages_by_default` | If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. |
| `repository_type` | The repository type changes how it is accessed and billed. |
| `repository_type_str` | The repository type changes how it is accessed and billed. |
| `resync_own` | If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `resync_packages` | This defines the minimum level of privilege required for a user to resync packages. |
| `scan_own` | If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `scan_packages` | This defines the minimum level of privilege required for a user to scan packages. |
| `self_html_url` | Website URL for this repository. |
| `self_url` | API endpoint where data about this repository can be retrieved. |
| `show_setup_all` | If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. |
| `size` | The calculated size of the repository. |
| `size_str` | The calculated size of the repository (human readable). |
| `slug` | The slug identifies the repository in URIs. |
| `slug_perm` | The slug_perm immutably identifies the repository. |
| `storage_region` | The Cloudsmith region in which package files are stored. |
| `strict_npm_validation` | If checked, npm packages will be validated strictly to ensure the package matches specifcation. |
| `tag_pre_releases_as_latest` | If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. |
| `use_debian_labels` | If checked, a 'Label' field will be present in Debian-based repositories. |
| `use_default_cargo_upstream` | If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. |
| `use_entitlements_privilege` | This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. |
| `use_noarch_packages` | If checked, noarch packages (if supported) are enabled in installations/configurations. |
| `use_source_packages` | If checked, source packages (if supported) are enabled in installations/configurations. |
| `use_vulnerability_scanning` | If checked, vulnerability scanning will be enabled for all supported packages within this repository. |
| `user_entitlements_enabled` | If checked, users can use and manage their own user-specific entitlement token for the repository (if private). |
| `view_statistics` | This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. |

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
| `active` | If selected this is the active key for this repository. |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `fingerprint` | The long identifier used by ECDSA for this key. |
| `fingerprint_short` |  |
| `public_key` | The public key given to repository users. |
| `ssh_fingerprint` | The SSH fingerprint used by ECDSA for this key. |

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
| `geoip_enabled` | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

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
| `active` | If selected this is the active key for this repository. |
| `comment` |  |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `fingerprint` | The long identifier used by GPG for this key. |
| `fingerprint_short` |  |
| `public_key` | The public key given to repository users. |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/gpg/`

#### RepositoryPrivilegeInput

| Field | Description |
| --- | --- |
| `privilege` | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | The service identifier (slug). |
| `team` | The team identifier (slug). |
| `user` | The user identifier (slug). |

Operations: List.

API path: `/repos/{owner}/{identifier}/privileges`

#### RepositoryRetentionRule

| Field | Description |
| --- | --- |
| `retention_count_limit` | The maximum X number of packages to retain. |
| `retention_days_limit` | The X number of days of packages to retain. |
| `retention_enabled` | If checked, the retention lifecycle rules will be activated for the repository. |
| `retention_group_by_format` | If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe… |
| `retention_group_by_name` | If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB… |
| `retention_group_by_package_type` | If checked, retention will apply to packages by package type (e.g. |
| `retention_package_query_string` | A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre… |
| `retention_size_limit` | The maximum X total size (in bytes) of packages to retain. |

Operations: Load, Update.

API path: `/repos/{owner}/{repo}/retention/`

#### RepositoryRsaKey

| Field | Description |
| --- | --- |
| `active` | If selected this is the active key for this repository. |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `fingerprint` | The long identifier used by RSA for this key. |
| `fingerprint_short` |  |
| `public_key` | The public key given to repository users. |
| `ssh_fingerprint` | The SSH fingerprint used by RSA for this key. |

Operations: Create, Load.

API path: `/repos/{owner}/{identifier}/rsa/`

#### RepositoryToken

| Field | Description |
| --- | --- |
| `clients` |  |
| `created_at` | The datetime the token was updated at. |
| `created_by` |  |
| `created_by_url` |  |
| `default` | If selected this is the default token for this repository. |
| `disable_url` |  |
| `downloads` |  |
| `enable_url` |  |
| `eula_accepted` |  |
| `eula_accepted_at` | The datetime the EULA was accepted at. |
| `eula_accepted_from` |  |
| `eula_required` | If checked, a EULA acceptance is required for this token. |
| `has_limits` |  |
| `identifier` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` |  |
| `limit_bandwidth` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` |  |
| `limit_date_range_from` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` |  |
| `name` |  |
| `refresh_url` |  |
| `reset_url` |  |
| `scheduled_reset_at` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` |  |
| `self_url` |  |
| `slug_perm` |  |
| `token` |  |
| `updated_at` | The datetime the token was updated at. |
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
| `clients` |  |
| `created_at` | The datetime the token was updated at. |
| `created_by` |  |
| `created_by_url` |  |
| `default` | If selected this is the default token for this repository. |
| `disable_url` |  |
| `downloads` |  |
| `enable_url` |  |
| `eula_accepted` |  |
| `eula_accepted_at` | The datetime the EULA was accepted at. |
| `eula_accepted_from` |  |
| `eula_required` | If checked, a EULA acceptance is required for this token. |
| `has_limits` |  |
| `identifier` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` |  |
| `limit_bandwidth` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` |  |
| `limit_date_range_from` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` |  |
| `name` |  |
| `refresh_url` |  |
| `reset_url` |  |
| `scheduled_reset_at` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` |  |
| `self_url` |  |
| `slug_perm` |  |
| `token` |  |
| `updated_at` | The datetime the token was updated at. |
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
| `tokens` | The entitlements that have been synchronised. |

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
| `events` |  |
| `identifier` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL. |
| `is_last_response_bad` |  |
| `last_response_status` |  |
| `last_response_status_str` |  |
| `num_sent` |  |
| `package_query` | The package-based search query for webhooks to fire. |
| `request_body_format` | The format of the payloads for webhook requests. |
| `request_body_format_str` |  |
| `request_body_template_format` | The format of the payloads for webhook requests. |
| `request_body_template_format_str` |  |
| `request_content_type` | The value that will be sent for the 'Content Type' header. |
| `secret_header` | The header to send the predefined secret in. |
| `self_url` |  |
| `slug_perm` |  |
| `target_url` | The destination URL that webhook payloads will be POST'ed to. |
| `templates` |  |
| `updated_at` |  |
| `updated_by` |  |
| `updated_by_url` |  |
| `verify_ssl` | If enabled, SSL certificates is verified when webhooks are sent. |

Operations: Create, List, Load, Update.

API path: `/webhooks/{owner}/{repo}/`

#### RepositoryX509EcdsaCertificate

| Field | Description |
| --- | --- |
| `active` | If selected this is the active key for this repository. |
| `certificate` | The issued certificate. |
| `certificate_chain` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` |  |
| `certificate_chain_fingerprint_short` |  |
| `certificate_fingerprint` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` |  |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
| `issuing_status` |  |

Operations: Load.

API path: `/repos/{owner}/{identifier}/x509-ecdsa/`

#### RepositoryX509RsaCertificate

| Field | Description |
| --- | --- |
| `active` | If selected this is the active key for this repository. |
| `certificate` | The issued certificate. |
| `certificate_chain` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` |  |
| `certificate_chain_fingerprint_short` |  |
| `certificate_fingerprint` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` |  |
| `created_at` |  |
| `default` | If selected this is the default key for this repository. |
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
| `interval` | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | The maximum number of requests that you are permitted to send per hour |
| `remaining` | The number of requests that are remaining in the current rate limit window |
| `reset` | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | If true, throttling is currently being enforced. |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `distro_version` | The distribution version that packages found on this upstream will be associated with. |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | The GPG signature verification mode for this upstream. |
| `include_sources` | When checked, source packages will be available from this upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verification_status` | The signature verification status for this upstream. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `description` | The description of the service |
| `key` | The API key of the service |
| `key_expires_at` | The time at which the API key will expire. |
| `name` | The name of the service |
| `role` | The role of the service. |
| `slug` | The slug of the service |
| `teams` |  |

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
| `detail` | The message describing the state of the API. |
| `version` | The current version for the Cloudsmith service. |

Operations: Load.

API path: `/status/check/basic/`

#### StorageRegion

| Field | Description |
| --- | --- |
| `label` | Name of the storage region |
| `slug` | Slug for the storage region |

Operations: List, Load.

API path: `/storage-regions/`

#### Swift

| Field | Description |
| --- | --- |
| `auth_mode` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | Secret to provide with requests to upstream. |
| `auth_username` | Username to provide with requests to upstream. |
| `created_at` | The datetime the upstream source was created. |
| `disable_reason` |  |
| `extra_header_1` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | The value for extra header #2 to send to upstream. |
| `is_active` | Whether or not this upstream is active and ready for requests. |
| `mode` | The mode that this upstream should operate in. |
| `name` | A descriptive name for this upstream source. |
| `pending_validation` | When true, this upstream source is pending validation. |
| `priority` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` |  |
| `updated_at` |  |
| `upstream_url` | The URL for this upstream source. |
| `verify_ssl` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
| `created` | The time at which the API key was created. |
| `key` | The unique API key used for authentication. |
| `slug_perm` | The slug_perm for token. |

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
| `created` | The time at which the API key was created. |
| `key` | The unique API key used for authentication. |
| `slug_perm` | The slug_perm for token. |

Operations: Create, Update.

API path: `/user/tokens/`

#### UserBrief

| Field | Description |
| --- | --- |
| `authenticated` | If true then you're logged in as a user. |
| `email` | Your email address that we use to contact you. |
| `name` | The full name of the user (if any). |
| `profile_url` | The URL for the full profile of the user. |
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
| `tagline` | Your tagline is a sentence about you. |
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
| `created_at` | The time this scan result was stored. |
| `has_vulnerabilities` | Do the results contain any known vulnerabilities? |
| `identifier` |  |
| `max_severity` |  |
| `num_vulnerabilities` |  |
| `package` |  |
| `scan_id` | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` |  |

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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Cargo record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Composer record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Conda record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Cran record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Dart record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `component` | `string` | The component to fetch from the upstream |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `distro_versions` | `array` | The distribution version that packages found on this upstream could be associated with. |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | The GPG signature verification mode for this upstream. |
| `include_sources` | `bool` | When true, source packages will be available from this upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_distribution` | `string` | The distribution to fetch from the upstream |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verification_status` | `string` | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Deb record (throws on error).
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
    "distro_versions" => null, // array
    "name" => null, // string
    "upstream_url" => null, // string
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
| `slug` | `string` | The slug identifier for this distribution |
| `variants` | `string` |  |
| `versions` | `array` | A list of the versions for this distribution |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DistributionFull record (throws on error).
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Docker record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `claim_value` | `string` | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | `string` | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the DynamicMapping record (throws on error).
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
| `active` | `int` | Number of packages with at least 1 download |
| `bandwidth` | `array` |  |
| `downloads` | `array` |  |
| `inactive` | `int` | Packages with zero downloads |
| `total` | `int` | Total number of packages in repo |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Entitlement record (throws on error).
$entitlement = $client->Entitlement()->load(["id" => "entitlement_id"]);
```

#### Example: Create

```php
$entitlement = $client->Entitlement()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
    "repo" => null, // mixed
    "bandwidth" => null, // array
    "downloads" => null, // array
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
| `description` | `string` | Description of the package format |
| `distributions` | `array` | The distributions supported by this package format |
| `extensions` | `array` | A non-exhaustive list of extensions supported |
| `name` | `string` | Name for the package format |
| `premium` | `bool` | If true the package format is a premium-only feature |
| `premium_plan_id` | `string` | The minimum plan id required for this package format |
| `premium_plan_name` | `string` | The minimum plan name required for this package format |
| `slug` | `string` | Slug for the package format |
| `supports` | `array` | A set of what the package format supports |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Format record (throws on error).
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Gon record (throws on error).
$gon = $client->Gon()->load(["identifier" => "identifier", "owner" => "owner", "slug_perm" => "slug_perm"]);
```

#### Example: List

```php
// list() returns an array of Gon records (throws on error).
$gons = $client->Gon()->list();
```

#### Example: Create

```php
$gon = $client->Gon()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
    "name" => null, // string
    "upstream_url" => null, // string
]);
```


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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Helm record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Hex record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Huggingface record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | The GPG signature verification mode for this upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verification_status` | `string` | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Maven record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
// load() returns the ENTITY — call data_get() for the Namespace record (throws on error).
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
// load() returns the ENTITY — call data_get() for the NamespaceAuditLog record (throws on error).
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Npm record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Nuget record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `location` | `string` | The city/town/area your organization is based in. |
| `name` | `string` |  |
| `package` | `array` |  |
| `policy` | `array` |  |
| `reasons` | `array` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `tagline` | `string` | A short public descriptive for your organization. |
| `vulnerability_scan_results` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Org record (throws on error).
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
    "name" => null, // string
    "package" => null, // array
    "policy" => null, // array
    "reasons" => null, // array
    "vulnerability_scan_results" => null, // array
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
    "idp_key" => null, // string
    "idp_value" => null, // string
    "team" => null, // string
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
// load() returns the ENTITY — call data_get() for the OrganizationGroupSyncStatus record (throws on error).
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
| `email` | `string` | The email of the user to be invited. |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` | The role to be assigned to the invited user. |
| `slug_perm` | `string` |  |
| `teams` | `array` |  |
| `user` | `string` | The slug of the user to be invited. |
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
| `email` | `string` | The email of the user to be invited. |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` | The role to be assigned to the invited user. |
| `slug_perm` | `string` | The slug_perm of the invite to be extended. |
| `teams` | `array` |  |
| `user` | `string` | The slug of the user to be invited. |
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
// load() returns the ENTITY — call data_get() for the OrganizationMembership record (throws on error).
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
| `allow_unknown_licenses` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `spdx_identifiers` | `array` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OrganizationPackageLicensePolicy record (throws on error).
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
    "name" => null, // string
    "spdx_identifiers" => null, // array
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
| `allow_unknown_severity` | `bool` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
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
// load() returns the ENTITY — call data_get() for the OrganizationPackageVulnerabilityPolicy record (throws on error).
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
    "name" => null, // string
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
| `saml_metadata_inline` | `string` | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | `string` | If configured, SAML metadata be retrieved from a remote URL. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the OrganizationSamlAuth record (throws on error).
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
// load() returns the ENTITY — call data_get() for the OrganizationTeam record (throws on error).
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
    "name" => null, // string
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
    "role" => null, // string
    "user" => null, // string
]);
```


### Oss

Create an instance: `$oss = $client->Oss();`


### P2n

Create an instance: `$p2n = $client->P2n();`


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
| `active` | `int` | Number of packages with at least 1 download |
| `architectures` | `array` |  |
| `backend_kind` | `int` |  |
| `bandwidth` | `array` |  |
| `cdn_url` | `string` |  |
| `checksum_md5` | `string` |  |
| `checksum_sha1` | `string` |  |
| `checksum_sha256` | `string` |  |
| `checksum_sha512` | `string` |  |
| `count` | `int` |  |
| `dep_type` | `string` |  |
| `dependencies_checksum_md5` | `string` | A checksum of all of the package's dependencies. |
| `dependencies_url` | `string` |  |
| `description` | `string` | A textual description of this package. |
| `display_name` | `string` |  |
| `distro` | `array` | The distributions supported by this package format |
| `distro_version` | `array` | A list of the versions for this distribution |
| `downloads` | `array` |  |
| `epoch` | `int` | The epoch of the package version (if any). |
| `extension` | `string` |  |
| `filename` | `string` |  |
| `files` | `array` |  |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `freeable_storage` | `int` | Amount of storage that will be freed if this package is deleted |
| `fully_qualified_name` | `string` |  |
| `identifier_perm` | `string` | Unique and permanent identifier for the package. |
| `identifiers` | `array` | Return a map of identifier field names and their values. |
| `inactive` | `int` | Packages with zero downloads |
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
| `license` | `string` | The license of this package. |
| `name` | `string` | The name of this package. |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `num_downloads` | `int` |  |
| `num_files` | `int` |  |
| `operator` | `string` |  |
| `origin_repository` | `string` |  |
| `origin_repository_url` | `string` |  |
| `package_type` | `int` | The type of package contents. |
| `policy_violated` | `bool` | Whether or not the package has violated any policy. |
| `release` | `string` | The release of the package version (if any). |
| `repository` | `string` | The repository the package will be copied to. |
| `repository_url` | `string` |  |
| `security_scan_completed_at` | `string` | The datetime the security scanning was completed. |
| `security_scan_started_at` | `string` | The datetime the security scanning was started. |
| `security_scan_status` | `string` |  |
| `security_scan_status_updated_at` | `string` | The datetime the security scanning status was updated. |
| `self_html_url` | `string` |  |
| `self_url` | `string` |  |
| `signature_url` | `string` |  |
| `size` | `int` | The calculated size of the package. |
| `slug` | `string` | The public unique identifier for the package. |
| `slug_perm` | `string` |  |
| `stage` | `int` | The synchronisation (in progress) stage of the package. |
| `stage_str` | `string` |  |
| `stage_updated_at` | `string` | The datetime the package stage was updated at. |
| `status` | `int` | The synchronisation status of the package. |
| `status_reason` | `string` | A textual description for the synchronous status reason (if any |
| `status_str` | `string` |  |
| `status_updated_at` | `string` | The datetime the package status was updated at. |
| `status_url` | `string` |  |
| `subtype` | `string` |  |
| `summary` | `string` | A one-liner synopsis of this package. |
| `sync_finished_at` | `string` | The datetime the package sync was finished at. |
| `sync_progress` | `int` | Synchronisation progress (from 0-100) |
| `tags` | `array` | All tags on the package, grouped by tag type. |
| `tags_immutable` | `array` | All tags on the package, grouped by tag type. |
| `total` | `int` | Total number of packages in repo |
| `type_display` | `string` |  |
| `uploaded_at` | `string` | The date this package was uploaded. |
| `uploader` | `string` |  |
| `uploader_url` | `string` |  |
| `version` | `string` | The raw version for this package. |
| `version_orig` | `string` |  |
| `vulnerability_scan_results_url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Package record (throws on error).
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
    "bandwidth" => null, // array
    "count" => null, // int
    "distro" => null, // array
    "downloads" => null, // array
    "last_push" => null, // string
    "num_downloads" => null, // int
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
| `enabled` | `bool` | Whether this rule is enabled or disabled. |
| `name` | `string` |  |
| `package_query_string` | `string` | Packages that match this query will trigger this deny rule. |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PackageDenyPolicy record (throws on error).
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
    "package_query_string" => null, // string
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
| `identifier` | `string` | The identifier for the file to use uploading parts. |
| `upload_querystring` | `string` | The querystring to use for the next-step PUT upload. |
| `upload_url` | `string` | The URL to use for the next-step PUT upload |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PackageFilePartsUpload record (throws on error).
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
| `allow_unknown_licenses` | `bool` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `evaluation_count` | `int` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `string` |  |
| `policy` | `array` |  |
| `slug_perm` | `string` |  |
| `spdx_identifiers` | `array` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `violation_count` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PackageLicensePolicyEvaluation record (throws on error).
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
    "policy" => null, // array
    "spdx_identifiers" => null, // array
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
// load() returns the ENTITY — call data_get() for the PackageVersionBadge record (throws on error).
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
| `allow_unknown_severity` | `bool` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `evaluation_count` | `int` |  |
| `min_severity` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `bool` |  |
| `package_query_string` | `string` |  |
| `policy` | `array` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
| `violation_count` | `int` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the PackageVulnerabilityPolicyEvaluation record (throws on error).
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
| `claims` | `array` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | `bool` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | The name of the provider settings are being configured for |
| `provider_url` | `string` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `array` | The service accounts associated with these provider settings. |
| `slug` | `string` | The slug of the provider settings |
| `slug_perm` | `string` | The unique, immutable identifier of the provider settings. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ProviderSetting record (throws on error).
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
| `claims` | `array` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `dynamic_mappings` | `array` | The dynamic mappings of `mapping_claim` values to service accounts. |
| `enabled` | `bool` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | The name of the provider settings are being configured for |
| `provider_url` | `string` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `array` | The service accounts associated with these provider settings. |
| `slug` | `string` | The slug of the provider settings |
| `slug_perm` | `string` | The unique, immutable identifier of the provider settings. |

#### Example: Create

```php
$provider_settings_write = $client->ProviderSettingsWrite()->create([
    "org_id" => null, // string
    "claims" => null, // array
    "enabled" => null, // bool
    "name" => null, // string
    "provider_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Python record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `display` | `array` |  |
| `history` | `array` |  |
| `raw` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Quota record (throws on error).
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
| `cdn_url` | `string` | Base URL from which packages and other artifacts are downloaded. |
| `content_kind` | `string` | The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. |
| `contextual_auth_realm` | `bool` | If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. |
| `copy_own` | `bool` | If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `copy_packages` | `string` | This defines the minimum level of privilege required for a user to copy packages. |
| `cosign_signing_enabled` | `bool` | When enabled, all pushed (or pulled from upstream) OCI packages and artifacts will be signed using cosign with the repository's ECDSA key. |
| `created_at` | `string` |  |
| `default_privilege` | `string` | This defines the default level of privilege that all of your organization members have for this repository. |
| `delete_own` | `bool` | If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `delete_packages` | `string` | This defines the minimum level of privilege required for a user to delete packages. |
| `deleted_at` | `string` | The datetime the repository was manually deleted at. |
| `description` | `string` | A description of the repository's purpose/contents. |
| `distributes` | `array` | The repositories distributed through this repo. |
| `docker_refresh_tokens_enabled` | `bool` | If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. |
| `ecdsa_keys` | `array` |  |
| `enforce_eula` | `bool` | If checked, downloads will explicitly require acceptance of an EULA. |
| `gpg_keys` | `array` |  |
| `index_files` | `bool` | If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. |
| `is_open_source` | `bool` |  |
| `is_private` | `bool` |  |
| `is_public` | `bool` |  |
| `manage_entitlements_privilege` | `string` | This defines the minimum level of privilege required for a user to manage entitlement tokens with private repositories. |
| `move_own` | `bool` | If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `move_packages` | `string` | This defines the minimum level of privilege required for a user to move packages. |
| `name` | `string` | A descriptive name for the repository. |
| `namespace` | `string` | Namespace to which this repository belongs. |
| `namespace_url` | `string` | API endpoint where data about this namespace can be retrieved. |
| `nuget_native_signing_enabled` | `bool` | When enabled, all pushed (or pulled from upstream) nuget packages and artifacts will be signed using the repository's X.509 RSA certificate. |
| `num_downloads` | `int` | The number of downloads for packages in the repository. |
| `num_policy_violated_packages` | `int` | Number of packages with policy violations in a repository. |
| `num_quarantined_packages` | `int` | Number of quarantined packages in a repository. |
| `open_source_license` | `string` | The SPDX identifier of the open source license. |
| `open_source_project_url` | `string` | The URL to the Open-Source project, used for validating that the project meets the requirements for Open-Source. |
| `package_count` | `int` | The number of packages in the repository. |
| `package_group_count` | `int` | The number of groups in the repository. |
| `proxy_npmjs` | `bool` | If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. |
| `proxy_pypi` | `bool` | If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. |
| `raw_package_index_enabled` | `bool` | If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository. |
| `raw_package_index_signatures_enabled` | `bool` | If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages. |
| `replace_packages` | `string` | This defines the minimum level of privilege required for a user to republish packages. |
| `replace_packages_by_default` | `bool` | If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. |
| `repository_type` | `int` | The repository type changes how it is accessed and billed. |
| `repository_type_str` | `string` | The repository type changes how it is accessed and billed. |
| `resync_own` | `bool` | If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `resync_packages` | `string` | This defines the minimum level of privilege required for a user to resync packages. |
| `scan_own` | `bool` | If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `scan_packages` | `string` | This defines the minimum level of privilege required for a user to scan packages. |
| `self_html_url` | `string` | Website URL for this repository. |
| `self_url` | `string` | API endpoint where data about this repository can be retrieved. |
| `show_setup_all` | `bool` | If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. |
| `size` | `int` | The calculated size of the repository. |
| `size_str` | `string` | The calculated size of the repository (human readable). |
| `slug` | `string` | The slug identifies the repository in URIs. |
| `slug_perm` | `string` | The slug_perm immutably identifies the repository. |
| `storage_region` | `string` | The Cloudsmith region in which package files are stored. |
| `strict_npm_validation` | `bool` | If checked, npm packages will be validated strictly to ensure the package matches specifcation. |
| `tag_pre_releases_as_latest` | `bool` | If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. |
| `use_debian_labels` | `bool` | If checked, a 'Label' field will be present in Debian-based repositories. |
| `use_default_cargo_upstream` | `bool` | If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. |
| `use_entitlements_privilege` | `string` | This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. |
| `use_noarch_packages` | `bool` | If checked, noarch packages (if supported) are enabled in installations/configurations. |
| `use_source_packages` | `bool` | If checked, source packages (if supported) are enabled in installations/configurations. |
| `use_vulnerability_scanning` | `bool` | If checked, vulnerability scanning will be enabled for all supported packages within this repository. |
| `user_entitlements_enabled` | `bool` | If checked, users can use and manage their own user-specific entitlement token for the repository (if private). |
| `view_statistics` | `string` | This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Repo record (throws on error).
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
    "id" => null, // string
    "name" => null, // string
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
| `active` | `bool` | If selected this is the active key for this repository. |
| `created_at` | `string` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `fingerprint` | `string` | The long identifier used by ECDSA for this key. |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` | The public key given to repository users. |
| `ssh_fingerprint` | `string` | The SSH fingerprint used by ECDSA for this key. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryEcdsaKey record (throws on error).
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
// load() returns the ENTITY — call data_get() for the RepositoryGeoIpRule record (throws on error).
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
| `geoip_enabled` | `bool` | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryGeoIpStatus record (throws on error).
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
| `active` | `bool` | If selected this is the active key for this repository. |
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `fingerprint` | `string` | The long identifier used by GPG for this key. |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` | The public key given to repository users. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryGpgKey record (throws on error).
$repository_gpg_key = $client->RepositoryGpgKey()->load(["identifier" => "identifier", "owner" => "owner"]);
```

#### Example: Create

```php
$repository_gpg_key = $client->RepositoryGpgKey()->create([
    "identifier" => null, // mixed
    "owner" => null, // mixed
    "comment" => null, // string
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
| `privilege` | `string` | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | `string` | The service identifier (slug). |
| `team` | `string` | The team identifier (slug). |
| `user` | `string` | The user identifier (slug). |

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
| `retention_count_limit` | `int` | The maximum X number of packages to retain. |
| `retention_days_limit` | `int` | The X number of days of packages to retain. |
| `retention_enabled` | `bool` | If checked, the retention lifecycle rules will be activated for the repository. |
| `retention_group_by_format` | `bool` | If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe… |
| `retention_group_by_name` | `bool` | If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB… |
| `retention_group_by_package_type` | `bool` | If checked, retention will apply to packages by package type (e.g. |
| `retention_package_query_string` | `string` | A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre… |
| `retention_size_limit` | `int` | The maximum X total size (in bytes) of packages to retain. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryRetentionRule record (throws on error).
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
| `active` | `bool` | If selected this is the active key for this repository. |
| `created_at` | `string` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `fingerprint` | `string` | The long identifier used by RSA for this key. |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` | The public key given to repository users. |
| `ssh_fingerprint` | `string` | The SSH fingerprint used by RSA for this key. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryRsaKey record (throws on error).
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
| `clients` | `int` |  |
| `created_at` | `string` | The datetime the token was updated at. |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `bool` | If selected this is the default token for this repository. |
| `disable_url` | `string` |  |
| `downloads` | `int` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `array` |  |
| `eula_accepted_at` | `string` | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `bool` | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `bool` |  |
| `identifier` | `int` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `int` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `int` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `array` |  |
| `name` | `string` |  |
| `refresh_url` | `string` |  |
| `reset_url` | `string` |  |
| `scheduled_reset_at` | `string` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `token` | `string` |  |
| `updated_at` | `string` | The datetime the token was updated at. |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `usage` | `string` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryToken record (throws on error).
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
    "name" => null, // string
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
| `clients` | `int` |  |
| `created_at` | `string` | The datetime the token was updated at. |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `bool` | If selected this is the default token for this repository. |
| `disable_url` | `string` |  |
| `downloads` | `int` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `array` |  |
| `eula_accepted_at` | `string` | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `bool` | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `bool` |  |
| `identifier` | `int` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `bool` |  |
| `limit_bandwidth` | `int` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `int` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `int` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `array` |  |
| `name` | `string` |  |
| `refresh_url` | `string` |  |
| `reset_url` | `string` |  |
| `scheduled_reset_at` | `string` | The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero. |
| `scheduled_reset_period` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `token` | `string` |  |
| `updated_at` | `string` | The datetime the token was updated at. |
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
| `tokens` | `array` | The entitlements that have been synchronised. |

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
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `disable_reason` | `int` |  |
| `disable_reason_str` | `string` |  |
| `events` | `array` |  |
| `identifier` | `int` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `bool` | If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL. |
| `is_last_response_bad` | `bool` |  |
| `last_response_status` | `int` |  |
| `last_response_status_str` | `string` |  |
| `num_sent` | `int` |  |
| `package_query` | `string` | The package-based search query for webhooks to fire. |
| `request_body_format` | `int` | The format of the payloads for webhook requests. |
| `request_body_format_str` | `string` |  |
| `request_body_template_format` | `int` | The format of the payloads for webhook requests. |
| `request_body_template_format_str` | `string` |  |
| `request_content_type` | `string` | The value that will be sent for the 'Content Type' header. |
| `secret_header` | `string` | The header to send the predefined secret in. |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `target_url` | `string` | The destination URL that webhook payloads will be POST'ed to. |
| `templates` | `array` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `verify_ssl` | `bool` | If enabled, SSL certificates is verified when webhooks are sent. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryWebhook record (throws on error).
$repository_webhook = $client->RepositoryWebhook()->load(["identifier" => "identifier", "owner" => "owner", "repo" => "repo"]);
```

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
    "events" => null, // array
    "target_url" => null, // string
    "templates" => null, // array
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
| `active` | `bool` | If selected this is the active key for this repository. |
| `certificate` | `string` | The issued certificate. |
| `certificate_chain` | `string` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `issuing_status` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryX509EcdsaCertificate record (throws on error).
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
| `active` | `bool` | If selected this is the active key for this repository. |
| `certificate` | `string` | The issued certificate. |
| `certificate_chain` | `string` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `bool` | If selected this is the default key for this repository. |
| `issuing_status` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the RepositoryX509RsaCertificate record (throws on error).
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
| `interval` | `float` | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | `int` | The maximum number of requests that you are permitted to send per hour |
| `remaining` | `int` | The number of requests that are remaining in the current rate limit window |
| `reset` | `int` | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | `string` | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | `bool` | If true, throttling is currently being enforced. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the ResourcesRateCheck record (throws on error).
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `distro_version` | `string` | The distribution version that packages found on this upstream will be associated with. |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | The GPG signature verification mode for this upstream. |
| `include_sources` | `bool` | When checked, source packages will be available from this upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verification_status` | `string` | The signature verification status for this upstream. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Rpm record (throws on error).
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
    "distro_version" => null, // string
    "name" => null, // string
    "upstream_url" => null, // string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Ruby record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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
| `description` | `string` | The description of the service |
| `key` | `string` | The API key of the service |
| `key_expires_at` | `string` | The time at which the API key will expire. |
| `name` | `string` | The name of the service |
| `role` | `string` | The role of the service. |
| `slug` | `string` | The slug of the service |
| `teams` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Service record (throws on error).
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
    "name" => null, // string
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
| `detail` | `string` | The message describing the state of the API. |
| `version` | `string` | The current version for the Cloudsmith service. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the StatusBasic record (throws on error).
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
| `label` | `string` | Name of the storage region |
| `slug` | `string` | Slug for the storage region |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the StorageRegion record (throws on error).
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `bool` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `bool` | When true, this upstream source is pending validation. |
| `priority` | `int` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `bool` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Swift record (throws on error).
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
    "name" => null, // string
    "upstream_url" => null, // string
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

Create an instance: `$test = $client->Test_();`


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
| `created` | `string` | The time at which the API key was created. |
| `key` | `string` | The unique API key used for authentication. |
| `slug_perm` | `string` | The slug_perm for token. |

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
| `created` | `string` | The time at which the API key was created. |
| `key` | `string` | The unique API key used for authentication. |
| `slug_perm` | `string` | The slug_perm for token. |

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
| `authenticated` | `bool` | If true then you're logged in as a user. |
| `email` | `string` | Your email address that we use to contact you. |
| `name` | `string` | The full name of the user (if any). |
| `profile_url` | `string` | The URL for the full profile of the user. |
| `self_url` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the UserBrief record (throws on error).
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
| `tagline` | `string` | Your tagline is a sentence about you. |
| `url` | `string` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the UserProfile record (throws on error).
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
| `created_at` | `string` | The time this scan result was stored. |
| `has_vulnerabilities` | `bool` | Do the results contain any known vulnerabilities? |
| `identifier` | `string` |  |
| `max_severity` | `string` |  |
| `num_vulnerabilities` | `int` |  |
| `package` | `array` |  |
| `scan_id` | `int` | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` | `array` |  |

#### Example: Load

```php
// load() returns the ENTITY — call data_get() for the Vulnerability record (throws on error).
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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$userprofile = $client->UserProfile();
$userprofile->load(["id" => "example_id"]);

// $userprofile->data_get() now returns the userprofile data from the last load
// $userprofile->match_get() returns the last match criteria
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
