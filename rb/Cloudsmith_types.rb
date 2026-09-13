# frozen_string_literal: true

# Typed models for the Cloudsmith SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Abort entity data model.
class Abort
end

# Alpine entity data model.
class Alpine
end

# AuditLog entity data model.
class AuditLog
end

# Basic entity data model.
class Basic
end

# Cargo entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Cargo = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Cargo#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
CargoLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Cargo#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
CargoListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Cargo#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
CargoCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Cargo#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
CargoUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Cocoapod entity data model.
class Cocoapod
end

# Complete entity data model.
class Complete
end

# Composer entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Composer = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Composer#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
ComposerLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Composer#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
ComposerListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Composer#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
ComposerCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Composer#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
ComposerUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Conan entity data model.
class Conan
end

# Conda entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Conda = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Conda#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
CondaLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Conda#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
CondaListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Conda#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
CondaCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Conda#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
CondaUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Copy entity data model.
class Copy
end

# Cran entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Cran = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Cran#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
CranLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Cran#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
CranListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Cran#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
CranCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Cran#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
CranUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Dart entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Dart = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Dart#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
DartLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Dart#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
DartListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Dart#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
DartCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Dart#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
DartUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Deb entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] component
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] distro_versions
#   @return [Array]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_inline
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_url
#   @return [String, nil]
#
# @!attribute [rw] gpg_verification
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_sources
#   @return [Boolean, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_distribution
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verification_status
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Deb = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :component,
  :created_at,
  :disable_reason,
  :distro_versions,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :gpg_key_inline,
  :gpg_key_url,
  :gpg_verification,
  :id,
  :include_sources,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_distribution,
  :upstream_url,
  :verification_status,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Deb#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
DebLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Deb#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
DebListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Deb#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] component
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] distro_versions
#   @return [Array]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_inline
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_url
#   @return [String, nil]
#
# @!attribute [rw] gpg_verification
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_sources
#   @return [Boolean, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_distribution
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verification_status
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
DebCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :component,
  :created_at,
  :disable_reason,
  :distro_versions,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :gpg_key_inline,
  :gpg_key_url,
  :gpg_verification,
  :id,
  :include_sources,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_distribution,
  :upstream_url,
  :verification_status,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Deb#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] component
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] distro_versions
#   @return [Array, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_inline
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_url
#   @return [String, nil]
#
# @!attribute [rw] gpg_verification
#   @return [String, nil]
#
# @!attribute [rw] include_sources
#   @return [Boolean, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_distribution
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verification_status
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
DebUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :component,
  :created_at,
  :disable_reason,
  :distro_versions,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :gpg_key_inline,
  :gpg_key_url,
  :gpg_verification,
  :include_sources,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_distribution,
  :upstream_url,
  :verification_status,
  :verify_ssl,
  keyword_init: true
)

# DenyPolicy entity data model.
class DenyPolicy
end

# Dependency entity data model.
class Dependency
end

# Disable entity data model.
class Disable
end

# DistributionFull entity data model.
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] format_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] variants
#   @return [String, nil]
#
# @!attribute [rw] versions
#   @return [Array, nil]
DistributionFull = Struct.new(
  :format,
  :format_url,
  :name,
  :self_url,
  :slug,
  :variants,
  :versions,
  keyword_init: true
)

# Request payload for DistributionFull#load.
#
# @!attribute [rw] slug
#   @return [String]
DistributionFullLoadMatch = Struct.new(
  :slug,
  keyword_init: true
)

# Request payload for DistributionFull#list.
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] format_url
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] variants
#   @return [String, nil]
#
# @!attribute [rw] versions
#   @return [Array, nil]
DistributionFullListMatch = Struct.new(
  :format,
  :format_url,
  :name,
  :self_url,
  :slug,
  :variants,
  :versions,
  keyword_init: true
)

# Distro entity data model.
class Distro
end

# Docker entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Docker = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Docker#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
DockerLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Docker#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
DockerListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Docker#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
DockerCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Docker#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
DockerUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# DynamicMapping entity data model.
#
# @!attribute [rw] claim_value
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] service_account
#   @return [String]
DynamicMapping = Struct.new(
  :claim_value,
  :id,
  :service_account,
  keyword_init: true
)

# Request payload for DynamicMapping#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] openid_connect_id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
DynamicMappingLoadMatch = Struct.new(
  :id,
  :openid_connect_id,
  :org_id,
  keyword_init: true
)

# Request payload for DynamicMapping#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] provider_setting
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
DynamicMappingListMatch = Struct.new(
  :org_id,
  :provider_setting,
  :page,
  :page_size,
  keyword_init: true
)

# Ecdsa entity data model.
class Ecdsa
end

# Enable entity data model.
class Enable
end

# Entitlement entity data model.
#
# @!attribute [rw] active
#   @return [Integer, nil]
#
# @!attribute [rw] bandwidth
#   @return [Hash]
#
# @!attribute [rw] downloads
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] inactive
#   @return [Integer, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
Entitlement = Struct.new(
  :active,
  :bandwidth,
  :downloads,
  :id,
  :inactive,
  :total,
  keyword_init: true
)

# Request payload for Entitlement#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] finish
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] start
#   @return [Object, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
EntitlementLoadMatch = Struct.new(
  :id,
  :finish,
  :page,
  :page_size,
  :start,
  :token,
  keyword_init: true
)

# Request payload for Entitlement#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] show_token
#   @return [Object, nil]
#
# @!attribute [rw] active
#   @return [Integer, nil]
#
# @!attribute [rw] bandwidth
#   @return [Hash]
#
# @!attribute [rw] downloads
#   @return [Hash]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] inactive
#   @return [Integer, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
EntitlementCreateData = Struct.new(
  :identifier,
  :owner,
  :repo,
  :show_token,
  :active,
  :bandwidth,
  :downloads,
  :id,
  :inactive,
  :total,
  keyword_init: true
)

# Request payload for Entitlement#remove.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
EntitlementRemoveMatch = Struct.new(
  :identifier,
  :owner,
  :repo,
  keyword_init: true
)

# Evaluation entity data model.
class Evaluation
end

# File entity data model.
class FileType
end

# Request payload for File#create.
#
# @!attribute [rw] identifier
#   @return [Object, nil]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
FileCreateData = Struct.new(
  :identifier,
  :owner,
  :repo,
  :data,
  keyword_init: true
)

# Format entity data model.
#
# @!attribute [rw] description
#   @return [String]
#
# @!attribute [rw] distributions
#   @return [Array, nil]
#
# @!attribute [rw] extensions
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] premium
#   @return [Boolean]
#
# @!attribute [rw] premium_plan_id
#   @return [String, nil]
#
# @!attribute [rw] premium_plan_name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String]
#
# @!attribute [rw] supports
#   @return [Hash]
Format = Struct.new(
  :description,
  :distributions,
  :extensions,
  :id,
  :name,
  :premium,
  :premium_plan_id,
  :premium_plan_name,
  :slug,
  :supports,
  keyword_init: true
)

# Request payload for Format#load.
#
# @!attribute [rw] id
#   @return [String]
FormatLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Format#list.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] distributions
#   @return [Array, nil]
#
# @!attribute [rw] extensions
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] premium
#   @return [Boolean, nil]
#
# @!attribute [rw] premium_plan_id
#   @return [String, nil]
#
# @!attribute [rw] premium_plan_name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] supports
#   @return [Hash, nil]
FormatListMatch = Struct.new(
  :description,
  :distributions,
  :extensions,
  :id,
  :name,
  :premium,
  :premium_plan_id,
  :premium_plan_name,
  :slug,
  :supports,
  keyword_init: true
)

# Geoip entity data model.
class Geoip
end

# Gon entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Gon = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Gon#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] slug_perm
#   @return [Object]
GonLoadMatch = Struct.new(
  :identifier,
  :owner,
  :slug_perm,
  keyword_init: true
)

# Request payload for Gon#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
GonListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Gon#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
GonCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Gon#update.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] slug_perm
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
GonUpdateData = Struct.new(
  :identifier,
  :owner,
  :slug_perm,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Gpg entity data model.
class Gpg
end

# Group entity data model.
class Group
end

# Helm entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Helm = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Helm#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
HelmLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Helm#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
HelmListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Helm#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
HelmCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Helm#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
HelmUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Hex entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Hex = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Hex#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
HexLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Hex#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
HexListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Hex#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
HexCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Hex#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
HexUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# History entity data model.
class History
end

# Huggingface entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Huggingface = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Huggingface#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
HuggingfaceLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Huggingface#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
HuggingfaceListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Huggingface#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
HuggingfaceCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Huggingface#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
HuggingfaceUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Info entity data model.
class Info
end

# Invite entity data model.
class Invite
end

# LicensePolicy entity data model.
class LicensePolicy
end

# Limit entity data model.
class Limit
end

# Luarock entity data model.
class Luarock
end

# Maven entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_inline
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_url
#   @return [String, nil]
#
# @!attribute [rw] gpg_verification
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verification_status
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Maven = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :gpg_key_inline,
  :gpg_key_url,
  :gpg_verification,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verification_status,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Maven#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
MavenLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Maven#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
MavenListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Maven#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_inline
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_url
#   @return [String, nil]
#
# @!attribute [rw] gpg_verification
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verification_status
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
MavenCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :gpg_key_inline,
  :gpg_key_url,
  :gpg_verification,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verification_status,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Maven#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_inline
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_url
#   @return [String, nil]
#
# @!attribute [rw] gpg_verification
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verification_status
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
MavenUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :gpg_key_inline,
  :gpg_key_url,
  :gpg_verification,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verification_status,
  :verify_ssl,
  keyword_init: true
)

# Member entity data model.
class Member
end

# Move entity data model.
class Move
end

# Namespace entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] type_name
#   @return [String, nil]
Namespace = Struct.new(
  :id,
  :name,
  :slug,
  :slug_perm,
  :type_name,
  keyword_init: true
)

# Request payload for Namespace#load.
#
# @!attribute [rw] id
#   @return [String]
NamespaceLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Namespace#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
NamespaceListMatch = Struct.new(
  :page,
  :page_size,
  keyword_init: true
)

# NamespaceAuditLog entity data model.
#
# @!attribute [rw] actor
#   @return [String]
#
# @!attribute [rw] actor_ip_address
#   @return [String]
#
# @!attribute [rw] actor_kind
#   @return [String, nil]
#
# @!attribute [rw] actor_location
#   @return [Hash]
#
# @!attribute [rw] actor_slug_perm
#   @return [String]
#
# @!attribute [rw] actor_url
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [String]
#
# @!attribute [rw] event
#   @return [String]
#
# @!attribute [rw] event_at
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] object
#   @return [String]
#
# @!attribute [rw] object_kind
#   @return [String]
#
# @!attribute [rw] object_slug_perm
#   @return [String]
#
# @!attribute [rw] target
#   @return [String]
#
# @!attribute [rw] target_kind
#   @return [String]
#
# @!attribute [rw] target_slug_perm
#   @return [String, nil]
#
# @!attribute [rw] uuid
#   @return [String, nil]
NamespaceAuditLog = Struct.new(
  :actor,
  :actor_ip_address,
  :actor_kind,
  :actor_location,
  :actor_slug_perm,
  :actor_url,
  :context,
  :event,
  :event_at,
  :id,
  :object,
  :object_kind,
  :object_slug_perm,
  :target,
  :target_kind,
  :target_slug_perm,
  :uuid,
  keyword_init: true
)

# Request payload for NamespaceAuditLog#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
NamespaceAuditLogLoadMatch = Struct.new(
  :id,
  :page,
  :page_size,
  :query,
  keyword_init: true
)

# Npm entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Npm = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Npm#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
NpmLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Npm#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
NpmListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Npm#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
NpmCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Npm#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
NpmUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Nuget entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Nuget = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Nuget#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
NugetLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Nuget#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
NugetListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Nuget#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
NugetCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Nuget#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
NugetUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# OpenidConnect entity data model.
class OpenidConnect
end

# Org entity data model.
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] event_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] package
#   @return [Hash]
#
# @!attribute [rw] policy
#   @return [Hash]
#
# @!attribute [rw] reasons
#   @return [Array]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] tagline
#   @return [String, nil]
#
# @!attribute [rw] vulnerability_scan_results
#   @return [Hash]
Org = Struct.new(
  :country,
  :created_at,
  :event_at,
  :id,
  :location,
  :name,
  :package,
  :policy,
  :reasons,
  :slug,
  :slug_perm,
  :tagline,
  :vulnerability_scan_results,
  keyword_init: true
)

# Request payload for Org#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] member_id
#   @return [String, nil]
OrgLoadMatch = Struct.new(
  :id,
  :member_id,
  keyword_init: true
)

# Request payload for Org#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
OrgListMatch = Struct.new(
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Org#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] member_id
#   @return [String, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] event_at
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] package
#   @return [Hash]
#
# @!attribute [rw] policy
#   @return [Hash]
#
# @!attribute [rw] reasons
#   @return [Array]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] tagline
#   @return [String, nil]
#
# @!attribute [rw] vulnerability_scan_results
#   @return [Hash]
OrgCreateData = Struct.new(
  :id,
  :member_id,
  :country,
  :created_at,
  :event_at,
  :location,
  :name,
  :package,
  :policy,
  :reasons,
  :slug,
  :slug_perm,
  :tagline,
  :vulnerability_scan_results,
  keyword_init: true
)

# Request payload for Org#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] team_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] country
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] event_at
#   @return [String, nil]
#
# @!attribute [rw] location
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] package
#   @return [Hash, nil]
#
# @!attribute [rw] policy
#   @return [Hash, nil]
#
# @!attribute [rw] reasons
#   @return [Array, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] tagline
#   @return [String, nil]
#
# @!attribute [rw] vulnerability_scan_results
#   @return [Hash, nil]
OrgUpdateData = Struct.new(
  :id,
  :team_id,
  :data,
  :country,
  :created_at,
  :event_at,
  :location,
  :name,
  :package,
  :policy,
  :reasons,
  :slug,
  :slug_perm,
  :tagline,
  :vulnerability_scan_results,
  keyword_init: true
)

