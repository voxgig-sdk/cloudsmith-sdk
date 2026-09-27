

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


describe('DistributionFullEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.DistributionFull()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'distribution_full.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"format":{"a":true,"h":"Format","n":"format","r":false,"ro":true,"t":"`$STRING`","key$":"format","index$":0},"format_url":{"a":true,"fo":"uri","h":"Format Url","n":"format_url","r":false,"ro":true,"t":"`$STRING`","key$":"format_url","index$":1},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":2},"self_url":{"a":true,"fo":"uri","h":"Self Url","n":"self_url","r":false,"ro":true,"t":"`$STRING`","key$":"self_url","index$":3},"slug":{"a":true,"h":"Slug","n":"slug","r":false,"ro":true,"sh":"The slug identifier for this distribution","t":"`$STRING`","key$":"slug","index$":4},"variants":{"a":true,"h":"Variants","n":"variants","r":false,"t":"`$STRING`","key$":"variants","index$":5},"versions":{"a":true,"h":"Versions","n":"versions","r":false,"ro":true,"sh":"A list of the versions for this distribution","t":"`$ARRAY`","key$":"versions","index$":6}},"name":"distribution_full","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /distros/","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/distros/","q":{},"r":{},"s":[{"lit":"distros"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /distros/{slug}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"slug","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/distros/{slug}/","q":{"exist":["slug"]},"r":{},"s":[{"lit":"distros"},{"var":"slug"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"distribution_full","name__orig":"distribution_full","Name":"DistributionFull","name_":"distribution_full","name-":"distribution-full","NAME":"DISTRIBUTION_FULL","index$":6}, {"active":true,"entity":"distribution_full","key$":"BasicDistributionFullFlow","kind":"basic","name":"BasicDistributionFullFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"distribution_full_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"distribution_full_ref01","srcdatavar":"distribution_full_ref01_data","suffix":"_dt0"},"m":{"id":"distribution_full01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-distribution_full_ref01"}}],"index$":1}]}, 'DistributionFull', {"GET /distros/":{"protocol":"http","parameters":[]},"GET /distros/{slug}/":{"protocol":"http","parameters":[{"name":"slug","in":"path","required":true,"type":"string","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let distribution_full_ref01_data = Object.values(setup.data.existing.distribution_full)[0] as any

    // LIST
    const distribution_full_ref01_ent = client.DistributionFull()
    const distribution_full_ref01_match: any = {}

    const distribution_full_ref01_list = (await distribution_full_ref01_ent.list(distribution_full_ref01_match)).map((e: any) => e.data())



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/distribution_full/DistributionFullTestData.json')

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
    ['distribution_full01','distribution_full02','distribution_full03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_DISTRIBUTION_FULL_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_DISTRIBUTION_FULL_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_DISTRIBUTION_FULL_ENTID']
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
  
