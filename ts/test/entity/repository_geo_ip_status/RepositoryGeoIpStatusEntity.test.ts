

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"geoip_enabled","readOnly":true,"req":false,"short":"If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules.","type":"`$BOOLEAN`","index$":0}],"name":"repository_geo_ip_status","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"identifier","orig":"identifier","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /repos/{owner}/{identifier}/geoip/status/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"api_repos_geoip_status\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the GeoIP status for this repository.\",\"schema\":{\"properties\":{\"geoip_enabled\":{\"description\":\"If checked, any access to the website or downloads for this repository is allowed/denied according to the configured Geo/IP restriction rules.\",\"readOnly\":true,\"title\":\"Geo/IP Restriction Enabled?\",\"type\":\"boolean\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"Geo/IP restrictions are not available; upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Owner namespace or repository not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/repos/{owner}/{identifier}/geoip/status/","segments":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"geoip"},{"lit":"status"}],"select":{"exist":["identifier","owner"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["repo"]]},"key$":"repository_geo_ip_status","name__orig":"repository_geo_ip_status","Name":"RepositoryGeoIpStatus","name_":"repository_geo_ip_status","name-":"repository-geo-ip-status","NAME":"REPOSITORY_GEO_IP_STATUS","index$":84}, {"active":true,"entity":"repository_geo_ip_status","key$":"BasicRepositoryGeoIpStatusFlow","kind":"basic","name":"BasicRepositoryGeoIpStatusFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"repository_geo_ip_status_ref01","srcdatavar":"repository_geo_ip_status_ref01_data","suffix":"_dt0"},"match":{"id":"repository_geo_ip_status01","owner":"owner01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_geo_ip_status_ref01"}}],"index$":0}]}, 'RepositoryGeoIpStatus')
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
    ['repository_geo_ip_status01','repository_geo_ip_status02','repository_geo_ip_status03','repo01','repo02','repo03'],
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
  
