# Cloudsmith Ruby SDK Reference

Complete API reference for the Cloudsmith Ruby SDK.


## CloudsmithSDK

### Constructor

```ruby
require_relative 'Cloudsmith_sdk'

client = CloudsmithSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["apikey"]` | `String` | API key for authentication. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CloudsmithSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CloudsmithSDK.test
```


### Instance Methods

#### `Abort(data = nil)`

Create a new `Abort` entity instance. Pass `nil` for no initial data.

#### `Alpine(data = nil)`

Create a new `Alpine` entity instance. Pass `nil` for no initial data.

#### `AuditLog(data = nil)`

Create a new `AuditLog` entity instance. Pass `nil` for no initial data.

#### `Basic(data = nil)`

Create a new `Basic` entity instance. Pass `nil` for no initial data.

#### `Cargo(data = nil)`

Create a new `Cargo` entity instance. Pass `nil` for no initial data.

#### `Cocoapod(data = nil)`

Create a new `Cocoapod` entity instance. Pass `nil` for no initial data.

#### `Complete(data = nil)`

Create a new `Complete` entity instance. Pass `nil` for no initial data.

#### `Composer(data = nil)`

Create a new `Composer` entity instance. Pass `nil` for no initial data.

#### `Conan(data = nil)`

Create a new `Conan` entity instance. Pass `nil` for no initial data.

#### `Conda(data = nil)`

Create a new `Conda` entity instance. Pass `nil` for no initial data.

#### `Copy(data = nil)`

Create a new `Copy` entity instance. Pass `nil` for no initial data.

#### `Cran(data = nil)`

Create a new `Cran` entity instance. Pass `nil` for no initial data.

#### `Dart(data = nil)`

Create a new `Dart` entity instance. Pass `nil` for no initial data.

#### `Deb(data = nil)`

Create a new `Deb` entity instance. Pass `nil` for no initial data.

#### `DenyPolicy(data = nil)`

Create a new `DenyPolicy` entity instance. Pass `nil` for no initial data.

#### `Dependency(data = nil)`

Create a new `Dependency` entity instance. Pass `nil` for no initial data.

#### `Disable(data = nil)`

Create a new `Disable` entity instance. Pass `nil` for no initial data.

#### `DistributionFull(data = nil)`

Create a new `DistributionFull` entity instance. Pass `nil` for no initial data.

#### `Distro(data = nil)`

Create a new `Distro` entity instance. Pass `nil` for no initial data.

#### `Docker(data = nil)`

Create a new `Docker` entity instance. Pass `nil` for no initial data.

#### `DynamicMapping(data = nil)`

Create a new `DynamicMapping` entity instance. Pass `nil` for no initial data.

#### `Ecdsa(data = nil)`

Create a new `Ecdsa` entity instance. Pass `nil` for no initial data.

#### `Enable(data = nil)`

Create a new `Enable` entity instance. Pass `nil` for no initial data.

#### `Entitlement(data = nil)`

Create a new `Entitlement` entity instance. Pass `nil` for no initial data.

#### `Evaluation(data = nil)`

Create a new `Evaluation` entity instance. Pass `nil` for no initial data.

#### `File(data = nil)`

Create a new `File` entity instance. Pass `nil` for no initial data.

#### `Format(data = nil)`

Create a new `Format` entity instance. Pass `nil` for no initial data.

#### `Geoip(data = nil)`

Create a new `Geoip` entity instance. Pass `nil` for no initial data.

#### `Gon(data = nil)`

Create a new `Gon` entity instance. Pass `nil` for no initial data.

#### `Gon2(data = nil)`

Create a new `Gon2` entity instance. Pass `nil` for no initial data.

#### `Gon3(data = nil)`

Create a new `Gon3` entity instance. Pass `nil` for no initial data.

#### `Gon4(data = nil)`

Create a new `Gon4` entity instance. Pass `nil` for no initial data.

#### `Gon5(data = nil)`

Create a new `Gon5` entity instance. Pass `nil` for no initial data.

#### `Gon6(data = nil)`

Create a new `Gon6` entity instance. Pass `nil` for no initial data.

#### `Gon7(data = nil)`

Create a new `Gon7` entity instance. Pass `nil` for no initial data.

#### `Gon8(data = nil)`

Create a new `Gon8` entity instance. Pass `nil` for no initial data.

#### `Gon9(data = nil)`

Create a new `Gon9` entity instance. Pass `nil` for no initial data.

#### `Gpg(data = nil)`

Create a new `Gpg` entity instance. Pass `nil` for no initial data.

#### `Group(data = nil)`

Create a new `Group` entity instance. Pass `nil` for no initial data.

#### `Helm(data = nil)`

Create a new `Helm` entity instance. Pass `nil` for no initial data.

#### `Hex(data = nil)`

Create a new `Hex` entity instance. Pass `nil` for no initial data.

#### `History(data = nil)`

Create a new `History` entity instance. Pass `nil` for no initial data.

#### `Huggingface(data = nil)`

Create a new `Huggingface` entity instance. Pass `nil` for no initial data.

#### `Info(data = nil)`

Create a new `Info` entity instance. Pass `nil` for no initial data.

#### `Invite(data = nil)`

Create a new `Invite` entity instance. Pass `nil` for no initial data.

#### `LicensePolicy(data = nil)`

Create a new `LicensePolicy` entity instance. Pass `nil` for no initial data.

#### `Limit(data = nil)`

Create a new `Limit` entity instance. Pass `nil` for no initial data.

#### `Luarock(data = nil)`

Create a new `Luarock` entity instance. Pass `nil` for no initial data.

#### `Maven(data = nil)`

Create a new `Maven` entity instance. Pass `nil` for no initial data.

#### `Member(data = nil)`

Create a new `Member` entity instance. Pass `nil` for no initial data.

#### `Move(data = nil)`

Create a new `Move` entity instance. Pass `nil` for no initial data.

#### `Namespace(data = nil)`

Create a new `Namespace` entity instance. Pass `nil` for no initial data.

#### `NamespaceAuditLog(data = nil)`

Create a new `NamespaceAuditLog` entity instance. Pass `nil` for no initial data.

#### `Npm(data = nil)`

Create a new `Npm` entity instance. Pass `nil` for no initial data.

#### `Nuget(data = nil)`

Create a new `Nuget` entity instance. Pass `nil` for no initial data.

#### `OpenidConnect(data = nil)`

Create a new `OpenidConnect` entity instance. Pass `nil` for no initial data.

#### `Org(data = nil)`

Create a new `Org` entity instance. Pass `nil` for no initial data.

#### `OrganizationGroupSync(data = nil)`

Create a new `OrganizationGroupSync` entity instance. Pass `nil` for no initial data.

#### `OrganizationGroupSyncStatus(data = nil)`

Create a new `OrganizationGroupSyncStatus` entity instance. Pass `nil` for no initial data.

#### `OrganizationInvite(data = nil)`

Create a new `OrganizationInvite` entity instance. Pass `nil` for no initial data.

#### `OrganizationInviteExtend(data = nil)`

Create a new `OrganizationInviteExtend` entity instance. Pass `nil` for no initial data.

#### `OrganizationMembership(data = nil)`

Create a new `OrganizationMembership` entity instance. Pass `nil` for no initial data.

#### `OrganizationMembershipRoleUpdate(data = nil)`

Create a new `OrganizationMembershipRoleUpdate` entity instance. Pass `nil` for no initial data.

#### `OrganizationMembershipVisibilityUpdate(data = nil)`

Create a new `OrganizationMembershipVisibilityUpdate` entity instance. Pass `nil` for no initial data.

#### `OrganizationPackageLicensePolicy(data = nil)`

Create a new `OrganizationPackageLicensePolicy` entity instance. Pass `nil` for no initial data.

#### `OrganizationPackageVulnerabilityPolicy(data = nil)`

Create a new `OrganizationPackageVulnerabilityPolicy` entity instance. Pass `nil` for no initial data.

#### `OrganizationSamlAuth(data = nil)`

Create a new `OrganizationSamlAuth` entity instance. Pass `nil` for no initial data.

#### `OrganizationTeam(data = nil)`

Create a new `OrganizationTeam` entity instance. Pass `nil` for no initial data.

#### `OrganizationTeamMember(data = nil)`

Create a new `OrganizationTeamMember` entity instance. Pass `nil` for no initial data.

#### `Oss(data = nil)`

Create a new `Oss` entity instance. Pass `nil` for no initial data.

#### `P2n(data = nil)`

Create a new `P2n` entity instance. Pass `nil` for no initial data.

#### `P2n2(data = nil)`

Create a new `P2n2` entity instance. Pass `nil` for no initial data.

#### `Package(data = nil)`

Create a new `Package` entity instance. Pass `nil` for no initial data.

#### `PackageDenyPolicy(data = nil)`

Create a new `PackageDenyPolicy` entity instance. Pass `nil` for no initial data.

#### `PackageFilePartsUpload(data = nil)`

Create a new `PackageFilePartsUpload` entity instance. Pass `nil` for no initial data.

#### `PackageFileUpload(data = nil)`

Create a new `PackageFileUpload` entity instance. Pass `nil` for no initial data.

#### `PackageLicensePolicyEvaluation(data = nil)`

Create a new `PackageLicensePolicyEvaluation` entity instance. Pass `nil` for no initial data.

#### `PackageVersionBadge(data = nil)`

Create a new `PackageVersionBadge` entity instance. Pass `nil` for no initial data.

#### `PackageVulnerabilityPolicyEvaluation(data = nil)`

Create a new `PackageVulnerabilityPolicyEvaluation` entity instance. Pass `nil` for no initial data.

#### `Privilege(data = nil)`

Create a new `Privilege` entity instance. Pass `nil` for no initial data.

#### `Profile(data = nil)`

Create a new `Profile` entity instance. Pass `nil` for no initial data.

#### `ProviderSetting(data = nil)`

Create a new `ProviderSetting` entity instance. Pass `nil` for no initial data.

#### `ProviderSettingsWrite(data = nil)`

Create a new `ProviderSettingsWrite` entity instance. Pass `nil` for no initial data.

#### `Python(data = nil)`

Create a new `Python` entity instance. Pass `nil` for no initial data.

#### `Quarantine(data = nil)`

Create a new `Quarantine` entity instance. Pass `nil` for no initial data.

#### `Quota(data = nil)`

Create a new `Quota` entity instance. Pass `nil` for no initial data.

#### `Raw(data = nil)`

Create a new `Raw` entity instance. Pass `nil` for no initial data.

#### `Refresh(data = nil)`

Create a new `Refresh` entity instance. Pass `nil` for no initial data.

#### `Regenerate(data = nil)`

Create a new `Regenerate` entity instance. Pass `nil` for no initial data.

#### `Repo(data = nil)`

Create a new `Repo` entity instance. Pass `nil` for no initial data.

#### `RepositoryAuditLog(data = nil)`

Create a new `RepositoryAuditLog` entity instance. Pass `nil` for no initial data.

#### `RepositoryEcdsaKey(data = nil)`

Create a new `RepositoryEcdsaKey` entity instance. Pass `nil` for no initial data.

#### `RepositoryGeoIpRule(data = nil)`

Create a new `RepositoryGeoIpRule` entity instance. Pass `nil` for no initial data.

#### `RepositoryGeoIpStatus(data = nil)`

Create a new `RepositoryGeoIpStatus` entity instance. Pass `nil` for no initial data.

#### `RepositoryGeoIpTestAddress(data = nil)`

Create a new `RepositoryGeoIpTestAddress` entity instance. Pass `nil` for no initial data.

#### `RepositoryGpgKey(data = nil)`

Create a new `RepositoryGpgKey` entity instance. Pass `nil` for no initial data.

#### `RepositoryPrivilegeInput(data = nil)`

Create a new `RepositoryPrivilegeInput` entity instance. Pass `nil` for no initial data.

#### `RepositoryRetentionRule(data = nil)`

Create a new `RepositoryRetentionRule` entity instance. Pass `nil` for no initial data.

#### `RepositoryRsaKey(data = nil)`

Create a new `RepositoryRsaKey` entity instance. Pass `nil` for no initial data.

#### `RepositoryToken(data = nil)`

Create a new `RepositoryToken` entity instance. Pass `nil` for no initial data.

#### `RepositoryTokenRefresh(data = nil)`

Create a new `RepositoryTokenRefresh` entity instance. Pass `nil` for no initial data.

#### `RepositoryTokenSync(data = nil)`

Create a new `RepositoryTokenSync` entity instance. Pass `nil` for no initial data.

#### `RepositoryWebhook(data = nil)`

Create a new `RepositoryWebhook` entity instance. Pass `nil` for no initial data.

#### `RepositoryX509EcdsaCertificate(data = nil)`

Create a new `RepositoryX509EcdsaCertificate` entity instance. Pass `nil` for no initial data.

#### `RepositoryX509RsaCertificate(data = nil)`

Create a new `RepositoryX509RsaCertificate` entity instance. Pass `nil` for no initial data.

#### `Reset(data = nil)`

Create a new `Reset` entity instance. Pass `nil` for no initial data.

#### `ResourcesRateCheck(data = nil)`

Create a new `ResourcesRateCheck` entity instance. Pass `nil` for no initial data.

#### `Resync(data = nil)`

Create a new `Resync` entity instance. Pass `nil` for no initial data.

#### `Retention(data = nil)`

Create a new `Retention` entity instance. Pass `nil` for no initial data.

#### `Rpm(data = nil)`

Create a new `Rpm` entity instance. Pass `nil` for no initial data.

#### `Rsa(data = nil)`

Create a new `Rsa` entity instance. Pass `nil` for no initial data.

#### `Ruby(data = nil)`

Create a new `Ruby` entity instance. Pass `nil` for no initial data.

#### `SamlGroupSync(data = nil)`

Create a new `SamlGroupSync` entity instance. Pass `nil` for no initial data.

#### `Scan(data = nil)`

Create a new `Scan` entity instance. Pass `nil` for no initial data.

#### `Self(data = nil)`

Create a new `Self` entity instance. Pass `nil` for no initial data.

#### `Service(data = nil)`

Create a new `Service` entity instance. Pass `nil` for no initial data.

#### `Status(data = nil)`

Create a new `Status` entity instance. Pass `nil` for no initial data.

#### `StatusBasic(data = nil)`

Create a new `StatusBasic` entity instance. Pass `nil` for no initial data.

#### `StorageRegion(data = nil)`

Create a new `StorageRegion` entity instance. Pass `nil` for no initial data.

#### `Swift(data = nil)`

Create a new `Swift` entity instance. Pass `nil` for no initial data.

#### `Sync(data = nil)`

Create a new `Sync` entity instance. Pass `nil` for no initial data.

#### `Tag(data = nil)`

Create a new `Tag` entity instance. Pass `nil` for no initial data.

#### `Team(data = nil)`

Create a new `Team` entity instance. Pass `nil` for no initial data.

#### `Terraform(data = nil)`

Create a new `Terraform` entity instance. Pass `nil` for no initial data.

#### `Test(data = nil)`

Create a new `Test` entity instance. Pass `nil` for no initial data.

#### `Token(data = nil)`

Create a new `Token` entity instance. Pass `nil` for no initial data.

#### `TransferRegion(data = nil)`

Create a new `TransferRegion` entity instance. Pass `nil` for no initial data.

#### `User(data = nil)`

Create a new `User` entity instance. Pass `nil` for no initial data.

#### `UserAuthToken(data = nil)`

Create a new `UserAuthToken` entity instance. Pass `nil` for no initial data.

#### `UserAuthenticationToken(data = nil)`

Create a new `UserAuthenticationToken` entity instance. Pass `nil` for no initial data.

#### `UserBrief(data = nil)`

Create a new `UserBrief` entity instance. Pass `nil` for no initial data.

#### `UserProfile(data = nil)`

Create a new `UserProfile` entity instance. Pass `nil` for no initial data.

#### `Vagrant(data = nil)`

Create a new `Vagrant` entity instance. Pass `nil` for no initial data.

#### `Validate(data = nil)`

Create a new `Validate` entity instance. Pass `nil` for no initial data.

#### `Version(data = nil)`

Create a new `Version` entity instance. Pass `nil` for no initial data.

#### `Vulnerability(data = nil)`

Create a new `Vulnerability` entity instance. Pass `nil` for no initial data.

#### `VulnerabilityPolicy(data = nil)`

Create a new `VulnerabilityPolicy` entity instance. Pass `nil` for no initial data.

#### `Webhook(data = nil)`

Create a new `Webhook` entity instance. Pass `nil` for no initial data.

#### `X509Ecdsa(data = nil)`

Create a new `X509Ecdsa` entity instance. Pass `nil` for no initial data.

#### `X509Rsa(data = nil)`

Create a new `X509Rsa` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## AbortEntity

```ruby
abort = client.Abort
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AbortEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AlpineEntity

