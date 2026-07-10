<?php
declare(strict_types=1);

// Typed models for the Cloudsmith SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Abort entity data model. */
class Abort
{
}

/** Alpine entity data model. */
class Alpine
{
}

/** AuditLog entity data model. */
class AuditLog
{
}

/** Basic entity data model. */
class Basic
{
}

/** Cargo entity data model. */
class Cargo
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Cargo#load. */
class CargoLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Cargo#list. */
class CargoListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Cargo#create. */
class CargoCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Cargo#update. */
class CargoUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Cocoapod entity data model. */
class Cocoapod
{
}

/** Complete entity data model. */
class Complete
{
}

/** Composer entity data model. */
class Composer
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Composer#load. */
class ComposerLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Composer#list. */
class ComposerListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Composer#create. */
class ComposerCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Composer#update. */
class ComposerUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Conan entity data model. */
class Conan
{
}

/** Conda entity data model. */
class Conda
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Conda#load. */
class CondaLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Conda#list. */
class CondaListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Conda#create. */
class CondaCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Conda#update. */
class CondaUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Copy entity data model. */
class Copy
{
}

/** Cran entity data model. */
class Cran
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Cran#load. */
class CranLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Cran#list. */
class CranListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Cran#create. */
class CranCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Cran#update. */
class CranUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Dart entity data model. */
class Dart
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Dart#load. */
class DartLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Dart#list. */
class DartListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Dart#create. */
class DartCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Dart#update. */
class DartUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Deb entity data model. */
class Deb
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $component = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public array $distro_version;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?string $gpg_key_inline = null;
    public ?string $gpg_key_url = null;
    public ?string $gpg_verification = null;
    public ?bool $include_source = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public ?string $upstream_distribution = null;
    public string $upstream_url;
    public ?string $verification_status = null;
    public ?bool $verify_ssl = null;
}

/** Request payload for Deb#load. */
class DebLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Deb#list. */
class DebListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Deb#create. */
class DebCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Deb#update. */
class DebUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** DenyPolicy entity data model. */
class DenyPolicy
{
}

/** Dependency entity data model. */
class Dependency
{
}

/** Disable entity data model. */
class Disable
{
}

/** DistributionFull entity data model. */
class DistributionFull
{
    public ?string $format = null;
    public ?string $format_url = null;
    public string $name;
    public ?string $self_url = null;
    public ?string $slug = null;
    public ?string $variant = null;
    public ?array $version = null;
}

/** Request payload for DistributionFull#load. */
class DistributionFullLoadMatch
{
    public string $slug;
}

/** Request payload for DistributionFull#list. */
class DistributionFullListMatch
{
    public ?string $format = null;
    public ?string $format_url = null;
    public ?string $name = null;
    public ?string $self_url = null;
    public ?string $slug = null;
    public ?string $variant = null;
    public ?array $version = null;
}

/** Distro entity data model. */
class Distro
{
}

/** Docker entity data model. */
class Docker
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Docker#load. */
class DockerLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Docker#list. */
class DockerListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Docker#create. */
class DockerCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Docker#update. */
class DockerUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** DynamicMapping entity data model. */
class DynamicMapping
{
    public string $claim_value;
    public string $service_account;
}

/** Request payload for DynamicMapping#load. */
class DynamicMappingLoadMatch
{
    public string $id;
    public string $openid_connect_id;
    public string $org_id;
}

/** Request payload for DynamicMapping#list. */
class DynamicMappingListMatch
{
    public string $org_id;
    public mixed $provider_setting;
}

/** Ecdsa entity data model. */
class Ecdsa
{
}

/** Enable entity data model. */
class Enable
{
}

/** Entitlement entity data model. */
class Entitlement
{
    public array $token;
}

/** Request payload for Entitlement#load. */
class EntitlementLoadMatch
{
    public mixed $owner = null;
    public mixed $repo = null;
    public ?string $id = null;
}

/** Request payload for Entitlement#create. */
class EntitlementCreateData
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** Request payload for Entitlement#remove. */
class EntitlementRemoveMatch
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** Evaluation entity data model. */
class Evaluation
{
}

/** File entity data model. */
class File
{
}

/** Request payload for File#create. */
class FileCreateData
{
    public mixed $identifier = null;
    public mixed $owner;
    public mixed $repo;
}

/** Format entity data model. */
class Format
{
    public string $description;
    public ?array $distribution = null;
    public array $extension;
    public string $name;
    public bool $premium;
    public ?string $premium_plan_id = null;
    public ?string $premium_plan_name = null;
    public string $slug;
    public array $support;
}

/** Request payload for Format#load. */
class FormatLoadMatch
{
    public string $id;
}

/** Request payload for Format#list. */
class FormatListMatch
{
    public ?string $description = null;
    public ?array $distribution = null;
    public ?array $extension = null;
    public ?string $name = null;
    public ?bool $premium = null;
    public ?string $premium_plan_id = null;
    public ?string $premium_plan_name = null;
    public ?string $slug = null;
    public ?array $support = null;
}

/** Geoip entity data model. */
class Geoip
{
}

/** Gon entity data model. */
class Gon
{
}

/** Gon2 entity data model. */
class Gon2
{
}

/** Gon3 entity data model. */
class Gon3
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Gon3#list. */
class Gon3ListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Gon4 entity data model. */
class Gon4
{
}

/** Gon5 entity data model. */
class Gon5
{
}

/** Request payload for Gon5#create. */
class Gon5CreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Gon6 entity data model. */
class Gon6
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Gon6#load. */
class Gon6LoadMatch
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $slug_perm;
}

/** Gon7 entity data model. */
class Gon7
{
}

/** Gon8 entity data model. */
class Gon8
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Gon8#update. */
class Gon8UpdateData
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $slug_perm;
}

/** Gon9 entity data model. */
class Gon9
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Gon9#update. */
class Gon9UpdateData
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $slug_perm;
}

/** Gpg entity data model. */
class Gpg
{
}

/** Group entity data model. */
class Group
{
}

