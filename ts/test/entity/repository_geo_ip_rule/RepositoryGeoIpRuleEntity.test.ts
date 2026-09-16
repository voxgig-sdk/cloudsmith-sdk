

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


describe('RepositoryGeoIpRuleEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryGeoIpRule()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_geo_ip_rule.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"cidr","req":true,"type":"`$OBJECT`","index$":0},{"active":true,"name":"country_code","req":true,"type":"`$OBJECT`","index$":1}],"name":"repository_geo_ip_rule","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"identifier","orig":"identifier","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":1}]},"contract":{"id":"GET /repos/{owner}/{identifier}/geoip","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"repos_geoip_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"cidr\":{\"properties\":{\"allow\":{\"description\":\"The allowed CIDRs for this repository\",\"items\":{\"description\":\"The allowed CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied CIDRs for this repository\",\"items\":{\"description\":\"The denied CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"},\"country_code\":{\"properties\":{\"allow\":{\"description\":\"The allowed country codes for this repository\",\"items\":{\"description\":\"The allowed country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied country codes for this repository\",\"items\":{\"description\":\"The denied country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"}},\"required\":[\"cidr\",\"country_code\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"Geo/IP restrictions are not available; upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Owner namespace or repository not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/repos/{owner}/{identifier}/geoip","segments":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"geoip"}],"select":{"exist":["identifier","owner"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"identifier","orig":"identifier","reqd":true,"type":"`$ANY`"},{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`"}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`"}]},"contract":{"id":"PATCH /repos/{owner}/{identifier}/geoip","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"repos_geoip_partial_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"cidr\":{\"properties\":{\"allow\":{\"description\":\"The allowed CIDRs for this repository\",\"items\":{\"description\":\"The allowed CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied CIDRs for this repository\",\"items\":{\"description\":\"The denied CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"},\"country_code\":{\"properties\":{\"allow\":{\"description\":\"The allowed country codes for this repository\",\"items\":{\"description\":\"The allowed country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied country codes for this repository\",\"items\":{\"description\":\"The denied country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"cidr\":{\"properties\":{\"allow\":{\"description\":\"The allowed CIDRs for this repository\",\"items\":{\"description\":\"The allowed CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied CIDRs for this repository\",\"items\":{\"description\":\"The denied CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"},\"country_code\":{\"properties\":{\"allow\":{\"description\":\"The allowed country codes for this repository\",\"items\":{\"description\":\"The allowed country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied country codes for this repository\",\"items\":{\"description\":\"The denied country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"}},\"required\":[\"cidr\",\"country_code\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"Geo/IP restrictions are not available; upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Owner namespace or repository not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"PATCH","orig":"/repos/{owner}/{identifier}/geoip","segments":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"geoip"}],"select":{"exist":["data","identifier","owner"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"identifier","orig":"identifier","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PUT /repos/{owner}/{identifier}/geoip","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"repos_geoip_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"cidr\":{\"properties\":{\"allow\":{\"description\":\"The allowed CIDRs for this repository\",\"items\":{\"description\":\"The allowed CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied CIDRs for this repository\",\"items\":{\"description\":\"The denied CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"},\"country_code\":{\"properties\":{\"allow\":{\"description\":\"The allowed country codes for this repository\",\"items\":{\"description\":\"The allowed country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied country codes for this repository\",\"items\":{\"description\":\"The denied country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"}},\"required\":[\"cidr\",\"country_code\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"cidr\":{\"properties\":{\"allow\":{\"description\":\"The allowed CIDRs for this repository\",\"items\":{\"description\":\"The allowed CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied CIDRs for this repository\",\"items\":{\"description\":\"The denied CIDRs for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"},\"country_code\":{\"properties\":{\"allow\":{\"description\":\"The allowed country codes for this repository\",\"items\":{\"description\":\"The allowed country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"deny\":{\"description\":\"The denied country codes for this repository\",\"items\":{\"description\":\"The denied country codes for this repository\",\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true}},\"required\":[\"allow\",\"deny\"],\"type\":\"object\"}},\"required\":[\"cidr\",\"country_code\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"Geo/IP restrictions are not available; upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Owner namespace or repository not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"PUT","orig":"/repos/{owner}/{identifier}/geoip","segments":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"geoip"}],"select":{"exist":["data","identifier","owner"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["repo"]]},"key$":"repository_geo_ip_rule","name__orig":"repository_geo_ip_rule","Name":"RepositoryGeoIpRule","name_":"repository_geo_ip_rule","name-":"repository-geo-ip-rule","NAME":"REPOSITORY_GEO_IP_RULE","index$":83}, {"active":true,"entity":"repository_geo_ip_rule","key$":"BasicRepositoryGeoIpRuleFlow","kind":"basic","name":"BasicRepositoryGeoIpRuleFlow","param":{},"step":[{"active":true,"data":{"owner":"owner01"},"input":{"ref":"repository_geo_ip_rule_ref01","srcdatavar":"repository_geo_ip_rule_ref01_data","suffix":"_up0"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_geo_ip_rule_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"repository_geo_ip_rule_ref01","srcdatavar":"repository_geo_ip_rule_ref01_data","suffix":"_dt0"},"match":{"id":"repository_geo_ip_rule01","owner":"owner01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_geo_ip_rule_ref01"}}],"index$":1}]}, 'RepositoryGeoIpRule')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let repository_geo_ip_rule_ref01_data = Object.values(setup.data.existing.repository_geo_ip_rule)[0] as any

    // UPDATE
    const repository_geo_ip_rule_ref01_ent = client.RepositoryGeoIpRule()
    const repository_geo_ip_rule_ref01_data_up0: any = {}
    repository_geo_ip_rule_ref01_data_up0 ['owner'] = setup.idmap['owner']

    const repository_geo_ip_rule_ref01_resdata_up0 = (await repository_geo_ip_rule_ref01_ent.update(repository_geo_ip_rule_ref01_data_up0)).data()
    assert(null != repository_geo_ip_rule_ref01_resdata_up0)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_geo_ip_rule/RepositoryGeoIpRuleTestData.json')

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
    ['repository_geo_ip_rule01','repository_geo_ip_rule02','repository_geo_ip_rule03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_GEO_IP_RULE_ENTID']
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
  
