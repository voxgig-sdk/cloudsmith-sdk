// Cloudsmith Ts SDK

import { AbortEntity } from './entity/AbortEntity'
import { AlpineEntity } from './entity/AlpineEntity'
import { AuditLogEntity } from './entity/AuditLogEntity'
import { BasicEntity } from './entity/BasicEntity'
import { CargoEntity } from './entity/CargoEntity'
import { CocoapodEntity } from './entity/CocoapodEntity'
import { CompleteEntity } from './entity/CompleteEntity'
import { ComposerEntity } from './entity/ComposerEntity'
import { ConanEntity } from './entity/ConanEntity'
import { CondaEntity } from './entity/CondaEntity'
import { CopyEntity } from './entity/CopyEntity'
import { CranEntity } from './entity/CranEntity'
import { DartEntity } from './entity/DartEntity'
import { DebEntity } from './entity/DebEntity'
import { DenyPolicyEntity } from './entity/DenyPolicyEntity'
import { DependencyEntity } from './entity/DependencyEntity'
import { DisableEntity } from './entity/DisableEntity'
import { DistributionFullEntity } from './entity/DistributionFullEntity'
import { DistroEntity } from './entity/DistroEntity'
import { DockerEntity } from './entity/DockerEntity'
import { DynamicMappingEntity } from './entity/DynamicMappingEntity'
import { EcdsaEntity } from './entity/EcdsaEntity'
import { EnableEntity } from './entity/EnableEntity'
import { EntitlementEntity } from './entity/EntitlementEntity'
import { EvaluationEntity } from './entity/EvaluationEntity'
import { FileEntity } from './entity/FileEntity'
import { FormatEntity } from './entity/FormatEntity'
import { GeoipEntity } from './entity/GeoipEntity'
import { GonEntity } from './entity/GonEntity'
import { Gon2Entity } from './entity/Gon2Entity'
import { Gon3Entity } from './entity/Gon3Entity'
import { Gon4Entity } from './entity/Gon4Entity'
import { Gon5Entity } from './entity/Gon5Entity'
import { Gon6Entity } from './entity/Gon6Entity'
import { Gon7Entity } from './entity/Gon7Entity'
import { Gon8Entity } from './entity/Gon8Entity'
import { Gon9Entity } from './entity/Gon9Entity'
import { GpgEntity } from './entity/GpgEntity'
import { GroupEntity } from './entity/GroupEntity'
import { HelmEntity } from './entity/HelmEntity'
import { HexEntity } from './entity/HexEntity'
import { HistoryEntity } from './entity/HistoryEntity'
import { HuggingfaceEntity } from './entity/HuggingfaceEntity'
import { InfoEntity } from './entity/InfoEntity'
import { InviteEntity } from './entity/InviteEntity'
import { LicensePolicyEntity } from './entity/LicensePolicyEntity'
import { LimitEntity } from './entity/LimitEntity'
import { LuarockEntity } from './entity/LuarockEntity'
import { MavenEntity } from './entity/MavenEntity'
import { MemberEntity } from './entity/MemberEntity'
import { MoveEntity } from './entity/MoveEntity'
import { NamespaceEntity } from './entity/NamespaceEntity'
import { NamespaceAuditLogEntity } from './entity/NamespaceAuditLogEntity'
import { NpmEntity } from './entity/NpmEntity'
import { NugetEntity } from './entity/NugetEntity'
import { OpenidConnectEntity } from './entity/OpenidConnectEntity'
import { OrgEntity } from './entity/OrgEntity'
import { OrganizationGroupSyncEntity } from './entity/OrganizationGroupSyncEntity'
import { OrganizationGroupSyncStatusEntity } from './entity/OrganizationGroupSyncStatusEntity'
import { OrganizationInviteEntity } from './entity/OrganizationInviteEntity'
import { OrganizationInviteExtendEntity } from './entity/OrganizationInviteExtendEntity'
import { OrganizationMembershipEntity } from './entity/OrganizationMembershipEntity'
import { OrganizationMembershipRoleUpdateEntity } from './entity/OrganizationMembershipRoleUpdateEntity'
import { OrganizationMembershipVisibilityUpdateEntity } from './entity/OrganizationMembershipVisibilityUpdateEntity'
import { OrganizationPackageLicensePolicyEntity } from './entity/OrganizationPackageLicensePolicyEntity'
import { OrganizationPackageVulnerabilityPolicyEntity } from './entity/OrganizationPackageVulnerabilityPolicyEntity'
import { OrganizationSamlAuthEntity } from './entity/OrganizationSamlAuthEntity'
import { OrganizationTeamEntity } from './entity/OrganizationTeamEntity'
import { OrganizationTeamMemberEntity } from './entity/OrganizationTeamMemberEntity'
import { OssEntity } from './entity/OssEntity'
import { P2nEntity } from './entity/P2nEntity'
import { P2n2Entity } from './entity/P2n2Entity'
import { PackageEntity } from './entity/PackageEntity'
import { PackageDenyPolicyEntity } from './entity/PackageDenyPolicyEntity'
import { PackageFilePartsUploadEntity } from './entity/PackageFilePartsUploadEntity'
import { PackageFileUploadEntity } from './entity/PackageFileUploadEntity'
import { PackageLicensePolicyEvaluationEntity } from './entity/PackageLicensePolicyEvaluationEntity'
import { PackageVersionBadgeEntity } from './entity/PackageVersionBadgeEntity'
import { PackageVulnerabilityPolicyEvaluationEntity } from './entity/PackageVulnerabilityPolicyEvaluationEntity'
import { PrivilegeEntity } from './entity/PrivilegeEntity'
import { ProfileEntity } from './entity/ProfileEntity'
import { ProviderSettingEntity } from './entity/ProviderSettingEntity'
import { ProviderSettingsWriteEntity } from './entity/ProviderSettingsWriteEntity'
import { PythonEntity } from './entity/PythonEntity'
import { QuarantineEntity } from './entity/QuarantineEntity'
import { QuotaEntity } from './entity/QuotaEntity'
import { RawEntity } from './entity/RawEntity'
import { RefreshEntity } from './entity/RefreshEntity'
import { RegenerateEntity } from './entity/RegenerateEntity'
import { RepoEntity } from './entity/RepoEntity'
import { RepositoryAuditLogEntity } from './entity/RepositoryAuditLogEntity'
import { RepositoryEcdsaKeyEntity } from './entity/RepositoryEcdsaKeyEntity'
import { RepositoryGeoIpRuleEntity } from './entity/RepositoryGeoIpRuleEntity'
import { RepositoryGeoIpStatusEntity } from './entity/RepositoryGeoIpStatusEntity'
import { RepositoryGeoIpTestAddressEntity } from './entity/RepositoryGeoIpTestAddressEntity'
import { RepositoryGpgKeyEntity } from './entity/RepositoryGpgKeyEntity'
import { RepositoryPrivilegeInputEntity } from './entity/RepositoryPrivilegeInputEntity'
import { RepositoryRetentionRuleEntity } from './entity/RepositoryRetentionRuleEntity'
import { RepositoryRsaKeyEntity } from './entity/RepositoryRsaKeyEntity'
import { RepositoryTokenEntity } from './entity/RepositoryTokenEntity'
import { RepositoryTokenRefreshEntity } from './entity/RepositoryTokenRefreshEntity'
import { RepositoryTokenSyncEntity } from './entity/RepositoryTokenSyncEntity'
import { RepositoryWebhookEntity } from './entity/RepositoryWebhookEntity'
import { RepositoryX509EcdsaCertificateEntity } from './entity/RepositoryX509EcdsaCertificateEntity'
import { RepositoryX509RsaCertificateEntity } from './entity/RepositoryX509RsaCertificateEntity'
import { ResetEntity } from './entity/ResetEntity'
import { ResourcesRateCheckEntity } from './entity/ResourcesRateCheckEntity'
import { ResyncEntity } from './entity/ResyncEntity'
import { RetentionEntity } from './entity/RetentionEntity'
import { RpmEntity } from './entity/RpmEntity'
import { RsaEntity } from './entity/RsaEntity'
import { RubyEntity } from './entity/RubyEntity'
import { SamlGroupSyncEntity } from './entity/SamlGroupSyncEntity'
import { ScanEntity } from './entity/ScanEntity'
import { SelfEntity } from './entity/SelfEntity'
import { ServiceEntity } from './entity/ServiceEntity'
import { StatusEntity } from './entity/StatusEntity'
import { StatusBasicEntity } from './entity/StatusBasicEntity'
import { StorageRegionEntity } from './entity/StorageRegionEntity'
import { SwiftEntity } from './entity/SwiftEntity'
import { SyncEntity } from './entity/SyncEntity'
import { TagEntity } from './entity/TagEntity'
import { TeamEntity } from './entity/TeamEntity'
import { TerraformEntity } from './entity/TerraformEntity'
import { TestEntity } from './entity/TestEntity'
import { TokenEntity } from './entity/TokenEntity'
import { TransferRegionEntity } from './entity/TransferRegionEntity'
import { UserEntity } from './entity/UserEntity'
import { UserAuthTokenEntity } from './entity/UserAuthTokenEntity'
import { UserAuthenticationTokenEntity } from './entity/UserAuthenticationTokenEntity'
import { UserBriefEntity } from './entity/UserBriefEntity'
import { UserProfileEntity } from './entity/UserProfileEntity'
import { VagrantEntity } from './entity/VagrantEntity'
import { ValidateEntity } from './entity/ValidateEntity'
import { VersionEntity } from './entity/VersionEntity'
import { VulnerabilityEntity } from './entity/VulnerabilityEntity'
import { VulnerabilityPolicyEntity } from './entity/VulnerabilityPolicyEntity'
import { WebhookEntity } from './entity/WebhookEntity'
import { X509EcdsaEntity } from './entity/X509EcdsaEntity'
import { X509RsaEntity } from './entity/X509RsaEntity'

