// Typed models for the Cloudsmith SDK (JSDoc typedefs).
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
// edit by hand.

/**
 * @typedef {Object} Abort
 */

/**
 * @typedef {Object} Alpine
 */

/**
 * @typedef {Object} AuditLog
 */

/**
 * @typedef {Object} Basic
 */

/**
 * @typedef {Object} Cargo
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} CargoLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} CargoListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} CargoCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} CargoUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Cocoapod
 */

/**
 * @typedef {Object} Complete
 */

/**
 * @typedef {Object} Composer
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} ComposerLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} ComposerListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} ComposerCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} ComposerUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Conan
 */

/**
 * @typedef {Object} Conda
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} CondaLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} CondaListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} CondaCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} CondaUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Copy
 */

/**
 * @typedef {Object} Cran
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} CranLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} CranListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} CranCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} CranUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Dart
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} DartLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} DartListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} DartCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} DartUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Deb
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [component]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {Array} distro_versions
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {string} [gpg_key_inline]
 * @property {string} [gpg_key_url]
 * @property {string} [gpg_verification]
 * @property {boolean} [include_sources]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_distribution]
 * @property {string} upstream_url
 * @property {string} [verification_status]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} DebLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} DebListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} DebCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [component]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {Array} distro_versions
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {string} [gpg_key_inline]
 * @property {string} [gpg_key_url]
 * @property {string} [gpg_verification]
 * @property {boolean} [include_sources]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_distribution]
 * @property {string} upstream_url
 * @property {string} [verification_status]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} DebUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [component]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {Array} [distro_versions]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {string} [gpg_key_inline]
 * @property {string} [gpg_key_url]
 * @property {string} [gpg_verification]
 * @property {boolean} [include_sources]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_distribution]
 * @property {string} [upstream_url]
 * @property {string} [verification_status]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} DenyPolicy
 */

/**
 * @typedef {Object} Dependency
 */

/**
 * @typedef {Object} Disable
 */

/**
 * @typedef {Object} DistributionFull
 * @property {string} [format]
 * @property {string} [format_url]
 * @property {string} name
 * @property {string} [self_url]
 * @property {string} [slug]
 * @property {string} [variants]
 * @property {Array} [versions]
 */

/**
 * @typedef {Object} DistributionFullLoadMatch
 * @property {string} slug
 */

/**
 * @typedef {Object} DistributionFullListMatch
 * @property {string} [format]
 * @property {string} [format_url]
 * @property {string} [name]
 * @property {string} [self_url]
 * @property {string} [slug]
 * @property {string} [variants]
 * @property {Array} [versions]
 */

/**
 * @typedef {Object} Distro
 */

/**
 * @typedef {Object} Docker
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} DockerLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} DockerListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} DockerCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} DockerUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} DynamicMapping
 * @property {string} claim_value
 * @property {string} service_account
 */

/**
 * @typedef {Object} DynamicMappingLoadMatch
 * @property {string} id
 * @property {string} openid_connect_id
 * @property {string} org_id
 */

/**
 * @typedef {Object} DynamicMappingListMatch
 * @property {string} org_id
 * @property {*} provider_setting
 */

/**
 * @typedef {Object} Ecdsa
 */

/**
 * @typedef {Object} Enable
 */

/**
 * @typedef {Object} Entitlement
 * @property {number} [active]
 * @property {Object} bandwidth
 * @property {Object} downloads
 * @property {number} [inactive]
 * @property {number} [total]
 */

/**
 * @typedef {Object} EntitlementLoadMatch
 * @property {*} [owner]
 * @property {*} [repo]
 * @property {string} [id]
 */

/**
 * @typedef {Object} EntitlementCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 * @property {number} [active]
 * @property {Object} bandwidth
 * @property {Object} downloads
 * @property {number} [inactive]
 * @property {number} [total]
 */

/**
 * @typedef {Object} EntitlementRemoveMatch
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} Evaluation
 */

/**
 * @typedef {Object} File
 */

/**
 * @typedef {Object} FileCreateData
 * @property {*} [identifier]
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} Format
 * @property {string} description
 * @property {Array} [distributions]
 * @property {Array} extensions
 * @property {string} name
 * @property {boolean} premium
 * @property {string} [premium_plan_id]
 * @property {string} [premium_plan_name]
 * @property {string} slug
 * @property {Object} supports
 */

/**
 * @typedef {Object} FormatLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} FormatListMatch
 * @property {string} [description]
 * @property {Array} [distributions]
 * @property {Array} [extensions]
 * @property {string} [name]
 * @property {boolean} [premium]
 * @property {string} [premium_plan_id]
 * @property {string} [premium_plan_name]
 * @property {string} [slug]
 * @property {Object} [supports]
 */

/**
 * @typedef {Object} Geoip
 */

/**
 * @typedef {Object} Gon
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} GonLoadMatch
 * @property {*} identifier
 * @property {*} owner
 * @property {*} slug_perm
 */

/**
 * @typedef {Object} GonListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} GonCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} GonUpdateData
 * @property {*} identifier
 * @property {*} owner
 * @property {*} slug_perm
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Gpg
 */

/**
 * @typedef {Object} Group
 */

/**
 * @typedef {Object} Helm
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} HelmLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} HelmListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} HelmCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} HelmUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Hex
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} HexLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} HexListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} HexCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} HexUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} History
 */

/**
 * @typedef {Object} Huggingface
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} HuggingfaceLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} HuggingfaceListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} HuggingfaceCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} HuggingfaceUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Info
 */

/**
 * @typedef {Object} Invite
 */

/**
 * @typedef {Object} LicensePolicy
 */

/**
 * @typedef {Object} Limit
 */

/**
 * @typedef {Object} Luarock
 */

/**
 * @typedef {Object} Maven
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {string} [gpg_key_inline]
 * @property {string} [gpg_key_url]
 * @property {string} [gpg_verification]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {string} [verification_status]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} MavenLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} MavenListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} MavenCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {string} [gpg_key_inline]
 * @property {string} [gpg_key_url]
 * @property {string} [gpg_verification]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {string} [verification_status]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} MavenUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {string} [gpg_key_inline]
 * @property {string} [gpg_key_url]
 * @property {string} [gpg_verification]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {string} [verification_status]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Member
 */

/**
 * @typedef {Object} Move
 */

/**
 * @typedef {Object} Namespace
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [type_name]
 */

/**
 * @typedef {Object} NamespaceLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} NamespaceListMatch
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [type_name]
 */

/**
 * @typedef {Object} NamespaceAuditLog
 * @property {string} actor
 * @property {string} actor_ip_address
 * @property {string} [actor_kind]
 * @property {Object} actor_location
 * @property {string} actor_slug_perm
 * @property {string} [actor_url]
 * @property {string} context
 * @property {string} event
 * @property {string} event_at
 * @property {string} object
 * @property {string} object_kind
 * @property {string} object_slug_perm
 * @property {string} target
 * @property {string} target_kind
 * @property {string} [target_slug_perm]
 * @property {string} [uuid]
 */

/**
 * @typedef {Object} NamespaceAuditLogLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Npm
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} NpmLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} NpmListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} NpmCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} NpmUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Nuget
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} NugetLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} NugetListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} NugetCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} NugetUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} OpenidConnect
 */

/**
 * @typedef {Object} Org
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [event_at]
 * @property {string} [location]
 * @property {string} name
 * @property {Object} package
 * @property {Object} policy
 * @property {Array} reasons
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [tagline]
 * @property {Object} vulnerability_scan_results
 */