# Request payload for Org#remove.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] member
#   @return [Object, nil]
#
# @!attribute [rw] service
#   @return [Object, nil]
#
# @!attribute [rw] slug_perm
#   @return [Object, nil]
#
# @!attribute [rw] team
#   @return [Object, nil]
OrgRemoveMatch = Struct.new(
  :id,
  :member,
  :service,
  :slug_perm,
  :team,
  keyword_init: true
)

# OrganizationGroupSync entity data model.
#
# @!attribute [rw] idp_key
#   @return [String]
#
# @!attribute [rw] idp_value
#   @return [String]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [String]
OrganizationGroupSync = Struct.new(
  :idp_key,
  :idp_value,
  :role,
  :slug_perm,
  :team,
  keyword_init: true
)

# Request payload for OrganizationGroupSync#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
OrganizationGroupSyncListMatch = Struct.new(
  :org_id,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for OrganizationGroupSync#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] idp_key
#   @return [String]
#
# @!attribute [rw] idp_value
#   @return [String]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [String]
OrganizationGroupSyncCreateData = Struct.new(
  :org_id,
  :data,
  :idp_key,
  :idp_value,
  :role,
  :slug_perm,
  :team,
  keyword_init: true
)

# OrganizationGroupSyncStatus entity data model.
#
# @!attribute [rw] saml_group_sync_status
#   @return [Boolean, nil]
OrganizationGroupSyncStatus = Struct.new(
  :saml_group_sync_status,
  keyword_init: true
)

# Request payload for OrganizationGroupSyncStatus#load.
#
# @!attribute [rw] org_id
#   @return [String]
OrganizationGroupSyncStatusLoadMatch = Struct.new(
  :org_id,
  keyword_init: true
)

# OrganizationInvite entity data model.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] inviter
#   @return [String, nil]
#
# @!attribute [rw] inviter_url
#   @return [String, nil]
#
# @!attribute [rw] org
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] teams
#   @return [Array, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
OrganizationInvite = Struct.new(
  :email,
  :expires_at,
  :id,
  :inviter,
  :inviter_url,
  :org,
  :role,
  :slug_perm,
  :teams,
  :user,
  :user_url,
  keyword_init: true
)

# Request payload for OrganizationInvite#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
OrganizationInviteListMatch = Struct.new(
  :org_id,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for OrganizationInvite#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] inviter
#   @return [String, nil]
#
# @!attribute [rw] inviter_url
#   @return [String, nil]
#
# @!attribute [rw] org
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] teams
#   @return [Array, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
OrganizationInviteCreateData = Struct.new(
  :org_id,
  :data,
  :email,
  :expires_at,
  :id,
  :inviter,
  :inviter_url,
  :org,
  :role,
  :slug_perm,
  :teams,
  :user,
  :user_url,
  keyword_init: true
)

# Request payload for OrganizationInvite#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] inviter
#   @return [String, nil]
#
# @!attribute [rw] inviter_url
#   @return [String, nil]
#
# @!attribute [rw] org
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] teams
#   @return [Array, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
OrganizationInviteUpdateData = Struct.new(
  :id,
  :org_id,
  :data,
  :email,
  :expires_at,
  :inviter,
  :inviter_url,
  :org,
  :role,
  :slug_perm,
  :teams,
  :user,
  :user_url,
  keyword_init: true
)

# OrganizationInviteExtend entity data model.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] inviter
#   @return [String, nil]
#
# @!attribute [rw] inviter_url
#   @return [String, nil]
#
# @!attribute [rw] org
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] teams
#   @return [Array, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
OrganizationInviteExtend = Struct.new(
  :email,
  :expires_at,
  :inviter,
  :inviter_url,
  :org,
  :role,
  :slug_perm,
  :teams,
  :user,
  :user_url,
  keyword_init: true
)

# Request payload for OrganizationInviteExtend#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] slug_perm
#   @return [Object]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] expires_at
#   @return [String, nil]
#
# @!attribute [rw] inviter
#   @return [String, nil]
#
# @!attribute [rw] inviter_url
#   @return [String, nil]
#
# @!attribute [rw] org
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] teams
#   @return [Array, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
OrganizationInviteExtendCreateData = Struct.new(
  :org_id,
  :slug_perm,
  :email,
  :expires_at,
  :inviter,
  :inviter_url,
  :org,
  :role,
  :teams,
  :user,
  :user_url,
  keyword_init: true
)

# OrganizationMembership entity data model.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] has_two_factor
#   @return [Boolean, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] joined_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_method
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] user_name
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
OrganizationMembership = Struct.new(
  :email,
  :has_two_factor,
  :is_active,
  :joined_at,
  :last_login_at,
  :last_login_method,
  :role,
  :user,
  :user_id,
  :user_name,
  :user_url,
  :visibility,
  keyword_init: true
)

# Request payload for OrganizationMembership#load.
#
# @!attribute [rw] member
#   @return [Object]
#
# @!attribute [rw] org_id
#   @return [String]
OrganizationMembershipLoadMatch = Struct.new(
  :member,
  :org_id,
  keyword_init: true
)

# Request payload for OrganizationMembership#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] sort
#   @return [Object, nil]
OrganizationMembershipListMatch = Struct.new(
  :org_id,
  :is_active,
  :page,
  :page_size,
  :query,
  :sort,
  keyword_init: true
)

# Request payload for OrganizationMembership#update.
#
# @!attribute [rw] member
#   @return [Object]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] has_two_factor
#   @return [Boolean, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] joined_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_method
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] user_name
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
OrganizationMembershipUpdateData = Struct.new(
  :member,
  :org_id,
  :data,
  :email,
  :has_two_factor,
  :is_active,
  :joined_at,
  :last_login_at,
  :last_login_method,
  :role,
  :user,
  :user_id,
  :user_name,
  :user_url,
  :visibility,
  keyword_init: true
)

# OrganizationMembershipRoleUpdate entity data model.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] has_two_factor
#   @return [Boolean, nil]
#
# @!attribute [rw] joined_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_method
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] user_name
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
OrganizationMembershipRoleUpdate = Struct.new(
  :email,
  :has_two_factor,
  :joined_at,
  :last_login_at,
  :last_login_method,
  :role,
  :user,
  :user_id,
  :user_name,
  :user_url,
  :visibility,
  keyword_init: true
)

# Request payload for OrganizationMembershipRoleUpdate#update.
#
# @!attribute [rw] member_id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] has_two_factor
#   @return [Boolean, nil]
#
# @!attribute [rw] joined_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_method
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] user_name
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
OrganizationMembershipRoleUpdateUpdateData = Struct.new(
  :member_id,
  :org_id,
  :data,
  :email,
  :has_two_factor,
  :joined_at,
  :last_login_at,
  :last_login_method,
  :role,
  :user,
  :user_id,
  :user_name,
  :user_url,
  :visibility,
  keyword_init: true
)

# OrganizationMembershipVisibilityUpdate entity data model.
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] has_two_factor
#   @return [Boolean, nil]
#
# @!attribute [rw] joined_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_method
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] user_name
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
OrganizationMembershipVisibilityUpdate = Struct.new(
  :email,
  :has_two_factor,
  :joined_at,
  :last_login_at,
  :last_login_method,
  :role,
  :user,
  :user_id,
  :user_name,
  :user_url,
  :visibility,
  keyword_init: true
)

# Request payload for OrganizationMembershipVisibilityUpdate#update.
#
# @!attribute [rw] member_id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] has_two_factor
#   @return [Boolean, nil]
#
# @!attribute [rw] joined_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_at
#   @return [String, nil]
#
# @!attribute [rw] last_login_method
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_id
#   @return [String, nil]
#
# @!attribute [rw] user_name
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
OrganizationMembershipVisibilityUpdateUpdateData = Struct.new(
  :member_id,
  :org_id,
  :data,
  :email,
  :has_two_factor,
  :joined_at,
  :last_login_at,
  :last_login_method,
  :role,
  :user,
  :user_id,
  :user_name,
  :user_url,
  :visibility,
  keyword_init: true
)

# OrganizationPackageLicensePolicy entity data model.
#
# @!attribute [rw] allow_unknown_licenses
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] spdx_identifiers
#   @return [Array]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
OrganizationPackageLicensePolicy = Struct.new(
  :allow_unknown_licenses,
  :created_at,
  :description,
  :id,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :slug_perm,
  :spdx_identifiers,
  :updated_at,
  keyword_init: true
)

# Request payload for OrganizationPackageLicensePolicy#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
OrganizationPackageLicensePolicyLoadMatch = Struct.new(
  :id,
  :org_id,
  keyword_init: true
)

# Request payload for OrganizationPackageLicensePolicy#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
OrganizationPackageLicensePolicyListMatch = Struct.new(
  :org_id,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for OrganizationPackageLicensePolicy#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] allow_unknown_licenses
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] spdx_identifiers
#   @return [Array]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
OrganizationPackageLicensePolicyCreateData = Struct.new(
  :org_id,
  :data,
  :allow_unknown_licenses,
  :created_at,
  :description,
  :id,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :slug_perm,
  :spdx_identifiers,
  :updated_at,
  keyword_init: true
)

# Request payload for OrganizationPackageLicensePolicy#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] allow_unknown_licenses
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] spdx_identifiers
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
OrganizationPackageLicensePolicyUpdateData = Struct.new(
  :id,
  :org_id,
  :data,
  :allow_unknown_licenses,
  :created_at,
  :description,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :slug_perm,
  :spdx_identifiers,
  :updated_at,
  keyword_init: true
)

# OrganizationPackageVulnerabilityPolicy entity data model.
#
# @!attribute [rw] allow_unknown_severity
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] min_severity
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
OrganizationPackageVulnerabilityPolicy = Struct.new(
  :allow_unknown_severity,
  :created_at,
  :description,
  :id,
  :min_severity,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :slug_perm,
  :updated_at,
  keyword_init: true
)

# Request payload for OrganizationPackageVulnerabilityPolicy#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
OrganizationPackageVulnerabilityPolicyLoadMatch = Struct.new(
  :id,
  :org_id,
  keyword_init: true
)

# Request payload for OrganizationPackageVulnerabilityPolicy#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
OrganizationPackageVulnerabilityPolicyListMatch = Struct.new(
  :org_id,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for OrganizationPackageVulnerabilityPolicy#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] allow_unknown_severity
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] min_severity
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
OrganizationPackageVulnerabilityPolicyCreateData = Struct.new(
  :org_id,
  :data,
  :allow_unknown_severity,
  :created_at,
  :description,
  :id,
  :min_severity,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :slug_perm,
  :updated_at,
  keyword_init: true
)

# Request payload for OrganizationPackageVulnerabilityPolicy#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] allow_unknown_severity
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] min_severity
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
OrganizationPackageVulnerabilityPolicyUpdateData = Struct.new(
  :id,
  :org_id,
  :data,
  :allow_unknown_severity,
  :created_at,
  :description,
  :min_severity,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :slug_perm,
  :updated_at,
  keyword_init: true
)

# OrganizationSamlAuth entity data model.
#
# @!attribute [rw] saml_auth_enabled
#   @return [Boolean]
#
# @!attribute [rw] saml_auth_enforced
#   @return [Boolean]
#
# @!attribute [rw] saml_metadata_inline
#   @return [String, nil]
#
# @!attribute [rw] saml_metadata_url
#   @return [String, nil]
OrganizationSamlAuth = Struct.new(
  :saml_auth_enabled,
  :saml_auth_enforced,
  :saml_metadata_inline,
  :saml_metadata_url,
  keyword_init: true
)

# Request payload for OrganizationSamlAuth#load.
#
# @!attribute [rw] org_id
#   @return [String]
OrganizationSamlAuthLoadMatch = Struct.new(
  :org_id,
  keyword_init: true
)

# Request payload for OrganizationSamlAuth#update.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] saml_auth_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] saml_auth_enforced
#   @return [Boolean, nil]
#
# @!attribute [rw] saml_metadata_inline
#   @return [String, nil]
#
# @!attribute [rw] saml_metadata_url
#   @return [String, nil]
OrganizationSamlAuthUpdateData = Struct.new(
  :org_id,
  :data,
  :saml_auth_enabled,
  :saml_auth_enforced,
  :saml_metadata_inline,
  :saml_metadata_url,
  keyword_init: true
)

# OrganizationTeam entity data model.
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
OrganizationTeam = Struct.new(
  :description,
  :id,
  :name,
  :slug,
  :slug_perm,
  :visibility,
  keyword_init: true
)

# Request payload for OrganizationTeam#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
OrganizationTeamLoadMatch = Struct.new(
  :id,
  :org_id,
  keyword_init: true
)

# Request payload for OrganizationTeam#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] for_user
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] sort
#   @return [Object, nil]
OrganizationTeamListMatch = Struct.new(
  :org_id,
  :for_user,
  :page,
  :page_size,
  :query,
  :sort,
  keyword_init: true
)

# Request payload for OrganizationTeam#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
OrganizationTeamCreateData = Struct.new(
  :org_id,
  :data,
  :description,
  :id,
  :name,
  :slug,
  :slug_perm,
  :visibility,
  keyword_init: true
)

# Request payload for OrganizationTeam#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] visibility
#   @return [String, nil]
OrganizationTeamUpdateData = Struct.new(
  :id,
  :org_id,
  :data,
  :description,
  :name,
  :slug,
  :slug_perm,
  :visibility,
  keyword_init: true
)

# OrganizationTeamMember entity data model.
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] user
#   @return [String]
OrganizationTeamMember = Struct.new(
  :role,
  :user,
  keyword_init: true
)