export type * from './CloudsmithTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { CloudsmithEntityBase } from './CloudsmithEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class CloudsmithSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    // Add features in the resolved order (makeOptions puts an explicit
    // array order first, else defaults to test-first). Ordering matters:
    // the `test` feature installs the base mock transport and the transport
    // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
    // so `test` must be added before them to sit at the base of the chain.
    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  // Entity access: `client.Abort().list()` / `client.Abort().load({ id })`.
  Abort(data?: any) {
    const self = this
    return new AbortEntity(self,data)
  }


  // Entity access: `client.Alpine().list()` / `client.Alpine().load({ id })`.
  Alpine(data?: any) {
    const self = this
    return new AlpineEntity(self,data)
  }


  // Entity access: `client.AuditLog().list()` / `client.AuditLog().load({ id })`.
  AuditLog(data?: any) {
    const self = this
    return new AuditLogEntity(self,data)
  }


  // Entity access: `client.Basic().list()` / `client.Basic().load({ id })`.
  Basic(data?: any) {
    const self = this
    return new BasicEntity(self,data)
  }


  // Entity access: `client.Cargo().list()` / `client.Cargo().load({ id })`.
  Cargo(data?: any) {
    const self = this
    return new CargoEntity(self,data)
  }


  // Entity access: `client.Cocoapod().list()` / `client.Cocoapod().load({ id })`.
  Cocoapod(data?: any) {
    const self = this
    return new CocoapodEntity(self,data)
  }


  // Entity access: `client.Complete().list()` / `client.Complete().load({ id })`.
  Complete(data?: any) {
    const self = this
    return new CompleteEntity(self,data)
  }


  // Entity access: `client.Composer().list()` / `client.Composer().load({ id })`.
  Composer(data?: any) {
    const self = this
    return new ComposerEntity(self,data)
  }


  // Entity access: `client.Conan().list()` / `client.Conan().load({ id })`.
  Conan(data?: any) {
    const self = this
    return new ConanEntity(self,data)
  }


  // Entity access: `client.Conda().list()` / `client.Conda().load({ id })`.
  Conda(data?: any) {
    const self = this
    return new CondaEntity(self,data)
  }


  // Entity access: `client.Copy().list()` / `client.Copy().load({ id })`.
  Copy(data?: any) {
    const self = this
    return new CopyEntity(self,data)
  }


  // Entity access: `client.Cran().list()` / `client.Cran().load({ id })`.
  Cran(data?: any) {
    const self = this
    return new CranEntity(self,data)
  }


  // Entity access: `client.Dart().list()` / `client.Dart().load({ id })`.
  Dart(data?: any) {
    const self = this
    return new DartEntity(self,data)
  }


  // Entity access: `client.Deb().list()` / `client.Deb().load({ id })`.
  Deb(data?: any) {
    const self = this
    return new DebEntity(self,data)
  }


  // Entity access: `client.DenyPolicy().list()` / `client.DenyPolicy().load({ id })`.
  DenyPolicy(data?: any) {
    const self = this
    return new DenyPolicyEntity(self,data)
  }


  // Entity access: `client.Dependency().list()` / `client.Dependency().load({ id })`.
  Dependency(data?: any) {
    const self = this
    return new DependencyEntity(self,data)
  }


  // Entity access: `client.Disable().list()` / `client.Disable().load({ id })`.
  Disable(data?: any) {
    const self = this
    return new DisableEntity(self,data)
  }


  // Entity access: `client.DistributionFull().list()` / `client.DistributionFull().load({ id })`.
  DistributionFull(data?: any) {
    const self = this
    return new DistributionFullEntity(self,data)
  }


  // Entity access: `client.Distro().list()` / `client.Distro().load({ id })`.
  Distro(data?: any) {
    const self = this
    return new DistroEntity(self,data)
  }


  // Entity access: `client.Docker().list()` / `client.Docker().load({ id })`.
  Docker(data?: any) {
    const self = this
    return new DockerEntity(self,data)
  }


  // Entity access: `client.DynamicMapping().list()` / `client.DynamicMapping().load({ id })`.
  DynamicMapping(data?: any) {
    const self = this
    return new DynamicMappingEntity(self,data)
  }


  // Entity access: `client.Ecdsa().list()` / `client.Ecdsa().load({ id })`.
  Ecdsa(data?: any) {
    const self = this
    return new EcdsaEntity(self,data)
  }


  // Entity access: `client.Enable().list()` / `client.Enable().load({ id })`.
  Enable(data?: any) {
    const self = this
    return new EnableEntity(self,data)
  }


  // Entity access: `client.Entitlement().list()` / `client.Entitlement().load({ id })`.
  Entitlement(data?: any) {
    const self = this
    return new EntitlementEntity(self,data)
  }


  // Entity access: `client.Evaluation().list()` / `client.Evaluation().load({ id })`.
  Evaluation(data?: any) {
    const self = this
    return new EvaluationEntity(self,data)
  }


  // Entity access: `client.File().list()` / `client.File().load({ id })`.
  File(data?: any) {
    const self = this
    return new FileEntity(self,data)
  }


  // Entity access: `client.Format().list()` / `client.Format().load({ id })`.
  Format(data?: any) {
    const self = this
    return new FormatEntity(self,data)
  }


  // Entity access: `client.Geoip().list()` / `client.Geoip().load({ id })`.
  Geoip(data?: any) {
    const self = this
    return new GeoipEntity(self,data)
  }


  // Entity access: `client.Gon().list()` / `client.Gon().load({ id })`.
  Gon(data?: any) {
    const self = this
    return new GonEntity(self,data)
  }


  // Entity access: `client.Gon2().list()` / `client.Gon2().load({ id })`.
  Gon2(data?: any) {
    const self = this
    return new Gon2Entity(self,data)
  }


  // Entity access: `client.Gon3().list()` / `client.Gon3().load({ id })`.
  Gon3(data?: any) {
    const self = this
    return new Gon3Entity(self,data)
  }


  // Entity access: `client.Gon4().list()` / `client.Gon4().load({ id })`.
  Gon4(data?: any) {
    const self = this
    return new Gon4Entity(self,data)
  }


  // Entity access: `client.Gon5().list()` / `client.Gon5().load({ id })`.
  Gon5(data?: any) {
    const self = this
    return new Gon5Entity(self,data)
  }


  // Entity access: `client.Gon6().list()` / `client.Gon6().load({ id })`.
  Gon6(data?: any) {
    const self = this
    return new Gon6Entity(self,data)
  }


  // Entity access: `client.Gon7().list()` / `client.Gon7().load({ id })`.
  Gon7(data?: any) {
    const self = this
    return new Gon7Entity(self,data)
  }


  // Entity access: `client.Gon8().list()` / `client.Gon8().load({ id })`.
  Gon8(data?: any) {
    const self = this
    return new Gon8Entity(self,data)
  }


  // Entity access: `client.Gon9().list()` / `client.Gon9().load({ id })`.
  Gon9(data?: any) {
    const self = this
    return new Gon9Entity(self,data)
  }


  // Entity access: `client.Gpg().list()` / `client.Gpg().load({ id })`.
  Gpg(data?: any) {
    const self = this
    return new GpgEntity(self,data)
  }


  // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
  Group(data?: any) {
    const self = this
    return new GroupEntity(self,data)
  }


  // Entity access: `client.Helm().list()` / `client.Helm().load({ id })`.
  Helm(data?: any) {
    const self = this
    return new HelmEntity(self,data)
  }


  // Entity access: `client.Hex().list()` / `client.Hex().load({ id })`.
  Hex(data?: any) {
    const self = this
    return new HexEntity(self,data)
  }


  // Entity access: `client.History().list()` / `client.History().load({ id })`.
  History(data?: any) {
    const self = this
    return new HistoryEntity(self,data)
  }


  // Entity access: `client.Huggingface().list()` / `client.Huggingface().load({ id })`.
  Huggingface(data?: any) {
    const self = this
    return new HuggingfaceEntity(self,data)
  }


  // Entity access: `client.Info().list()` / `client.Info().load({ id })`.
  Info(data?: any) {
    const self = this
    return new InfoEntity(self,data)
  }


  // Entity access: `client.Invite().list()` / `client.Invite().load({ id })`.
  Invite(data?: any) {
    const self = this
    return new InviteEntity(self,data)
  }


  // Entity access: `client.LicensePolicy().list()` / `client.LicensePolicy().load({ id })`.
  LicensePolicy(data?: any) {
    const self = this
    return new LicensePolicyEntity(self,data)
  }


  // Entity access: `client.Limit().list()` / `client.Limit().load({ id })`.
  Limit(data?: any) {
    const self = this
    return new LimitEntity(self,data)
  }


  // Entity access: `client.Luarock().list()` / `client.Luarock().load({ id })`.
  Luarock(data?: any) {
    const self = this
    return new LuarockEntity(self,data)
  }


  // Entity access: `client.Maven().list()` / `client.Maven().load({ id })`.
  Maven(data?: any) {
    const self = this
    return new MavenEntity(self,data)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  Member(data?: any) {
    const self = this
    return new MemberEntity(self,data)
  }


  // Entity access: `client.Move().list()` / `client.Move().load({ id })`.
  Move(data?: any) {
    const self = this
    return new MoveEntity(self,data)
  }


  // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
  Namespace(data?: any) {
    const self = this
    return new NamespaceEntity(self,data)
  }


  // Entity access: `client.NamespaceAuditLog().list()` / `client.NamespaceAuditLog().load({ id })`.
  NamespaceAuditLog(data?: any) {
    const self = this
    return new NamespaceAuditLogEntity(self,data)
  }


  // Entity access: `client.Npm().list()` / `client.Npm().load({ id })`.
  Npm(data?: any) {
    const self = this
    return new NpmEntity(self,data)
  }


  // Entity access: `client.Nuget().list()` / `client.Nuget().load({ id })`.
  Nuget(data?: any) {
    const self = this
    return new NugetEntity(self,data)
  }


  // Entity access: `client.OpenidConnect().list()` / `client.OpenidConnect().load({ id })`.
  OpenidConnect(data?: any) {
    const self = this
    return new OpenidConnectEntity(self,data)
  }


  // Entity access: `client.Org().list()` / `client.Org().load({ id })`.
  Org(data?: any) {
    const self = this
    return new OrgEntity(self,data)
  }


  // Entity access: `client.OrganizationGroupSync().list()` / `client.OrganizationGroupSync().load({ id })`.
  OrganizationGroupSync(data?: any) {
    const self = this
    return new OrganizationGroupSyncEntity(self,data)
  }


  // Entity access: `client.OrganizationGroupSyncStatus().list()` / `client.OrganizationGroupSyncStatus().load({ id })`.
  OrganizationGroupSyncStatus(data?: any) {
    const self = this
    return new OrganizationGroupSyncStatusEntity(self,data)
  }


  // Entity access: `client.OrganizationInvite().list()` / `client.OrganizationInvite().load({ id })`.
  OrganizationInvite(data?: any) {
    const self = this
    return new OrganizationInviteEntity(self,data)
  }


  // Entity access: `client.OrganizationInviteExtend().list()` / `client.OrganizationInviteExtend().load({ id })`.
  OrganizationInviteExtend(data?: any) {
    const self = this
    return new OrganizationInviteExtendEntity(self,data)
  }


  // Entity access: `client.OrganizationMembership().list()` / `client.OrganizationMembership().load({ id })`.
  OrganizationMembership(data?: any) {
    const self = this
    return new OrganizationMembershipEntity(self,data)
  }


  // Entity access: `client.OrganizationMembershipRoleUpdate().list()` / `client.OrganizationMembershipRoleUpdate().load({ id })`.
  OrganizationMembershipRoleUpdate(data?: any) {
    const self = this
    return new OrganizationMembershipRoleUpdateEntity(self,data)
  }


  // Entity access: `client.OrganizationMembershipVisibilityUpdate().list()` / `client.OrganizationMembershipVisibilityUpdate().load({ id })`.
  OrganizationMembershipVisibilityUpdate(data?: any) {
    const self = this
    return new OrganizationMembershipVisibilityUpdateEntity(self,data)
  }


  // Entity access: `client.OrganizationPackageLicensePolicy().list()` / `client.OrganizationPackageLicensePolicy().load({ id })`.
  OrganizationPackageLicensePolicy(data?: any) {
    const self = this
    return new OrganizationPackageLicensePolicyEntity(self,data)
  }


  // Entity access: `client.OrganizationPackageVulnerabilityPolicy().list()` / `client.OrganizationPackageVulnerabilityPolicy().load({ id })`.
  OrganizationPackageVulnerabilityPolicy(data?: any) {
    const self = this
    return new OrganizationPackageVulnerabilityPolicyEntity(self,data)
  }


  // Entity access: `client.OrganizationSamlAuth().list()` / `client.OrganizationSamlAuth().load({ id })`.
  OrganizationSamlAuth(data?: any) {
    const self = this
    return new OrganizationSamlAuthEntity(self,data)
  }


  // Entity access: `client.OrganizationTeam().list()` / `client.OrganizationTeam().load({ id })`.
  OrganizationTeam(data?: any) {
    const self = this
    return new OrganizationTeamEntity(self,data)
  }


  // Entity access: `client.OrganizationTeamMember().list()` / `client.OrganizationTeamMember().load({ id })`.
  OrganizationTeamMember(data?: any) {
    const self = this
    return new OrganizationTeamMemberEntity(self,data)
  }


  // Entity access: `client.Oss().list()` / `client.Oss().load({ id })`.
  Oss(data?: any) {
    const self = this
    return new OssEntity(self,data)
  }


  // Entity access: `client.P2n().list()` / `client.P2n().load({ id })`.
  P2n(data?: any) {
    const self = this
    return new P2nEntity(self,data)
  }


  // Entity access: `client.P2n2().list()` / `client.P2n2().load({ id })`.
  P2n2(data?: any) {
    const self = this
    return new P2n2Entity(self,data)
  }


  // Entity access: `client.Package().list()` / `client.Package().load({ id })`.
  Package(data?: any) {
    const self = this
    return new PackageEntity(self,data)
  }


  // Entity access: `client.PackageDenyPolicy().list()` / `client.PackageDenyPolicy().load({ id })`.
  PackageDenyPolicy(data?: any) {
    const self = this
    return new PackageDenyPolicyEntity(self,data)
  }


  // Entity access: `client.PackageFilePartsUpload().list()` / `client.PackageFilePartsUpload().load({ id })`.
  PackageFilePartsUpload(data?: any) {
    const self = this
    return new PackageFilePartsUploadEntity(self,data)
  }


  // Entity access: `client.PackageFileUpload().list()` / `client.PackageFileUpload().load({ id })`.
  PackageFileUpload(data?: any) {
    const self = this
    return new PackageFileUploadEntity(self,data)
  }


  // Entity access: `client.PackageLicensePolicyEvaluation().list()` / `client.PackageLicensePolicyEvaluation().load({ id })`.
  PackageLicensePolicyEvaluation(data?: any) {
    const self = this
    return new PackageLicensePolicyEvaluationEntity(self,data)
  }


  // Entity access: `client.PackageVersionBadge().list()` / `client.PackageVersionBadge().load({ id })`.
  PackageVersionBadge(data?: any) {
    const self = this
    return new PackageVersionBadgeEntity(self,data)
  }


  // Entity access: `client.PackageVulnerabilityPolicyEvaluation().list()` / `client.PackageVulnerabilityPolicyEvaluation().load({ id })`.
  PackageVulnerabilityPolicyEvaluation(data?: any) {
    const self = this
    return new PackageVulnerabilityPolicyEvaluationEntity(self,data)
  }


  // Entity access: `client.Privilege().list()` / `client.Privilege().load({ id })`.
  Privilege(data?: any) {
    const self = this
    return new PrivilegeEntity(self,data)
  }


  // Entity access: `client.Profile().list()` / `client.Profile().load({ id })`.
  Profile(data?: any) {
    const self = this
    return new ProfileEntity(self,data)
  }


  // Entity access: `client.ProviderSetting().list()` / `client.ProviderSetting().load({ id })`.
  ProviderSetting(data?: any) {
    const self = this
    return new ProviderSettingEntity(self,data)
  }


  // Entity access: `client.ProviderSettingsWrite().list()` / `client.ProviderSettingsWrite().load({ id })`.
  ProviderSettingsWrite(data?: any) {
    const self = this
    return new ProviderSettingsWriteEntity(self,data)
  }


  // Entity access: `client.Python().list()` / `client.Python().load({ id })`.
  Python(data?: any) {
    const self = this
    return new PythonEntity(self,data)
  }


  // Entity access: `client.Quarantine().list()` / `client.Quarantine().load({ id })`.
  Quarantine(data?: any) {
    const self = this
    return new QuarantineEntity(self,data)
  }


  // Entity access: `client.Quota().list()` / `client.Quota().load({ id })`.
  Quota(data?: any) {
    const self = this
    return new QuotaEntity(self,data)
  }


  // Entity access: `client.Raw().list()` / `client.Raw().load({ id })`.
  Raw(data?: any) {
    const self = this
    return new RawEntity(self,data)
  }


  // Entity access: `client.Refresh().list()` / `client.Refresh().load({ id })`.
  Refresh(data?: any) {
    const self = this
    return new RefreshEntity(self,data)
  }


  // Entity access: `client.Regenerate().list()` / `client.Regenerate().load({ id })`.
  Regenerate(data?: any) {
    const self = this
    return new RegenerateEntity(self,data)
  }


  // Entity access: `client.Repo().list()` / `client.Repo().load({ id })`.
  Repo(data?: any) {
    const self = this
    return new RepoEntity(self,data)
  }


  // Entity access: `client.RepositoryAuditLog().list()` / `client.RepositoryAuditLog().load({ id })`.
  RepositoryAuditLog(data?: any) {
    const self = this
    return new RepositoryAuditLogEntity(self,data)
  }


  // Entity access: `client.RepositoryEcdsaKey().list()` / `client.RepositoryEcdsaKey().load({ id })`.
  RepositoryEcdsaKey(data?: any) {
    const self = this
    return new RepositoryEcdsaKeyEntity(self,data)
  }


  // Entity access: `client.RepositoryGeoIpRule().list()` / `client.RepositoryGeoIpRule().load({ id })`.
  RepositoryGeoIpRule(data?: any) {
    const self = this
    return new RepositoryGeoIpRuleEntity(self,data)
  }


  // Entity access: `client.RepositoryGeoIpStatus().list()` / `client.RepositoryGeoIpStatus().load({ id })`.
  RepositoryGeoIpStatus(data?: any) {
    const self = this
    return new RepositoryGeoIpStatusEntity(self,data)
  }


  // Entity access: `client.RepositoryGeoIpTestAddress().list()` / `client.RepositoryGeoIpTestAddress().load({ id })`.
  RepositoryGeoIpTestAddress(data?: any) {
    const self = this
    return new RepositoryGeoIpTestAddressEntity(self,data)
  }


  // Entity access: `client.RepositoryGpgKey().list()` / `client.RepositoryGpgKey().load({ id })`.
  RepositoryGpgKey(data?: any) {
    const self = this
    return new RepositoryGpgKeyEntity(self,data)
  }


  // Entity access: `client.RepositoryPrivilegeInput().list()` / `client.RepositoryPrivilegeInput().load({ id })`.
  RepositoryPrivilegeInput(data?: any) {
    const self = this
    return new RepositoryPrivilegeInputEntity(self,data)
  }


  // Entity access: `client.RepositoryRetentionRule().list()` / `client.RepositoryRetentionRule().load({ id })`.
  RepositoryRetentionRule(data?: any) {
    const self = this
    return new RepositoryRetentionRuleEntity(self,data)
  }


  // Entity access: `client.RepositoryRsaKey().list()` / `client.RepositoryRsaKey().load({ id })`.
  RepositoryRsaKey(data?: any) {
    const self = this
    return new RepositoryRsaKeyEntity(self,data)
  }


  // Entity access: `client.RepositoryToken().list()` / `client.RepositoryToken().load({ id })`.
  RepositoryToken(data?: any) {
    const self = this
    return new RepositoryTokenEntity(self,data)
  }


  // Entity access: `client.RepositoryTokenRefresh().list()` / `client.RepositoryTokenRefresh().load({ id })`.
  RepositoryTokenRefresh(data?: any) {
    const self = this
    return new RepositoryTokenRefreshEntity(self,data)
  }


  // Entity access: `client.RepositoryTokenSync().list()` / `client.RepositoryTokenSync().load({ id })`.
  RepositoryTokenSync(data?: any) {
    const self = this
    return new RepositoryTokenSyncEntity(self,data)
  }


  // Entity access: `client.RepositoryWebhook().list()` / `client.RepositoryWebhook().load({ id })`.
  RepositoryWebhook(data?: any) {
    const self = this
    return new RepositoryWebhookEntity(self,data)
  }


  // Entity access: `client.RepositoryX509EcdsaCertificate().list()` / `client.RepositoryX509EcdsaCertificate().load({ id })`.
  RepositoryX509EcdsaCertificate(data?: any) {
    const self = this
    return new RepositoryX509EcdsaCertificateEntity(self,data)
  }


  // Entity access: `client.RepositoryX509RsaCertificate().list()` / `client.RepositoryX509RsaCertificate().load({ id })`.
  RepositoryX509RsaCertificate(data?: any) {
    const self = this
    return new RepositoryX509RsaCertificateEntity(self,data)
  }


  // Entity access: `client.Reset().list()` / `client.Reset().load({ id })`.
  Reset(data?: any) {
    const self = this
    return new ResetEntity(self,data)
  }


  // Entity access: `client.ResourcesRateCheck().list()` / `client.ResourcesRateCheck().load({ id })`.
  ResourcesRateCheck(data?: any) {
    const self = this
    return new ResourcesRateCheckEntity(self,data)
  }


  // Entity access: `client.Resync().list()` / `client.Resync().load({ id })`.
  Resync(data?: any) {
    const self = this
    return new ResyncEntity(self,data)
  }


  // Entity access: `client.Retention().list()` / `client.Retention().load({ id })`.
  Retention(data?: any) {
    const self = this
    return new RetentionEntity(self,data)
  }


  // Entity access: `client.Rpm().list()` / `client.Rpm().load({ id })`.
  Rpm(data?: any) {
    const self = this
    return new RpmEntity(self,data)
  }


  // Entity access: `client.Rsa().list()` / `client.Rsa().load({ id })`.
  Rsa(data?: any) {
    const self = this
    return new RsaEntity(self,data)
  }


  // Entity access: `client.Ruby().list()` / `client.Ruby().load({ id })`.
  Ruby(data?: any) {
    const self = this
    return new RubyEntity(self,data)
  }


  // Entity access: `client.SamlGroupSync().list()` / `client.SamlGroupSync().load({ id })`.
  SamlGroupSync(data?: any) {
    const self = this
    return new SamlGroupSyncEntity(self,data)
  }


  // Entity access: `client.Scan().list()` / `client.Scan().load({ id })`.
  Scan(data?: any) {
    const self = this
    return new ScanEntity(self,data)
  }


  // Entity access: `client.Self().list()` / `client.Self().load({ id })`.
  Self(data?: any) {
    const self = this
    return new SelfEntity(self,data)
  }


  // Entity access: `client.Service().list()` / `client.Service().load({ id })`.
  Service(data?: any) {
    const self = this
    return new ServiceEntity(self,data)
  }


  // Entity access: `client.Status().list()` / `client.Status().load({ id })`.
  Status(data?: any) {
    const self = this
    return new StatusEntity(self,data)
  }


  // Entity access: `client.StatusBasic().list()` / `client.StatusBasic().load({ id })`.
  StatusBasic(data?: any) {
    const self = this
    return new StatusBasicEntity(self,data)
  }


  // Entity access: `client.StorageRegion().list()` / `client.StorageRegion().load({ id })`.
  StorageRegion(data?: any) {
    const self = this
    return new StorageRegionEntity(self,data)
  }


  // Entity access: `client.Swift().list()` / `client.Swift().load({ id })`.
  Swift(data?: any) {
    const self = this
    return new SwiftEntity(self,data)
  }


  // Entity access: `client.Sync().list()` / `client.Sync().load({ id })`.
  Sync(data?: any) {
    const self = this
    return new SyncEntity(self,data)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  Tag(data?: any) {
    const self = this
    return new TagEntity(self,data)
  }


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  Team(data?: any) {
    const self = this
    return new TeamEntity(self,data)
  }


  // Entity access: `client.Terraform().list()` / `client.Terraform().load({ id })`.
  Terraform(data?: any) {
    const self = this
    return new TerraformEntity(self,data)
  }


  // Entity access: `client.Test().list()` / `client.Test().load({ id })`.
  Test(data?: any) {
    const self = this
    return new TestEntity(self,data)
  }


  // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
  Token(data?: any) {
    const self = this
    return new TokenEntity(self,data)
  }


  // Entity access: `client.TransferRegion().list()` / `client.TransferRegion().load({ id })`.
  TransferRegion(data?: any) {
    const self = this
    return new TransferRegionEntity(self,data)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  User(data?: any) {
    const self = this
    return new UserEntity(self,data)
  }


  // Entity access: `client.UserAuthToken().list()` / `client.UserAuthToken().load({ id })`.
  UserAuthToken(data?: any) {
    const self = this
    return new UserAuthTokenEntity(self,data)
  }


  // Entity access: `client.UserAuthenticationToken().list()` / `client.UserAuthenticationToken().load({ id })`.
  UserAuthenticationToken(data?: any) {
    const self = this
    return new UserAuthenticationTokenEntity(self,data)
  }


  // Entity access: `client.UserBrief().list()` / `client.UserBrief().load({ id })`.
  UserBrief(data?: any) {
    const self = this
    return new UserBriefEntity(self,data)
  }


  // Entity access: `client.UserProfile().list()` / `client.UserProfile().load({ id })`.
  UserProfile(data?: any) {
    const self = this
    return new UserProfileEntity(self,data)
  }


  // Entity access: `client.Vagrant().list()` / `client.Vagrant().load({ id })`.
  Vagrant(data?: any) {
    const self = this
    return new VagrantEntity(self,data)
  }


  // Entity access: `client.Validate().list()` / `client.Validate().load({ id })`.
  Validate(data?: any) {
    const self = this
    return new ValidateEntity(self,data)
  }


  // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
  Version(data?: any) {
    const self = this
    return new VersionEntity(self,data)
  }


  // Entity access: `client.Vulnerability().list()` / `client.Vulnerability().load({ id })`.
  Vulnerability(data?: any) {
    const self = this
    return new VulnerabilityEntity(self,data)
  }


  // Entity access: `client.VulnerabilityPolicy().list()` / `client.VulnerabilityPolicy().load({ id })`.
  VulnerabilityPolicy(data?: any) {
    const self = this
    return new VulnerabilityPolicyEntity(self,data)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  Webhook(data?: any) {
    const self = this
    return new WebhookEntity(self,data)
  }


  // Entity access: `client.X509Ecdsa().list()` / `client.X509Ecdsa().load({ id })`.
  X509Ecdsa(data?: any) {
    const self = this
    return new X509EcdsaEntity(self,data)
  }


  // Entity access: `client.X509Rsa().list()` / `client.X509Rsa().load({ id })`.
  X509Rsa(data?: any) {
    const self = this
    return new X509RsaEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new CloudsmithSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return CloudsmithSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'Cloudsmith' }
  }

  toString() {
    return 'Cloudsmith ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = CloudsmithSDK


export {
  stdutil,
  config,

  BaseFeature,
  CloudsmithEntityBase,

  CloudsmithSDK,
  SDK,
}


