

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


describe('PackageDenyPolicyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.PackageDenyPolicy()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'package_deny_policy.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"action":{"a":true,"h":"Action","n":"action","r":false,"ro":true,"t":"`$STRING`","key$":"action","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"ro":true,"t":"`$STRING`","key$":"created_at","index$":1},"description":{"a":true,"h":"Description","n":"description","r":false,"t":"`$STRING`","key$":"description","index$":2},"enabled":{"a":true,"h":"Enabled","n":"enabled","r":false,"sh":"Whether this rule is enabled or disabled.","t":"`$BOOLEAN`","key$":"enabled","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"t":"`$STRING`","key$":"name","index$":5},"package_query_string":{"a":true,"h":"Package Query String","n":"package_query_string","r":true,"sh":"Packages that match this query will trigger this deny rule.","t":"`$STRING`","key$":"package_query_string","index$":6},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":7},"status":{"a":true,"h":"Status","n":"status","r":false,"ro":true,"t":"`$STRING`","key$":"status","index$":8},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"ro":true,"t":"`$STRING`","key$":"updated_at","index$":9}},"id":{"field":"id","name":"id"},"name":"package_deny_policy","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /orgs/{org}/deny-policy/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/orgs/{org}/deny-policy/","q":{"exist":["data","org_id"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"deny-policy"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /orgs/{org}/deny-policy/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/deny-policy/","q":{"exist":["org_id","page","page_size"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"deny-policy"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /orgs/{org}/deny-policy/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug_perm","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/deny-policy/{slug_perm}/","q":{"exist":["id","org_id"]},"r":{"param":{"org":"org_id","slug_perm":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"deny-policy"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /orgs/{org}/deny-policy/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug_perm","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/orgs/{org}/deny-policy/{slug_perm}/","q":{"exist":["data","id","org_id"]},"r":{"param":{"org":"org_id","slug_perm":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"deny-policy"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /orgs/{org}/deny-policy/{slug_perm}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug_perm","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/orgs/{org}/deny-policy/{slug_perm}/","q":{"exist":["data","id","org_id"]},"r":{"param":{"org":"org_id","slug_perm":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"deny-policy"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"package_deny_policy","name__orig":"package_deny_policy","Name":"PackageDenyPolicy","name_":"package_deny_policy","name-":"package-deny-policy","NAME":"PACKAGE_DENY_POLICY","index$":35}, {"active":true,"entity":"package_deny_policy","key$":"BasicPackageDenyPolicyFlow","kind":"basic","name":"BasicPackageDenyPolicyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"package_deny_policy_ref01"},"m":{"org_id":"org01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"org_id":"org01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"package_deny_policy_ref01"}}],"index$":1},{"a":true,"d":{"org_id":"org01"},"i":{"ref":"package_deny_policy_ref01","srcdatavar":"package_deny_policy_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-package_deny_policy_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"package_deny_policy_ref01","srcdatavar":"package_deny_policy_ref01_data","suffix":"_dt0"},"m":{"id":"package_deny_policy01","org_id":"org01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-package_deny_policy_ref01"}}],"index$":3}]}, 'PackageDenyPolicy', {"POST /orgs/{org}/deny-policy/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"data","in":"body","required":false,"schema":{"required":["package_query_string"],"type":"object","properties":{"description":{"title":"Description","type":"string","maxLength":250,"x-nullable":true},"enabled":{"title":"Enabled","description":"Whether this rule is enabled or disabled.","type":"boolean"},"name":{"title":"Name","type":"string","maxLength":100,"x-nullable":true},"package_query_string":{"title":"Package query string","description":"Packages that match this query will trigger this deny rule.","type":"string","minLength":1}},"x-ref":"#/definitions/PackageDenyPolicyRequest"},"index$":1}]},"GET /orgs/{org}/deny-policy/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2}]},"GET /orgs/{org}/deny-policy/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1}]},"PATCH /orgs/{org}/deny-policy/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"description":{"title":"Description","type":"string","maxLength":250,"x-nullable":true},"enabled":{"title":"Enabled","description":"Whether this rule is enabled or disabled.","type":"boolean"},"name":{"title":"Name","type":"string","maxLength":100,"x-nullable":true},"package_query_string":{"title":"Package query string","description":"Packages that match this query will trigger this deny rule.","type":"string","minLength":1}},"x-ref":"#/definitions/PackageDenyPolicyRequestPatch"},"index$":2}]},"PUT /orgs/{org}/deny-policy/{slug_perm}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"slug_perm","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"required":["package_query_string"],"type":"object","properties":{"description":{"title":"Description","type":"string","maxLength":250,"x-nullable":true},"enabled":{"title":"Enabled","description":"Whether this rule is enabled or disabled.","type":"boolean"},"name":{"title":"Name","type":"string","maxLength":100,"x-nullable":true},"package_query_string":{"title":"Package query string","description":"Packages that match this query will trigger this deny rule.","type":"string","minLength":1}},"x-ref":"#/definitions/PackageDenyPolicyRequest"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const package_deny_policy_ref01_ent = client.PackageDenyPolicy()
    let package_deny_policy_ref01_data = setup.data.new.package_deny_policy['package_deny_policy_ref01']
    package_deny_policy_ref01_data['org_id'] = setup.idmap['org01']

    package_deny_policy_ref01_data = (await package_deny_policy_ref01_ent.create(package_deny_policy_ref01_data)).data()
    assert(null != package_deny_policy_ref01_data.id)


    // LIST
    const package_deny_policy_ref01_match: any = {}
    package_deny_policy_ref01_match['org_id'] = setup.idmap['org01']

    const package_deny_policy_ref01_list = (await package_deny_policy_ref01_ent.list(package_deny_policy_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(package_deny_policy_ref01_list, { id: package_deny_policy_ref01_data.id })))


    // UPDATE
    const package_deny_policy_ref01_data_up0: any = {}
    package_deny_policy_ref01_data_up0.id = package_deny_policy_ref01_data.id
    package_deny_policy_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const package_deny_policy_ref01_markdef_up0 = { name: 'description', value: 'Mark01-package_deny_policy_ref01_' + setup.now }
    ;(package_deny_policy_ref01_data_up0 as any)[package_deny_policy_ref01_markdef_up0.name] = package_deny_policy_ref01_markdef_up0.value

    const package_deny_policy_ref01_resdata_up0 = (await package_deny_policy_ref01_ent.update(package_deny_policy_ref01_data_up0)).data()
    assert(package_deny_policy_ref01_resdata_up0.id === package_deny_policy_ref01_data_up0.id)

    assert((package_deny_policy_ref01_resdata_up0 as any)[package_deny_policy_ref01_markdef_up0.name] === package_deny_policy_ref01_markdef_up0.value)


    // LOAD
    const package_deny_policy_ref01_match_dt0: any = {}
    package_deny_policy_ref01_match_dt0.id = package_deny_policy_ref01_data.id
    const package_deny_policy_ref01_data_dt0 = (await package_deny_policy_ref01_ent.load(package_deny_policy_ref01_match_dt0)).data()
    assert(package_deny_policy_ref01_data_dt0.id === package_deny_policy_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/package_deny_policy/PackageDenyPolicyTestData.json')

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
    ['package_deny_policy01','package_deny_policy02','package_deny_policy03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_PACKAGE_DENY_POLICY_ENTID']
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
  