```ruby
alpine = client.Alpine
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AlpineEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## AuditLogEntity

```ruby
audit_log = client.AuditLog
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `AuditLogEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## BasicEntity

```ruby
basic = client.Basic
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `BasicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CargoEntity

```ruby
cargo = client.Cargo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Cargo.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Cargo.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Cargo.load({ "id" => "cargo_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Cargo.update({
  "id" => "cargo_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CargoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CocoapodEntity

```ruby
cocoapod = client.Cocoapod
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CocoapodEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CompleteEntity

```ruby
complete = client.Complete
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CompleteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ComposerEntity

```ruby
composer = client.Composer
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Composer.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Composer.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Composer.load({ "id" => "composer_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Composer.update({
  "id" => "composer_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ComposerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ConanEntity

```ruby
conan = client.Conan
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ConanEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CondaEntity

```ruby
conda = client.Conda
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Conda.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Conda.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Conda.load({ "id" => "conda_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Conda.update({
  "id" => "conda_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CondaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CopyEntity

```ruby
copy = client.Copy
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CopyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## CranEntity

```ruby
cran = client.Cran
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Cran.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Cran.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Cran.load({ "id" => "cran_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Cran.update({
  "id" => "cran_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `CranEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DartEntity

```ruby
dart = client.Dart
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Dart.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Dart.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Dart.load({ "id" => "dart_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Dart.update({
  "id" => "dart_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DartEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DebEntity

```ruby
deb = client.Deb
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `component` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `distro_version` | `Array` | Yes |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `gpg_key_inline` | `String` | No |  |
| `gpg_key_url` | `String` | No |  |
| `gpg_verification` | `String` | No |  |
| `include_source` | `Boolean` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_distribution` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verification_status` | `String` | No |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Deb.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Deb.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Deb.load({ "id" => "deb_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Deb.update({
  "id" => "deb_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DebEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DenyPolicyEntity

```ruby
deny_policy = client.DenyPolicy
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DenyPolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DependencyEntity

```ruby
dependency = client.Dependency
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DependencyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DisableEntity

```ruby
disable = client.Disable
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DisableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DistributionFullEntity

```ruby
distribution_full = client.DistributionFull
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `format` | `String` | No |  |
| `format_url` | `String` | No |  |
| `name` | `String` | Yes |  |
| `self_url` | `String` | No |  |
| `slug` | `String` | No |  |
| `variant` | `String` | No |  |
| `version` | `Array` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DistributionFull.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DistributionFull.load({ "slug" => "slug" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DistributionFullEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DistroEntity

```ruby
distro = client.Distro
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DistroEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DockerEntity

```ruby
docker = client.Docker
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Docker.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Docker.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Docker.load({ "id" => "docker_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Docker.update({
  "id" => "docker_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DockerEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## DynamicMappingEntity

```ruby
dynamic_mapping = client.DynamicMapping
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim_value` | `String` | Yes |  |
| `service_account` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.DynamicMapping.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.DynamicMapping.load({ "id" => "dynamic_mapping_id", "openid_connect_id" => "openid_connect_id", "org_id" => "org_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `DynamicMappingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EcdsaEntity

```ruby
ecdsa = client.Ecdsa
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EcdsaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EnableEntity

```ruby
enable = client.Enable
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EnableEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EntitlementEntity

```ruby
entitlement = client.Entitlement
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Entitlement.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
  "repo" => "example_repo", # Object
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Entitlement.load({ "id" => "entitlement_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Entitlement.remove({ "identifier" => "identifier", "owner" => "owner", "repo" => "repo" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EntitlementEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## EvaluationEntity

```ruby
evaluation = client.Evaluation
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `EvaluationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FileEntity

```ruby
file = client.File
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.File.create({
  "owner" => "example_owner", # Object
  "repo" => "example_repo", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## FormatEntity

```ruby
format = client.Format
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | Yes |  |
| `distribution` | `Array` | No |  |
| `extension` | `Array` | Yes |  |
| `name` | `String` | Yes |  |
| `premium` | `Boolean` | Yes |  |
| `premium_plan_id` | `String` | No |  |
| `premium_plan_name` | `String` | No |  |
| `slug` | `String` | Yes |  |
| `support` | `Hash` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Format.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Format.load({ "id" => "format_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `FormatEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GeoipEntity

```ruby
geoip = client.Geoip
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GeoipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GonEntity

```ruby
gon = client.Gon
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GonEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Gon2Entity

```ruby
gon2 = client.Gon2
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Gon2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Gon3Entity

```ruby
gon3 = client.Gon3
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Gon3.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Gon3Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Gon4Entity

```ruby
gon4 = client.Gon4
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Gon4Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Gon5Entity

```ruby
gon5 = client.Gon5
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Gon5.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Gon5Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Gon6Entity

```ruby
gon6 = client.Gon6
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Gon6.load({ "identifier" => "identifier", "owner" => "owner", "slug_perm" => "slug_perm" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Gon6Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Gon7Entity

```ruby
gon7 = client.Gon7
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Gon7Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Gon8Entity

```ruby
gon8 = client.Gon8
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Gon8.update({
  "identifier" => "identifier",
  "owner" => "owner",
  "slug_perm" => "slug_perm",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Gon8Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Gon9Entity

```ruby
gon9 = client.Gon9
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Gon9.update({
  "identifier" => "identifier",
  "owner" => "owner",
  "slug_perm" => "slug_perm",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `Gon9Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GpgEntity

```ruby
gpg = client.Gpg
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GpgEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## GroupEntity

```ruby
group = client.Group
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GroupEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HelmEntity

```ruby
helm = client.Helm
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Helm.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Helm.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Helm.load({ "id" => "helm_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Helm.update({
  "id" => "helm_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HelmEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HexEntity

```ruby
hex = client.Hex
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Hex.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Hex.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Hex.load({ "id" => "hex_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Hex.update({
  "id" => "hex_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HexEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HistoryEntity

```ruby
history = client.History
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HistoryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## HuggingfaceEntity

```ruby
huggingface = client.Huggingface
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Huggingface.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Huggingface.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Huggingface.load({ "id" => "huggingface_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Huggingface.update({
  "id" => "huggingface_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `HuggingfaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InfoEntity

```ruby
info = client.Info
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InfoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## InviteEntity

```ruby
invite = client.Invite
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `InviteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LicensePolicyEntity

```ruby
license_policy = client.LicensePolicy
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LicensePolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LimitEntity

```ruby
limit = client.Limit
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LimitEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## LuarockEntity

```ruby
luarock = client.Luarock
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `LuarockEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MavenEntity

```ruby
maven = client.Maven
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `gpg_key_inline` | `String` | No |  |
| `gpg_key_url` | `String` | No |  |
| `gpg_verification` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verification_status` | `String` | No |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Maven.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Maven.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Maven.load({ "id" => "maven_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Maven.update({
  "id" => "maven_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MavenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MemberEntity

```ruby
member = client.Member
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## MoveEntity

```ruby
move = client.Move
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `MoveEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NamespaceEntity

```ruby
namespace = client.Namespace
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `String` | No |  |
| `slug` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `type_name` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Namespace.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Namespace.load({ "id" => "namespace_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NamespaceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NamespaceAuditLogEntity

```ruby
namespace_audit_log = client.NamespaceAuditLog
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `String` | Yes |  |
| `actor_ip_address` | `String` | Yes |  |
| `actor_kind` | `String` | No |  |
| `actor_location` | `Hash` | Yes |  |
| `actor_slug_perm` | `String` | Yes |  |
| `actor_url` | `String` | No |  |
| `context` | `String` | Yes |  |
| `event` | `String` | Yes |  |
| `event_at` | `String` | Yes |  |
| `object` | `String` | Yes |  |
| `object_kind` | `String` | Yes |  |
| `object_slug_perm` | `String` | Yes |  |
| `target` | `String` | Yes |  |
| `target_kind` | `String` | Yes |  |
| `target_slug_perm` | `String` | No |  |
| `uuid` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.NamespaceAuditLog.load({ "id" => "namespace_audit_log_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NamespaceAuditLogEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NpmEntity

```ruby
npm = client.Npm
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Npm.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Npm.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Npm.load({ "id" => "npm_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Npm.update({
  "id" => "npm_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NpmEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## NugetEntity

```ruby
nuget = client.Nuget
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Nuget.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Nuget.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Nuget.load({ "id" => "nuget_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Nuget.update({
  "id" => "nuget_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `NugetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OpenidConnectEntity

```ruby
openid_connect = client.OpenidConnect
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OpenidConnectEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrgEntity

```ruby
org = client.Org
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `country` | `String` | No |  |
| `created_at` | `String` | No |  |
| `event_at` | `String` | No |  |
| `location` | `String` | No |  |
| `name` | `String` | Yes |  |
| `package` | `Hash` | Yes |  |
| `policy` | `Hash` | Yes |  |
| `reason` | `Array` | Yes |  |
| `slug` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `tagline` | `String` | No |  |
| `vulnerability_scan_result` | `Hash` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Org.create({
  "id" => "example_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Org.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Org.load({ "id" => "org_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Org.remove({ "id" => "org_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Org.update({
  "id" => "org_id",
  "team_id" => "team_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrgEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationGroupSyncEntity

```ruby
organization_group_sync = client.OrganizationGroupSync
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `idp_key` | `String` | Yes |  |
| `idp_value` | `String` | Yes |  |
| `role` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `team` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationGroupSync.create({
  "org_id" => "example_org_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationGroupSync.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationGroupSyncEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationGroupSyncStatusEntity

```ruby
organization_group_sync_status = client.OrganizationGroupSyncStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_group_sync_status` | `Boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationGroupSyncStatus.load({ "org_id" => "org_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationGroupSyncStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationInviteEntity

```ruby
organization_invite = client.OrganizationInvite
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `inviter` | `String` | No |  |
| `inviter_url` | `String` | No |  |
| `org` | `String` | No |  |
| `role` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `team` | `Array` | No |  |
| `user` | `String` | No |  |
| `user_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationInvite.create({
  "org_id" => "example_org_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationInvite.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationInvite.update({
  "id" => "id",
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationInviteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationInviteExtendEntity

```ruby
organization_invite_extend = client.OrganizationInviteExtend
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | No |  |
| `expires_at` | `String` | No |  |
| `inviter` | `String` | No |  |
| `inviter_url` | `String` | No |  |
| `org` | `String` | No |  |
| `role` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `team` | `Array` | No |  |
| `user` | `String` | No |  |
| `user_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationInviteExtend.create({
  "org_id" => "example_org_id", # String
  "slug_perm" => "example_slug_perm", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationInviteExtendEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationMembershipEntity

```ruby
organization_membership = client.OrganizationMembership
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | No |  |
| `has_two_factor` | `Boolean` | No |  |
| `is_active` | `Boolean` | No |  |
| `joined_at` | `String` | No |  |
| `last_login_at` | `String` | No |  |
| `last_login_method` | `String` | No |  |
| `role` | `String` | No |  |
| `user` | `String` | No |  |
| `user_id` | `String` | No |  |
| `user_name` | `String` | No |  |
| `user_url` | `String` | No |  |
| `visibility` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationMembership.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationMembership.load({ "member" => "member", "org_id" => "org_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationMembership.update({
  "member" => "member",
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationMembershipEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationMembershipRoleUpdateEntity

```ruby
organization_membership_role_update = client.OrganizationMembershipRoleUpdate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | No |  |
| `has_two_factor` | `Boolean` | No |  |
| `joined_at` | `String` | No |  |
| `last_login_at` | `String` | No |  |
| `last_login_method` | `String` | No |  |
| `role` | `String` | No |  |
| `user` | `String` | No |  |
| `user_id` | `String` | No |  |
| `user_name` | `String` | No |  |
| `user_url` | `String` | No |  |
| `visibility` | `String` | No |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationMembershipRoleUpdate.update({
  "member_id" => "member_id",
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationMembershipRoleUpdateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationMembershipVisibilityUpdateEntity

```ruby
organization_membership_visibility_update = client.OrganizationMembershipVisibilityUpdate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `email` | `String` | No |  |
| `has_two_factor` | `Boolean` | No |  |
| `joined_at` | `String` | No |  |
| `last_login_at` | `String` | No |  |
| `last_login_method` | `String` | No |  |
| `role` | `String` | No |  |
| `user` | `String` | No |  |
| `user_id` | `String` | No |  |
| `user_name` | `String` | No |  |
| `user_url` | `String` | No |  |
| `visibility` | `String` | No |  |

### Operations

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationMembershipVisibilityUpdate.update({
  "member_id" => "member_id",
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationMembershipVisibilityUpdateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationPackageLicensePolicyEntity

```ruby
organization_package_license_policy = client.OrganizationPackageLicensePolicy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_license` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `name` | `String` | Yes |  |
| `on_violation_quarantine` | `Boolean` | No |  |
| `package_query_string` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `spdx_identifier` | `Array` | Yes |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationPackageLicensePolicy.create({
  "org_id" => "example_org_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationPackageLicensePolicy.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationPackageLicensePolicy.load({ "id" => "organization_package_license_policy_id", "org_id" => "org_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationPackageLicensePolicy.update({
  "id" => "organization_package_license_policy_id",
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationPackageLicensePolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationPackageVulnerabilityPolicyEntity

```ruby
organization_package_vulnerability_policy = client.OrganizationPackageVulnerabilityPolicy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `allow_unknown_severity` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `min_severity` | `String` | No |  |
| `name` | `String` | Yes |  |
| `on_violation_quarantine` | `Boolean` | No |  |
| `package_query_string` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationPackageVulnerabilityPolicy.create({
  "org_id" => "example_org_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationPackageVulnerabilityPolicy.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationPackageVulnerabilityPolicy.load({ "id" => "organization_package_vulnerability_policy_id", "org_id" => "org_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationPackageVulnerabilityPolicy.update({
  "id" => "organization_package_vulnerability_policy_id",
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationPackageVulnerabilityPolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationSamlAuthEntity

```ruby
organization_saml_auth = client.OrganizationSamlAuth
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `saml_auth_enabled` | `Boolean` | Yes |  |
| `saml_auth_enforced` | `Boolean` | Yes |  |
| `saml_metadata_inline` | `String` | No |  |
| `saml_metadata_url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationSamlAuth.load({ "org_id" => "org_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationSamlAuth.update({
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationSamlAuthEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationTeamEntity

```ruby
organization_team = client.OrganizationTeam
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `description` | `String` | No |  |
| `name` | `String` | Yes |  |
| `slug` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `visibility` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationTeam.create({
  "org_id" => "example_org_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationTeam.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.OrganizationTeam.load({ "id" => "organization_team_id", "org_id" => "org_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.OrganizationTeam.update({
  "id" => "organization_team_id",
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationTeamEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OrganizationTeamMemberEntity

```ruby
organization_team_member = client.OrganizationTeamMember
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `role` | `String` | Yes |  |
| `user` | `String` | Yes |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.OrganizationTeamMember.create({
  "org_id" => "example_org_id", # String
  "team_id" => "example_team_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.OrganizationTeamMember.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OrganizationTeamMemberEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## OssEntity

```ruby
oss = client.Oss
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `OssEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## P2nEntity

```ruby
p2n = client.P2n
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `P2nEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## P2n2Entity

```ruby
p2n2 = client.P2n2
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `P2n2Entity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PackageEntity

```ruby
package = client.Package
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `architecture` | `Array` | No |  |
| `backend_kind` | `Integer` | No |  |
| `cdn_url` | `String` | No |  |
| `checksum_md5` | `String` | No |  |
| `checksum_sha1` | `String` | No |  |
| `checksum_sha256` | `String` | No |  |
| `checksum_sha512` | `String` | No |  |
| `count` | `Integer` | Yes |  |
| `dep_type` | `String` | No |  |
| `dependencies_checksum_md5` | `String` | No |  |
| `dependencies_url` | `String` | No |  |
| `description` | `String` | No |  |
| `display_name` | `String` | No |  |
| `distro` | `Hash` | Yes |  |
| `distro_version` | `Hash` | No |  |
| `download` | `Integer` | No |  |
| `epoch` | `Integer` | No |  |
| `extension` | `String` | No |  |
| `file` | `Array` | No |  |
| `filename` | `String` | No |  |
| `format` | `String` | No |  |
| `format_url` | `String` | No |  |
| `freeable_storage` | `Integer` | No |  |
| `fully_qualified_name` | `String` | No |  |
| `identifier` | `Hash` | No |  |
| `identifier_perm` | `String` | No |  |
| `indexed` | `Boolean` | No |  |
| `is_cancellable` | `Boolean` | No |  |
| `is_copyable` | `Boolean` | No |  |
| `is_deleteable` | `Boolean` | No |  |
| `is_downloadable` | `Boolean` | No |  |
| `is_moveable` | `Boolean` | No |  |
| `is_quarantinable` | `Boolean` | No |  |
| `is_quarantined` | `Boolean` | No |  |
| `is_resyncable` | `Boolean` | No |  |
| `is_security_scannable` | `Boolean` | No |  |
| `is_sync_awaiting` | `Boolean` | No |  |
| `is_sync_completed` | `Boolean` | No |  |
| `is_sync_failed` | `Boolean` | No |  |
| `is_sync_in_flight` | `Boolean` | No |  |
| `is_sync_in_progress` | `Boolean` | No |  |
| `last_push` | `String` | Yes |  |
| `license` | `String` | No |  |
| `name` | `String` | No |  |
| `namespace` | `String` | No |  |
| `namespace_url` | `String` | No |  |
| `num_download` | `Integer` | Yes |  |
| `num_file` | `Integer` | No |  |
| `operator` | `String` | No |  |
| `origin_repository` | `String` | No |  |
| `origin_repository_url` | `String` | No |  |
| `package` | `Hash` | Yes |  |
| `package_type` | `Integer` | No |  |
| `policy_violated` | `Boolean` | No |  |
| `release` | `String` | No |  |
| `repository` | `String` | No |  |
| `repository_url` | `String` | No |  |
| `security_scan_completed_at` | `String` | No |  |
| `security_scan_started_at` | `String` | No |  |
| `security_scan_status` | `String` | No |  |
| `security_scan_status_updated_at` | `String` | No |  |
| `self_html_url` | `String` | No |  |
| `self_url` | `String` | No |  |
| `signature_url` | `String` | No |  |
| `size` | `Integer` | No |  |
| `slug` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `stage` | `Integer` | No |  |
| `stage_str` | `String` | No |  |
| `stage_updated_at` | `String` | No |  |
| `status` | `Integer` | No |  |
| `status_reason` | `String` | No |  |
| `status_str` | `String` | No |  |
| `status_updated_at` | `String` | No |  |
| `status_url` | `String` | No |  |
| `subtype` | `String` | No |  |
| `summary` | `String` | No |  |
| `sync_finished_at` | `String` | No |  |
| `sync_progress` | `Integer` | No |  |
| `tag` | `Hash` | No |  |
| `tags_immutable` | `Hash` | No |  |
| `type_display` | `String` | No |  |
| `uploaded_at` | `String` | No |  |
| `uploader` | `String` | No |  |
| `uploader_url` | `String` | No |  |
| `version` | `String` | No |  |
| `version_orig` | `String` | No |  |
| `vulnerability_scan_results_url` | `String` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Package.create({
  "owner" => "example_owner", # Object
  "repo" => "example_repo", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Package.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Package.load({ "owner" => "owner", "repo" => "repo" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Package.remove({ "identifier" => "identifier", "owner" => "owner", "repo" => "repo" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PackageEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PackageDenyPolicyEntity

```ruby
package_deny_policy = client.PackageDenyPolicy
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `action` | `String` | No |  |
| `created_at` | `String` | No |  |
| `description` | `String` | No |  |
| `enabled` | `Boolean` | No |  |
| `name` | `String` | No |  |
| `package_query_string` | `String` | Yes |  |
| `slug_perm` | `String` | No |  |
| `status` | `String` | No |  |
| `updated_at` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PackageDenyPolicy.create({
  "org_id" => "example_org_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PackageDenyPolicy.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PackageDenyPolicy.load({ "id" => "package_deny_policy_id", "org_id" => "org_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.PackageDenyPolicy.update({
  "id" => "package_deny_policy_id",
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PackageDenyPolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PackageFilePartsUploadEntity

```ruby
package_file_parts_upload = client.PackageFilePartsUpload
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `identifier` | `String` | No |  |
| `upload_querystring` | `String` | No |  |
| `upload_url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PackageFilePartsUpload.load({ "identifier" => "identifier", "owner" => "owner", "repo" => "repo" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PackageFilePartsUploadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PackageFileUploadEntity

```ruby
package_file_upload = client.PackageFileUpload
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PackageFileUpload.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
  "repo" => "example_repo", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PackageFileUploadEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PackageLicensePolicyEvaluationEntity

```ruby
package_license_policy_evaluation = client.PackageLicensePolicyEvaluation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `evaluation_count` | `Integer` | No |  |
| `policy` | `Hash` | Yes |  |
| `slug_perm` | `String` | No |  |
| `status` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `violation_count` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PackageLicensePolicyEvaluation.create({
  "org_id" => "example_org_id", # String
  "policy_slug_perm" => "example_policy_slug_perm", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PackageLicensePolicyEvaluation.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PackageLicensePolicyEvaluation.load({ "id" => "package_license_policy_evaluation_id", "license_policy_id" => "license_policy_id", "org_id" => "org_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PackageLicensePolicyEvaluationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PackageVersionBadgeEntity

```ruby
package_version_badge = client.PackageVersionBadge
```

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PackageVersionBadge.load({ "owner" => "owner", "package_format" => "package_format", "package_identifier" => "package_identifier", "package_name" => "package_name", "package_version" => "package_version", "repo" => "repo" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PackageVersionBadgeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PackageVulnerabilityPolicyEvaluationEntity

```ruby
package_vulnerability_policy_evaluation = client.PackageVulnerabilityPolicyEvaluation
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `evaluation_count` | `Integer` | No |  |
| `policy` | `Hash` | No |  |
| `slug_perm` | `String` | No |  |
| `status` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `violation_count` | `Integer` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.PackageVulnerabilityPolicyEvaluation.create({
  "org_id" => "example_org_id", # String
  "policy_slug_perm" => "example_policy_slug_perm", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.PackageVulnerabilityPolicyEvaluation.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.PackageVulnerabilityPolicyEvaluation.load({ "id" => "package_vulnerability_policy_evaluation_id", "org_id" => "org_id", "vulnerability_policy_id" => "vulnerability_policy_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PackageVulnerabilityPolicyEvaluationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PrivilegeEntity

```ruby
privilege = client.Privilege
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PrivilegeEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProfileEntity

```ruby
profile = client.Profile
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProfileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProviderSettingEntity

```ruby
provider_setting = client.ProviderSetting
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim` | `Hash` | Yes |  |
| `enabled` | `Boolean` | Yes |  |
| `mapping_claim` | `String` | No |  |
| `name` | `String` | Yes |  |
| `provider_url` | `String` | Yes |  |
| `service_account` | `Array` | No |  |
| `slug` | `String` | No |  |
| `slug_perm` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.ProviderSetting.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ProviderSetting.load({ "org_id" => "org_id", "slug_perm" => "slug_perm" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProviderSettingEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ProviderSettingsWriteEntity

```ruby
provider_settings_write = client.ProviderSettingsWrite
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `claim` | `Hash` | Yes |  |
| `dynamic_mapping` | `Array` | No |  |
| `enabled` | `Boolean` | Yes |  |
| `mapping_claim` | `String` | No |  |
| `name` | `String` | Yes |  |
| `provider_url` | `String` | Yes |  |
| `service_account` | `Array` | No |  |
| `slug` | `String` | No |  |
| `slug_perm` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.ProviderSettingsWrite.create({
  "org_id" => "example_org_id", # String
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.ProviderSettingsWrite.update({
  "org_id" => "org_id",
  "slug_perm" => "slug_perm",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ProviderSettingsWriteEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## PythonEntity

```ruby
python = client.Python
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Python.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Python.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Python.load({ "id" => "python_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Python.update({
  "id" => "python_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `PythonEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## QuarantineEntity

```ruby
quarantine = client.Quarantine
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `QuarantineEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## QuotaEntity

```ruby
quota = client.Quota
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `history` | `Array` | Yes |  |
| `usage` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Quota.load({ "id" => "quota_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `QuotaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RawEntity

```ruby
raw = client.Raw
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RawEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RefreshEntity

```ruby
refresh = client.Refresh
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RefreshEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RegenerateEntity

```ruby
regenerate = client.Regenerate
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RegenerateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepoEntity

```ruby
repo = client.Repo
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cdn_url` | `String` | No |  |
| `content_kind` | `String` | No |  |
| `contextual_auth_realm` | `Boolean` | No |  |
| `copy_own` | `Boolean` | No |  |
| `copy_package` | `String` | No |  |
| `cosign_signing_enabled` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `default_privilege` | `String` | No |  |
| `delete_own` | `Boolean` | No |  |
| `delete_package` | `String` | No |  |
| `deleted_at` | `String` | No |  |
| `description` | `String` | No |  |
| `distribute` | `Array` | No |  |
| `docker_refresh_tokens_enabled` | `Boolean` | No |  |
| `ecdsa_key` | `Array` | No |  |
| `enforce_eula` | `Boolean` | No |  |
| `gpg_key` | `Array` | No |  |
| `index_file` | `Boolean` | No |  |
| `is_open_source` | `Boolean` | No |  |
| `is_private` | `Boolean` | No |  |
| `is_public` | `Boolean` | No |  |
| `manage_entitlements_privilege` | `String` | No |  |
| `move_own` | `Boolean` | No |  |
| `move_package` | `String` | No |  |
| `name` | `String` | Yes |  |
| `namespace` | `String` | No |  |
| `namespace_url` | `String` | No |  |
| `nuget_native_signing_enabled` | `Boolean` | No |  |
| `num_download` | `Integer` | No |  |
| `num_policy_violated_package` | `Integer` | No |  |
| `num_quarantined_package` | `Integer` | No |  |
| `open_source_license` | `String` | No |  |
| `open_source_project_url` | `String` | No |  |
| `package_count` | `Integer` | No |  |
| `package_group_count` | `Integer` | No |  |
| `proxy_npmj` | `Boolean` | No |  |
| `proxy_pypi` | `Boolean` | No |  |
| `raw_package_index_enabled` | `Boolean` | No |  |
| `raw_package_index_signatures_enabled` | `Boolean` | No |  |
| `replace_package` | `String` | No |  |
| `replace_packages_by_default` | `Boolean` | No |  |
| `repository_type` | `Integer` | No |  |
| `repository_type_str` | `String` | No |  |
| `resync_own` | `Boolean` | No |  |
| `resync_package` | `String` | No |  |
| `scan_own` | `Boolean` | No |  |
| `scan_package` | `String` | No |  |
| `self_html_url` | `String` | No |  |
| `self_url` | `String` | No |  |
| `show_setup_all` | `Boolean` | No |  |
| `size` | `Integer` | No |  |
| `size_str` | `String` | No |  |
| `slug` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `storage_region` | `String` | No |  |
| `strict_npm_validation` | `Boolean` | No |  |
| `tag_pre_releases_as_latest` | `Boolean` | No |  |
| `use_debian_label` | `Boolean` | No |  |
| `use_default_cargo_upstream` | `Boolean` | No |  |
| `use_entitlements_privilege` | `String` | No |  |
| `use_noarch_package` | `Boolean` | No |  |
| `use_source_package` | `Boolean` | No |  |
| `use_vulnerability_scanning` | `Boolean` | No |  |
| `user_entitlements_enabled` | `Boolean` | No |  |
| `view_statistic` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Repo.create({
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Repo.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Repo.load({ "id" => "repo_id" })
```

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Repo.remove({ "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Repo.update({
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepoEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryAuditLogEntity

```ruby
repository_audit_log = client.RepositoryAuditLog
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `actor` | `String` | Yes |  |
| `actor_ip_address` | `String` | Yes |  |
| `actor_kind` | `String` | No |  |
| `actor_location` | `Hash` | Yes |  |
| `actor_slug_perm` | `String` | Yes |  |
| `actor_url` | `String` | No |  |
| `context` | `String` | Yes |  |
| `event` | `String` | Yes |  |
| `event_at` | `String` | Yes |  |
| `object` | `String` | Yes |  |
| `object_kind` | `String` | Yes |  |
| `object_slug_perm` | `String` | Yes |  |
| `uuid` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RepositoryAuditLog.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryAuditLogEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryEcdsaKeyEntity

```ruby
repository_ecdsa_key = client.RepositoryEcdsaKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `default` | `Boolean` | No |  |
| `fingerprint` | `String` | No |  |
| `fingerprint_short` | `String` | No |  |
| `public_key` | `String` | No |  |
| `ssh_fingerprint` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RepositoryEcdsaKey.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RepositoryEcdsaKey.load({ "identifier" => "identifier", "owner" => "owner" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryEcdsaKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryGeoIpRuleEntity

```ruby
repository_geo_ip_rule = client.RepositoryGeoIpRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `cidr` | `Hash` | Yes |  |
| `country_code` | `Hash` | Yes |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RepositoryGeoIpRule.load({ "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.RepositoryGeoIpRule.update({
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryGeoIpRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryGeoIpStatusEntity

```ruby
repository_geo_ip_status = client.RepositoryGeoIpStatus
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `geoip_enabled` | `Boolean` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RepositoryGeoIpStatus.load({ "identifier" => "identifier", "owner" => "owner" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryGeoIpStatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryGeoIpTestAddressEntity

```ruby
repository_geo_ip_test_address = client.RepositoryGeoIpTestAddress
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RepositoryGeoIpTestAddress.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryGeoIpTestAddressEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryGpgKeyEntity

```ruby
repository_gpg_key = client.RepositoryGpgKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `comment` | `String` | Yes |  |
| `created_at` | `String` | No |  |
| `default` | `Boolean` | No |  |
| `fingerprint` | `String` | No |  |
| `fingerprint_short` | `String` | No |  |
| `public_key` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RepositoryGpgKey.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RepositoryGpgKey.load({ "identifier" => "identifier", "owner" => "owner" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryGpgKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryPrivilegeInputEntity

```ruby
repository_privilege_input = client.RepositoryPrivilegeInput
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `privilege` | `String` | Yes |  |
| `service` | `String` | No |  |
| `team` | `String` | No |  |
| `user` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RepositoryPrivilegeInput.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryPrivilegeInputEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryRetentionRuleEntity

```ruby
repository_retention_rule = client.RepositoryRetentionRule
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `retention_count_limit` | `Integer` | No |  |
| `retention_days_limit` | `Integer` | No |  |
| `retention_enabled` | `Boolean` | No |  |
| `retention_group_by_format` | `Boolean` | No |  |
| `retention_group_by_name` | `Boolean` | No |  |
| `retention_group_by_package_type` | `Boolean` | No |  |
| `retention_package_query_string` | `String` | No |  |
| `retention_size_limit` | `Integer` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RepositoryRetentionRule.load({ "owner" => "owner", "repo" => "repo" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.RepositoryRetentionRule.update({
  "owner" => "owner",
  "repo" => "repo",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryRetentionRuleEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryRsaKeyEntity

```ruby
repository_rsa_key = client.RepositoryRsaKey
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `created_at` | `String` | No |  |
| `default` | `Boolean` | No |  |
| `fingerprint` | `String` | No |  |
| `fingerprint_short` | `String` | No |  |
| `public_key` | `String` | No |  |
| `ssh_fingerprint` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RepositoryRsaKey.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RepositoryRsaKey.load({ "identifier" => "identifier", "owner" => "owner" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryRsaKeyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryTokenEntity

```ruby
repository_token = client.RepositoryToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `Integer` | No |  |
| `created_at` | `String` | No |  |
| `created_by` | `String` | No |  |
| `created_by_url` | `String` | No |  |
| `default` | `Boolean` | No |  |
| `disable_url` | `String` | No |  |
| `download` | `Integer` | No |  |
| `enable_url` | `String` | No |  |
| `eula_accepted` | `Hash` | No |  |
| `eula_accepted_at` | `String` | No |  |
| `eula_accepted_from` | `String` | No |  |
| `eula_required` | `Boolean` | No |  |
| `has_limit` | `Boolean` | No |  |
| `identifier` | `Integer` | No |  |
| `is_active` | `Boolean` | No |  |
| `is_limited` | `Boolean` | No |  |
| `limit_bandwidth` | `Integer` | No |  |
| `limit_bandwidth_unit` | `String` | No |  |
| `limit_date_range_from` | `String` | No |  |
| `limit_date_range_to` | `String` | No |  |
| `limit_num_client` | `Integer` | No |  |
| `limit_num_download` | `Integer` | No |  |
| `limit_package_query` | `String` | No |  |
| `limit_path_query` | `String` | No |  |
| `metadata` | `Hash` | No |  |
| `name` | `String` | Yes |  |
| `refresh_url` | `String` | No |  |
| `reset_url` | `String` | No |  |
| `scheduled_reset_at` | `String` | No |  |
| `scheduled_reset_period` | `String` | No |  |
| `self_url` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `token` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `updated_by` | `String` | No |  |
| `updated_by_url` | `String` | No |  |
| `usage` | `String` | No |  |
| `user` | `String` | No |  |
| `user_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RepositoryToken.create({
  "owner" => "example_owner", # Object
  "repo" => "example_repo", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RepositoryToken.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RepositoryToken.load({ "identifier" => "identifier", "owner" => "owner", "repo" => "repo" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.RepositoryToken.update({
  "identifier" => "identifier",
  "owner" => "owner",
  "repo" => "repo",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryTokenRefreshEntity

```ruby
repository_token_refresh = client.RepositoryTokenRefresh
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `client` | `Integer` | No |  |
| `created_at` | `String` | No |  |
| `created_by` | `String` | No |  |
| `created_by_url` | `String` | No |  |
| `default` | `Boolean` | No |  |
| `disable_url` | `String` | No |  |
| `download` | `Integer` | No |  |
| `enable_url` | `String` | No |  |
| `eula_accepted` | `Hash` | No |  |
| `eula_accepted_at` | `String` | No |  |
| `eula_accepted_from` | `String` | No |  |
| `eula_required` | `Boolean` | No |  |
| `has_limit` | `Boolean` | No |  |
| `identifier` | `Integer` | No |  |
| `is_active` | `Boolean` | No |  |
| `is_limited` | `Boolean` | No |  |
| `limit_bandwidth` | `Integer` | No |  |
| `limit_bandwidth_unit` | `String` | No |  |
| `limit_date_range_from` | `String` | No |  |
| `limit_date_range_to` | `String` | No |  |
| `limit_num_client` | `Integer` | No |  |
| `limit_num_download` | `Integer` | No |  |
| `limit_package_query` | `String` | No |  |
| `limit_path_query` | `String` | No |  |
| `metadata` | `Hash` | No |  |
| `name` | `String` | No |  |
| `refresh_url` | `String` | No |  |
| `reset_url` | `String` | No |  |
| `scheduled_reset_at` | `String` | No |  |
| `scheduled_reset_period` | `String` | No |  |
| `self_url` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `token` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `updated_by` | `String` | No |  |
| `updated_by_url` | `String` | No |  |
| `usage` | `String` | No |  |
| `user` | `String` | No |  |
| `user_url` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RepositoryTokenRefresh.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
  "repo" => "example_repo", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryTokenRefreshEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryTokenSyncEntity

```ruby
repository_token_sync = client.RepositoryTokenSync
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `token` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RepositoryTokenSync.create({
  "owner" => "example_owner", # Object
  "repo" => "example_repo", # Object
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryTokenSyncEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryWebhookEntity

```ruby
repository_webhook = client.RepositoryWebhook
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `created_by` | `String` | No |  |
| `created_by_url` | `String` | No |  |
| `disable_reason` | `Integer` | No |  |
| `disable_reason_str` | `String` | No |  |
| `event` | `Array` | Yes |  |
| `identifier` | `Integer` | No |  |
| `is_active` | `Boolean` | No |  |
| `is_last_response_bad` | `Boolean` | No |  |
| `last_response_status` | `Integer` | No |  |
| `last_response_status_str` | `String` | No |  |
| `num_sent` | `Integer` | No |  |
| `package_query` | `String` | No |  |
| `request_body_format` | `Integer` | No |  |
| `request_body_format_str` | `String` | No |  |
| `request_body_template_format` | `Integer` | No |  |
| `request_body_template_format_str` | `String` | No |  |
| `request_content_type` | `String` | No |  |
| `secret_header` | `String` | No |  |
| `self_url` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `target_url` | `String` | Yes |  |
| `template` | `Array` | Yes |  |
| `updated_at` | `String` | No |  |
| `updated_by` | `String` | No |  |
| `updated_by_url` | `String` | No |  |
| `verify_ssl` | `Boolean` | No |  |

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

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.RepositoryWebhook.create({
  "owner" => "example_owner", # Object
  "repo" => "example_repo", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.RepositoryWebhook.list
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.RepositoryWebhook.update({
  "identifier" => "identifier",
  "owner" => "owner",
  "repo" => "repo",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryWebhookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryX509EcdsaCertificateEntity

```ruby
repository_x509_ecdsa_certificate = client.RepositoryX509EcdsaCertificate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `certificate` | `String` | No |  |
| `certificate_chain` | `String` | No |  |
| `certificate_chain_fingerprint` | `String` | No |  |
| `certificate_chain_fingerprint_short` | `String` | No |  |
| `certificate_fingerprint` | `String` | No |  |
| `certificate_fingerprint_short` | `String` | No |  |
| `created_at` | `String` | No |  |
| `default` | `Boolean` | No |  |
| `issuing_status` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RepositoryX509EcdsaCertificate.load({ "identifier" => "identifier", "owner" => "owner" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryX509EcdsaCertificateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RepositoryX509RsaCertificateEntity

```ruby
repository_x509_rsa_certificate = client.RepositoryX509RsaCertificate
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `active` | `Boolean` | No |  |
| `certificate` | `String` | No |  |
| `certificate_chain` | `String` | No |  |
| `certificate_chain_fingerprint` | `String` | No |  |
| `certificate_chain_fingerprint_short` | `String` | No |  |
| `certificate_fingerprint` | `String` | No |  |
| `certificate_fingerprint_short` | `String` | No |  |
| `created_at` | `String` | No |  |
| `default` | `Boolean` | No |  |
| `issuing_status` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.RepositoryX509RsaCertificate.load({ "identifier" => "identifier", "owner" => "owner" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RepositoryX509RsaCertificateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResetEntity

```ruby
reset = client.Reset
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResetEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResourcesRateCheckEntity

```ruby
resources_rate_check = client.ResourcesRateCheck
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `resource` | `Hash` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.ResourcesRateCheck.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResourcesRateCheckEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ResyncEntity

```ruby
resync = client.Resync
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ResyncEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RetentionEntity

```ruby
retention = client.Retention
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RetentionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RpmEntity

```ruby
rpm = client.Rpm
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `distro_version` | `String` | Yes |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `gpg_key_inline` | `String` | No |  |
| `gpg_key_url` | `String` | No |  |
| `gpg_verification` | `String` | No |  |
| `include_source` | `Boolean` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verification_status` | `String` | No |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Rpm.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Rpm.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Rpm.load({ "id" => "rpm_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Rpm.update({
  "id" => "rpm_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RpmEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RsaEntity

```ruby
rsa = client.Rsa
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RsaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RubyEntity

```ruby
ruby = client.Ruby
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Ruby.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Ruby.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Ruby.load({ "id" => "ruby_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Ruby.update({
  "id" => "ruby_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RubyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SamlGroupSyncEntity

```ruby
saml_group_sync = client.SamlGroupSync
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SamlGroupSyncEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ScanEntity

```ruby
scan = client.Scan
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ScanEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SelfEntity

```ruby
self = client.Self
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SelfEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ServiceEntity

```ruby
service = client.Service
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `created_by` | `String` | No |  |
| `created_by_url` | `String` | No |  |
| `description` | `String` | No |  |
| `key` | `String` | No |  |
| `key_expires_at` | `String` | No |  |
| `name` | `String` | Yes |  |
| `role` | `String` | No |  |
| `slug` | `String` | No |  |
| `team` | `Array` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Service.create({
  "org_id" => "example_org_id", # String
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Service.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Service.load({ "id" => "service_id", "org_id" => "org_id" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Service.update({
  "id" => "service_id",
  "org_id" => "org_id",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ServiceEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusEntity

```ruby
status = client.Status
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StatusBasicEntity

```ruby
status_basic = client.StatusBasic
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `detail` | `String` | No |  |
| `version` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.StatusBasic.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StatusBasicEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## StorageRegionEntity

```ruby
storage_region = client.StorageRegion
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `label` | `String` | Yes |  |
| `slug` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.StorageRegion.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.StorageRegion.load({ "id" => "storage_region_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `StorageRegionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SwiftEntity

```ruby
swift = client.Swift
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `auth_mode` | `String` | No |  |
| `auth_secret` | `String` | No |  |
| `auth_username` | `String` | No |  |
| `created_at` | `String` | No |  |
| `disable_reason` | `String` | No |  |
| `extra_header_1` | `String` | No |  |
| `extra_header_2` | `String` | No |  |
| `extra_value_1` | `String` | No |  |
| `extra_value_2` | `String` | No |  |
| `is_active` | `Boolean` | No |  |
| `mode` | `String` | No |  |
| `name` | `String` | Yes |  |
| `pending_validation` | `Boolean` | No |  |
| `priority` | `Integer` | No |  |
| `slug_perm` | `String` | No |  |
| `updated_at` | `String` | No |  |
| `upstream_url` | `String` | Yes |  |
| `verify_ssl` | `Boolean` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.Swift.create({
  "identifier" => "example_identifier", # Object
  "owner" => "example_owner", # Object
})
```

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Swift.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Swift.load({ "id" => "swift_id", "identifier" => "identifier", "owner" => "owner" })
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.Swift.update({
  "id" => "swift_id",
  "identifier" => "identifier",
  "owner" => "owner",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SwiftEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## SyncEntity

```ruby
sync = client.Sync
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `SyncEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TagEntity

```ruby
tag = client.Tag
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TagEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TeamEntity

```ruby
team = client.Team
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TeamEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TerraformEntity

```ruby
terraform = client.Terraform
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TerraformEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TestEntity

```ruby
test = client.Test
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TestEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TokenEntity

```ruby
token = client.Token
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## TransferRegionEntity

```ruby
transfer_region = client.TransferRegion
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `TransferRegionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserEntity

```ruby
user = client.User
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `String` | No |  |
| `key` | `String` | No |  |
| `slug_perm` | `String` | No |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.User.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserAuthTokenEntity

```ruby
user_auth_token = client.UserAuthToken
```

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UserAuthToken.create({
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserAuthTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserAuthenticationTokenEntity

```ruby
user_authentication_token = client.UserAuthenticationToken
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created` | `String` | No |  |
| `key` | `String` | No |  |
| `slug_perm` | `String` | No |  |

### Operations

#### `create(reqdata, ctrl = nil) -> result`

Create a new entity with the given data. Raises on error.

```ruby
result = client.UserAuthenticationToken.create({
})
```

#### `update(reqdata, ctrl = nil) -> result`

Update an existing entity. The data must include the entity `id`. Raises on error.

```ruby
result = client.UserAuthenticationToken.update({
  "slug_perm" => "slug_perm",
  # Fields to update
})
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserAuthenticationTokenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserBriefEntity

```ruby
user_brief = client.UserBrief
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `authenticated` | `Boolean` | No |  |
| `email` | `String` | No |  |
| `name` | `String` | No |  |
| `profile_url` | `String` | No |  |
| `self_url` | `String` | No |  |
| `slug` | `String` | No |  |
| `slug_perm` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UserBrief.load()
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserBriefEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## UserProfileEntity

```ruby
user_profile = client.UserProfile
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `company` | `String` | No |  |
| `first_name` | `String` | Yes |  |
| `job_title` | `String` | No |  |
| `joined_at` | `String` | No |  |
| `last_name` | `String` | Yes |  |
| `name` | `String` | No |  |
| `slug` | `String` | No |  |
| `slug_perm` | `String` | No |  |
| `tagline` | `String` | No |  |
| `url` | `String` | No |  |

### Operations

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.UserProfile.load({ "id" => "user_profile_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `UserProfileEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VagrantEntity

```ruby
vagrant = client.Vagrant
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VagrantEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ValidateEntity

```ruby
validate = client.Validate
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ValidateEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VersionEntity

```ruby
version = client.Version
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VersionEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VulnerabilityEntity

```ruby
vulnerability = client.Vulnerability
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `created_at` | `String` | No |  |
| `has_vulnerability` | `Boolean` | No |  |
| `identifier` | `String` | Yes |  |
| `max_severity` | `String` | No |  |
| `num_vulnerability` | `Integer` | No |  |
| `package` | `Hash` | Yes |  |
| `result` | `Array` | Yes |  |
| `scan_id` | `Integer` | Yes |  |
| `target` | `String` | Yes |  |
| `type` | `String` | Yes |  |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Vulnerability.list
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.Vulnerability.load({ "id" => "vulnerability_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VulnerabilityEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## VulnerabilityPolicyEntity

```ruby
vulnerability_policy = client.VulnerabilityPolicy
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `VulnerabilityPolicyEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebhookEntity

```ruby
webhook = client.Webhook
```

### Operations

#### `remove(reqmatch, ctrl = nil) -> result`

Remove the entity matching the given criteria. Raises on error.

```ruby
result = client.Webhook.remove({ "identifier" => "identifier", "owner" => "owner", "repo" => "repo" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebhookEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## X509EcdsaEntity

```ruby
x509_ecdsa = client.X509Ecdsa
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `X509EcdsaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## X509RsaEntity

```ruby
x509_rsa = client.X509Rsa
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `X509RsaEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = CloudsmithSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

