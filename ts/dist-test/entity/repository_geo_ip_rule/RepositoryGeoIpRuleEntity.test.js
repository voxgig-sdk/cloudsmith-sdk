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
(0, node_test_1.describe)('RepositoryGeoIpRuleEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.RepositoryGeoIpRule();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['update', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'repository_geo_ip_rule.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "cidr": { "a": true, "h": "Cidr", "n": "cidr", "r": true, "t": "`$OBJECT`", "key$": "cidr", "index$": 0 }, "country_code": { "a": true, "h": "Country Code", "n": "country_code", "r": true, "t": "`$OBJECT`", "key$": "country_code", "index$": 1 } }, "name": "repository_geo_ip_rule", "op": { "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /repos/{owner}/{identifier}/geoip", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/repos/{owner}/{identifier}/geoip", "q": { "exist": ["identifier", "owner"] }, "r": {}, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "geoip" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" }, "patch": { "input": "data", "name": "patch", "points": [{ "a": true, "co": { "id": "PATCH /repos/{owner}/{identifier}/geoip", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PATCH", "o": "/repos/{owner}/{identifier}/geoip", "q": { "exist": ["data", "identifier", "owner"] }, "r": {}, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "geoip" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "patch" }, "update": { "input": "data", "name": "update", "points": [{ "a": true, "co": { "id": "PUT /repos/{owner}/{identifier}/geoip", "source": "swagger2", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "identifier", "or": "identifier", "r": true, "t": "`$ANY`", "index$": 0 }, { "a": true, "k": "param", "n": "owner", "or": "owner", "r": true, "t": "`$ANY`", "index$": 1 }], "query": [{ "a": true, "k": "query", "n": "data", "or": "data", "r": false, "t": "`$OBJECT`", "index$": 0 }] }, "k": "http", "m": "PUT", "o": "/repos/{owner}/{identifier}/geoip", "q": { "exist": ["data", "identifier", "owner"] }, "r": {}, "s": [{ "lit": "repos" }, { "var": "owner" }, { "var": "identifier" }, { "lit": "geoip" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["$.main.kit.entity.repo"]] }, "key$": "repository_geo_ip_rule", "name__orig": "repository_geo_ip_rule", "Name": "RepositoryGeoIpRule", "name_": "repository_geo_ip_rule", "name-": "repository-geo-ip-rule", "NAME": "REPOSITORY_GEO_IP_RULE", "index$": 48 }, { "active": true, "entity": "repository_geo_ip_rule", "key$": "BasicRepositoryGeoIpRuleFlow", "kind": "basic", "name": "BasicRepositoryGeoIpRuleFlow", "param": {}, "step": [{ "a": true, "d": { "owner": "owner01" }, "i": { "ref": "repository_geo_ip_rule_ref01", "srcdatavar": "repository_geo_ip_rule_ref01_data", "suffix": "_up0" }, "m": {}, "o": "update", "s": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-repository_geo_ip_rule_ref01" } }], "v": [], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "repository_geo_ip_rule_ref01", "srcdatavar": "repository_geo_ip_rule_ref01_data", "suffix": "_dt0" }, "m": { "id": "repository_geo_ip_rule01", "owner": "owner01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-repository_geo_ip_rule_ref01" } }], "index$": 1 }] }, 'RepositoryGeoIpRule', { "GET /repos/{owner}/{identifier}/geoip": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }] }, "PATCH /repos/{owner}/{identifier}/geoip": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "data", "in": "body", "required": false, "schema": { "type": "object", "properties": { "cidr": { "required": ["allow", "deny"], "type": "object", "properties": { "allow": { "description": "The allowed CIDRs for this repository", "items": { "description": "The allowed CIDRs for this repository", "type": "string" }, "type": "array", "uniqueItems": true }, "deny": { "description": "The denied CIDRs for this repository", "items": { "description": "The denied CIDRs for this repository", "type": "string" }, "type": "array", "uniqueItems": true } }, "x-ref": "#/definitions/RepositoryGeoIpCidr" }, "country_code": { "required": ["allow", "deny"], "type": "object", "properties": { "allow": { "description": "The allowed country codes for this repository", "items": { "description": "The allowed country codes for this repository", "type": "string" }, "type": "array", "uniqueItems": true }, "deny": { "description": "The denied country codes for this repository", "items": { "description": "The denied country codes for this repository", "type": "string" }, "type": "array", "uniqueItems": true } }, "x-ref": "#/definitions/RepositoryGeoIpCountryCode" } }, "x-ref": "#/definitions/RepositoryGeoIpRulesRequestPatch" }, "index$": 2 }] }, "PUT /repos/{owner}/{identifier}/geoip": { "protocol": "http", "parameters": [{ "name": "owner", "in": "path", "required": true, "type": "string", "index$": 0 }, { "name": "identifier", "in": "path", "required": true, "type": "string", "index$": 1 }, { "name": "data", "in": "body", "required": false, "schema": { "required": ["cidr", "country_code"], "type": "object", "properties": { "cidr": { "required": ["allow", "deny"], "type": "object", "properties": { "allow": { "description": "The allowed CIDRs for this repository", "items": { "description": "The allowed CIDRs for this repository", "type": "string" }, "type": "array", "uniqueItems": true }, "deny": { "description": "The denied CIDRs for this repository", "items": { "description": "The denied CIDRs for this repository", "type": "string" }, "type": "array", "uniqueItems": true } }, "x-ref": "#/definitions/RepositoryGeoIpCidr" }, "country_code": { "required": ["allow", "deny"], "type": "object", "properties": { "allow": { "description": "The allowed country codes for this repository", "items": { "description": "The allowed country codes for this repository", "type": "string" }, "type": "array", "uniqueItems": true }, "deny": { "description": "The denied country codes for this repository", "items": { "description": "The denied country codes for this repository", "type": "string" }, "type": "array", "uniqueItems": true } }, "x-ref": "#/definitions/RepositoryGeoIpCountryCode" } }, "x-ref": "#/definitions/RepositoryGeoIpRulesRequest" }, "index$": 2 }] } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let repository_geo_ip_rule_ref01_data = Object.values(setup.data.existing.repository_geo_ip_rule)[0];
        // UPDATE
        const repository_geo_ip_rule_ref01_ent = client.RepositoryGeoIpRule();
        const repository_geo_ip_rule_ref01_data_up0 = {};
        repository_geo_ip_rule_ref01_data_up0['owner'] = setup.idmap['owner'];
        const repository_geo_ip_rule_ref01_resdata_up0 = (await repository_geo_ip_rule_ref01_ent.update(repository_geo_ip_rule_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != repository_geo_ip_rule_ref01_resdata_up0);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/repository_geo_ip_rule/RepositoryGeoIpRuleTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['repository_geo_ip_rule01', 'repository_geo_ip_rule02', 'repository_geo_ip_rule03', 'repo01', 'repo02', 'repo03', 'owner01'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID'];
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
//# sourceMappingURL=RepositoryGeoIpRuleEntity.test.js.map