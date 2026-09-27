

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


describe('DynamicMappingEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.DynamicMapping()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'dynamic_mapping.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"claim_value":{"a":true,"h":"Claim Value","n":"claim_value","r":true,"sh":"The OIDC token claim value that must be present in the token for it to successfully authenticate as the mapped `service_account`.","t":"`$STRING`","key$":"claim_value","index$":0},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":1},"service_account":{"a":true,"h":"Service Account","n":"service_account","r":true,"sh":"The service account associated with the provider setting and `claim_value` Note: This field and the dynamic mappings feature are still in early access.","t":"`$STRING`","key$":"service_account","index$":2}},"id":{"field":"id","name":"id"},"name":"dynamic_mapping","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"provider_setting","or":"provider_setting","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":0},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/","q":{"exist":["org_id","page","page_size","provider_setting"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"},{"var":"provider_setting"},{"lit":"dynamic-mappings"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/{claim_value}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"claim_value","r":true,"t":"`$STRING`","index$":0},{"a":true,"k":"param","n":"openid_connect_id","or":"provider_setting","r":true,"t":"`$STRING`","index$":1},{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":2}]},"k":"http","m":"GET","o":"/orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/{claim_value}/","q":{"exist":["id","openid_connect_id","org_id"]},"r":{"param":{"claim_value":"id","org":"org_id","provider_setting":"openid_connect_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"openid-connect"},{"var":"openid_connect_id"},{"lit":"dynamic-mappings"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"dynamic_mapping","name__orig":"dynamic_mapping","Name":"DynamicMapping","name_":"dynamic_mapping","name-":"dynamic-mapping","NAME":"DYNAMIC_MAPPING","index$":8}, {"active":true,"entity":"dynamic_mapping","key$":"BasicDynamicMappingFlow","kind":"basic","name":"BasicDynamicMappingFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{"org_id":"org01","provider_setting":"provider_setting01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"dynamic_mapping_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"dynamic_mapping_ref01","srcdatavar":"dynamic_mapping_ref01_data","suffix":"_dt0"},"m":{"id":"dynamic_mapping01","openid_connect_id":"openid_connect01","org_id":"org01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-dynamic_mapping_ref01"}}],"index$":1}]}, 'DynamicMapping', {"GET /orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"provider_setting","in":"path","required":true,"type":"string","index$":1},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":2},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":3}]},"GET /orgs/{org}/openid-connect/{provider_setting}/dynamic-mappings/{claim_value}/":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"provider_setting","in":"path","required":true,"type":"string","index$":1},{"name":"claim_value","in":"path","required":true,"type":"string","index$":2}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let dynamic_mapping_ref01_data = Object.values(setup.data.existing.dynamic_mapping)[0] as any

    // LIST
    const dynamic_mapping_ref01_ent = client.DynamicMapping()
    const dynamic_mapping_ref01_match: any = {}
    dynamic_mapping_ref01_match['org_id'] = setup.idmap['org01']
    dynamic_mapping_ref01_match['provider_setting'] = setup.idmap['provider_setting01']

    const dynamic_mapping_ref01_list = (await dynamic_mapping_ref01_ent.list(dynamic_mapping_ref01_match)).map((e: any) => e.data())


    // LOAD
    const dynamic_mapping_ref01_match_dt0: any = {}
    dynamic_mapping_ref01_match_dt0.id = dynamic_mapping_ref01_data.id
    const dynamic_mapping_ref01_data_dt0 = (await dynamic_mapping_ref01_ent.load(dynamic_mapping_ref01_match_dt0)).data()
    assert(dynamic_mapping_ref01_data_dt0.id === dynamic_mapping_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/dynamic_mapping/DynamicMappingTestData.json')

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
    ['dynamic_mapping01','dynamic_mapping02','dynamic_mapping03','org01','org02','org03','provider_setting01','openid_connect01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_DYNAMIC_MAPPING_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_DYNAMIC_MAPPING_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_DYNAMIC_MAPPING_ENTID']
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
  