/** Helm entity data model. */
class Helm
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Helm#load. */
class HelmLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Helm#list. */
class HelmListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Helm#create. */
class HelmCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Helm#update. */
class HelmUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Hex entity data model. */
class Hex
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Hex#load. */
class HexLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Hex#list. */
class HexListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Hex#create. */
class HexCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Hex#update. */
class HexUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** History entity data model. */
class History
{
}

/** Huggingface entity data model. */
class Huggingface
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Huggingface#load. */
class HuggingfaceLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Huggingface#list. */
class HuggingfaceListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Huggingface#create. */
class HuggingfaceCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Huggingface#update. */
class HuggingfaceUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Info entity data model. */
class Info
{
}

/** Invite entity data model. */
class Invite
{
}

/** LicensePolicy entity data model. */
class LicensePolicy
{
}

/** Limit entity data model. */
class Limit
{
}

/** Luarock entity data model. */
class Luarock
{
}

/** Maven entity data model. */
class Maven
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?string $gpg_key_inline = null;
    public ?string $gpg_key_url = null;
    public ?string $gpg_verification = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?string $verification_status = null;
    public ?bool $verify_ssl = null;
}

/** Request payload for Maven#load. */
class MavenLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Maven#list. */
class MavenListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Maven#create. */
class MavenCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Maven#update. */
class MavenUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Member entity data model. */
class Member
{
}

/** Move entity data model. */
class Move
{
}

/** Namespace entity data model. */
class Namespace
{
    public ?string $name = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
    public ?string $type_name = null;
}

/** Request payload for Namespace#load. */
class NamespaceLoadMatch
{
    public string $id;
}

/** Request payload for Namespace#list. */
class NamespaceListMatch
{
    public ?string $name = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
    public ?string $type_name = null;
}

/** NamespaceAuditLog entity data model. */
class NamespaceAuditLog
{
    public string $actor;
    public string $actor_ip_address;
    public ?string $actor_kind = null;
    public array $actor_location;
    public string $actor_slug_perm;
    public ?string $actor_url = null;
    public string $context;
    public string $event;
    public string $event_at;
    public string $object;
    public string $object_kind;
    public string $object_slug_perm;
    public string $target;
    public string $target_kind;
    public ?string $target_slug_perm = null;
    public ?string $uuid = null;
}

/** Request payload for NamespaceAuditLog#load. */
class NamespaceAuditLogLoadMatch
{
    public string $id;
}

/** Npm entity data model. */
class Npm
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Npm#load. */
class NpmLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Npm#list. */
class NpmListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Npm#create. */
class NpmCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Npm#update. */
class NpmUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Nuget entity data model. */
class Nuget
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Nuget#load. */
class NugetLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Nuget#list. */
class NugetListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Nuget#create. */
class NugetCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Nuget#update. */
class NugetUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** OpenidConnect entity data model. */
class OpenidConnect
{
}

/** Org entity data model. */
class Org
{
    public ?string $country = null;
    public ?string $created_at = null;
    public ?string $event_at = null;
    public ?string $location = null;
    public string $name;
    public array $package;
    public array $policy;
    public array $reason;
    public ?string $slug = null;
    public ?string $slug_perm = null;
    public ?string $tagline = null;
    public array $vulnerability_scan_result;
}

/** Request payload for Org#load. */
class OrgLoadMatch
{
    public string $id;
    public ?string $member_id = null;
}

/** Request payload for Org#list. */
class OrgListMatch
{
    public ?string $country = null;
    public ?string $created_at = null;
    public ?string $event_at = null;
    public ?string $location = null;
    public ?string $name = null;
    public ?array $package = null;
    public ?array $policy = null;
    public ?array $reason = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
    public ?string $tagline = null;
    public ?array $vulnerability_scan_result = null;
}

/** Request payload for Org#create. */
class OrgCreateData
{
    public string $id;
    public ?string $member_id = null;
}

/** Request payload for Org#update. */
class OrgUpdateData
{
    public string $id;
    public string $team_id;
}

/** Request payload for Org#remove. */
class OrgRemoveMatch
{
    public string $id;
    public mixed $member = null;
    public mixed $service = null;
    public mixed $slug_perm = null;
    public mixed $team = null;
}

/** OrganizationGroupSync entity data model. */
class OrganizationGroupSync
{
    public string $idp_key;
    public string $idp_value;
    public ?string $role = null;
    public ?string $slug_perm = null;
    public string $team;
}

/** Request payload for OrganizationGroupSync#list. */
class OrganizationGroupSyncListMatch
{
    public string $org_id;
}

/** Request payload for OrganizationGroupSync#create. */
class OrganizationGroupSyncCreateData
{
    public string $org_id;
}

/** OrganizationGroupSyncStatus entity data model. */
class OrganizationGroupSyncStatus
{
    public ?bool $saml_group_sync_status = null;
}

/** Request payload for OrganizationGroupSyncStatus#load. */
class OrganizationGroupSyncStatusLoadMatch
{
    public string $org_id;
}

/** OrganizationInvite entity data model. */
class OrganizationInvite
{
    public ?string $email = null;
    public ?string $expires_at = null;
    public ?string $inviter = null;
    public ?string $inviter_url = null;
    public ?string $org = null;
    public ?string $role = null;
    public ?string $slug_perm = null;
    public ?array $team = null;
    public ?string $user = null;
    public ?string $user_url = null;
}

/** Request payload for OrganizationInvite#list. */
class OrganizationInviteListMatch
{
    public string $org_id;
}

/** Request payload for OrganizationInvite#create. */
class OrganizationInviteCreateData
{
    public string $org_id;
}

/** Request payload for OrganizationInvite#update. */
class OrganizationInviteUpdateData
{
    public string $id;
    public string $org_id;
}

/** OrganizationInviteExtend entity data model. */
class OrganizationInviteExtend
{
    public ?string $email = null;
    public ?string $expires_at = null;
    public ?string $inviter = null;
    public ?string $inviter_url = null;
    public ?string $org = null;
    public ?string $role = null;
    public ?string $slug_perm = null;
    public ?array $team = null;
    public ?string $user = null;
    public ?string $user_url = null;
}