/**
 * @typedef {Object} OrgLoadMatch
 * @property {string} id
 * @property {string} [member_id]
 */

/**
 * @typedef {Object} OrgListMatch
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [event_at]
 * @property {string} [location]
 * @property {string} [name]
 * @property {Object} [package]
 * @property {Object} [policy]
 * @property {Array} [reasons]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [tagline]
 * @property {Object} [vulnerability_scan_results]
 */

/**
 * @typedef {Object} OrgCreateData
 * @property {string} id
 * @property {string} [member_id]
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [event_at]
 * @property {string} [location]
 * @property {string} name
 * @property {Object} package
 * @property {Object} policy
 * @property {Array} reasons
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [tagline]
 * @property {Object} vulnerability_scan_results
 */

/**
 * @typedef {Object} OrgUpdateData
 * @property {string} id
 * @property {string} team_id
 * @property {string} [country]
 * @property {string} [created_at]
 * @property {string} [event_at]
 * @property {string} [location]
 * @property {string} [name]
 * @property {Object} [package]
 * @property {Object} [policy]
 * @property {Array} [reasons]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [tagline]
 * @property {Object} [vulnerability_scan_results]
 */

/**
 * @typedef {Object} OrgRemoveMatch
 * @property {string} id
 * @property {*} [member]
 * @property {*} [service]
 * @property {*} [slug_perm]
 * @property {*} [team]
 */

/**
 * @typedef {Object} OrganizationGroupSync
 * @property {string} idp_key
 * @property {string} idp_value
 * @property {string} [role]
 * @property {string} [slug_perm]
 * @property {string} team
 */

/**
 * @typedef {Object} OrganizationGroupSyncListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationGroupSyncCreateData
 * @property {string} org_id
 * @property {string} idp_key
 * @property {string} idp_value
 * @property {string} [role]
 * @property {string} [slug_perm]
 * @property {string} team
 */

/**
 * @typedef {Object} OrganizationGroupSyncStatus
 * @property {boolean} [saml_group_sync_status]
 */

/**
 * @typedef {Object} OrganizationGroupSyncStatusLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationInvite
 * @property {string} [email]
 * @property {string} [expires_at]
 * @property {string} [inviter]
 * @property {string} [inviter_url]
 * @property {string} [org]
 * @property {string} [role]
 * @property {string} [slug_perm]
 * @property {Array} [teams]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} OrganizationInviteListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationInviteCreateData
 * @property {string} org_id
 * @property {string} [email]
 * @property {string} [expires_at]
 * @property {string} [inviter]
 * @property {string} [inviter_url]
 * @property {string} [org]
 * @property {string} [role]
 * @property {string} [slug_perm]
 * @property {Array} [teams]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} OrganizationInviteUpdateData
 * @property {string} id
 * @property {string} org_id
 * @property {string} [email]
 * @property {string} [expires_at]
 * @property {string} [inviter]
 * @property {string} [inviter_url]
 * @property {string} [org]
 * @property {string} [role]
 * @property {string} [slug_perm]
 * @property {Array} [teams]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} OrganizationInviteExtend
 * @property {string} [email]
 * @property {string} [expires_at]
 * @property {string} [inviter]
 * @property {string} [inviter_url]
 * @property {string} [org]
 * @property {string} [role]
 * @property {string} [slug_perm]
 * @property {Array} [teams]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} OrganizationInviteExtendCreateData
 * @property {string} org_id
 * @property {*} slug_perm
 * @property {string} [email]
 * @property {string} [expires_at]
 * @property {string} [inviter]
 * @property {string} [inviter_url]
 * @property {string} [org]
 * @property {string} [role]
 * @property {Array} [teams]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} OrganizationMembership
 * @property {string} [email]
 * @property {boolean} [has_two_factor]
 * @property {boolean} [is_active]
 * @property {string} [joined_at]
 * @property {string} [last_login_at]
 * @property {string} [last_login_method]
 * @property {string} [role]
 * @property {string} [user]
 * @property {string} [user_id]
 * @property {string} [user_name]
 * @property {string} [user_url]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} OrganizationMembershipLoadMatch
 * @property {*} member
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationMembershipListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationMembershipUpdateData
 * @property {*} member
 * @property {string} org_id
 * @property {string} [email]
 * @property {boolean} [has_two_factor]
 * @property {boolean} [is_active]
 * @property {string} [joined_at]
 * @property {string} [last_login_at]
 * @property {string} [last_login_method]
 * @property {string} [role]
 * @property {string} [user]
 * @property {string} [user_id]
 * @property {string} [user_name]
 * @property {string} [user_url]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} OrganizationMembershipRoleUpdate
 * @property {string} [email]
 * @property {boolean} [has_two_factor]
 * @property {string} [joined_at]
 * @property {string} [last_login_at]
 * @property {string} [last_login_method]
 * @property {string} [role]
 * @property {string} [user]
 * @property {string} [user_id]
 * @property {string} [user_name]
 * @property {string} [user_url]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} OrganizationMembershipRoleUpdateUpdateData
 * @property {string} member_id
 * @property {string} org_id
 * @property {string} [email]
 * @property {boolean} [has_two_factor]
 * @property {string} [joined_at]
 * @property {string} [last_login_at]
 * @property {string} [last_login_method]
 * @property {string} [role]
 * @property {string} [user]
 * @property {string} [user_id]
 * @property {string} [user_name]
 * @property {string} [user_url]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} OrganizationMembershipVisibilityUpdate
 * @property {string} [email]
 * @property {boolean} [has_two_factor]
 * @property {string} [joined_at]
 * @property {string} [last_login_at]
 * @property {string} [last_login_method]
 * @property {string} [role]
 * @property {string} [user]
 * @property {string} [user_id]
 * @property {string} [user_name]
 * @property {string} [user_url]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} OrganizationMembershipVisibilityUpdateUpdateData
 * @property {string} member_id
 * @property {string} org_id
 * @property {string} [email]
 * @property {boolean} [has_two_factor]
 * @property {string} [joined_at]
 * @property {string} [last_login_at]
 * @property {string} [last_login_method]
 * @property {string} [role]
 * @property {string} [user]
 * @property {string} [user_id]
 * @property {string} [user_name]
 * @property {string} [user_url]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} OrganizationPackageLicensePolicy
 * @property {boolean} [allow_unknown_licenses]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} name
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {string} [slug_perm]
 * @property {Array} spdx_identifiers
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} OrganizationPackageLicensePolicyLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationPackageLicensePolicyListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationPackageLicensePolicyCreateData
 * @property {string} org_id
 * @property {boolean} [allow_unknown_licenses]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} name
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {string} [slug_perm]
 * @property {Array} spdx_identifiers
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} OrganizationPackageLicensePolicyUpdateData
 * @property {string} id
 * @property {string} org_id
 * @property {boolean} [allow_unknown_licenses]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [name]
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {string} [slug_perm]
 * @property {Array} [spdx_identifiers]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} OrganizationPackageVulnerabilityPolicy
 * @property {boolean} [allow_unknown_severity]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [min_severity]
 * @property {string} name
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} OrganizationPackageVulnerabilityPolicyLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationPackageVulnerabilityPolicyListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationPackageVulnerabilityPolicyCreateData
 * @property {string} org_id
 * @property {boolean} [allow_unknown_severity]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [min_severity]
 * @property {string} name
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} OrganizationPackageVulnerabilityPolicyUpdateData
 * @property {string} id
 * @property {string} org_id
 * @property {boolean} [allow_unknown_severity]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {string} [min_severity]
 * @property {string} [name]
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} OrganizationSamlAuth
 * @property {boolean} saml_auth_enabled
 * @property {boolean} saml_auth_enforced
 * @property {string} [saml_metadata_inline]
 * @property {string} [saml_metadata_url]
 */

