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


  // Raw endpoint access is operator-controllable, like every entity op.
  // Blocking it means denying BOTH the 'direct' and 'graphql' tokens, since
  // either one reaches the same endpoint.
  async direct(fetchargs?: any) {
    if (!this._options.allow.op.includes('direct')) {
      return {
        ok: false,
        err: new Error('CloudsmithSDK: direct: operation not allowed by' +
          ' SDK option allow.op value: "' + this._options.allow.op + '"'),
      }
    }

    return this._rawRequest(fetchargs)
  }


  // Ungated request path shared by direct() and graphql(), each of which
  // checks its own allow.op token first. Private, rather than a flag on
  // fetchargs: a caller-supplied marker would let anyone opt straight back
  // out of the gate by passing it.
  async _rawRequest(fetchargs?: any) {
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



  // Raw GraphQL access: the pressure valve that makes the generated
  // surface's deliberate omissions (per-call selection sets, typed filter
  // builders, batching, subscriptions) livable — the whole schema stays
  // reachable.
  //
  // Thin wrapper over the same prepare/fetch path `direct` uses, with the
  // one thing raw `direct` cannot do for GraphQL: a GraphQL failure rides
  // HTTP 200 as a top-level `errors` array, so status alone would report a
  // failed query as ok.
  //
  // NOTE: like `direct`, this bypasses the feature pipeline — no retry,
  // ratelimit or paging features apply.
  async graphql(query: string, variables?: any, ctrl?: any) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudsmithSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res: any = await this._rawRequest({
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: { query, variables: variables || {} },
      ctrl,
    })

    if (res instanceof Error) {
      return res
    }

    // Errors are read BEFORE any status check: a GraphQL parse or validation
    // failure comes back as HTTP 400 carrying the standard { errors: [...] }
    // body, and the raw path represents a non-2xx as { ok: false } with no
    // err — so returning early on status would discard the server's own
    // diagnostics, which are the only useful part of that response.
    const errors = null == res.data ? undefined : res.data.errors

    if (null != errors && Array.isArray(errors) && 0 < errors.length) {
      const first = errors[0] || {}
      const err: any = new Error('CloudsmithSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Abort().list()` / `client.Abort().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Abort(entopts?: Record<string, any>) {
    const self = this
    return new AbortEntity(self, entopts)
  }


  // Entity access: `client.Alpine().list()` / `client.Alpine().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Alpine(entopts?: Record<string, any>) {
    const self = this
    return new AlpineEntity(self, entopts)
  }


  // Entity access: `client.AuditLog().list()` / `client.AuditLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AuditLog(entopts?: Record<string, any>) {
    const self = this
    return new AuditLogEntity(self, entopts)
  }


  // Entity access: `client.Basic().list()` / `client.Basic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Basic(entopts?: Record<string, any>) {
    const self = this
    return new BasicEntity(self, entopts)
  }


  // Entity access: `client.Cargo().list()` / `client.Cargo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cargo(entopts?: Record<string, any>) {
    const self = this
    return new CargoEntity(self, entopts)
  }


  // Entity access: `client.Cocoapod().list()` / `client.Cocoapod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cocoapod(entopts?: Record<string, any>) {
    const self = this
    return new CocoapodEntity(self, entopts)
  }


  // Entity access: `client.Complete().list()` / `client.Complete().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Complete(entopts?: Record<string, any>) {
    const self = this
    return new CompleteEntity(self, entopts)
  }


  // Entity access: `client.Composer().list()` / `client.Composer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Composer(entopts?: Record<string, any>) {
    const self = this
    return new ComposerEntity(self, entopts)
  }


  // Entity access: `client.Conan().list()` / `client.Conan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Conan(entopts?: Record<string, any>) {
    const self = this
    return new ConanEntity(self, entopts)
  }


  // Entity access: `client.Conda().list()` / `client.Conda().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Conda(entopts?: Record<string, any>) {
    const self = this
    return new CondaEntity(self, entopts)
  }


  // Entity access: `client.Copy().list()` / `client.Copy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Copy(entopts?: Record<string, any>) {
    const self = this
    return new CopyEntity(self, entopts)
  }


  // Entity access: `client.Cran().list()` / `client.Cran().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cran(entopts?: Record<string, any>) {
    const self = this
    return new CranEntity(self, entopts)
  }


  // Entity access: `client.Dart().list()` / `client.Dart().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dart(entopts?: Record<string, any>) {
    const self = this
    return new DartEntity(self, entopts)
  }


  // Entity access: `client.Deb().list()` / `client.Deb().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deb(entopts?: Record<string, any>) {
    const self = this
    return new DebEntity(self, entopts)
  }


  // Entity access: `client.DenyPolicy().list()` / `client.DenyPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DenyPolicy(entopts?: Record<string, any>) {
    const self = this
    return new DenyPolicyEntity(self, entopts)
  }


  // Entity access: `client.Dependency().list()` / `client.Dependency().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dependency(entopts?: Record<string, any>) {
    const self = this
    return new DependencyEntity(self, entopts)
  }


  // Entity access: `client.Disable().list()` / `client.Disable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Disable(entopts?: Record<string, any>) {
    const self = this
    return new DisableEntity(self, entopts)
  }


  // Entity access: `client.DistributionFull().list()` / `client.DistributionFull().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DistributionFull(entopts?: Record<string, any>) {
    const self = this
    return new DistributionFullEntity(self, entopts)
  }


  // Entity access: `client.Distro().list()` / `client.Distro().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Distro(entopts?: Record<string, any>) {
    const self = this
    return new DistroEntity(self, entopts)
  }


  // Entity access: `client.Docker().list()` / `client.Docker().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Docker(entopts?: Record<string, any>) {
    const self = this
    return new DockerEntity(self, entopts)
  }


  // Entity access: `client.DynamicMapping().list()` / `client.DynamicMapping().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DynamicMapping(entopts?: Record<string, any>) {
    const self = this
    return new DynamicMappingEntity(self, entopts)
  }


  // Entity access: `client.Ecdsa().list()` / `client.Ecdsa().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Ecdsa(entopts?: Record<string, any>) {
    const self = this
    return new EcdsaEntity(self, entopts)
  }


  // Entity access: `client.Enable().list()` / `client.Enable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Enable(entopts?: Record<string, any>) {
    const self = this
    return new EnableEntity(self, entopts)
  }


  // Entity access: `client.Entitlement().list()` / `client.Entitlement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Entitlement(entopts?: Record<string, any>) {
    const self = this
    return new EntitlementEntity(self, entopts)
  }


  // Entity access: `client.Evaluation().list()` / `client.Evaluation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Evaluation(entopts?: Record<string, any>) {
    const self = this
    return new EvaluationEntity(self, entopts)
  }


  // Entity access: `client.File().list()` / `client.File().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  File(entopts?: Record<string, any>) {
    const self = this
    return new FileEntity(self, entopts)
  }


  // Entity access: `client.Format().list()` / `client.Format().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Format(entopts?: Record<string, any>) {
    const self = this
    return new FormatEntity(self, entopts)
  }


  // Entity access: `client.Geoip().list()` / `client.Geoip().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Geoip(entopts?: Record<string, any>) {
    const self = this
    return new GeoipEntity(self, entopts)
  }


  // Entity access: `client.Gon().list()` / `client.Gon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gon(entopts?: Record<string, any>) {
    const self = this
    return new GonEntity(self, entopts)
  }


  // Entity access: `client.Gpg().list()` / `client.Gpg().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gpg(entopts?: Record<string, any>) {
    const self = this
    return new GpgEntity(self, entopts)
  }


  // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Group(entopts?: Record<string, any>) {
    const self = this
    return new GroupEntity(self, entopts)
  }


  // Entity access: `client.Helm().list()` / `client.Helm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Helm(entopts?: Record<string, any>) {
    const self = this
    return new HelmEntity(self, entopts)
  }


  // Entity access: `client.Hex().list()` / `client.Hex().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Hex(entopts?: Record<string, any>) {
    const self = this
    return new HexEntity(self, entopts)
  }


  // Entity access: `client.History().list()` / `client.History().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  History(entopts?: Record<string, any>) {
    const self = this
    return new HistoryEntity(self, entopts)
  }


  // Entity access: `client.Huggingface().list()` / `client.Huggingface().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Huggingface(entopts?: Record<string, any>) {
    const self = this
    return new HuggingfaceEntity(self, entopts)
  }


  // Entity access: `client.Info().list()` / `client.Info().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Info(entopts?: Record<string, any>) {
    const self = this
    return new InfoEntity(self, entopts)
  }


  // Entity access: `client.Invite().list()` / `client.Invite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invite(entopts?: Record<string, any>) {
    const self = this
    return new InviteEntity(self, entopts)
  }


  // Entity access: `client.LicensePolicy().list()` / `client.LicensePolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LicensePolicy(entopts?: Record<string, any>) {
    const self = this
    return new LicensePolicyEntity(self, entopts)
  }


  // Entity access: `client.Limit().list()` / `client.Limit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Limit(entopts?: Record<string, any>) {
    const self = this
    return new LimitEntity(self, entopts)
  }


  // Entity access: `client.Luarock().list()` / `client.Luarock().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Luarock(entopts?: Record<string, any>) {
    const self = this
    return new LuarockEntity(self, entopts)
  }


  // Entity access: `client.Maven().list()` / `client.Maven().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Maven(entopts?: Record<string, any>) {
    const self = this
    return new MavenEntity(self, entopts)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Member(entopts?: Record<string, any>) {
    const self = this
    return new MemberEntity(self, entopts)
  }


  // Entity access: `client.Move().list()` / `client.Move().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Move(entopts?: Record<string, any>) {
    const self = this
    return new MoveEntity(self, entopts)
  }


  // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Namespace(entopts?: Record<string, any>) {
    const self = this
    return new NamespaceEntity(self, entopts)
  }


  // Entity access: `client.NamespaceAuditLog().list()` / `client.NamespaceAuditLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NamespaceAuditLog(entopts?: Record<string, any>) {
    const self = this
    return new NamespaceAuditLogEntity(self, entopts)
  }


  // Entity access: `client.Npm().list()` / `client.Npm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Npm(entopts?: Record<string, any>) {
    const self = this
    return new NpmEntity(self, entopts)
  }


  // Entity access: `client.Nuget().list()` / `client.Nuget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Nuget(entopts?: Record<string, any>) {
    const self = this
    return new NugetEntity(self, entopts)
  }


  // Entity access: `client.OpenidConnect().list()` / `client.OpenidConnect().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OpenidConnect(entopts?: Record<string, any>) {
    const self = this
    return new OpenidConnectEntity(self, entopts)
  }


  // Entity access: `client.Org().list()` / `client.Org().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Org(entopts?: Record<string, any>) {
    const self = this
    return new OrgEntity(self, entopts)
  }


  // Entity access: `client.OrganizationGroupSync().list()` / `client.OrganizationGroupSync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationGroupSync(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationGroupSyncEntity(self, entopts)
  }


  // Entity access: `client.OrganizationGroupSyncStatus().list()` / `client.OrganizationGroupSyncStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationGroupSyncStatus(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationGroupSyncStatusEntity(self, entopts)
  }


  // Entity access: `client.OrganizationInvite().list()` / `client.OrganizationInvite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationInvite(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationInviteEntity(self, entopts)
  }


  // Entity access: `client.OrganizationInviteExtend().list()` / `client.OrganizationInviteExtend().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationInviteExtend(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationInviteExtendEntity(self, entopts)
  }


  // Entity access: `client.OrganizationMembership().list()` / `client.OrganizationMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationMembership(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationMembershipEntity(self, entopts)
  }


  // Entity access: `client.OrganizationMembershipRoleUpdate().list()` / `client.OrganizationMembershipRoleUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationMembershipRoleUpdate(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationMembershipRoleUpdateEntity(self, entopts)
  }


  // Entity access: `client.OrganizationMembershipVisibilityUpdate().list()` / `client.OrganizationMembershipVisibilityUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationMembershipVisibilityUpdate(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationMembershipVisibilityUpdateEntity(self, entopts)
  }


  // Entity access: `client.OrganizationPackageLicensePolicy().list()` / `client.OrganizationPackageLicensePolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationPackageLicensePolicy(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationPackageLicensePolicyEntity(self, entopts)
  }


  // Entity access: `client.OrganizationPackageVulnerabilityPolicy().list()` / `client.OrganizationPackageVulnerabilityPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationPackageVulnerabilityPolicy(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationPackageVulnerabilityPolicyEntity(self, entopts)
  }


  // Entity access: `client.OrganizationSamlAuth().list()` / `client.OrganizationSamlAuth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationSamlAuth(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationSamlAuthEntity(self, entopts)
  }


  // Entity access: `client.OrganizationTeam().list()` / `client.OrganizationTeam().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationTeam(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationTeamEntity(self, entopts)
  }


  // Entity access: `client.OrganizationTeamMember().list()` / `client.OrganizationTeamMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationTeamMember(entopts?: Record<string, any>) {
    const self = this
    return new OrganizationTeamMemberEntity(self, entopts)
  }


  // Entity access: `client.Oss().list()` / `client.Oss().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Oss(entopts?: Record<string, any>) {
    const self = this
    return new OssEntity(self, entopts)
  }


  // Entity access: `client.P2n().list()` / `client.P2n().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  P2n(entopts?: Record<string, any>) {
    const self = this
    return new P2nEntity(self, entopts)
  }


  // Entity access: `client.Package().list()` / `client.Package().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Package(entopts?: Record<string, any>) {
    const self = this
    return new PackageEntity(self, entopts)
  }


  // Entity access: `client.PackageDenyPolicy().list()` / `client.PackageDenyPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageDenyPolicy(entopts?: Record<string, any>) {
    const self = this
    return new PackageDenyPolicyEntity(self, entopts)
  }


  // Entity access: `client.PackageFilePartsUpload().list()` / `client.PackageFilePartsUpload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageFilePartsUpload(entopts?: Record<string, any>) {
    const self = this
    return new PackageFilePartsUploadEntity(self, entopts)
  }


  // Entity access: `client.PackageFileUpload().list()` / `client.PackageFileUpload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageFileUpload(entopts?: Record<string, any>) {
    const self = this
    return new PackageFileUploadEntity(self, entopts)
  }


  // Entity access: `client.PackageLicensePolicyEvaluation().list()` / `client.PackageLicensePolicyEvaluation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageLicensePolicyEvaluation(entopts?: Record<string, any>) {
    const self = this
    return new PackageLicensePolicyEvaluationEntity(self, entopts)
  }


  // Entity access: `client.PackageVersionBadge().list()` / `client.PackageVersionBadge().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageVersionBadge(entopts?: Record<string, any>) {
    const self = this
    return new PackageVersionBadgeEntity(self, entopts)
  }


  // Entity access: `client.PackageVulnerabilityPolicyEvaluation().list()` / `client.PackageVulnerabilityPolicyEvaluation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageVulnerabilityPolicyEvaluation(entopts?: Record<string, any>) {
    const self = this
    return new PackageVulnerabilityPolicyEvaluationEntity(self, entopts)
  }


  // Entity access: `client.Privilege().list()` / `client.Privilege().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Privilege(entopts?: Record<string, any>) {
    const self = this
    return new PrivilegeEntity(self, entopts)
  }


  // Entity access: `client.Profile().list()` / `client.Profile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Profile(entopts?: Record<string, any>) {
    const self = this
    return new ProfileEntity(self, entopts)
  }


  // Entity access: `client.ProviderSetting().list()` / `client.ProviderSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProviderSetting(entopts?: Record<string, any>) {
    const self = this
    return new ProviderSettingEntity(self, entopts)
  }


  // Entity access: `client.ProviderSettingsWrite().list()` / `client.ProviderSettingsWrite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProviderSettingsWrite(entopts?: Record<string, any>) {
    const self = this
    return new ProviderSettingsWriteEntity(self, entopts)
  }


  // Entity access: `client.Python().list()` / `client.Python().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Python(entopts?: Record<string, any>) {
    const self = this
    return new PythonEntity(self, entopts)
  }


  // Entity access: `client.Quarantine().list()` / `client.Quarantine().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Quarantine(entopts?: Record<string, any>) {
    const self = this
    return new QuarantineEntity(self, entopts)
  }


  // Entity access: `client.Quota().list()` / `client.Quota().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Quota(entopts?: Record<string, any>) {
    const self = this
    return new QuotaEntity(self, entopts)
  }


  // Entity access: `client.Raw().list()` / `client.Raw().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Raw(entopts?: Record<string, any>) {
    const self = this
    return new RawEntity(self, entopts)
  }


  // Entity access: `client.Refresh().list()` / `client.Refresh().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Refresh(entopts?: Record<string, any>) {
    const self = this
    return new RefreshEntity(self, entopts)
  }


  // Entity access: `client.Regenerate().list()` / `client.Regenerate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Regenerate(entopts?: Record<string, any>) {
    const self = this
    return new RegenerateEntity(self, entopts)
  }


  // Entity access: `client.Repo().list()` / `client.Repo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Repo(entopts?: Record<string, any>) {
    const self = this
    return new RepoEntity(self, entopts)
  }


  // Entity access: `client.RepositoryAuditLog().list()` / `client.RepositoryAuditLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryAuditLog(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryAuditLogEntity(self, entopts)
  }


  // Entity access: `client.RepositoryEcdsaKey().list()` / `client.RepositoryEcdsaKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryEcdsaKey(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryEcdsaKeyEntity(self, entopts)
  }


  // Entity access: `client.RepositoryGeoIpRule().list()` / `client.RepositoryGeoIpRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryGeoIpRule(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryGeoIpRuleEntity(self, entopts)
  }


  // Entity access: `client.RepositoryGeoIpStatus().list()` / `client.RepositoryGeoIpStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryGeoIpStatus(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryGeoIpStatusEntity(self, entopts)
  }


  // Entity access: `client.RepositoryGeoIpTestAddress().list()` / `client.RepositoryGeoIpTestAddress().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryGeoIpTestAddress(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryGeoIpTestAddressEntity(self, entopts)
  }


  // Entity access: `client.RepositoryGpgKey().list()` / `client.RepositoryGpgKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryGpgKey(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryGpgKeyEntity(self, entopts)
  }


  // Entity access: `client.RepositoryPrivilegeInput().list()` / `client.RepositoryPrivilegeInput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryPrivilegeInput(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryPrivilegeInputEntity(self, entopts)
  }


  // Entity access: `client.RepositoryRetentionRule().list()` / `client.RepositoryRetentionRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryRetentionRule(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryRetentionRuleEntity(self, entopts)
  }


  // Entity access: `client.RepositoryRsaKey().list()` / `client.RepositoryRsaKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryRsaKey(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryRsaKeyEntity(self, entopts)
  }


  // Entity access: `client.RepositoryToken().list()` / `client.RepositoryToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryToken(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryTokenEntity(self, entopts)
  }


  // Entity access: `client.RepositoryTokenRefresh().list()` / `client.RepositoryTokenRefresh().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryTokenRefresh(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryTokenRefreshEntity(self, entopts)
  }


  // Entity access: `client.RepositoryTokenSync().list()` / `client.RepositoryTokenSync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryTokenSync(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryTokenSyncEntity(self, entopts)
  }


  // Entity access: `client.RepositoryWebhook().list()` / `client.RepositoryWebhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryWebhook(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryWebhookEntity(self, entopts)
  }


  // Entity access: `client.RepositoryX509EcdsaCertificate().list()` / `client.RepositoryX509EcdsaCertificate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryX509EcdsaCertificate(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryX509EcdsaCertificateEntity(self, entopts)
  }


  // Entity access: `client.RepositoryX509RsaCertificate().list()` / `client.RepositoryX509RsaCertificate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryX509RsaCertificate(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryX509RsaCertificateEntity(self, entopts)
  }


  // Entity access: `client.Reset().list()` / `client.Reset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reset(entopts?: Record<string, any>) {
    const self = this
    return new ResetEntity(self, entopts)
  }


  // Entity access: `client.ResourcesRateCheck().list()` / `client.ResourcesRateCheck().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourcesRateCheck(entopts?: Record<string, any>) {
    const self = this
    return new ResourcesRateCheckEntity(self, entopts)
  }


  // Entity access: `client.Resync().list()` / `client.Resync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Resync(entopts?: Record<string, any>) {
    const self = this
    return new ResyncEntity(self, entopts)
  }


  // Entity access: `client.Retention().list()` / `client.Retention().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Retention(entopts?: Record<string, any>) {
    const self = this
    return new RetentionEntity(self, entopts)
  }


  // Entity access: `client.Rpm().list()` / `client.Rpm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rpm(entopts?: Record<string, any>) {
    const self = this
    return new RpmEntity(self, entopts)
  }


  // Entity access: `client.Rsa().list()` / `client.Rsa().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rsa(entopts?: Record<string, any>) {
    const self = this
    return new RsaEntity(self, entopts)
  }


  // Entity access: `client.Ruby().list()` / `client.Ruby().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Ruby(entopts?: Record<string, any>) {
    const self = this
    return new RubyEntity(self, entopts)
  }


  // Entity access: `client.SamlGroupSync().list()` / `client.SamlGroupSync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SamlGroupSync(entopts?: Record<string, any>) {
    const self = this
    return new SamlGroupSyncEntity(self, entopts)
  }


  // Entity access: `client.Scan().list()` / `client.Scan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Scan(entopts?: Record<string, any>) {
    const self = this
    return new ScanEntity(self, entopts)
  }


  // Entity access: `client.Self().list()` / `client.Self().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Self(entopts?: Record<string, any>) {
    const self = this
    return new SelfEntity(self, entopts)
  }


  // Entity access: `client.Service().list()` / `client.Service().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Service(entopts?: Record<string, any>) {
    const self = this
    return new ServiceEntity(self, entopts)
  }


  // Entity access: `client.Status().list()` / `client.Status().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Status(entopts?: Record<string, any>) {
    const self = this
    return new StatusEntity(self, entopts)
  }


  // Entity access: `client.StatusBasic().list()` / `client.StatusBasic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusBasic(entopts?: Record<string, any>) {
    const self = this
    return new StatusBasicEntity(self, entopts)
  }


  // Entity access: `client.StorageRegion().list()` / `client.StorageRegion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StorageRegion(entopts?: Record<string, any>) {
    const self = this
    return new StorageRegionEntity(self, entopts)
  }


  // Entity access: `client.Swift().list()` / `client.Swift().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Swift(entopts?: Record<string, any>) {
    const self = this
    return new SwiftEntity(self, entopts)
  }


  // Entity access: `client.Sync().list()` / `client.Sync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Sync(entopts?: Record<string, any>) {
    const self = this
    return new SyncEntity(self, entopts)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tag(entopts?: Record<string, any>) {
    const self = this
    return new TagEntity(self, entopts)
  }


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Team(entopts?: Record<string, any>) {
    const self = this
    return new TeamEntity(self, entopts)
  }


  // Entity access: `client.Terraform().list()` / `client.Terraform().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Terraform(entopts?: Record<string, any>) {
    const self = this
    return new TerraformEntity(self, entopts)
  }


  // Entity access: `client.Test().list()` / `client.Test().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Test(entopts?: Record<string, any>) {
    const self = this
    return new TestEntity(self, entopts)
  }


  // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Token(entopts?: Record<string, any>) {
    const self = this
    return new TokenEntity(self, entopts)
  }


  // Entity access: `client.TransferRegion().list()` / `client.TransferRegion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TransferRegion(entopts?: Record<string, any>) {
    const self = this
    return new TransferRegionEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts?: Record<string, any>) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.UserAuthToken().list()` / `client.UserAuthToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserAuthToken(entopts?: Record<string, any>) {
    const self = this
    return new UserAuthTokenEntity(self, entopts)
  }


  // Entity access: `client.UserAuthenticationToken().list()` / `client.UserAuthenticationToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserAuthenticationToken(entopts?: Record<string, any>) {
    const self = this
    return new UserAuthenticationTokenEntity(self, entopts)
  }


  // Entity access: `client.UserBrief().list()` / `client.UserBrief().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserBrief(entopts?: Record<string, any>) {
    const self = this
    return new UserBriefEntity(self, entopts)
  }


  // Entity access: `client.UserProfile().list()` / `client.UserProfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserProfile(entopts?: Record<string, any>) {
    const self = this
    return new UserProfileEntity(self, entopts)
  }


  // Entity access: `client.Vagrant().list()` / `client.Vagrant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Vagrant(entopts?: Record<string, any>) {
    const self = this
    return new VagrantEntity(self, entopts)
  }


  // Entity access: `client.Validate().list()` / `client.Validate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Validate(entopts?: Record<string, any>) {
    const self = this
    return new ValidateEntity(self, entopts)
  }


  // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Version(entopts?: Record<string, any>) {
    const self = this
    return new VersionEntity(self, entopts)
  }


  // Entity access: `client.Vulnerability().list()` / `client.Vulnerability().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Vulnerability(entopts?: Record<string, any>) {
    const self = this
    return new VulnerabilityEntity(self, entopts)
  }


  // Entity access: `client.VulnerabilityPolicy().list()` / `client.VulnerabilityPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VulnerabilityPolicy(entopts?: Record<string, any>) {
    const self = this
    return new VulnerabilityPolicyEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEntity(self, entopts)
  }


  // Entity access: `client.X509Ecdsa().list()` / `client.X509Ecdsa().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  X509Ecdsa(entopts?: Record<string, any>) {
    const self = this
    return new X509EcdsaEntity(self, entopts)
  }


  // Entity access: `client.X509Rsa().list()` / `client.X509Rsa().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  X509Rsa(entopts?: Record<string, any>) {
    const self = this
    return new X509RsaEntity(self, entopts)
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


