

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


describe('OrganizationTeamEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationTeam()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_team.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"name","req":true,"type":"`$STRING`","index$":2},{"active":true,"format":"slug","name":"slug","req":false,"type":"`$STRING`","index$":3},{"active":true,"format":"slug","name":"slug_perm","readOnly":true,"req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"visibility","req":false,"type":"`$STRING`","index$":5}],"id":{"field":"id","name":"id"},"name":"organization_team","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /orgs/{org}/teams/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_teams_create\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"description\":{\"maxLength\":140,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"slug\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"},\"visibility\":{\"default\":\"Visible\",\"enum\":[\"Visible\",\"Hidden\"],\"title\":\"Visibility\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Team created\",\"schema\":{\"properties\":{\"description\":{\"maxLength\":140,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"slug\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"visibility\":{\"default\":\"Visible\",\"enum\":[\"Visible\",\"Hidden\"],\"title\":\"Visibility\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}},\"400\":{\"description\":\"The team cannot be created.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/orgs/{org}/teams/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"}],"select":{"exist":["data","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"for_user","orig":"for_user","reqd":false,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":2},{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$ANY`","index$":3},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ANY`","index$":4}]},"contract":{"id":"GET /orgs/{org}/teams/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_teams_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"description\":\"A page number within the paginated result set.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Number of results to return per page.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"type\":\"integer\"},{\"default\":false,\"description\":\"Filter for teams that you are a member of.\",\"in\":\"query\",\"name\":\"for_user\",\"required\":false,\"type\":\"boolean\"},{\"default\":\"\",\"description\":\"A search term for querying of teams within an Organization.Available options are: name, slug, user, userslug\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"type\":\"string\"},{\"default\":\"name\",\"description\":\"A field for sorting objects in ascending or descending order. Use `-` prefix for descending order (e.g., `-name`). Available options: name, members.\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the list of teams within the org\",\"schema\":{\"items\":{\"properties\":{\"description\":{\"maxLength\":140,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"slug\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"visibility\":{\"default\":\"Visible\",\"enum\":[\"Visible\",\"Hidden\"],\"title\":\"Visibility\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Org namespace not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/teams/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"}],"select":{"exist":["for_user","org_id","page","page_size","query","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"team","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /orgs/{org}/teams/{team}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_teams_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"team\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the details of the requested team.\",\"schema\":{\"properties\":{\"description\":{\"maxLength\":140,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"slug\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"visibility\":{\"default\":\"Visible\",\"enum\":[\"Visible\",\"Hidden\"],\"title\":\"Visibility\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Team not found.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/teams/{team}/","rename":{"param":{"org":"org_id","team":"id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"},{"var":"id"}],"select":{"exist":["id","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"team","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PATCH /orgs/{org}/teams/{team}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_teams_partial_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"team\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"description\":{\"maxLength\":140,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"slug\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"},\"visibility\":{\"default\":\"Visible\",\"enum\":[\"Visible\",\"Hidden\"],\"title\":\"Visibility\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Updated the specified team.\",\"schema\":{\"properties\":{\"description\":{\"maxLength\":140,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"slug\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"visibility\":{\"default\":\"Visible\",\"enum\":[\"Visible\",\"Hidden\"],\"title\":\"Visibility\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"}},\"400\":{\"description\":\"The team cannot be edited.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Team not found.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"PATCH","orig":"/orgs/{org}/teams/{team}/","rename":{"param":{"org":"org_id","team":"id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"},{"var":"id"}],"select":{"exist":["data","id","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["org"]]},"key$":"organization_team","name__orig":"organization_team","Name":"OrganizationTeam","name_":"organization_team","name-":"organization-team","NAME":"ORGANIZATION_TEAM","index$":59}, {"active":true,"entity":"organization_team","key$":"BasicOrganizationTeamFlow","kind":"basic","name":"BasicOrganizationTeamFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"organization_team_ref01"},"match":{"org_id":"org01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"org_id":"org01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"organization_team_ref01"}}],"index$":1},{"active":true,"data":{"org_id":"org01"},"input":{"ref":"organization_team_ref01","srcdatavar":"organization_team_ref01_data","suffix":"_up0","textfield":"description"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_team_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"organization_team_ref01","srcdatavar":"organization_team_ref01_data","suffix":"_dt0"},"match":{"id":"organization_team01","org_id":"org01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_team_ref01"}}],"index$":3}]}, 'OrganizationTeam')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_team_ref01_ent = client.OrganizationTeam()
    let organization_team_ref01_data = setup.data.new.organization_team['organization_team_ref01']
    organization_team_ref01_data['org_id'] = setup.idmap['org01']

    organization_team_ref01_data = (await organization_team_ref01_ent.create(organization_team_ref01_data)).data()
    assert(null != organization_team_ref01_data.id)


    // LIST
    const organization_team_ref01_match: any = {}
    organization_team_ref01_match['org_id'] = setup.idmap['org01']

    const organization_team_ref01_list = (await organization_team_ref01_ent.list(organization_team_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(organization_team_ref01_list, { id: organization_team_ref01_data.id })))


    // UPDATE
    const organization_team_ref01_data_up0: any = {}
    organization_team_ref01_data_up0.id = organization_team_ref01_data.id
    organization_team_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const organization_team_ref01_markdef_up0 = { name: 'description', value: 'Mark01-organization_team_ref01_' + setup.now }
    ;(organization_team_ref01_data_up0 as any)[organization_team_ref01_markdef_up0.name] = organization_team_ref01_markdef_up0.value

    const organization_team_ref01_resdata_up0 = (await organization_team_ref01_ent.update(organization_team_ref01_data_up0)).data()
    assert(organization_team_ref01_resdata_up0.id === organization_team_ref01_data_up0.id)

    assert((organization_team_ref01_resdata_up0 as any)[organization_team_ref01_markdef_up0.name] === organization_team_ref01_markdef_up0.value)


    // LOAD
    const organization_team_ref01_match_dt0: any = {}
    organization_team_ref01_match_dt0.id = organization_team_ref01_data.id
    const organization_team_ref01_data_dt0 = (await organization_team_ref01_ent.load(organization_team_ref01_match_dt0)).data()
    assert(organization_team_ref01_data_dt0.id === organization_team_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_team/OrganizationTeamTestData.json')

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
    ['organization_team01','organization_team02','organization_team03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_TEAM_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_TEAM_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_TEAM_ENTID']
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
  
