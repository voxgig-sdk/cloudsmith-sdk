// Cloudsmith Js SDK

const { AbortEntity } = require('./entity/AbortEntity')
const { AlpineEntity } = require('./entity/AlpineEntity')
const { AuditLogEntity } = require('./entity/AuditLogEntity')
const { BasicEntity } = require('./entity/BasicEntity')
const { CargoEntity } = require('./entity/CargoEntity')
const { CocoapodEntity } = require('./entity/CocoapodEntity')
const { CompleteEntity } = require('./entity/CompleteEntity')
const { ComposerEntity } = require('./entity/ComposerEntity')
const { ConanEntity } = require('./entity/ConanEntity')
const { CondaEntity } = require('./entity/CondaEntity')
const { CopyEntity } = require('./entity/CopyEntity')
const { CranEntity } = require('./entity/CranEntity')
const { DartEntity } = require('./entity/DartEntity')
const { DebEntity } = require('./entity/DebEntity')
const { DenyPolicyEntity } = require('./entity/DenyPolicyEntity')
const { DependencyEntity } = require('./entity/DependencyEntity')
const { DisableEntity } = require('./entity/DisableEntity')
const { DistributionFullEntity } = require('./entity/DistributionFullEntity')
const { DistroEntity } = require('./entity/DistroEntity')
const { DockerEntity } = require('./entity/DockerEntity')
const { DynamicMappingEntity } = require('./entity/DynamicMappingEntity')
const { EcdsaEntity } = require('./entity/EcdsaEntity')
const { EnableEntity } = require('./entity/EnableEntity')
const { EntitlementEntity } = require('./entity/EntitlementEntity')
const { EvaluationEntity } = require('./entity/EvaluationEntity')
const { FileEntity } = require('./entity/FileEntity')
const { FormatEntity } = require('./entity/FormatEntity')
const { GeoipEntity } = require('./entity/GeoipEntity')
const { GonEntity } = require('./entity/GonEntity')
const { GpgEntity } = require('./entity/GpgEntity')
const { GroupEntity } = require('./entity/GroupEntity')
const { HelmEntity } = require('./entity/HelmEntity')
const { HexEntity } = require('./entity/HexEntity')
const { HistoryEntity } = require('./entity/HistoryEntity')
const { HuggingfaceEntity } = require('./entity/HuggingfaceEntity')
const { InfoEntity } = require('./entity/InfoEntity')
const { InviteEntity } = require('./entity/InviteEntity')
const { LicensePolicyEntity } = require('./entity/LicensePolicyEntity')
const { LimitEntity } = require('./entity/LimitEntity')
const { LuarockEntity } = require('./entity/LuarockEntity')
const { MavenEntity } = require('./entity/MavenEntity')
const { MemberEntity } = require('./entity/MemberEntity')
const { MoveEntity } = require('./entity/MoveEntity')
const { NamespaceEntity } = require('./entity/NamespaceEntity')
const { NamespaceAuditLogEntity } = require('./entity/NamespaceAuditLogEntity')
const { NpmEntity } = require('./entity/NpmEntity')
const { NugetEntity } = require('./entity/NugetEntity')
const { OpenidConnectEntity } = require('./entity/OpenidConnectEntity')
const { OrgEntity } = require('./entity/OrgEntity')
const { OrganizationGroupSyncEntity } = require('./entity/OrganizationGroupSyncEntity')
const { OrganizationGroupSyncStatusEntity } = require('./entity/OrganizationGroupSyncStatusEntity')
const { OrganizationInviteEntity } = require('./entity/OrganizationInviteEntity')
const { OrganizationInviteExtendEntity } = require('./entity/OrganizationInviteExtendEntity')
const { OrganizationMembershipEntity } = require('./entity/OrganizationMembershipEntity')
const { OrganizationMembershipRoleUpdateEntity } = require('./entity/OrganizationMembershipRoleUpdateEntity')
const { OrganizationMembershipVisibilityUpdateEntity } = require('./entity/OrganizationMembershipVisibilityUpdateEntity')
const { OrganizationPackageLicensePolicyEntity } = require('./entity/OrganizationPackageLicensePolicyEntity')
const { OrganizationPackageVulnerabilityPolicyEntity } = require('./entity/OrganizationPackageVulnerabilityPolicyEntity')
const { OrganizationSamlAuthEntity } = require('./entity/OrganizationSamlAuthEntity')
const { OrganizationTeamEntity } = require('./entity/OrganizationTeamEntity')
const { OrganizationTeamMemberEntity } = require('./entity/OrganizationTeamMemberEntity')
const { OssEntity } = require('./entity/OssEntity')
const { P2nEntity } = require('./entity/P2nEntity')
const { PackageEntity } = require('./entity/PackageEntity')
const { PackageDenyPolicyEntity } = require('./entity/PackageDenyPolicyEntity')
const { PackageFilePartsUploadEntity } = require('./entity/PackageFilePartsUploadEntity')
const { PackageFileUploadEntity } = require('./entity/PackageFileUploadEntity')
const { PackageLicensePolicyEvaluationEntity } = require('./entity/PackageLicensePolicyEvaluationEntity')
const { PackageVersionBadgeEntity } = require('./entity/PackageVersionBadgeEntity')
const { PackageVulnerabilityPolicyEvaluationEntity } = require('./entity/PackageVulnerabilityPolicyEvaluationEntity')
const { PrivilegeEntity } = require('./entity/PrivilegeEntity')
const { ProfileEntity } = require('./entity/ProfileEntity')
const { ProviderSettingEntity } = require('./entity/ProviderSettingEntity')
const { ProviderSettingsWriteEntity } = require('./entity/ProviderSettingsWriteEntity')
const { PythonEntity } = require('./entity/PythonEntity')
const { QuarantineEntity } = require('./entity/QuarantineEntity')
const { QuotaEntity } = require('./entity/QuotaEntity')
const { RawEntity } = require('./entity/RawEntity')
const { RefreshEntity } = require('./entity/RefreshEntity')
const { RegenerateEntity } = require('./entity/RegenerateEntity')
const { RepoEntity } = require('./entity/RepoEntity')
const { RepositoryAuditLogEntity } = require('./entity/RepositoryAuditLogEntity')
const { RepositoryEcdsaKeyEntity } = require('./entity/RepositoryEcdsaKeyEntity')
const { RepositoryGeoIpRuleEntity } = require('./entity/RepositoryGeoIpRuleEntity')
const { RepositoryGeoIpStatusEntity } = require('./entity/RepositoryGeoIpStatusEntity')
const { RepositoryGeoIpTestAddressEntity } = require('./entity/RepositoryGeoIpTestAddressEntity')
const { RepositoryGpgKeyEntity } = require('./entity/RepositoryGpgKeyEntity')
const { RepositoryPrivilegeInputEntity } = require('./entity/RepositoryPrivilegeInputEntity')
const { RepositoryRetentionRuleEntity } = require('./entity/RepositoryRetentionRuleEntity')
const { RepositoryRsaKeyEntity } = require('./entity/RepositoryRsaKeyEntity')
const { RepositoryTokenEntity } = require('./entity/RepositoryTokenEntity')
const { RepositoryTokenRefreshEntity } = require('./entity/RepositoryTokenRefreshEntity')
const { RepositoryTokenSyncEntity } = require('./entity/RepositoryTokenSyncEntity')
const { RepositoryWebhookEntity } = require('./entity/RepositoryWebhookEntity')
const { RepositoryX509EcdsaCertificateEntity } = require('./entity/RepositoryX509EcdsaCertificateEntity')
const { RepositoryX509RsaCertificateEntity } = require('./entity/RepositoryX509RsaCertificateEntity')
const { ResetEntity } = require('./entity/ResetEntity')
const { ResourcesRateCheckEntity } = require('./entity/ResourcesRateCheckEntity')
const { ResyncEntity } = require('./entity/ResyncEntity')
const { RetentionEntity } = require('./entity/RetentionEntity')
const { RpmEntity } = require('./entity/RpmEntity')
const { RsaEntity } = require('./entity/RsaEntity')
const { RubyEntity } = require('./entity/RubyEntity')
const { SamlGroupSyncEntity } = require('./entity/SamlGroupSyncEntity')
const { ScanEntity } = require('./entity/ScanEntity')
const { SelfEntity } = require('./entity/SelfEntity')
const { ServiceEntity } = require('./entity/ServiceEntity')
const { StatusEntity } = require('./entity/StatusEntity')
const { StatusBasicEntity } = require('./entity/StatusBasicEntity')
const { StorageRegionEntity } = require('./entity/StorageRegionEntity')
const { SwiftEntity } = require('./entity/SwiftEntity')
const { SyncEntity } = require('./entity/SyncEntity')
const { TagEntity } = require('./entity/TagEntity')
const { TeamEntity } = require('./entity/TeamEntity')
const { TerraformEntity } = require('./entity/TerraformEntity')
const { TestEntity } = require('./entity/TestEntity')
const { TokenEntity } = require('./entity/TokenEntity')
const { TransferRegionEntity } = require('./entity/TransferRegionEntity')
const { UserEntity } = require('./entity/UserEntity')
const { UserAuthTokenEntity } = require('./entity/UserAuthTokenEntity')
const { UserAuthenticationTokenEntity } = require('./entity/UserAuthenticationTokenEntity')
const { UserBriefEntity } = require('./entity/UserBriefEntity')
const { UserProfileEntity } = require('./entity/UserProfileEntity')
const { VagrantEntity } = require('./entity/VagrantEntity')
const { ValidateEntity } = require('./entity/ValidateEntity')
const { VersionEntity } = require('./entity/VersionEntity')
const { VulnerabilityEntity } = require('./entity/VulnerabilityEntity')
const { VulnerabilityPolicyEntity } = require('./entity/VulnerabilityPolicyEntity')
const { WebhookEntity } = require('./entity/WebhookEntity')
const { X509EcdsaEntity } = require('./entity/X509EcdsaEntity')
const { X509RsaEntity } = require('./entity/X509RsaEntity')


