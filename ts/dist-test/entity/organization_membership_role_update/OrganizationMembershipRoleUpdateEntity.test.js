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
(0, node_test_1.describe)('OrganizationMembershipRoleUpdateEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CLOUDSMITH_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CloudsmithSDK.test();
        const ent = testsdk.OrganizationMembershipRoleUpdate();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE;
        for (const op of ['update']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'organization_membership_role_update.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "email", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "has_two_factor", "readOnly": true, "req": false, "type": "`$BOOLEAN`", "index$": 1 }, { "active": true, "format": "date-time", "name": "joined_at", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "format": "date-time", "name": "last_login_at", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "last_login_method", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "role", "req": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "user", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "user_id", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "user_name", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "uri", "name": "user_url", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "visibility", "readOnly": true, "req": false, "type": "`$STRING`", "index$": 10 }], "name": "organization_membership_role_update", "op": { "update": { "input": "data", "name": "update", "points": [{ "active": true, "args": { "params": [{ "active": true, "kind": "param", "name": "member_id", "orig": "member", "reqd": true, "type": "`$STRING`", "index$": 0 }, { "active": true, "kind": "param", "name": "org_id", "orig": "org", "reqd": true, "type": "`$STRING`", "index$": 1 }], "query": [{ "active": true, "kind": "query", "name": "data", "orig": "data", "reqd": false, "type": "`$OBJECT`", "index$": 0 }] }, "contract": { "id": "PATCH /orgs/{org}/members/{member}/update-role/", "json": "{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_members_update_role\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"member\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"role\":{\"default\":\"Owner\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"title\":\"Role\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"email\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Email\",\"type\":\"string\"},\"has_two_factor\":{\"readOnly\":true,\"title\":\"Has two factor\",\"type\":\"boolean\"},\"joined_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Joined at\",\"type\":\"string\"},\"last_login_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Last login at\",\"type\":\"string\"},\"last_login_method\":{\"default\":\"Unknown\",\"enum\":[\"Unknown\",\"Password\",\"Social\",\"SAML\",\"OIDC\"],\"readOnly\":true,\"title\":\"Last login method\",\"type\":\"string\"},\"role\":{\"default\":\"Owner\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"title\":\"Role\",\"type\":\"string\"},\"user\":{\"minLength\":1,\"readOnly\":true,\"title\":\"User\",\"type\":\"string\"},\"user_id\":{\"minLength\":1,\"readOnly\":true,\"title\":\"User id\",\"type\":\"string\"},\"user_name\":{\"minLength\":1,\"readOnly\":true,\"title\":\"User name\",\"type\":\"string\"},\"user_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"User url\",\"type\":\"string\"},\"visibility\":{\"default\":\"Public\",\"enum\":[\"Public\",\"Private\"],\"readOnly\":true,\"title\":\"Visibility\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}", "source": "swagger2", "version": 1 }, "kind": "http", "method": "PATCH", "orig": "/orgs/{org}/members/{member}/update-role/", "rename": { "param": { "member": "member_id", "org": "org_id" } }, "segments": [{ "lit": "orgs" }, { "var": "org_id" }, { "lit": "members" }, { "var": "member_id" }, { "lit": "update-role" }], "select": { "exist": ["data", "member_id", "org_id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "update" } }, "relations": { "ancestors": [["org", "member"]] }, "key$": "organization_membership_role_update", "name__orig": "organization_membership_role_update", "Name": "OrganizationMembershipRoleUpdate", "name_": "organization_membership_role_update", "name-": "organization-membership-role-update", "NAME": "ORGANIZATION_MEMBERSHIP_ROLE_UPDATE", "index$": 54 }, { "active": true, "entity": "organization_membership_role_update", "key$": "BasicOrganizationMembershipRoleUpdateFlow", "kind": "basic", "name": "BasicOrganizationMembershipRoleUpdateFlow", "param": {}, "step": [{ "active": true, "data": { "org_id": "org01" }, "input": { "ref": "organization_membership_role_update_ref01", "srcdatavar": "organization_membership_role_update_ref01_data", "suffix": "_up0", "textfield": "role" }, "match": {}, "op": "update", "spec": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-organization_membership_role_update_ref01" } }], "valid": [], "index$": 0 }] }, 'OrganizationMembershipRoleUpdate');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let organization_membership_role_update_ref01_data = Object.values(setup.data.existing.organization_membership_role_update)[0];
        // UPDATE
        const organization_membership_role_update_ref01_ent = client.OrganizationMembershipRoleUpdate();
        const organization_membership_role_update_ref01_data_up0 = {};
        organization_membership_role_update_ref01_data_up0['org_id'] = setup.idmap['org_id'];
        const organization_membership_role_update_ref01_markdef_up0 = { name: 'role', value: 'Mark01-organization_membership_role_update_ref01_' + setup.now };
        organization_membership_role_update_ref01_data_up0[organization_membership_role_update_ref01_markdef_up0.name] = organization_membership_role_update_ref01_markdef_up0.value;
        const organization_membership_role_update_ref01_resdata_up0 = (await organization_membership_role_update_ref01_ent.update(organization_membership_role_update_ref01_data_up0)).data();
        (0, node_assert_1.default)(null != organization_membership_role_update_ref01_resdata_up0);
        (0, node_assert_1.default)(organization_membership_role_update_ref01_resdata_up0[organization_membership_role_update_ref01_markdef_up0.name] === organization_membership_role_update_ref01_markdef_up0.value);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/organization_membership_role_update/OrganizationMembershipRoleUpdateTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CloudsmithSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['organization_membership_role_update01', 'organization_membership_role_update02', 'organization_membership_role_update03', 'org01', 'org02', 'org03', 'member01', 'member02', 'member03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ROLE_UPDATE_ENTID': idmap,
        'CLOUDSMITH_TEST_LIVE': 'FALSE',
        'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
        'CLOUDSMITH_APIKEY': '',
    });
    idmap = env['CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ROLE_UPDATE_ENTID'];
    const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_ROLE_UPDATE_ENTID'];
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
//# sourceMappingURL=OrganizationMembershipRoleUpdateEntity.test.js.map