/** Request payload for OrganizationInviteExtend#create. */
class OrganizationInviteExtendCreateData
{
    public string $org_id;
    public mixed $slug_perm;
}

/** OrganizationMembership entity data model. */
class OrganizationMembership
{
    public ?string $email = null;
    public ?bool $has_two_factor = null;
    public ?bool $is_active = null;
    public ?string $joined_at = null;
    public ?string $last_login_at = null;
    public ?string $last_login_method = null;
    public ?string $role = null;
    public ?string $user = null;
    public ?string $user_id = null;
    public ?string $user_name = null;
    public ?string $user_url = null;
    public ?string $visibility = null;
}

/** Request payload for OrganizationMembership#load. */
class OrganizationMembershipLoadMatch
{
    public mixed $member;
    public string $org_id;
}

/** Request payload for OrganizationMembership#list. */
class OrganizationMembershipListMatch
{
    public string $org_id;
}

/** Request payload for OrganizationMembership#update. */
class OrganizationMembershipUpdateData
{
    public mixed $member;
    public string $org_id;
}

/** OrganizationMembershipRoleUpdate entity data model. */
class OrganizationMembershipRoleUpdate
{
    public ?string $email = null;
    public ?bool $has_two_factor = null;
    public ?string $joined_at = null;
    public ?string $last_login_at = null;
    public ?string $last_login_method = null;
    public ?string $role = null;
    public ?string $user = null;
    public ?string $user_id = null;
    public ?string $user_name = null;
    public ?string $user_url = null;
    public ?string $visibility = null;
}

/** Request payload for OrganizationMembershipRoleUpdate#update. */
class OrganizationMembershipRoleUpdateUpdateData
{
    public string $member_id;
    public string $org_id;
}

/** OrganizationMembershipVisibilityUpdate entity data model. */
class OrganizationMembershipVisibilityUpdate
{
    public ?string $email = null;
    public ?bool $has_two_factor = null;
    public ?string $joined_at = null;
    public ?string $last_login_at = null;
    public ?string $last_login_method = null;
    public ?string $role = null;
    public ?string $user = null;
    public ?string $user_id = null;
    public ?string $user_name = null;
    public ?string $user_url = null;
    public ?string $visibility = null;
}

/** Request payload for OrganizationMembershipVisibilityUpdate#update. */
class OrganizationMembershipVisibilityUpdateUpdateData
{
    public string $member_id;
    public string $org_id;
}

/** OrganizationPackageLicensePolicy entity data model. */
class OrganizationPackageLicensePolicy
{
    public ?bool $allow_unknown_license = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public string $name;
    public ?bool $on_violation_quarantine = null;
    public ?string $package_query_string = null;
    public ?string $slug_perm = null;
    public array $spdx_identifier;
    public ?string $updated_at = null;
}

/** Request payload for OrganizationPackageLicensePolicy#load. */
class OrganizationPackageLicensePolicyLoadMatch
{
    public string $id;
    public string $org_id;
}

/** Request payload for OrganizationPackageLicensePolicy#list. */
class OrganizationPackageLicensePolicyListMatch
{
    public string $org_id;
}

/** Request payload for OrganizationPackageLicensePolicy#create. */
class OrganizationPackageLicensePolicyCreateData
{
    public string $org_id;
}

/** Request payload for OrganizationPackageLicensePolicy#update. */
class OrganizationPackageLicensePolicyUpdateData
{
    public string $id;
    public string $org_id;
}

/** OrganizationPackageVulnerabilityPolicy entity data model. */
class OrganizationPackageVulnerabilityPolicy
{
    public ?bool $allow_unknown_severity = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?string $min_severity = null;
    public string $name;
    public ?bool $on_violation_quarantine = null;
    public ?string $package_query_string = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
}

/** Request payload for OrganizationPackageVulnerabilityPolicy#load. */
class OrganizationPackageVulnerabilityPolicyLoadMatch
{
    public string $id;
    public string $org_id;
}

/** Request payload for OrganizationPackageVulnerabilityPolicy#list. */
class OrganizationPackageVulnerabilityPolicyListMatch
{
    public string $org_id;
}

/** Request payload for OrganizationPackageVulnerabilityPolicy#create. */
class OrganizationPackageVulnerabilityPolicyCreateData
{
    public string $org_id;
}

/** Request payload for OrganizationPackageVulnerabilityPolicy#update. */
class OrganizationPackageVulnerabilityPolicyUpdateData
{
    public string $id;
    public string $org_id;
}

/** OrganizationSamlAuth entity data model. */
class OrganizationSamlAuth
{
    public bool $saml_auth_enabled;
    public bool $saml_auth_enforced;
    public ?string $saml_metadata_inline = null;
    public ?string $saml_metadata_url = null;
}

/** Request payload for OrganizationSamlAuth#load. */
class OrganizationSamlAuthLoadMatch
{
    public string $org_id;
}

/** Request payload for OrganizationSamlAuth#update. */
class OrganizationSamlAuthUpdateData
{
    public string $org_id;
}

/** OrganizationTeam entity data model. */
class OrganizationTeam
{
    public ?string $description = null;
    public string $name;
    public ?string $slug = null;
    public ?string $slug_perm = null;
    public ?string $visibility = null;
}

/** Request payload for OrganizationTeam#load. */
class OrganizationTeamLoadMatch
{
    public string $id;
    public string $org_id;
}

/** Request payload for OrganizationTeam#list. */
class OrganizationTeamListMatch
{
    public string $org_id;
}

/** Request payload for OrganizationTeam#create. */
class OrganizationTeamCreateData
{
    public string $org_id;
}

/** Request payload for OrganizationTeam#update. */
class OrganizationTeamUpdateData
{
    public string $id;
    public string $org_id;
}

/** OrganizationTeamMember entity data model. */
class OrganizationTeamMember
{
    public string $role;
    public string $user;
}

/** Request payload for OrganizationTeamMember#list. */
class OrganizationTeamMemberListMatch
{
    public string $org_id;
    public string $team_id;
}