# Request payload for OrganizationTeamMember#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] team_id
#   @return [String]
OrganizationTeamMemberListMatch = Struct.new(
  :org_id,
  :team_id,
  keyword_init: true
)

# Request payload for OrganizationTeamMember#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] team_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] role
#   @return [String]
#
# @!attribute [rw] user
#   @return [String]
OrganizationTeamMemberCreateData = Struct.new(
  :org_id,
  :team_id,
  :data,
  :role,
  :user,
  keyword_init: true
)

# Oss entity data model.
class Oss
end

# P2n entity data model.
class P2n
end

# Package entity data model.
#
# @!attribute [rw] active
#   @return [Integer, nil]
#
# @!attribute [rw] architectures
#   @return [Array, nil]
#
# @!attribute [rw] backend_kind
#   @return [Integer, nil]
#
# @!attribute [rw] bandwidth
#   @return [Hash]
#
# @!attribute [rw] cdn_url
#   @return [String, nil]
#
# @!attribute [rw] checksum_md5
#   @return [String, nil]
#
# @!attribute [rw] checksum_sha1
#   @return [String, nil]
#
# @!attribute [rw] checksum_sha256
#   @return [String, nil]
#
# @!attribute [rw] checksum_sha512
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer]
#
# @!attribute [rw] dep_type
#   @return [String, nil]
#
# @!attribute [rw] dependencies_checksum_md5
#   @return [String, nil]
#
# @!attribute [rw] dependencies_url
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] distro
#   @return [Hash]
#
# @!attribute [rw] distro_version
#   @return [Hash, nil]
#
# @!attribute [rw] downloads
#   @return [Hash]
#
# @!attribute [rw] epoch
#   @return [Integer, nil]
#
# @!attribute [rw] extension
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] format_url
#   @return [String, nil]
#
# @!attribute [rw] freeable_storage
#   @return [Integer, nil]
#
# @!attribute [rw] fully_qualified_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier_perm
#   @return [String, nil]
#
# @!attribute [rw] identifiers
#   @return [Hash, nil]
#
# @!attribute [rw] inactive
#   @return [Integer, nil]
#
# @!attribute [rw] indexed
#   @return [Boolean, nil]
#
# @!attribute [rw] is_cancellable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_copyable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_deleteable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_downloadable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_moveable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_quarantinable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_quarantined
#   @return [Boolean, nil]
#
# @!attribute [rw] is_resyncable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_security_scannable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_awaiting
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_completed
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_failed
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_in_flight
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_in_progress
#   @return [Boolean, nil]
#
# @!attribute [rw] last_push
#   @return [String]
#
# @!attribute [rw] license
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] namespace_url
#   @return [String, nil]
#
# @!attribute [rw] num_downloads
#   @return [Integer]
#
# @!attribute [rw] num_files
#   @return [Integer, nil]
#
# @!attribute [rw] operator
#   @return [String, nil]
#
# @!attribute [rw] origin_repository
#   @return [String, nil]
#
# @!attribute [rw] origin_repository_url
#   @return [String, nil]
#
# @!attribute [rw] package_type
#   @return [Integer, nil]
#
# @!attribute [rw] policy_violated
#   @return [Boolean, nil]
#
# @!attribute [rw] release
#   @return [String, nil]
#
# @!attribute [rw] repository
#   @return [String, nil]
#
# @!attribute [rw] repository_url
#   @return [String, nil]
#
# @!attribute [rw] security_scan_completed_at
#   @return [String, nil]
#
# @!attribute [rw] security_scan_started_at
#   @return [String, nil]
#
# @!attribute [rw] security_scan_status
#   @return [String, nil]
#
# @!attribute [rw] security_scan_status_updated_at
#   @return [String, nil]
#
# @!attribute [rw] self_html_url
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] signature_url
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [Integer, nil]
#
# @!attribute [rw] stage_str
#   @return [String, nil]
#
# @!attribute [rw] stage_updated_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] status_reason
#   @return [String, nil]
#
# @!attribute [rw] status_str
#   @return [String, nil]
#
# @!attribute [rw] status_updated_at
#   @return [String, nil]
#
# @!attribute [rw] status_url
#   @return [String, nil]
#
# @!attribute [rw] subtype
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] sync_finished_at
#   @return [String, nil]
#
# @!attribute [rw] sync_progress
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Hash, nil]
#
# @!attribute [rw] tags_immutable
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] type_display
#   @return [String, nil]
#
# @!attribute [rw] uploaded_at
#   @return [String, nil]
#
# @!attribute [rw] uploader
#   @return [String, nil]
#
# @!attribute [rw] uploader_url
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
#
# @!attribute [rw] version_orig
#   @return [String, nil]
#
# @!attribute [rw] vulnerability_scan_results_url
#   @return [String, nil]
Package = Struct.new(
  :active,
  :architectures,
  :backend_kind,
  :bandwidth,
  :cdn_url,
  :checksum_md5,
  :checksum_sha1,
  :checksum_sha256,
  :checksum_sha512,
  :count,
  :dep_type,
  :dependencies_checksum_md5,
  :dependencies_url,
  :description,
  :display_name,
  :distro,
  :distro_version,
  :downloads,
  :epoch,
  :extension,
  :filename,
  :files,
  :format,
  :format_url,
  :freeable_storage,
  :fully_qualified_name,
  :id,
  :identifier_perm,
  :identifiers,
  :inactive,
  :indexed,
  :is_cancellable,
  :is_copyable,
  :is_deleteable,
  :is_downloadable,
  :is_moveable,
  :is_quarantinable,
  :is_quarantined,
  :is_resyncable,
  :is_security_scannable,
  :is_sync_awaiting,
  :is_sync_completed,
  :is_sync_failed,
  :is_sync_in_flight,
  :is_sync_in_progress,
  :last_push,
  :license,
  :name,
  :namespace,
  :namespace_url,
  :num_downloads,
  :num_files,
  :operator,
  :origin_repository,
  :origin_repository_url,
  :package_type,
  :policy_violated,
  :release,
  :repository,
  :repository_url,
  :security_scan_completed_at,
  :security_scan_started_at,
  :security_scan_status,
  :security_scan_status_updated_at,
  :self_html_url,
  :self_url,
  :signature_url,
  :size,
  :slug,
  :slug_perm,
  :stage,
  :stage_str,
  :stage_updated_at,
  :status,
  :status_reason,
  :status_str,
  :status_updated_at,
  :status_url,
  :subtype,
  :summary,
  :sync_finished_at,
  :sync_progress,
  :tags,
  :tags_immutable,
  :total,
  :type_display,
  :uploaded_at,
  :uploader,
  :uploader_url,
  :version,
  :version_orig,
  :vulnerability_scan_results_url,
  keyword_init: true
)

# Request payload for Package#load.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] finish
#   @return [Object, nil]
#
# @!attribute [rw] package
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] start
#   @return [Object, nil]
#
# @!attribute [rw] identifier
#   @return [Object, nil]
PackageLoadMatch = Struct.new(
  :owner,
  :repo,
  :finish,
  :package,
  :page,
  :page_size,
  :start,
  :identifier,
  keyword_init: true
)

# Request payload for Package#list.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] group_by
#   @return [Object, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] sort
#   @return [Object, nil]
#
# @!attribute [rw] identifier
#   @return [Object, nil]
PackageListMatch = Struct.new(
  :owner,
  :repo,
  :group_by,
  :page,
  :page_size,
  :query,
  :sort,
  :identifier,
  keyword_init: true
)

# Request payload for Package#create.
#
# @!attribute [rw] identifier
#   @return [Object, nil]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] active
#   @return [Integer, nil]
#
# @!attribute [rw] architectures
#   @return [Array, nil]
#
# @!attribute [rw] backend_kind
#   @return [Integer, nil]
#
# @!attribute [rw] bandwidth
#   @return [Hash]
#
# @!attribute [rw] cdn_url
#   @return [String, nil]
#
# @!attribute [rw] checksum_md5
#   @return [String, nil]
#
# @!attribute [rw] checksum_sha1
#   @return [String, nil]
#
# @!attribute [rw] checksum_sha256
#   @return [String, nil]
#
# @!attribute [rw] checksum_sha512
#   @return [String, nil]
#
# @!attribute [rw] count
#   @return [Integer]
#
# @!attribute [rw] dep_type
#   @return [String, nil]
#
# @!attribute [rw] dependencies_checksum_md5
#   @return [String, nil]
#
# @!attribute [rw] dependencies_url
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] display_name
#   @return [String, nil]
#
# @!attribute [rw] distro
#   @return [Hash]
#
# @!attribute [rw] distro_version
#   @return [Hash, nil]
#
# @!attribute [rw] downloads
#   @return [Hash]
#
# @!attribute [rw] epoch
#   @return [Integer, nil]
#
# @!attribute [rw] extension
#   @return [String, nil]
#
# @!attribute [rw] filename
#   @return [String, nil]
#
# @!attribute [rw] files
#   @return [Array, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] format_url
#   @return [String, nil]
#
# @!attribute [rw] freeable_storage
#   @return [Integer, nil]
#
# @!attribute [rw] fully_qualified_name
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier_perm
#   @return [String, nil]
#
# @!attribute [rw] identifiers
#   @return [Hash, nil]
#
# @!attribute [rw] inactive
#   @return [Integer, nil]
#
# @!attribute [rw] indexed
#   @return [Boolean, nil]
#
# @!attribute [rw] is_cancellable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_copyable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_deleteable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_downloadable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_moveable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_quarantinable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_quarantined
#   @return [Boolean, nil]
#
# @!attribute [rw] is_resyncable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_security_scannable
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_awaiting
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_completed
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_failed
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_in_flight
#   @return [Boolean, nil]
#
# @!attribute [rw] is_sync_in_progress
#   @return [Boolean, nil]
#
# @!attribute [rw] last_push
#   @return [String]
#
# @!attribute [rw] license
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] namespace_url
#   @return [String, nil]
#
# @!attribute [rw] num_downloads
#   @return [Integer]
#
# @!attribute [rw] num_files
#   @return [Integer, nil]
#
# @!attribute [rw] operator
#   @return [String, nil]
#
# @!attribute [rw] origin_repository
#   @return [String, nil]
#
# @!attribute [rw] origin_repository_url
#   @return [String, nil]
#
# @!attribute [rw] package_type
#   @return [Integer, nil]
#
# @!attribute [rw] policy_violated
#   @return [Boolean, nil]
#
# @!attribute [rw] release
#   @return [String, nil]
#
# @!attribute [rw] repository
#   @return [String, nil]
#
# @!attribute [rw] repository_url
#   @return [String, nil]
#
# @!attribute [rw] security_scan_completed_at
#   @return [String, nil]
#
# @!attribute [rw] security_scan_started_at
#   @return [String, nil]
#
# @!attribute [rw] security_scan_status
#   @return [String, nil]
#
# @!attribute [rw] security_scan_status_updated_at
#   @return [String, nil]
#
# @!attribute [rw] self_html_url
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] signature_url
#   @return [String, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] stage
#   @return [Integer, nil]
#
# @!attribute [rw] stage_str
#   @return [String, nil]
#
# @!attribute [rw] stage_updated_at
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [Integer, nil]
#
# @!attribute [rw] status_reason
#   @return [String, nil]
#
# @!attribute [rw] status_str
#   @return [String, nil]
#
# @!attribute [rw] status_updated_at
#   @return [String, nil]
#
# @!attribute [rw] status_url
#   @return [String, nil]
#
# @!attribute [rw] subtype
#   @return [String, nil]
#
# @!attribute [rw] summary
#   @return [String, nil]
#
# @!attribute [rw] sync_finished_at
#   @return [String, nil]
#
# @!attribute [rw] sync_progress
#   @return [Integer, nil]
#
# @!attribute [rw] tags
#   @return [Hash, nil]
#
# @!attribute [rw] tags_immutable
#   @return [Hash, nil]
#
# @!attribute [rw] total
#   @return [Integer, nil]
#
# @!attribute [rw] type_display
#   @return [String, nil]
#
# @!attribute [rw] uploaded_at
#   @return [String, nil]
#
# @!attribute [rw] uploader
#   @return [String, nil]
#
# @!attribute [rw] uploader_url
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
#
# @!attribute [rw] version_orig
#   @return [String, nil]
#
# @!attribute [rw] vulnerability_scan_results_url
#   @return [String, nil]
PackageCreateData = Struct.new(
  :identifier,
  :owner,
  :repo,
  :data,
  :active,
  :architectures,
  :backend_kind,
  :bandwidth,
  :cdn_url,
  :checksum_md5,
  :checksum_sha1,
  :checksum_sha256,
  :checksum_sha512,
  :count,
  :dep_type,
  :dependencies_checksum_md5,
  :dependencies_url,
  :description,
  :display_name,
  :distro,
  :distro_version,
  :downloads,
  :epoch,
  :extension,
  :filename,
  :files,
  :format,
  :format_url,
  :freeable_storage,
  :fully_qualified_name,
  :id,
  :identifier_perm,
  :identifiers,
  :inactive,
  :indexed,
  :is_cancellable,
  :is_copyable,
  :is_deleteable,
  :is_downloadable,
  :is_moveable,
  :is_quarantinable,
  :is_quarantined,
  :is_resyncable,
  :is_security_scannable,
  :is_sync_awaiting,
  :is_sync_completed,
  :is_sync_failed,
  :is_sync_in_flight,
  :is_sync_in_progress,
  :last_push,
  :license,
  :name,
  :namespace,
  :namespace_url,
  :num_downloads,
  :num_files,
  :operator,
  :origin_repository,
  :origin_repository_url,
  :package_type,
  :policy_violated,
  :release,
  :repository,
  :repository_url,
  :security_scan_completed_at,
  :security_scan_started_at,
  :security_scan_status,
  :security_scan_status_updated_at,
  :self_html_url,
  :self_url,
  :signature_url,
  :size,
  :slug,
  :slug_perm,
  :stage,
  :stage_str,
  :stage_updated_at,
  :status,
  :status_reason,
  :status_str,
  :status_updated_at,
  :status_url,
  :subtype,
  :summary,
  :sync_finished_at,
  :sync_progress,
  :tags,
  :tags_immutable,
  :total,
  :type_display,
  :uploaded_at,
  :uploader,
  :uploader_url,
  :version,
  :version_orig,
  :vulnerability_scan_results_url,
  keyword_init: true
)