/**
 * @typedef {Object} OrganizationSamlAuthLoadMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationSamlAuthUpdateData
 * @property {string} org_id
 * @property {boolean} [saml_auth_enabled]
 * @property {boolean} [saml_auth_enforced]
 * @property {string} [saml_metadata_inline]
 * @property {string} [saml_metadata_url]
 */

/**
 * @typedef {Object} OrganizationTeam
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} OrganizationTeamLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationTeamListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} OrganizationTeamCreateData
 * @property {string} org_id
 * @property {string} [description]
 * @property {string} name
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} OrganizationTeamUpdateData
 * @property {string} id
 * @property {string} org_id
 * @property {string} [description]
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [visibility]
 */

/**
 * @typedef {Object} OrganizationTeamMember
 * @property {string} role
 * @property {string} user
 */

/**
 * @typedef {Object} OrganizationTeamMemberListMatch
 * @property {string} org_id
 * @property {string} team_id
 */

/**
 * @typedef {Object} OrganizationTeamMemberCreateData
 * @property {string} org_id
 * @property {string} team_id
 * @property {string} role
 * @property {string} user
 */

/**
 * @typedef {Object} Oss
 */

/**
 * @typedef {Object} P2n
 */

/**
 * @typedef {Object} Package
 * @property {number} [active]
 * @property {Array} [architectures]
 * @property {number} [backend_kind]
 * @property {Object} bandwidth
 * @property {string} [cdn_url]
 * @property {string} [checksum_md5]
 * @property {string} [checksum_sha1]
 * @property {string} [checksum_sha256]
 * @property {string} [checksum_sha512]
 * @property {number} count
 * @property {string} [dep_type]
 * @property {string} [dependencies_checksum_md5]
 * @property {string} [dependencies_url]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {Object} distro
 * @property {Object} [distro_version]
 * @property {Object} downloads
 * @property {number} [epoch]
 * @property {string} [extension]
 * @property {string} [filename]
 * @property {Array} [files]
 * @property {string} [format]
 * @property {string} [format_url]
 * @property {number} [freeable_storage]
 * @property {string} [fully_qualified_name]
 * @property {string} [identifier_perm]
 * @property {Object} [identifiers]
 * @property {number} [inactive]
 * @property {boolean} [indexed]
 * @property {boolean} [is_cancellable]
 * @property {boolean} [is_copyable]
 * @property {boolean} [is_deleteable]
 * @property {boolean} [is_downloadable]
 * @property {boolean} [is_moveable]
 * @property {boolean} [is_quarantinable]
 * @property {boolean} [is_quarantined]
 * @property {boolean} [is_resyncable]
 * @property {boolean} [is_security_scannable]
 * @property {boolean} [is_sync_awaiting]
 * @property {boolean} [is_sync_completed]
 * @property {boolean} [is_sync_failed]
 * @property {boolean} [is_sync_in_flight]
 * @property {boolean} [is_sync_in_progress]
 * @property {string} last_push
 * @property {string} [license]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [namespace_url]
 * @property {number} num_downloads
 * @property {number} [num_files]
 * @property {string} [operator]
 * @property {string} [origin_repository]
 * @property {string} [origin_repository_url]
 * @property {number} [package_type]
 * @property {boolean} [policy_violated]
 * @property {string} [release]
 * @property {string} [repository]
 * @property {string} [repository_url]
 * @property {string} [security_scan_completed_at]
 * @property {string} [security_scan_started_at]
 * @property {string} [security_scan_status]
 * @property {string} [security_scan_status_updated_at]
 * @property {string} [self_html_url]
 * @property {string} [self_url]
 * @property {string} [signature_url]
 * @property {number} [size]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {number} [stage]
 * @property {string} [stage_str]
 * @property {string} [stage_updated_at]
 * @property {number} [status]
 * @property {string} [status_reason]
 * @property {string} [status_str]
 * @property {string} [status_updated_at]
 * @property {string} [status_url]
 * @property {string} [subtype]
 * @property {string} [summary]
 * @property {string} [sync_finished_at]
 * @property {number} [sync_progress]
 * @property {Object} [tags]
 * @property {Object} [tags_immutable]
 * @property {number} [total]
 * @property {string} [type_display]
 * @property {string} [uploaded_at]
 * @property {string} [uploader]
 * @property {string} [uploader_url]
 * @property {string} [version]
 * @property {string} [version_orig]
 * @property {string} [vulnerability_scan_results_url]
 */

/**
 * @typedef {Object} PackageLoadMatch
 * @property {*} owner
 * @property {*} repo
 * @property {*} [identifier]
 */

/**
 * @typedef {Object} PackageListMatch
 * @property {*} owner
 * @property {*} repo
 * @property {*} [identifier]
 */

/**
 * @typedef {Object} PackageCreateData
 * @property {*} [identifier]
 * @property {*} owner
 * @property {*} repo
 * @property {number} [active]
 * @property {Array} [architectures]
 * @property {number} [backend_kind]
 * @property {Object} bandwidth
 * @property {string} [cdn_url]
 * @property {string} [checksum_md5]
 * @property {string} [checksum_sha1]
 * @property {string} [checksum_sha256]
 * @property {string} [checksum_sha512]
 * @property {number} count
 * @property {string} [dep_type]
 * @property {string} [dependencies_checksum_md5]
 * @property {string} [dependencies_url]
 * @property {string} [description]
 * @property {string} [display_name]
 * @property {Object} distro
 * @property {Object} [distro_version]
 * @property {Object} downloads
 * @property {number} [epoch]
 * @property {string} [extension]
 * @property {string} [filename]
 * @property {Array} [files]
 * @property {string} [format]
 * @property {string} [format_url]
 * @property {number} [freeable_storage]
 * @property {string} [fully_qualified_name]
 * @property {string} [identifier_perm]
 * @property {Object} [identifiers]
 * @property {number} [inactive]
 * @property {boolean} [indexed]
 * @property {boolean} [is_cancellable]
 * @property {boolean} [is_copyable]
 * @property {boolean} [is_deleteable]
 * @property {boolean} [is_downloadable]
 * @property {boolean} [is_moveable]
 * @property {boolean} [is_quarantinable]
 * @property {boolean} [is_quarantined]
 * @property {boolean} [is_resyncable]
 * @property {boolean} [is_security_scannable]
 * @property {boolean} [is_sync_awaiting]
 * @property {boolean} [is_sync_completed]
 * @property {boolean} [is_sync_failed]
 * @property {boolean} [is_sync_in_flight]
 * @property {boolean} [is_sync_in_progress]
 * @property {string} last_push
 * @property {string} [license]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [namespace_url]
 * @property {number} num_downloads
 * @property {number} [num_files]
 * @property {string} [operator]
 * @property {string} [origin_repository]
 * @property {string} [origin_repository_url]
 * @property {number} [package_type]
 * @property {boolean} [policy_violated]
 * @property {string} [release]
 * @property {string} [repository]
 * @property {string} [repository_url]
 * @property {string} [security_scan_completed_at]
 * @property {string} [security_scan_started_at]
 * @property {string} [security_scan_status]
 * @property {string} [security_scan_status_updated_at]
 * @property {string} [self_html_url]
 * @property {string} [self_url]
 * @property {string} [signature_url]
 * @property {number} [size]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {number} [stage]
 * @property {string} [stage_str]
 * @property {string} [stage_updated_at]
 * @property {number} [status]
 * @property {string} [status_reason]
 * @property {string} [status_str]
 * @property {string} [status_updated_at]
 * @property {string} [status_url]
 * @property {string} [subtype]
 * @property {string} [summary]
 * @property {string} [sync_finished_at]
 * @property {number} [sync_progress]
 * @property {Object} [tags]
 * @property {Object} [tags_immutable]
 * @property {number} [total]
 * @property {string} [type_display]
 * @property {string} [uploaded_at]
 * @property {string} [uploader]
 * @property {string} [uploader_url]
 * @property {string} [version]
 * @property {string} [version_orig]
 * @property {string} [vulnerability_scan_results_url]
 */

