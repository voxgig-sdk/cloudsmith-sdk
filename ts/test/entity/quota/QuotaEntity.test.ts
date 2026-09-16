

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


describe('QuotaEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Quota()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'quota.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"display","req":true,"type":"`$OBJECT`","index$":0},{"active":true,"name":"history","req":true,"type":"`$ARRAY`","index$":1},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"raw","req":true,"type":"`$OBJECT`","index$":3}],"id":{"field":"id","name":"id"},"name":"quota","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"owner","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /quota/{owner}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"quota_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"usage\":{\"properties\":{\"display\":{\"properties\":{\"bandwidth\":{\"properties\":{\"configured\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Configured\",\"type\":\"string\"},\"percentage_used\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage used\",\"type\":\"string\"},\"plan_limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Plan limit\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"},\"storage\":{\"properties\":{\"configured\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Configured\",\"type\":\"string\"},\"peak\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Peak\",\"type\":\"string\"},\"percentage_used\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage used\",\"type\":\"string\"},\"plan_limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Plan limit\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"bandwidth\",\"storage\"],\"type\":\"object\"},\"raw\":{\"properties\":{\"bandwidth\":{\"properties\":{\"configured\":{\"title\":\"Configured\",\"type\":\"integer\"},\"percentage_used\":{\"format\":\"decimal\",\"title\":\"Percentage used\",\"type\":\"string\"},\"plan_limit\":{\"title\":\"Plan limit\",\"type\":\"integer\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"},\"storage\":{\"properties\":{\"configured\":{\"title\":\"Configured\",\"type\":\"integer\"},\"peak\":{\"title\":\"Peak\",\"type\":\"integer\"},\"percentage_used\":{\"format\":\"decimal\",\"title\":\"Percentage used\",\"type\":\"string\"},\"plan_limit\":{\"title\":\"Plan limit\",\"type\":\"integer\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"}},\"required\":[\"bandwidth\",\"storage\"],\"type\":\"object\"}},\"required\":[\"display\",\"raw\"],\"type\":\"object\"}},\"required\":[\"usage\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/quota/{owner}/","rename":{"param":{"owner":"id"}},"segments":[{"lit":"quota"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body.usage`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /quota/history/{owner}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"quota_history_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"history\":{\"items\":{\"properties\":{\"days\":{\"default\":0,\"title\":\"Days\",\"type\":\"integer\"},\"display\":{\"properties\":{\"downloaded\":{\"properties\":{\"limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Limit\",\"type\":\"string\"},\"percentage\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"},\"storage_used\":{\"properties\":{\"limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Limit\",\"type\":\"string\"},\"peak\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Peak\",\"type\":\"string\"},\"percentage\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"},\"uploaded\":{\"properties\":{\"limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Limit\",\"type\":\"string\"},\"percentage\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"downloaded\",\"storage_used\",\"uploaded\"],\"type\":\"object\"},\"end\":{\"format\":\"date-time\",\"title\":\"End\",\"type\":\"string\"},\"plan\":{\"maxLength\":64,\"minLength\":1,\"title\":\"Plan\",\"type\":\"string\"},\"raw\":{\"properties\":{\"downloaded\":{\"properties\":{\"limit\":{\"title\":\"Limit\",\"type\":\"integer\"},\"percentage\":{\"format\":\"decimal\",\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"},\"storage_used\":{\"properties\":{\"limit\":{\"title\":\"Limit\",\"type\":\"integer\"},\"peak\":{\"title\":\"Peak\",\"type\":\"integer\"},\"percentage\":{\"format\":\"decimal\",\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"},\"uploaded\":{\"properties\":{\"limit\":{\"title\":\"Limit\",\"type\":\"integer\"},\"percentage\":{\"format\":\"decimal\",\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"}},\"required\":[\"downloaded\",\"storage_used\",\"uploaded\"],\"type\":\"object\"},\"start\":{\"format\":\"date-time\",\"title\":\"Start\",\"type\":\"string\"}},\"required\":[\"display\",\"end\",\"plan\",\"raw\",\"start\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"history\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/quota/history/{owner}/","segments":[{"lit":"quota"},{"lit":"history"},{"var":"owner"}],"select":{"exist":["owner"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /quota/oss/history/{owner}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"quota_oss_history_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"history\":{\"items\":{\"properties\":{\"days\":{\"default\":0,\"title\":\"Days\",\"type\":\"integer\"},\"display\":{\"properties\":{\"downloaded\":{\"properties\":{\"limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Limit\",\"type\":\"string\"},\"percentage\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"},\"storage_used\":{\"properties\":{\"limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Limit\",\"type\":\"string\"},\"peak\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Peak\",\"type\":\"string\"},\"percentage\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"},\"uploaded\":{\"properties\":{\"limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Limit\",\"type\":\"string\"},\"percentage\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"downloaded\",\"storage_used\",\"uploaded\"],\"type\":\"object\"},\"end\":{\"format\":\"date-time\",\"title\":\"End\",\"type\":\"string\"},\"plan\":{\"maxLength\":64,\"minLength\":1,\"title\":\"Plan\",\"type\":\"string\"},\"raw\":{\"properties\":{\"downloaded\":{\"properties\":{\"limit\":{\"title\":\"Limit\",\"type\":\"integer\"},\"percentage\":{\"format\":\"decimal\",\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"},\"storage_used\":{\"properties\":{\"limit\":{\"title\":\"Limit\",\"type\":\"integer\"},\"peak\":{\"title\":\"Peak\",\"type\":\"integer\"},\"percentage\":{\"format\":\"decimal\",\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"},\"uploaded\":{\"properties\":{\"limit\":{\"title\":\"Limit\",\"type\":\"integer\"},\"percentage\":{\"format\":\"decimal\",\"title\":\"Percentage\",\"type\":\"string\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"}},\"required\":[\"downloaded\",\"storage_used\",\"uploaded\"],\"type\":\"object\"},\"start\":{\"format\":\"date-time\",\"title\":\"Start\",\"type\":\"string\"}},\"required\":[\"display\",\"end\",\"plan\",\"raw\",\"start\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"history\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/quota/oss/history/{owner}/","segments":[{"lit":"quota"},{"lit":"oss"},{"lit":"history"},{"var":"owner"}],"select":{"exist":["owner"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":2},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":0}]},"contract":{"id":"GET /quota/oss/{owner}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"quota_oss_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"usage\":{\"properties\":{\"display\":{\"properties\":{\"bandwidth\":{\"properties\":{\"configured\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Configured\",\"type\":\"string\"},\"percentage_used\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage used\",\"type\":\"string\"},\"plan_limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Plan limit\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"},\"storage\":{\"properties\":{\"configured\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Configured\",\"type\":\"string\"},\"peak\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Peak\",\"type\":\"string\"},\"percentage_used\":{\"maxLength\":10,\"minLength\":1,\"title\":\"Percentage used\",\"type\":\"string\"},\"plan_limit\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Plan limit\",\"type\":\"string\"},\"used\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Used\",\"type\":\"string\"}},\"type\":\"object\"}},\"required\":[\"bandwidth\",\"storage\"],\"type\":\"object\"},\"raw\":{\"properties\":{\"bandwidth\":{\"properties\":{\"configured\":{\"title\":\"Configured\",\"type\":\"integer\"},\"percentage_used\":{\"format\":\"decimal\",\"title\":\"Percentage used\",\"type\":\"string\"},\"plan_limit\":{\"title\":\"Plan limit\",\"type\":\"integer\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"},\"storage\":{\"properties\":{\"configured\":{\"title\":\"Configured\",\"type\":\"integer\"},\"peak\":{\"title\":\"Peak\",\"type\":\"integer\"},\"percentage_used\":{\"format\":\"decimal\",\"title\":\"Percentage used\",\"type\":\"string\"},\"plan_limit\":{\"title\":\"Plan limit\",\"type\":\"integer\"},\"used\":{\"title\":\"Used\",\"type\":\"integer\"}},\"type\":\"object\"}},\"required\":[\"bandwidth\",\"storage\"],\"type\":\"object\"}},\"required\":[\"display\",\"raw\"],\"type\":\"object\"}},\"required\":[\"usage\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/quota/oss/{owner}/","segments":[{"lit":"quota"},{"lit":"oss"},{"var":"owner"}],"select":{"exist":["owner"]},"transform":{"req":"`reqdata`","res":"`body.usage`"},"index$":3}],"key$":"load"}},"relations":{"ancestors":[["history"],["oss"]]},"key$":"quota","name__orig":"quota","Name":"Quota","name_":"quota","name-":"quota","NAME":"QUOTA","index$":76}, {"active":true,"entity":"quota","key$":"BasicQuotaFlow","kind":"basic","name":"BasicQuotaFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"quota_ref01","srcdatavar":"quota_ref01_data","suffix":"_dt0"},"match":{"id":"quota01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-quota_ref01"}}],"index$":0}]}, 'Quota')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let quota_ref01_data = Object.values(setup.data.existing.quota)[0] as any

    // LOAD
    const quota_ref01_ent = client.Quota()
    const quota_ref01_match_dt0: any = {}
    quota_ref01_match_dt0.id = quota_ref01_data.id
    const quota_ref01_data_dt0 = (await quota_ref01_ent.load(quota_ref01_match_dt0)).data()
    assert(quota_ref01_data_dt0.id === quota_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/quota/QuotaTestData.json')

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
    ['quota01','quota02','quota03','history01','history02','history03','oss01','oss02','oss03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_QUOTA_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_QUOTA_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_QUOTA_ENTID']
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
  