# Request payload for Package#remove.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
PackageRemoveMatch = Struct.new(
  :identifier,
  :owner,
  :repo,
  keyword_init: true
)

# PackageDenyPolicy entity data model.
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] package_query_string
#   @return [String]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
PackageDenyPolicy = Struct.new(
  :action,
  :created_at,
  :description,
  :enabled,
  :id,
  :name,
  :package_query_string,
  :slug_perm,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for PackageDenyPolicy#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
PackageDenyPolicyLoadMatch = Struct.new(
  :id,
  :org_id,
  keyword_init: true
)

# Request payload for PackageDenyPolicy#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
PackageDenyPolicyListMatch = Struct.new(
  :org_id,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for PackageDenyPolicy#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] package_query_string
#   @return [String]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
PackageDenyPolicyCreateData = Struct.new(
  :org_id,
  :data,
  :action,
  :created_at,
  :description,
  :enabled,
  :id,
  :name,
  :package_query_string,
  :slug_perm,
  :status,
  :updated_at,
  keyword_init: true
)

# Request payload for PackageDenyPolicy#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] action
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
PackageDenyPolicyUpdateData = Struct.new(
  :id,
  :org_id,
  :data,
  :action,
  :created_at,
  :description,
  :enabled,
  :name,
  :package_query_string,
  :slug_perm,
  :status,
  :updated_at,
  keyword_init: true
)

# PackageFilePartsUpload entity data model.
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] upload_querystring
#   @return [String, nil]
#
# @!attribute [rw] upload_url
#   @return [String, nil]
PackageFilePartsUpload = Struct.new(
  :identifier,
  :upload_querystring,
  :upload_url,
  keyword_init: true
)

# Request payload for PackageFilePartsUpload#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] filename
#   @return [Object]
#
# @!attribute [rw] part_number
#   @return [Integer, nil]
PackageFilePartsUploadLoadMatch = Struct.new(
  :identifier,
  :owner,
  :repo,
  :filename,
  :part_number,
  keyword_init: true
)

# PackageFileUpload entity data model.
class PackageFileUpload
end

# Request payload for PackageFileUpload#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
PackageFileUploadCreateData = Struct.new(
  :identifier,
  :owner,
  :repo,
  :data,
  keyword_init: true
)

# PackageLicensePolicyEvaluation entity data model.
#
# @!attribute [rw] allow_unknown_licenses
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] evaluation_count
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] policy
#   @return [Hash]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] spdx_identifiers
#   @return [Array]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] violation_count
#   @return [Integer, nil]
PackageLicensePolicyEvaluation = Struct.new(
  :allow_unknown_licenses,
  :created_at,
  :description,
  :evaluation_count,
  :id,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :policy,
  :slug_perm,
  :spdx_identifiers,
  :status,
  :updated_at,
  :url,
  :violation_count,
  keyword_init: true
)

# Request payload for PackageLicensePolicyEvaluation#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] license_policy_id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
PackageLicensePolicyEvaluationLoadMatch = Struct.new(
  :id,
  :license_policy_id,
  :org_id,
  keyword_init: true
)

# Request payload for PackageLicensePolicyEvaluation#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] policy_slug_perm
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
PackageLicensePolicyEvaluationListMatch = Struct.new(
  :org_id,
  :policy_slug_perm,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for PackageLicensePolicyEvaluation#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] policy_slug_perm
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] allow_unknown_licenses
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] evaluation_count
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] policy
#   @return [Hash]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] spdx_identifiers
#   @return [Array]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] violation_count
#   @return [Integer, nil]
PackageLicensePolicyEvaluationCreateData = Struct.new(
  :org_id,
  :policy_slug_perm,
  :data,
  :allow_unknown_licenses,
  :created_at,
  :description,
  :evaluation_count,
  :id,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :policy,
  :slug_perm,
  :spdx_identifiers,
  :status,
  :updated_at,
  :url,
  :violation_count,
  keyword_init: true
)

# PackageVersionBadge entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
PackageVersionBadge = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for PackageVersionBadge#load.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] package_format
#   @return [Object]
#
# @!attribute [rw] package_identifier
#   @return [Object]
#
# @!attribute [rw] package_name
#   @return [Object]
#
# @!attribute [rw] package_version
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] badge_token
#   @return [Object, nil]
#
# @!attribute [rw] cache_second
#   @return [Object, nil]
#
# @!attribute [rw] color
#   @return [Object, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] label_color
#   @return [Object, nil]
#
# @!attribute [rw] logo_color
#   @return [Object, nil]
#
# @!attribute [rw] logo_width
#   @return [Object, nil]
#
# @!attribute [rw] render
#   @return [Object, nil]
#
# @!attribute [rw] shield
#   @return [Object, nil]
#
# @!attribute [rw] show_latest
#   @return [Object, nil]
#
# @!attribute [rw] style
#   @return [Object, nil]
PackageVersionBadgeLoadMatch = Struct.new(
  :owner,
  :package_format,
  :package_identifier,
  :package_name,
  :package_version,
  :repo,
  :badge_token,
  :cache_second,
  :color,
  :label,
  :label_color,
  :logo_color,
  :logo_width,
  :render,
  :shield,
  :show_latest,
  :style,
  keyword_init: true
)

# PackageVulnerabilityPolicyEvaluation entity data model.
#
# @!attribute [rw] allow_unknown_severity
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] evaluation_count
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] min_severity
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] policy
#   @return [Hash, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] violation_count
#   @return [Integer, nil]
PackageVulnerabilityPolicyEvaluation = Struct.new(
  :allow_unknown_severity,
  :created_at,
  :description,
  :evaluation_count,
  :id,
  :min_severity,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :policy,
  :slug_perm,
  :status,
  :updated_at,
  :url,
  :violation_count,
  keyword_init: true
)

# Request payload for PackageVulnerabilityPolicyEvaluation#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] vulnerability_policy_id
#   @return [String]
PackageVulnerabilityPolicyEvaluationLoadMatch = Struct.new(
  :id,
  :org_id,
  :vulnerability_policy_id,
  keyword_init: true
)

# Request payload for PackageVulnerabilityPolicyEvaluation#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] policy_slug_perm
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
PackageVulnerabilityPolicyEvaluationListMatch = Struct.new(
  :org_id,
  :policy_slug_perm,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for PackageVulnerabilityPolicyEvaluation#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] policy_slug_perm
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] allow_unknown_severity
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] evaluation_count
#   @return [Integer, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] min_severity
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] on_violation_quarantine
#   @return [Boolean, nil]
#
# @!attribute [rw] package_query_string
#   @return [String, nil]
#
# @!attribute [rw] policy
#   @return [Hash, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] status
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
#
# @!attribute [rw] violation_count
#   @return [Integer, nil]
PackageVulnerabilityPolicyEvaluationCreateData = Struct.new(
  :org_id,
  :policy_slug_perm,
  :data,
  :allow_unknown_severity,
  :created_at,
  :description,
  :evaluation_count,
  :id,
  :min_severity,
  :name,
  :on_violation_quarantine,
  :package_query_string,
  :policy,
  :slug_perm,
  :status,
  :updated_at,
  :url,
  :violation_count,
  keyword_init: true
)

# Privilege entity data model.
class Privilege
end

# Profile entity data model.
class Profile
end

# ProviderSetting entity data model.
#
# @!attribute [rw] claims
#   @return [Hash]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] mapping_claim
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] provider_url
#   @return [String]
#
# @!attribute [rw] service_accounts
#   @return [Array, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
ProviderSetting = Struct.new(
  :claims,
  :enabled,
  :mapping_claim,
  :name,
  :provider_url,
  :service_accounts,
  :slug,
  :slug_perm,
  keyword_init: true
)

# Request payload for ProviderSetting#load.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] slug_perm
#   @return [Object]
ProviderSettingLoadMatch = Struct.new(
  :org_id,
  :slug_perm,
  keyword_init: true
)

# Request payload for ProviderSetting#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] sort
#   @return [Object, nil]
ProviderSettingListMatch = Struct.new(
  :org_id,
  :page,
  :page_size,
  :query,
  :sort,
  keyword_init: true
)

# ProviderSettingsWrite entity data model.
#
# @!attribute [rw] claims
#   @return [Hash]
#
# @!attribute [rw] dynamic_mappings
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] mapping_claim
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] provider_url
#   @return [String]
#
# @!attribute [rw] service_accounts
#   @return [Array, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
ProviderSettingsWrite = Struct.new(
  :claims,
  :dynamic_mappings,
  :enabled,
  :mapping_claim,
  :name,
  :provider_url,
  :service_accounts,
  :slug,
  :slug_perm,
  keyword_init: true
)

# Request payload for ProviderSettingsWrite#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] claims
#   @return [Hash]
#
# @!attribute [rw] dynamic_mappings
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean]
#
# @!attribute [rw] mapping_claim
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] provider_url
#   @return [String]
#
# @!attribute [rw] service_accounts
#   @return [Array, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
ProviderSettingsWriteCreateData = Struct.new(
  :org_id,
  :data,
  :claims,
  :dynamic_mappings,
  :enabled,
  :mapping_claim,
  :name,
  :provider_url,
  :service_accounts,
  :slug,
  :slug_perm,
  keyword_init: true
)

# Request payload for ProviderSettingsWrite#update.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] slug_perm
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] claims
#   @return [Hash, nil]
#
# @!attribute [rw] dynamic_mappings
#   @return [Array, nil]
#
# @!attribute [rw] enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] mapping_claim
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] provider_url
#   @return [String, nil]
#
# @!attribute [rw] service_accounts
#   @return [Array, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
ProviderSettingsWriteUpdateData = Struct.new(
  :org_id,
  :slug_perm,
  :data,
  :claims,
  :dynamic_mappings,
  :enabled,
  :mapping_claim,
  :name,
  :provider_url,
  :service_accounts,
  :slug,
  keyword_init: true
)

# Python entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Python = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Python#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
PythonLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Python#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
PythonListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Python#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
PythonCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Python#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
PythonUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Quarantine entity data model.
class Quarantine
end

# Quota entity data model.
#
# @!attribute [rw] display
#   @return [Hash]
#
# @!attribute [rw] history
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] raw
#   @return [Hash]
Quota = Struct.new(
  :display,
  :history,
  :id,
  :raw,
  keyword_init: true
)

# Request payload for Quota#load.
#
# @!attribute [rw] id
#   @return [String]
QuotaLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Raw entity data model.
class Raw
end

# Refresh entity data model.
class Refresh
end

# Regenerate entity data model.
class Regenerate
end

# Repo entity data model.
#
# @!attribute [rw] cdn_url
#   @return [String, nil]
#
# @!attribute [rw] content_kind
#   @return [String, nil]
#
# @!attribute [rw] contextual_auth_realm
#   @return [Boolean, nil]
#
# @!attribute [rw] copy_own
#   @return [Boolean, nil]
#
# @!attribute [rw] copy_packages
#   @return [String, nil]
#
# @!attribute [rw] cosign_signing_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_privilege
#   @return [String, nil]
#
# @!attribute [rw] delete_own
#   @return [Boolean, nil]
#
# @!attribute [rw] delete_packages
#   @return [String, nil]
#
# @!attribute [rw] deleted_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] distributes
#   @return [Array, nil]
#
# @!attribute [rw] docker_refresh_tokens_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] ecdsa_keys
#   @return [Array, nil]
#
# @!attribute [rw] enforce_eula
#   @return [Boolean, nil]
#
# @!attribute [rw] gpg_keys
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] index_files
#   @return [Boolean, nil]
#
# @!attribute [rw] is_open_source
#   @return [Boolean, nil]
#
# @!attribute [rw] is_private
#   @return [Boolean, nil]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] manage_entitlements_privilege
#   @return [String, nil]
#
# @!attribute [rw] move_own
#   @return [Boolean, nil]
#
# @!attribute [rw] move_packages
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] namespace_url
#   @return [String, nil]
#
# @!attribute [rw] nuget_native_signing_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] num_downloads
#   @return [Integer, nil]
#
# @!attribute [rw] num_policy_violated_packages
#   @return [Integer, nil]
#
# @!attribute [rw] num_quarantined_packages
#   @return [Integer, nil]
#
# @!attribute [rw] open_source_license
#   @return [String, nil]
#
# @!attribute [rw] open_source_project_url
#   @return [String, nil]
#
# @!attribute [rw] package_count
#   @return [Integer, nil]
#
# @!attribute [rw] package_group_count
#   @return [Integer, nil]
#
# @!attribute [rw] proxy_npmjs
#   @return [Boolean, nil]
#
# @!attribute [rw] proxy_pypi
#   @return [Boolean, nil]
#
# @!attribute [rw] raw_package_index_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] raw_package_index_signatures_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] replace_packages
#   @return [String, nil]
#
# @!attribute [rw] replace_packages_by_default
#   @return [Boolean, nil]
#
# @!attribute [rw] repository_type
#   @return [Integer, nil]
#
# @!attribute [rw] repository_type_str
#   @return [String, nil]
#
# @!attribute [rw] resync_own
#   @return [Boolean, nil]
#
# @!attribute [rw] resync_packages
#   @return [String, nil]
#
# @!attribute [rw] scan_own
#   @return [Boolean, nil]
#
# @!attribute [rw] scan_packages
#   @return [String, nil]
#
# @!attribute [rw] self_html_url
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] show_setup_all
#   @return [Boolean, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] size_str
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] storage_region
#   @return [String, nil]
#
# @!attribute [rw] strict_npm_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] tag_pre_releases_as_latest
#   @return [Boolean, nil]
#
# @!attribute [rw] use_debian_labels
#   @return [Boolean, nil]
#
# @!attribute [rw] use_default_cargo_upstream
#   @return [Boolean, nil]
#
# @!attribute [rw] use_entitlements_privilege
#   @return [String, nil]
#
# @!attribute [rw] use_noarch_packages
#   @return [Boolean, nil]
#
# @!attribute [rw] use_source_packages
#   @return [Boolean, nil]
#
# @!attribute [rw] use_vulnerability_scanning
#   @return [Boolean, nil]
#
# @!attribute [rw] user_entitlements_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] view_statistics
#   @return [String, nil]
Repo = Struct.new(
  :cdn_url,
  :content_kind,
  :contextual_auth_realm,
  :copy_own,
  :copy_packages,
  :cosign_signing_enabled,
  :created_at,
  :default_privilege,
  :delete_own,
  :delete_packages,
  :deleted_at,
  :description,
  :distributes,
  :docker_refresh_tokens_enabled,
  :ecdsa_keys,
  :enforce_eula,
  :gpg_keys,
  :id,
  :index_files,
  :is_open_source,
  :is_private,
  :is_public,
  :manage_entitlements_privilege,
  :move_own,
  :move_packages,
  :name,
  :namespace,
  :namespace_url,
  :nuget_native_signing_enabled,
  :num_downloads,
  :num_policy_violated_packages,
  :num_quarantined_packages,
  :open_source_license,
  :open_source_project_url,
  :package_count,
  :package_group_count,
  :proxy_npmjs,
  :proxy_pypi,
  :raw_package_index_enabled,
  :raw_package_index_signatures_enabled,
  :replace_packages,
  :replace_packages_by_default,
  :repository_type,
  :repository_type_str,
  :resync_own,
  :resync_packages,
  :scan_own,
  :scan_packages,
  :self_html_url,
  :self_url,
  :show_setup_all,
  :size,
  :size_str,
  :slug,
  :slug_perm,
  :storage_region,
  :strict_npm_validation,
  :tag_pre_releases_as_latest,
  :use_debian_labels,
  :use_default_cargo_upstream,
  :use_entitlements_privilege,
  :use_noarch_packages,
  :use_source_packages,
  :use_vulnerability_scanning,
  :user_entitlements_enabled,
  :view_statistics,
  keyword_init: true
)

