"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('RepositoryTokenSyncEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.RepositoryTokenSync();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['create']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository_token_sync.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "tokens", "readOnly": true, "req": false, "short": "The entitlements that have been synchronised.", "type": "`$ARRAY`", "index$": 0 }], "name": "repository_token_sync", "op": { "create": { "input": "data", "name": "create", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "owner", "orig": "owner", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "repo", "orig": "repo", "reqd": true, "type": "`$ANY`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "data", "orig": "data", "reqd": false, "type": "`$OBJECT`", "index$": 0 }, { "active": true, "kind": "query", "name": "show_token", "orig": "show_token", "reqd": false, "type": "`$ANY`", "index$": 1 }] }, "contract": { "id": "POST /entitlements/{owner}/{repo}/sync/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"entitlements_sync\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"repo\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"source\":{\"description\":\"The source repository slug (in the same owner namespace).\",\"minLength\":1,\"title\":\"Source\",\"type\":\"string\"}},\"required\":[\"source\"],\"type\":\"object\"}},{\"default\":false,\"description\":\"Show entitlement token strings in results\",\"in\":\"query\",\"name\":\"show_tokens\",\"required\":false,\"type\":\"boolean\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"The tokens have been synchronised from the source repository.\",\"schema\":{\"properties\":{\"tokens\":{\"description\":\"The entitlements that have been synchronised.\",\"items\":{\"properties\":{\"clients\":{\"readOnly\":true,\"title\":\"Clients\",\"type\":\"integer\"},\"created_at\":{\"description\":\"The datetime the token was updated at.\",\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"created_by\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Created by\",\"type\":\"string\"},\"created_by_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Created by url\",\"type\":\"string\"},\"default\":{\"description\":\"If selected this is the default token for this repository.\",\"readOnly\":true,\"title\":\"Default\",\"type\":\"boolean\"},\"disable_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Disable url\",\"type\":\"string\"},\"downloads\":{\"readOnly\":true,\"title\":\"Downloads\",\"type\":\"integer\"},\"enable_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Enable url\",\"type\":\"string\"},\"eula_accepted\":{\"properties\":{\"identifier\":{\"description\":\"A unique identifier that you can use for your own EULA tracking purposes. This might be a date, or a semantic version, etc. The only requirement is that it is unique across multiple EULAs.\",\"format\":\"slug\",\"maxLength\":16,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Identifier\",\"type\":\"string\"},\"number\":{\"description\":\"A sequential identifier that increments by one for each new commit in a repository.\",\"maximum\":2147483647,\"minimum\":0,\"title\":\"Number\",\"type\":\"integer\"}},\"type\":\"object\"},\"eula_accepted_at\":{\"description\":\"The datetime the EULA was accepted at.\",\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Eula accepted at\",\"type\":\"string\"},\"eula_accepted_from\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Eula accepted from\",\"type\":\"string\"},\"eula_required\":{\"description\":\"If checked, a EULA acceptance is required for this token.\",\"title\":\"Eula required\",\"type\":\"boolean\"},\"has_limits\":{\"readOnly\":true,\"title\":\"Has limits\",\"type\":\"boolean\"},\"identifier\":{\"description\":\"Deprecated (23-05-15): Please use 'slug_perm' instead. Previously: A monotonically increasing number that identified an entitlement within a repository.\",\"readOnly\":true,\"title\":\"Identifier\",\"type\":\"integer\"},\"is_active\":{\"description\":\"If enabled, the token will allow downloads based on configured restrictions (if any).\",\"title\":\"Token Active\",\"type\":\"boolean\"},\"is_limited\":{\"readOnly\":true,\"title\":\"Is limited\",\"type\":\"boolean\"},\"limit_bandwidth\":{\"description\":\"The maximum download bandwidth allowed for the token. Values are expressed as the selected unit of bandwidth. Please note that since downloads are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point. \",\"maximum\":9223372036854776000,\"minimum\":-9223372036854776000,\"title\":\"Limit bandwidth\",\"type\":\"integer\"},\"limit_bandwidth_unit\":{\"default\":\"Byte\",\"enum\":[\"Byte\",\"Kilobyte\",\"Megabyte\",\"Gigabyte\",\"Terabyte\",\"Petabyte\",\"Exabyte\",\"Zettabyte\",\"Yottabyte\"],\"title\":\"Limit bandwidth unit\",\"type\":\"string\"},\"limit_date_range_from\":{\"description\":\"The starting date/time the token is allowed to be used from.\",\"format\":\"date-time\",\"title\":\"Limit date range from\",\"type\":\"string\"},\"limit_date_range_to\":{\"description\":\"The ending date/time the token is allowed to be used until.\",\"format\":\"date-time\",\"title\":\"Limit date range to\",\"type\":\"string\"},\"limit_num_clients\":{\"description\":\"The maximum number of unique clients allowed for the token. Please note that since clients are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.\",\"maximum\":9223372036854776000,\"minimum\":-9223372036854776000,\"title\":\"Limit num clients\",\"type\":\"integer\"},\"limit_num_downloads\":{\"description\":\"The maximum number of downloads allowed for the token. Please note that since downloads are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.\",\"maximum\":9223372036854776000,\"minimum\":-9223372036854776000,\"title\":\"Limit num downloads\",\"type\":\"integer\"},\"limit_package_query\":{\"description\":\"The package-based search query to apply to restrict downloads to. This uses the same syntax as the standard search used for repositories, and also supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. This will still allow access to non-package files, such as metadata.\",\"maxLength\":1024,\"title\":\"Limit package query\",\"type\":\"string\"},\"limit_path_query\":{\"description\":\"THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. The path-based search query to apply to restrict downloads to. This supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. The path evaluated does not include the domain name, the namespace, the entitlement code used, the package format, etc. and it always starts with a forward slash.\",\"maxLength\":1024,\"title\":\"Limit path query\",\"type\":\"string\"},\"metadata\":{\"title\":\"Metadata\",\"type\":\"object\"},\"name\":{\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"refresh_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Refresh url\",\"type\":\"string\"},\"reset_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Reset url\",\"type\":\"string\"},\"scheduled_reset_at\":{\"description\":\"The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero.\",\"format\":\"date-time\",\"title\":\"Scheduled reset at\",\"type\":\"string\"},\"scheduled_reset_period\":{\"default\":\"Never Reset\",\"enum\":[\"Never Reset\",\"Daily\",\"Weekly\",\"Fortnightly\",\"Monthly\",\"Bi-Monthly\",\"Quarterly\",\"Every 6 months\",\"Annual\"],\"title\":\"Scheduled reset period\",\"type\":\"string\"},\"self_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Self url\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"token\":{\"minLength\":1,\"title\":\"Token\",\"type\":\"string\"},\"updated_at\":{\"description\":\"The datetime the token was updated at.\",\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"},\"updated_by\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Updated by\",\"type\":\"string\"},\"updated_by_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Updated by url\",\"type\":\"string\"},\"usage\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Usage\",\"type\":\"string\"},\"user\":{\"minLength\":1,\"readOnly\":true,\"title\":\"User\",\"type\":\"string\"},\"user_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"User url\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"},\"readOnly\":true,\"type\":\"array\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Owner namespace or repository not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "POST", "orig": "/entitlements/{owner}/{repo}/sync/", "segments": [{ "lit": "entitlements" }, { "var": "owner" }, { "var": "repo" }, { "lit": "sync" }], "select": { "exist": ["data", "owner", "repo", "show_token"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "create" } }, "relations": { "ancestors": [["entitlement"]] }, "key$": "repository_token_sync", "name__orig": "repository_token_sync", "Name": "RepositoryTokenSync", "name_": "repository_token_sync", "name-": "repository-token-sync", "NAME": "REPOSITORY_TOKEN_SYNC", "index$": 92 }, { "active": true, "entity": "repository_token_sync", "key$": "BasicRepositoryTokenSyncFlow", "kind": "basic", "name": "BasicRepositoryTokenSyncFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "repository_token_sync_ref01" }, "match": { "owner": "owner01", "repo": "repo01" }, "op": "create", "spec": [], "valid": [], "index$": 0 }] }, 'RepositoryTokenSync');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        // CREATE
        const repository_token_sync_ref01_ent = client.RepositoryTokenSync();
        let repository_token_sync_ref01_data = setup.data.new.repository_token_sync['repository_token_sync_ref01'];
        repository_token_sync_ref01_data['owner'] = setup.idmap['owner01'];
        repository_token_sync_ref01_data['repo'] = setup.idmap['repo01'];
        repository_token_sync_ref01_data = (await repository_token_sync_ref01_ent.create(repository_token_sync_ref01_data)).data();
        (0, node_assert_1.default)(null != repository_token_sync_ref01_data);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository_token_sync/RepositoryTokenSyncTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository_token_sync01', 'repository_token_sync02', 'repository_token_sync03', 'entitlement01', 'entitlement02', 'entitlement03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_REPOSITORY_TOKEN_SYNC_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_REPOSITORY_TOKEN_SYNC_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_TOKEN_SYNC_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CloudsmithSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {
                apikey: env.CLOUDSMITH_APIKEY,
            },
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CLOUDSMITH_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=RepositoryTokenSyncEntity.test.js.map