/**
 * @typedef {Object} PackageRemoveMatch
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} PackageDenyPolicy
 * @property {string} [action]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [enabled]
 * @property {string} [name]
 * @property {string} package_query_string
 * @property {string} [slug_perm]
 * @property {string} [status]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} PackageDenyPolicyLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} PackageDenyPolicyListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} PackageDenyPolicyCreateData
 * @property {string} org_id
 * @property {string} [action]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [enabled]
 * @property {string} [name]
 * @property {string} package_query_string
 * @property {string} [slug_perm]
 * @property {string} [status]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} PackageDenyPolicyUpdateData
 * @property {string} id
 * @property {string} org_id
 * @property {string} [action]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {boolean} [enabled]
 * @property {string} [name]
 * @property {string} [package_query_string]
 * @property {string} [slug_perm]
 * @property {string} [status]
 * @property {string} [updated_at]
 */

/**
 * @typedef {Object} PackageFilePartsUpload
 * @property {string} [identifier]
 * @property {string} [upload_querystring]
 * @property {string} [upload_url]
 */

/**
 * @typedef {Object} PackageFilePartsUploadLoadMatch
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} PackageFileUpload
 */

/**
 * @typedef {Object} PackageFileUploadCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} PackageLicensePolicyEvaluation
 * @property {boolean} [allow_unknown_licenses]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {number} [evaluation_count]
 * @property {string} [name]
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {Object} policy
 * @property {string} [slug_perm]
 * @property {Array} spdx_identifiers
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {number} [violation_count]
 */

/**
 * @typedef {Object} PackageLicensePolicyEvaluationLoadMatch
 * @property {string} id
 * @property {string} license_policy_id
 * @property {string} org_id
 */

/**
 * @typedef {Object} PackageLicensePolicyEvaluationListMatch
 * @property {string} org_id
 * @property {*} policy_slug_perm
 */

/**
 * @typedef {Object} PackageLicensePolicyEvaluationCreateData
 * @property {string} org_id
 * @property {*} policy_slug_perm
 * @property {boolean} [allow_unknown_licenses]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {number} [evaluation_count]
 * @property {string} [name]
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {Object} policy
 * @property {string} [slug_perm]
 * @property {Array} spdx_identifiers
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {number} [violation_count]
 */

/**
 * @typedef {Object} PackageVersionBadge
 */

/**
 * @typedef {Object} PackageVersionBadgeLoadMatch
 * @property {*} owner
 * @property {*} package_format
 * @property {*} package_identifier
 * @property {*} package_name
 * @property {*} package_version
 * @property {*} repo
 */

/**
 * @typedef {Object} PackageVulnerabilityPolicyEvaluation
 * @property {boolean} [allow_unknown_severity]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {number} [evaluation_count]
 * @property {string} [min_severity]
 * @property {string} [name]
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {Object} [policy]
 * @property {string} [slug_perm]
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {number} [violation_count]
 */

/**
 * @typedef {Object} PackageVulnerabilityPolicyEvaluationLoadMatch
 * @property {string} id
 * @property {string} org_id
 * @property {string} vulnerability_policy_id
 */

/**
 * @typedef {Object} PackageVulnerabilityPolicyEvaluationListMatch
 * @property {string} org_id
 * @property {*} policy_slug_perm
 */

/**
 * @typedef {Object} PackageVulnerabilityPolicyEvaluationCreateData
 * @property {string} org_id
 * @property {*} policy_slug_perm
 * @property {boolean} [allow_unknown_severity]
 * @property {string} [created_at]
 * @property {string} [description]
 * @property {number} [evaluation_count]
 * @property {string} [min_severity]
 * @property {string} [name]
 * @property {boolean} [on_violation_quarantine]
 * @property {string} [package_query_string]
 * @property {Object} [policy]
 * @property {string} [slug_perm]
 * @property {string} [status]
 * @property {string} [updated_at]
 * @property {string} [url]
 * @property {number} [violation_count]
 */

/**
 * @typedef {Object} Privilege
 */

/**
 * @typedef {Object} Profile
 */

/**
 * @typedef {Object} ProviderSetting
 * @property {Object} claims
 * @property {boolean} enabled
 * @property {string} [mapping_claim]
 * @property {string} name
 * @property {string} provider_url
 * @property {Array} [service_accounts]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 */

/**
 * @typedef {Object} ProviderSettingLoadMatch
 * @property {string} org_id
 * @property {*} slug_perm
 */

/**
 * @typedef {Object} ProviderSettingListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ProviderSettingsWrite
 * @property {Object} claims
 * @property {Array} [dynamic_mappings]
 * @property {boolean} enabled
 * @property {string} [mapping_claim]
 * @property {string} name
 * @property {string} provider_url
 * @property {Array} [service_accounts]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 */

/**
 * @typedef {Object} ProviderSettingsWriteCreateData
 * @property {string} org_id
 * @property {Object} claims
 * @property {Array} [dynamic_mappings]
 * @property {boolean} enabled
 * @property {string} [mapping_claim]
 * @property {string} name
 * @property {string} provider_url
 * @property {Array} [service_accounts]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 */

/**
 * @typedef {Object} ProviderSettingsWriteUpdateData
 * @property {string} org_id
 * @property {*} slug_perm
 * @property {Object} [claims]
 * @property {Array} [dynamic_mappings]
 * @property {boolean} [enabled]
 * @property {string} [mapping_claim]
 * @property {string} [name]
 * @property {string} [provider_url]
 * @property {Array} [service_accounts]
 * @property {string} [slug]
 */

/**
 * @typedef {Object} Python
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} PythonLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} PythonListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} PythonCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} PythonUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Quarantine
 */

/**
 * @typedef {Object} Quota
 * @property {Object} display
 * @property {Array} history
 * @property {Object} raw
 */

/**
 * @typedef {Object} QuotaLoadMatch
 * @property {string} [id]
 * @property {*} [owner]
 */

/**
 * @typedef {Object} Raw
 */

/**
 * @typedef {Object} Refresh
 */

/**
 * @typedef {Object} Regenerate
 */