# Request payload for Repo#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
RepoLoadMatch = Struct.new(
  :id,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Repo#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
RepoListMatch = Struct.new(
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Repo#create.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] cdn_url
#   @return [String, nil]
#
# @!attribute [rw] content_kind
#   @return [String, nil]
#
# @!attribute [rw] contextual_auth_realm
#   @return [Boolean, nil]
#
# @!attribute [rw] copy_own
#   @return [Boolean, nil]
#
# @!attribute [rw] copy_packages
#   @return [String, nil]
#
# @!attribute [rw] cosign_signing_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_privilege
#   @return [String, nil]
#
# @!attribute [rw] delete_own
#   @return [Boolean, nil]
#
# @!attribute [rw] delete_packages
#   @return [String, nil]
#
# @!attribute [rw] deleted_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] distributes
#   @return [Array, nil]
#
# @!attribute [rw] docker_refresh_tokens_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] ecdsa_keys
#   @return [Array, nil]
#
# @!attribute [rw] enforce_eula
#   @return [Boolean, nil]
#
# @!attribute [rw] gpg_keys
#   @return [Array, nil]
#
# @!attribute [rw] index_files
#   @return [Boolean, nil]
#
# @!attribute [rw] is_open_source
#   @return [Boolean, nil]
#
# @!attribute [rw] is_private
#   @return [Boolean, nil]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] manage_entitlements_privilege
#   @return [String, nil]
#
# @!attribute [rw] move_own
#   @return [Boolean, nil]
#
# @!attribute [rw] move_packages
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] namespace_url
#   @return [String, nil]
#
# @!attribute [rw] nuget_native_signing_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] num_downloads
#   @return [Integer, nil]
#
# @!attribute [rw] num_policy_violated_packages
#   @return [Integer, nil]
#
# @!attribute [rw] num_quarantined_packages
#   @return [Integer, nil]
#
# @!attribute [rw] open_source_license
#   @return [String, nil]
#
# @!attribute [rw] open_source_project_url
#   @return [String, nil]
#
# @!attribute [rw] package_count
#   @return [Integer, nil]
#
# @!attribute [rw] package_group_count
#   @return [Integer, nil]
#
# @!attribute [rw] proxy_npmjs
#   @return [Boolean, nil]
#
# @!attribute [rw] proxy_pypi
#   @return [Boolean, nil]
#
# @!attribute [rw] raw_package_index_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] raw_package_index_signatures_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] replace_packages
#   @return [String, nil]
#
# @!attribute [rw] replace_packages_by_default
#   @return [Boolean, nil]
#
# @!attribute [rw] repository_type
#   @return [Integer, nil]
#
# @!attribute [rw] repository_type_str
#   @return [String, nil]
#
# @!attribute [rw] resync_own
#   @return [Boolean, nil]
#
# @!attribute [rw] resync_packages
#   @return [String, nil]
#
# @!attribute [rw] scan_own
#   @return [Boolean, nil]
#
# @!attribute [rw] scan_packages
#   @return [String, nil]
#
# @!attribute [rw] self_html_url
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] show_setup_all
#   @return [Boolean, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] size_str
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] storage_region
#   @return [String, nil]
#
# @!attribute [rw] strict_npm_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] tag_pre_releases_as_latest
#   @return [Boolean, nil]
#
# @!attribute [rw] use_debian_labels
#   @return [Boolean, nil]
#
# @!attribute [rw] use_default_cargo_upstream
#   @return [Boolean, nil]
#
# @!attribute [rw] use_entitlements_privilege
#   @return [String, nil]
#
# @!attribute [rw] use_noarch_packages
#   @return [Boolean, nil]
#
# @!attribute [rw] use_source_packages
#   @return [Boolean, nil]
#
# @!attribute [rw] use_vulnerability_scanning
#   @return [Boolean, nil]
#
# @!attribute [rw] user_entitlements_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] view_statistics
#   @return [String, nil]
RepoCreateData = Struct.new(
  :id,
  :data,
  :cdn_url,
  :content_kind,
  :contextual_auth_realm,
  :copy_own,
  :copy_packages,
  :cosign_signing_enabled,
  :created_at,
  :default_privilege,
  :delete_own,
  :delete_packages,
  :deleted_at,
  :description,
  :distributes,
  :docker_refresh_tokens_enabled,
  :ecdsa_keys,
  :enforce_eula,
  :gpg_keys,
  :index_files,
  :is_open_source,
  :is_private,
  :is_public,
  :manage_entitlements_privilege,
  :move_own,
  :move_packages,
  :name,
  :namespace,
  :namespace_url,
  :nuget_native_signing_enabled,
  :num_downloads,
  :num_policy_violated_packages,
  :num_quarantined_packages,
  :open_source_license,
  :open_source_project_url,
  :package_count,
  :package_group_count,
  :proxy_npmjs,
  :proxy_pypi,
  :raw_package_index_enabled,
  :raw_package_index_signatures_enabled,
  :replace_packages,
  :replace_packages_by_default,
  :repository_type,
  :repository_type_str,
  :resync_own,
  :resync_packages,
  :scan_own,
  :scan_packages,
  :self_html_url,
  :self_url,
  :show_setup_all,
  :size,
  :size_str,
  :slug,
  :slug_perm,
  :storage_region,
  :strict_npm_validation,
  :tag_pre_releases_as_latest,
  :use_debian_labels,
  :use_default_cargo_upstream,
  :use_entitlements_privilege,
  :use_noarch_packages,
  :use_source_packages,
  :use_vulnerability_scanning,
  :user_entitlements_enabled,
  :view_statistics,
  keyword_init: true
)

# Request payload for Repo#update.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] cdn_url
#   @return [String, nil]
#
# @!attribute [rw] content_kind
#   @return [String, nil]
#
# @!attribute [rw] contextual_auth_realm
#   @return [Boolean, nil]
#
# @!attribute [rw] copy_own
#   @return [Boolean, nil]
#
# @!attribute [rw] copy_packages
#   @return [String, nil]
#
# @!attribute [rw] cosign_signing_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default_privilege
#   @return [String, nil]
#
# @!attribute [rw] delete_own
#   @return [Boolean, nil]
#
# @!attribute [rw] delete_packages
#   @return [String, nil]
#
# @!attribute [rw] deleted_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] distributes
#   @return [Array, nil]
#
# @!attribute [rw] docker_refresh_tokens_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] ecdsa_keys
#   @return [Array, nil]
#
# @!attribute [rw] enforce_eula
#   @return [Boolean, nil]
#
# @!attribute [rw] gpg_keys
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] index_files
#   @return [Boolean, nil]
#
# @!attribute [rw] is_open_source
#   @return [Boolean, nil]
#
# @!attribute [rw] is_private
#   @return [Boolean, nil]
#
# @!attribute [rw] is_public
#   @return [Boolean, nil]
#
# @!attribute [rw] manage_entitlements_privilege
#   @return [String, nil]
#
# @!attribute [rw] move_own
#   @return [Boolean, nil]
#
# @!attribute [rw] move_packages
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] namespace
#   @return [String, nil]
#
# @!attribute [rw] namespace_url
#   @return [String, nil]
#
# @!attribute [rw] nuget_native_signing_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] num_downloads
#   @return [Integer, nil]
#
# @!attribute [rw] num_policy_violated_packages
#   @return [Integer, nil]
#
# @!attribute [rw] num_quarantined_packages
#   @return [Integer, nil]
#
# @!attribute [rw] open_source_license
#   @return [String, nil]
#
# @!attribute [rw] open_source_project_url
#   @return [String, nil]
#
# @!attribute [rw] package_count
#   @return [Integer, nil]
#
# @!attribute [rw] package_group_count
#   @return [Integer, nil]
#
# @!attribute [rw] proxy_npmjs
#   @return [Boolean, nil]
#
# @!attribute [rw] proxy_pypi
#   @return [Boolean, nil]
#
# @!attribute [rw] raw_package_index_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] raw_package_index_signatures_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] replace_packages
#   @return [String, nil]
#
# @!attribute [rw] replace_packages_by_default
#   @return [Boolean, nil]
#
# @!attribute [rw] repository_type
#   @return [Integer, nil]
#
# @!attribute [rw] repository_type_str
#   @return [String, nil]
#
# @!attribute [rw] resync_own
#   @return [Boolean, nil]
#
# @!attribute [rw] resync_packages
#   @return [String, nil]
#
# @!attribute [rw] scan_own
#   @return [Boolean, nil]
#
# @!attribute [rw] scan_packages
#   @return [String, nil]
#
# @!attribute [rw] self_html_url
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] show_setup_all
#   @return [Boolean, nil]
#
# @!attribute [rw] size
#   @return [Integer, nil]
#
# @!attribute [rw] size_str
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] storage_region
#   @return [String, nil]
#
# @!attribute [rw] strict_npm_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] tag_pre_releases_as_latest
#   @return [Boolean, nil]
#
# @!attribute [rw] use_debian_labels
#   @return [Boolean, nil]
#
# @!attribute [rw] use_default_cargo_upstream
#   @return [Boolean, nil]
#
# @!attribute [rw] use_entitlements_privilege
#   @return [String, nil]
#
# @!attribute [rw] use_noarch_packages
#   @return [Boolean, nil]
#
# @!attribute [rw] use_source_packages
#   @return [Boolean, nil]
#
# @!attribute [rw] use_vulnerability_scanning
#   @return [Boolean, nil]
#
# @!attribute [rw] user_entitlements_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] view_statistics
#   @return [String, nil]
RepoUpdateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :cdn_url,
  :content_kind,
  :contextual_auth_realm,
  :copy_own,
  :copy_packages,
  :cosign_signing_enabled,
  :created_at,
  :default_privilege,
  :delete_own,
  :delete_packages,
  :deleted_at,
  :description,
  :distributes,
  :docker_refresh_tokens_enabled,
  :ecdsa_keys,
  :enforce_eula,
  :gpg_keys,
  :id,
  :index_files,
  :is_open_source,
  :is_private,
  :is_public,
  :manage_entitlements_privilege,
  :move_own,
  :move_packages,
  :name,
  :namespace,
  :namespace_url,
  :nuget_native_signing_enabled,
  :num_downloads,
  :num_policy_violated_packages,
  :num_quarantined_packages,
  :open_source_license,
  :open_source_project_url,
  :package_count,
  :package_group_count,
  :proxy_npmjs,
  :proxy_pypi,
  :raw_package_index_enabled,
  :raw_package_index_signatures_enabled,
  :replace_packages,
  :replace_packages_by_default,
  :repository_type,
  :repository_type_str,
  :resync_own,
  :resync_packages,
  :scan_own,
  :scan_packages,
  :self_html_url,
  :self_url,
  :show_setup_all,
  :size,
  :size_str,
  :slug,
  :slug_perm,
  :storage_region,
  :strict_npm_validation,
  :tag_pre_releases_as_latest,
  :use_debian_labels,
  :use_default_cargo_upstream,
  :use_entitlements_privilege,
  :use_noarch_packages,
  :use_source_packages,
  :use_vulnerability_scanning,
  :user_entitlements_enabled,
  :view_statistics,
  keyword_init: true
)

