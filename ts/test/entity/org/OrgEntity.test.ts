

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


describe('OrgEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Org()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load', 'remove']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'org.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"country":{"a":true,"h":"Country","n":"country","r":false,"ro":true,"t":"`$STRING`","key$":"country","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"ro":true,"t":"`$STRING`","key$":"created_at","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"location":{"a":true,"h":"Location","n":"location","r":false,"ro":true,"sh":"The city/town/area your organization is based in.","t":"`$STRING`","key$":"location","index$":3},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":4},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"ro":true,"t":"`$STRING`","key$":"slug","index$":5},"slug_perm":{"a":true,"h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":6},"tagline":{"a":true,"h":"Tagline","n":"tagline","r":false,"ro":true,"sh":"A short public descriptive for your organization.","t":"`$STRING`","key$":"tagline","index$":7}},"id":{"field":"id","name":"id"},"name":"org","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /orgs/{org}/members/{member}/refresh/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"member","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/orgs/{org}/members/{member}/refresh/","q":{"exist":["id","member_id"]},"r":{"param":{"member":"member_id","org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"members"},{"var":"member_id"},{"lit":"refresh"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /orgs/{org}/saml-group-sync/disable/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/orgs/{org}/saml-group-sync/disable/","q":{"exist":["id"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"saml-group-sync"},{"lit":"disable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"POST /orgs/{org}/saml-group-sync/enable/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"POST","o":"/orgs/{org}/saml-group-sync/enable/","q":{"exist":["id"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"saml-group-sync"},{"lit":"enable"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /orgs/{org}/license-policy-violation/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/license-policy-violation/","q":{"$action":"license_policy_violation","exist":["cursor","id","page_size"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"license-policy-violation"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":0},{"a":true,"co":{"id":"GET /orgs/{org}/vulnerability-policy-violation/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"cursor","or":"cursor","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/vulnerability-policy-violation/","q":{"$action":"vulnerability_policy_violation","exist":["cursor","id","page_size"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"vulnerability-policy-violation"}],"t":{"req":"`reqdata`","res":"`body.results`"},"index$":1},{"a":true,"co":{"id":"GET /orgs/","source":"swagger2","version":2},"g":{"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/orgs/","q":{"exist":["page","page_size"]},"r":{},"s":[{"lit":"orgs"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /orgs/{org}/members/{member}/remove/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member_id","or":"member","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/members/{member}/remove/","q":{"exist":["id","member_id"]},"r":{"param":{"member":"member_id","org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"members"},{"var":"member_id"},{"lit":"remove"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"GET /orgs/{org}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/orgs/{org}/","q":{"exist":["id"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"load"},"remove":{"input":"data","name":"remove","points":[{"a":true,"co":{"id":"DELETE /orgs/{org}/members/{member}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"member","or":"member","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/orgs/{org}/members/{member}/","q":{"exist":["id","member"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"members"},{"var":"member"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"DELETE /orgs/{org}/services/{service}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"service","or":"service","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/orgs/{org}/services/{service}/","q":{"exist":["id","service"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"services"},{"var":"service"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"DELETE /orgs/{org}/deny-policy/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/orgs/{org}/deny-policy/{slug_perm}/","q":{"exist":["id","slug_perm"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"deny-policy"},{"var":"slug_perm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"DELETE /orgs/{org}/invites/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/orgs/{org}/invites/{slug_perm}/","q":{"exist":["id","slug_perm"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"invites"},{"var":"slug_perm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":3},{"a":true,"co":{"id":"DELETE /orgs/{org}/license-policy/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/orgs/{org}/license-policy/{slug_perm}/","q":{"exist":["id","slug_perm"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"license-policy"},{"var":"slug_perm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":4},{"a":true,"co":{"id":"DELETE /orgs/{org}/openid-connect/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/orgs/{org}/openid-connect/{slug_perm}/","q":{"exist":["id","slug_perm"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"openid-connect"},{"var":"slug_perm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":5},{"a":true,"co":{"id":"DELETE /orgs/{org}/saml-group-sync/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/orgs/{org}/saml-group-sync/{slug_perm}/","q":{"exist":["id","slug_perm"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"saml-group-sync"},{"var":"slug_perm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":6},{"a":true,"co":{"id":"DELETE /orgs/{org}/vulnerability-policy/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"slug_perm","or":"slug_perm","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/orgs/{org}/vulnerability-policy/{slug_perm}/","q":{"exist":["id","slug_perm"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"vulnerability-policy"},{"var":"slug_perm"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":7},{"a":true,"co":{"id":"DELETE /orgs/{org}/teams/{team}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"team","or":"team","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"DELETE","o":"/orgs/{org}/teams/{team}/","q":{"exist":["id","team"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"teams"},{"var":"team"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":8},{"a":true,"co":{"id":"DELETE /orgs/{org}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"DELETE","o":"/orgs/{org}/","q":{"exist":["id"]},"r":{"param":{"org":"id"}},"s":[{"lit":"orgs"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":9}],"key$":"remove"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /orgs/{org}/teams/{team}/members","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"team_id","or":"team","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/orgs/{org}/teams/{team}/members","q":{"exist":["data","id","team_id"]},"r":{"param":{"org":"id","team":"team_id"}},"s":[{"lit":"orgs"},{"var":"id"},{"lit":"teams"},{"var":"team_id"},{"lit":"members"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.service"]]},"key$":"org","name__orig":"org","Name":"Org","name_":"org","name-":"org","NAME":"ORG","index$":21}, {"active":true,"entity":"org","key$":"BasicOrgFlow","kind":"basic","name":"BasicOrgFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"org_ref01"},"m":{"org":"org01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"org_ref01"}}],"index$":1},{"a":true,"d":{},"i":{"ref":"org_ref01","srcdatavar":"org_ref01_data","suffix":"_up0","textfield":"name"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-org_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"org_ref01","srcdatavar":"org_ref01_data","suffix":"_dt0"},"m":{"id":"org01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-org_ref01"}}],"index$":3},{"a":true,"d":{},"i":{"ref":"org_ref01","suffix":"_rm0"},"m":{"id":"org01"},"o":"remove","s":[],"v":[],"index$":4},{"a":true,"d":{},"i":{"suffix":"_rt0"},"m":{},"o":"list","s":[],"v":[{"apply":"ItemNotExists","def":{"ref":"org_ref01"}}],"index$":5}]}, 'Org', {"POST /orgs/{org}/members/{member}/refresh/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"member","in":"path","required":true,"type":"string","index$":1}]},"POST /orgs/{org}/saml-group-sync/disable/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0}]},"POST /orgs/{org}/saml-group-sync/enable/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0}]},"GET /orgs/{org}/license-policy-violation/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"cursor","in":"query","description":"The pagination cursor value.","required":false,"type":"string","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2}]},"GET /orgs/{org}/vulnerability-policy-violation/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"cursor","in":"query","description":"The pagination cursor value.","required":false,"type":"string","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2}]},"GET /orgs/":{"protocol":"http","parameters":[{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":0},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":1}]},"GET /orgs/{org}/members/{member}/remove/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"member","in":"path","required":true,"type":"string","index$":1}]},"GET /orgs/{org}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0}]},"DELETE /orgs/{org}/members/{member}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"member","in":"path","required":true,"type":"string","index$":1}]},"DELETE /orgs/{org}/services/{service}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"service","in":"path","required":true,"type":"string","index$":1}]},"DELETE /orgs/{org}/deny-policy/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]},"DELETE /orgs/{org}/invites/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]},"DELETE /orgs/{org}/license-policy/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]},"DELETE /orgs/{org}/openid-connect/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]},"DELETE /orgs/{org}/saml-group-sync/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]},"DELETE /orgs/{org}/vulnerability-policy/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]},"DELETE /orgs/{org}/teams/{team}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"team","in":"path","required":true,"type":"string","index$":1}]},"DELETE /orgs/{org}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0}]},"PUT /orgs/{org}/teams/{team}/members":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"team","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"required":["members"],"type":"object","properties":{"members":{"description":"The team members","items":{"description":"The team members","properties":{"role":{"enum":["Manager","Member"],"title":"Role","type":"string","key$":"role"},"user":{"minLength":1,"title":"User","type":"string","key$":"user"}},"required":["role","user"],"type":"object","x-ref":"#/definitions/OrganizationTeamMembership","index$":0},"key$":"members","type":"array"}},"x-ref":"#/definitions/OrganizationTeamMembers"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const org_ref01_ent = client.Org()
    let org_ref01_data = setup.data.new.org['org_ref01']
    org_ref01_data['org'] = setup.idmap['org01']

    org_ref01_data = (await org_ref01_ent.create(org_ref01_data)).data()
    assert(null != org_ref01_data.id)


    // LIST
    const org_ref01_match: any = {}

    const org_ref01_list = (await org_ref01_ent.list(org_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(org_ref01_list, { id: org_ref01_data.id })))


    // UPDATE
    const org_ref01_data_up0: any = {}
    org_ref01_data_up0.id = org_ref01_data.id

    const org_ref01_markdef_up0 = { name: 'name', value: 'Mark01-org_ref01_' + setup.now }
    ;(org_ref01_data_up0 as any)[org_ref01_markdef_up0.name] = org_ref01_markdef_up0.value

    const org_ref01_resdata_up0 = (await org_ref01_ent.update(org_ref01_data_up0)).data()
    assert(org_ref01_resdata_up0.id === org_ref01_data_up0.id)

    assert((org_ref01_resdata_up0 as any)[org_ref01_markdef_up0.name] === org_ref01_markdef_up0.value)


    // LOAD
    const org_ref01_match_dt0: any = {}
    org_ref01_match_dt0.id = org_ref01_data.id
    const org_ref01_data_dt0 = (await org_ref01_ent.load(org_ref01_match_dt0)).data()
    assert(org_ref01_data_dt0.id === org_ref01_data.id)


    // REMOVE
    const org_ref01_match_rm0: any = { id: org_ref01_data.id }
    await org_ref01_ent.remove(org_ref01_match_rm0)
  

    // LIST
    const org_ref01_match_rt0: any = {}

    const org_ref01_list_rt0 = (await org_ref01_ent.list(org_ref01_match_rt0)).map((e: any) => e.data())

    assert(isempty(select(org_ref01_list_rt0, { id: org_ref01_data.id })))


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/org/OrgTestData.json')

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
    ['org01','org02','org03','service01','service02','service03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORG_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORG_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORG_ENTID']
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
  