/** Request payload for OrganizationTeamMember#create. */
class OrganizationTeamMemberCreateData
{
    public string $org_id;
    public string $team_id;
}

/** Oss entity data model. */
class Oss
{
}

/** P2n entity data model. */
class P2n
{
}

/** P2n2 entity data model. */
class P2n2
{
}

/** Package entity data model. */
class Package
{
    public ?array $architecture = null;
    public ?int $backend_kind = null;
    public ?string $cdn_url = null;
    public ?string $checksum_md5 = null;
    public ?string $checksum_sha1 = null;
    public ?string $checksum_sha256 = null;
    public ?string $checksum_sha512 = null;
    public int $count;
    public ?string $dep_type = null;
    public ?string $dependencies_checksum_md5 = null;
    public ?string $dependencies_url = null;
    public ?string $description = null;
    public ?string $display_name = null;
    public array $distro;
    public ?array $distro_version = null;
    public ?int $download = null;
    public ?int $epoch = null;
    public ?string $extension = null;
    public ?array $file = null;
    public ?string $filename = null;
    public ?string $format = null;
    public ?string $format_url = null;
    public ?int $freeable_storage = null;
    public ?string $fully_qualified_name = null;
    public ?array $identifier = null;
    public ?string $identifier_perm = null;
    public ?bool $indexed = null;
    public ?bool $is_cancellable = null;
    public ?bool $is_copyable = null;
    public ?bool $is_deleteable = null;
    public ?bool $is_downloadable = null;
    public ?bool $is_moveable = null;
    public ?bool $is_quarantinable = null;
    public ?bool $is_quarantined = null;
    public ?bool $is_resyncable = null;
    public ?bool $is_security_scannable = null;
    public ?bool $is_sync_awaiting = null;
    public ?bool $is_sync_completed = null;
    public ?bool $is_sync_failed = null;
    public ?bool $is_sync_in_flight = null;
    public ?bool $is_sync_in_progress = null;
    public string $last_push;
    public ?string $license = null;
    public ?string $name = null;
    public ?string $namespace = null;
    public ?string $namespace_url = null;
    public int $num_download;
    public ?int $num_file = null;
    public ?string $operator = null;
    public ?string $origin_repository = null;
    public ?string $origin_repository_url = null;
    public array $package;
    public ?int $package_type = null;
    public ?bool $policy_violated = null;
    public ?string $release = null;
    public ?string $repository = null;
    public ?string $repository_url = null;
    public ?string $security_scan_completed_at = null;
    public ?string $security_scan_started_at = null;
    public ?string $security_scan_status = null;
    public ?string $security_scan_status_updated_at = null;
    public ?string $self_html_url = null;
    public ?string $self_url = null;
    public ?string $signature_url = null;
    public ?int $size = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
    public ?int $stage = null;
    public ?string $stage_str = null;
    public ?string $stage_updated_at = null;
    public ?int $status = null;
    public ?string $status_reason = null;
    public ?string $status_str = null;
    public ?string $status_updated_at = null;
    public ?string $status_url = null;
    public ?string $subtype = null;
    public ?string $summary = null;
    public ?string $sync_finished_at = null;
    public ?int $sync_progress = null;
    public ?array $tag = null;
    public ?array $tags_immutable = null;
    public ?string $type_display = null;
    public ?string $uploaded_at = null;
    public ?string $uploader = null;
    public ?string $uploader_url = null;
    public ?string $version = null;
    public ?string $version_orig = null;
    public ?string $vulnerability_scan_results_url = null;
}

/** Request payload for Package#load. */
class PackageLoadMatch
{
    public mixed $owner;
    public mixed $repo;
    public mixed $identifier = null;
}

/** Request payload for Package#list. */
class PackageListMatch
{
    public mixed $owner;
    public mixed $repo;
    public mixed $identifier = null;
}

/** Request payload for Package#create. */
class PackageCreateData
{
    public mixed $identifier = null;
    public mixed $owner;
    public mixed $repo;
}

/** Request payload for Package#remove. */
class PackageRemoveMatch
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** PackageDenyPolicy entity data model. */
class PackageDenyPolicy
{
    public ?string $action = null;
    public ?string $created_at = null;
    public ?string $description = null;
    public ?bool $enabled = null;
    public ?string $name = null;
    public string $package_query_string;
    public ?string $slug_perm = null;
    public ?string $status = null;
    public ?string $updated_at = null;
}

/** Request payload for PackageDenyPolicy#load. */
class PackageDenyPolicyLoadMatch
{
    public string $id;
    public string $org_id;
}

/** Request payload for PackageDenyPolicy#list. */
class PackageDenyPolicyListMatch
{
    public string $org_id;
}

/** Request payload for PackageDenyPolicy#create. */
class PackageDenyPolicyCreateData
{
    public string $org_id;
}

/** Request payload for PackageDenyPolicy#update. */
class PackageDenyPolicyUpdateData
{
    public string $id;
    public string $org_id;
}

/** PackageFilePartsUpload entity data model. */
class PackageFilePartsUpload
{
    public ?string $identifier = null;
    public ?string $upload_querystring = null;
    public ?string $upload_url = null;
}

/** Request payload for PackageFilePartsUpload#load. */
class PackageFilePartsUploadLoadMatch
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** PackageFileUpload entity data model. */
class PackageFileUpload
{
}

/** Request payload for PackageFileUpload#create. */
class PackageFileUploadCreateData
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** PackageLicensePolicyEvaluation entity data model. */
class PackageLicensePolicyEvaluation
{
    public ?string $created_at = null;
    public ?int $evaluation_count = null;
    public array $policy;
    public ?string $slug_perm = null;
    public ?string $status = null;
    public ?string $updated_at = null;
    public ?int $violation_count = null;
}

/** Request payload for PackageLicensePolicyEvaluation#load. */
class PackageLicensePolicyEvaluationLoadMatch
{
    public string $id;
    public string $license_policy_id;
    public string $org_id;
}

/** Request payload for PackageLicensePolicyEvaluation#list. */
class PackageLicensePolicyEvaluationListMatch
{
    public string $org_id;
    public mixed $policy_slug_perm;
}

