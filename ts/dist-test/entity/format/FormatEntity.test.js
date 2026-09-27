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
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('FormatEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.Format();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'format.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "description": { "a": true, "h": "Description", "n": "description", "r": true, "sh": "Description of the package format", "t": "`$STRING`", "key$": "description", "index$": 0 }, "distributions": { "a": true, "h": "Distributions", "n": "distributions", "r": false, "sh": "The distributions supported by this package format", "t": "`$ARRAY`", "key$": "distributions", "index$": 1 }, "extensions": { "a": true, "h": "Extensions", "n": "extensions", "r": true, "sh": "A non-exhaustive list of extensions supported", "t": "`$ARRAY`", "key$": "extensions", "index$": 2 }, "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": true, "sh": "Name for the package format", "t": "`$STRING`", "key$": "name", "index$": 4 }, "premium": { "a": true, "h": "Premium", "n": "premium", "r": true, "sh": "If true the package format is a premium-only feature", "t": "`$BOOLEAN`", "key$": "premium", "index$": 5 }, "premium_plan_id": { "a": true, "h": "Premium Plan Id", "n": "premium_plan_id", "r": false, "sh": "The minimum plan id required for this package format", "t": "`$STRING`", "key$": "premium_plan_id", "index$": 6 }, "premium_plan_name": { "a": true, "h": "Premium Plan Name", "n": "premium_plan_name", "r": false, "sh": "The minimum plan name required for this package format", "t": "`$STRING`", "key$": "premium_plan_name", "index$": 7 }, "slug": { "a": true, "h": "Slug", "n": "slug", "r": true, "sh": "Slug for the package format", "t": "`$STRING`", "key$": "slug", "index$": 8 }, "supports": { "a": true, "h": "Supports", "n": "supports", "r": true, "sh": "A set of what the package format supports", "t": "`$OBJECT`", "key$": "supports", "index$": 9 } }, "id": { "field": "id", "name": "id" }, "name": "format", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /formats/", "source": "swagger2", "version": 2 }, "g": {}, "k": "http", "m": "GET", "o": "/formats/", "q": {}, "r": {}, "s": [{ "lit": "formats" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /formats/{slug}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "slug", "r": true, "t": "`$STRING`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/formats/{slug}/", "q": { "exist": ["id"] }, "r": { "param": { "slug": "id" } }, "s": [{ "lit": "formats" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "format", "name__orig": "format", "Name": "Format", "name_": "format", "name-": "format", "NAME": "FORMAT", "index$": 11 }, { "active": true, "entity": "format", "key$": "BasicFormatFlow", "kind": "basic", "name": "BasicFormatFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "format_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "format_ref01", "srcdatavar": "format_ref01_data", "suffix": "_dt0" }, "m": { "id": "format01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-format_ref01" } }], "index$": 1 }] }, 'Format', { "GET /formats/": { "protocol": "http", "parameters": [] }, "GET /formats/{slug}/": { "protocol": "http", "parameters": [{ "name": "slug", "in": "path", "required": true, "type": "string", "index$": 0 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let format_ref01_data = Object.values(setup.data.existing.format)[0];
        // LIST
        const format_ref01_ent = client.Format();
        const format_ref01_match = {};
        const format_ref01_list = (await format_ref01_ent.list(format_ref01_match)).map((e) => e.data());
        // LOAD
        const format_ref01_match_dt0 = {};
        format_ref01_match_dt0.id = format_ref01_data.id;
        const format_ref01_data_dt0 = (await format_ref01_ent.load(format_ref01_match_dt0)).data();
        (0, node_assert_1.default)(format_ref01_data_dt0.id === format_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/format/FormatTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['format01', 'format02', 'format03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_FORMAT_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_FORMAT_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_FORMAT_ENTID'];
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
//# sourceMappingURL=FormatEntity.test.js.map