/**
 * @typedef {Object} Repo
 * @property {string} [cdn_url]
 * @property {string} [content_kind]
 * @property {boolean} [contextual_auth_realm]
 * @property {boolean} [copy_own]
 * @property {string} [copy_packages]
 * @property {boolean} [cosign_signing_enabled]
 * @property {string} [created_at]
 * @property {string} [default_privilege]
 * @property {boolean} [delete_own]
 * @property {string} [delete_packages]
 * @property {string} [deleted_at]
 * @property {string} [description]
 * @property {Array} [distributes]
 * @property {boolean} [docker_refresh_tokens_enabled]
 * @property {Array} [ecdsa_keys]
 * @property {boolean} [enforce_eula]
 * @property {Array} [gpg_keys]
 * @property {boolean} [index_files]
 * @property {boolean} [is_open_source]
 * @property {boolean} [is_private]
 * @property {boolean} [is_public]
 * @property {string} [manage_entitlements_privilege]
 * @property {boolean} [move_own]
 * @property {string} [move_packages]
 * @property {string} name
 * @property {string} [namespace]
 * @property {string} [namespace_url]
 * @property {boolean} [nuget_native_signing_enabled]
 * @property {number} [num_downloads]
 * @property {number} [num_policy_violated_packages]
 * @property {number} [num_quarantined_packages]
 * @property {string} [open_source_license]
 * @property {string} [open_source_project_url]
 * @property {number} [package_count]
 * @property {number} [package_group_count]
 * @property {boolean} [proxy_npmjs]
 * @property {boolean} [proxy_pypi]
 * @property {boolean} [raw_package_index_enabled]
 * @property {boolean} [raw_package_index_signatures_enabled]
 * @property {string} [replace_packages]
 * @property {boolean} [replace_packages_by_default]
 * @property {number} [repository_type]
 * @property {string} [repository_type_str]
 * @property {boolean} [resync_own]
 * @property {string} [resync_packages]
 * @property {boolean} [scan_own]
 * @property {string} [scan_packages]
 * @property {string} [self_html_url]
 * @property {string} [self_url]
 * @property {boolean} [show_setup_all]
 * @property {number} [size]
 * @property {string} [size_str]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [storage_region]
 * @property {boolean} [strict_npm_validation]
 * @property {boolean} [tag_pre_releases_as_latest]
 * @property {boolean} [use_debian_labels]
 * @property {boolean} [use_default_cargo_upstream]
 * @property {string} [use_entitlements_privilege]
 * @property {boolean} [use_noarch_packages]
 * @property {boolean} [use_source_packages]
 * @property {boolean} [use_vulnerability_scanning]
 * @property {boolean} [user_entitlements_enabled]
 * @property {string} [view_statistics]
 */

/**
 * @typedef {Object} RepoLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} RepoListMatch
 * @property {*} [identifier]
 * @property {*} [owner]
 */

/**
 * @typedef {Object} RepoCreateData
 * @property {*} [identifier]
 * @property {*} [owner]
 * @property {string} [id]
 * @property {string} [cdn_url]
 * @property {string} [content_kind]
 * @property {boolean} [contextual_auth_realm]
 * @property {boolean} [copy_own]
 * @property {string} [copy_packages]
 * @property {boolean} [cosign_signing_enabled]
 * @property {string} [created_at]
 * @property {string} [default_privilege]
 * @property {boolean} [delete_own]
 * @property {string} [delete_packages]
 * @property {string} [deleted_at]
 * @property {string} [description]
 * @property {Array} [distributes]
 * @property {boolean} [docker_refresh_tokens_enabled]
 * @property {Array} [ecdsa_keys]
 * @property {boolean} [enforce_eula]
 * @property {Array} [gpg_keys]
 * @property {boolean} [index_files]
 * @property {boolean} [is_open_source]
 * @property {boolean} [is_private]
 * @property {boolean} [is_public]
 * @property {string} [manage_entitlements_privilege]
 * @property {boolean} [move_own]
 * @property {string} [move_packages]
 * @property {string} name
 * @property {string} [namespace]
 * @property {string} [namespace_url]
 * @property {boolean} [nuget_native_signing_enabled]
 * @property {number} [num_downloads]
 * @property {number} [num_policy_violated_packages]
 * @property {number} [num_quarantined_packages]
 * @property {string} [open_source_license]
 * @property {string} [open_source_project_url]
 * @property {number} [package_count]
 * @property {number} [package_group_count]
 * @property {boolean} [proxy_npmjs]
 * @property {boolean} [proxy_pypi]
 * @property {boolean} [raw_package_index_enabled]
 * @property {boolean} [raw_package_index_signatures_enabled]
 * @property {string} [replace_packages]
 * @property {boolean} [replace_packages_by_default]
 * @property {number} [repository_type]
 * @property {string} [repository_type_str]
 * @property {boolean} [resync_own]
 * @property {string} [resync_packages]
 * @property {boolean} [scan_own]
 * @property {string} [scan_packages]
 * @property {string} [self_html_url]
 * @property {string} [self_url]
 * @property {boolean} [show_setup_all]
 * @property {number} [size]
 * @property {string} [size_str]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [storage_region]
 * @property {boolean} [strict_npm_validation]
 * @property {boolean} [tag_pre_releases_as_latest]
 * @property {boolean} [use_debian_labels]
 * @property {boolean} [use_default_cargo_upstream]
 * @property {string} [use_entitlements_privilege]
 * @property {boolean} [use_noarch_packages]
 * @property {boolean} [use_source_packages]
 * @property {boolean} [use_vulnerability_scanning]
 * @property {boolean} [user_entitlements_enabled]
 * @property {string} [view_statistics]
 */

/**
 * @typedef {Object} RepoUpdateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [cdn_url]
 * @property {string} [content_kind]
 * @property {boolean} [contextual_auth_realm]
 * @property {boolean} [copy_own]
 * @property {string} [copy_packages]
 * @property {boolean} [cosign_signing_enabled]
 * @property {string} [created_at]
 * @property {string} [default_privilege]
 * @property {boolean} [delete_own]
 * @property {string} [delete_packages]
 * @property {string} [deleted_at]
 * @property {string} [description]
 * @property {Array} [distributes]
 * @property {boolean} [docker_refresh_tokens_enabled]
 * @property {Array} [ecdsa_keys]
 * @property {boolean} [enforce_eula]
 * @property {Array} [gpg_keys]
 * @property {boolean} [index_files]
 * @property {boolean} [is_open_source]
 * @property {boolean} [is_private]
 * @property {boolean} [is_public]
 * @property {string} [manage_entitlements_privilege]
 * @property {boolean} [move_own]
 * @property {string} [move_packages]
 * @property {string} [name]
 * @property {string} [namespace]
 * @property {string} [namespace_url]
 * @property {boolean} [nuget_native_signing_enabled]
 * @property {number} [num_downloads]
 * @property {number} [num_policy_violated_packages]
 * @property {number} [num_quarantined_packages]
 * @property {string} [open_source_license]
 * @property {string} [open_source_project_url]
 * @property {number} [package_count]
 * @property {number} [package_group_count]
 * @property {boolean} [proxy_npmjs]
 * @property {boolean} [proxy_pypi]
 * @property {boolean} [raw_package_index_enabled]
 * @property {boolean} [raw_package_index_signatures_enabled]
 * @property {string} [replace_packages]
 * @property {boolean} [replace_packages_by_default]
 * @property {number} [repository_type]
 * @property {string} [repository_type_str]
 * @property {boolean} [resync_own]
 * @property {string} [resync_packages]
 * @property {boolean} [scan_own]
 * @property {string} [scan_packages]
 * @property {string} [self_html_url]
 * @property {string} [self_url]
 * @property {boolean} [show_setup_all]
 * @property {number} [size]
 * @property {string} [size_str]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [storage_region]
 * @property {boolean} [strict_npm_validation]
 * @property {boolean} [tag_pre_releases_as_latest]
 * @property {boolean} [use_debian_labels]
 * @property {boolean} [use_default_cargo_upstream]
 * @property {string} [use_entitlements_privilege]
 * @property {boolean} [use_noarch_packages]
 * @property {boolean} [use_source_packages]
 * @property {boolean} [use_vulnerability_scanning]
 * @property {boolean} [user_entitlements_enabled]
 * @property {string} [view_statistics]
 */