/** Request payload for PackageLicensePolicyEvaluation#create. */
class PackageLicensePolicyEvaluationCreateData
{
    public string $org_id;
    public mixed $policy_slug_perm;
}

/** PackageVersionBadge entity data model. */
class PackageVersionBadge
{
}

/** Request payload for PackageVersionBadge#load. */
class PackageVersionBadgeLoadMatch
{
    public mixed $owner;
    public mixed $package_format;
    public mixed $package_identifier;
    public mixed $package_name;
    public mixed $package_version;
    public mixed $repo;
}

/** PackageVulnerabilityPolicyEvaluation entity data model. */
class PackageVulnerabilityPolicyEvaluation
{
    public ?string $created_at = null;
    public ?int $evaluation_count = null;
    public ?array $policy = null;
    public ?string $slug_perm = null;
    public ?string $status = null;
    public ?string $updated_at = null;
    public ?int $violation_count = null;
}

/** Request payload for PackageVulnerabilityPolicyEvaluation#load. */
class PackageVulnerabilityPolicyEvaluationLoadMatch
{
    public string $id;
    public string $org_id;
    public string $vulnerability_policy_id;
}

/** Request payload for PackageVulnerabilityPolicyEvaluation#list. */
class PackageVulnerabilityPolicyEvaluationListMatch
{
    public string $org_id;
    public mixed $policy_slug_perm;
}

/** Request payload for PackageVulnerabilityPolicyEvaluation#create. */
class PackageVulnerabilityPolicyEvaluationCreateData
{
    public string $org_id;
    public mixed $policy_slug_perm;
}

/** Privilege entity data model. */
class Privilege
{
}

/** Profile entity data model. */
class Profile
{
}

/** ProviderSetting entity data model. */
class ProviderSetting
{
    public array $claim;
    public bool $enabled;
    public ?string $mapping_claim = null;
    public string $name;
    public string $provider_url;
    public ?array $service_account = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
}

/** Request payload for ProviderSetting#load. */
class ProviderSettingLoadMatch
{
    public string $org_id;
    public mixed $slug_perm;
}

/** Request payload for ProviderSetting#list. */
class ProviderSettingListMatch
{
    public string $org_id;
}

/** ProviderSettingsWrite entity data model. */
class ProviderSettingsWrite
{
    public array $claim;
    public ?array $dynamic_mapping = null;
    public bool $enabled;
    public ?string $mapping_claim = null;
    public string $name;
    public string $provider_url;
    public ?array $service_account = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
}

/** Request payload for ProviderSettingsWrite#create. */
class ProviderSettingsWriteCreateData
{
    public string $org_id;
}

/** Request payload for ProviderSettingsWrite#update. */
class ProviderSettingsWriteUpdateData
{
    public string $org_id;
    public mixed $slug_perm;
}

/** Python entity data model. */
class Python
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Python#load. */
class PythonLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Python#list. */
class PythonListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Python#create. */
class PythonCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Python#update. */
class PythonUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Quarantine entity data model. */
class Quarantine
{
}

/** Quota entity data model. */
class Quota
{
    public array $history;
    public array $usage;
}

/** Request payload for Quota#load. */
class QuotaLoadMatch
{
    public ?string $id = null;
    public mixed $owner = null;
}

/** Raw entity data model. */
class Raw
{
}

/** Refresh entity data model. */
class Refresh
{
}

/** Regenerate entity data model. */
class Regenerate
{
}

/** Repo entity data model. */
class Repo
{
    public ?string $cdn_url = null;
    public ?string $content_kind = null;
    public ?bool $contextual_auth_realm = null;
    public ?bool $copy_own = null;
    public ?string $copy_package = null;
    public ?bool $cosign_signing_enabled = null;
    public ?string $created_at = null;
    public ?string $default_privilege = null;
    public ?bool $delete_own = null;
    public ?string $delete_package = null;
    public ?string $deleted_at = null;
    public ?string $description = null;
    public ?array $distribute = null;
    public ?bool $docker_refresh_tokens_enabled = null;
    public ?array $ecdsa_key = null;
    public ?bool $enforce_eula = null;
    public ?array $gpg_key = null;
    public ?bool $index_file = null;
    public ?bool $is_open_source = null;
    public ?bool $is_private = null;
    public ?bool $is_public = null;
    public ?string $manage_entitlements_privilege = null;
    public ?bool $move_own = null;
    public ?string $move_package = null;
    public string $name;
    public ?string $namespace = null;
    public ?string $namespace_url = null;
    public ?bool $nuget_native_signing_enabled = null;
    public ?int $num_download = null;
    public ?int $num_policy_violated_package = null;
    public ?int $num_quarantined_package = null;
    public ?string $open_source_license = null;
    public ?string $open_source_project_url = null;
    public ?int $package_count = null;
    public ?int $package_group_count = null;
    public ?bool $proxy_npmj = null;
    public ?bool $proxy_pypi = null;
    public ?bool $raw_package_index_enabled = null;
    public ?bool $raw_package_index_signatures_enabled = null;
    public ?string $replace_package = null;
    public ?bool $replace_packages_by_default = null;
    public ?int $repository_type = null;
    public ?string $repository_type_str = null;
    public ?bool $resync_own = null;
    public ?string $resync_package = null;
    public ?bool $scan_own = null;
    public ?string $scan_package = null;
    public ?string $self_html_url = null;
    public ?string $self_url = null;
    public ?bool $show_setup_all = null;
    public ?int $size = null;
    public ?string $size_str = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
    public ?string $storage_region = null;
    public ?bool $strict_npm_validation = null;
    public ?bool $tag_pre_releases_as_latest = null;
    public ?bool $use_debian_label = null;
    public ?bool $use_default_cargo_upstream = null;
    public ?string $use_entitlements_privilege = null;
    public ?bool $use_noarch_package = null;
    public ?bool $use_source_package = null;
    public ?bool $use_vulnerability_scanning = null;
    public ?bool $user_entitlements_enabled = null;
    public ?string $view_statistic = null;
}

