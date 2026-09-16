

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"saml_auth_enabled","req":true,"type":"`$BOOLEAN`","index$":0},{"active":true,"name":"saml_auth_enforced","req":true,"type":"`$BOOLEAN`","index$":1},{"active":true,"name":"saml_metadata_inline","req":false,"short":"If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.","type":"`$STRING`","index$":2},{"active":true,"format":"uri","name":"saml_metadata_url","req":false,"short":"If configured, SAML metadata be retrieved from a remote URL.","type":"`$STRING`","index$":3}],"name":"organization_saml_auth","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /orgs/{org}/saml-authentication","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_saml-authentication_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the SAML Authentication settings.\",\"schema\":{\"properties\":{\"saml_auth_enabled\":{\"title\":\"Saml auth enabled\",\"type\":\"boolean\"},\"saml_auth_enforced\":{\"title\":\"Saml auth enforced\",\"type\":\"boolean\"},\"saml_metadata_inline\":{\"description\":\"If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.\",\"maxLength\":32000,\"title\":\"Inline SAML metadata\",\"type\":\"string\"},\"saml_metadata_url\":{\"description\":\"If configured, SAML metadata be retrieved from a remote URL.\",\"format\":\"uri\",\"maxLength\":254,\"title\":\"Saml metadata url\",\"type\":\"string\"}},\"required\":[\"saml_auth_enabled\",\"saml_auth_enforced\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"SAML Authentication is not available; please upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Organization not found.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/saml-authentication","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"saml-authentication"}],"select":{"exist":["org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PATCH /orgs/{org}/saml-authentication","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_saml-authentication_partial_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"saml_auth_enabled\":{\"title\":\"Saml auth enabled\",\"type\":\"boolean\"},\"saml_auth_enforced\":{\"title\":\"Saml auth enforced\",\"type\":\"boolean\"},\"saml_metadata_inline\":{\"description\":\"If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.\",\"maxLength\":32000,\"title\":\"Inline SAML metadata\",\"type\":\"string\"},\"saml_metadata_url\":{\"description\":\"If configured, SAML metadata be retrieved from a remote URL.\",\"format\":\"uri\",\"maxLength\":254,\"title\":\"Saml metadata url\",\"type\":\"string\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Updated the SAML Authentication settings.\",\"schema\":{\"properties\":{\"saml_auth_enabled\":{\"title\":\"Saml auth enabled\",\"type\":\"boolean\"},\"saml_auth_enforced\":{\"title\":\"Saml auth enforced\",\"type\":\"boolean\"},\"saml_metadata_inline\":{\"description\":\"If configured, SAML metadata will be used as entered instead of retrieved from a remote URL.\",\"maxLength\":32000,\"title\":\"Inline SAML metadata\",\"type\":\"string\"},\"saml_metadata_url\":{\"description\":\"If configured, SAML metadata be retrieved from a remote URL.\",\"format\":\"uri\",\"maxLength\":254,\"title\":\"Saml metadata url\",\"type\":\"string\"}},\"required\":[\"saml_auth_enabled\",\"saml_auth_enforced\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"402\":{\"description\":\"SAML Authentication is not available; please upgrade your account!\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Organization not found.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"PATCH","orig":"/orgs/{org}/saml-authentication","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"saml-authentication"}],"select":{"exist":["data","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["org"]]},"key$":"organization_saml_auth","name__orig":"organization_saml_auth","Name":"OrganizationSamlAuth","name_":"organization_saml_auth","name-":"organization-saml-auth","NAME":"ORGANIZATION_SAML_AUTH","index$":58}, {"active":true,"entity":"organization_saml_auth","key$":"BasicOrganizationSamlAuthFlow","kind":"basic","name":"BasicOrganizationSamlAuthFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"organization_saml_auth_ref01","srcdatavar":"organization_saml_auth_ref01_data","suffix":"_up0","textfield":"saml_metadata_inline"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_saml_auth_ref01"}}],"valid":[],"index$":0},{"active":true,"data":{},"input":{"ref":"organization_saml_auth_ref01","srcdatavar":"organization_saml_auth_ref01_data","suffix":"_dt0"},"match":{"id":"organization_saml_auth01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-organization_saml_auth_ref01"}}],"index$":1}]}, 'OrganizationSamlAuth')
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
  
