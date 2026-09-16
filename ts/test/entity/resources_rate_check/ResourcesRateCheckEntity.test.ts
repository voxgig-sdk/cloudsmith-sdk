

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


describe('ResourcesRateCheckEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.ResourcesRateCheck()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'resources_rate_check.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"interval","readOnly":true,"req":false,"short":"The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window.","type":"`$NUMBER`","index$":0},{"active":true,"name":"limit","readOnly":true,"req":false,"short":"The maximum number of requests that you are permitted to send per hour","type":"`$INTEGER`","index$":1},{"active":true,"name":"remaining","readOnly":true,"req":false,"short":"The number of requests that are remaining in the current rate limit window","type":"`$INTEGER`","index$":2},{"active":true,"name":"reset","readOnly":true,"req":false,"short":"The UTC epoch timestamp at which the current rate limit window will reset","type":"`$INTEGER`","index$":3},{"active":true,"name":"reset_iso_8601","readOnly":true,"req":false,"short":"The ISO 8601 datetime at which the current rate limit window will reset","type":"`$STRING`","index$":4},{"active":true,"name":"throttled","readOnly":true,"req":false,"short":"If true, throttling is currently being enforced.","type":"`$BOOLEAN`","index$":5}],"name":"resources_rate_check","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{},"contract":{"id":"GET /rates/limits/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"rates_limits_list\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Rate check was successful\",\"schema\":{\"properties\":{\"resources\":{\"additionalProperties\":{\"properties\":{\"interval\":{\"description\":\"The time in seconds that you are suggested to wait until the next request in order to avoid consuming too much within the rate limit window.\",\"readOnly\":true,\"title\":\"Interval\",\"type\":\"number\"},\"limit\":{\"description\":\"The maximum number of requests that you are permitted to send per hour\",\"readOnly\":true,\"title\":\"Limit\",\"type\":\"integer\"},\"remaining\":{\"description\":\"The number of requests that are remaining in the current rate limit window\",\"readOnly\":true,\"title\":\"Remaining\",\"type\":\"integer\"},\"reset\":{\"description\":\"The UTC epoch timestamp at which the current rate limit window will reset\",\"readOnly\":true,\"title\":\"Reset\",\"type\":\"integer\"},\"reset_iso_8601\":{\"description\":\"The ISO 8601 datetime at which the current rate limit window will reset\",\"minLength\":1,\"readOnly\":true,\"title\":\"Reset iso 8601\",\"type\":\"string\"},\"throttled\":{\"description\":\"If true, throttling is currently being enforced.\",\"readOnly\":true,\"title\":\"Throttled\",\"type\":\"boolean\"}},\"type\":\"object\"},\"description\":\"Rate limit values per resource\",\"readOnly\":true,\"title\":\"Resources\",\"type\":\"object\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/rates/limits/","segments":[{"lit":"rates"},{"lit":"limits"}],"select":{},"transform":{"req":"`reqdata`","res":"`body.resources`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"resources_rate_check","name__orig":"resources_rate_check","Name":"ResourcesRateCheck","name_":"resources_rate_check","name-":"resources-rate-check","NAME":"RESOURCES_RATE_CHECK","index$":97}, {"active":true,"entity":"resources_rate_check","key$":"BasicResourcesRateCheckFlow","kind":"basic","name":"BasicResourcesRateCheckFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"resources_rate_check_ref01","srcdatavar":"resources_rate_check_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-resources_rate_check_ref01"}}],"index$":0}]}, 'ResourcesRateCheck')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let resources_rate_check_ref01_data = Object.values(setup.data.existing.resources_rate_check)[0] as any

    // LOAD
    const resources_rate_check_ref01_ent = client.ResourcesRateCheck()
    const resources_rate_check_ref01_match_dt0: any = {}
    const resources_rate_check_ref01_data_dt0 = (await resources_rate_check_ref01_ent.load(resources_rate_check_ref01_match_dt0)).data()
    assert(null != resources_rate_check_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/resources_rate_check/ResourcesRateCheckTestData.json')

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
    ['resources_rate_check01','resources_rate_check02','resources_rate_check03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_RESOURCES_RATE_CHECK_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_RESOURCES_RATE_CHECK_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_RESOURCES_RATE_CHECK_ENTID']
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
  