const { inspect } = require('node:util')

const { config } = require('./Config')
const { Utility } = require('./utility/Utility')
const { CloudsmithEntityBase } = require('./CloudsmithEntityBase')


const { BaseFeature } = require('./feature/base/BaseFeature')


const stdutil = new Utility()


class CloudsmithSDK {
  _mode = 'live'
  _options
  _utility = new Utility()
  _features
  _rootctx

  constructor(options) {

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


  async prepare(fetchargs) {
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

    let ctx = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec = {
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
  async direct(fetchargs) {
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
  async _rawRequest(fetchargs) {
    const utility = this._utility

    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx = makeContext({
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
      const json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err) {
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
  async graphql(query, variables, ctrl) {
    const options = this._options

    if (!options.allow.op.includes('graphql')) {
      return {
        ok: false,
        err: new Error('CloudsmithSDK: graphql: operation not allowed by' +
          ' SDK option allow.op value: "' + options.allow.op + '"'),
      }
    }

    const res = await this._rawRequest({
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
      const err = new Error('CloudsmithSDK: graphql: ' +
        (first.message || 'graphql error'))
      err.graphql = errors
      return { ok: false, status: res.status, headers: res.headers, err, data: res.data }
    }

    return res
  }



  // Entity access: `client.Abort().list()` / `client.Abort().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Abort(entopts) {
    const self = this
    return new AbortEntity(self, entopts)
  }


  // Entity access: `client.Alpine().list()` / `client.Alpine().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Alpine(entopts) {
    const self = this
    return new AlpineEntity(self, entopts)
  }


  // Entity access: `client.AuditLog().list()` / `client.AuditLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  AuditLog(entopts) {
    const self = this
    return new AuditLogEntity(self, entopts)
  }


  // Entity access: `client.Basic().list()` / `client.Basic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Basic(entopts) {
    const self = this
    return new BasicEntity(self, entopts)
  }


  // Entity access: `client.Cargo().list()` / `client.Cargo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cargo(entopts) {
    const self = this
    return new CargoEntity(self, entopts)
  }


  // Entity access: `client.Cocoapod().list()` / `client.Cocoapod().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cocoapod(entopts) {
    const self = this
    return new CocoapodEntity(self, entopts)
  }


  // Entity access: `client.Complete().list()` / `client.Complete().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Complete(entopts) {
    const self = this
    return new CompleteEntity(self, entopts)
  }


  // Entity access: `client.Composer().list()` / `client.Composer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Composer(entopts) {
    const self = this
    return new ComposerEntity(self, entopts)
  }


