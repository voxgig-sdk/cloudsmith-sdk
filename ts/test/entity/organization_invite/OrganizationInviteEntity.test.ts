

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


describe('OrganizationInviteEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationInvite()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_invite.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"email","name":"email","req":false,"short":"The email of the user to be invited.","type":"`$STRING`","index$":0},{"active":true,"format":"date-time","name":"expires_at","readOnly":true,"req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"inviter","readOnly":true,"req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"uri","name":"inviter_url","readOnly":true,"req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"org","readOnly":true,"req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"role","req":false,"short":"The role to be assigned to the invited user.","type":"`$STRING`","index$":6},{"active":true,"format":"slug","name":"slug_perm","readOnly":true,"req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"teams","req":false,"type":"`$ARRAY`","index$":8},{"active":true,"name":"user","req":false,"short":"The slug of the user to be invited.","type":"`$STRING`","index$":9},{"active":true,"format":"uri","name":"user_url","readOnly":true,"req":false,"type":"`$STRING`","index$":10}],"id":{"field":"id","name":"id"},"name":"organization_invite","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /orgs/{org}/invites/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_invites_create\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"email\":{\"description\":\"The email of the user to be invited.\",\"format\":\"email\",\"minLength\":1,\"title\":\"Email\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user.\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"title\":\"Role\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user in the team.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"team\":{\"description\":\"The team identifier (slug).\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Team\",\"type\":\"string\"}},\"required\":[\"team\"],\"type\":\"object\"},\"type\":\"array\"},\"user\":{\"description\":\"The slug of the user to be invited.\",\"minLength\":1,\"title\":\"User\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Invite sent\",\"schema\":{\"properties\":{\"email\":{\"description\":\"The email of the user to be invited.\",\"format\":\"email\",\"minLength\":1,\"title\":\"Email\",\"type\":\"string\"},\"expires_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Expires at\",\"type\":\"string\"},\"inviter\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Inviter\",\"type\":\"string\"},\"inviter_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Inviter url\",\"type\":\"string\"},\"org\":{\"readOnly\":true,\"title\":\"Org\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user.\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"title\":\"Role\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user in the team.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"team\":{\"description\":\"The team identifier (slug).\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Team\",\"type\":\"string\"}},\"required\":[\"team\"],\"type\":\"object\"},\"type\":\"array\"},\"user\":{\"description\":\"The slug of the user to be invited.\",\"minLength\":1,\"title\":\"User\",\"type\":\"string\"},\"user_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"User url\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"The invite cannot be created.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/orgs/{org}/invites/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"}],"select":{"exist":["data","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /orgs/{org}/invites/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_invites_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"description\":\"A page number within the paginated result set.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Number of results to return per page.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the list of organization invites\",\"schema\":{\"items\":{\"properties\":{\"email\":{\"description\":\"The email of the user to be invited.\",\"format\":\"email\",\"minLength\":1,\"title\":\"Email\",\"type\":\"string\"},\"expires_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Expires at\",\"type\":\"string\"},\"inviter\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Inviter\",\"type\":\"string\"},\"inviter_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Inviter url\",\"type\":\"string\"},\"org\":{\"readOnly\":true,\"title\":\"Org\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user.\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"title\":\"Role\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user in the team.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"team\":{\"description\":\"The team identifier (slug).\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Team\",\"type\":\"string\"}},\"required\":[\"team\"],\"type\":\"object\"},\"type\":\"array\"},\"user\":{\"description\":\"The slug of the user to be invited.\",\"minLength\":1,\"title\":\"User\",\"type\":\"string\"},\"user_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"User url\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Organization invites not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/invites/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"}],"select":{"exist":["org_id","page","page_size"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"slug_perm","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PATCH /orgs/{org}/invites/{slug_perm}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_invites_partial_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"slug_perm\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user.\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"title\":\"Role\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Invite updated\",\"schema\":{\"properties\":{\"email\":{\"description\":\"The email of the user to be invited.\",\"format\":\"email\",\"minLength\":1,\"title\":\"Email\",\"type\":\"string\"},\"expires_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Expires at\",\"type\":\"string\"},\"inviter\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Inviter\",\"type\":\"string\"},\"inviter_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Inviter url\",\"type\":\"string\"},\"org\":{\"readOnly\":true,\"title\":\"Org\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user.\",\"enum\":[\"Owner\",\"Manager\",\"Member\",\"Collaborator\"],\"title\":\"Role\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Member\",\"description\":\"The role to be assigned to the invited user in the team.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"team\":{\"description\":\"The team identifier (slug).\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Team\",\"type\":\"string\"}},\"required\":[\"team\"],\"type\":\"object\"},\"type\":\"array\"},\"user\":{\"description\":\"The slug of the user to be invited.\",\"minLength\":1,\"title\":\"User\",\"type\":\"string\"},\"user_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"User url\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"The invite cannot be updated.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Invite not found.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"PATCH","orig":"/orgs/{org}/invites/{slug_perm}/","rename":{"param":{"org":"org_id","slug_perm":"id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"invites"},{"var":"id"}],"select":{"exist":["data","id","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["org"]]},"key$":"organization_invite","name__orig":"organization_invite","Name":"OrganizationInvite","name_":"organization_invite","name-":"organization-invite","NAME":"ORGANIZATION_INVITE","index$":51}, {"active":true,"entity":"organization_invite","key$":"BasicOrganizationInviteFlow","kind":"basic","name":"BasicOrganizationInviteFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"organization_invite_ref01"},"match":{"org_id":"org01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"org_id":"org01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"organization_invite_ref01"}}],"index$":1},{"active":true,"data":{"org_id":"org01"},"input":{"ref":"organization_invite_ref01","srcdatavar":"organization_invite_ref01_data","suffix":"_up0","textfield":"email"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_invite_ref01"}}],"valid":[],"index$":2}]}, 'OrganizationInvite')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_invite_ref01_ent = client.OrganizationInvite()
    let organization_invite_ref01_data = setup.data.new.organization_invite['organization_invite_ref01']
    organization_invite_ref01_data['org_id'] = setup.idmap['org01']

    organization_invite_ref01_data = (await organization_invite_ref01_ent.create(organization_invite_ref01_data)).data()
    assert(null != organization_invite_ref01_data.id)


    // LIST
    const organization_invite_ref01_match: any = {}
    organization_invite_ref01_match['org_id'] = setup.idmap['org01']

    const organization_invite_ref01_list = (await organization_invite_ref01_ent.list(organization_invite_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(organization_invite_ref01_list, { id: organization_invite_ref01_data.id })))


    // UPDATE
    const organization_invite_ref01_data_up0: any = {}
    organization_invite_ref01_data_up0.id = organization_invite_ref01_data.id
    organization_invite_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const organization_invite_ref01_markdef_up0 = { name: 'email', value: 'Mark01-organization_invite_ref01_' + setup.now }
    ;(organization_invite_ref01_data_up0 as any)[organization_invite_ref01_markdef_up0.name] = organization_invite_ref01_markdef_up0.value

    const organization_invite_ref01_resdata_up0 = (await organization_invite_ref01_ent.update(organization_invite_ref01_data_up0)).data()
    assert(organization_invite_ref01_resdata_up0.id === organization_invite_ref01_data_up0.id)

    assert((organization_invite_ref01_resdata_up0 as any)[organization_invite_ref01_markdef_up0.name] === organization_invite_ref01_markdef_up0.value)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_invite/OrganizationInviteTestData.json')

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
    ['organization_invite01','organization_invite02','organization_invite03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_INVITE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_INVITE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_INVITE_ENTID']
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
  