/** Request payload for Repo#load. */
class RepoLoadMatch
{
    public string $id;
}

/** Request payload for Repo#list. */
class RepoListMatch
{
    public mixed $identifier = null;
    public mixed $owner = null;
}

/** Request payload for Repo#create. */
class RepoCreateData
{
    public mixed $identifier = null;
    public mixed $owner = null;
    public ?string $id = null;
}

/** Request payload for Repo#update. */
class RepoUpdateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Repo#remove. */
class RepoRemoveMatch
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $slug_perm = null;
}

/** RepositoryAuditLog entity data model. */
class RepositoryAuditLog
{
    public string $actor;
    public string $actor_ip_address;
    public ?string $actor_kind = null;
    public array $actor_location;
    public string $actor_slug_perm;
    public ?string $actor_url = null;
    public string $context;
    public string $event;
    public string $event_at;
    public string $object;
    public string $object_kind;
    public string $object_slug_perm;
    public ?string $uuid = null;
}

/** Request payload for RepositoryAuditLog#list. */
class RepositoryAuditLogListMatch
{
    public mixed $owner;
    public mixed $repo;
}

/** RepositoryEcdsaKey entity data model. */
class RepositoryEcdsaKey
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?bool $default = null;
    public ?string $fingerprint = null;
    public ?string $fingerprint_short = null;
    public ?string $public_key = null;
    public ?string $ssh_fingerprint = null;
}

/** Request payload for RepositoryEcdsaKey#load. */
class RepositoryEcdsaKeyLoadMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for RepositoryEcdsaKey#create. */
class RepositoryEcdsaKeyCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** RepositoryGeoIpRule entity data model. */
class RepositoryGeoIpRule
{
    public array $cidr;
    public array $country_code;
}

/** Request payload for RepositoryGeoIpRule#load. */
class RepositoryGeoIpRuleLoadMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for RepositoryGeoIpRule#update. */
class RepositoryGeoIpRuleUpdateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** RepositoryGeoIpStatus entity data model. */
class RepositoryGeoIpStatus
{
    public ?bool $geoip_enabled = null;
}

/** Request payload for RepositoryGeoIpStatus#load. */
class RepositoryGeoIpStatusLoadMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** RepositoryGeoIpTestAddress entity data model. */
class RepositoryGeoIpTestAddress
{
}

/** Request payload for RepositoryGeoIpTestAddress#create. */
class RepositoryGeoIpTestAddressCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** RepositoryGpgKey entity data model. */
class RepositoryGpgKey
{
    public ?bool $active = null;
    public string $comment;
    public ?string $created_at = null;
    public ?bool $default = null;
    public ?string $fingerprint = null;
    public ?string $fingerprint_short = null;
    public ?string $public_key = null;
}

/** Request payload for RepositoryGpgKey#load. */
class RepositoryGpgKeyLoadMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for RepositoryGpgKey#create. */
class RepositoryGpgKeyCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** RepositoryPrivilegeInput entity data model. */
class RepositoryPrivilegeInput
{
    public string $privilege;
    public ?string $service = null;
    public ?string $team = null;
    public ?string $user = null;
}

/** Request payload for RepositoryPrivilegeInput#list. */
class RepositoryPrivilegeInputListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** RepositoryRetentionRule entity data model. */
class RepositoryRetentionRule
{
    public ?int $retention_count_limit = null;
    public ?int $retention_days_limit = null;
    public ?bool $retention_enabled = null;
    public ?bool $retention_group_by_format = null;
    public ?bool $retention_group_by_name = null;
    public ?bool $retention_group_by_package_type = null;
    public ?string $retention_package_query_string = null;
    public ?int $retention_size_limit = null;
}

/** Request payload for RepositoryRetentionRule#load. */
class RepositoryRetentionRuleLoadMatch
{
    public mixed $owner;
    public mixed $repo;
}

/** Request payload for RepositoryRetentionRule#update. */
class RepositoryRetentionRuleUpdateData
{
    public mixed $owner;
    public mixed $repo;
}

/** RepositoryRsaKey entity data model. */
class RepositoryRsaKey
{
    public ?bool $active = null;
    public ?string $created_at = null;
    public ?bool $default = null;
    public ?string $fingerprint = null;
    public ?string $fingerprint_short = null;
    public ?string $public_key = null;
    public ?string $ssh_fingerprint = null;
}

/** Request payload for RepositoryRsaKey#load. */
class RepositoryRsaKeyLoadMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for RepositoryRsaKey#create. */
class RepositoryRsaKeyCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** RepositoryToken entity data model. */
class RepositoryToken
{
    public ?int $client = null;
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?string $created_by_url = null;
    public ?bool $default = null;
    public ?string $disable_url = null;
    public ?int $download = null;
    public ?string $enable_url = null;
    public ?array $eula_accepted = null;
    public ?string $eula_accepted_at = null;
    public ?string $eula_accepted_from = null;
    public ?bool $eula_required = null;
    public ?bool $has_limit = null;
    public ?int $identifier = null;
    public ?bool $is_active = null;
    public ?bool $is_limited = null;
    public ?int $limit_bandwidth = null;
    public ?string $limit_bandwidth_unit = null;
    public ?string $limit_date_range_from = null;
    public ?string $limit_date_range_to = null;
    public ?int $limit_num_client = null;
    public ?int $limit_num_download = null;
    public ?string $limit_package_query = null;
    public ?string $limit_path_query = null;
    public ?array $metadata = null;
    public string $name;
    public ?string $refresh_url = null;
    public ?string $reset_url = null;
    public ?string $scheduled_reset_at = null;
    public ?string $scheduled_reset_period = null;
    public ?string $self_url = null;
    public ?string $slug_perm = null;
    public ?string $token = null;
    public ?string $updated_at = null;
    public ?string $updated_by = null;
    public ?string $updated_by_url = null;
    public ?string $usage = null;
    public ?string $user = null;
    public ?string $user_url = null;
}

/** Request payload for RepositoryToken#load. */
class RepositoryTokenLoadMatch
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** Request payload for RepositoryToken#list. */
class RepositoryTokenListMatch
{
    public mixed $owner;
    public mixed $repo;
}