  // Entity access: `client.Conan().list()` / `client.Conan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Conan(entopts) {
    const self = this
    return new ConanEntity(self, entopts)
  }


  // Entity access: `client.Conda().list()` / `client.Conda().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Conda(entopts) {
    const self = this
    return new CondaEntity(self, entopts)
  }


  // Entity access: `client.Copy().list()` / `client.Copy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Copy(entopts) {
    const self = this
    return new CopyEntity(self, entopts)
  }


  // Entity access: `client.Cran().list()` / `client.Cran().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cran(entopts) {
    const self = this
    return new CranEntity(self, entopts)
  }


  // Entity access: `client.Dart().list()` / `client.Dart().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dart(entopts) {
    const self = this
    return new DartEntity(self, entopts)
  }


  // Entity access: `client.Deb().list()` / `client.Deb().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Deb(entopts) {
    const self = this
    return new DebEntity(self, entopts)
  }


  // Entity access: `client.DenyPolicy().list()` / `client.DenyPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DenyPolicy(entopts) {
    const self = this
    return new DenyPolicyEntity(self, entopts)
  }


  // Entity access: `client.Dependency().list()` / `client.Dependency().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Dependency(entopts) {
    const self = this
    return new DependencyEntity(self, entopts)
  }


  // Entity access: `client.Disable().list()` / `client.Disable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Disable(entopts) {
    const self = this
    return new DisableEntity(self, entopts)
  }


  // Entity access: `client.DistributionFull().list()` / `client.DistributionFull().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DistributionFull(entopts) {
    const self = this
    return new DistributionFullEntity(self, entopts)
  }


  // Entity access: `client.Distro().list()` / `client.Distro().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Distro(entopts) {
    const self = this
    return new DistroEntity(self, entopts)
  }


  // Entity access: `client.Docker().list()` / `client.Docker().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Docker(entopts) {
    const self = this
    return new DockerEntity(self, entopts)
  }


  // Entity access: `client.DynamicMapping().list()` / `client.DynamicMapping().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DynamicMapping(entopts) {
    const self = this
    return new DynamicMappingEntity(self, entopts)
  }


  // Entity access: `client.Ecdsa().list()` / `client.Ecdsa().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Ecdsa(entopts) {
    const self = this
    return new EcdsaEntity(self, entopts)
  }


  // Entity access: `client.Enable().list()` / `client.Enable().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Enable(entopts) {
    const self = this
    return new EnableEntity(self, entopts)
  }


  // Entity access: `client.Entitlement().list()` / `client.Entitlement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Entitlement(entopts) {
    const self = this
    return new EntitlementEntity(self, entopts)
  }


  // Entity access: `client.Evaluation().list()` / `client.Evaluation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Evaluation(entopts) {
    const self = this
    return new EvaluationEntity(self, entopts)
  }


  // Entity access: `client.File().list()` / `client.File().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  File(entopts) {
    const self = this
    return new FileEntity(self, entopts)
  }


  // Entity access: `client.Format().list()` / `client.Format().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Format(entopts) {
    const self = this
    return new FormatEntity(self, entopts)
  }


  // Entity access: `client.Geoip().list()` / `client.Geoip().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Geoip(entopts) {
    const self = this
    return new GeoipEntity(self, entopts)
  }


  // Entity access: `client.Gon().list()` / `client.Gon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gon(entopts) {
    const self = this
    return new GonEntity(self, entopts)
  }


  // Entity access: `client.Gpg().list()` / `client.Gpg().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gpg(entopts) {
    const self = this
    return new GpgEntity(self, entopts)
  }


  // Entity access: `client.Group().list()` / `client.Group().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Group(entopts) {
    const self = this
    return new GroupEntity(self, entopts)
  }


  // Entity access: `client.Helm().list()` / `client.Helm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Helm(entopts) {
    const self = this
    return new HelmEntity(self, entopts)
  }


  // Entity access: `client.Hex().list()` / `client.Hex().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Hex(entopts) {
    const self = this
    return new HexEntity(self, entopts)
  }


  // Entity access: `client.History().list()` / `client.History().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  History(entopts) {
    const self = this
    return new HistoryEntity(self, entopts)
  }


  // Entity access: `client.Huggingface().list()` / `client.Huggingface().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Huggingface(entopts) {
    const self = this
    return new HuggingfaceEntity(self, entopts)
  }


  // Entity access: `client.Info().list()` / `client.Info().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Info(entopts) {
    const self = this
    return new InfoEntity(self, entopts)
  }


  // Entity access: `client.Invite().list()` / `client.Invite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Invite(entopts) {
    const self = this
    return new InviteEntity(self, entopts)
  }


  // Entity access: `client.LicensePolicy().list()` / `client.LicensePolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  LicensePolicy(entopts) {
    const self = this
    return new LicensePolicyEntity(self, entopts)
  }


  // Entity access: `client.Limit().list()` / `client.Limit().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Limit(entopts) {
    const self = this
    return new LimitEntity(self, entopts)
  }


  // Entity access: `client.Luarock().list()` / `client.Luarock().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Luarock(entopts) {
    const self = this
    return new LuarockEntity(self, entopts)
  }


  // Entity access: `client.Maven().list()` / `client.Maven().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Maven(entopts) {
    const self = this
    return new MavenEntity(self, entopts)
  }


  // Entity access: `client.Member().list()` / `client.Member().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Member(entopts) {
    const self = this
    return new MemberEntity(self, entopts)
  }


  // Entity access: `client.Move().list()` / `client.Move().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Move(entopts) {
    const self = this
    return new MoveEntity(self, entopts)
  }


  // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Namespace(entopts) {
    const self = this
    return new NamespaceEntity(self, entopts)
  }


  // Entity access: `client.NamespaceAuditLog().list()` / `client.NamespaceAuditLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  NamespaceAuditLog(entopts) {
    const self = this
    return new NamespaceAuditLogEntity(self, entopts)
  }


  // Entity access: `client.Npm().list()` / `client.Npm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Npm(entopts) {
    const self = this
    return new NpmEntity(self, entopts)
  }


  // Entity access: `client.Nuget().list()` / `client.Nuget().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Nuget(entopts) {
    const self = this
    return new NugetEntity(self, entopts)
  }


  // Entity access: `client.OpenidConnect().list()` / `client.OpenidConnect().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OpenidConnect(entopts) {
    const self = this
    return new OpenidConnectEntity(self, entopts)
  }


  // Entity access: `client.Org().list()` / `client.Org().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Org(entopts) {
    const self = this
    return new OrgEntity(self, entopts)
  }


  // Entity access: `client.OrganizationGroupSync().list()` / `client.OrganizationGroupSync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationGroupSync(entopts) {
    const self = this
    return new OrganizationGroupSyncEntity(self, entopts)
  }


  // Entity access: `client.OrganizationGroupSyncStatus().list()` / `client.OrganizationGroupSyncStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationGroupSyncStatus(entopts) {
    const self = this
    return new OrganizationGroupSyncStatusEntity(self, entopts)
  }


  // Entity access: `client.OrganizationInvite().list()` / `client.OrganizationInvite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationInvite(entopts) {
    const self = this
    return new OrganizationInviteEntity(self, entopts)
  }


  // Entity access: `client.OrganizationInviteExtend().list()` / `client.OrganizationInviteExtend().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationInviteExtend(entopts) {
    const self = this
    return new OrganizationInviteExtendEntity(self, entopts)
  }


  // Entity access: `client.OrganizationMembership().list()` / `client.OrganizationMembership().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationMembership(entopts) {
    const self = this
    return new OrganizationMembershipEntity(self, entopts)
  }


  // Entity access: `client.OrganizationMembershipRoleUpdate().list()` / `client.OrganizationMembershipRoleUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationMembershipRoleUpdate(entopts) {
    const self = this
    return new OrganizationMembershipRoleUpdateEntity(self, entopts)
  }


  // Entity access: `client.OrganizationMembershipVisibilityUpdate().list()` / `client.OrganizationMembershipVisibilityUpdate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationMembershipVisibilityUpdate(entopts) {
    const self = this
    return new OrganizationMembershipVisibilityUpdateEntity(self, entopts)
  }


  // Entity access: `client.OrganizationPackageLicensePolicy().list()` / `client.OrganizationPackageLicensePolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationPackageLicensePolicy(entopts) {
    const self = this
    return new OrganizationPackageLicensePolicyEntity(self, entopts)
  }


  // Entity access: `client.OrganizationPackageVulnerabilityPolicy().list()` / `client.OrganizationPackageVulnerabilityPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationPackageVulnerabilityPolicy(entopts) {
    const self = this
    return new OrganizationPackageVulnerabilityPolicyEntity(self, entopts)
  }


  // Entity access: `client.OrganizationSamlAuth().list()` / `client.OrganizationSamlAuth().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationSamlAuth(entopts) {
    const self = this
    return new OrganizationSamlAuthEntity(self, entopts)
  }


  // Entity access: `client.OrganizationTeam().list()` / `client.OrganizationTeam().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationTeam(entopts) {
    const self = this
    return new OrganizationTeamEntity(self, entopts)
  }


  // Entity access: `client.OrganizationTeamMember().list()` / `client.OrganizationTeamMember().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  OrganizationTeamMember(entopts) {
    const self = this
    return new OrganizationTeamMemberEntity(self, entopts)
  }


  // Entity access: `client.Oss().list()` / `client.Oss().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Oss(entopts) {
    const self = this
    return new OssEntity(self, entopts)
  }


  // Entity access: `client.P2n().list()` / `client.P2n().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  P2n(entopts) {
    const self = this
    return new P2nEntity(self, entopts)
  }


  // Entity access: `client.Package().list()` / `client.Package().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Package(entopts) {
    const self = this
    return new PackageEntity(self, entopts)
  }


  // Entity access: `client.PackageDenyPolicy().list()` / `client.PackageDenyPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageDenyPolicy(entopts) {
    const self = this
    return new PackageDenyPolicyEntity(self, entopts)
  }


  // Entity access: `client.PackageFilePartsUpload().list()` / `client.PackageFilePartsUpload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageFilePartsUpload(entopts) {
    const self = this
    return new PackageFilePartsUploadEntity(self, entopts)
  }


  // Entity access: `client.PackageFileUpload().list()` / `client.PackageFileUpload().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageFileUpload(entopts) {
    const self = this
    return new PackageFileUploadEntity(self, entopts)
  }


  // Entity access: `client.PackageLicensePolicyEvaluation().list()` / `client.PackageLicensePolicyEvaluation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageLicensePolicyEvaluation(entopts) {
    const self = this
    return new PackageLicensePolicyEvaluationEntity(self, entopts)
  }


  // Entity access: `client.PackageVersionBadge().list()` / `client.PackageVersionBadge().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageVersionBadge(entopts) {
    const self = this
    return new PackageVersionBadgeEntity(self, entopts)
  }


  // Entity access: `client.PackageVulnerabilityPolicyEvaluation().list()` / `client.PackageVulnerabilityPolicyEvaluation().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  PackageVulnerabilityPolicyEvaluation(entopts) {
    const self = this
    return new PackageVulnerabilityPolicyEvaluationEntity(self, entopts)
  }


  // Entity access: `client.Privilege().list()` / `client.Privilege().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Privilege(entopts) {
    const self = this
    return new PrivilegeEntity(self, entopts)
  }


  // Entity access: `client.Profile().list()` / `client.Profile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Profile(entopts) {
    const self = this
    return new ProfileEntity(self, entopts)
  }


  // Entity access: `client.ProviderSetting().list()` / `client.ProviderSetting().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProviderSetting(entopts) {
    const self = this
    return new ProviderSettingEntity(self, entopts)
  }


  // Entity access: `client.ProviderSettingsWrite().list()` / `client.ProviderSettingsWrite().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ProviderSettingsWrite(entopts) {
    const self = this
    return new ProviderSettingsWriteEntity(self, entopts)
  }


  // Entity access: `client.Python().list()` / `client.Python().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Python(entopts) {
    const self = this
    return new PythonEntity(self, entopts)
  }


  // Entity access: `client.Quarantine().list()` / `client.Quarantine().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Quarantine(entopts) {
    const self = this
    return new QuarantineEntity(self, entopts)
  }


  // Entity access: `client.Quota().list()` / `client.Quota().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Quota(entopts) {
    const self = this
    return new QuotaEntity(self, entopts)
  }


  // Entity access: `client.Raw().list()` / `client.Raw().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Raw(entopts) {
    const self = this
    return new RawEntity(self, entopts)
  }


  // Entity access: `client.Refresh().list()` / `client.Refresh().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Refresh(entopts) {
    const self = this
    return new RefreshEntity(self, entopts)
  }


  // Entity access: `client.Regenerate().list()` / `client.Regenerate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Regenerate(entopts) {
    const self = this
    return new RegenerateEntity(self, entopts)
  }


  // Entity access: `client.Repo().list()` / `client.Repo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Repo(entopts) {
    const self = this
    return new RepoEntity(self, entopts)
  }


  // Entity access: `client.RepositoryAuditLog().list()` / `client.RepositoryAuditLog().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryAuditLog(entopts) {
    const self = this
    return new RepositoryAuditLogEntity(self, entopts)
  }


  // Entity access: `client.RepositoryEcdsaKey().list()` / `client.RepositoryEcdsaKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryEcdsaKey(entopts) {
    const self = this
    return new RepositoryEcdsaKeyEntity(self, entopts)
  }


  // Entity access: `client.RepositoryGeoIpRule().list()` / `client.RepositoryGeoIpRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryGeoIpRule(entopts) {
    const self = this
    return new RepositoryGeoIpRuleEntity(self, entopts)
  }


  // Entity access: `client.RepositoryGeoIpStatus().list()` / `client.RepositoryGeoIpStatus().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryGeoIpStatus(entopts) {
    const self = this
    return new RepositoryGeoIpStatusEntity(self, entopts)
  }


  // Entity access: `client.RepositoryGeoIpTestAddress().list()` / `client.RepositoryGeoIpTestAddress().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryGeoIpTestAddress(entopts) {
    const self = this
    return new RepositoryGeoIpTestAddressEntity(self, entopts)
  }


  // Entity access: `client.RepositoryGpgKey().list()` / `client.RepositoryGpgKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryGpgKey(entopts) {
    const self = this
    return new RepositoryGpgKeyEntity(self, entopts)
  }


  // Entity access: `client.RepositoryPrivilegeInput().list()` / `client.RepositoryPrivilegeInput().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryPrivilegeInput(entopts) {
    const self = this
    return new RepositoryPrivilegeInputEntity(self, entopts)
  }


  // Entity access: `client.RepositoryRetentionRule().list()` / `client.RepositoryRetentionRule().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryRetentionRule(entopts) {
    const self = this
    return new RepositoryRetentionRuleEntity(self, entopts)
  }


  // Entity access: `client.RepositoryRsaKey().list()` / `client.RepositoryRsaKey().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryRsaKey(entopts) {
    const self = this
    return new RepositoryRsaKeyEntity(self, entopts)
  }


  // Entity access: `client.RepositoryToken().list()` / `client.RepositoryToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryToken(entopts) {
    const self = this
    return new RepositoryTokenEntity(self, entopts)
  }


  // Entity access: `client.RepositoryTokenRefresh().list()` / `client.RepositoryTokenRefresh().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryTokenRefresh(entopts) {
    const self = this
    return new RepositoryTokenRefreshEntity(self, entopts)
  }


  // Entity access: `client.RepositoryTokenSync().list()` / `client.RepositoryTokenSync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryTokenSync(entopts) {
    const self = this
    return new RepositoryTokenSyncEntity(self, entopts)
  }


  // Entity access: `client.RepositoryWebhook().list()` / `client.RepositoryWebhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryWebhook(entopts) {
    const self = this
    return new RepositoryWebhookEntity(self, entopts)
  }


  // Entity access: `client.RepositoryX509EcdsaCertificate().list()` / `client.RepositoryX509EcdsaCertificate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryX509EcdsaCertificate(entopts) {
    const self = this
    return new RepositoryX509EcdsaCertificateEntity(self, entopts)
  }


  // Entity access: `client.RepositoryX509RsaCertificate().list()` / `client.RepositoryX509RsaCertificate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryX509RsaCertificate(entopts) {
    const self = this
    return new RepositoryX509RsaCertificateEntity(self, entopts)
  }


  // Entity access: `client.Reset().list()` / `client.Reset().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Reset(entopts) {
    const self = this
    return new ResetEntity(self, entopts)
  }


  // Entity access: `client.ResourcesRateCheck().list()` / `client.ResourcesRateCheck().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourcesRateCheck(entopts) {
    const self = this
    return new ResourcesRateCheckEntity(self, entopts)
  }


  // Entity access: `client.Resync().list()` / `client.Resync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Resync(entopts) {
    const self = this
    return new ResyncEntity(self, entopts)
  }


  // Entity access: `client.Retention().list()` / `client.Retention().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Retention(entopts) {
    const self = this
    return new RetentionEntity(self, entopts)
  }


  // Entity access: `client.Rpm().list()` / `client.Rpm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rpm(entopts) {
    const self = this
    return new RpmEntity(self, entopts)
  }


  // Entity access: `client.Rsa().list()` / `client.Rsa().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rsa(entopts) {
    const self = this
    return new RsaEntity(self, entopts)
  }


  // Entity access: `client.Ruby().list()` / `client.Ruby().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Ruby(entopts) {
    const self = this
    return new RubyEntity(self, entopts)
  }


  // Entity access: `client.SamlGroupSync().list()` / `client.SamlGroupSync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  SamlGroupSync(entopts) {
    const self = this
    return new SamlGroupSyncEntity(self, entopts)
  }


  // Entity access: `client.Scan().list()` / `client.Scan().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Scan(entopts) {
    const self = this
    return new ScanEntity(self, entopts)
  }


  // Entity access: `client.Self().list()` / `client.Self().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Self(entopts) {
    const self = this
    return new SelfEntity(self, entopts)
  }


  // Entity access: `client.Service().list()` / `client.Service().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Service(entopts) {
    const self = this
    return new ServiceEntity(self, entopts)
  }


  // Entity access: `client.Status().list()` / `client.Status().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Status(entopts) {
    const self = this
    return new StatusEntity(self, entopts)
  }


  // Entity access: `client.StatusBasic().list()` / `client.StatusBasic().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StatusBasic(entopts) {
    const self = this
    return new StatusBasicEntity(self, entopts)
  }


  // Entity access: `client.StorageRegion().list()` / `client.StorageRegion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  StorageRegion(entopts) {
    const self = this
    return new StorageRegionEntity(self, entopts)
  }


  // Entity access: `client.Swift().list()` / `client.Swift().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Swift(entopts) {
    const self = this
    return new SwiftEntity(self, entopts)
  }


  // Entity access: `client.Sync().list()` / `client.Sync().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Sync(entopts) {
    const self = this
    return new SyncEntity(self, entopts)
  }


  // Entity access: `client.Tag().list()` / `client.Tag().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Tag(entopts) {
    const self = this
    return new TagEntity(self, entopts)
  }


  // Entity access: `client.Team().list()` / `client.Team().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Team(entopts) {
    const self = this
    return new TeamEntity(self, entopts)
  }


  // Entity access: `client.Terraform().list()` / `client.Terraform().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Terraform(entopts) {
    const self = this
    return new TerraformEntity(self, entopts)
  }


  // Entity access: `client.Test().list()` / `client.Test().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Test(entopts) {
    const self = this
    return new TestEntity(self, entopts)
  }


  // Entity access: `client.Token().list()` / `client.Token().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Token(entopts) {
    const self = this
    return new TokenEntity(self, entopts)
  }


  // Entity access: `client.TransferRegion().list()` / `client.TransferRegion().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  TransferRegion(entopts) {
    const self = this
    return new TransferRegionEntity(self, entopts)
  }


  // Entity access: `client.User().list()` / `client.User().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  User(entopts) {
    const self = this
    return new UserEntity(self, entopts)
  }


  // Entity access: `client.UserAuthToken().list()` / `client.UserAuthToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserAuthToken(entopts) {
    const self = this
    return new UserAuthTokenEntity(self, entopts)
  }


  // Entity access: `client.UserAuthenticationToken().list()` / `client.UserAuthenticationToken().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserAuthenticationToken(entopts) {
    const self = this
    return new UserAuthenticationTokenEntity(self, entopts)
  }


  // Entity access: `client.UserBrief().list()` / `client.UserBrief().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserBrief(entopts) {
    const self = this
    return new UserBriefEntity(self, entopts)
  }


  // Entity access: `client.UserProfile().list()` / `client.UserProfile().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  UserProfile(entopts) {
    const self = this
    return new UserProfileEntity(self, entopts)
  }


  // Entity access: `client.Vagrant().list()` / `client.Vagrant().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Vagrant(entopts) {
    const self = this
    return new VagrantEntity(self, entopts)
  }


  // Entity access: `client.Validate().list()` / `client.Validate().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Validate(entopts) {
    const self = this
    return new ValidateEntity(self, entopts)
  }


  // Entity access: `client.Version().list()` / `client.Version().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Version(entopts) {
    const self = this
    return new VersionEntity(self, entopts)
  }


  // Entity access: `client.Vulnerability().list()` / `client.Vulnerability().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Vulnerability(entopts) {
    const self = this
    return new VulnerabilityEntity(self, entopts)
  }


  // Entity access: `client.VulnerabilityPolicy().list()` / `client.VulnerabilityPolicy().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  VulnerabilityPolicy(entopts) {
    const self = this
    return new VulnerabilityPolicyEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts) {
    const self = this
    return new WebhookEntity(self, entopts)
  }


  // Entity access: `client.X509Ecdsa().list()` / `client.X509Ecdsa().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  X509Ecdsa(entopts) {
    const self = this
    return new X509EcdsaEntity(self, entopts)
  }


  // Entity access: `client.X509Rsa().list()` / `client.X509Rsa().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  X509Rsa(entopts) {
    const self = this
    return new X509RsaEntity(self, entopts)
  }




  static test(testoptsarg, sdkoptsarg) {
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


  tester(testopts, sdkopts) {
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


module.exports = {
  stdutil,
  config,

  BaseFeature,
  CloudsmithEntityBase,

  CloudsmithSDK,
  SDK,
}

