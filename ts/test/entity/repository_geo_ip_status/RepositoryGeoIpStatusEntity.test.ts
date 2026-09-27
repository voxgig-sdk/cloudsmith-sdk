

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


describe('RepositoryGeoIpStatusEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryGeoIpStatus()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_geo_ip_status.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"geoip_enabled":{"a":true,"h":"Geoip Enabled","n":"geoip_enabled","r":false,"ro":true,"sh":"If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules.","t":"`$BOOLEAN`","key$":"geoip_enabled","index$":0}},"name":"repository_geo_ip_status","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repos/{owner}/{identifier}/geoip/status/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/repos/{owner}/{identifier}/geoip/status/","q":{"exist":["identifier","owner"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"geoip"},{"lit":"status"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repo"]]},"key$":"repository_geo_ip_status","name__orig":"repository_geo_ip_status","Name":"RepositoryGeoIpStatus","name_":"repository_geo_ip_status","name-":"repository-geo-ip-status","NAME":"REPOSITORY_GEO_IP_STATUS","index$":49}, {"active":true,"entity":"repository_geo_ip_status","key$":"BasicRepositoryGeoIpStatusFlow","kind":"basic","name":"BasicRepositoryGeoIpStatusFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"repository_geo_ip_status_ref01","srcdatavar":"repository_geo_ip_status_ref01_data","suffix":"_dt0"},"m":{"id":"repository_geo_ip_status01","owner":"owner01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_geo_ip_status_ref01"}}],"index$":0}]}, 'RepositoryGeoIpStatus', {"GET /repos/{owner}/{identifier}/geoip/status/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"identifier","in":"path","required":true,"type":"string","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let repository_geo_ip_status_ref01_data = Object.values(setup.data.existing.repository_geo_ip_status)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const repository_geo_ip_status_ref01_ent = client.RepositoryGeoIpStatus()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_geo_ip_status/RepositoryGeoIpStatusTestData.json')

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
    ['repository_geo_ip_status01','repository_geo_ip_status02','repository_geo_ip_status03','repo01','repo02','repo03','owner01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_GEO_IP_STATUS_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_GEO_IP_STATUS_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_GEO_IP_STATUS_ENTID']
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
  
