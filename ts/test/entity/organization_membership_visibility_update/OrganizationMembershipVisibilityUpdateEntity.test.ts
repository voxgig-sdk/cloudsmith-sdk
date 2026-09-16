

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { CloudsmithSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('OrganizationMembershipVisibilityUpdateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationMembershipVisibilityUpdate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_membership_visibility_update.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"email","readOnly":true,"req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"has_two_factor","readOnly":true,"req":false,"type":"`$BOOLEAN`","index$":1},{"active":true,"format":"date-time","name":"joined_at","readOnly":true,"req":false,"type":"`$STRING`","index$":2},{"active":true,"format":"date-time","name":"last_login_at","readOnly":true,"req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"last_login_method","readOnly":true,"req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"role","readOnly":true,"req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"user","readOnly":true,"req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"user_id","readOnly":true,"req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"user_name","readOnly":true,"req":false,"type":"`$STRING`","index$":8},{"active":true,"format":"uri","name":"user_url","readOnly":true,"req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"visibility","req":false,"type":"`$STRING`","index$":10}],"name":"organization_membership_visibility_update","op":{"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"member_id","orig":"member","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PATCH /orgs/{org}/members/{member}/update-visibility/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_members_update_visibility\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"member\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"visibility\":{\"default\":\"Public\",\"enum\":[\"Public\",\"Private\"],\"title\":\"Visibility\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"email\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Email\",\"type\":\"string\"},\"has_two_factor\":{\"readOnly\":true,\"title\":\"Has two factor\",\"type\":\"boolean\"},\"joined_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Joined at\",\"type\":\"string\"},\"last_login_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Last login at\",\"type\":\"string\"},\"last_login_method\":{\"default\":\"Unknown\",\"enum\":[\"Unknown\",\"Password\",\"Social\",\"SAML\",\"OIDC\"],\"readOnly\":true,\"title\":\"Last login method\",\"type\":\"string\"},\"role\":{\"default\":\"Owner\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"readOnly\":true,\"title\":\"Role\",\"type\":\"string\"},\"user\":{\"minLength\":1,\"readOnly\":true,\"title\":\"User\",\"type\":\"string\"},\"user_id\":{\"minLength\":1,\"readOnly\":true,\"title\":\"User id\",\"type\":\"string\"},\"user_name\":{\"minLength\":1,\"readOnly\":true,\"title\":\"User name\",\"type\":\"string\"},\"user_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"User url\",\"type\":\"string\"},\"visibility\":{\"default\":\"Public\",\"enum\":[\"Public\",\"Private\"],\"title\":\"Visibility\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"PATCH","orig":"/orgs/{org}/members/{member}/update-visibility/","rename":{"param":{"member":"member_id","org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"members"},{"var":"member_id"},{"lit":"update-visibility"}],"select":{"exist":["data","member_id","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["org","member"]]},"key$":"organization_membership_visibility_update","name__orig":"organization_membership_visibility_update","Name":"OrganizationMembershipVisibilityUpdate","name_":"organization_membership_visibility_update","name-":"organization-membership-visibility-update","NAME":"ORGANIZATION_MEMBERSHIP_VISIBILITY_UPDATE","index$":55}, {"active":true,"entity":"organization_membership_visibility_update","key$":"BasicOrganizationMembershipVisibilityUpdateFlow","kind":"basic","name":"BasicOrganizationMembershipVisibilityUpdateFlow","param":{},"step":[{"active":true,"data":{"org_id":"org01"},"input":{"ref":"organization_membership_visibility_update_ref01","srcdatavar":"organization_membership_visibility_update_ref01_data","suffix":"_up0","textfield":"visibility"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_membership_visibility_update_ref01"}}],"valid":[],"index$":0}]}, 'OrganizationMembershipVisibilityUpdate')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let organization_membership_visibility_update_ref01_data = Object.values(setup.data.existing.organization_membership_visibility_update)[0] as any

    // UPDATE
    const organization_membership_visibility_update_ref01_ent = client.OrganizationMembershipVisibilityUpdate()
    const organization_membership_visibility_update_ref01_data_up0: any = {}
    organization_membership_visibility_update_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const organization_membership_visibility_update_ref01_markdef_up0 = { name: 'visibility', value: 'Mark01-organization_membership_visibility_update_ref01_' + setup.now }
    ;(organization_membership_visibility_update_ref01_data_up0 as any)[organization_membership_visibility_update_ref01_markdef_up0.name] = organization_membership_visibility_update_ref01_markdef_up0.value

    const organization_membership_visibility_update_ref01_resdata_up0 = (await organization_membership_visibility_update_ref01_ent.update(organization_membership_visibility_update_ref01_data_up0)).data()
    assert(null != organization_membership_visibility_update_ref01_resdata_up0)

    assert((organization_membership_visibility_update_ref01_resdata_up0 as any)[organization_membership_visibility_update_ref01_markdef_up0.name] === organization_membership_visibility_update_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_membership_visibility_update/OrganizationMembershipVisibilityUpdateTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = CloudsmithSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['organization_membership_visibility_update01','organization_membership_visibility_update02','organization_membership_visibility_update03','org01','org02','org03','member01','member02','member03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_VISIBILITY_UPDATE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_VISIBILITY_UPDATE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_MEMBERSHIP_VISIBILITY_UPDATE_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new CloudsmithSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
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
    ]))
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
  }

  return setup
}
  
