# Cloudsmith SDK

require_relative 'utility/struct/voxgig_struct'
require_relative 'core/utility_type'
require_relative 'core/spec'
require_relative 'core/helpers'

# Load utility registration
require_relative 'utility/register'

# Load config and features
require_relative 'config'
require_relative 'feature/base_feature'
require_relative 'features'

# Load typed models (Struct value objects).
require_relative 'Cloudsmith_types'


class CloudsmithSDK
  attr_accessor :mode, :features, :options

  def initialize(options = {})
    @mode = "live"
    @features = []
    @options = nil

    utility = CloudsmithUtility.new
    @_utility = utility

    config = CloudsmithConfig.make_config

    @_rootctx = utility.make_context.call({
      "client" => self,
      "utility" => utility,
      "config" => config,
      "options" => options || {},
      "shared" => {},
    }, nil)

    @options = utility.make_options.call(@_rootctx)

    if VoxgigStruct.getpath(@options, "feature.test.active") == true
      @mode = "test"
    end

    @_rootctx.options = @options

    # Add features in the resolved order (make_options puts an explicit array
    # order first, else defaults to test-first). Ordering matters: the `test`
    # feature installs the base mock transport and the transport features
    # (retry/cache/netsim/proxy/ratelimit) wrap whatever is current, so `test`
    # must be added before them to sit at the base of the chain.
    feature_opts = CloudsmithHelpers.to_map(VoxgigStruct.getprop(@options, "feature"))
    if feature_opts
      featureorder = VoxgigStruct.getpath(@options, "__derived__.featureorder")
      if featureorder.is_a?(Array)
        featureorder.each do |fname|
          fopts = CloudsmithHelpers.to_map(feature_opts[fname])
          if fopts && fopts["active"] == true
            utility.feature_add.call(@_rootctx, CloudsmithFeatures.make_feature(fname))
          end
        end
      end
    end

    # Add extension features.
    extend_val = VoxgigStruct.getprop(@options, "extend")
    if extend_val.is_a?(Array)
      extend_val.each do |f|
        if f.respond_to?(:get_name)
          utility.feature_add.call(@_rootctx, f)
        end
      end
    end

    # Initialize features.
    @features.each do |f|
      utility.feature_init.call(@_rootctx, f)
    end

    utility.feature_hook.call(@_rootctx, "PostConstruct")
  end

  def options_map
    out = VoxgigStruct.clone(@options)
    out.is_a?(Hash) ? out : {}
  end

  def get_utility
    CloudsmithUtility.copy(@_utility)
  end

  def get_root_ctx
    @_rootctx
  end

  def prepare(fetchargs = {})
    utility = @_utility
    fetchargs ||= {}

    ctrl = CloudsmithHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "prepare",
      "ctrl" => ctrl,
    }, @_rootctx)

    opts = @options
    path = VoxgigStruct.getprop(fetchargs, "path") || ""
    path = "" unless path.is_a?(String)
    method_val = VoxgigStruct.getprop(fetchargs, "method") || "GET"
    method_val = "GET" unless method_val.is_a?(String)
    params = CloudsmithHelpers.to_map(VoxgigStruct.getprop(fetchargs, "params")) || {}
    query = CloudsmithHelpers.to_map(VoxgigStruct.getprop(fetchargs, "query")) || {}
    headers = utility.prepare_headers.call(ctx)

    base = VoxgigStruct.getprop(opts, "base") || ""
    base = "" unless base.is_a?(String)
    prefix = VoxgigStruct.getprop(opts, "prefix") || ""
    prefix = "" unless prefix.is_a?(String)
    suffix = VoxgigStruct.getprop(opts, "suffix") || ""
    suffix = "" unless suffix.is_a?(String)

    ctx.spec = CloudsmithSpec.new({
      "base" => base, "prefix" => prefix, "suffix" => suffix,
      "path" => path, "method" => method_val,
      "params" => params, "query" => query, "headers" => headers,
      "body" => VoxgigStruct.getprop(fetchargs, "body"),
      "step" => "start",
    })

    # Merge user-provided headers.
    uh = VoxgigStruct.getprop(fetchargs, "headers")
    if uh.is_a?(Hash)
      uh.each { |k, v| ctx.spec.headers[k] = v }
    end

    _, err = utility.prepare_auth.call(ctx)
    raise err if err

    # make_fetch_def returns a (fetchdef, err) tuple; destructure it and
    # return just the fetchdef Hash (raising on error) so callers — including
    # direct(), which indexes fetchdef["url"] — receive a Hash, mirroring the
    # ts/py prepare().
    fetchdef, fd_err = utility.make_fetch_def.call(ctx)
    raise fd_err if fd_err

    fetchdef
  end

  def direct(fetchargs = {})
    utility = @_utility

    # direct() is the raw-HTTP escape hatch: it always returns a result hash
    # ({ "ok" => ..., ... }) and never raises. prepare() raises on error, so
    # trap that and surface it in the hash.
    begin
      fetchdef = prepare(fetchargs)
    rescue CloudsmithError => err
      return { "ok" => false, "err" => err }
    end

    fetchargs ||= {}
    ctrl = CloudsmithHelpers.to_map(VoxgigStruct.getprop(fetchargs, "ctrl")) || {}

    ctx = utility.make_context.call({
      "opname" => "direct",
      "ctrl" => ctrl,
    }, @_rootctx)

    url = fetchdef["url"] || ""
    fetched, fetch_err = utility.fetcher.call(ctx, url, fetchdef)

    return { "ok" => false, "err" => fetch_err } if fetch_err

    if fetched.nil?
      return {
        "ok" => false,
        "err" => ctx.make_error("direct_no_response", "response: undefined"),
      }
    end

    if fetched.is_a?(Hash)
      status = CloudsmithHelpers.to_int(VoxgigStruct.getprop(fetched, "status"))
      headers = VoxgigStruct.getprop(fetched, "headers") || {}

      # No-body responses (204, 304) and explicit zero content-length must
      # skip JSON parsing — calling json() on an empty body errors.
      content_length = headers.is_a?(Hash) ? headers["content-length"] : nil
      no_body = status == 204 || status == 304 || content_length.to_s == "0"

      json_data = nil
      unless no_body
        jf = VoxgigStruct.getprop(fetched, "json")
        if jf.is_a?(Proc)
          begin
            json_data = jf.call
          rescue StandardError
            # Non-JSON body — leave data nil, keep status/headers.
            json_data = nil
          end
        end
      end

      return {
        "ok" => status >= 200 && status < 300,
        "status" => status,
        "headers" => headers,
        "data" => json_data,
      }
    end

    return {
      "ok" => false,
      "err" => ctx.make_error("direct_invalid", "invalid response type"),
    }
  end


  # Canonical facade: client.Abort.list / client.Abort.load({ "id" => ... })
  def Abort(data = nil)
    require_relative 'entity/abort_entity'
    AbortEntity.new(self, data)
  end


  # Canonical facade: client.Alpine.list / client.Alpine.load({ "id" => ... })
  def Alpine(data = nil)
    require_relative 'entity/alpine_entity'
    AlpineEntity.new(self, data)
  end


  # Canonical facade: client.AuditLog.list / client.AuditLog.load({ "id" => ... })
  def AuditLog(data = nil)
    require_relative 'entity/audit_log_entity'
    AuditLogEntity.new(self, data)
  end


  # Canonical facade: client.Basic.list / client.Basic.load({ "id" => ... })
  def Basic(data = nil)
    require_relative 'entity/basic_entity'
    BasicEntity.new(self, data)
  end


  # Canonical facade: client.Cargo.list / client.Cargo.load({ "id" => ... })
  def Cargo(data = nil)
    require_relative 'entity/cargo_entity'
    CargoEntity.new(self, data)
  end


  # Canonical facade: client.Cocoapod.list / client.Cocoapod.load({ "id" => ... })
  def Cocoapod(data = nil)
    require_relative 'entity/cocoapod_entity'
    CocoapodEntity.new(self, data)
  end


  # Canonical facade: client.Complete.list / client.Complete.load({ "id" => ... })
  def Complete(data = nil)
    require_relative 'entity/complete_entity'
    CompleteEntity.new(self, data)
  end


  # Canonical facade: client.Composer.list / client.Composer.load({ "id" => ... })
  def Composer(data = nil)
    require_relative 'entity/composer_entity'
    ComposerEntity.new(self, data)
  end


  # Canonical facade: client.Conan.list / client.Conan.load({ "id" => ... })
  def Conan(data = nil)
    require_relative 'entity/conan_entity'
    ConanEntity.new(self, data)
  end


  # Canonical facade: client.Conda.list / client.Conda.load({ "id" => ... })
  def Conda(data = nil)
    require_relative 'entity/conda_entity'
    CondaEntity.new(self, data)
  end


  # Canonical facade: client.Copy.list / client.Copy.load({ "id" => ... })
  def Copy(data = nil)
    require_relative 'entity/copy_entity'
    CopyEntity.new(self, data)
  end


  # Canonical facade: client.Cran.list / client.Cran.load({ "id" => ... })
  def Cran(data = nil)
    require_relative 'entity/cran_entity'
    CranEntity.new(self, data)
  end


  # Canonical facade: client.Dart.list / client.Dart.load({ "id" => ... })
  def Dart(data = nil)
    require_relative 'entity/dart_entity'
    DartEntity.new(self, data)
  end


  # Canonical facade: client.Deb.list / client.Deb.load({ "id" => ... })
  def Deb(data = nil)
    require_relative 'entity/deb_entity'
    DebEntity.new(self, data)
  end


  # Canonical facade: client.DenyPolicy.list / client.DenyPolicy.load({ "id" => ... })
  def DenyPolicy(data = nil)
    require_relative 'entity/deny_policy_entity'
    DenyPolicyEntity.new(self, data)
  end


  # Canonical facade: client.Dependency.list / client.Dependency.load({ "id" => ... })
  def Dependency(data = nil)
    require_relative 'entity/dependency_entity'
    DependencyEntity.new(self, data)
  end


  # Canonical facade: client.Disable.list / client.Disable.load({ "id" => ... })
  def Disable(data = nil)
    require_relative 'entity/disable_entity'
    DisableEntity.new(self, data)
  end


  # Canonical facade: client.DistributionFull.list / client.DistributionFull.load({ "id" => ... })
  def DistributionFull(data = nil)
    require_relative 'entity/distribution_full_entity'
    DistributionFullEntity.new(self, data)
  end


  # Canonical facade: client.Distro.list / client.Distro.load({ "id" => ... })
  def Distro(data = nil)
    require_relative 'entity/distro_entity'
    DistroEntity.new(self, data)
  end


  # Canonical facade: client.Docker.list / client.Docker.load({ "id" => ... })
  def Docker(data = nil)
    require_relative 'entity/docker_entity'
    DockerEntity.new(self, data)
  end


  # Canonical facade: client.DynamicMapping.list / client.DynamicMapping.load({ "id" => ... })
  def DynamicMapping(data = nil)
    require_relative 'entity/dynamic_mapping_entity'
    DynamicMappingEntity.new(self, data)
  end


  # Canonical facade: client.Ecdsa.list / client.Ecdsa.load({ "id" => ... })
  def Ecdsa(data = nil)
    require_relative 'entity/ecdsa_entity'
    EcdsaEntity.new(self, data)
  end


  # Canonical facade: client.Enable.list / client.Enable.load({ "id" => ... })
  def Enable(data = nil)
    require_relative 'entity/enable_entity'
    EnableEntity.new(self, data)
  end


  # Canonical facade: client.Entitlement.list / client.Entitlement.load({ "id" => ... })
  def Entitlement(data = nil)
    require_relative 'entity/entitlement_entity'
    EntitlementEntity.new(self, data)
  end


  # Canonical facade: client.Evaluation.list / client.Evaluation.load({ "id" => ... })
  def Evaluation(data = nil)
    require_relative 'entity/evaluation_entity'
    EvaluationEntity.new(self, data)
  end


  # Canonical facade: client.File.list / client.File.load({ "id" => ... })
  def File(data = nil)
    require_relative 'entity/file_entity'
    FileEntity.new(self, data)
  end


  # Canonical facade: client.Format.list / client.Format.load({ "id" => ... })
  def Format(data = nil)
    require_relative 'entity/format_entity'
    FormatEntity.new(self, data)
  end


  # Canonical facade: client.Geoip.list / client.Geoip.load({ "id" => ... })
  def Geoip(data = nil)
    require_relative 'entity/geoip_entity'
    GeoipEntity.new(self, data)
  end


  # Canonical facade: client.Gon.list / client.Gon.load({ "id" => ... })
  def Gon(data = nil)
    require_relative 'entity/gon_entity'
    GonEntity.new(self, data)
  end


  # Canonical facade: client.Gon2.list / client.Gon2.load({ "id" => ... })
  def Gon2(data = nil)
    require_relative 'entity/gon2_entity'
    Gon2Entity.new(self, data)
  end


  # Canonical facade: client.Gon3.list / client.Gon3.load({ "id" => ... })
  def Gon3(data = nil)
    require_relative 'entity/gon3_entity'
    Gon3Entity.new(self, data)
  end


  # Canonical facade: client.Gon4.list / client.Gon4.load({ "id" => ... })
  def Gon4(data = nil)
    require_relative 'entity/gon4_entity'
    Gon4Entity.new(self, data)
  end


  # Canonical facade: client.Gon5.list / client.Gon5.load({ "id" => ... })
  def Gon5(data = nil)
    require_relative 'entity/gon5_entity'
    Gon5Entity.new(self, data)
  end


  # Canonical facade: client.Gon6.list / client.Gon6.load({ "id" => ... })
  def Gon6(data = nil)
    require_relative 'entity/gon6_entity'
    Gon6Entity.new(self, data)
  end


  # Canonical facade: client.Gon7.list / client.Gon7.load({ "id" => ... })
  def Gon7(data = nil)
    require_relative 'entity/gon7_entity'
    Gon7Entity.new(self, data)
  end


  # Canonical facade: client.Gon8.list / client.Gon8.load({ "id" => ... })
  def Gon8(data = nil)
    require_relative 'entity/gon8_entity'
    Gon8Entity.new(self, data)
  end


  # Canonical facade: client.Gon9.list / client.Gon9.load({ "id" => ... })
  def Gon9(data = nil)
    require_relative 'entity/gon9_entity'
    Gon9Entity.new(self, data)
  end


  # Canonical facade: client.Gpg.list / client.Gpg.load({ "id" => ... })
  def Gpg(data = nil)
    require_relative 'entity/gpg_entity'
    GpgEntity.new(self, data)
  end


  # Canonical facade: client.Group.list / client.Group.load({ "id" => ... })
  def Group(data = nil)
    require_relative 'entity/group_entity'
    GroupEntity.new(self, data)
  end


  # Canonical facade: client.Helm.list / client.Helm.load({ "id" => ... })
  def Helm(data = nil)
    require_relative 'entity/helm_entity'
    HelmEntity.new(self, data)
  end


  # Canonical facade: client.Hex.list / client.Hex.load({ "id" => ... })
  def Hex(data = nil)
    require_relative 'entity/hex_entity'
    HexEntity.new(self, data)
  end


  # Canonical facade: client.History.list / client.History.load({ "id" => ... })
  def History(data = nil)
    require_relative 'entity/history_entity'
    HistoryEntity.new(self, data)
  end


  # Canonical facade: client.Huggingface.list / client.Huggingface.load({ "id" => ... })
  def Huggingface(data = nil)
    require_relative 'entity/huggingface_entity'
    HuggingfaceEntity.new(self, data)
  end


  # Canonical facade: client.Info.list / client.Info.load({ "id" => ... })
  def Info(data = nil)
    require_relative 'entity/info_entity'
    InfoEntity.new(self, data)
  end


  # Canonical facade: client.Invite.list / client.Invite.load({ "id" => ... })
  def Invite(data = nil)
    require_relative 'entity/invite_entity'
    InviteEntity.new(self, data)
  end


  # Canonical facade: client.LicensePolicy.list / client.LicensePolicy.load({ "id" => ... })
  def LicensePolicy(data = nil)
    require_relative 'entity/license_policy_entity'
    LicensePolicyEntity.new(self, data)
  end


  # Canonical facade: client.Limit.list / client.Limit.load({ "id" => ... })
  def Limit(data = nil)
    require_relative 'entity/limit_entity'
    LimitEntity.new(self, data)
  end


  # Canonical facade: client.Luarock.list / client.Luarock.load({ "id" => ... })
  def Luarock(data = nil)
    require_relative 'entity/luarock_entity'
    LuarockEntity.new(self, data)
  end


  # Canonical facade: client.Maven.list / client.Maven.load({ "id" => ... })
  def Maven(data = nil)
    require_relative 'entity/maven_entity'
    MavenEntity.new(self, data)
  end


  # Canonical facade: client.Member.list / client.Member.load({ "id" => ... })
  def Member(data = nil)
    require_relative 'entity/member_entity'
    MemberEntity.new(self, data)
  end


  # Canonical facade: client.Move.list / client.Move.load({ "id" => ... })
  def Move(data = nil)
    require_relative 'entity/move_entity'
    MoveEntity.new(self, data)
  end


  # Canonical facade: client.Namespace.list / client.Namespace.load({ "id" => ... })
  def Namespace(data = nil)
    require_relative 'entity/namespace_entity'
    NamespaceEntity.new(self, data)
  end


  # Canonical facade: client.NamespaceAuditLog.list / client.NamespaceAuditLog.load({ "id" => ... })
  def NamespaceAuditLog(data = nil)
    require_relative 'entity/namespace_audit_log_entity'
    NamespaceAuditLogEntity.new(self, data)
  end


  # Canonical facade: client.Npm.list / client.Npm.load({ "id" => ... })
  def Npm(data = nil)
    require_relative 'entity/npm_entity'
    NpmEntity.new(self, data)
  end


  # Canonical facade: client.Nuget.list / client.Nuget.load({ "id" => ... })
  def Nuget(data = nil)
    require_relative 'entity/nuget_entity'
    NugetEntity.new(self, data)
  end


  # Canonical facade: client.OpenidConnect.list / client.OpenidConnect.load({ "id" => ... })
  def OpenidConnect(data = nil)
    require_relative 'entity/openid_connect_entity'
    OpenidConnectEntity.new(self, data)
  end


  # Canonical facade: client.Org.list / client.Org.load({ "id" => ... })
  def Org(data = nil)
    require_relative 'entity/org_entity'
    OrgEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationGroupSync.list / client.OrganizationGroupSync.load({ "id" => ... })
  def OrganizationGroupSync(data = nil)
    require_relative 'entity/organization_group_sync_entity'
    OrganizationGroupSyncEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationGroupSyncStatus.list / client.OrganizationGroupSyncStatus.load({ "id" => ... })
  def OrganizationGroupSyncStatus(data = nil)
    require_relative 'entity/organization_group_sync_status_entity'
    OrganizationGroupSyncStatusEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationInvite.list / client.OrganizationInvite.load({ "id" => ... })
  def OrganizationInvite(data = nil)
    require_relative 'entity/organization_invite_entity'
    OrganizationInviteEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationInviteExtend.list / client.OrganizationInviteExtend.load({ "id" => ... })
  def OrganizationInviteExtend(data = nil)
    require_relative 'entity/organization_invite_extend_entity'
    OrganizationInviteExtendEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationMembership.list / client.OrganizationMembership.load({ "id" => ... })
  def OrganizationMembership(data = nil)
    require_relative 'entity/organization_membership_entity'
    OrganizationMembershipEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationMembershipRoleUpdate.list / client.OrganizationMembershipRoleUpdate.load({ "id" => ... })
  def OrganizationMembershipRoleUpdate(data = nil)
    require_relative 'entity/organization_membership_role_update_entity'
    OrganizationMembershipRoleUpdateEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationMembershipVisibilityUpdate.list / client.OrganizationMembershipVisibilityUpdate.load({ "id" => ... })
  def OrganizationMembershipVisibilityUpdate(data = nil)
    require_relative 'entity/organization_membership_visibility_update_entity'
    OrganizationMembershipVisibilityUpdateEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationPackageLicensePolicy.list / client.OrganizationPackageLicensePolicy.load({ "id" => ... })
  def OrganizationPackageLicensePolicy(data = nil)
    require_relative 'entity/organization_package_license_policy_entity'
    OrganizationPackageLicensePolicyEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationPackageVulnerabilityPolicy.list / client.OrganizationPackageVulnerabilityPolicy.load({ "id" => ... })
  def OrganizationPackageVulnerabilityPolicy(data = nil)
    require_relative 'entity/organization_package_vulnerability_policy_entity'
    OrganizationPackageVulnerabilityPolicyEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationSamlAuth.list / client.OrganizationSamlAuth.load({ "id" => ... })
  def OrganizationSamlAuth(data = nil)
    require_relative 'entity/organization_saml_auth_entity'
    OrganizationSamlAuthEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationTeam.list / client.OrganizationTeam.load({ "id" => ... })
  def OrganizationTeam(data = nil)
    require_relative 'entity/organization_team_entity'
    OrganizationTeamEntity.new(self, data)
  end


  # Canonical facade: client.OrganizationTeamMember.list / client.OrganizationTeamMember.load({ "id" => ... })
  def OrganizationTeamMember(data = nil)
    require_relative 'entity/organization_team_member_entity'
    OrganizationTeamMemberEntity.new(self, data)
  end


  # Canonical facade: client.Oss.list / client.Oss.load({ "id" => ... })
  def Oss(data = nil)
    require_relative 'entity/oss_entity'
    OssEntity.new(self, data)
  end


  # Canonical facade: client.P2n.list / client.P2n.load({ "id" => ... })
  def P2n(data = nil)
    require_relative 'entity/p2n_entity'
    P2nEntity.new(self, data)
  end


  # Canonical facade: client.P2n2.list / client.P2n2.load({ "id" => ... })
  def P2n2(data = nil)
    require_relative 'entity/p2n2_entity'
    P2n2Entity.new(self, data)
  end


  # Canonical facade: client.Package.list / client.Package.load({ "id" => ... })
  def Package(data = nil)
    require_relative 'entity/package_entity'
    PackageEntity.new(self, data)
  end


  # Canonical facade: client.PackageDenyPolicy.list / client.PackageDenyPolicy.load({ "id" => ... })
  def PackageDenyPolicy(data = nil)
    require_relative 'entity/package_deny_policy_entity'
    PackageDenyPolicyEntity.new(self, data)
  end


  # Canonical facade: client.PackageFilePartsUpload.list / client.PackageFilePartsUpload.load({ "id" => ... })
  def PackageFilePartsUpload(data = nil)
    require_relative 'entity/package_file_parts_upload_entity'
    PackageFilePartsUploadEntity.new(self, data)
  end


  # Canonical facade: client.PackageFileUpload.list / client.PackageFileUpload.load({ "id" => ... })
  def PackageFileUpload(data = nil)
    require_relative 'entity/package_file_upload_entity'
    PackageFileUploadEntity.new(self, data)
  end


  # Canonical facade: client.PackageLicensePolicyEvaluation.list / client.PackageLicensePolicyEvaluation.load({ "id" => ... })
  def PackageLicensePolicyEvaluation(data = nil)
    require_relative 'entity/package_license_policy_evaluation_entity'
    PackageLicensePolicyEvaluationEntity.new(self, data)
  end


  # Canonical facade: client.PackageVersionBadge.list / client.PackageVersionBadge.load({ "id" => ... })
  def PackageVersionBadge(data = nil)
    require_relative 'entity/package_version_badge_entity'
    PackageVersionBadgeEntity.new(self, data)
  end


  # Canonical facade: client.PackageVulnerabilityPolicyEvaluation.list / client.PackageVulnerabilityPolicyEvaluation.load({ "id" => ... })
  def PackageVulnerabilityPolicyEvaluation(data = nil)
    require_relative 'entity/package_vulnerability_policy_evaluation_entity'
    PackageVulnerabilityPolicyEvaluationEntity.new(self, data)
  end


  # Canonical facade: client.Privilege.list / client.Privilege.load({ "id" => ... })
  def Privilege(data = nil)
    require_relative 'entity/privilege_entity'
    PrivilegeEntity.new(self, data)
  end


  # Canonical facade: client.Profile.list / client.Profile.load({ "id" => ... })
  def Profile(data = nil)
    require_relative 'entity/profile_entity'
    ProfileEntity.new(self, data)
  end


  # Canonical facade: client.ProviderSetting.list / client.ProviderSetting.load({ "id" => ... })
  def ProviderSetting(data = nil)
    require_relative 'entity/provider_setting_entity'
    ProviderSettingEntity.new(self, data)
  end


  # Canonical facade: client.ProviderSettingsWrite.list / client.ProviderSettingsWrite.load({ "id" => ... })
  def ProviderSettingsWrite(data = nil)
    require_relative 'entity/provider_settings_write_entity'
    ProviderSettingsWriteEntity.new(self, data)
  end


  # Canonical facade: client.Python.list / client.Python.load({ "id" => ... })
  def Python(data = nil)
    require_relative 'entity/python_entity'
    PythonEntity.new(self, data)
  end


  # Canonical facade: client.Quarantine.list / client.Quarantine.load({ "id" => ... })
  def Quarantine(data = nil)
    require_relative 'entity/quarantine_entity'
    QuarantineEntity.new(self, data)
  end


  # Canonical facade: client.Quota.list / client.Quota.load({ "id" => ... })
  def Quota(data = nil)
    require_relative 'entity/quota_entity'
    QuotaEntity.new(self, data)
  end


  # Canonical facade: client.Raw.list / client.Raw.load({ "id" => ... })
  def Raw(data = nil)
    require_relative 'entity/raw_entity'
    RawEntity.new(self, data)
  end


  # Canonical facade: client.Refresh.list / client.Refresh.load({ "id" => ... })
  def Refresh(data = nil)
    require_relative 'entity/refresh_entity'
    RefreshEntity.new(self, data)
  end


  # Canonical facade: client.Regenerate.list / client.Regenerate.load({ "id" => ... })
  def Regenerate(data = nil)
    require_relative 'entity/regenerate_entity'
    RegenerateEntity.new(self, data)
  end


  # Canonical facade: client.Repo.list / client.Repo.load({ "id" => ... })
  def Repo(data = nil)
    require_relative 'entity/repo_entity'
    RepoEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryAuditLog.list / client.RepositoryAuditLog.load({ "id" => ... })
  def RepositoryAuditLog(data = nil)
    require_relative 'entity/repository_audit_log_entity'
    RepositoryAuditLogEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryEcdsaKey.list / client.RepositoryEcdsaKey.load({ "id" => ... })
  def RepositoryEcdsaKey(data = nil)
    require_relative 'entity/repository_ecdsa_key_entity'
    RepositoryEcdsaKeyEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryGeoIpRule.list / client.RepositoryGeoIpRule.load({ "id" => ... })
  def RepositoryGeoIpRule(data = nil)
    require_relative 'entity/repository_geo_ip_rule_entity'
    RepositoryGeoIpRuleEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryGeoIpStatus.list / client.RepositoryGeoIpStatus.load({ "id" => ... })
  def RepositoryGeoIpStatus(data = nil)
    require_relative 'entity/repository_geo_ip_status_entity'
    RepositoryGeoIpStatusEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryGeoIpTestAddress.list / client.RepositoryGeoIpTestAddress.load({ "id" => ... })
  def RepositoryGeoIpTestAddress(data = nil)
    require_relative 'entity/repository_geo_ip_test_address_entity'
    RepositoryGeoIpTestAddressEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryGpgKey.list / client.RepositoryGpgKey.load({ "id" => ... })
  def RepositoryGpgKey(data = nil)
    require_relative 'entity/repository_gpg_key_entity'
    RepositoryGpgKeyEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryPrivilegeInput.list / client.RepositoryPrivilegeInput.load({ "id" => ... })
  def RepositoryPrivilegeInput(data = nil)
    require_relative 'entity/repository_privilege_input_entity'
    RepositoryPrivilegeInputEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryRetentionRule.list / client.RepositoryRetentionRule.load({ "id" => ... })
  def RepositoryRetentionRule(data = nil)
    require_relative 'entity/repository_retention_rule_entity'
    RepositoryRetentionRuleEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryRsaKey.list / client.RepositoryRsaKey.load({ "id" => ... })
  def RepositoryRsaKey(data = nil)
    require_relative 'entity/repository_rsa_key_entity'
    RepositoryRsaKeyEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryToken.list / client.RepositoryToken.load({ "id" => ... })
  def RepositoryToken(data = nil)
    require_relative 'entity/repository_token_entity'
    RepositoryTokenEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryTokenRefresh.list / client.RepositoryTokenRefresh.load({ "id" => ... })
  def RepositoryTokenRefresh(data = nil)
    require_relative 'entity/repository_token_refresh_entity'
    RepositoryTokenRefreshEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryTokenSync.list / client.RepositoryTokenSync.load({ "id" => ... })
  def RepositoryTokenSync(data = nil)
    require_relative 'entity/repository_token_sync_entity'
    RepositoryTokenSyncEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryWebhook.list / client.RepositoryWebhook.load({ "id" => ... })
  def RepositoryWebhook(data = nil)
    require_relative 'entity/repository_webhook_entity'
    RepositoryWebhookEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryX509EcdsaCertificate.list / client.RepositoryX509EcdsaCertificate.load({ "id" => ... })
  def RepositoryX509EcdsaCertificate(data = nil)
    require_relative 'entity/repository_x509_ecdsa_certificate_entity'
    RepositoryX509EcdsaCertificateEntity.new(self, data)
  end


  # Canonical facade: client.RepositoryX509RsaCertificate.list / client.RepositoryX509RsaCertificate.load({ "id" => ... })
  def RepositoryX509RsaCertificate(data = nil)
    require_relative 'entity/repository_x509_rsa_certificate_entity'
    RepositoryX509RsaCertificateEntity.new(self, data)
  end


  # Canonical facade: client.Reset.list / client.Reset.load({ "id" => ... })
  def Reset(data = nil)
    require_relative 'entity/reset_entity'
    ResetEntity.new(self, data)
  end


  # Canonical facade: client.ResourcesRateCheck.list / client.ResourcesRateCheck.load({ "id" => ... })
  def ResourcesRateCheck(data = nil)
    require_relative 'entity/resources_rate_check_entity'
    ResourcesRateCheckEntity.new(self, data)
  end


  # Canonical facade: client.Resync.list / client.Resync.load({ "id" => ... })
  def Resync(data = nil)
    require_relative 'entity/resync_entity'
    ResyncEntity.new(self, data)
  end


  # Canonical facade: client.Retention.list / client.Retention.load({ "id" => ... })
  def Retention(data = nil)
    require_relative 'entity/retention_entity'
    RetentionEntity.new(self, data)
  end


  # Canonical facade: client.Rpm.list / client.Rpm.load({ "id" => ... })
  def Rpm(data = nil)
    require_relative 'entity/rpm_entity'
    RpmEntity.new(self, data)
  end


  # Canonical facade: client.Rsa.list / client.Rsa.load({ "id" => ... })
  def Rsa(data = nil)
    require_relative 'entity/rsa_entity'
    RsaEntity.new(self, data)
  end


  # Canonical facade: client.Ruby.list / client.Ruby.load({ "id" => ... })
  def Ruby(data = nil)
    require_relative 'entity/ruby_entity'
    RubyEntity.new(self, data)
  end


  # Canonical facade: client.SamlGroupSync.list / client.SamlGroupSync.load({ "id" => ... })
  def SamlGroupSync(data = nil)
    require_relative 'entity/saml_group_sync_entity'
    SamlGroupSyncEntity.new(self, data)
  end


  # Canonical facade: client.Scan.list / client.Scan.load({ "id" => ... })
  def Scan(data = nil)
    require_relative 'entity/scan_entity'
    ScanEntity.new(self, data)
  end


  # Canonical facade: client.Self.list / client.Self.load({ "id" => ... })
  def Self(data = nil)
    require_relative 'entity/self_entity'
    SelfEntity.new(self, data)
  end


  # Canonical facade: client.Service.list / client.Service.load({ "id" => ... })
  def Service(data = nil)
    require_relative 'entity/service_entity'
    ServiceEntity.new(self, data)
  end


  # Canonical facade: client.Status.list / client.Status.load({ "id" => ... })
  def Status(data = nil)
    require_relative 'entity/status_entity'
    StatusEntity.new(self, data)
  end


  # Canonical facade: client.StatusBasic.list / client.StatusBasic.load({ "id" => ... })
  def StatusBasic(data = nil)
    require_relative 'entity/status_basic_entity'
    StatusBasicEntity.new(self, data)
  end


  # Canonical facade: client.StorageRegion.list / client.StorageRegion.load({ "id" => ... })
  def StorageRegion(data = nil)
    require_relative 'entity/storage_region_entity'
    StorageRegionEntity.new(self, data)
  end


  # Canonical facade: client.Swift.list / client.Swift.load({ "id" => ... })
  def Swift(data = nil)
    require_relative 'entity/swift_entity'
    SwiftEntity.new(self, data)
  end


  # Canonical facade: client.Sync.list / client.Sync.load({ "id" => ... })
  def Sync(data = nil)
    require_relative 'entity/sync_entity'
    SyncEntity.new(self, data)
  end


  # Canonical facade: client.Tag.list / client.Tag.load({ "id" => ... })
  def Tag(data = nil)
    require_relative 'entity/tag_entity'
    TagEntity.new(self, data)
  end


  # Canonical facade: client.Team.list / client.Team.load({ "id" => ... })
  def Team(data = nil)
    require_relative 'entity/team_entity'
    TeamEntity.new(self, data)
  end


  # Canonical facade: client.Terraform.list / client.Terraform.load({ "id" => ... })
  def Terraform(data = nil)
    require_relative 'entity/terraform_entity'
    TerraformEntity.new(self, data)
  end


  # Canonical facade: client.Test.list / client.Test.load({ "id" => ... })
  def Test(data = nil)
    require_relative 'entity/test_entity'
    TestEntity.new(self, data)
  end


  # Canonical facade: client.Token.list / client.Token.load({ "id" => ... })
  def Token(data = nil)
    require_relative 'entity/token_entity'
    TokenEntity.new(self, data)
  end


  # Canonical facade: client.TransferRegion.list / client.TransferRegion.load({ "id" => ... })
  def TransferRegion(data = nil)
    require_relative 'entity/transfer_region_entity'
    TransferRegionEntity.new(self, data)
  end


  # Canonical facade: client.User.list / client.User.load({ "id" => ... })
  def User(data = nil)
    require_relative 'entity/user_entity'
    UserEntity.new(self, data)
  end


  # Canonical facade: client.UserAuthToken.list / client.UserAuthToken.load({ "id" => ... })
  def UserAuthToken(data = nil)
    require_relative 'entity/user_auth_token_entity'
    UserAuthTokenEntity.new(self, data)
  end


  # Canonical facade: client.UserAuthenticationToken.list / client.UserAuthenticationToken.load({ "id" => ... })
  def UserAuthenticationToken(data = nil)
    require_relative 'entity/user_authentication_token_entity'
    UserAuthenticationTokenEntity.new(self, data)
  end


  # Canonical facade: client.UserBrief.list / client.UserBrief.load({ "id" => ... })
  def UserBrief(data = nil)
    require_relative 'entity/user_brief_entity'
    UserBriefEntity.new(self, data)
  end


  # Canonical facade: client.UserProfile.list / client.UserProfile.load({ "id" => ... })
  def UserProfile(data = nil)
    require_relative 'entity/user_profile_entity'
    UserProfileEntity.new(self, data)
  end


  # Canonical facade: client.Vagrant.list / client.Vagrant.load({ "id" => ... })
  def Vagrant(data = nil)
    require_relative 'entity/vagrant_entity'
    VagrantEntity.new(self, data)
  end


  # Canonical facade: client.Validate.list / client.Validate.load({ "id" => ... })
  def Validate(data = nil)
    require_relative 'entity/validate_entity'
    ValidateEntity.new(self, data)
  end


  # Canonical facade: client.Version.list / client.Version.load({ "id" => ... })
  def Version(data = nil)
    require_relative 'entity/version_entity'
    VersionEntity.new(self, data)
  end


  # Canonical facade: client.Vulnerability.list / client.Vulnerability.load({ "id" => ... })
  def Vulnerability(data = nil)
    require_relative 'entity/vulnerability_entity'
    VulnerabilityEntity.new(self, data)
  end


  # Canonical facade: client.VulnerabilityPolicy.list / client.VulnerabilityPolicy.load({ "id" => ... })
  def VulnerabilityPolicy(data = nil)
    require_relative 'entity/vulnerability_policy_entity'
    VulnerabilityPolicyEntity.new(self, data)
  end


  # Canonical facade: client.Webhook.list / client.Webhook.load({ "id" => ... })
  def Webhook(data = nil)
    require_relative 'entity/webhook_entity'
    WebhookEntity.new(self, data)
  end


  # Canonical facade: client.X509Ecdsa.list / client.X509Ecdsa.load({ "id" => ... })
  def X509Ecdsa(data = nil)
    require_relative 'entity/x509_ecdsa_entity'
    X509EcdsaEntity.new(self, data)
  end


  # Canonical facade: client.X509Rsa.list / client.X509Rsa.load({ "id" => ... })
  def X509Rsa(data = nil)
    require_relative 'entity/x509_rsa_entity'
    X509RsaEntity.new(self, data)
  end



  def self.test(testopts = nil, sdkopts = nil)
    sdkopts = sdkopts || {}
    sdkopts = VoxgigStruct.clone(sdkopts)
    sdkopts = {} unless sdkopts.is_a?(Hash)

    testopts = testopts || {}
    testopts = VoxgigStruct.clone(testopts)
    testopts = {} unless testopts.is_a?(Hash)
    testopts["active"] = true

    VoxgigStruct.setpath(sdkopts, "feature.test", testopts)

    sdk = CloudsmithSDK.new(sdkopts)
    sdk.mode = "test"
    sdk
  end
end
