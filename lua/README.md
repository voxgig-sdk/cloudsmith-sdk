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
local userprofile, err = client:UserProfile():load({ id = "example_id" })
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

local result, err = client:UserProfile():load({ id = "test01" })
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

    local cargo, err = client:Cargo():load({ id = "example_id" })
    if err then error(err) end
    -- cargo is the loaded record

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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `component` | `string` | The component to fetch from the upstream |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `distro_versions` | `table` | The distribution version that packages found on this upstream could be associated with. |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `gpg_key_inline` | `string` | A public GPG key to associate with packages found on this upstream. |
| `gpg_key_url` | `string` | When provided, Cloudsmith will fetch, validate, and associate a public GPG key found at the provided URL. |
| `gpg_verification` | `string` | The GPG signature verification mode for this upstream. |
| `include_sources` | `boolean` | When true, source packages will be available from this upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_distribution` | `string` | The distribution to fetch from the upstream |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verification_status` | `string` | The signature verification status for this upstream. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  distro_versions = {}, -- table
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `slug` | `string` | The slug identifier for this distribution |
| `variants` | `string` |  |
| `versions` | `table` | A list of the versions for this distribution |

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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `claim_value` | `string` | The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`. |
| `service_account` | `string` | The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access. |

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
| `active` | `number` | Number of packages with at least 1 download |
| `bandwidth` | `table` |  |
| `downloads` | `table` |  |
| `inactive` | `number` | Packages with zero downloads |
| `total` | `number` | Total number of packages in repo |

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
  bandwidth = {}, -- table
  downloads = {}, -- table
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
| `description` | `string` | Description of the package format |
| `distributions` | `table` | The distributions supported by this package format |
| `extensions` | `table` | A non-exhaustive list of extensions supported |
| `name` | `string` | Name for the package format |
| `premium` | `boolean` | If true the package format is a premium-only feature |
| `premium_plan_id` | `string` | The minimum plan id required for this package format |
| `premium_plan_name` | `string` | The minimum plan name required for this package format |
| `slug` | `string` | Slug for the package format |
| `supports` | `table` | A set of what the package format supports |

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
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

#### Example: Load

```lua
local gon, err = client:Gon():load({ identifier = "identifier", owner = "owner", slug_perm = "slug_perm" })
```

#### Example: List

```lua
local gons, err = client:Gon():list()
```

#### Example: Create

```lua
local gon, err = client:Gon():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
})
```


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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verification_status` | `string` | The signature verification status for this upstream. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `location` | `string` | The city/town/area your organization is based in. |
| `name` | `string` |  |
| `package` | `table` |  |
| `policy` | `table` |  |
| `reasons` | `table` |  |
| `slug` | `string` |  |
| `slug_perm` | `string` |  |
| `tagline` | `string` | A short public descriptive for your organization. |
| `vulnerability_scan_results` | `table` |  |

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
  name = "example_name", -- string
  package = {}, -- table
  policy = {}, -- table
  reasons = {}, -- table
  vulnerability_scan_results = {}, -- table
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
  idp_key = "example_idp_key", -- string
  idp_value = "example_idp_value", -- string
  team = "example_team", -- string
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
| `email` | `string` | The email of the user to be invited. |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` | The role to be assigned to the invited user. |
| `slug_perm` | `string` |  |
| `teams` | `table` |  |
| `user` | `string` | The slug of the user to be invited. |
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
| `email` | `string` | The email of the user to be invited. |
| `expires_at` | `string` |  |
| `inviter` | `string` |  |
| `inviter_url` | `string` |  |
| `org` | `string` |  |
| `role` | `string` | The role to be assigned to the invited user. |
| `slug_perm` | `string` | The slug_perm of the invite to be extended. |
| `teams` | `table` |  |
| `user` | `string` | The slug of the user to be invited. |
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
| `allow_unknown_licenses` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `slug_perm` | `string` |  |
| `spdx_identifiers` | `table` |  |
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
  name = "example_name", -- string
  spdx_identifiers = {}, -- table
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
| `allow_unknown_severity` | `boolean` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
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
  name = "example_name", -- string
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
| `saml_metadata_inline` | `string` | If configured, SAML metadata will be used as entered instead of retrieved from a remote URL. |
| `saml_metadata_url` | `string` | If configured, SAML metadata be retrieved from a remote URL. |

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
  name = "example_name", -- string
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
  role = "example_role", -- string
  user = "example_user", -- string
})
```


