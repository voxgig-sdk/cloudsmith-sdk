

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"display":{"a":true,"h":"Display","n":"display","r":true,"t":"`$OBJECT`","key$":"display","index$":0},"history":{"a":true,"h":"History","n":"history","r":true,"t":"`$ARRAY`","key$":"history","index$":1},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":2},"raw":{"a":true,"h":"Raw","n":"raw","r":true,"t":"`$OBJECT`","key$":"raw","index$":3}},"id":{"field":"id","name":"id"},"name":"quota","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /quota/{owner}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"owner","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/quota/{owner}/","q":{"exist":["id"]},"r":{"param":{"owner":"id"}},"s":[{"lit":"quota"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body.usage`"},"index$":0},{"a":true,"co":{"id":"GET /quota/history/{owner}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/quota/history/{owner}/","q":{"exist":["owner"]},"r":{},"s":[{"lit":"quota"},{"lit":"history"},{"var":"owner"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1},{"a":true,"co":{"id":"GET /quota/oss/history/{owner}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/quota/oss/history/{owner}/","q":{"exist":["owner"]},"r":{},"s":[{"lit":"quota"},{"lit":"oss"},{"lit":"history"},{"var":"owner"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":2},{"a":true,"co":{"id":"GET /quota/oss/{owner}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":0}]},"k":"http","m":"GET","o":"/quota/oss/{owner}/","q":{"exist":["owner"]},"r":{},"s":[{"lit":"quota"},{"lit":"oss"},{"var":"owner"}],"t":{"req":"`reqdata`","res":"`body.usage`"},"index$":3}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"quota","name__orig":"quota","Name":"Quota","name_":"quota","name-":"quota","NAME":"QUOTA","index$":44}, {"active":true,"entity":"quota","key$":"BasicQuotaFlow","kind":"basic","name":"BasicQuotaFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"quota_ref01","srcdatavar":"quota_ref01_data","suffix":"_dt0"},"m":{"id":"quota01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-quota_ref01"}}],"index$":0}]}, 'Quota', {"GET /quota/{owner}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0}]},"GET /quota/history/{owner}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0}]},"GET /quota/oss/history/{owner}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0}]},"GET /quota/oss/{owner}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0}]}})
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
    ['quota01','quota02','quota03'],
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
  
