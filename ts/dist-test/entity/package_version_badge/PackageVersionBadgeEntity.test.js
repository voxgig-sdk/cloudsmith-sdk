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
(0, node_test_1.describe)('PackageVersionBadgeEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.PackageVersionBadge();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'package_version_badge.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 0 }], "id": { "field": "id", "name": "id", "parts": ["owner", "repo", "package_format", "package_name", "package_version", "package_identifier"], "sep": "/" }, "name": "package_version_badge", "op": { "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "owner", "orig": "owner", "reqd": true, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "param", "name": "package_format", "orig": "package_format", "reqd": true, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "param", "name": "package_identifier", "orig": "package_identifier", "reqd": true, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "param", "name": "package_name", "orig": "package_name", "reqd": true, "type": "`$ANY`", "index$": 3 }, { "active": true, "kind": "param", "name": "package_version", "orig": "package_version", "reqd": true, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "param", "name": "repo", "orig": "repo", "reqd": true, "type": "`$ANY`", "index$": 5 }], "query": [{ "active": true, "kind": "query", "name": "badge_token", "orig": "badge_token", "reqd": false, "type": "`$ANY`", "index$": 0 }, { "active": true, "kind": "query", "name": "cache_second", "orig": "cache_second", "reqd": false, "type": "`$ANY`", "index$": 1 }, { "active": true, "kind": "query", "name": "color", "orig": "color", "reqd": false, "type": "`$ANY`", "index$": 2 }, { "active": true, "kind": "query", "name": "label", "orig": "label", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "kind": "query", "name": "label_color", "orig": "label_color", "reqd": false, "type": "`$ANY`", "index$": 4 }, { "active": true, "kind": "query", "name": "logo_color", "orig": "logo_color", "reqd": false, "type": "`$ANY`", "index$": 5 }, { "active": true, "kind": "query", "name": "logo_width", "orig": "logo_width", "reqd": false, "type": "`$ANY`", "index$": 6 }, { "active": true, "kind": "query", "name": "render", "orig": "render", "reqd": false, "type": "`$ANY`", "index$": 7 }, { "active": true, "kind": "query", "name": "shield", "orig": "shield", "reqd": false, "type": "`$ANY`", "index$": 8 }, { "active": true, "kind": "query", "name": "show_latest", "orig": "show_latest", "reqd": false, "type": "`$ANY`", "index$": 9 }, { "active": true, "kind": "query", "name": "style", "orig": "style", "reqd": false, "type": "`$ANY`", "index$": 10 }] }, "contract": { "id": "GET /badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"badges_version_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"repo\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"package_format\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"package_name\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"package_version\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"package_identifiers\",\"required\":true,\"type\":\"string\"},{\"default\":\"\",\"description\":\"Badge token to authenticate for private packages\",\"in\":\"query\",\"name\":\"badge_token\",\"required\":false,\"type\":\"string\"},{\"default\":\"300\",\"description\":\"Override the shields.io badge cacheSeconds value.\",\"in\":\"query\",\"name\":\"cacheSeconds\",\"required\":false,\"type\":\"string\"},{\"default\":\"12577E\",\"description\":\"Override the shields.io badge color value.\",\"in\":\"query\",\"name\":\"color\",\"required\":false,\"type\":\"string\"},{\"default\":\"cloudsmith\",\"description\":\"Override the shields.io badge label value.\",\"in\":\"query\",\"name\":\"label\",\"required\":false,\"type\":\"string\"},{\"default\":\"021F2F\",\"description\":\"Override the shields.io badge labelColor value.\",\"in\":\"query\",\"name\":\"labelColor\",\"required\":false,\"type\":\"string\"},{\"default\":\"45B6EE\",\"description\":\"Override the shields.io badge logoColor value.\",\"in\":\"query\",\"name\":\"logoColor\",\"required\":false,\"type\":\"string\"},{\"default\":\"10\",\"description\":\"Override the shields.io badge logoWidth value.\",\"in\":\"query\",\"name\":\"logoWidth\",\"required\":false,\"type\":\"string\"},{\"default\":false,\"description\":\"If true, badge will be rendered\",\"in\":\"query\",\"name\":\"render\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"If true, a shields response will be generated\",\"in\":\"query\",\"name\":\"shields\",\"required\":false,\"type\":\"boolean\"},{\"default\":false,\"description\":\"If true, for latest version badges a '(latest)' suffix is added\",\"in\":\"query\",\"name\":\"show_latest\",\"required\":false,\"type\":\"boolean\"},{\"default\":\"flat-square\",\"description\":\"Override the shields.io badge style value.\",\"in\":\"query\",\"name\":\"style\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "GET", "orig": "/badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/", "rename": { "param": { "package_identifiers": "package_identifier" } }, "segments": [{ "lit": "badges" }, { "lit": "version" }, { "var": "owner" }, { "var": "repo" }, { "var": "package_format" }, { "var": "package_name" }, { "var": "package_version" }, { "var": "package_identifier" }], "select": { "exist": ["badge_token", "cache_second", "color", "label", "label_color", "logo_color", "logo_width", "owner", "package_format", "package_identifier", "package_name", "package_version", "render", "repo", "shield", "show_latest", "style"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [["version"]] }, "key$": "package_version_badge", "name__orig": "package_version_badge", "Name": "PackageVersionBadge", "name_": "package_version_badge", "name-": "package-version-badge", "NAME": "PACKAGE_VERSION_BADGE", "index$": 68 }, { "active": true, "entity": "package_version_badge", "key$": "BasicPackageVersionBadgeFlow", "kind": "basic", "name": "BasicPackageVersionBadgeFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": { "ref": "package_version_badge_ref01", "srcdatavar": "package_version_badge_ref01_data", "suffix": "_dt0" }, "match": { "id": "package_version_badge01", "owner": "owner01", "package_format": "package_format01", "package_name": "package_name01", "package_version": "package_version01", "repo": "repo01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-package_version_badge_ref01" } }], "index$": 0 }] }, 'PackageVersionBadge');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let package_version_badge_ref01_data = Object.values(setup.data.existing.package_version_badge)[0];
        // LOAD
        const package_version_badge_ref01_ent = client.PackageVersionBadge();
        const package_version_badge_ref01_match_dt0 = {};
        package_version_badge_ref01_match_dt0.id = package_version_badge_ref01_data.id;
        const package_version_badge_ref01_data_dt0 = (await package_version_badge_ref01_ent.load(package_version_badge_ref01_match_dt0)).data();
        (0, node_assert_1.default)(package_version_badge_ref01_data_dt0.id === package_version_badge_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/package_version_badge/PackageVersionBadgeTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['package_version_badge01', 'package_version_badge02', 'package_version_badge03', 'version01', 'version02', 'version03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_PACKAGE_VERSION_BADGE_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_PACKAGE_VERSION_BADGE_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_PACKAGE_VERSION_BADGE_ENTID'];
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
//# sourceMappingURL=PackageVersionBadgeEntity.test.js.map