/**
 * @typedef {Object} RepoRemoveMatch
 * @property {*} identifier
 * @property {*} owner
 * @property {*} [slug_perm]
 */

/**
 * @typedef {Object} RepositoryAuditLog
 * @property {string} actor
 * @property {string} actor_ip_address
 * @property {string} [actor_kind]
 * @property {Object} actor_location
 * @property {string} actor_slug_perm
 * @property {string} [actor_url]
 * @property {string} context
 * @property {string} event
 * @property {string} event_at
 * @property {string} object
 * @property {string} object_kind
 * @property {string} object_slug_perm
 * @property {string} [uuid]
 */

/**
 * @typedef {Object} RepositoryAuditLogListMatch
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} RepositoryEcdsaKey
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {boolean} [default]
 * @property {string} [fingerprint]
 * @property {string} [fingerprint_short]
 * @property {string} [public_key]
 * @property {string} [ssh_fingerprint]
 */

/**
 * @typedef {Object} RepositoryEcdsaKeyLoadMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RepositoryEcdsaKeyCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {boolean} [default]
 * @property {string} [fingerprint]
 * @property {string} [fingerprint_short]
 * @property {string} [public_key]
 * @property {string} [ssh_fingerprint]
 */

/**
 * @typedef {Object} RepositoryGeoIpRule
 * @property {Object} cidr
 * @property {Object} country_code
 */

/**
 * @typedef {Object} RepositoryGeoIpRuleLoadMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RepositoryGeoIpRuleUpdateData
 * @property {*} identifier
 * @property {*} owner
 * @property {Object} [cidr]
 * @property {Object} [country_code]
 */

/**
 * @typedef {Object} RepositoryGeoIpStatus
 * @property {boolean} [geoip_enabled]
 */

/**
 * @typedef {Object} RepositoryGeoIpStatusLoadMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RepositoryGeoIpTestAddress
 */

/**
 * @typedef {Object} RepositoryGeoIpTestAddressCreateData
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RepositoryGpgKey
 * @property {boolean} [active]
 * @property {string} comment
 * @property {string} [created_at]
 * @property {boolean} [default]
 * @property {string} [fingerprint]
 * @property {string} [fingerprint_short]
 * @property {string} [public_key]
 */

/**
 * @typedef {Object} RepositoryGpgKeyLoadMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RepositoryGpgKeyCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {boolean} [active]
 * @property {string} comment
 * @property {string} [created_at]
 * @property {boolean} [default]
 * @property {string} [fingerprint]
 * @property {string} [fingerprint_short]
 * @property {string} [public_key]
 */

/**
 * @typedef {Object} RepositoryPrivilegeInput
 * @property {string} privilege
 * @property {string} [service]
 * @property {string} [team]
 * @property {string} [user]
 */

/**
 * @typedef {Object} RepositoryPrivilegeInputListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RepositoryRetentionRule
 * @property {number} [retention_count_limit]
 * @property {number} [retention_days_limit]
 * @property {boolean} [retention_enabled]
 * @property {boolean} [retention_group_by_format]
 * @property {boolean} [retention_group_by_name]
 * @property {boolean} [retention_group_by_package_type]
 * @property {string} [retention_package_query_string]
 * @property {number} [retention_size_limit]
 */

/**
 * @typedef {Object} RepositoryRetentionRuleLoadMatch
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} RepositoryRetentionRuleUpdateData
 * @property {*} owner
 * @property {*} repo
 * @property {number} [retention_count_limit]
 * @property {number} [retention_days_limit]
 * @property {boolean} [retention_enabled]
 * @property {boolean} [retention_group_by_format]
 * @property {boolean} [retention_group_by_name]
 * @property {boolean} [retention_group_by_package_type]
 * @property {string} [retention_package_query_string]
 * @property {number} [retention_size_limit]
 */

/**
 * @typedef {Object} RepositoryRsaKey
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {boolean} [default]
 * @property {string} [fingerprint]
 * @property {string} [fingerprint_short]
 * @property {string} [public_key]
 * @property {string} [ssh_fingerprint]
 */

/**
 * @typedef {Object} RepositoryRsaKeyLoadMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RepositoryRsaKeyCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {boolean} [active]
 * @property {string} [created_at]
 * @property {boolean} [default]
 * @property {string} [fingerprint]
 * @property {string} [fingerprint_short]
 * @property {string} [public_key]
 * @property {string} [ssh_fingerprint]
 */

