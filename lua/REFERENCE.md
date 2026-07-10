# Cloudsmith Lua SDK Reference

Complete API reference for the Cloudsmith Lua SDK.


## CloudsmithSDK

### Constructor

```lua
local sdk = require("cloudsmith_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Abort(data)`

Create a new `Abort` entity instance. Pass `nil` for no initial data.

#### `Alpine(data)`

Create a new `Alpine` entity instance. Pass `nil` for no initial data.

#### `AuditLog(data)`

Create a new `AuditLog` entity instance. Pass `nil` for no initial data.

#### `Basic(data)`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `Cargo(data)`

Create a new `Cargo` entity instance. Pass `nil` for no initial data.

#### `Cocoapod(data)`

Create a new `Cocoapod` entity instance. Pass `nil` for no initial data.

#### `Complete(data)`

Create a new `Complete` entity instance. Pass `nil` for no initial data.

#### `Composer(data)`

Create a new `Composer` entity instance. Pass `nil` for no initial data.

#### `Conan(data)`

Create a new `Conan` entity instance. Pass `nil` for no initial data.

#### `Conda(data)`

Create a new `Conda` entity instance. Pass `nil` for no initial data.

#### `Copy(data)`

Create a new `Copy` entity instance. Pass `nil` for no initial data.

#### `Cran(data)`

Create a new `Cran` entity instance. Pass `nil` for no initial data.

#### `Dart(data)`

Create a new `Dart` entity instance. Pass `nil` for no initial data.

#### `Deb(data)`

Create a new `Deb` entity instance. Pass `nil` for no initial data.

#### `DenyPolicy(data)`

Create a new `DenyPolicy` entity instance. Pass `nil` for no initial data.

#### `Dependency(data)`

Create a new `Dependency` entity instance. Pass `nil` for no initial data.

#### `Disable(data)`

Create a new `Disable` entity instance. Pass `nil` for no initial data.

#### `DistributionFull(data)`

Create a new `DistributionFull` entity instance. Pass `nil` for no initial data.

#### `Distro(data)`

Create a new `Distro` entity instance. Pass `nil` for no initial data.

#### `Docker(data)`

Create a new `Docker` entity instance. Pass `nil` for no initial data.

#### `DynamicMapping(data)`

Create a new `DynamicMapping` entity instance. Pass `nil` for no initial data.

#### `Ecdsa(data)`

Create a new `Ecdsa` entity instance. Pass `nil` for no initial data.

#### `Enable(data)`

Create a new `Enable` entity instance. Pass `nil` for no initial data.

#### `Entitlement(data)`

Create a new `Entitlement` entity instance. Pass `nil` for no initial data.

#### `Evaluation(data)`

Create a new `Evaluation` entity instance. Pass `nil` for no initial data.

#### `File(data)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Format(data)`

Create a new `Format` entity instance. Pass `nil` for no initial data.

#### `Geoip(data)`

Create a new `Geoip` entity instance. Pass `nil` for no initial data.

#### `Gon(data)`

Create a new `Gon` entity instance. Pass `nil` for no initial data.

#### `Gon2(data)`

Create a new `Gon2` entity instance. Pass `nil` for no initial data.

#### `Gon3(data)`

Create a new `Gon3` entity instance. Pass `nil` for no initial data.

#### `Gon4(data)`

Create a new `Gon4` entity instance. Pass `nil` for no initial data.

#### `Gon5(data)`

Create a new `Gon5` entity instance. Pass `nil` for no initial data.

#### `Gon6(data)`

Create a new `Gon6` entity instance. Pass `nil` for no initial data.

#### `Gon7(data)`

Create a new `Gon7` entity instance. Pass `nil` for no initial data.

#### `Gon8(data)`

Create a new `Gon8` entity instance. Pass `nil` for no initial data.

#### `Gon9(data)`

Create a new `Gon9` entity instance. Pass `nil` for no initial data.

#### `Gpg(data)`

Create a new `Gpg` entity instance. Pass `nil` for no initial data.

#### `Group(data)`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `Helm(data)`

Create a new `Helm` entity instance. Pass `nil` for no initial data.

#### `Hex(data)`

Create a new `Hex` entity instance. Pass `nil` for no initial data.

#### `History(data)`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `Huggingface(data)`

Create a new `Huggingface` entity instance. Pass `nil` for no initial data.

#### `Info(data)`

Create a new `Info` entity instance. Pass `nil` for no initial data.

#### `Invite(data)`

Create a new `Invite` entity instance. Pass `nil` for no initial data.

#### `LicensePolicy(data)`

Create a new `LicensePolicy` entity instance. Pass `nil` for no initial data.

#### `Limit(data)`

Create a new `Limit` entity instance. Pass `nil` for no initial data.

#### `Luarock(data)`

Create a new `Luarock` entity instance. Pass `nil` for no initial data.

#### `Maven(data)`

Create a new `Maven` entity instance. Pass `nil` for no initial data.

#### `Member(data)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Move(data)`

Create a new `Move` entity instance. Pass `nil` for no initial data.

#### `Namespace(data)`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `NamespaceAuditLog(data)`

Create a new `NamespaceAuditLog` entity instance. Pass `nil` for no initial data.

#### `Npm(data)`

Create a new `Npm` entity instance. Pass `nil` for no initial data.

#### `Nuget(data)`

Create a new `Nuget` entity instance. Pass `nil` for no initial data.

#### `OpenidConnect(data)`

Create a new `OpenidConnect` entity instance. Pass `nil` for no initial data.

#### `Org(data)`

Create a new `Org` entity instance. Pass `nil` for no initial data.

#### `OrganizationGroupSync(data)`

Create a new `OrganizationGroupSync` entity instance. Pass `nil` for no initial data.

#### `OrganizationGroupSyncStatus(data)`