# Request payload for Repo#remove.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] slug_perm
#   @return [Object, nil]
RepoRemoveMatch = Struct.new(
  :identifier,
  :owner,
  :slug_perm,
  keyword_init: true
)

# RepositoryAuditLog entity data model.
#
# @!attribute [rw] actor
#   @return [String]
#
# @!attribute [rw] actor_ip_address
#   @return [String]
#
# @!attribute [rw] actor_kind
#   @return [String, nil]
#
# @!attribute [rw] actor_location
#   @return [Hash]
#
# @!attribute [rw] actor_slug_perm
#   @return [String]
#
# @!attribute [rw] actor_url
#   @return [String, nil]
#
# @!attribute [rw] context
#   @return [String]
#
# @!attribute [rw] event
#   @return [String]
#
# @!attribute [rw] event_at
#   @return [String]
#
# @!attribute [rw] object
#   @return [String]
#
# @!attribute [rw] object_kind
#   @return [String]
#
# @!attribute [rw] object_slug_perm
#   @return [String]
#
# @!attribute [rw] uuid
#   @return [String, nil]
RepositoryAuditLog = Struct.new(
  :actor,
  :actor_ip_address,
  :actor_kind,
  :actor_location,
  :actor_slug_perm,
  :actor_url,
  :context,
  :event,
  :event_at,
  :object,
  :object_kind,
  :object_slug_perm,
  :uuid,
  keyword_init: true
)

# Request payload for RepositoryAuditLog#list.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
RepositoryAuditLogListMatch = Struct.new(
  :owner,
  :repo,
  :page,
  :page_size,
  :query,
  keyword_init: true
)

# RepositoryEcdsaKey entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] fingerprint
#   @return [String, nil]
#
# @!attribute [rw] fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] ssh_fingerprint
#   @return [String, nil]
RepositoryEcdsaKey = Struct.new(
  :active,
  :created_at,
  :default,
  :fingerprint,
  :fingerprint_short,
  :public_key,
  :ssh_fingerprint,
  keyword_init: true
)

# Request payload for RepositoryEcdsaKey#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
RepositoryEcdsaKeyLoadMatch = Struct.new(
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for RepositoryEcdsaKey#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] fingerprint
#   @return [String, nil]
#
# @!attribute [rw] fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] ssh_fingerprint
#   @return [String, nil]
RepositoryEcdsaKeyCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :active,
  :created_at,
  :default,
  :fingerprint,
  :fingerprint_short,
  :public_key,
  :ssh_fingerprint,
  keyword_init: true
)

# RepositoryGeoIpRule entity data model.
#
# @!attribute [rw] cidr
#   @return [Hash]
#
# @!attribute [rw] country_code
#   @return [Hash]
RepositoryGeoIpRule = Struct.new(
  :cidr,
  :country_code,
  keyword_init: true
)

# Request payload for RepositoryGeoIpRule#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
RepositoryGeoIpRuleLoadMatch = Struct.new(
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for RepositoryGeoIpRule#update.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] cidr
#   @return [Hash, nil]
#
# @!attribute [rw] country_code
#   @return [Hash, nil]
RepositoryGeoIpRuleUpdateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :cidr,
  :country_code,
  keyword_init: true
)

# RepositoryGeoIpStatus entity data model.
#
# @!attribute [rw] geoip_enabled
#   @return [Boolean, nil]
RepositoryGeoIpStatus = Struct.new(
  :geoip_enabled,
  keyword_init: true
)

# Request payload for RepositoryGeoIpStatus#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
RepositoryGeoIpStatusLoadMatch = Struct.new(
  :identifier,
  :owner,
  keyword_init: true
)

# RepositoryGeoIpTestAddress entity data model.
class RepositoryGeoIpTestAddress
end

# Request payload for RepositoryGeoIpTestAddress#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
RepositoryGeoIpTestAddressCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  keyword_init: true
)

# RepositoryGpgKey entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] comment
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] fingerprint
#   @return [String, nil]
#
# @!attribute [rw] fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
RepositoryGpgKey = Struct.new(
  :active,
  :comment,
  :created_at,
  :default,
  :fingerprint,
  :fingerprint_short,
  :public_key,
  keyword_init: true
)

# Request payload for RepositoryGpgKey#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
RepositoryGpgKeyLoadMatch = Struct.new(
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for RepositoryGpgKey#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] comment
#   @return [String]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] fingerprint
#   @return [String, nil]
#
# @!attribute [rw] fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
RepositoryGpgKeyCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :active,
  :comment,
  :created_at,
  :default,
  :fingerprint,
  :fingerprint_short,
  :public_key,
  keyword_init: true
)

# RepositoryPrivilegeInput entity data model.
#
# @!attribute [rw] privilege
#   @return [String]
#
# @!attribute [rw] service
#   @return [String, nil]
#
# @!attribute [rw] team
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
RepositoryPrivilegeInput = Struct.new(
  :privilege,
  :service,
  :team,
  :user,
  keyword_init: true
)

# Request payload for RepositoryPrivilegeInput#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
RepositoryPrivilegeInputListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# RepositoryRetentionRule entity data model.
#
# @!attribute [rw] retention_count_limit
#   @return [Integer, nil]
#
# @!attribute [rw] retention_days_limit
#   @return [Integer, nil]
#
# @!attribute [rw] retention_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] retention_group_by_format
#   @return [Boolean, nil]
#
# @!attribute [rw] retention_group_by_name
#   @return [Boolean, nil]
#
# @!attribute [rw] retention_group_by_package_type
#   @return [Boolean, nil]
#
# @!attribute [rw] retention_package_query_string
#   @return [String, nil]
#
# @!attribute [rw] retention_size_limit
#   @return [Integer, nil]
RepositoryRetentionRule = Struct.new(
  :retention_count_limit,
  :retention_days_limit,
  :retention_enabled,
  :retention_group_by_format,
  :retention_group_by_name,
  :retention_group_by_package_type,
  :retention_package_query_string,
  :retention_size_limit,
  keyword_init: true
)

# Request payload for RepositoryRetentionRule#load.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
RepositoryRetentionRuleLoadMatch = Struct.new(
  :owner,
  :repo,
  keyword_init: true
)

# Request payload for RepositoryRetentionRule#update.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] retention_count_limit
#   @return [Integer, nil]
#
# @!attribute [rw] retention_days_limit
#   @return [Integer, nil]
#
# @!attribute [rw] retention_enabled
#   @return [Boolean, nil]
#
# @!attribute [rw] retention_group_by_format
#   @return [Boolean, nil]
#
# @!attribute [rw] retention_group_by_name
#   @return [Boolean, nil]
#
# @!attribute [rw] retention_group_by_package_type
#   @return [Boolean, nil]
#
# @!attribute [rw] retention_package_query_string
#   @return [String, nil]
#
# @!attribute [rw] retention_size_limit
#   @return [Integer, nil]
RepositoryRetentionRuleUpdateData = Struct.new(
  :owner,
  :repo,
  :data,
  :retention_count_limit,
  :retention_days_limit,
  :retention_enabled,
  :retention_group_by_format,
  :retention_group_by_name,
  :retention_group_by_package_type,
  :retention_package_query_string,
  :retention_size_limit,
  keyword_init: true
)

# RepositoryRsaKey entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] fingerprint
#   @return [String, nil]
#
# @!attribute [rw] fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] ssh_fingerprint
#   @return [String, nil]
RepositoryRsaKey = Struct.new(
  :active,
  :created_at,
  :default,
  :fingerprint,
  :fingerprint_short,
  :public_key,
  :ssh_fingerprint,
  keyword_init: true
)

# Request payload for RepositoryRsaKey#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
RepositoryRsaKeyLoadMatch = Struct.new(
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for RepositoryRsaKey#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] fingerprint
#   @return [String, nil]
#
# @!attribute [rw] fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] public_key
#   @return [String, nil]
#
# @!attribute [rw] ssh_fingerprint
#   @return [String, nil]
RepositoryRsaKeyCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :active,
  :created_at,
  :default,
  :fingerprint,
  :fingerprint_short,
  :public_key,
  :ssh_fingerprint,
  keyword_init: true
)

# RepositoryToken entity data model.
#
# @!attribute [rw] clients
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] disable_url
#   @return [String, nil]
#
# @!attribute [rw] downloads
#   @return [Integer, nil]
#
# @!attribute [rw] enable_url
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted
#   @return [Hash, nil]
#
# @!attribute [rw] eula_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted_from
#   @return [String, nil]
#
# @!attribute [rw] eula_required
#   @return [Boolean, nil]
#
# @!attribute [rw] has_limits
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [Integer, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] is_limited
#   @return [Boolean, nil]
#
# @!attribute [rw] limit_bandwidth
#   @return [Integer, nil]
#
# @!attribute [rw] limit_bandwidth_unit
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_from
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_to
#   @return [String, nil]
#
# @!attribute [rw] limit_num_clients
#   @return [Integer, nil]
#
# @!attribute [rw] limit_num_downloads
#   @return [Integer, nil]
#
# @!attribute [rw] limit_package_query
#   @return [String, nil]
#
# @!attribute [rw] limit_path_query
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] refresh_url
#   @return [String, nil]
#
# @!attribute [rw] reset_url
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_at
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_period
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] updated_by
#   @return [String, nil]
#
# @!attribute [rw] updated_by_url
#   @return [String, nil]
#
# @!attribute [rw] usage
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
RepositoryToken = Struct.new(
  :clients,
  :created_at,
  :created_by,
  :created_by_url,
  :default,
  :disable_url,
  :downloads,
  :enable_url,
  :eula_accepted,
  :eula_accepted_at,
  :eula_accepted_from,
  :eula_required,
  :has_limits,
  :id,
  :identifier,
  :is_active,
  :is_limited,
  :limit_bandwidth,
  :limit_bandwidth_unit,
  :limit_date_range_from,
  :limit_date_range_to,
  :limit_num_clients,
  :limit_num_downloads,
  :limit_package_query,
  :limit_path_query,
  :metadata,
  :name,
  :refresh_url,
  :reset_url,
  :scheduled_reset_at,
  :scheduled_reset_period,
  :self_url,
  :slug_perm,
  :token,
  :updated_at,
  :updated_by,
  :updated_by_url,
  :usage,
  :user,
  :user_url,
  keyword_init: true
)

# Request payload for RepositoryToken#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] fuzzy
#   @return [Object, nil]
#
# @!attribute [rw] show_token
#   @return [Object, nil]
RepositoryTokenLoadMatch = Struct.new(
  :identifier,
  :owner,
  :repo,
  :fuzzy,
  :show_token,
  keyword_init: true
)

# Request payload for RepositoryToken#list.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] show_token
#   @return [Object, nil]
#
# @!attribute [rw] sort
#   @return [Object, nil]
RepositoryTokenListMatch = Struct.new(
  :owner,
  :repo,
  :active,
  :page,
  :page_size,
  :query,
  :show_token,
  :sort,
  keyword_init: true
)

# Request payload for RepositoryToken#create.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] show_token
#   @return [Object, nil]
#
# @!attribute [rw] clients
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] disable_url
#   @return [String, nil]
#
# @!attribute [rw] downloads
#   @return [Integer, nil]
#
# @!attribute [rw] enable_url
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted
#   @return [Hash, nil]
#
# @!attribute [rw] eula_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted_from
#   @return [String, nil]
#
# @!attribute [rw] eula_required
#   @return [Boolean, nil]
#
# @!attribute [rw] has_limits
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [Integer, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] is_limited
#   @return [Boolean, nil]
#
# @!attribute [rw] limit_bandwidth
#   @return [Integer, nil]
#
# @!attribute [rw] limit_bandwidth_unit
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_from
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_to
#   @return [String, nil]
#
# @!attribute [rw] limit_num_clients
#   @return [Integer, nil]
#
# @!attribute [rw] limit_num_downloads
#   @return [Integer, nil]
#
# @!attribute [rw] limit_package_query
#   @return [String, nil]
#
# @!attribute [rw] limit_path_query
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] refresh_url
#   @return [String, nil]
#
# @!attribute [rw] reset_url
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_at
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_period
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] updated_by
#   @return [String, nil]
#
# @!attribute [rw] updated_by_url
#   @return [String, nil]
#
# @!attribute [rw] usage
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
RepositoryTokenCreateData = Struct.new(
  :owner,
  :repo,
  :data,
  :show_token,
  :clients,
  :created_at,
  :created_by,
  :created_by_url,
  :default,
  :disable_url,
  :downloads,
  :enable_url,
  :eula_accepted,
  :eula_accepted_at,
  :eula_accepted_from,
  :eula_required,
  :has_limits,
  :id,
  :identifier,
  :is_active,
  :is_limited,
  :limit_bandwidth,
  :limit_bandwidth_unit,
  :limit_date_range_from,
  :limit_date_range_to,
  :limit_num_clients,
  :limit_num_downloads,
  :limit_package_query,
  :limit_path_query,
  :metadata,
  :name,
  :refresh_url,
  :reset_url,
  :scheduled_reset_at,
  :scheduled_reset_period,
  :self_url,
  :slug_perm,
  :token,
  :updated_at,
  :updated_by,
  :updated_by_url,
  :usage,
  :user,
  :user_url,
  keyword_init: true
)