/** Request payload for RepositoryToken#create. */
class RepositoryTokenCreateData
{
    public mixed $owner;
    public mixed $repo;
}

/** Request payload for RepositoryToken#update. */
class RepositoryTokenUpdateData
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** RepositoryTokenRefresh entity data model. */
class RepositoryTokenRefresh
{
    public ?int $client = null;
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?string $created_by_url = null;
    public ?bool $default = null;
    public ?string $disable_url = null;
    public ?int $download = null;
    public ?string $enable_url = null;
    public ?array $eula_accepted = null;
    public ?string $eula_accepted_at = null;
    public ?string $eula_accepted_from = null;
    public ?bool $eula_required = null;
    public ?bool $has_limit = null;
    public ?int $identifier = null;
    public ?bool $is_active = null;
    public ?bool $is_limited = null;
    public ?int $limit_bandwidth = null;
    public ?string $limit_bandwidth_unit = null;
    public ?string $limit_date_range_from = null;
    public ?string $limit_date_range_to = null;
    public ?int $limit_num_client = null;
    public ?int $limit_num_download = null;
    public ?string $limit_package_query = null;
    public ?string $limit_path_query = null;
    public ?array $metadata = null;
    public ?string $name = null;
    public ?string $refresh_url = null;
    public ?string $reset_url = null;
    public ?string $scheduled_reset_at = null;
    public ?string $scheduled_reset_period = null;
    public ?string $self_url = null;
    public ?string $slug_perm = null;
    public ?string $token = null;
    public ?string $updated_at = null;
    public ?string $updated_by = null;
    public ?string $updated_by_url = null;
    public ?string $usage = null;
    public ?string $user = null;
    public ?string $user_url = null;
}

/** Request payload for RepositoryTokenRefresh#create. */
class RepositoryTokenRefreshCreateData
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** RepositoryTokenSync entity data model. */
class RepositoryTokenSync
{
    public ?array $token = null;
}

/** Request payload for RepositoryTokenSync#create. */
class RepositoryTokenSyncCreateData
{
    public mixed $owner;
    public mixed $repo;
}

/** RepositoryWebhook entity data model. */
class RepositoryWebhook
{
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?string $created_by_url = null;
    public ?int $disable_reason = null;
    public ?string $disable_reason_str = null;
    public array $event;
    public ?int $identifier = null;
    public ?bool $is_active = null;
    public ?bool $is_last_response_bad = null;
    public ?int $last_response_status = null;
    public ?string $last_response_status_str = null;
    public ?int $num_sent = null;
    public ?string $package_query = null;
    public ?int $request_body_format = null;
    public ?string $request_body_format_str = null;
    public ?int $request_body_template_format = null;
    public ?string $request_body_template_format_str = null;
    public ?string $request_content_type = null;
    public ?string $secret_header = null;
    public ?string $self_url = null;
    public ?string $slug_perm = null;
    public string $target_url;
    public array $template;
    public ?string $updated_at = null;
    public ?string $updated_by = null;
    public ?string $updated_by_url = null;
    public ?bool $verify_ssl = null;
}

/** Request payload for RepositoryWebhook#list. */
class RepositoryWebhookListMatch
{
    public mixed $owner;
    public mixed $repo;
    public mixed $identifier = null;
}

/** Request payload for RepositoryWebhook#create. */
class RepositoryWebhookCreateData
{
    public mixed $owner;
    public mixed $repo;
}

/** Request payload for RepositoryWebhook#update. */
class RepositoryWebhookUpdateData
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** RepositoryX509EcdsaCertificate entity data model. */
class RepositoryX509EcdsaCertificate
{
    public ?bool $active = null;
    public ?string $certificate = null;
    public ?string $certificate_chain = null;
    public ?string $certificate_chain_fingerprint = null;
    public ?string $certificate_chain_fingerprint_short = null;
    public ?string $certificate_fingerprint = null;
    public ?string $certificate_fingerprint_short = null;
    public ?string $created_at = null;
    public ?bool $default = null;
    public ?string $issuing_status = null;
}

/** Request payload for RepositoryX509EcdsaCertificate#load. */
class RepositoryX509EcdsaCertificateLoadMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** RepositoryX509RsaCertificate entity data model. */
class RepositoryX509RsaCertificate
{
    public ?bool $active = null;
    public ?string $certificate = null;
    public ?string $certificate_chain = null;
    public ?string $certificate_chain_fingerprint = null;
    public ?string $certificate_chain_fingerprint_short = null;
    public ?string $certificate_fingerprint = null;
    public ?string $certificate_fingerprint_short = null;
    public ?string $created_at = null;
    public ?bool $default = null;
    public ?string $issuing_status = null;
}

/** Request payload for RepositoryX509RsaCertificate#load. */
class RepositoryX509RsaCertificateLoadMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Reset entity data model. */
class Reset
{
}

/** ResourcesRateCheck entity data model. */
class ResourcesRateCheck
{
    public ?array $resource = null;
}

/** Request payload for ResourcesRateCheck#load. */
class ResourcesRateCheckLoadMatch
{
    public ?array $resource = null;
}

/** Resync entity data model. */
class Resync
{
}

/** Retention entity data model. */
class Retention
{
}

/** Rpm entity data model. */
class Rpm
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public string $distro_version;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?string $gpg_key_inline = null;
    public ?string $gpg_key_url = null;
    public ?string $gpg_verification = null;
    public ?bool $include_source = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?string $verification_status = null;
    public ?bool $verify_ssl = null;
}

/** Request payload for Rpm#load. */
class RpmLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Rpm#list. */
class RpmListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Rpm#create. */
class RpmCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Rpm#update. */
class RpmUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Rsa entity data model. */
class Rsa
{
}

/** Ruby entity data model. */
class Ruby
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Ruby#load. */
class RubyLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Ruby#list. */
class RubyListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Ruby#create. */
class RubyCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Ruby#update. */
class RubyUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** SamlGroupSync entity data model. */
class SamlGroupSync
{
}

