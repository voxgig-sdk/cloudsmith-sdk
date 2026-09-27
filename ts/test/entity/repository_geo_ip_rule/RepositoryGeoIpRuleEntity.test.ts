

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"cidr":{"a":true,"h":"Cidr","n":"cidr","r":true,"t":"`$OBJECT`","key$":"cidr","index$":0},"country_code":{"a":true,"h":"Country Code","n":"country_code","r":true,"t":"`$OBJECT`","key$":"country_code","index$":1}},"name":"repository_geo_ip_rule","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repos/{owner}/{identifier}/geoip","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/repos/{owner}/{identifier}/geoip","q":{"exist":["identifier","owner"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"geoip"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"patch":{"input":"data","name":"patch","points":[{"a":true,"co":{"id":"PATCH /repos/{owner}/{identifier}/geoip","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/repos/{owner}/{identifier}/geoip","q":{"exist":["data","identifier","owner"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"geoip"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"patch"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PUT /repos/{owner}/{identifier}/geoip","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PUT","o":"/repos/{owner}/{identifier}/geoip","q":{"exist":["data","identifier","owner"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"geoip"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.repo"]]},"key$":"repository_geo_ip_rule","name__orig":"repository_geo_ip_rule","Name":"RepositoryGeoIpRule","name_":"repository_geo_ip_rule","name-":"repository-geo-ip-rule","NAME":"REPOSITORY_GEO_IP_RULE","index$":48}, {"active":true,"entity":"repository_geo_ip_rule","key$":"BasicRepositoryGeoIpRuleFlow","kind":"basic","name":"BasicRepositoryGeoIpRuleFlow","param":{},"step":[{"a":true,"d":{"owner":"owner01"},"i":{"ref":"repository_geo_ip_rule_ref01","srcdatavar":"repository_geo_ip_rule_ref01_data","suffix":"_up0"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_geo_ip_rule_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"repository_geo_ip_rule_ref01","srcdatavar":"repository_geo_ip_rule_ref01_data","suffix":"_dt0"},"m":{"id":"repository_geo_ip_rule01","owner":"owner01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_geo_ip_rule_ref01"}}],"index$":1}]}, 'RepositoryGeoIpRule', {"GET /repos/{owner}/{identifier}/geoip":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"identifier","in":"path","required":true,"type":"string","index$":1}]},"PATCH /repos/{owner}/{identifier}/geoip":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"identifier","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"cidr":{"required":["allow","deny"],"type":"object","properties":{"allow":{"description":"The allowed CIDRs for this repository","items":{"description":"The allowed CIDRs for this repository","type":"string"},"type":"array","uniqueItems":true},"deny":{"description":"The denied CIDRs for this repository","items":{"description":"The denied CIDRs for this repository","type":"string"},"type":"array","uniqueItems":true}},"x-ref":"#/definitions/RepositoryGeoIpCidr"},"country_code":{"required":["allow","deny"],"type":"object","properties":{"allow":{"description":"The allowed country codes for this repository","items":{"description":"The allowed country codes for this repository","type":"string"},"type":"array","uniqueItems":true},"deny":{"description":"The denied country codes for this repository","items":{"description":"The denied country codes for this repository","type":"string"},"type":"array","uniqueItems":true}},"x-ref":"#/definitions/RepositoryGeoIpCountryCode"}},"x-ref":"#/definitions/RepositoryGeoIpRulesRequestPatch"},"index$":2}]},"PUT /repos/{owner}/{identifier}/geoip":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"identifier","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"required":["cidr","country_code"],"type":"object","properties":{"cidr":{"required":["allow","deny"],"type":"object","properties":{"allow":{"description":"The allowed CIDRs for this repository","items":{"description":"The allowed CIDRs for this repository","type":"string"},"type":"array","uniqueItems":true},"deny":{"description":"The denied CIDRs for this repository","items":{"description":"The denied CIDRs for this repository","type":"string"},"type":"array","uniqueItems":true}},"x-ref":"#/definitions/RepositoryGeoIpCidr"},"country_code":{"required":["allow","deny"],"type":"object","properties":{"allow":{"description":"The allowed country codes for this repository","items":{"description":"The allowed country codes for this repository","type":"string"},"type":"array","uniqueItems":true},"deny":{"description":"The denied country codes for this repository","items":{"description":"The denied country codes for this repository","type":"string"},"type":"array","uniqueItems":true}},"x-ref":"#/definitions/RepositoryGeoIpCountryCode"}},"x-ref":"#/definitions/RepositoryGeoIpRulesRequest"},"index$":2}]}})
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
    ['repository_geo_ip_rule01','repository_geo_ip_rule02','repository_geo_ip_rule03','repo01','repo02','repo03','owner01'],
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
  
