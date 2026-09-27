

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


describe('ServiceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Service()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'service.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"ro":true,"t":"`$STRING`","key$":"created_at","index$":0},"created_by":{"a":true,"h":"Created By","n":"created_by","r":false,"ro":true,"t":"`$STRING`","key$":"created_by","index$":1},"created_by_url":{"a":true,"fo":"uri","h":"Created By Url","n":"created_by_url","r":false,"ro":true,"t":"`$STRING`","key$":"created_by_url","index$":2},"description":{"a":true,"h":"Description","n":"description","r":false,"sh":"The description of the service","t":"`$STRING`","key$":"description","index$":3},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":4},"key":{"a":true,"h":"Key","n":"key","r":false,"ro":true,"sh":"The API key of the service","t":"`$STRING`","key$":"key","index$":5},"key_expires_at":{"a":true,"fo":"date-time","h":"Key Expires At","n":"key_expires_at","r":false,"ro":true,"sh":"The time at which the API key will expire.","t":"`$STRING`","key$":"key_expires_at","index$":6},"name":{"a":true,"h":"Name","n":"name","r":true,"sh":"The name of the service","t":"`$STRING`","key$":"name","index$":7},"role":{"a":true,"h":"Role","n":"role","r":false,"sh":"The role of the service.","t":"`$STRING`","key$":"role","index$":8},"slug":{"a":true,"fo":"slug","h":"Slug","n":"slug","r":false,"ro":true,"sh":"The slug of the service","t":"`$STRING`","key$":"slug","index$":9},"teams":{"a":true,"h":"Teams","n":"teams","r":false,"t":"`$ARRAY`","key$":"teams","index$":10}},"id":{"field":"id","name":"id"},"name":"service","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /orgs/{org}/services/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/orgs/{org}/services/","q":{"exist":["data","org_id"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /orgs/{org}/services/{service}/refresh/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"service","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"POST","o":"/orgs/{org}/services/{service}/refresh/","q":{"$action":"refresh","exist":["id","org_id"]},"r":{"param":{"org":"org_id","service":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"},{"var":"id"},{"lit":"refresh"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /orgs/{org}/services/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":2},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ANY`","index$":3}]},"k":"http","m":"GET","o":"/orgs/{org}/services/","q":{"exist":["org_id","page","page_size","query","sort"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /orgs/{org}/services/{service}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"service","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/services/{service}/","q":{"exist":["id","org_id"]},"r":{"param":{"org":"org_id","service":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /orgs/{org}/services/{service}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"service","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/orgs/{org}/services/{service}/","q":{"exist":["data","id","org_id"]},"r":{"param":{"org":"org_id","service":"id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"service","name__orig":"service","Name":"Service","name_":"service","name-":"service","NAME":"SERVICE","index$":64}, {"active":true,"entity":"service","key$":"BasicServiceFlow","kind":"basic","name":"BasicServiceFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"service_ref01"},"m":{"org_id":"org01","service":"service01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"org_id":"org01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"service_ref01"}}],"index$":1},{"a":true,"d":{"org_id":"org01"},"i":{"ref":"service_ref01","srcdatavar":"service_ref01_data","suffix":"_up0","textfield":"description"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-service_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"service_ref01","srcdatavar":"service_ref01_data","suffix":"_dt0"},"m":{"id":"service01","org_id":"org01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-service_ref01"}}],"index$":3}]}, 'Service', {"POST /orgs/{org}/services/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"data","in":"body","required":false,"schema":{"required":["name"],"type":"object","properties":{"description":{"title":"Description","description":"The description of the service","type":"string","maxLength":1024,"minLength":1},"name":{"title":"Name","description":"The name of the service","type":"string","maxLength":120,"minLength":1},"role":{"title":"Role","description":"The role of the service.","type":"string","enum":["Manager","Member"],"default":"Member"},"teams":{"type":"array","items":{"required":["slug"],"type":"object","properties":{"role":{"title":"Role","description":"The team role associated with the service","type":"string","enum":["Manager","Member"],"default":"Manager"},"slug":{"title":"Slug","description":"The teams associated with the service","type":"string","format":"slug","pattern":"^[-a-zA-Z0-9_]+$","minLength":1}},"x-ref":"#/definitions/ServiceTeams"}}},"x-ref":"#/definitions/ServiceRequest"},"index$":1}]},"POST /orgs/{org}/services/{service}/refresh/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"service","in":"path","required":true,"type":"string","index$":1}]},"GET /orgs/{org}/services/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":1},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":2},{"name":"query","in":"query","description":"A search term for querying of services within an Organization.Available options are: name, role","required":false,"type":"string","default":"","index$":3},{"name":"sort","in":"query","description":"A field for sorting objects in ascending or descending order. Use `-` prefix for descending order (e.g., `-created_at`). Available options: created_at, name, role.","required":false,"type":"string","default":"created_at","index$":4}]},"GET /orgs/{org}/services/{service}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"service","in":"path","required":true,"type":"string","index$":1}]},"PATCH /orgs/{org}/services/{service}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"service","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"description":{"title":"Description","description":"The description of the service","type":"string","maxLength":1024,"minLength":1},"name":{"title":"Name","description":"The name of the service","type":"string","maxLength":120,"minLength":1},"role":{"title":"Role","description":"The role of the service.","type":"string","enum":["Manager","Member"],"default":"Member"},"teams":{"type":"array","items":{"required":["slug"],"type":"object","properties":{"role":{"title":"Role","description":"The team role associated with the service","type":"string","enum":["Manager","Member"],"default":"Manager"},"slug":{"title":"Slug","description":"The teams associated with the service","type":"string","format":"slug","pattern":"^[-a-zA-Z0-9_]+$","minLength":1}},"x-ref":"#/definitions/ServiceTeams"}}},"x-ref":"#/definitions/ServiceRequestPatch"},"index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const service_ref01_ent = client.Service()
    let service_ref01_data = setup.data.new.service['service_ref01']
    service_ref01_data['org_id'] = setup.idmap['org01']
    service_ref01_data['service'] = setup.idmap['service01']

    service_ref01_data = (await service_ref01_ent.create(service_ref01_data)).data()
    assert(null != service_ref01_data.id)


    // LIST
    const service_ref01_match: any = {}
    service_ref01_match['org_id'] = setup.idmap['org01']

    const service_ref01_list = (await service_ref01_ent.list(service_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(service_ref01_list, { id: service_ref01_data.id })))


    // UPDATE
    const service_ref01_data_up0: any = {}
    service_ref01_data_up0.id = service_ref01_data.id
    service_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const service_ref01_markdef_up0 = { name: 'description', value: 'Mark01-service_ref01_' + setup.now }
    ;(service_ref01_data_up0 as any)[service_ref01_markdef_up0.name] = service_ref01_markdef_up0.value

    const service_ref01_resdata_up0 = (await service_ref01_ent.update(service_ref01_data_up0)).data()
    assert(service_ref01_resdata_up0.id === service_ref01_data_up0.id)

    assert((service_ref01_resdata_up0 as any)[service_ref01_markdef_up0.name] === service_ref01_markdef_up0.value)


    // LOAD
    const service_ref01_match_dt0: any = {}
    service_ref01_match_dt0.id = service_ref01_data.id
    const service_ref01_data_dt0 = (await service_ref01_ent.load(service_ref01_match_dt0)).data()
    assert(service_ref01_data_dt0.id === service_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/service/ServiceTestData.json')

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
    ['service01','service02','service03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_SERVICE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_SERVICE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_SERVICE_ENTID']
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
  
