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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "id": { "a": true, "h": "Id", "n": "id", "r": false, "t": "`$STRING`", "key$": "id", "index$": 0 } }, "id": { "field": "id", "name": "id", "parts": ["owner", "repo", "package_format", "package_name", "package_version", "package_identifier"], "sep": "/" }, "name": "package_version_badge", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "package_format", "or": "package_format", "r": true, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "param", "n": "package_identifier", "or": "package_identifier", "r": true, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "param", "n": "package_name", "or": "package_name", "r": true, "t": "`$ANY`", "index$": 3 }, { "a": true, "k": "param", "n": "package_version", "or": "package_version", "r": true, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "param", "n": "repo", "or": "repo", "r": true, "t": "`$ANY`", "index$": 5 }], "query": [{ "a": true, "k": "query", "n": "badge_token", "or": "badge_token", "r": false, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "query", "n": "cache_second", "or": "cache_second", "r": false, "t": "`$ANY`", "index$": 1 }, { "a": true, "k": "query", "n": "color", "or": "color", "r": false, "t": "`$ANY`", "index$": 2 }, { "a": true, "k": "query", "n": "label", "or": "label", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "k": "query", "n": "label_color", "or": "label_color", "r": false, "t": "`$ANY`", "index$": 4 }, { "a": true, "k": "query", "n": "logo_color", "or": "logo_color", "r": false, "t": "`$ANY`", "index$": 5 }, { "a": true, "k": "query", "n": "logo_width", "or": "logo_width", "r": false, "t": "`$ANY`", "index$": 6 }, { "a": true, "k": "query", "n": "render", "or": "render", "r": false, "t": "`$ANY`", "index$": 7 }, { "a": true, "k": "query", "n": "shield", "or": "shield", "r": false, "t": "`$ANY`", "index$": 8 }, { "a": true, "k": "query", "n": "show_latest", "or": "show_latest", "r": false, "t": "`$ANY`", "index$": 9 }, { "a": true, "k": "query", "n": "style", "or": "style", "r": false, "t": "`$ANY`", "index$": 10 }] }, "k": "http", "m": "GET", "o": "/badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/", "q": { "exist": ["badge_token", "cache_second", "color", "label", "label_color", "logo_color", "logo_width", "owner", "package_format", "package_identifier", "package_name", "package_version", "render", "repo", "shield", "show_latest", "style"] }, "r": { "param": { "package_identifiers": "package_identifier" } }, "s": [{ "lit": "badges" }, { "lit": "version" }, { "var": "owner" }, { "var": "repo" }, { "var": "package_format" }, { "var": "package_name" }, { "var": "package_version" }, { "var": "package_identifier" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "package_version_badge", "name__orig": "package_version_badge", "Name": "PackageVersionBadge", "name_": "package_version_badge", "name-": "package-version-badge", "NAME": "PACKAGE_VERSION_BADGE", "index$": 39 }, { "active": true, "entity": "package_version_badge", "key$": "BasicPackageVersionBadgeFlow", "kind": "basic", "name": "BasicPackageVersionBadgeFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": { "ref": "package_version_badge_ref01", "srcdatavar": "package_version_badge_ref01_data", "suffix": "_dt0" }, "m": { "id": "package_version_badge01", "owner": "owner01", "package_format": "package_format01", "package_name": "package_name01", "package_version": "package_version01", "repo": "repo01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-package_version_badge_ref01" } }], "index$": 0 }] }, 'PackageVersionBadge', { "GET /badges/version/{owner}/{repo}/{package_format}/{package_name}/{package_version}/{package_identifiers}/": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "repo", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "package_format", "in": "path", "required": true, "type": "string", "index$": 2 }, { "name": "package_name", "in": "path", "required": true, "type": "string", "index$": 3 }, { "name": "package_version", "in": "path", "required": true, "type": "string", "index$": 4 }, { "name": "package_identifiers", "in": "path", "required": true, "type": "string", "index$": 5 }, { "name": "badge_token", "in": "query", "description": "Badge token to authenticate for private packages", "required": false, "type": "string", "default": "", "index$": 6 }, { "name": "cacheSeconds", "in": "query", "description": "Override the shields.io badge cacheSeconds value.", "required": false, "type": "string", "default": "300", "index$": 7 }, { "name": "color", "in": "query", "description": "Override the shields.io badge color value.", "required": false, "type": "string", "default": "12577E", "index$": 8 }, { "name": "label", "in": "query", "description": "Override the shields.io badge label value.", "required": false, "type": "string", "default": "cloudsmith", "index$": 9 }, { "name": "labelColor", "in": "query", "description": "Override the shields.io badge labelColor value.", "required": false, "type": "string", "default": "021F2F", "index$": 10 }, { "name": "logoColor", "in": "query", "description": "Override the shields.io badge logoColor value.", "required": false, "type": "string", "default": "45B6EE", "index$": 11 }, { "name": "logoWidth", "in": "query", "description": "Override the shields.io badge logoWidth value.", "required": false, "type": "string", "default": "10", "index$": 12 }, { "name": "render", "in": "query", "description": "If true, badge will be rendered", "required": false, "type": "boolean", "default": false, "index$": 13 }, { "name": "shields", "in": "query", "description": "If true, a shields response will be generated", "required": false, "type": "boolean", "default": false, "index$": 14 }, { "name": "show_latest", "in": "query", "description": "If true, for latest version badges a '(latest)' suffix is added", "required": false, "type": "boolean", "default": false, "index$": 15 }, { "name": "style", "in": "query", "description": "Override the shields.io badge style value.", "required": false, "type": "string", "default": "flat-square", "index$": 16 }] } });
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
    let idmap = transform(['package_version_badge01', 'package_version_badge02', 'package_version_badge03', 'owner01', 'package_format01', 'package_name01', 'package_version01', 'repo01'], {
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