# Request payload for RepositoryToken#update.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] show_token
#   @return [Object, nil]
#
# @!attribute [rw] clients
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] disable_url
#   @return [String, nil]
#
# @!attribute [rw] downloads
#   @return [Integer, nil]
#
# @!attribute [rw] enable_url
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted
#   @return [Hash, nil]
#
# @!attribute [rw] eula_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted_from
#   @return [String, nil]
#
# @!attribute [rw] eula_required
#   @return [Boolean, nil]
#
# @!attribute [rw] has_limits
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] is_limited
#   @return [Boolean, nil]
#
# @!attribute [rw] limit_bandwidth
#   @return [Integer, nil]
#
# @!attribute [rw] limit_bandwidth_unit
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_from
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_to
#   @return [String, nil]
#
# @!attribute [rw] limit_num_clients
#   @return [Integer, nil]
#
# @!attribute [rw] limit_num_downloads
#   @return [Integer, nil]
#
# @!attribute [rw] limit_package_query
#   @return [String, nil]
#
# @!attribute [rw] limit_path_query
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] refresh_url
#   @return [String, nil]
#
# @!attribute [rw] reset_url
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_at
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_period
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] updated_by
#   @return [String, nil]
#
# @!attribute [rw] updated_by_url
#   @return [String, nil]
#
# @!attribute [rw] usage
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
RepositoryTokenUpdateData = Struct.new(
  :identifier,
  :owner,
  :repo,
  :data,
  :show_token,
  :clients,
  :created_at,
  :created_by,
  :created_by_url,
  :default,
  :disable_url,
  :downloads,
  :enable_url,
  :eula_accepted,
  :eula_accepted_at,
  :eula_accepted_from,
  :eula_required,
  :has_limits,
  :id,
  :is_active,
  :is_limited,
  :limit_bandwidth,
  :limit_bandwidth_unit,
  :limit_date_range_from,
  :limit_date_range_to,
  :limit_num_clients,
  :limit_num_downloads,
  :limit_package_query,
  :limit_path_query,
  :metadata,
  :name,
  :refresh_url,
  :reset_url,
  :scheduled_reset_at,
  :scheduled_reset_period,
  :self_url,
  :slug_perm,
  :token,
  :updated_at,
  :updated_by,
  :updated_by_url,
  :usage,
  :user,
  :user_url,
  keyword_init: true
)

# RepositoryTokenRefresh entity data model.
#
# @!attribute [rw] clients
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] disable_url
#   @return [String, nil]
#
# @!attribute [rw] downloads
#   @return [Integer, nil]
#
# @!attribute [rw] enable_url
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted
#   @return [Hash, nil]
#
# @!attribute [rw] eula_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted_from
#   @return [String, nil]
#
# @!attribute [rw] eula_required
#   @return [Boolean, nil]
#
# @!attribute [rw] has_limits
#   @return [Boolean, nil]
#
# @!attribute [rw] identifier
#   @return [Integer, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] is_limited
#   @return [Boolean, nil]
#
# @!attribute [rw] limit_bandwidth
#   @return [Integer, nil]
#
# @!attribute [rw] limit_bandwidth_unit
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_from
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_to
#   @return [String, nil]
#
# @!attribute [rw] limit_num_clients
#   @return [Integer, nil]
#
# @!attribute [rw] limit_num_downloads
#   @return [Integer, nil]
#
# @!attribute [rw] limit_package_query
#   @return [String, nil]
#
# @!attribute [rw] limit_path_query
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] refresh_url
#   @return [String, nil]
#
# @!attribute [rw] reset_url
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_at
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_period
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] updated_by
#   @return [String, nil]
#
# @!attribute [rw] updated_by_url
#   @return [String, nil]
#
# @!attribute [rw] usage
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
RepositoryTokenRefresh = Struct.new(
  :clients,
  :created_at,
  :created_by,
  :created_by_url,
  :default,
  :disable_url,
  :downloads,
  :enable_url,
  :eula_accepted,
  :eula_accepted_at,
  :eula_accepted_from,
  :eula_required,
  :has_limits,
  :identifier,
  :is_active,
  :is_limited,
  :limit_bandwidth,
  :limit_bandwidth_unit,
  :limit_date_range_from,
  :limit_date_range_to,
  :limit_num_clients,
  :limit_num_downloads,
  :limit_package_query,
  :limit_path_query,
  :metadata,
  :name,
  :refresh_url,
  :reset_url,
  :scheduled_reset_at,
  :scheduled_reset_period,
  :self_url,
  :slug_perm,
  :token,
  :updated_at,
  :updated_by,
  :updated_by_url,
  :usage,
  :user,
  :user_url,
  keyword_init: true
)

# Request payload for RepositoryTokenRefresh#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] show_token
#   @return [Object, nil]
#
# @!attribute [rw] clients
#   @return [Integer, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] disable_url
#   @return [String, nil]
#
# @!attribute [rw] downloads
#   @return [Integer, nil]
#
# @!attribute [rw] enable_url
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted
#   @return [Hash, nil]
#
# @!attribute [rw] eula_accepted_at
#   @return [String, nil]
#
# @!attribute [rw] eula_accepted_from
#   @return [String, nil]
#
# @!attribute [rw] eula_required
#   @return [Boolean, nil]
#
# @!attribute [rw] has_limits
#   @return [Boolean, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] is_limited
#   @return [Boolean, nil]
#
# @!attribute [rw] limit_bandwidth
#   @return [Integer, nil]
#
# @!attribute [rw] limit_bandwidth_unit
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_from
#   @return [String, nil]
#
# @!attribute [rw] limit_date_range_to
#   @return [String, nil]
#
# @!attribute [rw] limit_num_clients
#   @return [Integer, nil]
#
# @!attribute [rw] limit_num_downloads
#   @return [Integer, nil]
#
# @!attribute [rw] limit_package_query
#   @return [String, nil]
#
# @!attribute [rw] limit_path_query
#   @return [String, nil]
#
# @!attribute [rw] metadata
#   @return [Hash, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] refresh_url
#   @return [String, nil]
#
# @!attribute [rw] reset_url
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_at
#   @return [String, nil]
#
# @!attribute [rw] scheduled_reset_period
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] token
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] updated_by
#   @return [String, nil]
#
# @!attribute [rw] updated_by_url
#   @return [String, nil]
#
# @!attribute [rw] usage
#   @return [String, nil]
#
# @!attribute [rw] user
#   @return [String, nil]
#
# @!attribute [rw] user_url
#   @return [String, nil]
RepositoryTokenRefreshCreateData = Struct.new(
  :identifier,
  :owner,
  :repo,
  :data,
  :show_token,
  :clients,
  :created_at,
  :created_by,
  :created_by_url,
  :default,
  :disable_url,
  :downloads,
  :enable_url,
  :eula_accepted,
  :eula_accepted_at,
  :eula_accepted_from,
  :eula_required,
  :has_limits,
  :is_active,
  :is_limited,
  :limit_bandwidth,
  :limit_bandwidth_unit,
  :limit_date_range_from,
  :limit_date_range_to,
  :limit_num_clients,
  :limit_num_downloads,
  :limit_package_query,
  :limit_path_query,
  :metadata,
  :name,
  :refresh_url,
  :reset_url,
  :scheduled_reset_at,
  :scheduled_reset_period,
  :self_url,
  :slug_perm,
  :token,
  :updated_at,
  :updated_by,
  :updated_by_url,
  :usage,
  :user,
  :user_url,
  keyword_init: true
)

# RepositoryTokenSync entity data model.
#
# @!attribute [rw] tokens
#   @return [Array, nil]
RepositoryTokenSync = Struct.new(
  :tokens,
  keyword_init: true
)

# Request payload for RepositoryTokenSync#create.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] show_token
#   @return [Object, nil]
#
# @!attribute [rw] tokens
#   @return [Array, nil]
RepositoryTokenSyncCreateData = Struct.new(
  :owner,
  :repo,
  :data,
  :show_token,
  :tokens,
  keyword_init: true
)

# RepositoryWebhook entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [Integer, nil]
#
# @!attribute [rw] disable_reason_str
#   @return [String, nil]
#
# @!attribute [rw] events
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [Integer, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] is_last_response_bad
#   @return [Boolean, nil]
#
# @!attribute [rw] last_response_status
#   @return [Integer, nil]
#
# @!attribute [rw] last_response_status_str
#   @return [String, nil]
#
# @!attribute [rw] num_sent
#   @return [Integer, nil]
#
# @!attribute [rw] package_query
#   @return [String, nil]
#
# @!attribute [rw] request_body_format
#   @return [Integer, nil]
#
# @!attribute [rw] request_body_format_str
#   @return [String, nil]
#
# @!attribute [rw] request_body_template_format
#   @return [Integer, nil]
#
# @!attribute [rw] request_body_template_format_str
#   @return [String, nil]
#
# @!attribute [rw] request_content_type
#   @return [String, nil]
#
# @!attribute [rw] secret_header
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] target_url
#   @return [String]
#
# @!attribute [rw] templates
#   @return [Array]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] updated_by
#   @return [String, nil]
#
# @!attribute [rw] updated_by_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
RepositoryWebhook = Struct.new(
  :created_at,
  :created_by,
  :created_by_url,
  :disable_reason,
  :disable_reason_str,
  :events,
  :id,
  :identifier,
  :is_active,
  :is_last_response_bad,
  :last_response_status,
  :last_response_status_str,
  :num_sent,
  :package_query,
  :request_body_format,
  :request_body_format_str,
  :request_body_template_format,
  :request_body_template_format_str,
  :request_content_type,
  :secret_header,
  :self_url,
  :slug_perm,
  :target_url,
  :templates,
  :updated_at,
  :updated_by,
  :updated_by_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for RepositoryWebhook#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
RepositoryWebhookLoadMatch = Struct.new(
  :identifier,
  :owner,
  :repo,
  keyword_init: true
)

# Request payload for RepositoryWebhook#list.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
RepositoryWebhookListMatch = Struct.new(
  :owner,
  :repo,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for RepositoryWebhook#create.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [Integer, nil]
#
# @!attribute [rw] disable_reason_str
#   @return [String, nil]
#
# @!attribute [rw] events
#   @return [Array]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [Integer, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] is_last_response_bad
#   @return [Boolean, nil]
#
# @!attribute [rw] last_response_status
#   @return [Integer, nil]
#
# @!attribute [rw] last_response_status_str
#   @return [String, nil]
#
# @!attribute [rw] num_sent
#   @return [Integer, nil]
#
# @!attribute [rw] package_query
#   @return [String, nil]
#
# @!attribute [rw] request_body_format
#   @return [Integer, nil]
#
# @!attribute [rw] request_body_format_str
#   @return [String, nil]
#
# @!attribute [rw] request_body_template_format
#   @return [Integer, nil]
#
# @!attribute [rw] request_body_template_format_str
#   @return [String, nil]
#
# @!attribute [rw] request_content_type
#   @return [String, nil]
#
# @!attribute [rw] secret_header
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] target_url
#   @return [String]
#
# @!attribute [rw] templates
#   @return [Array]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] updated_by
#   @return [String, nil]
#
# @!attribute [rw] updated_by_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
RepositoryWebhookCreateData = Struct.new(
  :owner,
  :repo,
  :data,
  :created_at,
  :created_by,
  :created_by_url,
  :disable_reason,
  :disable_reason_str,
  :events,
  :id,
  :identifier,
  :is_active,
  :is_last_response_bad,
  :last_response_status,
  :last_response_status_str,
  :num_sent,
  :package_query,
  :request_body_format,
  :request_body_format_str,
  :request_body_template_format,
  :request_body_template_format_str,
  :request_content_type,
  :secret_header,
  :self_url,
  :slug_perm,
  :target_url,
  :templates,
  :updated_at,
  :updated_by,
  :updated_by_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for RepositoryWebhook#update.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [Integer, nil]
#
# @!attribute [rw] disable_reason_str
#   @return [String, nil]
#
# @!attribute [rw] events
#   @return [Array, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] is_last_response_bad
#   @return [Boolean, nil]
#
# @!attribute [rw] last_response_status
#   @return [Integer, nil]
#
# @!attribute [rw] last_response_status_str
#   @return [String, nil]
#
# @!attribute [rw] num_sent
#   @return [Integer, nil]
#
# @!attribute [rw] package_query
#   @return [String, nil]
#
# @!attribute [rw] request_body_format
#   @return [Integer, nil]
#
# @!attribute [rw] request_body_format_str
#   @return [String, nil]
#
# @!attribute [rw] request_body_template_format
#   @return [Integer, nil]
#
# @!attribute [rw] request_body_template_format_str
#   @return [String, nil]
#
# @!attribute [rw] request_content_type
#   @return [String, nil]
#
# @!attribute [rw] secret_header
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] target_url
#   @return [String, nil]
#
# @!attribute [rw] templates
#   @return [Array, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] updated_by
#   @return [String, nil]
#
# @!attribute [rw] updated_by_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
RepositoryWebhookUpdateData = Struct.new(
  :identifier,
  :owner,
  :repo,
  :data,
  :created_at,
  :created_by,
  :created_by_url,
  :disable_reason,
  :disable_reason_str,
  :events,
  :id,
  :is_active,
  :is_last_response_bad,
  :last_response_status,
  :last_response_status_str,
  :num_sent,
  :package_query,
  :request_body_format,
  :request_body_format_str,
  :request_body_template_format,
  :request_body_template_format_str,
  :request_content_type,
  :secret_header,
  :self_url,
  :slug_perm,
  :target_url,
  :templates,
  :updated_at,
  :updated_by,
  :updated_by_url,
  :verify_ssl,
  keyword_init: true
)

# RepositoryX509EcdsaCertificate entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] certificate
#   @return [String, nil]
#
# @!attribute [rw] certificate_chain
#   @return [String, nil]
#
# @!attribute [rw] certificate_chain_fingerprint
#   @return [String, nil]
#
# @!attribute [rw] certificate_chain_fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] certificate_fingerprint
#   @return [String, nil]
#
# @!attribute [rw] certificate_fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] issuing_status
#   @return [String, nil]
RepositoryX509EcdsaCertificate = Struct.new(
  :active,
  :certificate,
  :certificate_chain,
  :certificate_chain_fingerprint,
  :certificate_chain_fingerprint_short,
  :certificate_fingerprint,
  :certificate_fingerprint_short,
  :created_at,
  :default,
  :issuing_status,
  keyword_init: true
)

# Request payload for RepositoryX509EcdsaCertificate#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
RepositoryX509EcdsaCertificateLoadMatch = Struct.new(
  :identifier,
  :owner,
  keyword_init: true
)

# RepositoryX509RsaCertificate entity data model.
#
# @!attribute [rw] active
#   @return [Boolean, nil]
#
# @!attribute [rw] certificate
#   @return [String, nil]
#
# @!attribute [rw] certificate_chain
#   @return [String, nil]
#
# @!attribute [rw] certificate_chain_fingerprint
#   @return [String, nil]
#
# @!attribute [rw] certificate_chain_fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] certificate_fingerprint
#   @return [String, nil]
#
# @!attribute [rw] certificate_fingerprint_short
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] default
#   @return [Boolean, nil]
#
# @!attribute [rw] issuing_status
#   @return [String, nil]
RepositoryX509RsaCertificate = Struct.new(
  :active,
  :certificate,
  :certificate_chain,
  :certificate_chain_fingerprint,
  :certificate_chain_fingerprint_short,
  :certificate_fingerprint,
  :certificate_fingerprint_short,
  :created_at,
  :default,
  :issuing_status,
  keyword_init: true
)