Create a new `OrganizationGroupSyncStatus` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvite(data)`

Create a new `OrganizationInvite` entity instance. Pass `nil` for no initial data.

#### `OrganizationInviteExtend(data)`

Create a new `OrganizationInviteExtend` entity instance. Pass `nil` for no initial data.

#### `OrganizationMembership(data)`

Create a new `OrganizationMembership` entity instance. Pass `nil` for no initial data.

#### `OrganizationMembershipRoleUpdate(data)`

Create a new `OrganizationMembershipRoleUpdate` entity instance. Pass `nil` for no initial data.

#### `OrganizationMembershipVisibilityUpdate(data)`

Create a new `OrganizationMembershipVisibilityUpdate` entity instance. Pass `nil` for no initial data.

#### `OrganizationPackageLicensePolicy(data)`

Create a new `OrganizationPackageLicensePolicy` entity instance. Pass `nil` for no initial data.

#### `OrganizationPackageVulnerabilityPolicy(data)`

Create a new `OrganizationPackageVulnerabilityPolicy` entity instance. Pass `nil` for no initial data.

#### `OrganizationSamlAuth(data)`

Create a new `OrganizationSamlAuth` entity instance. Pass `nil` for no initial data.

#### `OrganizationTeam(data)`

Create a new `OrganizationTeam` entity instance. Pass `nil` for no initial data.

#### `OrganizationTeamMember(data)`

Create a new `OrganizationTeamMember` entity instance. Pass `nil` for no initial data.

#### `Oss(data)`

Create a new `Oss` entity instance. Pass `nil` for no initial data.

#### `P2n(data)`

Create a new `P2n` entity instance. Pass `nil` for no initial data.

#### `P2n2(data)`

Create a new `P2n2` entity instance. Pass `nil` for no initial data.

#### `Package(data)`

Create a new `Package` entity instance. Pass `nil` for no initial data.

#### `PackageDenyPolicy(data)`

Create a new `PackageDenyPolicy` entity instance. Pass `nil` for no initial data.

#### `PackageFilePartsUpload(data)`

Create a new `PackageFilePartsUpload` entity instance. Pass `nil` for no initial data.

#### `PackageFileUpload(data)`

Create a new `PackageFileUpload` entity instance. Pass `nil` for no initial data.

#### `PackageLicensePolicyEvaluation(data)`

Create a new `PackageLicensePolicyEvaluation` entity instance. Pass `nil` for no initial data.

#### `PackageVersionBadge(data)`

Create a new `PackageVersionBadge` entity instance. Pass `nil` for no initial data.

#### `PackageVulnerabilityPolicyEvaluation(data)`

Create a new `PackageVulnerabilityPolicyEvaluation` entity instance. Pass `nil` for no initial data.

#### `Privilege(data)`

Create a new `Privilege` entity instance. Pass `nil` for no initial data.

#### `Profile(data)`

Create a new `Profile` entity instance. Pass `nil` for no initial data.

#### `ProviderSetting(data)`

Create a new `ProviderSetting` entity instance. Pass `nil` for no initial data.

#### `ProviderSettingsWrite(data)`

Create a new `ProviderSettingsWrite` entity instance. Pass `nil` for no initial data.

#### `Python(data)`

Create a new `Python` entity instance. Pass `nil` for no initial data.

#### `Quarantine(data)`

Create a new `Quarantine` entity instance. Pass `nil` for no initial data.

#### `Quota(data)`

Create a new `Quota` entity instance. Pass `nil` for no initial data.

#### `Raw(data)`

Create a new `Raw` entity instance. Pass `nil` for no initial data.

#### `Refresh(data)`

Create a new `Refresh` entity instance. Pass `nil` for no initial data.

#### `Regenerate(data)`

Create a new `Regenerate` entity instance. Pass `nil` for no initial data.

#### `Repo(data)`

Create a new `Repo` entity instance. Pass `nil` for no initial data.

#### `RepositoryAuditLog(data)`

Create a new `RepositoryAuditLog` entity instance. Pass `nil` for no initial data.

#### `RepositoryEcdsaKey(data)`

Create a new `RepositoryEcdsaKey` entity instance. Pass `nil` for no initial data.

#### `RepositoryGeoIpRule(data)`

Create a new `RepositoryGeoIpRule` entity instance. Pass `nil` for no initial data.

#### `RepositoryGeoIpStatus(data)`

Create a new `RepositoryGeoIpStatus` entity instance. Pass `nil` for no initial data.

#### `RepositoryGeoIpTestAddress(data)`

Create a new `RepositoryGeoIpTestAddress` entity instance. Pass `nil` for no initial data.

#### `RepositoryGpgKey(data)`

Create a new `RepositoryGpgKey` entity instance. Pass `nil` for no initial data.

#### `RepositoryPrivilegeInput(data)`

Create a new `RepositoryPrivilegeInput` entity instance. Pass `nil` for no initial data.

#### `RepositoryRetentionRule(data)`

Create a new `RepositoryRetentionRule` entity instance. Pass `nil` for no initial data.

#### `RepositoryRsaKey(data)`

Create a new `RepositoryRsaKey` entity instance. Pass `nil` for no initial data.

#### `RepositoryToken(data)`

Create a new `RepositoryToken` entity instance. Pass `nil` for no initial data.

#### `RepositoryTokenRefresh(data)`

Create a new `RepositoryTokenRefresh` entity instance. Pass `nil` for no initial data.

#### `RepositoryTokenSync(data)`

Create a new `RepositoryTokenSync` entity instance. Pass `nil` for no initial data.

#### `RepositoryWebhook(data)`

Create a new `RepositoryWebhook` entity instance. Pass `nil` for no initial data.

#### `RepositoryX509EcdsaCertificate(data)`

Create a new `RepositoryX509EcdsaCertificate` entity instance. Pass `nil` for no initial data.

#### `RepositoryX509RsaCertificate(data)`

Create a new `RepositoryX509RsaCertificate` entity instance. Pass `nil` for no initial data.

#### `Reset(data)`

Create a new `Reset` entity instance. Pass `nil` for no initial data.

#### `ResourcesRateCheck(data)`

Create a new `ResourcesRateCheck` entity instance. Pass `nil` for no initial data.

#### `Resync(data)`

Create a new `Resync` entity instance. Pass `nil` for no initial data.

#### `Retention(data)`

Create a new `Retention` entity instance. Pass `nil` for no initial data.

#### `Rpm(data)`

Create a new `Rpm` entity instance. Pass `nil` for no initial data.

#### `Rsa(data)`

Create a new `Rsa` entity instance. Pass `nil` for no initial data.

#### `Ruby(data)`

Create a new `Ruby` entity instance. Pass `nil` for no initial data.

#### `SamlGroupSync(data)`

Create a new `SamlGroupSync` entity instance. Pass `nil` for no initial data.

#### `Scan(data)`

Create a new `Scan` entity instance. Pass `nil` for no initial data.

#### `Self(data)`

Create a new `Self` entity instance. Pass `nil` for no initial data.

#### `Service(data)`

Create a new `Service` entity instance. Pass `nil` for no initial data.

#### `Status(data)`

Create a new `Status` entity instance. Pass `nil` for no initial data.

#### `StatusBasic(data)`

Create a new `StatusBasic` entity instance. Pass `nil` for no initial data.

#### `StorageRegion(data)`

Create a new `StorageRegion` entity instance. Pass `nil` for no initial data.

#### `Swift(data)`

Create a new `Swift` entity instance. Pass `nil` for no initial data.

#### `Sync(data)`

Create a new `Sync` entity instance. Pass `nil` for no initial data.

#### `Tag(data)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `Team(data)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `Terraform(data)`

Create a new `Terraform` entity instance. Pass `nil` for no initial data.

#### `Test(data)`

Create a new `Test` entity instance. Pass `nil` for no initial data.

#### `Token(data)`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `TransferRegion(data)`

Create a new `TransferRegion` entity instance. Pass `nil` for no initial data.

#### `User(data)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserAuthToken(data)`

Create a new `UserAuthToken` entity instance. Pass `nil` for no initial data.

#### `UserAuthenticationToken(data)`

Create a new `UserAuthenticationToken` entity instance. Pass `nil` for no initial data.

#### `UserBrief(data)`

Create a new `UserBrief` entity instance. Pass `nil` for no initial data.

#### `UserProfile(data)`

Create a new `UserProfile` entity instance. Pass `nil` for no initial data.

#### `Vagrant(data)`

Create a new `Vagrant` entity instance. Pass `nil` for no initial data.

#### `Validate(data)`

Create a new `Validate` entity instance. Pass `nil` for no initial data.

#### `Version(data)`

Create a new `Version` entity instance. Pass `nil` for no initial data.

#### `Vulnerability(data)`

Create a new `Vulnerability` entity instance. Pass `nil` for no initial data.

#### `VulnerabilityPolicy(data)`

Create a new `VulnerabilityPolicy` entity instance. Pass `nil` for no initial data.

#### `Webhook(data)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `X509Ecdsa(data)`

