# Cloudsmith Lua SDK



The Lua SDK for the Cloudsmith API — an entity-oriented client using Lua conventions.

It exposes the API as capitalised, semantic **Entities** — e.g. `client:Abort()` — each with the same small set of operations (`list`, `load`, `create`, `update`, `remove`, `patch`) instead of raw URL paths and query strings. You call meaning, not endpoints, which keeps the cognitive load low.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/cloudsmith-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("cloudsmith_sdk")

local client = sdk.new({
  apikey = os.getenv("CLOUDSMITH_APIKEY"),
})
```

### 3. Load a cargo

Cargo is nested under identifier, so provide the `identifier`.

```lua
local cargo, err = client:Cargo():load({ identifier = "example_identifier", owner = "example_owner", id = "example_id" })
if err then error(err) end
print(cargo)
```


## Error handling

Entity operations return `(value, err)`. Check `err` before using
the value:

```lua
local cargos, err = client:Cargo():list()
if err then error(err) end
```

`direct` follows the same `(value, err)` convention:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example_id" },
})
if err then error(err) end
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Cargo():list()
-- result is the returned data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
CLOUDSMITH_TEST_LIVE=TRUE
CLOUDSMITH_APIKEY=<your-key>
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### CloudsmithSDK

```lua
local sdk = require("cloudsmith_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `apikey` | `string` | API key for authentication. |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### CloudsmithSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Abort` | `(data) -> AbortEntity` | Create an Abort entity instance. |
| `Alpine` | `(data) -> AlpineEntity` | Create an Alpine entity instance. |
| `AuditLog` | `(data) -> AuditLogEntity` | Create an AuditLog entity instance. |
| `Basic` | `(data) -> BasicEntity` | Create a Basic entity instance. |
| `Cargo` | `(data) -> CargoEntity` | Create a Cargo entity instance. |
| `Cocoapod` | `(data) -> CocoapodEntity` | Create a Cocoapod entity instance. |
| `Complete` | `(data) -> CompleteEntity` | Create a Complete entity instance. |
| `Composer` | `(data) -> ComposerEntity` | Create a Composer entity instance. |
| `Conan` | `(data) -> ConanEntity` | Create a Conan entity instance. |
| `Conda` | `(data) -> CondaEntity` | Create a Conda entity instance. |
| `Copy` | `(data) -> CopyEntity` | Create a Copy entity instance. |
| `Cran` | `(data) -> CranEntity` | Create a Cran entity instance. |
| `Dart` | `(data) -> DartEntity` | Create a Dart entity instance. |
| `Deb` | `(data) -> DebEntity` | Create a Deb entity instance. |
| `DenyPolicy` | `(data) -> DenyPolicyEntity` | Create a DenyPolicy entity instance. |
| `Dependency` | `(data) -> DependencyEntity` | Create a Dependency entity instance. |
| `Disable` | `(data) -> DisableEntity` | Create a Disable entity instance. |
| `DistributionFull` | `(data) -> DistributionFullEntity` | Create a DistributionFull entity instance. |
| `Distro` | `(data) -> DistroEntity` | Create a Distro entity instance. |
| `Docker` | `(data) -> DockerEntity` | Create a Docker entity instance. |
| `DynamicMapping` | `(data) -> DynamicMappingEntity` | Create a DynamicMapping entity instance. |
| `Ecdsa` | `(data) -> EcdsaEntity` | Create an Ecdsa entity instance. |
| `Enable` | `(data) -> EnableEntity` | Create an Enable entity instance. |
| `Entitlement` | `(data) -> EntitlementEntity` | Create an Entitlement entity instance. |
| `Evaluation` | `(data) -> EvaluationEntity` | Create an Evaluation entity instance. |
| `File` | `(data) -> FileEntity` | Create a File entity instance. |
| `Format` | `(data) -> FormatEntity` | Create a Format entity instance. |
| `Geoip` | `(data) -> GeoipEntity` | Create a Geoip entity instance. |
| `Gon` | `(data) -> GonEntity` | Create a Gon entity instance. |
| `Gon2` | `(data) -> Gon2Entity` | Create a Gon2 entity instance. |
| `Gon3` | `(data) -> Gon3Entity` | Create a Gon3 entity instance. |
| `Gon4` | `(data) -> Gon4Entity` | Create a Gon4 entity instance. |
| `Gon5` | `(data) -> Gon5Entity` | Create a Gon5 entity instance. |
| `Gon6` | `(data) -> Gon6Entity` | Create a Gon6 entity instance. |
| `Gon7` | `(data) -> Gon7Entity` | Create a Gon7 entity instance. |
| `Gon8` | `(data) -> Gon8Entity` | Create a Gon8 entity instance. |
| `Gon9` | `(data) -> Gon9Entity` | Create a Gon9 entity instance. |
| `Gpg` | `(data) -> GpgEntity` | Create a Gpg entity instance. |
| `Group` | `(data) -> GroupEntity` | Create a Group entity instance. |
| `Helm` | `(data) -> HelmEntity` | Create a Helm entity instance. |
| `Hex` | `(data) -> HexEntity` | Create a Hex entity instance. |
| `History` | `(data) -> HistoryEntity` | Create a History entity instance. |
| `Huggingface` | `(data) -> HuggingfaceEntity` | Create a Huggingface entity instance. |
| `Info` | `(data) -> InfoEntity` | Create an Info entity instance. |
| `Invite` | `(data) -> InviteEntity` | Create an Invite entity instance. |
| `LicensePolicy` | `(data) -> LicensePolicyEntity` | Create a LicensePolicy entity instance. |
| `Limit` | `(data) -> LimitEntity` | Create a Limit entity instance. |
| `Luarock` | `(data) -> LuarockEntity` | Create a Luarock entity instance. |
| `Maven` | `(data) -> MavenEntity` | Create a Maven entity instance. |
| `Member` | `(data) -> MemberEntity` | Create a Member entity instance. |
| `Move` | `(data) -> MoveEntity` | Create a Move entity instance. |
| `Namespace` | `(data) -> NamespaceEntity` | Create a Namespace entity instance. |
| `NamespaceAuditLog` | `(data) -> NamespaceAuditLogEntity` | Create a NamespaceAuditLog entity instance. |
| `Npm` | `(data) -> NpmEntity` | Create a Npm entity instance. |
| `Nuget` | `(data) -> NugetEntity` | Create a Nuget entity instance. |
| `OpenidConnect` | `(data) -> OpenidConnectEntity` | Create an OpenidConnect entity instance. |
| `Org` | `(data) -> OrgEntity` | Create an Org entity instance. |
| `OrganizationGroupSync` | `(data) -> OrganizationGroupSyncEntity` | Create an OrganizationGroupSync entity instance. |
| `OrganizationGroupSyncStatus` | `(data) -> OrganizationGroupSyncStatusEntity` | Create an OrganizationGroupSyncStatus entity instance. |
| `OrganizationInvite` | `(data) -> OrganizationInviteEntity` | Create an OrganizationInvite entity instance. |
| `OrganizationInviteExtend` | `(data) -> OrganizationInviteExtendEntity` | Create an OrganizationInviteExtend entity instance. |
| `OrganizationMembership` | `(data) -> OrganizationMembershipEntity` | Create an OrganizationMembership entity instance. |
| `OrganizationMembershipRoleUpdate` | `(data) -> OrganizationMembershipRoleUpdateEntity` | Create an OrganizationMembershipRoleUpdate entity instance. |
| `OrganizationMembershipVisibilityUpdate` | `(data) -> OrganizationMembershipVisibilityUpdateEntity` | Create an OrganizationMembershipVisibilityUpdate entity instance. |
| `OrganizationPackageLicensePolicy` | `(data) -> OrganizationPackageLicensePolicyEntity` | Create an OrganizationPackageLicensePolicy entity instance. |
| `OrganizationPackageVulnerabilityPolicy` | `(data) -> OrganizationPackageVulnerabilityPolicyEntity` | Create an OrganizationPackageVulnerabilityPolicy entity instance. |
| `OrganizationSamlAuth` | `(data) -> OrganizationSamlAuthEntity` | Create an OrganizationSamlAuth entity instance. |
| `OrganizationTeam` | `(data) -> OrganizationTeamEntity` | Create an OrganizationTeam entity instance. |
| `OrganizationTeamMember` | `(data) -> OrganizationTeamMemberEntity` | Create an OrganizationTeamMember entity instance. |
| `Oss` | `(data) -> OssEntity` | Create an Oss entity instance. |
| `P2n` | `(data) -> P2nEntity` | Create a P2n entity instance. |
| `P2n2` | `(data) -> P2n2Entity` | Create a P2n2 entity instance. |
| `Package` | `(data) -> PackageEntity` | Create a Package entity instance. |
| `PackageDenyPolicy` | `(data) -> PackageDenyPolicyEntity` | Create a PackageDenyPolicy entity instance. |
| `PackageFilePartsUpload` | `(data) -> PackageFilePartsUploadEntity` | Create a PackageFilePartsUpload entity instance. |
| `PackageFileUpload` | `(data) -> PackageFileUploadEntity` | Create a PackageFileUpload entity instance. |
| `PackageLicensePolicyEvaluation` | `(data) -> PackageLicensePolicyEvaluationEntity` | Create a PackageLicensePolicyEvaluation entity instance. |
| `PackageVersionBadge` | `(data) -> PackageVersionBadgeEntity` | Create a PackageVersionBadge entity instance. |
| `PackageVulnerabilityPolicyEvaluation` | `(data) -> PackageVulnerabilityPolicyEvaluationEntity` | Create a PackageVulnerabilityPolicyEvaluation entity instance. |
| `Privilege` | `(data) -> PrivilegeEntity` | Create a Privilege entity instance. |
| `Profile` | `(data) -> ProfileEntity` | Create a Profile entity instance. |
| `ProviderSetting` | `(data) -> ProviderSettingEntity` | Create a ProviderSetting entity instance. |
| `ProviderSettingsWrite` | `(data) -> ProviderSettingsWriteEntity` | Create a ProviderSettingsWrite entity instance. |
| `Python` | `(data) -> PythonEntity` | Create a Python entity instance. |
| `Quarantine` | `(data) -> QuarantineEntity` | Create a Quarantine entity instance. |
| `Quota` | `(data) -> QuotaEntity` | Create a Quota entity instance. |
| `Raw` | `(data) -> RawEntity` | Create a Raw entity instance. |
| `Refresh` | `(data) -> RefreshEntity` | Create a Refresh entity instance. |
| `Regenerate` | `(data) -> RegenerateEntity` | Create a Regenerate entity instance. |
| `Repo` | `(data) -> RepoEntity` | Create a Repo entity instance. |
| `RepositoryAuditLog` | `(data) -> RepositoryAuditLogEntity` | Create a RepositoryAuditLog entity instance. |
| `RepositoryEcdsaKey` | `(data) -> RepositoryEcdsaKeyEntity` | Create a RepositoryEcdsaKey entity instance. |
| `RepositoryGeoIpRule` | `(data) -> RepositoryGeoIpRuleEntity` | Create a RepositoryGeoIpRule entity instance. |
| `RepositoryGeoIpStatus` | `(data) -> RepositoryGeoIpStatusEntity` | Create a RepositoryGeoIpStatus entity instance. |
| `RepositoryGeoIpTestAddress` | `(data) -> RepositoryGeoIpTestAddressEntity` | Create a RepositoryGeoIpTestAddress entity instance. |
| `RepositoryGpgKey` | `(data) -> RepositoryGpgKeyEntity` | Create a RepositoryGpgKey entity instance. |
| `RepositoryPrivilegeInput` | `(data) -> RepositoryPrivilegeInputEntity` | Create a RepositoryPrivilegeInput entity instance. |
| `RepositoryRetentionRule` | `(data) -> RepositoryRetentionRuleEntity` | Create a RepositoryRetentionRule entity instance. |
| `RepositoryRsaKey` | `(data) -> RepositoryRsaKeyEntity` | Create a RepositoryRsaKey entity instance. |
| `RepositoryToken` | `(data) -> RepositoryTokenEntity` | Create a RepositoryToken entity instance. |
| `RepositoryTokenRefresh` | `(data) -> RepositoryTokenRefreshEntity` | Create a RepositoryTokenRefresh entity instance. |
| `RepositoryTokenSync` | `(data) -> RepositoryTokenSyncEntity` | Create a RepositoryTokenSync entity instance. |
| `RepositoryWebhook` | `(data) -> RepositoryWebhookEntity` | Create a RepositoryWebhook entity instance. |
| `RepositoryX509EcdsaCertificate` | `(data) -> RepositoryX509EcdsaCertificateEntity` | Create a RepositoryX509EcdsaCertificate entity instance. |
| `RepositoryX509RsaCertificate` | `(data) -> RepositoryX509RsaCertificateEntity` | Create a RepositoryX509RsaCertificate entity instance. |
| `Reset` | `(data) -> ResetEntity` | Create a Reset entity instance. |
| `ResourcesRateCheck` | `(data) -> ResourcesRateCheckEntity` | Create a ResourcesRateCheck entity instance. |
| `Resync` | `(data) -> ResyncEntity` | Create a Resync entity instance. |
| `Retention` | `(data) -> RetentionEntity` | Create a Retention entity instance. |
| `Rpm` | `(data) -> RpmEntity` | Create a Rpm entity instance. |
| `Rsa` | `(data) -> RsaEntity` | Create a Rsa entity instance. |
| `Ruby` | `(data) -> RubyEntity` | Create a Ruby entity instance. |
| `SamlGroupSync` | `(data) -> SamlGroupSyncEntity` | Create a SamlGroupSync entity instance. |
| `Scan` | `(data) -> ScanEntity` | Create a Scan entity instance. |
| `Self` | `(data) -> SelfEntity` | Create a Self entity instance. |
| `Service` | `(data) -> ServiceEntity` | Create a Service entity instance. |
| `Status` | `(data) -> StatusEntity` | Create a Status entity instance. |
| `StatusBasic` | `(data) -> StatusBasicEntity` | Create a StatusBasic entity instance. |
| `StorageRegion` | `(data) -> StorageRegionEntity` | Create a StorageRegion entity instance. |
| `Swift` | `(data) -> SwiftEntity` | Create a Swift entity instance. |
| `Sync` | `(data) -> SyncEntity` | Create a Sync entity instance. |
| `Tag` | `(data) -> TagEntity` | Create a Tag entity instance. |
| `Team` | `(data) -> TeamEntity` | Create a Team entity instance. |
| `Terraform` | `(data) -> TerraformEntity` | Create a Terraform entity instance. |
| `Test` | `(data) -> TestEntity` | Create a Test entity instance. |
| `Token` | `(data) -> TokenEntity` | Create a Token entity instance. |
| `TransferRegion` | `(data) -> TransferRegionEntity` | Create a TransferRegion entity instance. |
| `User` | `(data) -> UserEntity` | Create an User entity instance. |
| `UserAuthToken` | `(data) -> UserAuthTokenEntity` | Create an UserAuthToken entity instance. |
| `UserAuthenticationToken` | `(data) -> UserAuthenticationTokenEntity` | Create an UserAuthenticationToken entity instance. |
| `UserBrief` | `(data) -> UserBriefEntity` | Create an UserBrief entity instance. |
| `UserProfile` | `(data) -> UserProfileEntity` | Create an UserProfile entity instance. |
| `Vagrant` | `(data) -> VagrantEntity` | Create a Vagrant entity instance. |
| `Validate` | `(data) -> ValidateEntity` | Create a Validate entity instance. |
| `Version` | `(data) -> VersionEntity` | Create a Version entity instance. |
| `Vulnerability` | `(data) -> VulnerabilityEntity` | Create a Vulnerability entity instance. |
| `VulnerabilityPolicy` | `(data) -> VulnerabilityPolicyEntity` | Create a VulnerabilityPolicy entity instance. |
| `Webhook` | `(data) -> WebhookEntity` | Create a Webhook entity instance. |
| `X509Ecdsa` | `(data) -> X509EcdsaEntity` | Create a X509Ecdsa entity instance. |
| `X509Rsa` | `(data) -> X509RsaEntity` | Create a X509Rsa entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local abort, err = client:Abort():load()
    if err then error(err) end
    -- abort is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

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

Create an instance: `local abort = client:Abort(nil)`


### Alpine

Create an instance: `local alpine = client:Alpine(nil)`


### AuditLog

Create an instance: `local audit_log = client:AuditLog(nil)`


### Basic

Create an instance: `local basic = client:Basic(nil)`


### Cargo

Create an instance: `local cargo = client:Cargo(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local cargo, err = client:Cargo():load({ id = "cargo_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local cargos, err = client:Cargo():list()
```

#### Example: Create

```lua
local cargo, err = client:Cargo():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Cocoapod

Create an instance: `local cocoapod = client:Cocoapod(nil)`


### Complete

Create an instance: `local complete = client:Complete(nil)`


### Composer

Create an instance: `local composer = client:Composer(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local composer, err = client:Composer():load({ id = "composer_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local composers, err = client:Composer():list()
```

#### Example: Create

```lua
local composer, err = client:Composer():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Conan

Create an instance: `local conan = client:Conan(nil)`


### Conda

Create an instance: `local conda = client:Conda(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local conda, err = client:Conda():load({ id = "conda_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local condas, err = client:Conda():list()
```

#### Example: Create

```lua
local conda, err = client:Conda():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Copy

Create an instance: `local copy = client:Copy(nil)`


### Cran

Create an instance: `local cran = client:Cran(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local cran, err = client:Cran():load({ id = "cran_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local crans, err = client:Cran():list()
```

#### Example: Create

```lua
local cran, err = client:Cran():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Dart

Create an instance: `local dart = client:Dart(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local dart, err = client:Dart():load({ id = "dart_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local darts, err = client:Dart():list()
```

#### Example: Create

```lua
local dart, err = client:Dart():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Deb

Create an instance: `local deb = client:Deb(nil)`

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
| `distro_version` | `table` |  |
| `extra_header_1` | `string` |  |
| `extra_header_2` | `string` |  |
| `extra_value_1` | `string` |  |
| `extra_value_2` | `string` |  |
| `gpg_key_inline` | `string` |  |
| `gpg_key_url` | `string` |  |
| `gpg_verification` | `string` |  |
| `include_source` | `boolean` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_distribution` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local deb, err = client:Deb():load({ id = "deb_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local debs, err = client:Deb():list()
```

#### Example: Create

```lua
local deb, err = client:Deb():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### DenyPolicy

Create an instance: `local deny_policy = client:DenyPolicy(nil)`


### Dependency

Create an instance: `local dependency = client:Dependency(nil)`


### Disable

Create an instance: `local disable = client:Disable(nil)`


### DistributionFull

Create an instance: `local distribution_full = client:DistributionFull(nil)`

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
| `version` | `table` |  |

#### Example: Load

```lua
local distribution_full, err = client:DistributionFull():load({ slug = "slug" })
```

#### Example: List

```lua
local distribution_fulls, err = client:DistributionFull():list()
```


### Distro

Create an instance: `local distro = client:Distro(nil)`


### Docker

Create an instance: `local docker = client:Docker(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local docker, err = client:Docker():load({ id = "docker_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local dockers, err = client:Docker():list()
```

#### Example: Create

```lua
local docker, err = client:Docker():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### DynamicMapping

Create an instance: `local dynamic_mapping = client:DynamicMapping(nil)`

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

```lua
local dynamic_mapping, err = client:DynamicMapping():load({ id = "dynamic_mapping_id", openid_connect_id = "openid_connect_id", org_id = "org_id" })
```

#### Example: List

```lua
local dynamic_mappings, err = client:DynamicMapping():list()
```


### Ecdsa

Create an instance: `local ecdsa = client:Ecdsa(nil)`


### Enable

Create an instance: `local enable = client:Enable(nil)`


### Entitlement

Create an instance: `local entitlement = client:Entitlement(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |
| `remove(match)` | Remove the matching entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `token` | `table` |  |

#### Example: Load

```lua
local entitlement, err = client:Entitlement():load({ id = "entitlement_id" })
```

#### Example: Create

```lua
local entitlement, err = client:Entitlement():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
  repo = "example_repo", -- any
})
```


### Evaluation

Create an instance: `local evaluation = client:Evaluation(nil)`


### File

Create an instance: `local file = client:File(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local file, err = client:File():create({
  owner = "example_owner", -- any
  repo = "example_repo", -- any
})
```


### Format

Create an instance: `local format = client:Format(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `description` | `string` |  |
| `distribution` | `table` |  |
| `extension` | `table` |  |
| `name` | `string` |  |
| `premium` | `boolean` |  |
| `premium_plan_id` | `string` |  |
| `premium_plan_name` | `string` |  |
| `slug` | `string` |  |
| `support` | `table` |  |

#### Example: Load

```lua
local format, err = client:Format():load({ id = "format_id" })
```

#### Example: List

```lua
local formats, err = client:Format():list()
```


### Geoip

Create an instance: `local geoip = client:Geoip(nil)`


### Gon

Create an instance: `local gon = client:Gon(nil)`


### Gon2

Create an instance: `local gon2 = client:Gon2(nil)`


### Gon3

Create an instance: `local gon3 = client:Gon3(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: List

```lua
local gon3s, err = client:Gon3():list()
```


### Gon4

Create an instance: `local gon4 = client:Gon4(nil)`


### Gon5

Create an instance: `local gon5 = client:Gon5(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local gon5, err = client:Gon5():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Gon6

Create an instance: `local gon6 = client:Gon6(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local gon6, err = client:Gon6():load({ identifier = "identifier", owner = "owner", slug_perm = "slug_perm" })
```


### Gon7

Create an instance: `local gon7 = client:Gon7(nil)`


### Gon8

Create an instance: `local gon8 = client:Gon8(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |


### Gon9

Create an instance: `local gon9 = client:Gon9(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |


### Gpg

Create an instance: `local gpg = client:Gpg(nil)`


### Group

Create an instance: `local group = client:Group(nil)`


### Helm

Create an instance: `local helm = client:Helm(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local helm, err = client:Helm():load({ id = "helm_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local helms, err = client:Helm():list()
```

#### Example: Create

```lua
local helm, err = client:Helm():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Hex

Create an instance: `local hex = client:Hex(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local hex, err = client:Hex():load({ id = "hex_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local hexs, err = client:Hex():list()
```

#### Example: Create

```lua
local hex, err = client:Hex():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### History

Create an instance: `local history = client:History(nil)`


### Huggingface

Create an instance: `local huggingface = client:Huggingface(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local huggingface, err = client:Huggingface():load({ id = "huggingface_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local huggingfaces, err = client:Huggingface():list()
```

#### Example: Create

```lua
local huggingface, err = client:Huggingface():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Info

Create an instance: `local info = client:Info(nil)`


### Invite

Create an instance: `local invite = client:Invite(nil)`


### LicensePolicy

Create an instance: `local license_policy = client:LicensePolicy(nil)`


### Limit

Create an instance: `local limit = client:Limit(nil)`


### Luarock

Create an instance: `local luarock = client:Luarock(nil)`


### Maven

Create an instance: `local maven = client:Maven(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local maven, err = client:Maven():load({ id = "maven_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local mavens, err = client:Maven():list()
```

#### Example: Create

```lua
local maven, err = client:Maven():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Member

Create an instance: `local member = client:Member(nil)`


### Move

Create an instance: `local move = client:Move(nil)`


### Namespace

Create an instance: `local namespace = client:Namespace(nil)`

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

```lua
local namespace, err = client:Namespace():load({ id = "namespace_id" })
```

#### Example: List

```lua
local namespaces, err = client:Namespace():list()
```


### NamespaceAuditLog

Create an instance: `local namespace_audit_log = client:NamespaceAuditLog(nil)`

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
| `actor_location` | `table` |  |
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

```lua
local namespace_audit_log, err = client:NamespaceAuditLog():load({ id = "namespace_audit_log_id" })
```


### Npm

Create an instance: `local npm = client:Npm(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local npm, err = client:Npm():load({ id = "npm_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local npms, err = client:Npm():list()
```

#### Example: Create

```lua
local npm, err = client:Npm():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Nuget

Create an instance: `local nuget = client:Nuget(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local nuget, err = client:Nuget():load({ id = "nuget_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local nugets, err = client:Nuget():list()
```

#### Example: Create

```lua
local nuget, err = client:Nuget():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### OpenidConnect

Create an instance: `local openid_connect = client:OpenidConnect(nil)`


### Org

Create an instance: `local org = client:Org(nil)`

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
| `package` | `table` |  |
| `policy` | `table` |  |
| `reason` | `table` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `tagline` | `string` |  |
| `vulnerability_scan_result` | `table` |  |

#### Example: Load

```lua
local org, err = client:Org():load({ id = "org_id" })
```

#### Example: List

```lua
local orgs, err = client:Org():list()
```

#### Example: Create

```lua
local org, err = client:Org():create({
  id = "example_id", -- string
})
```


### OrganizationGroupSync

Create an instance: `local organization_group_sync = client:OrganizationGroupSync(nil)`

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

```lua
local organization_group_syncs, err = client:OrganizationGroupSync():list()
```

#### Example: Create

```lua
local organization_group_sync, err = client:OrganizationGroupSync():create({
  org_id = "example_org_id", -- string
})
```


### OrganizationGroupSyncStatus

Create an instance: `local organization_group_sync_status = client:OrganizationGroupSyncStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_group_sync_status` | `boolean` |  |

#### Example: Load

```lua
local organization_group_sync_status, err = client:OrganizationGroupSyncStatus():load({ org_id = "org_id" })
```


### OrganizationInvite

Create an instance: `local organization_invite = client:OrganizationInvite(nil)`

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
| `team` | `table` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: List

```lua
local organization_invites, err = client:OrganizationInvite():list()
```

#### Example: Create

```lua
local organization_invite, err = client:OrganizationInvite():create({
  org_id = "example_org_id", -- string
})
```


### OrganizationInviteExtend

Create an instance: `local organization_invite_extend = client:OrganizationInviteExtend(nil)`

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
| `team` | `table` |  |
| `user` | `string` |  |
| `user_url` | `string` |  |

#### Example: Create

```lua
local organization_invite_extend, err = client:OrganizationInviteExtend():create({
  org_id = "example_org_id", -- string
  slug_perm = "example_slug_perm", -- any
})
```


### OrganizationMembership

Create an instance: `local organization_membership = client:OrganizationMembership(nil)`

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
| `has_two_factor` | `boolean` |  |
| `is_active` | `boolean` |  |
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

```lua
local organization_membership, err = client:OrganizationMembership():load({ member = "member", org_id = "org_id" })
```

#### Example: List

```lua
local organization_memberships, err = client:OrganizationMembership():list()
```


### OrganizationMembershipRoleUpdate

Create an instance: `local organization_membership_role_update = client:OrganizationMembershipRoleUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `boolean` |  |
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

Create an instance: `local organization_membership_visibility_update = client:OrganizationMembershipVisibilityUpdate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `email` | `string` |  |
| `has_two_factor` | `boolean` |  |
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

Create an instance: `local organization_package_license_policy = client:OrganizationPackageLicensePolicy(nil)`

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
| `allow_unknown_license` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `spdx_identifier` | `table` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local organization_package_license_policy, err = client:OrganizationPackageLicensePolicy():load({ id = "organization_package_license_policy_id", org_id = "org_id" })
```

#### Example: List

```lua
local organization_package_license_policys, err = client:OrganizationPackageLicensePolicy():list()
```

#### Example: Create

```lua
local organization_package_license_policy, err = client:OrganizationPackageLicensePolicy():create({
  org_id = "example_org_id", -- string
})
```


### OrganizationPackageVulnerabilityPolicy

Create an instance: `local organization_package_vulnerability_policy = client:OrganizationPackageVulnerabilityPolicy(nil)`

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
| `allow_unknown_severity` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `min_severity` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local organization_package_vulnerability_policy, err = client:OrganizationPackageVulnerabilityPolicy():load({ id = "organization_package_vulnerability_policy_id", org_id = "org_id" })
```

#### Example: List

```lua
local organization_package_vulnerability_policys, err = client:OrganizationPackageVulnerabilityPolicy():list()
```

#### Example: Create

```lua
local organization_package_vulnerability_policy, err = client:OrganizationPackageVulnerabilityPolicy():create({
  org_id = "example_org_id", -- string
})
```


### OrganizationSamlAuth

Create an instance: `local organization_saml_auth = client:OrganizationSamlAuth(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `saml_auth_enabled` | `boolean` |  |
| `saml_auth_enforced` | `boolean` |  |
| `saml_metadata_inline` | `string` |  |
| `saml_metadata_url` | `string` |  |

#### Example: Load

```lua
local organization_saml_auth, err = client:OrganizationSamlAuth():load({ org_id = "org_id" })
```


### OrganizationTeam

Create an instance: `local organization_team = client:OrganizationTeam(nil)`

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

```lua
local organization_team, err = client:OrganizationTeam():load({ id = "organization_team_id", org_id = "org_id" })
```

#### Example: List

```lua
local organization_teams, err = client:OrganizationTeam():list()
```

#### Example: Create

```lua
local organization_team, err = client:OrganizationTeam():create({
  org_id = "example_org_id", -- string
})
```


### OrganizationTeamMember

Create an instance: `local organization_team_member = client:OrganizationTeamMember(nil)`

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

```lua
local organization_team_members, err = client:OrganizationTeamMember():list()
```

#### Example: Create

```lua
local organization_team_member, err = client:OrganizationTeamMember():create({
  org_id = "example_org_id", -- string
  team_id = "example_team_id", -- string
})
```


### Oss

Create an instance: `local oss = client:Oss(nil)`


### P2n

Create an instance: `local p2n = client:P2n(nil)`


### P2n2

Create an instance: `local p2n2 = client:P2n2(nil)`


### Package

Create an instance: `local package = client:Package(nil)`

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
| `architecture` | `table` |  |
| `backend_kind` | `number` |  |
| `cdn_url` | `string` |  |
| `checksum_md5` | `string` |  |
| `checksum_sha1` | `string` |  |
| `checksum_sha256` | `string` |  |
| `checksum_sha512` | `string` |  |
| `count` | `number` |  |
| `dep_type` | `string` |  |
| `dependencies_checksum_md5` | `string` |  |
| `dependencies_url` | `string` |  |
| `description` | `string` |  |
| `display_name` | `string` |  |
| `distro` | `table` |  |
| `distro_version` | `table` |  |
| `download` | `number` |  |
| `epoch` | `number` |  |
| `extension` | `string` |  |
| `file` | `table` |  |
| `filename` | `string` |  |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `freeable_storage` | `number` |  |
| `fully_qualified_name` | `string` |  |
| `identifier` | `table` |  |
| `identifier_perm` | `string` |  |
| `indexed` | `boolean` |  |
| `is_cancellable` | `boolean` |  |
| `is_copyable` | `boolean` |  |
| `is_deleteable` | `boolean` |  |
| `is_downloadable` | `boolean` |  |
| `is_moveable` | `boolean` |  |
| `is_quarantinable` | `boolean` |  |
| `is_quarantined` | `boolean` |  |
| `is_resyncable` | `boolean` |  |
| `is_security_scannable` | `boolean` |  |
| `is_sync_awaiting` | `boolean` |  |
| `is_sync_completed` | `boolean` |  |
| `is_sync_failed` | `boolean` |  |
| `is_sync_in_flight` | `boolean` |  |
| `is_sync_in_progress` | `boolean` |  |
| `last_push` | `string` |  |
| `license` | `string` |  |
| `name` | `string` |  |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `num_download` | `number` |  |
| `num_file` | `number` |  |
| `operator` | `string` |  |
| `origin_repository` | `string` |  |
| `origin_repository_url` | `string` |  |
| `package` | `table` |  |
| `package_type` | `number` |  |
| `policy_violated` | `boolean` |  |
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
| `size` | `number` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `stage` | `number` |  |
| `stage_str` | `string` |  |
| `stage_updated_at` | `string` |  |
| `status` | `number` |  |
| `status_reason` | `string` |  |
| `status_str` | `string` |  |
| `status_updated_at` | `string` |  |
| `status_url` | `string` |  |
| `subtype` | `string` |  |
| `summary` | `string` |  |
| `sync_finished_at` | `string` |  |
| `sync_progress` | `number` |  |
| `tag` | `table` |  |
| `tags_immutable` | `table` |  |
| `type_display` | `string` |  |
| `uploaded_at` | `string` |  |
| `uploader` | `string` |  |
| `uploader_url` | `string` |  |
| `version` | `string` |  |
| `version_orig` | `string` |  |
| `vulnerability_scan_results_url` | `string` |  |

#### Example: Load

```lua
local package, err = client:Package():load({ owner = "owner", repo = "repo" })
```

#### Example: List

```lua
local packages, err = client:Package():list()
```

#### Example: Create

```lua
local package, err = client:Package():create({
  owner = "example_owner", -- any
  repo = "example_repo", -- any
})
```


### PackageDenyPolicy

Create an instance: `local package_deny_policy = client:PackageDenyPolicy(nil)`

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
| `enabled` | `boolean` |  |
| `name` | `string` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |

#### Example: Load

```lua
local package_deny_policy, err = client:PackageDenyPolicy():load({ id = "package_deny_policy_id", org_id = "org_id" })
```

#### Example: List

```lua
local package_deny_policys, err = client:PackageDenyPolicy():list()
```

#### Example: Create

```lua
local package_deny_policy, err = client:PackageDenyPolicy():create({
  org_id = "example_org_id", -- string
})
```


### PackageFilePartsUpload

Create an instance: `local package_file_parts_upload = client:PackageFilePartsUpload(nil)`

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

```lua
local package_file_parts_upload, err = client:PackageFilePartsUpload():load({ identifier = "identifier", owner = "owner", repo = "repo" })
```


### PackageFileUpload

Create an instance: `local package_file_upload = client:PackageFileUpload(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local package_file_upload, err = client:PackageFileUpload():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
  repo = "example_repo", -- any
})
```


### PackageLicensePolicyEvaluation

Create an instance: `local package_license_policy_evaluation = client:PackageLicensePolicyEvaluation(nil)`

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
| `evaluation_count` | `number` |  |
| `policy` | `table` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `violation_count` | `number` |  |

#### Example: Load

```lua
local package_license_policy_evaluation, err = client:PackageLicensePolicyEvaluation():load({ id = "package_license_policy_evaluation_id", license_policy_id = "license_policy_id", org_id = "org_id" })
```

#### Example: List

```lua
local package_license_policy_evaluations, err = client:PackageLicensePolicyEvaluation():list()
```

#### Example: Create

```lua
local package_license_policy_evaluation, err = client:PackageLicensePolicyEvaluation():create({
  org_id = "example_org_id", -- string
  policy_slug_perm = "example_policy_slug_perm", -- any
})
```


### PackageVersionBadge

Create an instance: `local package_version_badge = client:PackageVersionBadge(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Example: Load

```lua
local package_version_badge, err = client:PackageVersionBadge():load({ owner = "owner", package_format = "package_format", package_identifier = "package_identifier", package_name = "package_name", package_version = "package_version", repo = "repo" })
```


### PackageVulnerabilityPolicyEvaluation

Create an instance: `local package_vulnerability_policy_evaluation = client:PackageVulnerabilityPolicyEvaluation(nil)`

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
| `evaluation_count` | `number` |  |
| `policy` | `table` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `violation_count` | `number` |  |

#### Example: Load

```lua
local package_vulnerability_policy_evaluation, err = client:PackageVulnerabilityPolicyEvaluation():load({ id = "package_vulnerability_policy_evaluation_id", org_id = "org_id", vulnerability_policy_id = "vulnerability_policy_id" })
```

#### Example: List

```lua
local package_vulnerability_policy_evaluations, err = client:PackageVulnerabilityPolicyEvaluation():list()
```

#### Example: Create

```lua
local package_vulnerability_policy_evaluation, err = client:PackageVulnerabilityPolicyEvaluation():create({
  org_id = "example_org_id", -- string
  policy_slug_perm = "example_policy_slug_perm", -- any
})
```


### Privilege

Create an instance: `local privilege = client:Privilege(nil)`


### Profile

Create an instance: `local profile = client:Profile(nil)`


### ProviderSetting

Create an instance: `local provider_setting = client:ProviderSetting(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim` | `table` |  |
| `enabled` | `boolean` |  |
| `mapping_claim` | `string` |  |
| `name` | `string` |  |
| `provider_url` | `string` |  |
| `service_account` | `table` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Load

```lua
local provider_setting, err = client:ProviderSetting():load({ org_id = "org_id", slug_perm = "slug_perm" })
```

#### Example: List

```lua
local provider_settings, err = client:ProviderSetting():list()
```


### ProviderSettingsWrite

Create an instance: `local provider_settings_write = client:ProviderSettingsWrite(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `claim` | `table` |  |
| `dynamic_mapping` | `table` |  |
| `enabled` | `boolean` |  |
| `mapping_claim` | `string` |  |
| `name` | `string` |  |
| `provider_url` | `string` |  |
| `service_account` | `table` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Create

```lua
local provider_settings_write, err = client:ProviderSettingsWrite():create({
  org_id = "example_org_id", -- string
})
```


### Python

Create an instance: `local python = client:Python(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local python, err = client:Python():load({ id = "python_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local pythons, err = client:Python():list()
```

#### Example: Create

```lua
local python, err = client:Python():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Quarantine

Create an instance: `local quarantine = client:Quarantine(nil)`


### Quota

Create an instance: `local quota = client:Quota(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `history` | `table` |  |
| `usage` | `table` |  |

#### Example: Load

```lua
local quota, err = client:Quota():load({ id = "quota_id" })
```


### Raw

Create an instance: `local raw = client:Raw(nil)`


### Refresh

Create an instance: `local refresh = client:Refresh(nil)`


### Regenerate

Create an instance: `local regenerate = client:Regenerate(nil)`


### Repo

Create an instance: `local repo = client:Repo(nil)`

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
| `contextual_auth_realm` | `boolean` |  |
| `copy_own` | `boolean` |  |
| `copy_package` | `string` |  |
| `cosign_signing_enabled` | `boolean` |  |
| `created_at` | `string` |  |
| `default_privilege` | `string` |  |
| `delete_own` | `boolean` |  |
| `delete_package` | `string` |  |
| `deleted_at` | `string` |  |
| `description` | `string` |  |
| `distribute` | `table` |  |
| `docker_refresh_tokens_enabled` | `boolean` |  |
| `ecdsa_key` | `table` |  |
| `enforce_eula` | `boolean` |  |
| `gpg_key` | `table` |  |
| `index_file` | `boolean` |  |
| `is_open_source` | `boolean` |  |
| `is_private` | `boolean` |  |
| `is_public` | `boolean` |  |
| `manage_entitlements_privilege` | `string` |  |
| `move_own` | `boolean` |  |
| `move_package` | `string` |  |
| `name` | `string` |  |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `nuget_native_signing_enabled` | `boolean` |  |
| `num_download` | `number` |  |
| `num_policy_violated_package` | `number` |  |
| `num_quarantined_package` | `number` |  |
| `open_source_license` | `string` |  |
| `open_source_project_url` | `string` |  |
| `package_count` | `number` |  |
| `package_group_count` | `number` |  |
| `proxy_npmj` | `boolean` |  |
| `proxy_pypi` | `boolean` |  |
| `raw_package_index_enabled` | `boolean` |  |
| `raw_package_index_signatures_enabled` | `boolean` |  |
| `replace_package` | `string` |  |
| `replace_packages_by_default` | `boolean` |  |
| `repository_type` | `number` |  |
| `repository_type_str` | `string` |  |
| `resync_own` | `boolean` |  |
| `resync_package` | `string` |  |
| `scan_own` | `boolean` |  |
| `scan_package` | `string` |  |
| `self_html_url` | `string` |  |
| `self_url` | `string` |  |
| `show_setup_all` | `boolean` |  |
| `size` | `number` |  |
| `size_str` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `storage_region` | `string` |  |
| `strict_npm_validation` | `boolean` |  |
| `tag_pre_releases_as_latest` | `boolean` |  |
| `use_debian_label` | `boolean` |  |
| `use_default_cargo_upstream` | `boolean` |  |
| `use_entitlements_privilege` | `string` |  |
| `use_noarch_package` | `boolean` |  |
| `use_source_package` | `boolean` |  |
| `use_vulnerability_scanning` | `boolean` |  |
| `user_entitlements_enabled` | `boolean` |  |
| `view_statistic` | `string` |  |

#### Example: Load

```lua
local repo, err = client:Repo():load({ id = "repo_id" })
```

#### Example: List

```lua
local repos, err = client:Repo():list()
```

#### Example: Create

```lua
local repo, err = client:Repo():create({
})
```


### RepositoryAuditLog

Create an instance: `local repository_audit_log = client:RepositoryAuditLog(nil)`

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
| `actor_location` | `table` |  |
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

```lua
local repository_audit_logs, err = client:RepositoryAuditLog():list()
```


### RepositoryEcdsaKey

Create an instance: `local repository_ecdsa_key = client:RepositoryEcdsaKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |
| `ssh_fingerprint` | `string` |  |

#### Example: Load

```lua
local repository_ecdsa_key, err = client:RepositoryEcdsaKey():load({ identifier = "identifier", owner = "owner" })
```

#### Example: Create

```lua
local repository_ecdsa_key, err = client:RepositoryEcdsaKey():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### RepositoryGeoIpRule

Create an instance: `local repository_geo_ip_rule = client:RepositoryGeoIpRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `cidr` | `table` |  |
| `country_code` | `table` |  |

#### Example: Load

```lua
local repository_geo_ip_rule, err = client:RepositoryGeoIpRule():load({ identifier = "identifier", owner = "owner" })
```


### RepositoryGeoIpStatus

Create an instance: `local repository_geo_ip_status = client:RepositoryGeoIpStatus(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `geoip_enabled` | `boolean` |  |

#### Example: Load

```lua
local repository_geo_ip_status, err = client:RepositoryGeoIpStatus():load({ identifier = "identifier", owner = "owner" })
```


### RepositoryGeoIpTestAddress

Create an instance: `local repository_geo_ip_test_address = client:RepositoryGeoIpTestAddress(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local repository_geo_ip_test_address, err = client:RepositoryGeoIpTestAddress():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### RepositoryGpgKey

Create an instance: `local repository_gpg_key = client:RepositoryGpgKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |

#### Example: Load

```lua
local repository_gpg_key, err = client:RepositoryGpgKey():load({ identifier = "identifier", owner = "owner" })
```

#### Example: Create

```lua
local repository_gpg_key, err = client:RepositoryGpgKey():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### RepositoryPrivilegeInput

Create an instance: `local repository_privilege_input = client:RepositoryPrivilegeInput(nil)`

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

```lua
local repository_privilege_inputs, err = client:RepositoryPrivilegeInput():list()
```


### RepositoryRetentionRule

Create an instance: `local repository_retention_rule = client:RepositoryRetentionRule(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `retention_count_limit` | `number` |  |
| `retention_days_limit` | `number` |  |
| `retention_enabled` | `boolean` |  |
| `retention_group_by_format` | `boolean` |  |
| `retention_group_by_name` | `boolean` |  |
| `retention_group_by_package_type` | `boolean` |  |
| `retention_package_query_string` | `string` |  |
| `retention_size_limit` | `number` |  |

#### Example: Load

```lua
local repository_retention_rule, err = client:RepositoryRetentionRule():load({ owner = "owner", repo = "repo" })
```


### RepositoryRsaKey

Create an instance: `local repository_rsa_key = client:RepositoryRsaKey(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `fingerprint` | `string` |  |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` |  |
| `ssh_fingerprint` | `string` |  |

#### Example: Load

```lua
local repository_rsa_key, err = client:RepositoryRsaKey():load({ identifier = "identifier", owner = "owner" })
```

#### Example: Create

```lua
local repository_rsa_key, err = client:RepositoryRsaKey():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### RepositoryToken

Create an instance: `local repository_token = client:RepositoryToken(nil)`

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
| `client` | `number` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `boolean` |  |
| `disable_url` | `string` |  |
| `download` | `number` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `table` |  |
| `eula_accepted_at` | `string` |  |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `boolean` |  |
| `has_limit` | `boolean` |  |
| `identifier` | `number` |  |
| `is_active` | `boolean` |  |
| `is_limited` | `boolean` |  |
| `limit_bandwidth` | `number` |  |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` |  |
| `limit_date_range_to` | `string` |  |
| `limit_num_client` | `number` |  |
| `limit_num_download` | `number` |  |
| `limit_package_query` | `string` |  |
| `limit_path_query` | `string` |  |
| `metadata` | `table` |  |
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

```lua
local repository_token, err = client:RepositoryToken():load({ identifier = "identifier", owner = "owner", repo = "repo" })
```

#### Example: List

```lua
local repository_tokens, err = client:RepositoryToken():list()
```

#### Example: Create

```lua
local repository_token, err = client:RepositoryToken():create({
  owner = "example_owner", -- any
  repo = "example_repo", -- any
})
```


### RepositoryTokenRefresh

Create an instance: `local repository_token_refresh = client:RepositoryTokenRefresh(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `client` | `number` |  |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `boolean` |  |
| `disable_url` | `string` |  |
| `download` | `number` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `table` |  |
| `eula_accepted_at` | `string` |  |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `boolean` |  |
| `has_limit` | `boolean` |  |
| `identifier` | `number` |  |
| `is_active` | `boolean` |  |
| `is_limited` | `boolean` |  |
| `limit_bandwidth` | `number` |  |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` |  |
| `limit_date_range_to` | `string` |  |
| `limit_num_client` | `number` |  |
| `limit_num_download` | `number` |  |
| `limit_package_query` | `string` |  |
| `limit_path_query` | `string` |  |
| `metadata` | `table` |  |
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

```lua
local repository_token_refresh, err = client:RepositoryTokenRefresh():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
  repo = "example_repo", -- any
})
```


### RepositoryTokenSync

Create an instance: `local repository_token_sync = client:RepositoryTokenSync(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `token` | `table` |  |

#### Example: Create

```lua
local repository_token_sync, err = client:RepositoryTokenSync():create({
  owner = "example_owner", -- any
  repo = "example_repo", -- any
})
```


### RepositoryWebhook

Create an instance: `local repository_webhook = client:RepositoryWebhook(nil)`

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
| `disable_reason` | `number` |  |
| `disable_reason_str` | `string` |  |
| `event` | `table` |  |
| `identifier` | `number` |  |
| `is_active` | `boolean` |  |
| `is_last_response_bad` | `boolean` |  |
| `last_response_status` | `number` |  |
| `last_response_status_str` | `string` |  |
| `num_sent` | `number` |  |
| `package_query` | `string` |  |
| `request_body_format` | `number` |  |
| `request_body_format_str` | `string` |  |
| `request_body_template_format` | `number` |  |
| `request_body_template_format_str` | `string` |  |
| `request_content_type` | `string` |  |
| `secret_header` | `string` |  |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `target_url` | `string` |  |
| `template` | `table` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: List

```lua
local repository_webhooks, err = client:RepositoryWebhook():list()
```

#### Example: Create

```lua
local repository_webhook, err = client:RepositoryWebhook():create({
  owner = "example_owner", -- any
  repo = "example_repo", -- any
})
```


### RepositoryX509EcdsaCertificate

Create an instance: `local repository_x509_ecdsa_certificate = client:RepositoryX509EcdsaCertificate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `certificate` | `string` |  |
| `certificate_chain` | `string` |  |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` |  |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `issuing_status` | `string` |  |

#### Example: Load

```lua
local repository_x509_ecdsa_certificate, err = client:RepositoryX509EcdsaCertificate():load({ identifier = "identifier", owner = "owner" })
```


### RepositoryX509RsaCertificate

Create an instance: `local repository_x509_rsa_certificate = client:RepositoryX509RsaCertificate(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `active` | `boolean` |  |
| `certificate` | `string` |  |
| `certificate_chain` | `string` |  |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` |  |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` |  |
| `issuing_status` | `string` |  |

#### Example: Load

```lua
local repository_x509_rsa_certificate, err = client:RepositoryX509RsaCertificate():load({ identifier = "identifier", owner = "owner" })
```


### Reset

Create an instance: `local reset = client:Reset(nil)`


### ResourcesRateCheck

Create an instance: `local resources_rate_check = client:ResourcesRateCheck(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `resource` | `table` |  |

#### Example: Load

```lua
local resources_rate_check, err = client:ResourcesRateCheck():load()
```


### Resync

Create an instance: `local resync = client:Resync(nil)`


### Retention

Create an instance: `local retention = client:Retention(nil)`


### Rpm

Create an instance: `local rpm = client:Rpm(nil)`

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
| `include_source` | `boolean` |  |
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verification_status` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local rpm, err = client:Rpm():load({ id = "rpm_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local rpms, err = client:Rpm():list()
```

#### Example: Create

```lua
local rpm, err = client:Rpm():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Rsa

Create an instance: `local rsa = client:Rsa(nil)`


### Ruby

Create an instance: `local ruby = client:Ruby(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local ruby, err = client:Ruby():load({ id = "ruby_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local rubys, err = client:Ruby():list()
```

#### Example: Create

```lua
local ruby, err = client:Ruby():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### SamlGroupSync

Create an instance: `local saml_group_sync = client:SamlGroupSync(nil)`


### Scan

Create an instance: `local scan = client:Scan(nil)`


### Self

Create an instance: `local self = client:Self(nil)`


### Service

Create an instance: `local service = client:Service(nil)`

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
| `team` | `table` |  |

#### Example: Load

```lua
local service, err = client:Service():load({ id = "service_id", org_id = "org_id" })
```

#### Example: List

```lua
local services, err = client:Service():list()
```

#### Example: Create

```lua
local service, err = client:Service():create({
  org_id = "example_org_id", -- string
})
```


### Status

Create an instance: `local status = client:Status(nil)`


### StatusBasic

Create an instance: `local status_basic = client:StatusBasic(nil)`

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

```lua
local status_basic, err = client:StatusBasic():load()
```


### StorageRegion

Create an instance: `local storage_region = client:StorageRegion(nil)`

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

```lua
local storage_region, err = client:StorageRegion():load({ id = "storage_region_id" })
```

#### Example: List

```lua
local storage_regions, err = client:StorageRegion():list()
```


### Swift

Create an instance: `local swift = client:Swift(nil)`

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
| `is_active` | `boolean` |  |
| `mode` | `string` |  |
| `name` | `string` |  |
| `pending_validation` | `boolean` |  |
| `priority` | `number` |  |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` |  |
| `verify_ssl` | `boolean` |  |

#### Example: Load

```lua
local swift, err = client:Swift():load({ id = "swift_id", identifier = "identifier", owner = "owner" })
```

#### Example: List

```lua
local swifts, err = client:Swift():list()
```

#### Example: Create

```lua
local swift, err = client:Swift():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
})
```


### Sync

Create an instance: `local sync = client:Sync(nil)`


### Tag

Create an instance: `local tag = client:Tag(nil)`


### Team

Create an instance: `local team = client:Team(nil)`


### Terraform

Create an instance: `local terraform = client:Terraform(nil)`


### Test

Create an instance: `local test = client:Test(nil)`


### Token

Create an instance: `local token = client:Token(nil)`


### TransferRegion

Create an instance: `local transfer_region = client:TransferRegion(nil)`


### User

Create an instance: `local user = client:User(nil)`

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

```lua
local users, err = client:User():list()
```


### UserAuthToken

Create an instance: `local user_auth_token = client:UserAuthToken(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `create(data)` | Create a new entity with the given data. |

#### Example: Create

```lua
local user_auth_token, err = client:UserAuthToken():create({
})
```


### UserAuthenticationToken

Create an instance: `local user_authentication_token = client:UserAuthenticationToken(nil)`

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

```lua
local user_authentication_token, err = client:UserAuthenticationToken():create({
})
```


### UserBrief

Create an instance: `local user_brief = client:UserBrief(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `authenticated` | `boolean` |  |
| `email` | `string` |  |
| `name` | `string` |  |
| `profile_url` | `string` |  |
| `self_url` | `string` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |

#### Example: Load

```lua
local user_brief, err = client:UserBrief():load()
```


### UserProfile

Create an instance: `local user_profile = client:UserProfile(nil)`

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

```lua
local user_profile, err = client:UserProfile():load({ id = "user_profile_id" })
```


### Vagrant

Create an instance: `local vagrant = client:Vagrant(nil)`


### Validate

Create an instance: `local validate = client:Validate(nil)`


### Version

Create an instance: `local version = client:Version(nil)`


### Vulnerability

Create an instance: `local vulnerability = client:Vulnerability(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `has_vulnerability` | `boolean` |  |
| `identifier` | `string` |  |
| `max_severity` | `string` |  |
| `num_vulnerability` | `number` |  |
| `package` | `table` |  |
| `result` | `table` |  |
| `scan_id` | `number` |  |
| `target` | `string` |  |
| `type` | `string` |  |

#### Example: Load

```lua
local vulnerability, err = client:Vulnerability():load({ id = "vulnerability_id" })
```

#### Example: List

```lua
local vulnerabilitys, err = client:Vulnerability():list()
```


### VulnerabilityPolicy

Create an instance: `local vulnerability_policy = client:VulnerabilityPolicy(nil)`


### Webhook

Create an instance: `local webhook = client:Webhook(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `remove(match)` | Remove the matching entity. |


### X509Ecdsa

Create an instance: `local x509_ecdsa = client:X509Ecdsa(nil)`


### X509Rsa

Create an instance: `local x509_rsa = client:X509Rsa(nil)`


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

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── cloudsmith_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`cloudsmith_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```lua
local cargo = client:Cargo()
cargo:list()

-- cargo:data_get() now returns the cargo data from the last list
-- cargo:match_get() returns the last match criteria
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