# Request payload for RepositoryX509RsaCertificate#load.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
RepositoryX509RsaCertificateLoadMatch = Struct.new(
  :identifier,
  :owner,
  keyword_init: true
)

# Reset entity data model.
class Reset
end

# ResourcesRateCheck entity data model.
#
# @!attribute [rw] interval
#   @return [Float, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] remaining
#   @return [Integer, nil]
#
# @!attribute [rw] reset
#   @return [Integer, nil]
#
# @!attribute [rw] reset_iso_8601
#   @return [String, nil]
#
# @!attribute [rw] throttled
#   @return [Boolean, nil]
ResourcesRateCheck = Struct.new(
  :interval,
  :limit,
  :remaining,
  :reset,
  :reset_iso_8601,
  :throttled,
  keyword_init: true
)

# Request payload for ResourcesRateCheck#load.
#
# @!attribute [rw] interval
#   @return [Float, nil]
#
# @!attribute [rw] limit
#   @return [Integer, nil]
#
# @!attribute [rw] remaining
#   @return [Integer, nil]
#
# @!attribute [rw] reset
#   @return [Integer, nil]
#
# @!attribute [rw] reset_iso_8601
#   @return [String, nil]
#
# @!attribute [rw] throttled
#   @return [Boolean, nil]
ResourcesRateCheckLoadMatch = Struct.new(
  :interval,
  :limit,
  :remaining,
  :reset,
  :reset_iso_8601,
  :throttled,
  keyword_init: true
)

# Resync entity data model.
class Resync
end

# Retention entity data model.
class Retention
end

# Rpm entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] distro_version
#   @return [String]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_inline
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_url
#   @return [String, nil]
#
# @!attribute [rw] gpg_verification
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_sources
#   @return [Boolean, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verification_status
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Rpm = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :distro_version,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :gpg_key_inline,
  :gpg_key_url,
  :gpg_verification,
  :id,
  :include_sources,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verification_status,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Rpm#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
RpmLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Rpm#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
RpmListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Rpm#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] distro_version
#   @return [String]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_inline
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_url
#   @return [String, nil]
#
# @!attribute [rw] gpg_verification
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] include_sources
#   @return [Boolean, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verification_status
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
RpmCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :distro_version,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :gpg_key_inline,
  :gpg_key_url,
  :gpg_verification,
  :id,
  :include_sources,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verification_status,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Rpm#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] distro_version
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_inline
#   @return [String, nil]
#
# @!attribute [rw] gpg_key_url
#   @return [String, nil]
#
# @!attribute [rw] gpg_verification
#   @return [String, nil]
#
# @!attribute [rw] include_sources
#   @return [Boolean, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verification_status
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
RpmUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :distro_version,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :gpg_key_inline,
  :gpg_key_url,
  :gpg_verification,
  :include_sources,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verification_status,
  :verify_ssl,
  keyword_init: true
)

# Rsa entity data model.
class Rsa
end

# Ruby entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Ruby = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Ruby#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
RubyLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Ruby#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
RubyListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Ruby#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
RubyCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Ruby#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
RubyUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# SamlGroupSync entity data model.
class SamlGroupSync
end

# Scan entity data model.
class Scan
end

# Self entity data model.
class Self
end

# Service entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] key_expires_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] teams
#   @return [Array, nil]
Service = Struct.new(
  :created_at,
  :created_by,
  :created_by_url,
  :description,
  :id,
  :key,
  :key_expires_at,
  :name,
  :role,
  :slug,
  :teams,
  keyword_init: true
)

# Request payload for Service#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
ServiceLoadMatch = Struct.new(
  :id,
  :org_id,
  keyword_init: true
)

# Request payload for Service#list.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
#
# @!attribute [rw] query
#   @return [Object, nil]
#
# @!attribute [rw] sort
#   @return [Object, nil]
ServiceListMatch = Struct.new(
  :org_id,
  :page,
  :page_size,
  :query,
  :sort,
  keyword_init: true
)

# Request payload for Service#create.
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] key_expires_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] teams
#   @return [Array, nil]
ServiceCreateData = Struct.new(
  :org_id,
  :data,
  :created_at,
  :created_by,
  :created_by_url,
  :description,
  :id,
  :key,
  :key_expires_at,
  :name,
  :role,
  :slug,
  :teams,
  keyword_init: true
)

# Request payload for Service#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] org_id
#   @return [String]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] created_by
#   @return [String, nil]
#
# @!attribute [rw] created_by_url
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] key_expires_at
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] role
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] teams
#   @return [Array, nil]
ServiceUpdateData = Struct.new(
  :id,
  :org_id,
  :data,
  :created_at,
  :created_by,
  :created_by_url,
  :description,
  :key,
  :key_expires_at,
  :name,
  :role,
  :slug,
  :teams,
  keyword_init: true
)

# Status entity data model.
class Status
end

# StatusBasic entity data model.
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
StatusBasic = Struct.new(
  :detail,
  :version,
  keyword_init: true
)

# Request payload for StatusBasic#load.
#
# @!attribute [rw] detail
#   @return [String, nil]
#
# @!attribute [rw] version
#   @return [String, nil]
StatusBasicLoadMatch = Struct.new(
  :detail,
  :version,
  keyword_init: true
)

# StorageRegion entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String]
#
# @!attribute [rw] slug
#   @return [String]
StorageRegion = Struct.new(
  :id,
  :label,
  :slug,
  keyword_init: true
)

# Request payload for StorageRegion#load.
#
# @!attribute [rw] id
#   @return [String]
StorageRegionLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for StorageRegion#list.
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] label
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
StorageRegionListMatch = Struct.new(
  :id,
  :label,
  :slug,
  keyword_init: true
)

# Swift entity data model.
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
Swift = Struct.new(
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Swift#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
SwiftLoadMatch = Struct.new(
  :id,
  :identifier,
  :owner,
  keyword_init: true
)

# Request payload for Swift#list.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
SwiftListMatch = Struct.new(
  :identifier,
  :owner,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Swift#create.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
SwiftCreateData = Struct.new(
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :id,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Request payload for Swift#update.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] data
#   @return [Hash, nil]
#
# @!attribute [rw] auth_mode
#   @return [String, nil]
#
# @!attribute [rw] auth_secret
#   @return [String, nil]
#
# @!attribute [rw] auth_username
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] disable_reason
#   @return [String, nil]
#
# @!attribute [rw] extra_header_1
#   @return [String, nil]
#
# @!attribute [rw] extra_header_2
#   @return [String, nil]
#
# @!attribute [rw] extra_value_1
#   @return [String, nil]
#
# @!attribute [rw] extra_value_2
#   @return [String, nil]
#
# @!attribute [rw] is_active
#   @return [Boolean, nil]
#
# @!attribute [rw] mode
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] pending_validation
#   @return [Boolean, nil]
#
# @!attribute [rw] priority
#   @return [Integer, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] updated_at
#   @return [String, nil]
#
# @!attribute [rw] upstream_url
#   @return [String, nil]
#
# @!attribute [rw] verify_ssl
#   @return [Boolean, nil]
SwiftUpdateData = Struct.new(
  :id,
  :identifier,
  :owner,
  :data,
  :auth_mode,
  :auth_secret,
  :auth_username,
  :created_at,
  :disable_reason,
  :extra_header_1,
  :extra_header_2,
  :extra_value_1,
  :extra_value_2,
  :is_active,
  :mode,
  :name,
  :pending_validation,
  :priority,
  :slug_perm,
  :updated_at,
  :upstream_url,
  :verify_ssl,
  keyword_init: true
)

# Sync entity data model.
class Sync
end

# Tag entity data model.
class Tag
end

# Team entity data model.
class Team
end

# Terraform entity data model.
class Terraform
end

# Test entity data model.
class Test
end

# Token entity data model.
class Token
end

# TransferRegion entity data model.
class TransferRegion
end

# User entity data model.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
User = Struct.new(
  :created,
  :key,
  :slug_perm,
  keyword_init: true
)

# Request payload for User#list.
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
UserListMatch = Struct.new(
  :page,
  :page_size,
  keyword_init: true
)

# UserAuthToken entity data model.
class UserAuthToken
end

# Request payload for UserAuthToken#create.
#
# @!attribute [rw] data
#   @return [Hash, nil]
UserAuthTokenCreateData = Struct.new(
  :data,
  keyword_init: true
)

# UserAuthenticationToken entity data model.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
UserAuthenticationToken = Struct.new(
  :created,
  :key,
  :slug_perm,
  keyword_init: true
)

# Request payload for UserAuthenticationToken#create.
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
UserAuthenticationTokenCreateData = Struct.new(
  :created,
  :key,
  :slug_perm,
  keyword_init: true
)

# Request payload for UserAuthenticationToken#update.
#
# @!attribute [rw] slug_perm
#   @return [Object]
#
# @!attribute [rw] created
#   @return [String, nil]
#
# @!attribute [rw] key
#   @return [String, nil]
UserAuthenticationTokenUpdateData = Struct.new(
  :slug_perm,
  :created,
  :key,
  keyword_init: true
)

# UserBrief entity data model.
#
# @!attribute [rw] authenticated
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] profile_url
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
UserBrief = Struct.new(
  :authenticated,
  :email,
  :name,
  :profile_url,
  :self_url,
  :slug,
  :slug_perm,
  keyword_init: true
)

# Request payload for UserBrief#load.
#
# @!attribute [rw] authenticated
#   @return [Boolean, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] profile_url
#   @return [String, nil]
#
# @!attribute [rw] self_url
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
UserBriefLoadMatch = Struct.new(
  :authenticated,
  :email,
  :name,
  :profile_url,
  :self_url,
  :slug,
  :slug_perm,
  keyword_init: true
)

# UserProfile entity data model.
#
# @!attribute [rw] company
#   @return [String, nil]
#
# @!attribute [rw] first_name
#   @return [String]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] job_title
#   @return [String, nil]
#
# @!attribute [rw] joined_at
#   @return [String, nil]
#
# @!attribute [rw] last_name
#   @return [String]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] slug
#   @return [String, nil]
#
# @!attribute [rw] slug_perm
#   @return [String, nil]
#
# @!attribute [rw] tagline
#   @return [String, nil]
#
# @!attribute [rw] url
#   @return [String, nil]
UserProfile = Struct.new(
  :company,
  :first_name,
  :id,
  :job_title,
  :joined_at,
  :last_name,
  :name,
  :slug,
  :slug_perm,
  :tagline,
  :url,
  keyword_init: true
)

# Request payload for UserProfile#load.
#
# @!attribute [rw] id
#   @return [String]
UserProfileLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Vagrant entity data model.
class Vagrant
end

# Validate entity data model.
class Validate
end

# Version entity data model.
class Version
end

# Vulnerability entity data model.
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] has_vulnerabilities
#   @return [Boolean, nil]
#
# @!attribute [rw] id
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String]
#
# @!attribute [rw] max_severity
#   @return [String, nil]
#
# @!attribute [rw] num_vulnerabilities
#   @return [Integer, nil]
#
# @!attribute [rw] package
#   @return [Hash]
#
# @!attribute [rw] scan_id
#   @return [Integer]
#
# @!attribute [rw] scans
#   @return [Array]
Vulnerability = Struct.new(
  :created_at,
  :has_vulnerabilities,
  :id,
  :identifier,
  :max_severity,
  :num_vulnerabilities,
  :package,
  :scan_id,
  :scans,
  keyword_init: true
)

# Request payload for Vulnerability#load.
#
# @!attribute [rw] id
#   @return [String]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
VulnerabilityLoadMatch = Struct.new(
  :id,
  :page,
  :page_size,
  keyword_init: true
)

# Request payload for Vulnerability#list.
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] package
#   @return [Object, nil]
#
# @!attribute [rw] repo
#   @return [Object]
#
# @!attribute [rw] page
#   @return [Integer, nil]
#
# @!attribute [rw] page_size
#   @return [Integer, nil]
VulnerabilityListMatch = Struct.new(
  :owner,
  :package,
  :repo,
  :page,
  :page_size,
  keyword_init: true
)

# VulnerabilityPolicy entity data model.
class VulnerabilityPolicy
end

# Webhook entity data model.
#
# @!attribute [rw] id
#   @return [String, nil]
Webhook = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Webhook#remove.
#
# @!attribute [rw] identifier
#   @return [Object]
#
# @!attribute [rw] owner
#   @return [Object]
#
# @!attribute [rw] repo
#   @return [Object]
WebhookRemoveMatch = Struct.new(
  :identifier,
  :owner,
  :repo,
  keyword_init: true
)

# X509Ecdsa entity data model.
class X509Ecdsa
end

# X509Rsa entity data model.
class X509Rsa
end

