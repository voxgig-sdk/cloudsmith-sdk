

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


describe('StorageRegionEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.StorageRegion()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'storage_region.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":0},"label":{"a":true,"h":"Label","n":"label","r":true,"sh":"Name of the storage region","t":"`$STRING`","key$":"label","index$":1},"slug":{"a":true,"h":"Slug","n":"slug","r":true,"sh":"Slug for the storage region","t":"`$STRING`","key$":"slug","index$":2}},"id":{"field":"id","name":"id"},"name":"storage_region","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /storage-regions/","source":"swagger2","version":2},"g":{},"k":"http","m":"GET","o":"/storage-regions/","q":{},"r":{},"s":[{"lit":"storage-regions"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /storage-regions/{slug}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"id","or":"slug","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/storage-regions/{slug}/","q":{"exist":["id"]},"r":{"param":{"slug":"id"}},"s":[{"lit":"storage-regions"},{"var":"id"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"storage_region","name__orig":"storage_region","Name":"StorageRegion","name_":"storage_region","name-":"storage-region","NAME":"STORAGE_REGION","index$":66}, {"active":true,"entity":"storage_region","key$":"BasicStorageRegionFlow","kind":"basic","name":"BasicStorageRegionFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"storage_region_ref01"}}],"index$":0},{"a":true,"d":{},"i":{"ref":"storage_region_ref01","srcdatavar":"storage_region_ref01_data","suffix":"_dt0"},"m":{"id":"storage_region01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-storage_region_ref01"}}],"index$":1}]}, 'StorageRegion', {"GET /storage-regions/":{"protocol":"http","parameters":[]},"GET /storage-regions/{slug}/":{"protocol":"http","parameters":[{"name":"slug","in":"path","required":true,"type":"string","index$":0}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let storage_region_ref01_data = Object.values(setup.data.existing.storage_region)[0] as any

    // LIST
    const storage_region_ref01_ent = client.StorageRegion()
    const storage_region_ref01_match: any = {}

    const storage_region_ref01_list = (await storage_region_ref01_ent.list(storage_region_ref01_match)).map((e: any) => e.data())


    // LOAD
    const storage_region_ref01_match_dt0: any = {}
    storage_region_ref01_match_dt0.id = storage_region_ref01_data.id
    const storage_region_ref01_data_dt0 = (await storage_region_ref01_ent.load(storage_region_ref01_match_dt0)).data()
    assert(storage_region_ref01_data_dt0.id === storage_region_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/storage_region/StorageRegionTestData.json')

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
    ['storage_region01','storage_region02','storage_region03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_STORAGE_REGION_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_STORAGE_REGION_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_STORAGE_REGION_ENTID']
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
  