/** Scan entity data model. */
class Scan
{
}

/** Self entity data model. */
class Self
{
}

/** Service entity data model. */
class Service
{
    public ?string $created_at = null;
    public ?string $created_by = null;
    public ?string $created_by_url = null;
    public ?string $description = null;
    public ?string $key = null;
    public ?string $key_expires_at = null;
    public string $name;
    public ?string $role = null;
    public ?string $slug = null;
    public ?array $team = null;
}

/** Request payload for Service#load. */
class ServiceLoadMatch
{
    public string $id;
    public string $org_id;
}

/** Request payload for Service#list. */
class ServiceListMatch
{
    public string $org_id;
}

/** Request payload for Service#create. */
class ServiceCreateData
{
    public string $org_id;
}

/** Request payload for Service#update. */
class ServiceUpdateData
{
    public string $id;
    public string $org_id;
}

/** Status entity data model. */
class Status
{
}

/** StatusBasic entity data model. */
class StatusBasic
{
    public ?string $detail = null;
    public ?string $version = null;
}

/** Request payload for StatusBasic#load. */
class StatusBasicLoadMatch
{
    public ?string $detail = null;
    public ?string $version = null;
}

/** StorageRegion entity data model. */
class StorageRegion
{
    public string $label;
    public string $slug;
}

/** Request payload for StorageRegion#load. */
class StorageRegionLoadMatch
{
    public string $id;
}

/** Request payload for StorageRegion#list. */
class StorageRegionListMatch
{
    public ?string $label = null;
    public ?string $slug = null;
}

/** Swift entity data model. */
class Swift
{
    public ?string $auth_mode = null;
    public ?string $auth_secret = null;
    public ?string $auth_username = null;
    public ?string $created_at = null;
    public ?string $disable_reason = null;
    public ?string $extra_header_1 = null;
    public ?string $extra_header_2 = null;
    public ?string $extra_value_1 = null;
    public ?string $extra_value_2 = null;
    public ?bool $is_active = null;
    public ?string $mode = null;
    public string $name;
    public ?bool $pending_validation = null;
    public ?int $priority = null;
    public ?string $slug_perm = null;
    public ?string $updated_at = null;
    public string $upstream_url;
    public ?bool $verify_ssl = null;
}

/** Request payload for Swift#load. */
class SwiftLoadMatch
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Swift#list. */
class SwiftListMatch
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Swift#create. */
class SwiftCreateData
{
    public mixed $identifier;
    public mixed $owner;
}

/** Request payload for Swift#update. */
class SwiftUpdateData
{
    public string $id;
    public mixed $identifier;
    public mixed $owner;
}

/** Sync entity data model. */
class Sync
{
}

/** Tag entity data model. */
class Tag
{
}

/** Team entity data model. */
class Team
{
}

/** Terraform entity data model. */
class Terraform
{
}

/** Test entity data model. */
class Test
{
}

/** Token entity data model. */
class Token
{
}

/** TransferRegion entity data model. */
class TransferRegion
{
}

/** User entity data model. */
class User
{
    public ?string $created = null;
    public ?string $key = null;
    public ?string $slug_perm = null;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?string $created = null;
    public ?string $key = null;
    public ?string $slug_perm = null;
}

/** UserAuthToken entity data model. */
class UserAuthToken
{
}

/** Request payload for UserAuthToken#create. */
class UserAuthTokenCreateData
{
}

/** UserAuthenticationToken entity data model. */
class UserAuthenticationToken
{
    public ?string $created = null;
    public ?string $key = null;
    public ?string $slug_perm = null;
}

/** Request payload for UserAuthenticationToken#create. */
class UserAuthenticationTokenCreateData
{
    public ?string $created = null;
    public ?string $key = null;
    public ?string $slug_perm = null;
}

/** Request payload for UserAuthenticationToken#update. */
class UserAuthenticationTokenUpdateData
{
    public mixed $slug_perm;
}

/** UserBrief entity data model. */
class UserBrief
{
    public ?bool $authenticated = null;
    public ?string $email = null;
    public ?string $name = null;
    public ?string $profile_url = null;
    public ?string $self_url = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
}

/** Request payload for UserBrief#load. */
class UserBriefLoadMatch
{
    public ?bool $authenticated = null;
    public ?string $email = null;
    public ?string $name = null;
    public ?string $profile_url = null;
    public ?string $self_url = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
}

/** UserProfile entity data model. */
class UserProfile
{
    public ?string $company = null;
    public string $first_name;
    public ?string $job_title = null;
    public ?string $joined_at = null;
    public string $last_name;
    public ?string $name = null;
    public ?string $slug = null;
    public ?string $slug_perm = null;
    public ?string $tagline = null;
    public ?string $url = null;
}

/** Request payload for UserProfile#load. */
class UserProfileLoadMatch
{
    public string $id;
}

/** Vagrant entity data model. */
class Vagrant
{
}

/** Validate entity data model. */
class Validate
{
}

/** Version entity data model. */
class Version
{
}

/** Vulnerability entity data model. */
class Vulnerability
{
    public ?string $created_at = null;
    public ?bool $has_vulnerability = null;
    public string $identifier;
    public ?string $max_severity = null;
    public ?int $num_vulnerability = null;
    public array $package;
    public array $result;
    public int $scan_id;
    public string $target;
    public string $type;
}

/** Request payload for Vulnerability#load. */
class VulnerabilityLoadMatch
{
    public string $id;
}

/** Request payload for Vulnerability#list. */
class VulnerabilityListMatch
{
    public mixed $owner;
    public mixed $package = null;
    public mixed $repo;
    public mixed $identifier = null;
}

/** VulnerabilityPolicy entity data model. */
class VulnerabilityPolicy
{
}

/** Webhook entity data model. */
class Webhook
{
}

/** Request payload for Webhook#remove. */
class WebhookRemoveMatch
{
    public mixed $identifier;
    public mixed $owner;
    public mixed $repo;
}

/** X509Ecdsa entity data model. */
class X509Ecdsa
{
}

/** X509Rsa entity data model. */
class X509Rsa
{
}

