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
(0, node_test_1.describe)('RepositoryPrivilegeInputEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.RepositoryPrivilegeInput();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository_privilege_input.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "privilege", "req": true, "short": "The level of privilege that the user or team should be granted to the specified repository.", "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "slug", "name": "service", "req": false, "short": "The service identifier (slug).", "type": "`$STRING`", "index$": 1 }, { "active": true, "format": "slug", "name": "team", "req": false, "short": "The team identifier (slug).", "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "slug", "name": "user", "req": false, "short": "The user identifier (slug).", "type": "`$STRING`", "index$": 3 }], "name": "repository_privilege_input", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "identifier", "orig": "identifier", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "owner", "orig": "owner", "reqd": true, "type": "`$ANY`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "page", "orig": "page", "reqd": false, "type": "`$INTEGER`", "index$": 0 }, { "active": true, "kind": "query", "name": "page_size", "orig": "page_size", "reqd": false, "type": "`$INTEGER`", "index$": 1 }] }, "contract": { "id": "GET /repos/{owner}/{identifier}/privileges", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"repos_privileges_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"},{\"description\":\"A page number within the paginated result set.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Number of results to return per page.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved privileges for the specified repository\",\"schema\":{\"properties\":{\"privileges\":{\"description\":\"List of objects with explicit privileges to the repository.\",\"items\":{\"properties\":{\"privilege\":{\"description\":\"The level of privilege that the user or team should be granted to the specified repository.\",\"enum\":[\"Admin\",\"Write\",\"Read\"],\"title\":\"Privilege\",\"type\":\"string\"},\"service\":{\"description\":\"The service identifier (slug).\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Service\",\"type\":\"string\"},\"team\":{\"description\":\"The team identifier (slug).\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Team\",\"type\":\"string\"},\"user\":{\"description\":\"The user identifier (slug).\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"User\",\"type\":\"string\"}},\"required\":[\"privilege\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"privileges\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Owner namespace or repository not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/repos/{owner}/{identifier}/privileges", "segments": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "privileges" }], "select": { "exist": ["identifier", "owner", "page", "page_size"] }, "transform": { "req": "`reqdata`", "res": "`body.privileges`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [["repo"]] }, "key$": "repository_privilege_input", "name__orig": "repository_privilege_input", "Name": "RepositoryPrivilegeInput", "name_": "repository_privilege_input", "name-": "repository-privilege-input", "NAME": "REPOSITORY_PRIVILEGE_INPUT", "index$": 87 }, { "active": true, "entity": "repository_privilege_input", "key$": "BasicRepositoryPrivilegeInputFlow", "kind": "basic", "name": "BasicRepositoryPrivilegeInputFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "identifier": "identifier01", "owner": "owner01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "repository_privilege_input_ref01" } }], "index$": 0 }] }, 'RepositoryPrivilegeInput');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let repository_privilege_input_ref01_data = Object.values(setup.data.existing.repository_privilege_input)[0];
        // LIST
        const repository_privilege_input_ref01_ent = client.RepositoryPrivilegeInput();
        const repository_privilege_input_ref01_match = {};
        repository_privilege_input_ref01_match['identifier'] = setup.idmap['identifier01'];
        repository_privilege_input_ref01_match['owner'] = setup.idmap['owner01'];
        const repository_privilege_input_ref01_list = (await repository_privilege_input_ref01_ent.list(repository_privilege_input_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository_privilege_input/RepositoryPrivilegeInputTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository_privilege_input01', 'repository_privilege_input02', 'repository_privilege_input03', 'repo01', 'repo02', 'repo03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_REPOSITORY_PRIVILEGE_INPUT_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_REPOSITORY_PRIVILEGE_INPUT_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_PRIVILEGE_INPUT_ENTID'];
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
//# sourceMappingURL=RepositoryPrivilegeInputEntity.test.js.map