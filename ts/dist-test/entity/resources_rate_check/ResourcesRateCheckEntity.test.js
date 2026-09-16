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
(0, node_test_1.describe)('ResourcesRateCheckEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.ResourcesRateCheck();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'resources_rate_check.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "interval", "readOnly": true, "req": false, "short": "The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window.", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "limit", "readOnly": true, "req": false, "short": "The maximum number of requests that you are permitted to send per hour", "type": "`$INTEGER`", "index$": 1 }, { "active": true, "name": "remaining", "readOnly": true, "req": false, "short": "The number of requests that are remaining in the current rate limit window", "type": "`$INTEGER`", "index$": 2 }, { "active": true, "name": "reset", "readOnly": true, "req": false, "short": "The UTC epoch timestamp at which the current rate limit window will reset", "type": "`$INTEGER`", "index$": 3 }, { "active": true, "name": "reset_iso_8601", "readOnly": true, "req": false, "short": "The ISO 8601 datetime at which the current rate limit window will reset", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "throttled", "readOnly": true, "req": false, "short": "If true, throttling is currently being enforced.", "type": "`$BOOLEAN`", "index$": 5 }], "name": "resources_rate_check", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": {}, "contract": { "id": "GET /rates/limits/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"rates_limits_list\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Rate check was successful\",\"schema\":{\"properties\":{\"resources\":{\"additionalProperties\":{\"properties\":{\"interval\":{\"description\":\"The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window.\",\"readOnly\":true,\"title\":\"Interval\",\"type\":\"number\"},\"limit\":{\"description\":\"The maximum number of requests that you are permitted to send per hour\",\"readOnly\":true,\"title\":\"Limit\",\"type\":\"integer\"},\"remaining\":{\"description\":\"The number of requests that are remaining in the current rate limit window\",\"readOnly\":true,\"title\":\"Remaining\",\"type\":\"integer\"},\"reset\":{\"description\":\"The UTC epoch timestamp at which the current rate limit window will reset\",\"readOnly\":true,\"title\":\"Reset\",\"type\":\"integer\"},\"reset_iso_8601\":{\"description\":\"The ISO 8601 datetime at which the current rate limit window will reset\",\"minLength\":1,\"readOnly\":true,\"title\":\"Reset iso 8601\",\"type\":\"string\"},\"throttled\":{\"description\":\"If true, throttling is currently being enforced.\",\"readOnly\":true,\"title\":\"Throttled\",\"type\":\"boolean\"}},\"type\":\"object\"},\"description\":\"Rate limit values per resource\",\"readOnly\":true,\"title\":\"Resources\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/rates/limits/", "segments": [{ "lit": "rates" }, { "lit": "limits" }], "select": {}, "transform": { "req": "`reqdata`", "res": "`body.resources`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "resources_rate_check", "name__orig": "resources_rate_check", "Name": "ResourcesRateCheck", "name_": "resources_rate_check", "name-": "resources-rate-check", "NAME": "RESOURCES_RATE_CHECK", "index$": 97 }, { "active": true, "entity": "resources_rate_check", "key$": "BasicResourcesRateCheckFlow", "kind": "basic", "name": "BasicResourcesRateCheckFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "resources_rate_check_ref01", "srcdatavar": "resources_rate_check_ref01_data", "suffix": "_dt0" }, "match": {}, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-resources_rate_check_ref01" } }], "index$": 0 }] }, 'ResourcesRateCheck');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let resources_rate_check_ref01_data = Object.values(setup.data.existing.resources_rate_check)[0];
        // LOAD
        const resources_rate_check_ref01_ent = client.ResourcesRateCheck();
        const resources_rate_check_ref01_match_dt0 = {};
        const resources_rate_check_ref01_data_dt0 = (await resources_rate_check_ref01_ent.load(resources_rate_check_ref01_match_dt0)).data();
        (0, node_assert_1.default)(null != resources_rate_check_ref01_data_dt0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/resources_rate_check/ResourcesRateCheckTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['resources_rate_check01', 'resources_rate_check02', 'resources_rate_check03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_RESOURCES_RATE_CHECK_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_RESOURCES_RATE_CHECK_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_RESOURCES_RATE_CHECK_ENTID'];
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
//# sourceMappingURL=ResourcesRateCheckEntity.test.js.map