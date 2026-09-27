

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":2},"slug":{"a":true,"fo":"slug","h":"Slug","n":"slug","r":false,"t":"`$STRING`","key$":"slug","index$":3},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":4},"visibility":{"a":true,"h":"Visibility","n":"visibility","r":false,"t":"`$STRING`","key$":"visibility","index$":5}},"id":{"field":"id","name":"id"},"name":"organization_team","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /orgs/{org}/teams/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/orgs/{org}/teams/","q":{"exist":["data","org_id"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /orgs/{org}/teams/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"for_user","or":"for_user","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ANY`","index$":4}]},"k":"http","m":"GET","o":"/orgs/{org}/teams/","q":{"exist":["for_user","org_id","page","page_size","query","sort"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /orgs/{org}/teams/{team}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"team","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/teams/{team}/","q":{"exist":["id","org_id"]},"r":{"param":{"org":"org_id","team":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /orgs/{org}/teams/{team}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"team","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/orgs/{org}/teams/{team}/","q":{"exist":["data","id","org_id"]},"r":{"param":{"org":"org_id","team":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"teams"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"organization_team","name__orig":"organization_team","Name":"OrganizationTeam","name_":"organization_team","name-":"organization-team","NAME":"ORGANIZATION_TEAM","index$":32}, {"active":true,"entity":"organization_team","key$":"BasicOrganizationTeamFlow","kind":"basic","name":"BasicOrganizationTeamFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_team_ref01"},"m":{"org_id":"org01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"org_id":"org01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"organization_team_ref01"}}],"index$":1},{"a":true,"d":{"org_id":"org01"},"i":{"ref":"organization_team_ref01","srcdatavar":"organization_team_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_team_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"organization_team_ref01","srcdatavar":"organization_team_ref01_data","suffix":"_dt0"},"m":{"id":"organization_team01","org_id":"org01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_team_ref01"}}],"index$":3}]}, 'OrganizationTeam', {"POST /orgs/{org}/teams/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"data","in":"body","required":false,"schema":{"required":["name"],"type":"object","properties":{"description":{"title":"Description","type":"string","maxLength":140,"minLength":1},"name":{"title":"Name","type":"string","minLength":1},"slug":{"title":"Slug","type":"string","format":"slug","pattern":"^[-a-zA-Z0-9_]+$","minLength":1},"visibility":{"title":"Visibility","type":"string","enum":["Visible","Hidden"],"default":"Visible"}},"x-ref":"#/definitions/OrganizationTeamRequest"},"index$":1}]},"GET /orgs/{org}/teams/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2},{"name":"for_user","in":"query","description":"Filter for teams that you are a member of.","required":false,"type":"boolean","default":false,"index$":3},{"name":"query","in":"query","description":"A search term for querying of teams within an Organization.Available options are: name, slug, user, userslug","required":false,"type":"string","default":"","index$":4},{"name":"sort","in":"query","description":"A field for sorting objects in ascending or descending order. Use `-` prefix for descending order (e.g., `-name`). Available options: name, members.","required":false,"type":"string","default":"name","index$":5}]},"GET /orgs/{org}/teams/{team}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"team","in":"path","required":true,"type":"string","index$":1}]},"PATCH /orgs/{org}/teams/{team}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"team","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"description":{"title":"Description","type":"string","maxLength":140,"minLength":1},"name":{"title":"Name","type":"string","minLength":1},"slug":{"title":"Slug","type":"string","format":"slug","pattern":"^[-a-zA-Z0-9_]+$","minLength":1},"visibility":{"title":"Visibility","type":"string","enum":["Visible","Hidden"],"default":"Visible"}},"x-ref":"#/definitions/OrganizationTeamRequestPatch"},"index$":2}]}})
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
  
