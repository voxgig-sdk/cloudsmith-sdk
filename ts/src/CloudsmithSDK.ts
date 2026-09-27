// Cloudsmith Ts SDK

import { CargoEntity } from './entity/CargoEntity'
import { ComposerEntity } from './entity/ComposerEntity'
import { CondaEntity } from './entity/CondaEntity'
import { CranEntity } from './entity/CranEntity'
import { DartEntity } from './entity/DartEntity'
import { DebEntity } from './entity/DebEntity'
import { DistributionFullEntity } from './entity/DistributionFullEntity'
import { DockerEntity } from './entity/DockerEntity'
import { DynamicMappingEntity } from './entity/DynamicMappingEntity'
import { EntitlementEntity } from './entity/EntitlementEntity'
import { FileEntity } from './entity/FileEntity'
import { FormatEntity } from './entity/FormatEntity'
import { GonEntity } from './entity/GonEntity'
import { HelmEntity } from './entity/HelmEntity'
import { HexEntity } from './entity/HexEntity'
import { HuggingfaceEntity } from './entity/HuggingfaceEntity'
import { MavenEntity } from './entity/MavenEntity'
import { NamespaceEntity } from './entity/NamespaceEntity'
import { NamespaceAuditLogEntity } from './entity/NamespaceAuditLogEntity'
import { NpmEntity } from './entity/NpmEntity'
import { NugetEntity } from './entity/NugetEntity'
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
import { PackageEntity } from './entity/PackageEntity'
import { PackageDenyPolicyEntity } from './entity/PackageDenyPolicyEntity'
import { PackageFilePartsUploadEntity } from './entity/PackageFilePartsUploadEntity'
import { PackageFileUploadEntity } from './entity/PackageFileUploadEntity'
import { PackageLicensePolicyEvaluationEntity } from './entity/PackageLicensePolicyEvaluationEntity'
import { PackageVersionBadgeEntity } from './entity/PackageVersionBadgeEntity'
import { PackageVulnerabilityPolicyEvaluationEntity } from './entity/PackageVulnerabilityPolicyEvaluationEntity'
import { ProviderSettingEntity } from './entity/ProviderSettingEntity'
import { ProviderSettingsWriteEntity } from './entity/ProviderSettingsWriteEntity'
import { PythonEntity } from './entity/PythonEntity'
import { QuotaEntity } from './entity/QuotaEntity'
import { RepoEntity } from './entity/RepoEntity'
import { RepositoryAuditLogEntity } from './entity/RepositoryAuditLogEntity'
import { RepositoryEcdsaKeyEntity } from './entity/RepositoryEcdsaKeyEntity'
import { RepositoryGeoIpRuleEntity } from './entity/RepositoryGeoIpRuleEntity'
import { RepositoryGeoIpStatusEntity } from './entity/RepositoryGeoIpStatusEntity'
import { RepositoryGeoIpTestAddressEntity } from './entity/RepositoryGeoIpTestAddressEntity'
import { RepositoryGpgKeyEntity } from './entity/RepositoryGpgKeyEntity'
import { RepositoryPrivilegeDictEntity } from './entity/RepositoryPrivilegeDictEntity'
import { RepositoryRetentionRuleEntity } from './entity/RepositoryRetentionRuleEntity'
import { RepositoryRsaKeyEntity } from './entity/RepositoryRsaKeyEntity'
import { RepositoryTokenEntity } from './entity/RepositoryTokenEntity'
import { RepositoryTokenRefreshEntity } from './entity/RepositoryTokenRefreshEntity'
import { RepositoryTokenSyncEntity } from './entity/RepositoryTokenSyncEntity'
import { RepositoryWebhookEntity } from './entity/RepositoryWebhookEntity'
import { RepositoryX509EcdsaCertificateEntity } from './entity/RepositoryX509EcdsaCertificateEntity'
import { RepositoryX509RsaCertificateEntity } from './entity/RepositoryX509RsaCertificateEntity'
import { ResourcesRateCheckEntity } from './entity/ResourcesRateCheckEntity'
import { RpmEntity } from './entity/RpmEntity'
import { RubyEntity } from './entity/RubyEntity'
import { ServiceEntity } from './entity/ServiceEntity'
import { StatusBasicEntity } from './entity/StatusBasicEntity'
import { StorageRegionEntity } from './entity/StorageRegionEntity'
import { SwiftEntity } from './entity/SwiftEntity'
import { UserEntity } from './entity/UserEntity'
import { UserAuthTokenEntity } from './entity/UserAuthTokenEntity'
import { UserAuthenticationTokenEntity } from './entity/UserAuthenticationTokenEntity'
import { UserBriefEntity } from './entity/UserBriefEntity'
import { UserProfileEntity } from './entity/UserProfileEntity'
import { VulnerabilityEntity } from './entity/VulnerabilityEntity'
import { WebhookEntity } from './entity/WebhookEntity'

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
    const extend = this._options.extend || []

    const featureorder = getpath(this._options, '__derived__.featureorder') || []
    for (const fname of featureorder) {
      const fopts = this._options.feature[fname] || {}
      if (fopts.active) {
        // An active name with no generated class is legal when an
        // extend-supplied instance carries that name (station's adopt
        // path): the instance is added below, positioned by its own
        // __after__ entry, so skip it here rather than fail construction.
        if (!this._rootctx.config.hasFeature(fname) &&
          extend.some((f: any) => fname === f.name)) {
          continue
        }
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    }

    for (let f of extend) {
      featureAdd(this._rootctx, f)
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

    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    

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



  // Entity access: `client.Cargo().list()` / `client.Cargo().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Cargo(entopts?: Record<string, any>) {
    const self = this
    return new CargoEntity(self, entopts)
  }


  // Entity access: `client.Composer().list()` / `client.Composer().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Composer(entopts?: Record<string, any>) {
    const self = this
    return new ComposerEntity(self, entopts)
  }


  // Entity access: `client.Conda().list()` / `client.Conda().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Conda(entopts?: Record<string, any>) {
    const self = this
    return new CondaEntity(self, entopts)
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


  // Entity access: `client.DistributionFull().list()` / `client.DistributionFull().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  DistributionFull(entopts?: Record<string, any>) {
    const self = this
    return new DistributionFullEntity(self, entopts)
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


  // Entity access: `client.Entitlement().list()` / `client.Entitlement().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Entitlement(entopts?: Record<string, any>) {
    const self = this
    return new EntitlementEntity(self, entopts)
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


  // Entity access: `client.Gon().list()` / `client.Gon().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Gon(entopts?: Record<string, any>) {
    const self = this
    return new GonEntity(self, entopts)
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


  // Entity access: `client.Huggingface().list()` / `client.Huggingface().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Huggingface(entopts?: Record<string, any>) {
    const self = this
    return new HuggingfaceEntity(self, entopts)
  }


  // Entity access: `client.Maven().list()` / `client.Maven().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Maven(entopts?: Record<string, any>) {
    const self = this
    return new MavenEntity(self, entopts)
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


  // Entity access: `client.Quota().list()` / `client.Quota().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Quota(entopts?: Record<string, any>) {
    const self = this
    return new QuotaEntity(self, entopts)
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


  // Entity access: `client.RepositoryPrivilegeDict().list()` / `client.RepositoryPrivilegeDict().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  RepositoryPrivilegeDict(entopts?: Record<string, any>) {
    const self = this
    return new RepositoryPrivilegeDictEntity(self, entopts)
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


  // Entity access: `client.ResourcesRateCheck().list()` / `client.ResourcesRateCheck().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  ResourcesRateCheck(entopts?: Record<string, any>) {
    const self = this
    return new ResourcesRateCheckEntity(self, entopts)
  }


  // Entity access: `client.Rpm().list()` / `client.Rpm().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Rpm(entopts?: Record<string, any>) {
    const self = this
    return new RpmEntity(self, entopts)
  }


  // Entity access: `client.Ruby().list()` / `client.Ruby().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Ruby(entopts?: Record<string, any>) {
    const self = this
    return new RubyEntity(self, entopts)
  }


  // Entity access: `client.Service().list()` / `client.Service().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Service(entopts?: Record<string, any>) {
    const self = this
    return new ServiceEntity(self, entopts)
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


  // Entity access: `client.Vulnerability().list()` / `client.Vulnerability().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Vulnerability(entopts?: Record<string, any>) {
    const self = this
    return new VulnerabilityEntity(self, entopts)
  }


  // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
  // The argument is the entity OPTIONS object (passed to the entity
  // constructor as entopts), not initial entity data.
  Webhook(entopts?: Record<string, any>) {
    const self = this
    return new WebhookEntity(self, entopts)
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