/**
 * @typedef {Object} RepositoryToken
 * @property {number} [clients]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {boolean} [default]
 * @property {string} [disable_url]
 * @property {number} [downloads]
 * @property {string} [enable_url]
 * @property {Object} [eula_accepted]
 * @property {string} [eula_accepted_at]
 * @property {string} [eula_accepted_from]
 * @property {boolean} [eula_required]
 * @property {boolean} [has_limits]
 * @property {number} [identifier]
 * @property {boolean} [is_active]
 * @property {boolean} [is_limited]
 * @property {number} [limit_bandwidth]
 * @property {string} [limit_bandwidth_unit]
 * @property {string} [limit_date_range_from]
 * @property {string} [limit_date_range_to]
 * @property {number} [limit_num_clients]
 * @property {number} [limit_num_downloads]
 * @property {string} [limit_package_query]
 * @property {string} [limit_path_query]
 * @property {Object} [metadata]
 * @property {string} name
 * @property {string} [refresh_url]
 * @property {string} [reset_url]
 * @property {string} [scheduled_reset_at]
 * @property {string} [scheduled_reset_period]
 * @property {string} [self_url]
 * @property {string} [slug_perm]
 * @property {string} [token]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [updated_by_url]
 * @property {string} [usage]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} RepositoryTokenLoadMatch
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} RepositoryTokenListMatch
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} RepositoryTokenCreateData
 * @property {*} owner
 * @property {*} repo
 * @property {number} [clients]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {boolean} [default]
 * @property {string} [disable_url]
 * @property {number} [downloads]
 * @property {string} [enable_url]
 * @property {Object} [eula_accepted]
 * @property {string} [eula_accepted_at]
 * @property {string} [eula_accepted_from]
 * @property {boolean} [eula_required]
 * @property {boolean} [has_limits]
 * @property {number} [identifier]
 * @property {boolean} [is_active]
 * @property {boolean} [is_limited]
 * @property {number} [limit_bandwidth]
 * @property {string} [limit_bandwidth_unit]
 * @property {string} [limit_date_range_from]
 * @property {string} [limit_date_range_to]
 * @property {number} [limit_num_clients]
 * @property {number} [limit_num_downloads]
 * @property {string} [limit_package_query]
 * @property {string} [limit_path_query]
 * @property {Object} [metadata]
 * @property {string} name
 * @property {string} [refresh_url]
 * @property {string} [reset_url]
 * @property {string} [scheduled_reset_at]
 * @property {string} [scheduled_reset_period]
 * @property {string} [self_url]
 * @property {string} [slug_perm]
 * @property {string} [token]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [updated_by_url]
 * @property {string} [usage]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} RepositoryTokenUpdateData
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 * @property {number} [clients]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {boolean} [default]
 * @property {string} [disable_url]
 * @property {number} [downloads]
 * @property {string} [enable_url]
 * @property {Object} [eula_accepted]
 * @property {string} [eula_accepted_at]
 * @property {string} [eula_accepted_from]
 * @property {boolean} [eula_required]
 * @property {boolean} [has_limits]
 * @property {boolean} [is_active]
 * @property {boolean} [is_limited]
 * @property {number} [limit_bandwidth]
 * @property {string} [limit_bandwidth_unit]
 * @property {string} [limit_date_range_from]
 * @property {string} [limit_date_range_to]
 * @property {number} [limit_num_clients]
 * @property {number} [limit_num_downloads]
 * @property {string} [limit_package_query]
 * @property {string} [limit_path_query]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {string} [refresh_url]
 * @property {string} [reset_url]
 * @property {string} [scheduled_reset_at]
 * @property {string} [scheduled_reset_period]
 * @property {string} [self_url]
 * @property {string} [slug_perm]
 * @property {string} [token]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [updated_by_url]
 * @property {string} [usage]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} RepositoryTokenRefresh
 * @property {number} [clients]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {boolean} [default]
 * @property {string} [disable_url]
 * @property {number} [downloads]
 * @property {string} [enable_url]
 * @property {Object} [eula_accepted]
 * @property {string} [eula_accepted_at]
 * @property {string} [eula_accepted_from]
 * @property {boolean} [eula_required]
 * @property {boolean} [has_limits]
 * @property {number} [identifier]
 * @property {boolean} [is_active]
 * @property {boolean} [is_limited]
 * @property {number} [limit_bandwidth]
 * @property {string} [limit_bandwidth_unit]
 * @property {string} [limit_date_range_from]
 * @property {string} [limit_date_range_to]
 * @property {number} [limit_num_clients]
 * @property {number} [limit_num_downloads]
 * @property {string} [limit_package_query]
 * @property {string} [limit_path_query]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {string} [refresh_url]
 * @property {string} [reset_url]
 * @property {string} [scheduled_reset_at]
 * @property {string} [scheduled_reset_period]
 * @property {string} [self_url]
 * @property {string} [slug_perm]
 * @property {string} [token]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [updated_by_url]
 * @property {string} [usage]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} RepositoryTokenRefreshCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 * @property {number} [clients]
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {boolean} [default]
 * @property {string} [disable_url]
 * @property {number} [downloads]
 * @property {string} [enable_url]
 * @property {Object} [eula_accepted]
 * @property {string} [eula_accepted_at]
 * @property {string} [eula_accepted_from]
 * @property {boolean} [eula_required]
 * @property {boolean} [has_limits]
 * @property {boolean} [is_active]
 * @property {boolean} [is_limited]
 * @property {number} [limit_bandwidth]
 * @property {string} [limit_bandwidth_unit]
 * @property {string} [limit_date_range_from]
 * @property {string} [limit_date_range_to]
 * @property {number} [limit_num_clients]
 * @property {number} [limit_num_downloads]
 * @property {string} [limit_package_query]
 * @property {string} [limit_path_query]
 * @property {Object} [metadata]
 * @property {string} [name]
 * @property {string} [refresh_url]
 * @property {string} [reset_url]
 * @property {string} [scheduled_reset_at]
 * @property {string} [scheduled_reset_period]
 * @property {string} [self_url]
 * @property {string} [slug_perm]
 * @property {string} [token]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [updated_by_url]
 * @property {string} [usage]
 * @property {string} [user]
 * @property {string} [user_url]
 */

/**
 * @typedef {Object} RepositoryTokenSync
 * @property {Array} [tokens]
 */

/**
 * @typedef {Object} RepositoryTokenSyncCreateData
 * @property {*} owner
 * @property {*} repo
 * @property {Array} [tokens]
 */

/**
 * @typedef {Object} RepositoryWebhook
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {number} [disable_reason]
 * @property {string} [disable_reason_str]
 * @property {string} event
 * @property {Array} events
 * @property {number} [identifier]
 * @property {boolean} [is_active]
 * @property {boolean} [is_last_response_bad]
 * @property {number} [last_response_status]
 * @property {string} [last_response_status_str]
 * @property {number} [num_sent]
 * @property {string} [package_query]
 * @property {number} [request_body_format]
 * @property {string} [request_body_format_str]
 * @property {number} [request_body_template_format]
 * @property {string} [request_body_template_format_str]
 * @property {string} [request_content_type]
 * @property {string} [secret_header]
 * @property {string} [self_url]
 * @property {string} [slug_perm]
 * @property {string} target_url
 * @property {string} [template]
 * @property {Array} templates
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [updated_by_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} RepositoryWebhookListMatch
 * @property {*} owner
 * @property {*} repo
 * @property {*} [identifier]
 */

/**
 * @typedef {Object} RepositoryWebhookCreateData
 * @property {*} owner
 * @property {*} repo
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {number} [disable_reason]
 * @property {string} [disable_reason_str]
 * @property {string} event
 * @property {Array} events
 * @property {number} [identifier]
 * @property {boolean} [is_active]
 * @property {boolean} [is_last_response_bad]
 * @property {number} [last_response_status]
 * @property {string} [last_response_status_str]
 * @property {number} [num_sent]
 * @property {string} [package_query]
 * @property {number} [request_body_format]
 * @property {string} [request_body_format_str]
 * @property {number} [request_body_template_format]
 * @property {string} [request_body_template_format_str]
 * @property {string} [request_content_type]
 * @property {string} [secret_header]
 * @property {string} [self_url]
 * @property {string} [slug_perm]
 * @property {string} target_url
 * @property {string} [template]
 * @property {Array} templates
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [updated_by_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} RepositoryWebhookUpdateData
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {number} [disable_reason]
 * @property {string} [disable_reason_str]
 * @property {string} [event]
 * @property {Array} [events]
 * @property {boolean} [is_active]
 * @property {boolean} [is_last_response_bad]
 * @property {number} [last_response_status]
 * @property {string} [last_response_status_str]
 * @property {number} [num_sent]
 * @property {string} [package_query]
 * @property {number} [request_body_format]
 * @property {string} [request_body_format_str]
 * @property {number} [request_body_template_format]
 * @property {string} [request_body_template_format_str]
 * @property {string} [request_content_type]
 * @property {string} [secret_header]
 * @property {string} [self_url]
 * @property {string} [slug_perm]
 * @property {string} [target_url]
 * @property {string} [template]
 * @property {Array} [templates]
 * @property {string} [updated_at]
 * @property {string} [updated_by]
 * @property {string} [updated_by_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} RepositoryX509EcdsaCertificate
 * @property {boolean} [active]
 * @property {string} [certificate]
 * @property {string} [certificate_chain]
 * @property {string} [certificate_chain_fingerprint]
 * @property {string} [certificate_chain_fingerprint_short]
 * @property {string} [certificate_fingerprint]
 * @property {string} [certificate_fingerprint_short]
 * @property {string} [created_at]
 * @property {boolean} [default]
 * @property {string} [issuing_status]
 */

/**
 * @typedef {Object} RepositoryX509EcdsaCertificateLoadMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RepositoryX509RsaCertificate
 * @property {boolean} [active]
 * @property {string} [certificate]
 * @property {string} [certificate_chain]
 * @property {string} [certificate_chain_fingerprint]
 * @property {string} [certificate_chain_fingerprint_short]
 * @property {string} [certificate_fingerprint]
 * @property {string} [certificate_fingerprint_short]
 * @property {string} [created_at]
 * @property {boolean} [default]
 * @property {string} [issuing_status]
 */

/**
 * @typedef {Object} RepositoryX509RsaCertificateLoadMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} Reset
 */

