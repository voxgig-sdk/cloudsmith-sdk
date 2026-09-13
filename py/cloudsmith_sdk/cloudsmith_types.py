# Typed models for the Cloudsmith SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Abort(TypedDict):
    pass


class Alpine(TypedDict):
    pass


class AuditLog(TypedDict):
    pass


class Basic(TypedDict):
    pass


class CargoRequired(TypedDict):
    name: str
    upstream_url: str


class Cargo(CargoRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class CargoLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class CargoListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class CargoListMatch(CargoListMatchRequired, total=False):
    page: int
    page_size: int


class CargoCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class CargoCreateData(CargoCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class CargoUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class CargoUpdateData(CargoUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class Cocoapod(TypedDict):
    pass


class Complete(TypedDict):
    pass


class ComposerRequired(TypedDict):
    name: str
    upstream_url: str


class Composer(ComposerRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class ComposerLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class ComposerListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class ComposerListMatch(ComposerListMatchRequired, total=False):
    page: int
    page_size: int


class ComposerCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class ComposerCreateData(ComposerCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class ComposerUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class ComposerUpdateData(ComposerUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class Conan(TypedDict):
    pass


class CondaRequired(TypedDict):
    name: str
    upstream_url: str


class Conda(CondaRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class CondaLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class CondaListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class CondaListMatch(CondaListMatchRequired, total=False):
    page: int
    page_size: int


class CondaCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class CondaCreateData(CondaCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class CondaUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class CondaUpdateData(CondaUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class Copy(TypedDict):
    pass


class CranRequired(TypedDict):
    name: str
    upstream_url: str


class Cran(CranRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class CranLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class CranListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class CranListMatch(CranListMatchRequired, total=False):
    page: int
    page_size: int


class CranCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class CranCreateData(CranCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class CranUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class CranUpdateData(CranUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class DartRequired(TypedDict):
    name: str
    upstream_url: str


class Dart(DartRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class DartLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DartListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class DartListMatch(DartListMatchRequired, total=False):
    page: int
    page_size: int


class DartCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class DartCreateData(DartCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class DartUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DartUpdateData(DartUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class DebRequired(TypedDict):
    distro_versions: list
    name: str
    upstream_url: str


class Deb(DebRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    component: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    id: str
    include_sources: bool
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_distribution: str
    verification_status: str
    verify_ssl: bool


class DebLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DebListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class DebListMatch(DebListMatchRequired, total=False):
    page: int
    page_size: int


class DebCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    distro_versions: list
    name: str
    upstream_url: str


class DebCreateData(DebCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    component: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    id: str
    include_sources: bool
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_distribution: str
    verification_status: str
    verify_ssl: bool


class DebUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DebUpdateData(DebUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    component: str
    created_at: str
    disable_reason: str
    distro_versions: list
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    include_sources: bool
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_distribution: str
    upstream_url: str
    verification_status: str
    verify_ssl: bool


class DenyPolicy(TypedDict):
    pass


class Dependency(TypedDict):
    pass


class Disable(TypedDict):
    pass


class DistributionFullRequired(TypedDict):
    name: str


class DistributionFull(DistributionFullRequired, total=False):
    format: str
    format_url: str
    self_url: str
    slug: str
    variants: str
    versions: list


class DistributionFullLoadMatch(TypedDict):
    slug: str


class DistributionFullListMatch(TypedDict, total=False):
    format: str
    format_url: str
    name: str
    self_url: str
    slug: str
    variants: str
    versions: list


class Distro(TypedDict):
    pass


class DockerRequired(TypedDict):
    name: str
    upstream_url: str


class Docker(DockerRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class DockerLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DockerListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class DockerListMatch(DockerListMatchRequired, total=False):
    page: int
    page_size: int


class DockerCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class DockerCreateData(DockerCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class DockerUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class DockerUpdateData(DockerUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class DynamicMappingRequired(TypedDict):
    claim_value: str
    service_account: str


class DynamicMapping(DynamicMappingRequired, total=False):
    id: str


class DynamicMappingLoadMatch(TypedDict):
    id: str
    openid_connect_id: str
    org_id: str


class DynamicMappingListMatchRequired(TypedDict):
    org_id: str
    provider_setting: Any


class DynamicMappingListMatch(DynamicMappingListMatchRequired, total=False):
    page: int
    page_size: int


class Ecdsa(TypedDict):
    pass


class Enable(TypedDict):
    pass


class EntitlementRequired(TypedDict):
    bandwidth: dict
    downloads: dict


class Entitlement(EntitlementRequired, total=False):
    active: int
    id: str
    inactive: int
    total: int


class EntitlementLoadMatchRequired(TypedDict):
    id: str


class EntitlementLoadMatch(EntitlementLoadMatchRequired, total=False):
    finish: Any
    page: int
    page_size: int
    start: Any
    token: str


class EntitlementCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    repo: Any
    bandwidth: dict
    downloads: dict


class EntitlementCreateData(EntitlementCreateDataRequired, total=False):
    show_token: Any
    active: int
    id: str
    inactive: int
    total: int


class EntitlementRemoveMatch(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class Evaluation(TypedDict):
    pass


class File(TypedDict):
    pass


class FileCreateDataRequired(TypedDict):
    owner: Any
    repo: Any


class FileCreateData(FileCreateDataRequired, total=False):
    identifier: Any
    data: dict


class FormatRequired(TypedDict):
    description: str
    extensions: list
    name: str
    premium: bool
    slug: str
    supports: dict


class Format(FormatRequired, total=False):
    distributions: list
    id: str
    premium_plan_id: str
    premium_plan_name: str


class FormatLoadMatch(TypedDict):
    id: str


class FormatListMatch(TypedDict, total=False):
    description: str
    distributions: list
    extensions: list
    id: str
    name: str
    premium: bool
    premium_plan_id: str
    premium_plan_name: str
    slug: str
    supports: dict


class Geoip(TypedDict):
    pass


class GonRequired(TypedDict):
    name: str
    upstream_url: str


class Gon(GonRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class GonLoadMatch(TypedDict):
    identifier: Any
    owner: Any
    slug_perm: Any


class GonListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class GonListMatch(GonListMatchRequired, total=False):
    page: int
    page_size: int


class GonCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class GonCreateData(GonCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class GonUpdateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    slug_perm: Any


class GonUpdateData(GonUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class Gpg(TypedDict):
    pass


class Group(TypedDict):
    pass


class HelmRequired(TypedDict):
    name: str
    upstream_url: str


class Helm(HelmRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class HelmLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HelmListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class HelmListMatch(HelmListMatchRequired, total=False):
    page: int
    page_size: int


class HelmCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class HelmCreateData(HelmCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class HelmUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HelmUpdateData(HelmUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class HexRequired(TypedDict):
    name: str
    upstream_url: str


class Hex(HexRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class HexLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HexListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class HexListMatch(HexListMatchRequired, total=False):
    page: int
    page_size: int


class HexCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class HexCreateData(HexCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class HexUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HexUpdateData(HexUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class History(TypedDict):
    pass


class HuggingfaceRequired(TypedDict):
    name: str
    upstream_url: str


class Huggingface(HuggingfaceRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class HuggingfaceLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HuggingfaceListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class HuggingfaceListMatch(HuggingfaceListMatchRequired, total=False):
    page: int
    page_size: int


class HuggingfaceCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class HuggingfaceCreateData(HuggingfaceCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class HuggingfaceUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class HuggingfaceUpdateData(HuggingfaceUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class Info(TypedDict):
    pass


class Invite(TypedDict):
    pass


class LicensePolicy(TypedDict):
    pass


class Limit(TypedDict):
    pass


class Luarock(TypedDict):
    pass


class MavenRequired(TypedDict):
    name: str
    upstream_url: str


class Maven(MavenRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verification_status: str
    verify_ssl: bool


class MavenLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class MavenListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class MavenListMatch(MavenListMatchRequired, total=False):
    page: int
    page_size: int


class MavenCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class MavenCreateData(MavenCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verification_status: str
    verify_ssl: bool


class MavenUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class MavenUpdateData(MavenUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verification_status: str
    verify_ssl: bool


class Member(TypedDict):
    pass


class Move(TypedDict):
    pass


class Namespace(TypedDict, total=False):
    id: str
    name: str
    slug: str
    slug_perm: str
    type_name: str


class NamespaceLoadMatch(TypedDict):
    id: str


class NamespaceListMatch(TypedDict, total=False):
    page: int
    page_size: int


class NamespaceAuditLogRequired(TypedDict):
    actor: str
    actor_ip_address: str
    actor_location: dict
    actor_slug_perm: str
    context: str
    event: str
    event_at: str
    object: str
    object_kind: str
    object_slug_perm: str
    target: str
    target_kind: str


class NamespaceAuditLog(NamespaceAuditLogRequired, total=False):
    actor_kind: str
    actor_url: str
    id: str
    target_slug_perm: str
    uuid: str


class NamespaceAuditLogLoadMatchRequired(TypedDict):
    id: str


class NamespaceAuditLogLoadMatch(NamespaceAuditLogLoadMatchRequired, total=False):
    page: int
    page_size: int
    query: Any


class NpmRequired(TypedDict):
    name: str
    upstream_url: str


class Npm(NpmRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class NpmLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class NpmListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class NpmListMatch(NpmListMatchRequired, total=False):
    page: int
    page_size: int


class NpmCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class NpmCreateData(NpmCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class NpmUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class NpmUpdateData(NpmUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class NugetRequired(TypedDict):
    name: str
    upstream_url: str


class Nuget(NugetRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class NugetLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class NugetListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class NugetListMatch(NugetListMatchRequired, total=False):
    page: int
    page_size: int


class NugetCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class NugetCreateData(NugetCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class NugetUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class NugetUpdateData(NugetUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class OpenidConnect(TypedDict):
    pass


class OrgRequired(TypedDict):
    name: str
    package: dict
    policy: dict
    reasons: list
    vulnerability_scan_results: dict


class Org(OrgRequired, total=False):
    country: str
    created_at: str
    event_at: str
    id: str
    location: str
    slug: str
    slug_perm: str
    tagline: str


class OrgLoadMatchRequired(TypedDict):
    id: str


class OrgLoadMatch(OrgLoadMatchRequired, total=False):
    member_id: str


class OrgListMatch(TypedDict, total=False):
    page: int
    page_size: int


class OrgCreateDataRequired(TypedDict):
    id: str
    name: str
    package: dict
    policy: dict
    reasons: list
    vulnerability_scan_results: dict


class OrgCreateData(OrgCreateDataRequired, total=False):
    member_id: str
    country: str
    created_at: str
    event_at: str
    location: str
    slug: str
    slug_perm: str
    tagline: str


class OrgUpdateDataRequired(TypedDict):
    id: str
    team_id: str


class OrgUpdateData(OrgUpdateDataRequired, total=False):
    data: dict
    country: str
    created_at: str
    event_at: str
    location: str
    name: str
    package: dict
    policy: dict
    reasons: list
    slug: str
    slug_perm: str
    tagline: str
    vulnerability_scan_results: dict


class OrgRemoveMatchRequired(TypedDict):
    id: str


class OrgRemoveMatch(OrgRemoveMatchRequired, total=False):
    member: Any
    service: Any
    slug_perm: Any
    team: Any


class OrganizationGroupSyncRequired(TypedDict):
    idp_key: str
    idp_value: str
    team: str


class OrganizationGroupSync(OrganizationGroupSyncRequired, total=False):
    role: str
    slug_perm: str


class OrganizationGroupSyncListMatchRequired(TypedDict):
    org_id: str


class OrganizationGroupSyncListMatch(OrganizationGroupSyncListMatchRequired, total=False):
    page: int
    page_size: int


class OrganizationGroupSyncCreateDataRequired(TypedDict):
    org_id: str
    idp_key: str
    idp_value: str
    team: str


class OrganizationGroupSyncCreateData(OrganizationGroupSyncCreateDataRequired, total=False):
    data: dict
    role: str
    slug_perm: str


class OrganizationGroupSyncStatus(TypedDict, total=False):
    saml_group_sync_status: bool


class OrganizationGroupSyncStatusLoadMatch(TypedDict):
    org_id: str


class OrganizationInvite(TypedDict, total=False):
    email: str
    expires_at: str
    id: str
    inviter: str
    inviter_url: str
    org: str
    role: str
    slug_perm: str
    teams: list
    user: str
    user_url: str


class OrganizationInviteListMatchRequired(TypedDict):
    org_id: str


class OrganizationInviteListMatch(OrganizationInviteListMatchRequired, total=False):
    page: int
    page_size: int


class OrganizationInviteCreateDataRequired(TypedDict):
    org_id: str


class OrganizationInviteCreateData(OrganizationInviteCreateDataRequired, total=False):
    data: dict
    email: str
    expires_at: str
    id: str
    inviter: str
    inviter_url: str
    org: str
    role: str
    slug_perm: str
    teams: list
    user: str
    user_url: str


class OrganizationInviteUpdateDataRequired(TypedDict):
    id: str
    org_id: str


class OrganizationInviteUpdateData(OrganizationInviteUpdateDataRequired, total=False):
    data: dict
    email: str
    expires_at: str
    inviter: str
    inviter_url: str
    org: str
    role: str
    slug_perm: str
    teams: list
    user: str
    user_url: str


class OrganizationInviteExtend(TypedDict, total=False):
    email: str
    expires_at: str
    inviter: str
    inviter_url: str
    org: str
    role: str
    slug_perm: str
    teams: list
    user: str
    user_url: str


class OrganizationInviteExtendCreateDataRequired(TypedDict):
    org_id: str
    slug_perm: Any


class OrganizationInviteExtendCreateData(OrganizationInviteExtendCreateDataRequired, total=False):
    email: str
    expires_at: str
    inviter: str
    inviter_url: str
    org: str
    role: str
    teams: list
    user: str
    user_url: str


class OrganizationMembership(TypedDict, total=False):
    email: str
    has_two_factor: bool
    is_active: bool
    joined_at: str
    last_login_at: str
    last_login_method: str
    role: str
    user: str
    user_id: str
    user_name: str
    user_url: str
    visibility: str


class OrganizationMembershipLoadMatch(TypedDict):
    member: Any
    org_id: str


class OrganizationMembershipListMatchRequired(TypedDict):
    org_id: str


class OrganizationMembershipListMatch(OrganizationMembershipListMatchRequired, total=False):
    is_active: bool
    page: int
    page_size: int
    query: Any
    sort: Any


class OrganizationMembershipUpdateDataRequired(TypedDict):
    member: Any
    org_id: str


class OrganizationMembershipUpdateData(OrganizationMembershipUpdateDataRequired, total=False):
    data: dict
    email: str
    has_two_factor: bool
    is_active: bool
    joined_at: str
    last_login_at: str
    last_login_method: str
    role: str
    user: str
    user_id: str
    user_name: str
    user_url: str
    visibility: str


class OrganizationMembershipRoleUpdate(TypedDict, total=False):
    email: str
    has_two_factor: bool
    joined_at: str
    last_login_at: str
    last_login_method: str
    role: str
    user: str
    user_id: str
    user_name: str
    user_url: str
    visibility: str


class OrganizationMembershipRoleUpdateUpdateDataRequired(TypedDict):
    member_id: str
    org_id: str


class OrganizationMembershipRoleUpdateUpdateData(OrganizationMembershipRoleUpdateUpdateDataRequired, total=False):
    data: dict
    email: str
    has_two_factor: bool
    joined_at: str
    last_login_at: str
    last_login_method: str
    role: str
    user: str
    user_id: str
    user_name: str
    user_url: str
    visibility: str


class OrganizationMembershipVisibilityUpdate(TypedDict, total=False):
    email: str
    has_two_factor: bool
    joined_at: str
    last_login_at: str
    last_login_method: str
    role: str
    user: str
    user_id: str
    user_name: str
    user_url: str
    visibility: str


class OrganizationMembershipVisibilityUpdateUpdateDataRequired(TypedDict):
    member_id: str
    org_id: str


class OrganizationMembershipVisibilityUpdateUpdateData(OrganizationMembershipVisibilityUpdateUpdateDataRequired, total=False):
    data: dict
    email: str
    has_two_factor: bool
    joined_at: str
    last_login_at: str
    last_login_method: str
    role: str
    user: str
    user_id: str
    user_name: str
    user_url: str
    visibility: str


class OrganizationPackageLicensePolicyRequired(TypedDict):
    name: str
    spdx_identifiers: list


class OrganizationPackageLicensePolicy(OrganizationPackageLicensePolicyRequired, total=False):
    allow_unknown_licenses: bool
    created_at: str
    description: str
    id: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    updated_at: str


class OrganizationPackageLicensePolicyLoadMatch(TypedDict):
    id: str
    org_id: str


class OrganizationPackageLicensePolicyListMatchRequired(TypedDict):
    org_id: str


class OrganizationPackageLicensePolicyListMatch(OrganizationPackageLicensePolicyListMatchRequired, total=False):
    page: int
    page_size: int


class OrganizationPackageLicensePolicyCreateDataRequired(TypedDict):
    org_id: str
    name: str
    spdx_identifiers: list


class OrganizationPackageLicensePolicyCreateData(OrganizationPackageLicensePolicyCreateDataRequired, total=False):
    data: dict
    allow_unknown_licenses: bool
    created_at: str
    description: str
    id: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    updated_at: str


class OrganizationPackageLicensePolicyUpdateDataRequired(TypedDict):
    id: str
    org_id: str


class OrganizationPackageLicensePolicyUpdateData(OrganizationPackageLicensePolicyUpdateDataRequired, total=False):
    data: dict
    allow_unknown_licenses: bool
    created_at: str
    description: str
    name: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    spdx_identifiers: list
    updated_at: str


class OrganizationPackageVulnerabilityPolicyRequired(TypedDict):
    name: str


class OrganizationPackageVulnerabilityPolicy(OrganizationPackageVulnerabilityPolicyRequired, total=False):
    allow_unknown_severity: bool
    created_at: str
    description: str
    id: str
    min_severity: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    updated_at: str


class OrganizationPackageVulnerabilityPolicyLoadMatch(TypedDict):
    id: str
    org_id: str


class OrganizationPackageVulnerabilityPolicyListMatchRequired(TypedDict):
    org_id: str


class OrganizationPackageVulnerabilityPolicyListMatch(OrganizationPackageVulnerabilityPolicyListMatchRequired, total=False):
    page: int
    page_size: int


class OrganizationPackageVulnerabilityPolicyCreateDataRequired(TypedDict):
    org_id: str
    name: str


class OrganizationPackageVulnerabilityPolicyCreateData(OrganizationPackageVulnerabilityPolicyCreateDataRequired, total=False):
    data: dict
    allow_unknown_severity: bool
    created_at: str
    description: str
    id: str
    min_severity: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    updated_at: str


class OrganizationPackageVulnerabilityPolicyUpdateDataRequired(TypedDict):
    id: str
    org_id: str


class OrganizationPackageVulnerabilityPolicyUpdateData(OrganizationPackageVulnerabilityPolicyUpdateDataRequired, total=False):
    data: dict
    allow_unknown_severity: bool
    created_at: str
    description: str
    min_severity: str
    name: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    updated_at: str


class OrganizationSamlAuthRequired(TypedDict):
    saml_auth_enabled: bool
    saml_auth_enforced: bool


class OrganizationSamlAuth(OrganizationSamlAuthRequired, total=False):
    saml_metadata_inline: str
    saml_metadata_url: str


class OrganizationSamlAuthLoadMatch(TypedDict):
    org_id: str


class OrganizationSamlAuthUpdateDataRequired(TypedDict):
    org_id: str


class OrganizationSamlAuthUpdateData(OrganizationSamlAuthUpdateDataRequired, total=False):
    data: dict
    saml_auth_enabled: bool
    saml_auth_enforced: bool
    saml_metadata_inline: str
    saml_metadata_url: str


class OrganizationTeamRequired(TypedDict):
    name: str


class OrganizationTeam(OrganizationTeamRequired, total=False):
    description: str
    id: str
    slug: str
    slug_perm: str
    visibility: str


class OrganizationTeamLoadMatch(TypedDict):
    id: str
    org_id: str


class OrganizationTeamListMatchRequired(TypedDict):
    org_id: str


class OrganizationTeamListMatch(OrganizationTeamListMatchRequired, total=False):
    for_user: Any
    page: int
    page_size: int
    query: Any
    sort: Any


class OrganizationTeamCreateDataRequired(TypedDict):
    org_id: str
    name: str


class OrganizationTeamCreateData(OrganizationTeamCreateDataRequired, total=False):
    data: dict
    description: str
    id: str
    slug: str
    slug_perm: str
    visibility: str


class OrganizationTeamUpdateDataRequired(TypedDict):
    id: str
    org_id: str


class OrganizationTeamUpdateData(OrganizationTeamUpdateDataRequired, total=False):
    data: dict
    description: str
    name: str
    slug: str
    slug_perm: str
    visibility: str


class OrganizationTeamMember(TypedDict):
    role: str
    user: str


class OrganizationTeamMemberListMatch(TypedDict):
    org_id: str
    team_id: str


class OrganizationTeamMemberCreateDataRequired(TypedDict):
    org_id: str
    team_id: str
    role: str
    user: str


class OrganizationTeamMemberCreateData(OrganizationTeamMemberCreateDataRequired, total=False):
    data: dict


class Oss(TypedDict):
    pass


class P2n(TypedDict):
    pass


class PackageRequired(TypedDict):
    bandwidth: dict
    count: int
    distro: dict
    downloads: dict
    last_push: str
    num_downloads: int


class Package(PackageRequired, total=False):
    active: int
    architectures: list
    backend_kind: int
    cdn_url: str
    checksum_md5: str
    checksum_sha1: str
    checksum_sha256: str
    checksum_sha512: str
    dep_type: str
    dependencies_checksum_md5: str
    dependencies_url: str
    description: str
    display_name: str
    distro_version: dict
    epoch: int
    extension: str
    filename: str
    files: list
    format: str
    format_url: str
    freeable_storage: int
    fully_qualified_name: str
    id: str
    identifier_perm: str
    identifiers: dict
    inactive: int
    indexed: bool
    is_cancellable: bool
    is_copyable: bool
    is_deleteable: bool
    is_downloadable: bool
    is_moveable: bool
    is_quarantinable: bool
    is_quarantined: bool
    is_resyncable: bool
    is_security_scannable: bool
    is_sync_awaiting: bool
    is_sync_completed: bool
    is_sync_failed: bool
    is_sync_in_flight: bool
    is_sync_in_progress: bool
    license: str
    name: str
    namespace: str
    namespace_url: str
    num_files: int
    operator: str
    origin_repository: str
    origin_repository_url: str
    package_type: int
    policy_violated: bool
    release: str
    repository: str
    repository_url: str
    security_scan_completed_at: str
    security_scan_started_at: str
    security_scan_status: str
    security_scan_status_updated_at: str
    self_html_url: str
    self_url: str
    signature_url: str
    size: int
    slug: str
    slug_perm: str
    stage: int
    stage_str: str
    stage_updated_at: str
    status: int
    status_reason: str
    status_str: str
    status_updated_at: str
    status_url: str
    subtype: str
    summary: str
    sync_finished_at: str
    sync_progress: int
    tags: dict
    tags_immutable: dict
    total: int
    type_display: str
    uploaded_at: str
    uploader: str
    uploader_url: str
    version: str
    version_orig: str
    vulnerability_scan_results_url: str


class PackageLoadMatchRequired(TypedDict):
    owner: Any
    repo: Any


class PackageLoadMatch(PackageLoadMatchRequired, total=False):
    finish: Any
    package: Any
    page: int
    page_size: int
    start: Any
    identifier: Any


class PackageListMatchRequired(TypedDict):
    owner: Any
    repo: Any


class PackageListMatch(PackageListMatchRequired, total=False):
    group_by: Any
    page: int
    page_size: int
    query: Any
    sort: Any
    identifier: Any


class PackageCreateDataRequired(TypedDict):
    owner: Any
    repo: Any
    bandwidth: dict
    count: int
    distro: dict
    downloads: dict
    last_push: str
    num_downloads: int


class PackageCreateData(PackageCreateDataRequired, total=False):
    identifier: Any
    data: dict
    active: int
    architectures: list
    backend_kind: int
    cdn_url: str
    checksum_md5: str
    checksum_sha1: str
    checksum_sha256: str
    checksum_sha512: str
    dep_type: str
    dependencies_checksum_md5: str
    dependencies_url: str
    description: str
    display_name: str
    distro_version: dict
    epoch: int
    extension: str
    filename: str
    files: list
    format: str
    format_url: str
    freeable_storage: int
    fully_qualified_name: str
    id: str
    identifier_perm: str
    identifiers: dict
    inactive: int
    indexed: bool
    is_cancellable: bool
    is_copyable: bool
    is_deleteable: bool
    is_downloadable: bool
    is_moveable: bool
    is_quarantinable: bool
    is_quarantined: bool
    is_resyncable: bool
    is_security_scannable: bool
    is_sync_awaiting: bool
    is_sync_completed: bool
    is_sync_failed: bool
    is_sync_in_flight: bool
    is_sync_in_progress: bool
    license: str
    name: str
    namespace: str
    namespace_url: str
    num_files: int
    operator: str
    origin_repository: str
    origin_repository_url: str
    package_type: int
    policy_violated: bool
    release: str
    repository: str
    repository_url: str
    security_scan_completed_at: str
    security_scan_started_at: str
    security_scan_status: str
    security_scan_status_updated_at: str
    self_html_url: str
    self_url: str
    signature_url: str
    size: int
    slug: str
    slug_perm: str
    stage: int
    stage_str: str
    stage_updated_at: str
    status: int
    status_reason: str
    status_str: str
    status_updated_at: str
    status_url: str
    subtype: str
    summary: str
    sync_finished_at: str
    sync_progress: int
    tags: dict
    tags_immutable: dict
    total: int
    type_display: str
    uploaded_at: str
    uploader: str
    uploader_url: str
    version: str
    version_orig: str
    vulnerability_scan_results_url: str


class PackageRemoveMatch(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class PackageDenyPolicyRequired(TypedDict):
    package_query_string: str


class PackageDenyPolicy(PackageDenyPolicyRequired, total=False):
    action: str
    created_at: str
    description: str
    enabled: bool
    id: str
    name: str
    slug_perm: str
    status: str
    updated_at: str


class PackageDenyPolicyLoadMatch(TypedDict):
    id: str
    org_id: str


class PackageDenyPolicyListMatchRequired(TypedDict):
    org_id: str


class PackageDenyPolicyListMatch(PackageDenyPolicyListMatchRequired, total=False):
    page: int
    page_size: int


class PackageDenyPolicyCreateDataRequired(TypedDict):
    org_id: str
    package_query_string: str


class PackageDenyPolicyCreateData(PackageDenyPolicyCreateDataRequired, total=False):
    data: dict
    action: str
    created_at: str
    description: str
    enabled: bool
    id: str
    name: str
    slug_perm: str
    status: str
    updated_at: str


class PackageDenyPolicyUpdateDataRequired(TypedDict):
    id: str
    org_id: str


class PackageDenyPolicyUpdateData(PackageDenyPolicyUpdateDataRequired, total=False):
    data: dict
    action: str
    created_at: str
    description: str
    enabled: bool
    name: str
    package_query_string: str
    slug_perm: str
    status: str
    updated_at: str


class PackageFilePartsUpload(TypedDict, total=False):
    identifier: str
    upload_querystring: str
    upload_url: str


class PackageFilePartsUploadLoadMatchRequired(TypedDict):
    identifier: Any
    owner: Any
    repo: Any
    filename: Any


class PackageFilePartsUploadLoadMatch(PackageFilePartsUploadLoadMatchRequired, total=False):
    part_number: int


class PackageFileUpload(TypedDict):
    pass


class PackageFileUploadCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class PackageFileUploadCreateData(PackageFileUploadCreateDataRequired, total=False):
    data: dict


class PackageLicensePolicyEvaluationRequired(TypedDict):
    policy: dict
    spdx_identifiers: list


class PackageLicensePolicyEvaluation(PackageLicensePolicyEvaluationRequired, total=False):
    allow_unknown_licenses: bool
    created_at: str
    description: str
    evaluation_count: int
    id: str
    name: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    status: str
    updated_at: str
    url: str
    violation_count: int


class PackageLicensePolicyEvaluationLoadMatch(TypedDict):
    id: str
    license_policy_id: str
    org_id: str


class PackageLicensePolicyEvaluationListMatchRequired(TypedDict):
    org_id: str
    policy_slug_perm: Any


class PackageLicensePolicyEvaluationListMatch(PackageLicensePolicyEvaluationListMatchRequired, total=False):
    page: int
    page_size: int


class PackageLicensePolicyEvaluationCreateDataRequired(TypedDict):
    org_id: str
    policy_slug_perm: Any
    policy: dict
    spdx_identifiers: list


class PackageLicensePolicyEvaluationCreateData(PackageLicensePolicyEvaluationCreateDataRequired, total=False):
    data: dict
    allow_unknown_licenses: bool
    created_at: str
    description: str
    evaluation_count: int
    id: str
    name: str
    on_violation_quarantine: bool
    package_query_string: str
    slug_perm: str
    status: str
    updated_at: str
    url: str
    violation_count: int


class PackageVersionBadge(TypedDict, total=False):
    id: str


class PackageVersionBadgeLoadMatchRequired(TypedDict):
    owner: Any
    package_format: Any
    package_identifier: Any
    package_name: Any
    package_version: Any
    repo: Any


class PackageVersionBadgeLoadMatch(PackageVersionBadgeLoadMatchRequired, total=False):
    badge_token: Any
    cache_second: Any
    color: Any
    label: str
    label_color: Any
    logo_color: Any
    logo_width: Any
    render: Any
    shield: Any
    show_latest: Any
    style: Any


class PackageVulnerabilityPolicyEvaluation(TypedDict, total=False):
    allow_unknown_severity: bool
    created_at: str
    description: str
    evaluation_count: int
    id: str
    min_severity: str
    name: str
    on_violation_quarantine: bool
    package_query_string: str
    policy: dict
    slug_perm: str
    status: str
    updated_at: str
    url: str
    violation_count: int


class PackageVulnerabilityPolicyEvaluationLoadMatch(TypedDict):
    id: str
    org_id: str
    vulnerability_policy_id: str


class PackageVulnerabilityPolicyEvaluationListMatchRequired(TypedDict):
    org_id: str
    policy_slug_perm: Any


class PackageVulnerabilityPolicyEvaluationListMatch(PackageVulnerabilityPolicyEvaluationListMatchRequired, total=False):
    page: int
    page_size: int


class PackageVulnerabilityPolicyEvaluationCreateDataRequired(TypedDict):
    org_id: str
    policy_slug_perm: Any


class PackageVulnerabilityPolicyEvaluationCreateData(PackageVulnerabilityPolicyEvaluationCreateDataRequired, total=False):
    data: dict
    allow_unknown_severity: bool
    created_at: str
    description: str
    evaluation_count: int
    id: str
    min_severity: str
    name: str
    on_violation_quarantine: bool
    package_query_string: str
    policy: dict
    slug_perm: str
    status: str
    updated_at: str
    url: str
    violation_count: int


class Privilege(TypedDict):
    pass


class Profile(TypedDict):
    pass


class ProviderSettingRequired(TypedDict):
    claims: dict
    enabled: bool
    name: str
    provider_url: str


class ProviderSetting(ProviderSettingRequired, total=False):
    mapping_claim: str
    service_accounts: list
    slug: str
    slug_perm: str


class ProviderSettingLoadMatch(TypedDict):
    org_id: str
    slug_perm: Any


class ProviderSettingListMatchRequired(TypedDict):
    org_id: str


class ProviderSettingListMatch(ProviderSettingListMatchRequired, total=False):
    page: int
    page_size: int
    query: Any
    sort: Any


class ProviderSettingsWriteRequired(TypedDict):
    claims: dict
    enabled: bool
    name: str
    provider_url: str


class ProviderSettingsWrite(ProviderSettingsWriteRequired, total=False):
    dynamic_mappings: list
    mapping_claim: str
    service_accounts: list
    slug: str
    slug_perm: str


class ProviderSettingsWriteCreateDataRequired(TypedDict):
    org_id: str
    claims: dict
    enabled: bool
    name: str
    provider_url: str


class ProviderSettingsWriteCreateData(ProviderSettingsWriteCreateDataRequired, total=False):
    data: dict
    dynamic_mappings: list
    mapping_claim: str
    service_accounts: list
    slug: str
    slug_perm: str


class ProviderSettingsWriteUpdateDataRequired(TypedDict):
    org_id: str
    slug_perm: Any


class ProviderSettingsWriteUpdateData(ProviderSettingsWriteUpdateDataRequired, total=False):
    data: dict
    claims: dict
    dynamic_mappings: list
    enabled: bool
    mapping_claim: str
    name: str
    provider_url: str
    service_accounts: list
    slug: str


class PythonRequired(TypedDict):
    name: str
    upstream_url: str


class Python(PythonRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class PythonLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class PythonListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class PythonListMatch(PythonListMatchRequired, total=False):
    page: int
    page_size: int


class PythonCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class PythonCreateData(PythonCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class PythonUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class PythonUpdateData(PythonUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class Quarantine(TypedDict):
    pass


class QuotaRequired(TypedDict):
    display: dict
    history: list
    raw: dict


class Quota(QuotaRequired, total=False):
    id: str


class QuotaLoadMatch(TypedDict):
    id: str


class Raw(TypedDict):
    pass


class Refresh(TypedDict):
    pass


class Regenerate(TypedDict):
    pass


class RepoRequired(TypedDict):
    name: str


class Repo(RepoRequired, total=False):
    cdn_url: str
    content_kind: str
    contextual_auth_realm: bool
    copy_own: bool
    copy_packages: str
    cosign_signing_enabled: bool
    created_at: str
    default_privilege: str
    delete_own: bool
    delete_packages: str
    deleted_at: str
    description: str
    distributes: list
    docker_refresh_tokens_enabled: bool
    ecdsa_keys: list
    enforce_eula: bool
    gpg_keys: list
    id: str
    index_files: bool
    is_open_source: bool
    is_private: bool
    is_public: bool
    manage_entitlements_privilege: str
    move_own: bool
    move_packages: str
    namespace: str
    namespace_url: str
    nuget_native_signing_enabled: bool
    num_downloads: int
    num_policy_violated_packages: int
    num_quarantined_packages: int
    open_source_license: str
    open_source_project_url: str
    package_count: int
    package_group_count: int
    proxy_npmjs: bool
    proxy_pypi: bool
    raw_package_index_enabled: bool
    raw_package_index_signatures_enabled: bool
    replace_packages: str
    replace_packages_by_default: bool
    repository_type: int
    repository_type_str: str
    resync_own: bool
    resync_packages: str
    scan_own: bool
    scan_packages: str
    self_html_url: str
    self_url: str
    show_setup_all: bool
    size: int
    size_str: str
    slug: str
    slug_perm: str
    storage_region: str
    strict_npm_validation: bool
    tag_pre_releases_as_latest: bool
    use_debian_labels: bool
    use_default_cargo_upstream: bool
    use_entitlements_privilege: str
    use_noarch_packages: bool
    use_source_packages: bool
    use_vulnerability_scanning: bool
    user_entitlements_enabled: bool
    view_statistics: str


class RepoLoadMatchRequired(TypedDict):
    id: str


class RepoLoadMatch(RepoLoadMatchRequired, total=False):
    page: int
    page_size: int


class RepoListMatch(TypedDict, total=False):
    page: int
    page_size: int


class RepoCreateDataRequired(TypedDict):
    id: str
    name: str


class RepoCreateData(RepoCreateDataRequired, total=False):
    data: dict
    cdn_url: str
    content_kind: str
    contextual_auth_realm: bool
    copy_own: bool
    copy_packages: str
    cosign_signing_enabled: bool
    created_at: str
    default_privilege: str
    delete_own: bool
    delete_packages: str
    deleted_at: str
    description: str
    distributes: list
    docker_refresh_tokens_enabled: bool
    ecdsa_keys: list
    enforce_eula: bool
    gpg_keys: list
    index_files: bool
    is_open_source: bool
    is_private: bool
    is_public: bool
    manage_entitlements_privilege: str
    move_own: bool
    move_packages: str
    namespace: str
    namespace_url: str
    nuget_native_signing_enabled: bool
    num_downloads: int
    num_policy_violated_packages: int
    num_quarantined_packages: int
    open_source_license: str
    open_source_project_url: str
    package_count: int
    package_group_count: int
    proxy_npmjs: bool
    proxy_pypi: bool
    raw_package_index_enabled: bool
    raw_package_index_signatures_enabled: bool
    replace_packages: str
    replace_packages_by_default: bool
    repository_type: int
    repository_type_str: str
    resync_own: bool
    resync_packages: str
    scan_own: bool
    scan_packages: str
    self_html_url: str
    self_url: str
    show_setup_all: bool
    size: int
    size_str: str
    slug: str
    slug_perm: str
    storage_region: str
    strict_npm_validation: bool
    tag_pre_releases_as_latest: bool
    use_debian_labels: bool
    use_default_cargo_upstream: bool
    use_entitlements_privilege: str
    use_noarch_packages: bool
    use_source_packages: bool
    use_vulnerability_scanning: bool
    user_entitlements_enabled: bool
    view_statistics: str


class RepoUpdateDataRequired(TypedDict):
    identifier: Any
    owner: Any


class RepoUpdateData(RepoUpdateDataRequired, total=False):
    data: dict
    cdn_url: str
    content_kind: str
    contextual_auth_realm: bool
    copy_own: bool
    copy_packages: str
    cosign_signing_enabled: bool
    created_at: str
    default_privilege: str
    delete_own: bool
    delete_packages: str
    deleted_at: str
    description: str
    distributes: list
    docker_refresh_tokens_enabled: bool
    ecdsa_keys: list
    enforce_eula: bool
    gpg_keys: list
    id: str
    index_files: bool
    is_open_source: bool
    is_private: bool
    is_public: bool
    manage_entitlements_privilege: str
    move_own: bool
    move_packages: str
    name: str
    namespace: str
    namespace_url: str
    nuget_native_signing_enabled: bool
    num_downloads: int
    num_policy_violated_packages: int
    num_quarantined_packages: int
    open_source_license: str
    open_source_project_url: str
    package_count: int
    package_group_count: int
    proxy_npmjs: bool
    proxy_pypi: bool
    raw_package_index_enabled: bool
    raw_package_index_signatures_enabled: bool
    replace_packages: str
    replace_packages_by_default: bool
    repository_type: int
    repository_type_str: str
    resync_own: bool
    resync_packages: str
    scan_own: bool
    scan_packages: str
    self_html_url: str
    self_url: str
    show_setup_all: bool
    size: int
    size_str: str
    slug: str
    slug_perm: str
    storage_region: str
    strict_npm_validation: bool
    tag_pre_releases_as_latest: bool
    use_debian_labels: bool
    use_default_cargo_upstream: bool
    use_entitlements_privilege: str
    use_noarch_packages: bool
    use_source_packages: bool
    use_vulnerability_scanning: bool
    user_entitlements_enabled: bool
    view_statistics: str


class RepoRemoveMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class RepoRemoveMatch(RepoRemoveMatchRequired, total=False):
    slug_perm: Any


class RepositoryAuditLogRequired(TypedDict):
    actor: str
    actor_ip_address: str
    actor_location: dict
    actor_slug_perm: str
    context: str
    event: str
    event_at: str
    object: str
    object_kind: str
    object_slug_perm: str


class RepositoryAuditLog(RepositoryAuditLogRequired, total=False):
    actor_kind: str
    actor_url: str
    uuid: str


class RepositoryAuditLogListMatchRequired(TypedDict):
    owner: Any
    repo: Any


class RepositoryAuditLogListMatch(RepositoryAuditLogListMatchRequired, total=False):
    page: int
    page_size: int
    query: Any


class RepositoryEcdsaKey(TypedDict, total=False):
    active: bool
    created_at: str
    default: bool
    fingerprint: str
    fingerprint_short: str
    public_key: str
    ssh_fingerprint: str


class RepositoryEcdsaKeyLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryEcdsaKeyCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any


class RepositoryEcdsaKeyCreateData(RepositoryEcdsaKeyCreateDataRequired, total=False):
    data: dict
    active: bool
    created_at: str
    default: bool
    fingerprint: str
    fingerprint_short: str
    public_key: str
    ssh_fingerprint: str


class RepositoryGeoIpRule(TypedDict):
    cidr: dict
    country_code: dict


class RepositoryGeoIpRuleLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGeoIpRuleUpdateDataRequired(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGeoIpRuleUpdateData(RepositoryGeoIpRuleUpdateDataRequired, total=False):
    data: dict
    cidr: dict
    country_code: dict


class RepositoryGeoIpStatus(TypedDict, total=False):
    geoip_enabled: bool


class RepositoryGeoIpStatusLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGeoIpTestAddress(TypedDict):
    pass


class RepositoryGeoIpTestAddressCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGeoIpTestAddressCreateData(RepositoryGeoIpTestAddressCreateDataRequired, total=False):
    data: dict


class RepositoryGpgKeyRequired(TypedDict):
    comment: str


class RepositoryGpgKey(RepositoryGpgKeyRequired, total=False):
    active: bool
    created_at: str
    default: bool
    fingerprint: str
    fingerprint_short: str
    public_key: str


class RepositoryGpgKeyLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryGpgKeyCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    comment: str


class RepositoryGpgKeyCreateData(RepositoryGpgKeyCreateDataRequired, total=False):
    data: dict
    active: bool
    created_at: str
    default: bool
    fingerprint: str
    fingerprint_short: str
    public_key: str


class RepositoryPrivilegeInputRequired(TypedDict):
    privilege: str


class RepositoryPrivilegeInput(RepositoryPrivilegeInputRequired, total=False):
    service: str
    team: str
    user: str


class RepositoryPrivilegeInputListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class RepositoryPrivilegeInputListMatch(RepositoryPrivilegeInputListMatchRequired, total=False):
    page: int
    page_size: int


class RepositoryRetentionRule(TypedDict, total=False):
    retention_count_limit: int
    retention_days_limit: int
    retention_enabled: bool
    retention_group_by_format: bool
    retention_group_by_name: bool
    retention_group_by_package_type: bool
    retention_package_query_string: str
    retention_size_limit: int


class RepositoryRetentionRuleLoadMatch(TypedDict):
    owner: Any
    repo: Any


class RepositoryRetentionRuleUpdateDataRequired(TypedDict):
    owner: Any
    repo: Any


class RepositoryRetentionRuleUpdateData(RepositoryRetentionRuleUpdateDataRequired, total=False):
    data: dict
    retention_count_limit: int
    retention_days_limit: int
    retention_enabled: bool
    retention_group_by_format: bool
    retention_group_by_name: bool
    retention_group_by_package_type: bool
    retention_package_query_string: str
    retention_size_limit: int


class RepositoryRsaKey(TypedDict, total=False):
    active: bool
    created_at: str
    default: bool
    fingerprint: str
    fingerprint_short: str
    public_key: str
    ssh_fingerprint: str


class RepositoryRsaKeyLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryRsaKeyCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any


class RepositoryRsaKeyCreateData(RepositoryRsaKeyCreateDataRequired, total=False):
    data: dict
    active: bool
    created_at: str
    default: bool
    fingerprint: str
    fingerprint_short: str
    public_key: str
    ssh_fingerprint: str


class RepositoryTokenRequired(TypedDict):
    name: str


class RepositoryToken(RepositoryTokenRequired, total=False):
    clients: int
    created_at: str
    created_by: str
    created_by_url: str
    default: bool
    disable_url: str
    downloads: int
    enable_url: str
    eula_accepted: dict
    eula_accepted_at: str
    eula_accepted_from: str
    eula_required: bool
    has_limits: bool
    id: str
    identifier: int
    is_active: bool
    is_limited: bool
    limit_bandwidth: int
    limit_bandwidth_unit: str
    limit_date_range_from: str
    limit_date_range_to: str
    limit_num_clients: int
    limit_num_downloads: int
    limit_package_query: str
    limit_path_query: str
    metadata: dict
    refresh_url: str
    reset_url: str
    scheduled_reset_at: str
    scheduled_reset_period: str
    self_url: str
    slug_perm: str
    token: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    usage: str
    user: str
    user_url: str


class RepositoryTokenLoadMatchRequired(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class RepositoryTokenLoadMatch(RepositoryTokenLoadMatchRequired, total=False):
    fuzzy: Any
    show_token: Any


class RepositoryTokenListMatchRequired(TypedDict):
    owner: Any
    repo: Any


class RepositoryTokenListMatch(RepositoryTokenListMatchRequired, total=False):
    active: bool
    page: int
    page_size: int
    query: Any
    show_token: Any
    sort: Any


class RepositoryTokenCreateDataRequired(TypedDict):
    owner: Any
    repo: Any
    name: str


class RepositoryTokenCreateData(RepositoryTokenCreateDataRequired, total=False):
    data: dict
    show_token: Any
    clients: int
    created_at: str
    created_by: str
    created_by_url: str
    default: bool
    disable_url: str
    downloads: int
    enable_url: str
    eula_accepted: dict
    eula_accepted_at: str
    eula_accepted_from: str
    eula_required: bool
    has_limits: bool
    id: str
    identifier: int
    is_active: bool
    is_limited: bool
    limit_bandwidth: int
    limit_bandwidth_unit: str
    limit_date_range_from: str
    limit_date_range_to: str
    limit_num_clients: int
    limit_num_downloads: int
    limit_package_query: str
    limit_path_query: str
    metadata: dict
    refresh_url: str
    reset_url: str
    scheduled_reset_at: str
    scheduled_reset_period: str
    self_url: str
    slug_perm: str
    token: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    usage: str
    user: str
    user_url: str


class RepositoryTokenUpdateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class RepositoryTokenUpdateData(RepositoryTokenUpdateDataRequired, total=False):
    data: dict
    show_token: Any
    clients: int
    created_at: str
    created_by: str
    created_by_url: str
    default: bool
    disable_url: str
    downloads: int
    enable_url: str
    eula_accepted: dict
    eula_accepted_at: str
    eula_accepted_from: str
    eula_required: bool
    has_limits: bool
    id: str
    is_active: bool
    is_limited: bool
    limit_bandwidth: int
    limit_bandwidth_unit: str
    limit_date_range_from: str
    limit_date_range_to: str
    limit_num_clients: int
    limit_num_downloads: int
    limit_package_query: str
    limit_path_query: str
    metadata: dict
    name: str
    refresh_url: str
    reset_url: str
    scheduled_reset_at: str
    scheduled_reset_period: str
    self_url: str
    slug_perm: str
    token: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    usage: str
    user: str
    user_url: str


class RepositoryTokenRefresh(TypedDict, total=False):
    clients: int
    created_at: str
    created_by: str
    created_by_url: str
    default: bool
    disable_url: str
    downloads: int
    enable_url: str
    eula_accepted: dict
    eula_accepted_at: str
    eula_accepted_from: str
    eula_required: bool
    has_limits: bool
    identifier: int
    is_active: bool
    is_limited: bool
    limit_bandwidth: int
    limit_bandwidth_unit: str
    limit_date_range_from: str
    limit_date_range_to: str
    limit_num_clients: int
    limit_num_downloads: int
    limit_package_query: str
    limit_path_query: str
    metadata: dict
    name: str
    refresh_url: str
    reset_url: str
    scheduled_reset_at: str
    scheduled_reset_period: str
    self_url: str
    slug_perm: str
    token: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    usage: str
    user: str
    user_url: str


class RepositoryTokenRefreshCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class RepositoryTokenRefreshCreateData(RepositoryTokenRefreshCreateDataRequired, total=False):
    data: dict
    show_token: Any
    clients: int
    created_at: str
    created_by: str
    created_by_url: str
    default: bool
    disable_url: str
    downloads: int
    enable_url: str
    eula_accepted: dict
    eula_accepted_at: str
    eula_accepted_from: str
    eula_required: bool
    has_limits: bool
    is_active: bool
    is_limited: bool
    limit_bandwidth: int
    limit_bandwidth_unit: str
    limit_date_range_from: str
    limit_date_range_to: str
    limit_num_clients: int
    limit_num_downloads: int
    limit_package_query: str
    limit_path_query: str
    metadata: dict
    name: str
    refresh_url: str
    reset_url: str
    scheduled_reset_at: str
    scheduled_reset_period: str
    self_url: str
    slug_perm: str
    token: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    usage: str
    user: str
    user_url: str


class RepositoryTokenSync(TypedDict, total=False):
    tokens: list


class RepositoryTokenSyncCreateDataRequired(TypedDict):
    owner: Any
    repo: Any


class RepositoryTokenSyncCreateData(RepositoryTokenSyncCreateDataRequired, total=False):
    data: dict
    show_token: Any
    tokens: list


class RepositoryWebhookRequired(TypedDict):
    events: list
    target_url: str
    templates: list


class RepositoryWebhook(RepositoryWebhookRequired, total=False):
    created_at: str
    created_by: str
    created_by_url: str
    disable_reason: int
    disable_reason_str: str
    id: str
    identifier: int
    is_active: bool
    is_last_response_bad: bool
    last_response_status: int
    last_response_status_str: str
    num_sent: int
    package_query: str
    request_body_format: int
    request_body_format_str: str
    request_body_template_format: int
    request_body_template_format_str: str
    request_content_type: str
    secret_header: str
    self_url: str
    slug_perm: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    verify_ssl: bool


class RepositoryWebhookLoadMatch(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class RepositoryWebhookListMatchRequired(TypedDict):
    owner: Any
    repo: Any


class RepositoryWebhookListMatch(RepositoryWebhookListMatchRequired, total=False):
    page: int
    page_size: int


class RepositoryWebhookCreateDataRequired(TypedDict):
    owner: Any
    repo: Any
    events: list
    target_url: str
    templates: list


class RepositoryWebhookCreateData(RepositoryWebhookCreateDataRequired, total=False):
    data: dict
    created_at: str
    created_by: str
    created_by_url: str
    disable_reason: int
    disable_reason_str: str
    id: str
    identifier: int
    is_active: bool
    is_last_response_bad: bool
    last_response_status: int
    last_response_status_str: str
    num_sent: int
    package_query: str
    request_body_format: int
    request_body_format_str: str
    request_body_template_format: int
    request_body_template_format_str: str
    request_content_type: str
    secret_header: str
    self_url: str
    slug_perm: str
    updated_at: str
    updated_by: str
    updated_by_url: str
    verify_ssl: bool


class RepositoryWebhookUpdateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class RepositoryWebhookUpdateData(RepositoryWebhookUpdateDataRequired, total=False):
    data: dict
    created_at: str
    created_by: str
    created_by_url: str
    disable_reason: int
    disable_reason_str: str
    events: list
    id: str
    is_active: bool
    is_last_response_bad: bool
    last_response_status: int
    last_response_status_str: str
    num_sent: int
    package_query: str
    request_body_format: int
    request_body_format_str: str
    request_body_template_format: int
    request_body_template_format_str: str
    request_content_type: str
    secret_header: str
    self_url: str
    slug_perm: str
    target_url: str
    templates: list
    updated_at: str
    updated_by: str
    updated_by_url: str
    verify_ssl: bool


class RepositoryX509EcdsaCertificate(TypedDict, total=False):
    active: bool
    certificate: str
    certificate_chain: str
    certificate_chain_fingerprint: str
    certificate_chain_fingerprint_short: str
    certificate_fingerprint: str
    certificate_fingerprint_short: str
    created_at: str
    default: bool
    issuing_status: str


class RepositoryX509EcdsaCertificateLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class RepositoryX509RsaCertificate(TypedDict, total=False):
    active: bool
    certificate: str
    certificate_chain: str
    certificate_chain_fingerprint: str
    certificate_chain_fingerprint_short: str
    certificate_fingerprint: str
    certificate_fingerprint_short: str
    created_at: str
    default: bool
    issuing_status: str


class RepositoryX509RsaCertificateLoadMatch(TypedDict):
    identifier: Any
    owner: Any


class Reset(TypedDict):
    pass


class ResourcesRateCheck(TypedDict, total=False):
    interval: float
    limit: int
    remaining: int
    reset: int
    reset_iso_8601: str
    throttled: bool


class ResourcesRateCheckLoadMatch(TypedDict, total=False):
    interval: float
    limit: int
    remaining: int
    reset: int
    reset_iso_8601: str
    throttled: bool


class Resync(TypedDict):
    pass


class Retention(TypedDict):
    pass


class RpmRequired(TypedDict):
    distro_version: str
    name: str
    upstream_url: str


class Rpm(RpmRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    id: str
    include_sources: bool
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verification_status: str
    verify_ssl: bool


class RpmLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class RpmListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class RpmListMatch(RpmListMatchRequired, total=False):
    page: int
    page_size: int


class RpmCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    distro_version: str
    name: str
    upstream_url: str


class RpmCreateData(RpmCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    id: str
    include_sources: bool
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verification_status: str
    verify_ssl: bool


class RpmUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class RpmUpdateData(RpmUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    distro_version: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    gpg_key_inline: str
    gpg_key_url: str
    gpg_verification: str
    include_sources: bool
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verification_status: str
    verify_ssl: bool


class Rsa(TypedDict):
    pass


class RubyRequired(TypedDict):
    name: str
    upstream_url: str


class Ruby(RubyRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class RubyLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class RubyListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class RubyListMatch(RubyListMatchRequired, total=False):
    page: int
    page_size: int


class RubyCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class RubyCreateData(RubyCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class RubyUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class RubyUpdateData(RubyUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class SamlGroupSync(TypedDict):
    pass


class Scan(TypedDict):
    pass


class Self(TypedDict):
    pass


class ServiceRequired(TypedDict):
    name: str


class Service(ServiceRequired, total=False):
    created_at: str
    created_by: str
    created_by_url: str
    description: str
    id: str
    key: str
    key_expires_at: str
    role: str
    slug: str
    teams: list


class ServiceLoadMatch(TypedDict):
    id: str
    org_id: str


class ServiceListMatchRequired(TypedDict):
    org_id: str


class ServiceListMatch(ServiceListMatchRequired, total=False):
    page: int
    page_size: int
    query: Any
    sort: Any


class ServiceCreateDataRequired(TypedDict):
    org_id: str
    name: str


class ServiceCreateData(ServiceCreateDataRequired, total=False):
    data: dict
    created_at: str
    created_by: str
    created_by_url: str
    description: str
    id: str
    key: str
    key_expires_at: str
    role: str
    slug: str
    teams: list


class ServiceUpdateDataRequired(TypedDict):
    id: str
    org_id: str


class ServiceUpdateData(ServiceUpdateDataRequired, total=False):
    data: dict
    created_at: str
    created_by: str
    created_by_url: str
    description: str
    key: str
    key_expires_at: str
    name: str
    role: str
    slug: str
    teams: list


class Status(TypedDict):
    pass


class StatusBasic(TypedDict, total=False):
    detail: str
    version: str


class StatusBasicLoadMatch(TypedDict, total=False):
    detail: str
    version: str


class StorageRegionRequired(TypedDict):
    label: str
    slug: str


class StorageRegion(StorageRegionRequired, total=False):
    id: str


class StorageRegionLoadMatch(TypedDict):
    id: str


class StorageRegionListMatch(TypedDict, total=False):
    id: str
    label: str
    slug: str


class SwiftRequired(TypedDict):
    name: str
    upstream_url: str


class Swift(SwiftRequired, total=False):
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class SwiftLoadMatch(TypedDict):
    id: str
    identifier: Any
    owner: Any


class SwiftListMatchRequired(TypedDict):
    identifier: Any
    owner: Any


class SwiftListMatch(SwiftListMatchRequired, total=False):
    page: int
    page_size: int


class SwiftCreateDataRequired(TypedDict):
    identifier: Any
    owner: Any
    name: str
    upstream_url: str


class SwiftCreateData(SwiftCreateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    id: str
    is_active: bool
    mode: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    verify_ssl: bool


class SwiftUpdateDataRequired(TypedDict):
    id: str
    identifier: Any
    owner: Any


class SwiftUpdateData(SwiftUpdateDataRequired, total=False):
    data: dict
    auth_mode: str
    auth_secret: str
    auth_username: str
    created_at: str
    disable_reason: str
    extra_header_1: str
    extra_header_2: str
    extra_value_1: str
    extra_value_2: str
    is_active: bool
    mode: str
    name: str
    pending_validation: bool
    priority: int
    slug_perm: str
    updated_at: str
    upstream_url: str
    verify_ssl: bool


class Sync(TypedDict):
    pass


class Tag(TypedDict):
    pass


class Team(TypedDict):
    pass


class Terraform(TypedDict):
    pass


class Test(TypedDict):
    pass


class Token(TypedDict):
    pass


class TransferRegion(TypedDict):
    pass


class User(TypedDict, total=False):
    created: str
    key: str
    slug_perm: str


class UserListMatch(TypedDict, total=False):
    page: int
    page_size: int


class UserAuthToken(TypedDict):
    pass


class UserAuthTokenCreateData(TypedDict, total=False):
    data: dict


class UserAuthenticationToken(TypedDict, total=False):
    created: str
    key: str
    slug_perm: str


class UserAuthenticationTokenCreateData(TypedDict, total=False):
    created: str
    key: str
    slug_perm: str


class UserAuthenticationTokenUpdateDataRequired(TypedDict):
    slug_perm: Any


class UserAuthenticationTokenUpdateData(UserAuthenticationTokenUpdateDataRequired, total=False):
    created: str
    key: str


class UserBrief(TypedDict, total=False):
    authenticated: bool
    email: str
    name: str
    profile_url: str
    self_url: str
    slug: str
    slug_perm: str


class UserBriefLoadMatch(TypedDict, total=False):
    authenticated: bool
    email: str
    name: str
    profile_url: str
    self_url: str
    slug: str
    slug_perm: str


class UserProfileRequired(TypedDict):
    first_name: str
    last_name: str


class UserProfile(UserProfileRequired, total=False):
    company: str
    id: str
    job_title: str
    joined_at: str
    name: str
    slug: str
    slug_perm: str
    tagline: str
    url: str


class UserProfileLoadMatch(TypedDict):
    id: str


class Vagrant(TypedDict):
    pass


class Validate(TypedDict):
    pass


class Version(TypedDict):
    pass


class VulnerabilityRequired(TypedDict):
    identifier: str
    package: dict
    scan_id: int
    scans: list


class Vulnerability(VulnerabilityRequired, total=False):
    created_at: str
    has_vulnerabilities: bool
    id: str
    max_severity: str
    num_vulnerabilities: int


class VulnerabilityLoadMatchRequired(TypedDict):
    id: str


class VulnerabilityLoadMatch(VulnerabilityLoadMatchRequired, total=False):
    page: int
    page_size: int


class VulnerabilityListMatchRequired(TypedDict):
    owner: Any
    repo: Any


class VulnerabilityListMatch(VulnerabilityListMatchRequired, total=False):
    package: Any
    page: int
    page_size: int


class VulnerabilityPolicy(TypedDict):
    pass


class Webhook(TypedDict, total=False):
    id: str


class WebhookRemoveMatch(TypedDict):
    identifier: Any
    owner: Any
    repo: Any


class X509Ecdsa(TypedDict):
    pass


class X509Rsa(TypedDict):
    pass