### Oss

Create an instance: `local oss = client:Oss(nil)`


### P2n

Create an instance: `local p2n = client:P2n(nil)`


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
| `active` | `number` | Number of packages with at least 1 download |
| `architectures` | `table` |  |
| `backend_kind` | `number` |  |
| `bandwidth` | `table` |  |
| `cdn_url` | `string` |  |
| `checksum_md5` | `string` |  |
| `checksum_sha1` | `string` |  |
| `checksum_sha256` | `string` |  |
| `checksum_sha512` | `string` |  |
| `count` | `number` |  |
| `dep_type` | `string` |  |
| `dependencies_checksum_md5` | `string` | A checksum of all of the package's dependencies. |
| `dependencies_url` | `string` |  |
| `description` | `string` | A textual description of this package. |
| `display_name` | `string` |  |
| `distro` | `table` | The distributions supported by this package format |
| `distro_version` | `table` | A list of the versions for this distribution |
| `downloads` | `table` |  |
| `epoch` | `number` | The epoch of the package version (if any). |
| `extension` | `string` |  |
| `filename` | `string` |  |
| `files` | `table` |  |
| `format` | `string` |  |
| `format_url` | `string` |  |
| `freeable_storage` | `number` | Amount of storage that will be freed if this package is deleted |
| `fully_qualified_name` | `string` |  |
| `identifier_perm` | `string` | Unique and permanent identifier for the package. |
| `identifiers` | `table` | Return a map of identifier field names and their values. |
| `inactive` | `number` | Packages with zero downloads |
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
| `license` | `string` | The license of this package. |
| `name` | `string` | The name of this package. |
| `namespace` | `string` |  |
| `namespace_url` | `string` |  |
| `num_downloads` | `number` |  |
| `num_files` | `number` |  |
| `operator` | `string` |  |
| `origin_repository` | `string` |  |
| `origin_repository_url` | `string` |  |
| `package_type` | `number` | The type of package contents. |
| `policy_violated` | `boolean` | Whether or not the package has violated any policy. |
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
| `size` | `number` | The calculated size of the package. |
| `slug` | `string` | The public unique identifier for the package. |
| `slug_perm` | `string` |  |
| `stage` | `number` | The synchronisation (in progress) stage of the package. |
| `stage_str` | `string` |  |
| `stage_updated_at` | `string` | The datetime the package stage was updated at. |
| `status` | `number` | The synchronisation status of the package. |
| `status_reason` | `string` | A textual description for the synchronous status reason (if any |
| `status_str` | `string` |  |
| `status_updated_at` | `string` | The datetime the package status was updated at. |
| `status_url` | `string` |  |
| `subtype` | `string` |  |
| `summary` | `string` | A one-liner synopsis of this package. |
| `sync_finished_at` | `string` | The datetime the package sync was finished at. |
| `sync_progress` | `number` | Synchronisation progress (from 0-100) |
| `tags` | `table` | All tags on the package, grouped by tag type. |
| `tags_immutable` | `table` | All tags on the package, grouped by tag type. |
| `total` | `number` | Total number of packages in repo |
| `type_display` | `string` |  |
| `uploaded_at` | `string` | The date this package was uploaded. |
| `uploader` | `string` |  |
| `uploader_url` | `string` |  |
| `version` | `string` | The raw version for this package. |
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
  bandwidth = {}, -- table
  count = 1, -- number
  distro = {}, -- table
  downloads = {}, -- table
  last_push = "example_last_push", -- string
  num_downloads = 1, -- number
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
| `enabled` | `boolean` | Whether this rule is enabled or disabled. |
| `name` | `string` |  |
| `package_query_string` | `string` | Packages that match this query will trigger this deny rule. |
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
  package_query_string = "example_package_query_string", -- string
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
| `identifier` | `string` | The identifier for the file to use uploading parts. |
| `upload_querystring` | `string` | The querystring to use for the next-step PUT upload. |
| `upload_url` | `string` | The URL to use for the next-step PUT upload |

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
| `allow_unknown_licenses` | `boolean` |  |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `evaluation_count` | `number` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `policy` | `table` |  |
| `slug_perm` | `string` |  |
| `spdx_identifiers` | `table` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
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
  policy = {}, -- table
  spdx_identifiers = {}, -- table
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
| `allow_unknown_severity` | `boolean` | Denotes whether vulnerabilities detected by a security scan with an unknown severity are permitted by this policy. |
| `created_at` | `string` |  |
| `description` | `string` |  |
| `evaluation_count` | `number` |  |
| `min_severity` | `string` |  |
| `name` | `string` |  |
| `on_violation_quarantine` | `boolean` |  |
| `package_query_string` | `string` |  |
| `policy` | `table` |  |
| `slug_perm` | `string` |  |
| `status` | `string` |  |
| `updated_at` | `string` |  |
| `url` | `string` |  |
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
| `claims` | `table` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `enabled` | `boolean` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | The name of the provider settings are being configured for |
| `provider_url` | `string` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `table` | The service accounts associated with these provider settings. |
| `slug` | `string` | The slug of the provider settings |
| `slug_perm` | `string` | The unique, immutable identifier of the provider settings. |

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
| `claims` | `table` | The set of claims that any received tokens from the provider must contain to authenticate as the configured service account. |
| `dynamic_mappings` | `table` | The dynamic mappings of `mapping_claim` values to service accounts. |
| `enabled` | `boolean` | Whether the provider settings should be used for incoming OIDC requests. |
| `mapping_claim` | `string` | The OIDC claim to use for mapping to service accounts in dynamic_mappings. |
| `name` | `string` | The name of the provider settings are being configured for |
| `provider_url` | `string` | The URL from the provider that serves as the base for the OpenID configuration. |
| `service_accounts` | `table` | The service accounts associated with these provider settings. |
| `slug` | `string` | The slug of the provider settings |
| `slug_perm` | `string` | The unique, immutable identifier of the provider settings. |

#### Example: Create

```lua
local provider_settings_write, err = client:ProviderSettingsWrite():create({
  org_id = "example_org_id", -- string
  claims = {}, -- table
  enabled = true, -- boolean
  name = "example_name", -- string
  provider_url = "example_provider_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `display` | `table` |  |
| `history` | `table` |  |
| `raw` | `table` |  |

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
| `cdn_url` | `string` | Base URL from which packages and other artifacts are downloaded. |
| `content_kind` | `string` | The repository content kind determines whether this repository contains packages, or provides a distribution of packages from other repositories. |
| `contextual_auth_realm` | `boolean` | If checked, missing credentials for this repository where basic authentication is required shall present an enriched value in the 'WWW-Authenticate' header containing the namespace and repository. |
| `copy_own` | `boolean` | If checked, users can copy any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `copy_packages` | `string` | This defines the minimum level of privilege required for a user to copy packages. |
| `cosign_signing_enabled` | `boolean` | When enabled, all pushed (or pulled from upstream) OCI packages and artifacts will be signed using cosign with the repository's ECDSA key. |
| `created_at` | `string` |  |
| `default_privilege` | `string` | This defines the default level of privilege that all of your organization members have for this repository. |
| `delete_own` | `boolean` | If checked, users can delete any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `delete_packages` | `string` | This defines the minimum level of privilege required for a user to delete packages. |
| `deleted_at` | `string` | The datetime the repository was manually deleted at. |
| `description` | `string` | A description of the repository's purpose/contents. |
| `distributes` | `table` | The repositories distributed through this repo. |
| `docker_refresh_tokens_enabled` | `boolean` | If checked, refresh tokens will be issued in addition to access tokens for Docker authentication. |
| `ecdsa_keys` | `table` |  |
| `enforce_eula` | `boolean` | If checked, downloads will explicitly require acceptance of an EULA. |
| `gpg_keys` | `table` |  |
| `index_files` | `boolean` | If checked, files contained in packages will be indexed, which increase the synchronisation time required for packages. |
| `is_open_source` | `boolean` |  |
| `is_private` | `boolean` |  |
| `is_public` | `boolean` |  |
| `manage_entitlements_privilege` | `string` | This defines the minimum level of privilege required for a user to manage entitlement tokens with private repositories. |
| `move_own` | `boolean` | If checked, users can move any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `move_packages` | `string` | This defines the minimum level of privilege required for a user to move packages. |
| `name` | `string` | A descriptive name for the repository. |
| `namespace` | `string` | Namespace to which this repository belongs. |
| `namespace_url` | `string` | API endpoint where data about this namespace can be retrieved. |
| `nuget_native_signing_enabled` | `boolean` | When enabled, all pushed (or pulled from upstream) nuget packages and artifacts will be signed using the repository's X.509 RSA certificate. |
| `num_downloads` | `number` | The number of downloads for packages in the repository. |
| `num_policy_violated_packages` | `number` | Number of packages with policy violations in a repository. |
| `num_quarantined_packages` | `number` | Number of quarantined packages in a repository. |
| `open_source_license` | `string` | The SPDX identifier of the open source license. |
| `open_source_project_url` | `string` | The URL to the Open-Source project, used for validating that the project meets the requirements for Open-Source. |
| `package_count` | `number` | The number of packages in the repository. |
| `package_group_count` | `number` | The number of groups in the repository. |
| `proxy_npmjs` | `boolean` | If checked, Npm packages that are not in the repository when requested by clients will automatically be proxied from the public npmjs.org registry. |
| `proxy_pypi` | `boolean` | If checked, Python packages that are not in the repository when requested by clients will automatically be proxied from the public pypi.python.org registry. |
| `raw_package_index_enabled` | `boolean` | If checked, HTML and JSON indexes will be generated that list all available raw packages in the repository. |
| `raw_package_index_signatures_enabled` | `boolean` | If checked, the HTML and JSON indexes will display raw package GPG signatures alongside the index packages. |
| `replace_packages` | `string` | This defines the minimum level of privilege required for a user to republish packages. |
| `replace_packages_by_default` | `boolean` | If checked, uploaded packages will overwrite/replace any others with the same attributes (e.g. |
| `repository_type` | `number` | The repository type changes how it is accessed and billed. |
| `repository_type_str` | `string` | The repository type changes how it is accessed and billed. |
| `resync_own` | `boolean` | If checked, users can resync any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `resync_packages` | `string` | This defines the minimum level of privilege required for a user to resync packages. |
| `scan_own` | `boolean` | If checked, users can scan any of their own packages that they have uploaded, assuming that they still have write privilege for the repository. |
| `scan_packages` | `string` | This defines the minimum level of privilege required for a user to scan packages. |
| `self_html_url` | `string` | Website URL for this repository. |
| `self_url` | `string` | API endpoint where data about this repository can be retrieved. |
| `show_setup_all` | `boolean` | If checked, the Set Me Up help for all formats will always be shown, even if you don't have packages of that type uploaded. |
| `size` | `number` | The calculated size of the repository. |
| `size_str` | `string` | The calculated size of the repository (human readable). |
| `slug` | `string` | The slug identifies the repository in URIs. |
| `slug_perm` | `string` | The slug_perm immutably identifies the repository. |
| `storage_region` | `string` | The Cloudsmith region in which package files are stored. |
| `strict_npm_validation` | `boolean` | If checked, npm packages will be validated strictly to ensure the package matches specifcation. |
| `tag_pre_releases_as_latest` | `boolean` | If checked, packages pushed with a pre-release component on that version will be marked with the 'latest' tag. |
| `use_debian_labels` | `boolean` | If checked, a 'Label' field will be present in Debian-based repositories. |
| `use_default_cargo_upstream` | `boolean` | If checked, dependencies of uploaded Cargo crates which do not set an explicit value for "registry" will be assumed to be available from crates.io. |
| `use_entitlements_privilege` | `string` | This defines the minimum level of privilege required for a user to see/use entitlement tokens with private repositories. |
| `use_noarch_packages` | `boolean` | If checked, noarch packages (if supported) are enabled in installations/configurations. |
| `use_source_packages` | `boolean` | If checked, source packages (if supported) are enabled in installations/configurations. |
| `use_vulnerability_scanning` | `boolean` | If checked, vulnerability scanning will be enabled for all supported packages within this repository. |
| `user_entitlements_enabled` | `boolean` | If checked, users can use and manage their own user-specific entitlement token for the repository (if private). |
| `view_statistics` | `string` | This defines the minimum level of privilege required for a user to view repository statistics, to include entitlement-based usage, if applicable. |

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
  id = "example_id", -- string
  name = "example_name", -- string
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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
| `fingerprint` | `string` | The long identifier used by ECDSA for this key. |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` | The public key given to repository users. |
| `ssh_fingerprint` | `string` | The SSH fingerprint used by ECDSA for this key. |

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
| `geoip_enabled` | `boolean` | If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules. |

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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `comment` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
| `fingerprint` | `string` | The long identifier used by GPG for this key. |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` | The public key given to repository users. |

#### Example: Load

```lua
local repository_gpg_key, err = client:RepositoryGpgKey():load({ identifier = "identifier", owner = "owner" })
```

#### Example: Create

```lua
local repository_gpg_key, err = client:RepositoryGpgKey():create({
  identifier = "example_identifier", -- any
  owner = "example_owner", -- any
  comment = "example_comment", -- string
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
| `privilege` | `string` | The level of privilege that the user or team should be granted to the specified repository. |
| `service` | `string` | The service identifier (slug). |
| `team` | `string` | The team identifier (slug). |
| `user` | `string` | The user identifier (slug). |

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
| `retention_count_limit` | `number` | The maximum X number of packages to retain. |
| `retention_days_limit` | `number` | The X number of days of packages to retain. |
| `retention_enabled` | `boolean` | If checked, the retention lifecycle rules will be activated for the repository. |
| `retention_group_by_format` | `boolean` | If checked, retention will apply to packages by package formats rather than across all package formats.For example, when retaining by a limit of 1 and you upload PythonPkg 1.0 and RubyPkg 1.0, no packages are deleted because they are diffe… |
| `retention_group_by_name` | `boolean` | If checked, retention will apply to groups of packages by name rather than all packages.<br>For example, when retaining by a limit of 1 and you upload PkgA 1.0, PkgB 1.0 and PkgB 1.1; only PkgB 1.0 is deleted because there are two (2) PkgB… |
| `retention_group_by_package_type` | `boolean` | If checked, retention will apply to packages by package type (e.g. |
| `retention_package_query_string` | `string` | A package search expression which, if provided, filters the packages to be deleted.<br>For example, a search expression of `name:foo` will result in only packages called 'foo' being deleted, or a search expression of `tag:~latest` will pre… |
| `retention_size_limit` | `number` | The maximum X total size (in bytes) of packages to retain. |

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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
| `fingerprint` | `string` | The long identifier used by RSA for this key. |
| `fingerprint_short` | `string` |  |
| `public_key` | `string` | The public key given to repository users. |
| `ssh_fingerprint` | `string` | The SSH fingerprint used by RSA for this key. |

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
| `clients` | `number` |  |
| `created_at` | `string` | The datetime the token was updated at. |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `boolean` | If selected this is the default token for this repository. |
| `disable_url` | `string` |  |
| `downloads` | `number` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `table` |  |
| `eula_accepted_at` | `string` | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `boolean` | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `boolean` |  |
| `identifier` | `number` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `boolean` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `boolean` |  |
| `limit_bandwidth` | `number` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `number` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `number` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `table` |  |
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
  name = "example_name", -- string
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
| `clients` | `number` |  |
| `created_at` | `string` | The datetime the token was updated at. |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `default` | `boolean` | If selected this is the default token for this repository. |
| `disable_url` | `string` |  |
| `downloads` | `number` |  |
| `enable_url` | `string` |  |
| `eula_accepted` | `table` |  |
| `eula_accepted_at` | `string` | The datetime the EULA was accepted at. |
| `eula_accepted_from` | `string` |  |
| `eula_required` | `boolean` | If checked, a EULA acceptance is required for this token. |
| `has_limits` | `boolean` |  |
| `identifier` | `number` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `boolean` | If enabled, the token will allow downloads based on configured restrictions (if any). |
| `is_limited` | `boolean` |  |
| `limit_bandwidth` | `number` | The maximum download bandwidth allowed for the token. |
| `limit_bandwidth_unit` | `string` |  |
| `limit_date_range_from` | `string` | The starting date/time the token is allowed to be used from. |
| `limit_date_range_to` | `string` | The ending date/time the token is allowed to be used until. |
| `limit_num_clients` | `number` | The maximum number of unique clients allowed for the token. |
| `limit_num_downloads` | `number` | The maximum number of downloads allowed for the token. |
| `limit_package_query` | `string` | The package-based search query to apply to restrict downloads to. |
| `limit_path_query` | `string` | THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. |
| `metadata` | `table` |  |
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
| `tokens` | `table` | The entitlements that have been synchronised. |

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
| `load(match)` | Load a single entity by match criteria. |
| `update(data)` | Update an existing entity. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `created_at` | `string` |  |
| `created_by` | `string` |  |
| `created_by_url` | `string` |  |
| `disable_reason` | `number` |  |
| `disable_reason_str` | `string` |  |
| `events` | `table` |  |
| `identifier` | `number` | Deprecated (23-05-15): Please use 'slug_perm' instead. |
| `is_active` | `boolean` | If enabled, the webhook will trigger on subscribed events and send payloads to the configured target URL. |
| `is_last_response_bad` | `boolean` |  |
| `last_response_status` | `number` |  |
| `last_response_status_str` | `string` |  |
| `num_sent` | `number` |  |
| `package_query` | `string` | The package-based search query for webhooks to fire. |
| `request_body_format` | `number` | The format of the payloads for webhook requests. |
| `request_body_format_str` | `string` |  |
| `request_body_template_format` | `number` | The format of the payloads for webhook requests. |
| `request_body_template_format_str` | `string` |  |
| `request_content_type` | `string` | The value that will be sent for the 'Content Type' header. |
| `secret_header` | `string` | The header to send the predefined secret in. |
| `self_url` | `string` |  |
| `slug_perm` | `string` |  |
| `target_url` | `string` | The destination URL that webhook payloads will be POST'ed to. |
| `templates` | `table` |  |
| `updated_at` | `string` |  |
| `updated_by` | `string` |  |
| `updated_by_url` | `string` |  |
| `verify_ssl` | `boolean` | If enabled, SSL certificates is verified when webhooks are sent. |

#### Example: Load

```lua
local repository_webhook, err = client:RepositoryWebhook():load({ identifier = "identifier", owner = "owner", repo = "repo" })
```

#### Example: List

```lua
local repository_webhooks, err = client:RepositoryWebhook():list()
```

#### Example: Create

```lua
local repository_webhook, err = client:RepositoryWebhook():create({
  owner = "example_owner", -- any
  repo = "example_repo", -- any
  events = {}, -- table
  target_url = "example_target_url", -- string
  templates = {}, -- table
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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `certificate` | `string` | The issued certificate. |
| `certificate_chain` | `string` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
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
| `active` | `boolean` | If selected this is the active key for this repository. |
| `certificate` | `string` | The issued certificate. |
| `certificate_chain` | `string` | Base64 encoded CA certificate chain. |
| `certificate_chain_fingerprint` | `string` |  |
| `certificate_chain_fingerprint_short` | `string` |  |
| `certificate_fingerprint` | `string` | The SHA-256 long identifier used |
| `certificate_fingerprint_short` | `string` |  |
| `created_at` | `string` |  |
| `default` | `boolean` | If selected this is the default key for this repository. |
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
| `interval` | `number` | The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window. |
| `limit` | `number` | The maximum number of requests that you are permitted to send per hour |
| `remaining` | `number` | The number of requests that are remaining in the current rate limit window |
| `reset` | `number` | The UTC epoch timestamp at which the current rate limit window will reset |
| `reset_iso_8601` | `string` | The ISO 8601 datetime at which the current rate limit window will reset |
| `throttled` | `boolean` | If true, throttling is currently being enforced. |

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
| `include_sources` | `boolean` | When checked, source packages will be available from this upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verification_status` | `string` | The signature verification status for this upstream. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  distro_version = "example_distro_version", -- string
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `description` | `string` | The description of the service |
| `key` | `string` | The API key of the service |
| `key_expires_at` | `string` | The time at which the API key will expire. |
| `name` | `string` | The name of the service |
| `role` | `string` | The role of the service. |
| `slug` | `string` | The slug of the service |
| `teams` | `table` |  |

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
  name = "example_name", -- string
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
| `detail` | `string` | The message describing the state of the API. |
| `version` | `string` | The current version for the Cloudsmith service. |

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
| `label` | `string` | Name of the storage region |
| `slug` | `string` | Slug for the storage region |

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
| `auth_mode` | `string` | The authentication mode to use when accessing this upstream. |
| `auth_secret` | `string` | Secret to provide with requests to upstream. |
| `auth_username` | `string` | Username to provide with requests to upstream. |
| `created_at` | `string` | The datetime the upstream source was created. |
| `disable_reason` | `string` |  |
| `extra_header_1` | `string` | The key for extra header #1 to send to upstream. |
| `extra_header_2` | `string` | The key for extra header #2 to send to upstream. |
| `extra_value_1` | `string` | The value for extra header #1 to send to upstream. |
| `extra_value_2` | `string` | The value for extra header #2 to send to upstream. |
| `is_active` | `boolean` | Whether or not this upstream is active and ready for requests. |
| `mode` | `string` | The mode that this upstream should operate in. |
| `name` | `string` | A descriptive name for this upstream source. |
| `pending_validation` | `boolean` | When true, this upstream source is pending validation. |
| `priority` | `number` | Upstream sources are selected for resolving requests by sequential order (1..n), followed by creation date. |
| `slug_perm` | `string` |  |
| `updated_at` | `string` |  |
| `upstream_url` | `string` | The URL for this upstream source. |
| `verify_ssl` | `boolean` | If enabled, SSL certificates are verified when requests are made to this upstream. |

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
  name = "example_name", -- string
  upstream_url = "example_upstream_url", -- string
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
| `created` | `string` | The time at which the API key was created. |
| `key` | `string` | The unique API key used for authentication. |
| `slug_perm` | `string` | The slug_perm for token. |

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
| `created` | `string` | The time at which the API key was created. |
| `key` | `string` | The unique API key used for authentication. |
| `slug_perm` | `string` | The slug_perm for token. |

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
| `authenticated` | `boolean` | If true then you're logged in as a user. |
| `email` | `string` | Your email address that we use to contact you. |
| `name` | `string` | The full name of the user (if any). |
| `profile_url` | `string` | The URL for the full profile of the user. |
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
| `tagline` | `string` | Your tagline is a sentence about you. |
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
| `created_at` | `string` | The time this scan result was stored. |
| `has_vulnerabilities` | `boolean` | Do the results contain any known vulnerabilities? |
| `identifier` | `string` |  |
| `max_severity` | `string` |  |
| `num_vulnerabilities` | `number` |  |
| `package` | `table` |  |
| `scan_id` | `number` | Deprecated (23-05-15): Please use 'identifier' instead. |
| `scans` | `table` |  |

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local userprofile = client:UserProfile()
userprofile:load({ id = "example_id" })

-- userprofile:data_get() now returns the userprofile data from the last load
-- userprofile:match_get() returns the last match criteria
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
