"use strict";
// Cloudsmith Ts SDK
Object.defineProperty(exports, "__esModule", { value: true });
exports.SDK = exports.CloudsmithSDK = exports.CloudsmithEntityBase = exports.BaseFeature = exports.config = exports.stdutil = void 0;
const CargoEntity_1 = require("./entity/CargoEntity");
const ComposerEntity_1 = require("./entity/ComposerEntity");
const CondaEntity_1 = require("./entity/CondaEntity");
const CranEntity_1 = require("./entity/CranEntity");
const DartEntity_1 = require("./entity/DartEntity");
const DebEntity_1 = require("./entity/DebEntity");
const DistributionFullEntity_1 = require("./entity/DistributionFullEntity");
const DockerEntity_1 = require("./entity/DockerEntity");
const DynamicMappingEntity_1 = require("./entity/DynamicMappingEntity");
const EntitlementEntity_1 = require("./entity/EntitlementEntity");
const FileEntity_1 = require("./entity/FileEntity");
const FormatEntity_1 = require("./entity/FormatEntity");
const GonEntity_1 = require("./entity/GonEntity");
const HelmEntity_1 = require("./entity/HelmEntity");
const HexEntity_1 = require("./entity/HexEntity");
const HuggingfaceEntity_1 = require("./entity/HuggingfaceEntity");
const MavenEntity_1 = require("./entity/MavenEntity");
const NamespaceEntity_1 = require("./entity/NamespaceEntity");
const NamespaceAuditLogEntity_1 = require("./entity/NamespaceAuditLogEntity");
const NpmEntity_1 = require("./entity/NpmEntity");
const NugetEntity_1 = require("./entity/NugetEntity");
const OrgEntity_1 = require("./entity/OrgEntity");
const OrganizationGroupSyncEntity_1 = require("./entity/OrganizationGroupSyncEntity");
const OrganizationGroupSyncStatusEntity_1 = require("./entity/OrganizationGroupSyncStatusEntity");
const OrganizationInviteEntity_1 = require("./entity/OrganizationInviteEntity");
const OrganizationInviteExtendEntity_1 = require("./entity/OrganizationInviteExtendEntity");
const OrganizationMembershipEntity_1 = require("./entity/OrganizationMembershipEntity");
const OrganizationMembershipRoleUpdateEntity_1 = require("./entity/OrganizationMembershipRoleUpdateEntity");
const OrganizationMembershipVisibilityUpdateEntity_1 = require("./entity/OrganizationMembershipVisibilityUpdateEntity");
const OrganizationPackageLicensePolicyEntity_1 = require("./entity/OrganizationPackageLicensePolicyEntity");
const OrganizationPackageVulnerabilityPolicyEntity_1 = require("./entity/OrganizationPackageVulnerabilityPolicyEntity");
const OrganizationSamlAuthEntity_1 = require("./entity/OrganizationSamlAuthEntity");
const OrganizationTeamEntity_1 = require("./entity/OrganizationTeamEntity");
const OrganizationTeamMemberEntity_1 = require("./entity/OrganizationTeamMemberEntity");
const PackageEntity_1 = require("./entity/PackageEntity");
const PackageDenyPolicyEntity_1 = require("./entity/PackageDenyPolicyEntity");
const PackageFilePartsUploadEntity_1 = require("./entity/PackageFilePartsUploadEntity");
const PackageFileUploadEntity_1 = require("./entity/PackageFileUploadEntity");
const PackageLicensePolicyEvaluationEntity_1 = require("./entity/PackageLicensePolicyEvaluationEntity");
const PackageVersionBadgeEntity_1 = require("./entity/PackageVersionBadgeEntity");
const PackageVulnerabilityPolicyEvaluationEntity_1 = require("./entity/PackageVulnerabilityPolicyEvaluationEntity");
const ProviderSettingEntity_1 = require("./entity/ProviderSettingEntity");
const ProviderSettingsWriteEntity_1 = require("./entity/ProviderSettingsWriteEntity");
const PythonEntity_1 = require("./entity/PythonEntity");
const QuotaEntity_1 = require("./entity/QuotaEntity");
const RepoEntity_1 = require("./entity/RepoEntity");
const RepositoryAuditLogEntity_1 = require("./entity/RepositoryAuditLogEntity");
const RepositoryEcdsaKeyEntity_1 = require("./entity/RepositoryEcdsaKeyEntity");
const RepositoryGeoIpRuleEntity_1 = require("./entity/RepositoryGeoIpRuleEntity");
const RepositoryGeoIpStatusEntity_1 = require("./entity/RepositoryGeoIpStatusEntity");
const RepositoryGeoIpTestAddressEntity_1 = require("./entity/RepositoryGeoIpTestAddressEntity");
const RepositoryGpgKeyEntity_1 = require("./entity/RepositoryGpgKeyEntity");
const RepositoryPrivilegeDictEntity_1 = require("./entity/RepositoryPrivilegeDictEntity");
const RepositoryRetentionRuleEntity_1 = require("./entity/RepositoryRetentionRuleEntity");
const RepositoryRsaKeyEntity_1 = require("./entity/RepositoryRsaKeyEntity");
const RepositoryTokenEntity_1 = require("./entity/RepositoryTokenEntity");
const RepositoryTokenRefreshEntity_1 = require("./entity/RepositoryTokenRefreshEntity");
const RepositoryTokenSyncEntity_1 = require("./entity/RepositoryTokenSyncEntity");
const RepositoryWebhookEntity_1 = require("./entity/RepositoryWebhookEntity");
const RepositoryX509EcdsaCertificateEntity_1 = require("./entity/RepositoryX509EcdsaCertificateEntity");
const RepositoryX509RsaCertificateEntity_1 = require("./entity/RepositoryX509RsaCertificateEntity");
const ResourcesRateCheckEntity_1 = require("./entity/ResourcesRateCheckEntity");
const RpmEntity_1 = require("./entity/RpmEntity");
const RubyEntity_1 = require("./entity/RubyEntity");
const ServiceEntity_1 = require("./entity/ServiceEntity");
const StatusBasicEntity_1 = require("./entity/StatusBasicEntity");
const StorageRegionEntity_1 = require("./entity/StorageRegionEntity");
const SwiftEntity_1 = require("./entity/SwiftEntity");
const UserEntity_1 = require("./entity/UserEntity");
const UserAuthTokenEntity_1 = require("./entity/UserAuthTokenEntity");
const UserAuthenticationTokenEntity_1 = require("./entity/UserAuthenticationTokenEntity");
const UserBriefEntity_1 = require("./entity/UserBriefEntity");
const UserProfileEntity_1 = require("./entity/UserProfileEntity");
const VulnerabilityEntity_1 = require("./entity/VulnerabilityEntity");
const WebhookEntity_1 = require("./entity/WebhookEntity");
const node_util_1 = require("node:util");
const Config_1 = require("./Config");
Object.defineProperty(exports, "config", { enumerable: true, get: function () { return Config_1.config; } });
const CloudsmithEntityBase_1 = require("./CloudsmithEntityBase");
Object.defineProperty(exports, "CloudsmithEntityBase", { enumerable: true, get: function () { return CloudsmithEntityBase_1.CloudsmithEntityBase; } });
const Utility_1 = require("./utility/Utility");
const BaseFeature_1 = require("./feature/base/BaseFeature");
Object.defineProperty(exports, "BaseFeature", { enumerable: true, get: function () { return BaseFeature_1.BaseFeature; } });
const stdutil = new Utility_1.Utility();
exports.stdutil = stdutil;
class CloudsmithSDK {
    _mode = 'live';
    _options;
    _utility = new Utility_1.Utility();
    _features;
    _rootctx;
    constructor(options) {
        this._rootctx = this._utility.makeContext({
            client: this,
            utility: this._utility,
            config: Config_1.config,
            options,
            shared: new WeakMap()
        });
        this._options = this._utility.makeOptions(this._rootctx);
        const struct = this._utility.struct;
        const getpath = struct.getpath;
        if (true === getpath(this._options.feature, 'test.active')) {
            this._mode = 'test';
        }
        this._rootctx.options = this._options;
        this._features = [];
        const featureAdd = this._utility.featureAdd;
        const featureInit = this._utility.featureInit;
        // Add features in the resolved order (makeOptions puts an explicit
        // array order first, else defaults to test-first). Ordering matters:
        // the `test` feature installs the base mock transport and the transport
        // features (retry/cache/netsim/proxy/ratelimit) wrap whatever is current,
        // so `test` must be added before them to sit at the base of the chain.
        const extend = this._options.extend || [];
        const featureorder = getpath(this._options, '__derived__.featureorder') || [];
        for (const fname of featureorder) {
            const fopts = this._options.feature[fname] || {};
            if (fopts.active) {
                // An active name with no generated class is legal when an
                // extend-supplied instance carries that name (station's adopt
                // path): the instance is added below, positioned by its own
                // __after__ entry, so skip it here rather than fail construction.
                if (!this._rootctx.config.hasFeature(fname) &&
                    extend.some((f) => fname === f.name)) {
                    continue;
                }
                featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname));
            }
        }
        for (let f of extend) {
            featureAdd(this._rootctx, f);
        }
        for (let f of this._features) {
            featureInit(this._rootctx, f);
        }
        const featureHook = this._utility.featureHook;
        featureHook(this._rootctx, 'PostConstruct');
    }
    options() {
        return this._utility.struct.clone(this._options);
    }
    utility() {
        return this._utility.struct.clone(this._utility);
    }
    async prepare(fetchargs) {
        const utility = this._utility;
        const struct = utility.struct;
        const clone = struct.clone;
        const { makeContext, makeFetchDef, prepareHeaders, prepareAuth, } = utility;
        fetchargs = fetchargs || {};
        let ctx = makeContext({
            opname: 'prepare',
            ctrl: fetchargs.ctrl || {},
        }, this._rootctx);
        const options = this._options;
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
        };
        ctx.spec = spec;
        if (fetchargs.headers) {
            const uheaders = fetchargs.headers;
            for (let key in uheaders) {
                spec.headers[key] = uheaders[key];
            }
        }
        const authResult = prepareAuth(ctx);
        if (authResult instanceof Error) {
            return authResult;
        }
        return makeFetchDef(ctx);
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
            };
        }
        return this._rawRequest(fetchargs);
    }
    // Ungated request path shared by direct() and graphql(), each of which
    // checks its own allow.op token first. Private, rather than a flag on
    // fetchargs: a caller-supplied marker would let anyone opt straight back
    // out of the gate by passing it.
    async _rawRequest(fetchargs) {
        const utility = this._utility;
        const fetcher = utility.fetcher;
        const makeContext = utility.makeContext;
        const fetchdef = await this.prepare(fetchargs);
        if (fetchdef instanceof Error) {
            return fetchdef;
        }
        let ctx = makeContext({
            opname: 'direct',
            ctrl: (fetchargs || {}).ctrl || {},
        }, this._rootctx);
        try {
            const fetched = await fetcher(ctx, fetchdef.url, fetchdef);
            if (null == fetched) {
                return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') };
            }
            else if (fetched instanceof Error) {
                return { ok: false, err: fetched };
            }
            const status = fetched.status;
            // No body responses (204 No Content, 304 Not Modified) and explicit
            // zero content-length must skip JSON parsing — fetched.json() would
            // throw `Unexpected end of JSON input` on an empty body.
            const headers = fetched.headers;
            const contentLength = headers && 'function' === typeof headers.get
                ? headers.get('content-length')
                : (headers || {})['content-length'];
            const noBody = 204 === status || 304 === status || '0' === String(contentLength);
            let json = undefined;
            if (!noBody) {
                try {
                    json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json;
                }
                catch (parseErr) {
                    // Body wasn't valid JSON — surface the raw response rather than
                    // throwing. data stays undefined; callers can inspect status/headers.
                    json = undefined;
                }
            }
            return {
                ok: status >= 200 && status < 300,
                status,
                headers: fetched.headers,
                data: json,
            };
        }
        catch (err) {
            return { ok: false, err };
        }
    }
    async graphql(query, variables, ctrl) {
        const options = this._options;
        if (!options.allow.op.includes('graphql')) {
            return {
                ok: false,
                err: new Error('CloudsmithSDK: graphql: operation not allowed by' +
                    ' SDK option allow.op value: "' + options.allow.op + '"'),
            };
        }
        const res = await this._rawRequest({
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: { query, variables: variables || {} },
            ctrl,
        });
        if (res instanceof Error) {
            return res;
        }
        // Errors are read BEFORE any status check: a GraphQL parse or validation
        // failure comes back as HTTP 400 carrying the standard { errors: [...] }
        // body, and the raw path represents a non-2xx as { ok: false } with no
        // err — so returning early on status would discard the server's own
        // diagnostics, which are the only useful part of that response.
        const errors = null == res.data ? undefined : res.data.errors;
        if (null != errors && Array.isArray(errors) && 0 < errors.length) {
            const first = errors[0] || {};
            const err = new Error('CloudsmithSDK: graphql: ' +
                (first.message || 'graphql error'));
            err.graphql = errors;
            return { ok: false, status: res.status, headers: res.headers, err, data: res.data };
        }
        return res;
    }
    // Entity access: `client.Cargo().list()` / `client.Cargo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Cargo(entopts) {
        const self = this;
        return new CargoEntity_1.CargoEntity(self, entopts);
    }
    // Entity access: `client.Composer().list()` / `client.Composer().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Composer(entopts) {
        const self = this;
        return new ComposerEntity_1.ComposerEntity(self, entopts);
    }
    // Entity access: `client.Conda().list()` / `client.Conda().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Conda(entopts) {
        const self = this;
        return new CondaEntity_1.CondaEntity(self, entopts);
    }
    // Entity access: `client.Cran().list()` / `client.Cran().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Cran(entopts) {
        const self = this;
        return new CranEntity_1.CranEntity(self, entopts);
    }
    // Entity access: `client.Dart().list()` / `client.Dart().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Dart(entopts) {
        const self = this;
        return new DartEntity_1.DartEntity(self, entopts);
    }
    // Entity access: `client.Deb().list()` / `client.Deb().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Deb(entopts) {
        const self = this;
        return new DebEntity_1.DebEntity(self, entopts);
    }
    // Entity access: `client.DistributionFull().list()` / `client.DistributionFull().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DistributionFull(entopts) {
        const self = this;
        return new DistributionFullEntity_1.DistributionFullEntity(self, entopts);
    }
    // Entity access: `client.Docker().list()` / `client.Docker().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Docker(entopts) {
        const self = this;
        return new DockerEntity_1.DockerEntity(self, entopts);
    }
    // Entity access: `client.DynamicMapping().list()` / `client.DynamicMapping().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    DynamicMapping(entopts) {
        const self = this;
        return new DynamicMappingEntity_1.DynamicMappingEntity(self, entopts);
    }
    // Entity access: `client.Entitlement().list()` / `client.Entitlement().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Entitlement(entopts) {
        const self = this;
        return new EntitlementEntity_1.EntitlementEntity(self, entopts);
    }
    // Entity access: `client.File().list()` / `client.File().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    File(entopts) {
        const self = this;
        return new FileEntity_1.FileEntity(self, entopts);
    }
    // Entity access: `client.Format().list()` / `client.Format().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Format(entopts) {
        const self = this;
        return new FormatEntity_1.FormatEntity(self, entopts);
    }
    // Entity access: `client.Gon().list()` / `client.Gon().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Gon(entopts) {
        const self = this;
        return new GonEntity_1.GonEntity(self, entopts);
    }
    // Entity access: `client.Helm().list()` / `client.Helm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Helm(entopts) {
        const self = this;
        return new HelmEntity_1.HelmEntity(self, entopts);
    }
    // Entity access: `client.Hex().list()` / `client.Hex().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Hex(entopts) {
        const self = this;
        return new HexEntity_1.HexEntity(self, entopts);
    }
    // Entity access: `client.Huggingface().list()` / `client.Huggingface().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Huggingface(entopts) {
        const self = this;
        return new HuggingfaceEntity_1.HuggingfaceEntity(self, entopts);
    }
    // Entity access: `client.Maven().list()` / `client.Maven().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Maven(entopts) {
        const self = this;
        return new MavenEntity_1.MavenEntity(self, entopts);
    }
    // Entity access: `client.Namespace().list()` / `client.Namespace().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Namespace(entopts) {
        const self = this;
        return new NamespaceEntity_1.NamespaceEntity(self, entopts);
    }
    // Entity access: `client.NamespaceAuditLog().list()` / `client.NamespaceAuditLog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    NamespaceAuditLog(entopts) {
        const self = this;
        return new NamespaceAuditLogEntity_1.NamespaceAuditLogEntity(self, entopts);
    }
    // Entity access: `client.Npm().list()` / `client.Npm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Npm(entopts) {
        const self = this;
        return new NpmEntity_1.NpmEntity(self, entopts);
    }
    // Entity access: `client.Nuget().list()` / `client.Nuget().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Nuget(entopts) {
        const self = this;
        return new NugetEntity_1.NugetEntity(self, entopts);
    }
    // Entity access: `client.Org().list()` / `client.Org().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Org(entopts) {
        const self = this;
        return new OrgEntity_1.OrgEntity(self, entopts);
    }
    // Entity access: `client.OrganizationGroupSync().list()` / `client.OrganizationGroupSync().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationGroupSync(entopts) {
        const self = this;
        return new OrganizationGroupSyncEntity_1.OrganizationGroupSyncEntity(self, entopts);
    }
    // Entity access: `client.OrganizationGroupSyncStatus().list()` / `client.OrganizationGroupSyncStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationGroupSyncStatus(entopts) {
        const self = this;
        return new OrganizationGroupSyncStatusEntity_1.OrganizationGroupSyncStatusEntity(self, entopts);
    }
    // Entity access: `client.OrganizationInvite().list()` / `client.OrganizationInvite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationInvite(entopts) {
        const self = this;
        return new OrganizationInviteEntity_1.OrganizationInviteEntity(self, entopts);
    }
    // Entity access: `client.OrganizationInviteExtend().list()` / `client.OrganizationInviteExtend().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationInviteExtend(entopts) {
        const self = this;
        return new OrganizationInviteExtendEntity_1.OrganizationInviteExtendEntity(self, entopts);
    }
    // Entity access: `client.OrganizationMembership().list()` / `client.OrganizationMembership().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationMembership(entopts) {
        const self = this;
        return new OrganizationMembershipEntity_1.OrganizationMembershipEntity(self, entopts);
    }
    // Entity access: `client.OrganizationMembershipRoleUpdate().list()` / `client.OrganizationMembershipRoleUpdate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationMembershipRoleUpdate(entopts) {
        const self = this;
        return new OrganizationMembershipRoleUpdateEntity_1.OrganizationMembershipRoleUpdateEntity(self, entopts);
    }
    // Entity access: `client.OrganizationMembershipVisibilityUpdate().list()` / `client.OrganizationMembershipVisibilityUpdate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationMembershipVisibilityUpdate(entopts) {
        const self = this;
        return new OrganizationMembershipVisibilityUpdateEntity_1.OrganizationMembershipVisibilityUpdateEntity(self, entopts);
    }
    // Entity access: `client.OrganizationPackageLicensePolicy().list()` / `client.OrganizationPackageLicensePolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationPackageLicensePolicy(entopts) {
        const self = this;
        return new OrganizationPackageLicensePolicyEntity_1.OrganizationPackageLicensePolicyEntity(self, entopts);
    }
    // Entity access: `client.OrganizationPackageVulnerabilityPolicy().list()` / `client.OrganizationPackageVulnerabilityPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationPackageVulnerabilityPolicy(entopts) {
        const self = this;
        return new OrganizationPackageVulnerabilityPolicyEntity_1.OrganizationPackageVulnerabilityPolicyEntity(self, entopts);
    }
    // Entity access: `client.OrganizationSamlAuth().list()` / `client.OrganizationSamlAuth().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationSamlAuth(entopts) {
        const self = this;
        return new OrganizationSamlAuthEntity_1.OrganizationSamlAuthEntity(self, entopts);
    }
    // Entity access: `client.OrganizationTeam().list()` / `client.OrganizationTeam().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationTeam(entopts) {
        const self = this;
        return new OrganizationTeamEntity_1.OrganizationTeamEntity(self, entopts);
    }
    // Entity access: `client.OrganizationTeamMember().list()` / `client.OrganizationTeamMember().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    OrganizationTeamMember(entopts) {
        const self = this;
        return new OrganizationTeamMemberEntity_1.OrganizationTeamMemberEntity(self, entopts);
    }
    // Entity access: `client.Package().list()` / `client.Package().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Package(entopts) {
        const self = this;
        return new PackageEntity_1.PackageEntity(self, entopts);
    }
    // Entity access: `client.PackageDenyPolicy().list()` / `client.PackageDenyPolicy().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PackageDenyPolicy(entopts) {
        const self = this;
        return new PackageDenyPolicyEntity_1.PackageDenyPolicyEntity(self, entopts);
    }
    // Entity access: `client.PackageFilePartsUpload().list()` / `client.PackageFilePartsUpload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PackageFilePartsUpload(entopts) {
        const self = this;
        return new PackageFilePartsUploadEntity_1.PackageFilePartsUploadEntity(self, entopts);
    }
    // Entity access: `client.PackageFileUpload().list()` / `client.PackageFileUpload().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PackageFileUpload(entopts) {
        const self = this;
        return new PackageFileUploadEntity_1.PackageFileUploadEntity(self, entopts);
    }
    // Entity access: `client.PackageLicensePolicyEvaluation().list()` / `client.PackageLicensePolicyEvaluation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PackageLicensePolicyEvaluation(entopts) {
        const self = this;
        return new PackageLicensePolicyEvaluationEntity_1.PackageLicensePolicyEvaluationEntity(self, entopts);
    }
    // Entity access: `client.PackageVersionBadge().list()` / `client.PackageVersionBadge().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PackageVersionBadge(entopts) {
        const self = this;
        return new PackageVersionBadgeEntity_1.PackageVersionBadgeEntity(self, entopts);
    }
    // Entity access: `client.PackageVulnerabilityPolicyEvaluation().list()` / `client.PackageVulnerabilityPolicyEvaluation().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    PackageVulnerabilityPolicyEvaluation(entopts) {
        const self = this;
        return new PackageVulnerabilityPolicyEvaluationEntity_1.PackageVulnerabilityPolicyEvaluationEntity(self, entopts);
    }
    // Entity access: `client.ProviderSetting().list()` / `client.ProviderSetting().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProviderSetting(entopts) {
        const self = this;
        return new ProviderSettingEntity_1.ProviderSettingEntity(self, entopts);
    }
    // Entity access: `client.ProviderSettingsWrite().list()` / `client.ProviderSettingsWrite().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ProviderSettingsWrite(entopts) {
        const self = this;
        return new ProviderSettingsWriteEntity_1.ProviderSettingsWriteEntity(self, entopts);
    }
    // Entity access: `client.Python().list()` / `client.Python().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Python(entopts) {
        const self = this;
        return new PythonEntity_1.PythonEntity(self, entopts);
    }
    // Entity access: `client.Quota().list()` / `client.Quota().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Quota(entopts) {
        const self = this;
        return new QuotaEntity_1.QuotaEntity(self, entopts);
    }
    // Entity access: `client.Repo().list()` / `client.Repo().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Repo(entopts) {
        const self = this;
        return new RepoEntity_1.RepoEntity(self, entopts);
    }
    // Entity access: `client.RepositoryAuditLog().list()` / `client.RepositoryAuditLog().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryAuditLog(entopts) {
        const self = this;
        return new RepositoryAuditLogEntity_1.RepositoryAuditLogEntity(self, entopts);
    }
    // Entity access: `client.RepositoryEcdsaKey().list()` / `client.RepositoryEcdsaKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryEcdsaKey(entopts) {
        const self = this;
        return new RepositoryEcdsaKeyEntity_1.RepositoryEcdsaKeyEntity(self, entopts);
    }
    // Entity access: `client.RepositoryGeoIpRule().list()` / `client.RepositoryGeoIpRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryGeoIpRule(entopts) {
        const self = this;
        return new RepositoryGeoIpRuleEntity_1.RepositoryGeoIpRuleEntity(self, entopts);
    }
    // Entity access: `client.RepositoryGeoIpStatus().list()` / `client.RepositoryGeoIpStatus().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryGeoIpStatus(entopts) {
        const self = this;
        return new RepositoryGeoIpStatusEntity_1.RepositoryGeoIpStatusEntity(self, entopts);
    }
    // Entity access: `client.RepositoryGeoIpTestAddress().list()` / `client.RepositoryGeoIpTestAddress().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryGeoIpTestAddress(entopts) {
        const self = this;
        return new RepositoryGeoIpTestAddressEntity_1.RepositoryGeoIpTestAddressEntity(self, entopts);
    }
    // Entity access: `client.RepositoryGpgKey().list()` / `client.RepositoryGpgKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryGpgKey(entopts) {
        const self = this;
        return new RepositoryGpgKeyEntity_1.RepositoryGpgKeyEntity(self, entopts);
    }
    // Entity access: `client.RepositoryPrivilegeDict().list()` / `client.RepositoryPrivilegeDict().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryPrivilegeDict(entopts) {
        const self = this;
        return new RepositoryPrivilegeDictEntity_1.RepositoryPrivilegeDictEntity(self, entopts);
    }
    // Entity access: `client.RepositoryRetentionRule().list()` / `client.RepositoryRetentionRule().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryRetentionRule(entopts) {
        const self = this;
        return new RepositoryRetentionRuleEntity_1.RepositoryRetentionRuleEntity(self, entopts);
    }
    // Entity access: `client.RepositoryRsaKey().list()` / `client.RepositoryRsaKey().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryRsaKey(entopts) {
        const self = this;
        return new RepositoryRsaKeyEntity_1.RepositoryRsaKeyEntity(self, entopts);
    }
    // Entity access: `client.RepositoryToken().list()` / `client.RepositoryToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryToken(entopts) {
        const self = this;
        return new RepositoryTokenEntity_1.RepositoryTokenEntity(self, entopts);
    }
    // Entity access: `client.RepositoryTokenRefresh().list()` / `client.RepositoryTokenRefresh().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryTokenRefresh(entopts) {
        const self = this;
        return new RepositoryTokenRefreshEntity_1.RepositoryTokenRefreshEntity(self, entopts);
    }
    // Entity access: `client.RepositoryTokenSync().list()` / `client.RepositoryTokenSync().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryTokenSync(entopts) {
        const self = this;
        return new RepositoryTokenSyncEntity_1.RepositoryTokenSyncEntity(self, entopts);
    }
    // Entity access: `client.RepositoryWebhook().list()` / `client.RepositoryWebhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryWebhook(entopts) {
        const self = this;
        return new RepositoryWebhookEntity_1.RepositoryWebhookEntity(self, entopts);
    }
    // Entity access: `client.RepositoryX509EcdsaCertificate().list()` / `client.RepositoryX509EcdsaCertificate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryX509EcdsaCertificate(entopts) {
        const self = this;
        return new RepositoryX509EcdsaCertificateEntity_1.RepositoryX509EcdsaCertificateEntity(self, entopts);
    }
    // Entity access: `client.RepositoryX509RsaCertificate().list()` / `client.RepositoryX509RsaCertificate().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    RepositoryX509RsaCertificate(entopts) {
        const self = this;
        return new RepositoryX509RsaCertificateEntity_1.RepositoryX509RsaCertificateEntity(self, entopts);
    }
    // Entity access: `client.ResourcesRateCheck().list()` / `client.ResourcesRateCheck().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    ResourcesRateCheck(entopts) {
        const self = this;
        return new ResourcesRateCheckEntity_1.ResourcesRateCheckEntity(self, entopts);
    }
    // Entity access: `client.Rpm().list()` / `client.Rpm().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Rpm(entopts) {
        const self = this;
        return new RpmEntity_1.RpmEntity(self, entopts);
    }
    // Entity access: `client.Ruby().list()` / `client.Ruby().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Ruby(entopts) {
        const self = this;
        return new RubyEntity_1.RubyEntity(self, entopts);
    }
    // Entity access: `client.Service().list()` / `client.Service().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Service(entopts) {
        const self = this;
        return new ServiceEntity_1.ServiceEntity(self, entopts);
    }
    // Entity access: `client.StatusBasic().list()` / `client.StatusBasic().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StatusBasic(entopts) {
        const self = this;
        return new StatusBasicEntity_1.StatusBasicEntity(self, entopts);
    }
    // Entity access: `client.StorageRegion().list()` / `client.StorageRegion().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    StorageRegion(entopts) {
        const self = this;
        return new StorageRegionEntity_1.StorageRegionEntity(self, entopts);
    }
    // Entity access: `client.Swift().list()` / `client.Swift().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Swift(entopts) {
        const self = this;
        return new SwiftEntity_1.SwiftEntity(self, entopts);
    }
    // Entity access: `client.User().list()` / `client.User().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    User(entopts) {
        const self = this;
        return new UserEntity_1.UserEntity(self, entopts);
    }
    // Entity access: `client.UserAuthToken().list()` / `client.UserAuthToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserAuthToken(entopts) {
        const self = this;
        return new UserAuthTokenEntity_1.UserAuthTokenEntity(self, entopts);
    }
    // Entity access: `client.UserAuthenticationToken().list()` / `client.UserAuthenticationToken().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserAuthenticationToken(entopts) {
        const self = this;
        return new UserAuthenticationTokenEntity_1.UserAuthenticationTokenEntity(self, entopts);
    }
    // Entity access: `client.UserBrief().list()` / `client.UserBrief().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserBrief(entopts) {
        const self = this;
        return new UserBriefEntity_1.UserBriefEntity(self, entopts);
    }
    // Entity access: `client.UserProfile().list()` / `client.UserProfile().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    UserProfile(entopts) {
        const self = this;
        return new UserProfileEntity_1.UserProfileEntity(self, entopts);
    }
    // Entity access: `client.Vulnerability().list()` / `client.Vulnerability().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Vulnerability(entopts) {
        const self = this;
        return new VulnerabilityEntity_1.VulnerabilityEntity(self, entopts);
    }
    // Entity access: `client.Webhook().list()` / `client.Webhook().load({ id })`.
    // The argument is the entity OPTIONS object (passed to the entity
    // constructor as entopts), not initial entity data.
    Webhook(entopts) {
        const self = this;
        return new WebhookEntity_1.WebhookEntity(self, entopts);
    }
    static test(testoptsarg, sdkoptsarg) {
        const struct = stdutil.struct;
        const setpath = struct.setpath;
        const getdef = struct.getdef;
        const clone = struct.clone;
        const setprop = struct.setprop;
        const sdkopts = getdef(clone(sdkoptsarg), {});
        const testopts = getdef(clone(testoptsarg), {});
        setprop(testopts, 'active', true);
        setpath(sdkopts, 'feature.test', testopts);
        const testsdk = new CloudsmithSDK(sdkopts);
        testsdk._mode = 'test';
        return testsdk;
    }
    tester(testopts, sdkopts) {
        return CloudsmithSDK.test(testopts, sdkopts);
    }
    toJSON() {
        return { name: 'Cloudsmith' };
    }
    toString() {
        return 'Cloudsmith ' + this._utility.struct.jsonify(this.toJSON());
    }
    [node_util_1.inspect.custom]() {
        return this.toString();
    }
}
exports.CloudsmithSDK = CloudsmithSDK;
const SDK = CloudsmithSDK;
exports.SDK = SDK;
//# sourceMappingURL=CloudsmithSDK.js.map