/**
 * @typedef {Object} ResourcesRateCheck
 * @property {number} [interval]
 * @property {number} [limit]
 * @property {number} [remaining]
 * @property {number} [reset]
 * @property {string} [reset_iso_8601]
 * @property {boolean} [throttled]
 */

/**
 * @typedef {Object} ResourcesRateCheckLoadMatch
 * @property {number} [interval]
 * @property {number} [limit]
 * @property {number} [remaining]
 * @property {number} [reset]
 * @property {string} [reset_iso_8601]
 * @property {boolean} [throttled]
 */

/**
 * @typedef {Object} Resync
 */

/**
 * @typedef {Object} Retention
 */

/**
 * @typedef {Object} Rpm
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} distro_version
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {string} [gpg_key_inline]
 * @property {string} [gpg_key_url]
 * @property {string} [gpg_verification]
 * @property {boolean} [include_sources]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {string} [verification_status]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} RpmLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RpmListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RpmCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} distro_version
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {string} [gpg_key_inline]
 * @property {string} [gpg_key_url]
 * @property {string} [gpg_verification]
 * @property {boolean} [include_sources]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {string} [verification_status]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} RpmUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [distro_version]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {string} [gpg_key_inline]
 * @property {string} [gpg_key_url]
 * @property {string} [gpg_verification]
 * @property {boolean} [include_sources]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {string} [verification_status]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Rsa
 */

/**
 * @typedef {Object} Ruby
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} RubyLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RubyListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} RubyCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} RubyUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} SamlGroupSync
 */

/**
 * @typedef {Object} Scan
 */

/**
 * @typedef {Object} Self
 */

/**
 * @typedef {Object} Service
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {string} [description]
 * @property {string} [key]
 * @property {string} [key_expires_at]
 * @property {string} name
 * @property {string} [role]
 * @property {string} [slug]
 * @property {Array} [teams]
 */

/**
 * @typedef {Object} ServiceLoadMatch
 * @property {string} id
 * @property {string} org_id
 */

/**
 * @typedef {Object} ServiceListMatch
 * @property {string} org_id
 */

/**
 * @typedef {Object} ServiceCreateData
 * @property {string} org_id
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {string} [description]
 * @property {string} [key]
 * @property {string} [key_expires_at]
 * @property {string} name
 * @property {string} [role]
 * @property {string} [slug]
 * @property {Array} [teams]
 */

/**
 * @typedef {Object} ServiceUpdateData
 * @property {string} id
 * @property {string} org_id
 * @property {string} [created_at]
 * @property {string} [created_by]
 * @property {string} [created_by_url]
 * @property {string} [description]
 * @property {string} [key]
 * @property {string} [key_expires_at]
 * @property {string} [name]
 * @property {string} [role]
 * @property {string} [slug]
 * @property {Array} [teams]
 */

/**
 * @typedef {Object} Status
 */

/**
 * @typedef {Object} StatusBasic
 * @property {string} [detail]
 * @property {string} [version]
 */

/**
 * @typedef {Object} StatusBasicLoadMatch
 * @property {string} [detail]
 * @property {string} [version]
 */

/**
 * @typedef {Object} StorageRegion
 * @property {string} label
 * @property {string} slug
 */

/**
 * @typedef {Object} StorageRegionLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} StorageRegionListMatch
 * @property {string} [label]
 * @property {string} [slug]
 */

/**
 * @typedef {Object} Swift
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} SwiftLoadMatch
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} SwiftListMatch
 * @property {*} identifier
 * @property {*} owner
 */

/**
 * @typedef {Object} SwiftCreateData
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} name
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} upstream_url
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} SwiftUpdateData
 * @property {string} id
 * @property {*} identifier
 * @property {*} owner
 * @property {string} [auth_mode]
 * @property {string} [auth_secret]
 * @property {string} [auth_username]
 * @property {string} [created_at]
 * @property {string} [disable_reason]
 * @property {string} [extra_header_1]
 * @property {string} [extra_header_2]
 * @property {string} [extra_value_1]
 * @property {string} [extra_value_2]
 * @property {boolean} [is_active]
 * @property {string} [mode]
 * @property {string} [name]
 * @property {boolean} [pending_validation]
 * @property {number} [priority]
 * @property {string} [slug_perm]
 * @property {string} [updated_at]
 * @property {string} [upstream_url]
 * @property {boolean} [verify_ssl]
 */

/**
 * @typedef {Object} Sync
 */

/**
 * @typedef {Object} Tag
 */

/**
 * @typedef {Object} Team
 */

/**
 * @typedef {Object} Terraform
 */

/**
 * @typedef {Object} Test
 */

/**
 * @typedef {Object} Token
 */

/**
 * @typedef {Object} TransferRegion
 */

/**
 * @typedef {Object} User
 * @property {string} [created]
 * @property {string} [key]
 * @property {string} [slug_perm]
 */

/**
 * @typedef {Object} UserListMatch
 * @property {string} [created]
 * @property {string} [key]
 * @property {string} [slug_perm]
 */

/**
 * @typedef {Object} UserAuthToken
 */

/**
 * @typedef {Object} UserAuthTokenCreateData
 */

/**
 * @typedef {Object} UserAuthenticationToken
 * @property {string} [created]
 * @property {string} [key]
 * @property {string} [slug_perm]
 */

/**
 * @typedef {Object} UserAuthenticationTokenCreateData
 * @property {string} [created]
 * @property {string} [key]
 * @property {string} [slug_perm]
 */

/**
 * @typedef {Object} UserAuthenticationTokenUpdateData
 * @property {*} slug_perm
 * @property {string} [created]
 * @property {string} [key]
 */

/**
 * @typedef {Object} UserBrief
 * @property {boolean} [authenticated]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [profile_url]
 * @property {string} [self_url]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 */

/**
 * @typedef {Object} UserBriefLoadMatch
 * @property {boolean} [authenticated]
 * @property {string} [email]
 * @property {string} [name]
 * @property {string} [profile_url]
 * @property {string} [self_url]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 */

/**
 * @typedef {Object} UserProfile
 * @property {string} [company]
 * @property {string} first_name
 * @property {string} [job_title]
 * @property {string} [joined_at]
 * @property {string} last_name
 * @property {string} [name]
 * @property {string} [slug]
 * @property {string} [slug_perm]
 * @property {string} [tagline]
 * @property {string} [url]
 */

/**
 * @typedef {Object} UserProfileLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} Vagrant
 */

/**
 * @typedef {Object} Validate
 */

/**
 * @typedef {Object} Version
 */

/**
 * @typedef {Object} Vulnerability
 * @property {string} [created_at]
 * @property {boolean} [has_vulnerabilities]
 * @property {string} identifier
 * @property {string} [max_severity]
 * @property {number} [num_vulnerabilities]
 * @property {Object} package
 * @property {Array} results
 * @property {number} scan_id
 * @property {string} target
 * @property {string} type
 */

/**
 * @typedef {Object} VulnerabilityLoadMatch
 * @property {string} id
 */

/**
 * @typedef {Object} VulnerabilityListMatch
 * @property {*} owner
 * @property {*} [package]
 * @property {*} repo
 * @property {*} [identifier]
 */

/**
 * @typedef {Object} VulnerabilityPolicy
 */

/**
 * @typedef {Object} Webhook
 */

/**
 * @typedef {Object} WebhookRemoveMatch
 * @property {*} identifier
 * @property {*} owner
 * @property {*} repo
 */

/**
 * @typedef {Object} X509Ecdsa
 */

/**
 * @typedef {Object} X509Rsa
 */

