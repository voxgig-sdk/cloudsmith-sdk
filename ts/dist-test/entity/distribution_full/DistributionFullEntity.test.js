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
(0, node_test_1.describe)('DistributionFullEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.DistributionFull();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'distribution_full.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "format", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "format": "uri", "name": "format_url", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "name", "req": true, "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "uri", "name": "self_url", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "slug", "readOnly": true, "req": false, "short": "The slug identifier for this distribution", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "variants", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "versions", "readOnly": true, "req": false, "short": "A list of the versions for this distribution", "type": "`$ARRAY`", "index$": 6 }], "name": "distribution_full", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /distros/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"distros_list\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Available package formats retrieved\",\"schema\":{\"items\":{\"properties\":{\"format\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Format\",\"type\":\"string\"},\"format_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Format url\",\"type\":\"string\"},\"name\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"self_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Self url\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug identifier for this distribution\",\"minLength\":1,\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"variants\":{\"maxLength\":128,\"title\":\"Variants\",\"type\":\"string\"},\"versions\":{\"description\":\"A list of the versions for this distribution\",\"items\":{\"description\":\"A list of the versions for this distribution\",\"properties\":{\"name\":{\"description\":\"The textual name for this version.\",\"maxLength\":64,\"title\":\"Name\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug identifier for this version\",\"minLength\":1,\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"}},\"type\":\"object\"},\"readOnly\":true,\"type\":\"array\"}},\"required\":[\"name\"],\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/distros/", "segments": [{ "lit": "distros" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "slug", "orig": "slug", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /distros/{slug}/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"distros_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"format\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Format\",\"type\":\"string\"},\"format_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Format url\",\"type\":\"string\"},\"name\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"self_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Self url\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug identifier for this distribution\",\"minLength\":1,\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"variants\":{\"maxLength\":128,\"title\":\"Variants\",\"type\":\"string\"},\"versions\":{\"description\":\"A list of the versions for this distribution\",\"items\":{\"description\":\"A list of the versions for this distribution\",\"properties\":{\"name\":{\"description\":\"The textual name for this version.\",\"maxLength\":64,\"title\":\"Name\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug identifier for this version\",\"minLength\":1,\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"}},\"type\":\"object\"},\"readOnly\":true,\"type\":\"array\"}},\"required\":[\"name\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/distros/{slug}/", "segments": [{ "lit": "distros" }, { "var": "slug" }], "select": { "exist": ["slug"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["distro"]] }, "key$": "distribution_full", "name__orig": "distribution_full", "Name": "DistributionFull", "name_": "distribution_full", "name-": "distribution-full", "NAME": "DISTRIBUTION_FULL", "index$": 17 }, { "active": true, "entity": "distribution_full", "key$": "BasicDistributionFullFlow", "kind": "basic", "name": "BasicDistributionFullFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "distribution_full_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "distribution_full_ref01", "srcdatavar": "distribution_full_ref01_data", "suffix": "_dt0" }, "match": { "id": "distribution_full01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-distribution_full_ref01" } }], "index$": 1 }] }, 'DistributionFull');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let distribution_full_ref01_data = Object.values(setup.data.existing.distribution_full)[0];
        // LIST
        const distribution_full_ref01_ent = client.DistributionFull();
        const distribution_full_ref01_match = {};
        const distribution_full_ref01_list = (await distribution_full_ref01_ent.list(distribution_full_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/distribution_full/DistributionFullTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['distribution_full01', 'distribution_full02', 'distribution_full03', 'distro01', 'distro02', 'distro03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_DISTRIBUTION_FULL_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_DISTRIBUTION_FULL_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_DISTRIBUTION_FULL_ENTID'];
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
//# sourceMappingURL=DistributionFullEntity.test.js.map