Create a new `X509Ecdsa` entity instance. Pass `nil` for no initial data.

#### `X509Rsa(data)`

Create a new `X509Rsa` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## AbortEntity

```lua
local abort = client:Abort(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AbortEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AlpineEntity

```lua
local alpine = client:Alpine(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AlpineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## AuditLogEntity

```lua
local audit_log = client:AuditLog(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `AuditLogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## BasicEntity

```lua
local basic = client:Basic(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CargoEntity

```lua
local cargo = client:Cargo(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Cargo():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Cargo():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Cargo():load({ id = "cargo_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Cargo():update({
  id = "cargo_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CargoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CocoapodEntity

```lua
local cocoapod = client:Cocoapod(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CocoapodEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CompleteEntity

```lua
local complete = client:Complete(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CompleteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ComposerEntity

```lua
local composer = client:Composer(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Composer():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Composer():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Composer():load({ id = "composer_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Composer():update({
  id = "composer_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ComposerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ConanEntity

```lua
local conan = client:Conan(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ConanEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CondaEntity

```lua
local conda = client:Conda(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Conda():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Conda():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Conda():load({ id = "conda_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Conda():update({
  id = "conda_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CondaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CopyEntity

```lua
local copy = client:Copy(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CopyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## CranEntity

```lua
local cran = client:Cran(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Cran():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Cran():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Cran():load({ id = "cran_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Cran():update({
  id = "cran_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `CranEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DartEntity

```lua
local dart = client:Dart(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Dart():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Dart():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Dart():load({ id = "dart_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Dart():update({
  id = "dart_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DartEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DebEntity

```lua
local deb = client:Deb(nil)
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
| `distro_version` | `table` | Yes |  |
| `extra_header_1` | `string` | No |  |
| `extra_header_2` | `string` | No |  |
| `extra_value_1` | `string` | No |  |
| `extra_value_2` | `string` | No |  |
| `gpg_key_inline` | `string` | No |  |
| `gpg_key_url` | `string` | No |  |
| `gpg_verification` | `string` | No |  |
| `include_source` | `boolean` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_distribution` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verification_status` | `string` | No |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Deb():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Deb():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Deb():load({ id = "deb_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Deb():update({
  id = "deb_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DebEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DenyPolicyEntity

```lua
local deny_policy = client:DenyPolicy(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DenyPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DependencyEntity

```lua
local dependency = client:Dependency(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DependencyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DisableEntity

```lua
local disable = client:Disable(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DisableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DistributionFullEntity

```lua
local distribution_full = client:DistributionFull(nil)
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
| `version` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DistributionFull():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DistributionFull():load({ slug = "slug" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DistributionFullEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DistroEntity

```lua
local distro = client:Distro(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DistroEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DockerEntity

```lua
local docker = client:Docker(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Docker():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Docker():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Docker():load({ id = "docker_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Docker():update({
  id = "docker_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DockerEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## DynamicMappingEntity

```lua
local dynamic_mapping = client:DynamicMapping(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim_value` | `string` | Yes |  |
| `service_account` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:DynamicMapping():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:DynamicMapping():load({ id = "dynamic_mapping_id", openid_connect_id = "openid_connect_id", org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `DynamicMappingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EcdsaEntity

```lua
local ecdsa = client:Ecdsa(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EcdsaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EnableEntity

```lua
local enable = client:Enable(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EnableEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EntitlementEntity

```lua
local entitlement = client:Entitlement(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Entitlement():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
  repo = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Entitlement():load({ id = "entitlement_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Entitlement():remove({ identifier = "identifier", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## EvaluationEntity

```lua
local evaluation = client:Evaluation(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `EvaluationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FileEntity

```lua
local file = client:File(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:File():create({
  owner = --[[ any ]],
  repo = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## FormatEntity

```lua
local format = client:Format(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `string` | Yes |  |
| `distribution` | `table` | No |  |
| `extension` | `table` | Yes |  |
| `name` | `string` | Yes |  |
| `premium` | `boolean` | Yes |  |
| `premium_plan_id` | `string` | No |  |
| `premium_plan_name` | `string` | No |  |
| `slug` | `string` | Yes |  |
| `support` | `table` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Format():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Format():load({ id = "format_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `FormatEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GeoipEntity

```lua
local geoip = client:Geoip(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GeoipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GonEntity

```lua
local gon = client:Gon(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Gon2Entity

```lua
local gon2 = client:Gon2(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Gon2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Gon3Entity

```lua
local gon3 = client:Gon3(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Gon3():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Gon3Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Gon4Entity

```lua
local gon4 = client:Gon4(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Gon4Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Gon5Entity

```lua
local gon5 = client:Gon5(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Gon5():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Gon5Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Gon6Entity

```lua
local gon6 = client:Gon6(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Gon6():load({ identifier = "identifier", owner = "owner", slug_perm = "slug_perm" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Gon6Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Gon7Entity

```lua
local gon7 = client:Gon7(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Gon7Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Gon8Entity

```lua
local gon8 = client:Gon8(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Gon8():update({
  identifier = "identifier",
  owner = "owner",
  slug_perm = "slug_perm",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Gon8Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Gon9Entity

```lua
local gon9 = client:Gon9(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Gon9():update({
  identifier = "identifier",
  owner = "owner",
  slug_perm = "slug_perm",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `Gon9Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GpgEntity

```lua
local gpg = client:Gpg(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GpgEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## GroupEntity

```lua
local group = client:Group(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HelmEntity

```lua
local helm = client:Helm(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Helm():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Helm():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Helm():load({ id = "helm_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Helm():update({
  id = "helm_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HelmEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HexEntity

```lua
local hex = client:Hex(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Hex():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Hex():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Hex():load({ id = "hex_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Hex():update({
  id = "hex_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HexEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HistoryEntity

```lua
local history = client:History(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## HuggingfaceEntity

```lua
local huggingface = client:Huggingface(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Huggingface():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Huggingface():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Huggingface():load({ id = "huggingface_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Huggingface():update({
  id = "huggingface_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `HuggingfaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InfoEntity

```lua
local info = client:Info(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InfoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## InviteEntity

```lua
local invite = client:Invite(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `InviteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LicensePolicyEntity

```lua
local license_policy = client:LicensePolicy(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LicensePolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LimitEntity

```lua
local limit = client:Limit(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LimitEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## LuarockEntity

```lua
local luarock = client:Luarock(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `LuarockEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MavenEntity

```lua
local maven = client:Maven(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verification_status` | `string` | No |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Maven():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Maven():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Maven():load({ id = "maven_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Maven():update({
  id = "maven_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MavenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MemberEntity

```lua
local member = client:Member(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## MoveEntity

```lua
local move = client:Move(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `MoveEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NamespaceEntity

```lua
local namespace = client:Namespace(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `type_name` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Namespace():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Namespace():load({ id = "namespace_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NamespaceAuditLogEntity

```lua
local namespace_audit_log = client:NamespaceAuditLog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `string` | Yes |  |
| `actor_ip_address` | `string` | Yes |  |
| `actor_kind` | `string` | No |  |
| `actor_location` | `table` | Yes |  |
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:NamespaceAuditLog():load({ id = "namespace_audit_log_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NamespaceAuditLogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NpmEntity

```lua
local npm = client:Npm(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Npm():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Npm():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Npm():load({ id = "npm_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Npm():update({
  id = "npm_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NpmEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## NugetEntity

```lua
local nuget = client:Nuget(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Nuget():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Nuget():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Nuget():load({ id = "nuget_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Nuget():update({
  id = "nuget_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `NugetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OpenidConnectEntity

```lua
local openid_connect = client:OpenidConnect(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OpenidConnectEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrgEntity

```lua
local org = client:Org(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `string` | No |  |
| `created_at` | `string` | No |  |
| `event_at` | `string` | No |  |
| `location` | `string` | No |  |
| `name` | `string` | Yes |  |
| `package` | `table` | Yes |  |
| `policy` | `table` | Yes |  |
| `reason` | `table` | Yes |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `tagline` | `string` | No |  |
| `vulnerability_scan_result` | `table` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Org():create({
  id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Org():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Org():load({ id = "org_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Org():remove({ id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Org():update({
  id = "org_id",
  team_id = "team_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrgEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationGroupSyncEntity

```lua
local organization_group_sync = client:OrganizationGroupSync(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationGroupSync():create({
  org_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationGroupSync():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationGroupSyncEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationGroupSyncStatusEntity

```lua
local organization_group_sync_status = client:OrganizationGroupSyncStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_group_sync_status` | `boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationGroupSyncStatus():load({ org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationGroupSyncStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationInviteEntity

```lua
local organization_invite = client:OrganizationInvite(nil)
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
| `team` | `table` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationInvite():create({
  org_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationInvite():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationInvite():update({
  id = "id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationInviteExtendEntity

```lua
local organization_invite_extend = client:OrganizationInviteExtend(nil)
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
| `team` | `table` | No |  |
| `user` | `string` | No |  |
| `user_url` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationInviteExtend():create({
  org_id = --[[ string ]],
  slug_perm = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationInviteExtendEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationMembershipEntity

```lua
local organization_membership = client:OrganizationMembership(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `boolean` | No |  |
| `is_active` | `boolean` | No |  |
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationMembership():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationMembership():load({ member = "member", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationMembership():update({
  member = "member",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMembershipEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationMembershipRoleUpdateEntity

```lua
local organization_membership_role_update = client:OrganizationMembershipRoleUpdate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `boolean` | No |  |
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

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationMembershipRoleUpdate():update({
  member_id = "member_id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMembershipRoleUpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationMembershipVisibilityUpdateEntity

```lua
local organization_membership_visibility_update = client:OrganizationMembershipVisibilityUpdate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `string` | No |  |
| `has_two_factor` | `boolean` | No |  |
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

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationMembershipVisibilityUpdate():update({
  member_id = "member_id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationMembershipVisibilityUpdateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationPackageLicensePolicyEntity

```lua
local organization_package_license_policy = client:OrganizationPackageLicensePolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_license` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `name` | `string` | Yes |  |
| `on_violation_quarantine` | `boolean` | No |  |
| `package_query_string` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `spdx_identifier` | `table` | Yes |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationPackageLicensePolicy():create({
  org_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationPackageLicensePolicy():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationPackageLicensePolicy():load({ id = "organization_package_license_policy_id", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationPackageLicensePolicy():update({
  id = "organization_package_license_policy_id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationPackageLicensePolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationPackageVulnerabilityPolicyEntity

```lua
local organization_package_vulnerability_policy = client:OrganizationPackageVulnerabilityPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_severity` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `min_severity` | `string` | No |  |
| `name` | `string` | Yes |  |
| `on_violation_quarantine` | `boolean` | No |  |
| `package_query_string` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationPackageVulnerabilityPolicy():create({
  org_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationPackageVulnerabilityPolicy():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationPackageVulnerabilityPolicy():load({ id = "organization_package_vulnerability_policy_id", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationPackageVulnerabilityPolicy():update({
  id = "organization_package_vulnerability_policy_id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationPackageVulnerabilityPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationSamlAuthEntity

```lua
local organization_saml_auth = client:OrganizationSamlAuth(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_auth_enabled` | `boolean` | Yes |  |
| `saml_auth_enforced` | `boolean` | Yes |  |
| `saml_metadata_inline` | `string` | No |  |
| `saml_metadata_url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationSamlAuth():load({ org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationSamlAuth():update({
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationSamlAuthEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationTeamEntity

```lua
local organization_team = client:OrganizationTeam(nil)
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationTeam():create({
  org_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationTeam():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:OrganizationTeam():load({ id = "organization_team_id", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:OrganizationTeam():update({
  id = "organization_team_id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationTeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OrganizationTeamMemberEntity

```lua
local organization_team_member = client:OrganizationTeamMember(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | `string` | Yes |  |
| `user` | `string` | Yes |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:OrganizationTeamMember():create({
  org_id = --[[ string ]],
  team_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:OrganizationTeamMember():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OrganizationTeamMemberEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## OssEntity

```lua
local oss = client:Oss(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `OssEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## P2nEntity

```lua
local p2n = client:P2n(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `P2nEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## P2n2Entity

```lua
local p2n2 = client:P2n2(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `P2n2Entity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PackageEntity

```lua
local package = client:Package(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `table` | No |  |
| `backend_kind` | `number` | No |  |
| `cdn_url` | `string` | No |  |
| `checksum_md5` | `string` | No |  |
| `checksum_sha1` | `string` | No |  |
| `checksum_sha256` | `string` | No |  |
| `checksum_sha512` | `string` | No |  |
| `count` | `number` | Yes |  |
| `dep_type` | `string` | No |  |
| `dependencies_checksum_md5` | `string` | No |  |
| `dependencies_url` | `string` | No |  |
| `description` | `string` | No |  |
| `display_name` | `string` | No |  |
| `distro` | `table` | Yes |  |
| `distro_version` | `table` | No |  |
| `download` | `number` | No |  |
| `epoch` | `number` | No |  |
| `extension` | `string` | No |  |
| `file` | `table` | No |  |
| `filename` | `string` | No |  |
| `format` | `string` | No |  |
| `format_url` | `string` | No |  |
| `freeable_storage` | `number` | No |  |
| `fully_qualified_name` | `string` | No |  |
| `identifier` | `table` | No |  |
| `identifier_perm` | `string` | No |  |
| `indexed` | `boolean` | No |  |
| `is_cancellable` | `boolean` | No |  |
| `is_copyable` | `boolean` | No |  |
| `is_deleteable` | `boolean` | No |  |
| `is_downloadable` | `boolean` | No |  |
| `is_moveable` | `boolean` | No |  |
| `is_quarantinable` | `boolean` | No |  |
| `is_quarantined` | `boolean` | No |  |
| `is_resyncable` | `boolean` | No |  |
| `is_security_scannable` | `boolean` | No |  |
| `is_sync_awaiting` | `boolean` | No |  |
| `is_sync_completed` | `boolean` | No |  |
| `is_sync_failed` | `boolean` | No |  |
| `is_sync_in_flight` | `boolean` | No |  |
| `is_sync_in_progress` | `boolean` | No |  |
| `last_push` | `string` | Yes |  |
| `license` | `string` | No |  |
| `name` | `string` | No |  |
| `namespace` | `string` | No |  |
| `namespace_url` | `string` | No |  |
| `num_download` | `number` | Yes |  |
| `num_file` | `number` | No |  |
| `operator` | `string` | No |  |
| `origin_repository` | `string` | No |  |
| `origin_repository_url` | `string` | No |  |
| `package` | `table` | Yes |  |
| `package_type` | `number` | No |  |
| `policy_violated` | `boolean` | No |  |
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
| `size` | `number` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `stage` | `number` | No |  |
| `stage_str` | `string` | No |  |
| `stage_updated_at` | `string` | No |  |
| `status` | `number` | No |  |
| `status_reason` | `string` | No |  |
| `status_str` | `string` | No |  |
| `status_updated_at` | `string` | No |  |
| `status_url` | `string` | No |  |
| `subtype` | `string` | No |  |
| `summary` | `string` | No |  |
| `sync_finished_at` | `string` | No |  |
| `sync_progress` | `number` | No |  |
| `tag` | `table` | No |  |
| `tags_immutable` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Package():create({
  owner = --[[ any ]],
  repo = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Package():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Package():load({ owner = "owner", repo = "repo" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Package():remove({ identifier = "identifier", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PackageDenyPolicyEntity

```lua
local package_deny_policy = client:PackageDenyPolicy(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `string` | No |  |
| `created_at` | `string` | No |  |
| `description` | `string` | No |  |
| `enabled` | `boolean` | No |  |
| `name` | `string` | No |  |
| `package_query_string` | `string` | Yes |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PackageDenyPolicy():create({
  org_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PackageDenyPolicy():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PackageDenyPolicy():load({ id = "package_deny_policy_id", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:PackageDenyPolicy():update({
  id = "package_deny_policy_id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageDenyPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PackageFilePartsUploadEntity

```lua
local package_file_parts_upload = client:PackageFilePartsUpload(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `identifier` | `string` | No |  |
| `upload_querystring` | `string` | No |  |
| `upload_url` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PackageFilePartsUpload():load({ identifier = "identifier", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageFilePartsUploadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PackageFileUploadEntity

```lua
local package_file_upload = client:PackageFileUpload(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PackageFileUpload():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
  repo = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageFileUploadEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PackageLicensePolicyEvaluationEntity

```lua
local package_license_policy_evaluation = client:PackageLicensePolicyEvaluation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `evaluation_count` | `number` | No |  |
| `policy` | `table` | Yes |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `violation_count` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PackageLicensePolicyEvaluation():create({
  org_id = --[[ string ]],
  policy_slug_perm = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PackageLicensePolicyEvaluation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PackageLicensePolicyEvaluation():load({ id = "package_license_policy_evaluation_id", license_policy_id = "license_policy_id", org_id = "org_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageLicensePolicyEvaluationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PackageVersionBadgeEntity

```lua
local package_version_badge = client:PackageVersionBadge(nil)
```

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PackageVersionBadge():load({ owner = "owner", package_format = "package_format", package_identifier = "package_identifier", package_name = "package_name", package_version = "package_version", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageVersionBadgeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PackageVulnerabilityPolicyEvaluationEntity

```lua
local package_vulnerability_policy_evaluation = client:PackageVulnerabilityPolicyEvaluation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `evaluation_count` | `number` | No |  |
| `policy` | `table` | No |  |
| `slug_perm` | `string` | No |  |
| `status` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `violation_count` | `number` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:PackageVulnerabilityPolicyEvaluation():create({
  org_id = --[[ string ]],
  policy_slug_perm = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:PackageVulnerabilityPolicyEvaluation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:PackageVulnerabilityPolicyEvaluation():load({ id = "package_vulnerability_policy_evaluation_id", org_id = "org_id", vulnerability_policy_id = "vulnerability_policy_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PackageVulnerabilityPolicyEvaluationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PrivilegeEntity

```lua
local privilege = client:Privilege(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PrivilegeEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProfileEntity

```lua
local profile = client:Profile(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProviderSettingEntity

```lua
local provider_setting = client:ProviderSetting(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim` | `table` | Yes |  |
| `enabled` | `boolean` | Yes |  |
| `mapping_claim` | `string` | No |  |
| `name` | `string` | Yes |  |
| `provider_url` | `string` | Yes |  |
| `service_account` | `table` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ProviderSetting():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ProviderSetting():load({ org_id = "org_id", slug_perm = "slug_perm" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderSettingEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ProviderSettingsWriteEntity

```lua
local provider_settings_write = client:ProviderSettingsWrite(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim` | `table` | Yes |  |
| `dynamic_mapping` | `table` | No |  |
| `enabled` | `boolean` | Yes |  |
| `mapping_claim` | `string` | No |  |
| `name` | `string` | Yes |  |
| `provider_url` | `string` | Yes |  |
| `service_account` | `table` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:ProviderSettingsWrite():create({
  org_id = --[[ string ]],
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:ProviderSettingsWrite():update({
  org_id = "org_id",
  slug_perm = "slug_perm",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ProviderSettingsWriteEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## PythonEntity

```lua
local python = client:Python(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Python():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Python():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Python():load({ id = "python_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Python():update({
  id = "python_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `PythonEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QuarantineEntity

```lua
local quarantine = client:Quarantine(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuarantineEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## QuotaEntity

```lua
local quota = client:Quota(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `history` | `table` | Yes |  |
| `usage` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Quota():load({ id = "quota_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `QuotaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RawEntity

```lua
local raw = client:Raw(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RawEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RefreshEntity

```lua
local refresh = client:Refresh(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RefreshEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RegenerateEntity

```lua
local regenerate = client:Regenerate(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RegenerateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepoEntity

```lua
local repo = client:Repo(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cdn_url` | `string` | No |  |
| `content_kind` | `string` | No |  |
| `contextual_auth_realm` | `boolean` | No |  |
| `copy_own` | `boolean` | No |  |
| `copy_package` | `string` | No |  |
| `cosign_signing_enabled` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `default_privilege` | `string` | No |  |
| `delete_own` | `boolean` | No |  |
| `delete_package` | `string` | No |  |
| `deleted_at` | `string` | No |  |
| `description` | `string` | No |  |
| `distribute` | `table` | No |  |
| `docker_refresh_tokens_enabled` | `boolean` | No |  |
| `ecdsa_key` | `table` | No |  |
| `enforce_eula` | `boolean` | No |  |
| `gpg_key` | `table` | No |  |
| `index_file` | `boolean` | No |  |
| `is_open_source` | `boolean` | No |  |
| `is_private` | `boolean` | No |  |
| `is_public` | `boolean` | No |  |
| `manage_entitlements_privilege` | `string` | No |  |
| `move_own` | `boolean` | No |  |
| `move_package` | `string` | No |  |
| `name` | `string` | Yes |  |
| `namespace` | `string` | No |  |
| `namespace_url` | `string` | No |  |
| `nuget_native_signing_enabled` | `boolean` | No |  |
| `num_download` | `number` | No |  |
| `num_policy_violated_package` | `number` | No |  |
| `num_quarantined_package` | `number` | No |  |
| `open_source_license` | `string` | No |  |
| `open_source_project_url` | `string` | No |  |
| `package_count` | `number` | No |  |
| `package_group_count` | `number` | No |  |
| `proxy_npmj` | `boolean` | No |  |
| `proxy_pypi` | `boolean` | No |  |
| `raw_package_index_enabled` | `boolean` | No |  |
| `raw_package_index_signatures_enabled` | `boolean` | No |  |
| `replace_package` | `string` | No |  |
| `replace_packages_by_default` | `boolean` | No |  |
| `repository_type` | `number` | No |  |
| `repository_type_str` | `string` | No |  |
| `resync_own` | `boolean` | No |  |
| `resync_package` | `string` | No |  |
| `scan_own` | `boolean` | No |  |
| `scan_package` | `string` | No |  |
| `self_html_url` | `string` | No |  |
| `self_url` | `string` | No |  |
| `show_setup_all` | `boolean` | No |  |
| `size` | `number` | No |  |
| `size_str` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `storage_region` | `string` | No |  |
| `strict_npm_validation` | `boolean` | No |  |
| `tag_pre_releases_as_latest` | `boolean` | No |  |
| `use_debian_label` | `boolean` | No |  |
| `use_default_cargo_upstream` | `boolean` | No |  |
| `use_entitlements_privilege` | `string` | No |  |
| `use_noarch_package` | `boolean` | No |  |
| `use_source_package` | `boolean` | No |  |
| `use_vulnerability_scanning` | `boolean` | No |  |
| `user_entitlements_enabled` | `boolean` | No |  |
| `view_statistic` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Repo():create({
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Repo():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Repo():load({ id = "repo_id" })
```

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Repo():remove({ identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Repo():update({
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepoEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryAuditLogEntity

```lua
local repository_audit_log = client:RepositoryAuditLog(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `string` | Yes |  |
| `actor_ip_address` | `string` | Yes |  |
| `actor_kind` | `string` | No |  |
| `actor_location` | `table` | Yes |  |
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RepositoryAuditLog():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryAuditLogEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryEcdsaKeyEntity

```lua
local repository_ecdsa_key = client:RepositoryEcdsaKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No |  |
| `ssh_fingerprint` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryEcdsaKey():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryEcdsaKey():load({ identifier = "identifier", owner = "owner" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryEcdsaKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryGeoIpRuleEntity

```lua
local repository_geo_ip_rule = client:RepositoryGeoIpRule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `table` | Yes |  |
| `country_code` | `table` | Yes |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryGeoIpRule():load({ identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RepositoryGeoIpRule():update({
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryGeoIpRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryGeoIpStatusEntity

```lua
local repository_geo_ip_status = client:RepositoryGeoIpStatus(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoip_enabled` | `boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryGeoIpStatus():load({ identifier = "identifier", owner = "owner" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryGeoIpStatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryGeoIpTestAddressEntity

```lua
local repository_geo_ip_test_address = client:RepositoryGeoIpTestAddress(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryGeoIpTestAddress():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryGeoIpTestAddressEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryGpgKeyEntity

```lua
local repository_gpg_key = client:RepositoryGpgKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `comment` | `string` | Yes |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryGpgKey():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryGpgKey():load({ identifier = "identifier", owner = "owner" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryGpgKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryPrivilegeInputEntity

```lua
local repository_privilege_input = client:RepositoryPrivilegeInput(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `privilege` | `string` | Yes |  |
| `service` | `string` | No |  |
| `team` | `string` | No |  |
| `user` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RepositoryPrivilegeInput():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryPrivilegeInputEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryRetentionRuleEntity

```lua
local repository_retention_rule = client:RepositoryRetentionRule(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `retention_count_limit` | `number` | No |  |
| `retention_days_limit` | `number` | No |  |
| `retention_enabled` | `boolean` | No |  |
| `retention_group_by_format` | `boolean` | No |  |
| `retention_group_by_name` | `boolean` | No |  |
| `retention_group_by_package_type` | `boolean` | No |  |
| `retention_package_query_string` | `string` | No |  |
| `retention_size_limit` | `number` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryRetentionRule():load({ owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RepositoryRetentionRule():update({
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryRetentionRuleEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryRsaKeyEntity

```lua
local repository_rsa_key = client:RepositoryRsaKey(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
| `fingerprint` | `string` | No |  |
| `fingerprint_short` | `string` | No |  |
| `public_key` | `string` | No |  |
| `ssh_fingerprint` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryRsaKey():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryRsaKey():load({ identifier = "identifier", owner = "owner" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryRsaKeyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryTokenEntity

```lua
local repository_token = client:RepositoryToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `number` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `boolean` | No |  |
| `disable_url` | `string` | No |  |
| `download` | `number` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `table` | No |  |
| `eula_accepted_at` | `string` | No |  |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `boolean` | No |  |
| `has_limit` | `boolean` | No |  |
| `identifier` | `number` | No |  |
| `is_active` | `boolean` | No |  |
| `is_limited` | `boolean` | No |  |
| `limit_bandwidth` | `number` | No |  |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No |  |
| `limit_date_range_to` | `string` | No |  |
| `limit_num_client` | `number` | No |  |
| `limit_num_download` | `number` | No |  |
| `limit_package_query` | `string` | No |  |
| `limit_path_query` | `string` | No |  |
| `metadata` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryToken():create({
  owner = --[[ any ]],
  repo = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RepositoryToken():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryToken():load({ identifier = "identifier", owner = "owner", repo = "repo" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RepositoryToken():update({
  identifier = "identifier",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryTokenRefreshEntity

```lua
local repository_token_refresh = client:RepositoryTokenRefresh(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `number` | No |  |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `default` | `boolean` | No |  |
| `disable_url` | `string` | No |  |
| `download` | `number` | No |  |
| `enable_url` | `string` | No |  |
| `eula_accepted` | `table` | No |  |
| `eula_accepted_at` | `string` | No |  |
| `eula_accepted_from` | `string` | No |  |
| `eula_required` | `boolean` | No |  |
| `has_limit` | `boolean` | No |  |
| `identifier` | `number` | No |  |
| `is_active` | `boolean` | No |  |
| `is_limited` | `boolean` | No |  |
| `limit_bandwidth` | `number` | No |  |
| `limit_bandwidth_unit` | `string` | No |  |
| `limit_date_range_from` | `string` | No |  |
| `limit_date_range_to` | `string` | No |  |
| `limit_num_client` | `number` | No |  |
| `limit_num_download` | `number` | No |  |
| `limit_package_query` | `string` | No |  |
| `limit_path_query` | `string` | No |  |
| `metadata` | `table` | No |  |
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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryTokenRefresh():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
  repo = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryTokenRefreshEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryTokenSyncEntity

```lua
local repository_token_sync = client:RepositoryTokenSync(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryTokenSync():create({
  owner = --[[ any ]],
  repo = --[[ any ]],
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryTokenSyncEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryWebhookEntity

```lua
local repository_webhook = client:RepositoryWebhook(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `created_by` | `string` | No |  |
| `created_by_url` | `string` | No |  |
| `disable_reason` | `number` | No |  |
| `disable_reason_str` | `string` | No |  |
| `event` | `table` | Yes |  |
| `identifier` | `number` | No |  |
| `is_active` | `boolean` | No |  |
| `is_last_response_bad` | `boolean` | No |  |
| `last_response_status` | `number` | No |  |
| `last_response_status_str` | `string` | No |  |
| `num_sent` | `number` | No |  |
| `package_query` | `string` | No |  |
| `request_body_format` | `number` | No |  |
| `request_body_format_str` | `string` | No |  |
| `request_body_template_format` | `number` | No |  |
| `request_body_template_format_str` | `string` | No |  |
| `request_content_type` | `string` | No |  |
| `secret_header` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug_perm` | `string` | No |  |
| `target_url` | `string` | Yes |  |
| `template` | `table` | Yes |  |
| `updated_at` | `string` | No |  |
| `updated_by` | `string` | No |  |
| `updated_by_url` | `string` | No |  |
| `verify_ssl` | `boolean` | No |  |

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

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:RepositoryWebhook():create({
  owner = --[[ any ]],
  repo = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:RepositoryWebhook():list()
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:RepositoryWebhook():update({
  identifier = "identifier",
  owner = "owner",
  repo = "repo",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryWebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryX509EcdsaCertificateEntity

```lua
local repository_x509_ecdsa_certificate = client:RepositoryX509EcdsaCertificate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `certificate` | `string` | No |  |
| `certificate_chain` | `string` | No |  |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No |  |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
| `issuing_status` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryX509EcdsaCertificate():load({ identifier = "identifier", owner = "owner" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryX509EcdsaCertificateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RepositoryX509RsaCertificateEntity

```lua
local repository_x509_rsa_certificate = client:RepositoryX509RsaCertificate(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `boolean` | No |  |
| `certificate` | `string` | No |  |
| `certificate_chain` | `string` | No |  |
| `certificate_chain_fingerprint` | `string` | No |  |
| `certificate_chain_fingerprint_short` | `string` | No |  |
| `certificate_fingerprint` | `string` | No |  |
| `certificate_fingerprint_short` | `string` | No |  |
| `created_at` | `string` | No |  |
| `default` | `boolean` | No |  |
| `issuing_status` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:RepositoryX509RsaCertificate():load({ identifier = "identifier", owner = "owner" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RepositoryX509RsaCertificateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResetEntity

```lua
local reset = client:Reset(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResetEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResourcesRateCheckEntity

```lua
local resources_rate_check = client:ResourcesRateCheck(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resource` | `table` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ResourcesRateCheck():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResourcesRateCheckEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ResyncEntity

```lua
local resync = client:Resync(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ResyncEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RetentionEntity

```lua
local retention = client:Retention(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RetentionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RpmEntity

```lua
local rpm = client:Rpm(nil)
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
| `include_source` | `boolean` | No |  |
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verification_status` | `string` | No |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Rpm():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Rpm():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Rpm():load({ id = "rpm_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Rpm():update({
  id = "rpm_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RpmEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RsaEntity

```lua
local rsa = client:Rsa(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RsaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RubyEntity

```lua
local ruby = client:Ruby(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Ruby():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Ruby():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Ruby():load({ id = "ruby_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Ruby():update({
  id = "ruby_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RubyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SamlGroupSyncEntity

```lua
local saml_group_sync = client:SamlGroupSync(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SamlGroupSyncEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ScanEntity

```lua
local scan = client:Scan(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ScanEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SelfEntity

```lua
local self = client:Self(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SelfEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ServiceEntity

```lua
local service = client:Service(nil)
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
| `team` | `table` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Service():create({
  org_id = --[[ string ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Service():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Service():load({ id = "service_id", org_id = "org_id" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Service():update({
  id = "service_id",
  org_id = "org_id",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ServiceEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusEntity

```lua
local status = client:Status(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StatusBasicEntity

```lua
local status_basic = client:StatusBasic(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `string` | No |  |
| `version` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:StatusBasic():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StatusBasicEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## StorageRegionEntity

```lua
local storage_region = client:StorageRegion(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `string` | Yes |  |
| `slug` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:StorageRegion():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:StorageRegion():load({ id = "storage_region_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `StorageRegionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SwiftEntity

```lua
local swift = client:Swift(nil)
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
| `is_active` | `boolean` | No |  |
| `mode` | `string` | No |  |
| `name` | `string` | Yes |  |
| `pending_validation` | `boolean` | No |  |
| `priority` | `number` | No |  |
| `slug_perm` | `string` | No |  |
| `updated_at` | `string` | No |  |
| `upstream_url` | `string` | Yes |  |
| `verify_ssl` | `boolean` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:Swift():create({
  identifier = --[[ any ]],
  owner = --[[ any ]],
})
```

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Swift():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Swift():load({ id = "swift_id", identifier = "identifier", owner = "owner" })
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:Swift():update({
  id = "swift_id",
  identifier = "identifier",
  owner = "owner",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SwiftEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## SyncEntity

```lua
local sync = client:Sync(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `SyncEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TagEntity

```lua
local tag = client:Tag(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TeamEntity

```lua
local team = client:Team(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TerraformEntity

```lua
local terraform = client:Terraform(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TerraformEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TestEntity

```lua
local test = client:Test(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TestEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TokenEntity

```lua
local token = client:Token(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## TransferRegionEntity

```lua
local transfer_region = client:TransferRegion(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `TransferRegionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserEntity

```lua
local user = client:User(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No |  |
| `key` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:User():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserAuthTokenEntity

```lua
local user_auth_token = client:UserAuthToken(nil)
```

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UserAuthToken():create({
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserAuthTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserAuthenticationTokenEntity

```lua
local user_authentication_token = client:UserAuthenticationToken(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `string` | No |  |
| `key` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `create(reqdata, ctrl) -> any, err`

Create a new entity with the given data.

```lua
local result, err = client:UserAuthenticationToken():create({
})
```

#### `update(reqdata, ctrl) -> any, err`

Update an existing entity. The data must include the entity `id`.

```lua
local result, err = client:UserAuthenticationToken():update({
  slug_perm = "slug_perm",
  -- Fields to update
})
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserAuthenticationTokenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserBriefEntity

```lua
local user_brief = client:UserBrief(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authenticated` | `boolean` | No |  |
| `email` | `string` | No |  |
| `name` | `string` | No |  |
| `profile_url` | `string` | No |  |
| `self_url` | `string` | No |  |
| `slug` | `string` | No |  |
| `slug_perm` | `string` | No |  |

### Operations

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UserBrief():load()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserBriefEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## UserProfileEntity

```lua
local user_profile = client:UserProfile(nil)
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

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:UserProfile():load({ id = "user_profile_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `UserProfileEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VagrantEntity

```lua
local vagrant = client:Vagrant(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VagrantEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ValidateEntity

```lua
local validate = client:Validate(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ValidateEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VersionEntity

```lua
local version = client:Version(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VersionEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VulnerabilityEntity

```lua
local vulnerability = client:Vulnerability(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `string` | No |  |
| `has_vulnerability` | `boolean` | No |  |
| `identifier` | `string` | Yes |  |
| `max_severity` | `string` | No |  |
| `num_vulnerability` | `number` | No |  |
| `package` | `table` | Yes |  |
| `result` | `table` | Yes |  |
| `scan_id` | `number` | Yes |  |
| `target` | `string` | Yes |  |
| `type` | `string` | Yes |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Vulnerability():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Vulnerability():load({ id = "vulnerability_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VulnerabilityEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## VulnerabilityPolicyEntity

```lua
local vulnerability_policy = client:VulnerabilityPolicy(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `VulnerabilityPolicyEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebhookEntity

```lua
local webhook = client:Webhook(nil)
```

### Operations

#### `remove(reqmatch, ctrl) -> any, err`

Remove the entity matching the given criteria.

```lua
local result, err = client:Webhook():remove({ identifier = "identifier", owner = "owner", repo = "repo" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## X509EcdsaEntity

```lua
local x509_ecdsa = client:X509Ecdsa(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `X509EcdsaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## X509RsaEntity

```lua
local x509_rsa = client:X509Rsa(nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `X509RsaEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

