

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


describe('OrganizationSamlAuthEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationSamlAuth()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'organization_saml_auth.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"saml_auth_enabled":{"a":true,"h":"Saml Auth Enabled","n":"saml_auth_enabled","r":true,"t":"`$BOOLEAN`","key$":"saml_auth_enabled","index$":0},"saml_auth_enforced":{"a":true,"h":"Saml Auth Enforced","n":"saml_auth_enforced","r":true,"t":"`$BOOLEAN`","key$":"saml_auth_enforced","index$":1},"saml_metadata_inline":{"a":true,"h":"Saml Metadata Inline","n":"saml_metadata_inline","r":false,"sh":"If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.","t":"`$STRING`","key$":"saml_metadata_inline","index$":2},"saml_metadata_url":{"a":true,"fo":"uri","h":"Saml Metadata Url","n":"saml_metadata_url","r":false,"sh":"If configured, SAML metadata be retrieved from a remote URL.","t":"`$STRING`","key$":"saml_metadata_url","index$":3}},"name":"organization_saml_auth","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /orgs/{org}/saml-authentication","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}]},"k":"http","m":"GET","o":"/orgs/{org}/saml-authentication","q":{"exist":["org_id"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"saml-authentication"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /orgs/{org}/saml-authentication","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"org_id","or":"org","r":true,"t":"`$STRING`","index$":0}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"PATCH","o":"/orgs/{org}/saml-authentication","q":{"exist":["data","org_id"]},"r":{"param":{"org":"org_id"}},"s":[{"lit":"orgs"},{"var":"org_id"},{"lit":"saml-authentication"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.org"]]},"key$":"organization_saml_auth","name__orig":"organization_saml_auth","Name":"OrganizationSamlAuth","name_":"organization_saml_auth","name-":"organization-saml-auth","NAME":"ORGANIZATION_SAML_AUTH","index$":31}, {"active":true,"entity":"organization_saml_auth","key$":"BasicOrganizationSamlAuthFlow","kind":"basic","name":"BasicOrganizationSamlAuthFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"organization_saml_auth_ref01","srcdatavar":"organization_saml_auth_ref01_data","suffix":"_up0","textfield":"saml_metadata_inline"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_saml_auth_ref01"}}],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"organization_saml_auth_ref01","srcdatavar":"organization_saml_auth_ref01_data","suffix":"_dt0"},"m":{"id":"organization_saml_auth01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_saml_auth_ref01"}}],"index$":1}]}, 'OrganizationSamlAuth', {"GET /orgs/{org}/saml-authentication":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0}]},"PATCH /orgs/{org}/saml-authentication":{"protocol":"http","parameters":[{"name":"org","in":"path","required":true,"type":"string","index$":0},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"saml_auth_enabled":{"title":"Saml auth enabled","type":"boolean"},"saml_auth_enforced":{"title":"Saml auth enforced","type":"boolean"},"saml_metadata_inline":{"title":"Inline SAML metadata","description":"If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.","type":"string","maxLength":32000},"saml_metadata_url":{"title":"Saml metadata url","description":"If configured, SAML metadata be retrieved from a remote URL.","type":"string","format":"uri","maxLength":254,"x-nullable":true}},"x-ref":"#/definitions/OrganizationSAMLAuthRequestPatch"},"index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let organization_saml_auth_ref01_data = Object.values(setup.data.existing.organization_saml_auth)[0] as any

    // UPDATE
    const organization_saml_auth_ref01_ent = client.OrganizationSamlAuth()
    const organization_saml_auth_ref01_data_up0: any = {}

    const organization_saml_auth_ref01_markdef_up0 = { name: 'saml_metadata_inline', value: 'Mark01-organization_saml_auth_ref01_' + setup.now }
    ;(organization_saml_auth_ref01_data_up0 as any)[organization_saml_auth_ref01_markdef_up0.name] = organization_saml_auth_ref01_markdef_up0.value

    const organization_saml_auth_ref01_resdata_up0 = (await organization_saml_auth_ref01_ent.update(organization_saml_auth_ref01_data_up0)).data()
    assert(null != organization_saml_auth_ref01_resdata_up0)

    assert((organization_saml_auth_ref01_resdata_up0 as any)[organization_saml_auth_ref01_markdef_up0.name] === organization_saml_auth_ref01_markdef_up0.value)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/organization_saml_auth/OrganizationSamlAuthTestData.json')

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
    ['organization_saml_auth01','organization_saml_auth02','organization_saml_auth03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_ORGANIZATION_SAML_AUTH_ENTID']
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
  
