

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


describe('PackageLicensePolicyEvaluationEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.PackageLicensePolicyEvaluation()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'package_license_policy_evaluation.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"allow_unknown_licenses","readOnly":true,"req":false,"type":"`$BOOLEAN`","index$":0},{"active":true,"format":"date-time","name":"created_at","readOnly":true,"req":false,"type":"`$STRING`","index$":1},{"active":true,"name":"description","readOnly":true,"req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"evaluation_count","readOnly":true,"req":false,"type":"`$INTEGER`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"name","readOnly":true,"req":false,"type":"`$STRING`","index$":5},{"active":true,"name":"on_violation_quarantine","readOnly":true,"req":false,"type":"`$BOOLEAN`","index$":6},{"active":true,"name":"package_query_string","readOnly":true,"req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"policy","req":true,"type":"`$OBJECT`","index$":8},{"active":true,"format":"slug","name":"slug_perm","readOnly":true,"req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"spdx_identifiers","req":true,"type":"`$ARRAY`","index$":10},{"active":true,"name":"status","readOnly":true,"req":false,"type":"`$STRING`","index$":11},{"active":true,"format":"date-time","name":"updated_at","readOnly":true,"req":false,"type":"`$STRING`","index$":12},{"active":true,"format":"uri","name":"url","readOnly":true,"req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"violation_count","readOnly":true,"req":false,"type":"`$INTEGER`","index$":14}],"id":{"field":"id","name":"id"},"name":"package_license_policy_evaluation","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"policy_slug_perm","orig":"policy_slug_perm","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /orgs/{org}/license-policy/{policy_slug_perm}/evaluation/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_license-policy_evaluation_create\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"policy_slug_perm\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"Created\",\"schema\":{\"properties\":{\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"evaluation_count\":{\"readOnly\":true,\"title\":\"Evaluation count\",\"type\":\"integer\"},\"policy\":{\"properties\":{\"allow_unknown_licenses\":{\"readOnly\":true,\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"description\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"readOnly\":true,\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Package query string\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Url\",\"type\":\"string\"}},\"required\":[\"spdx_identifiers\"],\"type\":\"object\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"status\":{\"default\":\"Pending\",\"enum\":[\"Pending\",\"In Progress\",\"Complete\",\"Cancelled\",\"Errored\"],\"readOnly\":true,\"title\":\"Status\",\"type\":\"string\"},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"},\"violation_count\":{\"readOnly\":true,\"title\":\"Violation count\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"license-policy"},{"var":"policy_slug_perm"},{"lit":"evaluation"}],"select":{"exist":["data","org_id","policy_slug_perm"]},"transform":{"req":"`reqdata`","res":"`body.policy`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"policy_slug_perm","orig":"policy_slug_perm","reqd":true,"type":"`$ANY`","index$":1}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /orgs/{org}/license-policy/{policy_slug_perm}/evaluation/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_license-policy_evaluation_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"policy_slug_perm\",\"required\":true,\"type\":\"string\"},{\"description\":\"A page number within the paginated result set.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Number of results to return per page.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"items\":{\"properties\":{\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"evaluation_count\":{\"readOnly\":true,\"title\":\"Evaluation count\",\"type\":\"integer\"},\"policy\":{\"properties\":{\"allow_unknown_licenses\":{\"readOnly\":true,\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"description\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"readOnly\":true,\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Package query string\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Url\",\"type\":\"string\"}},\"required\":[\"spdx_identifiers\"],\"type\":\"object\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"status\":{\"default\":\"Pending\",\"enum\":[\"Pending\",\"In Progress\",\"Complete\",\"Cancelled\",\"Errored\"],\"readOnly\":true,\"title\":\"Status\",\"type\":\"string\"},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"},\"violation_count\":{\"readOnly\":true,\"title\":\"Violation count\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"license-policy"},{"var":"policy_slug_perm"},{"lit":"evaluation"}],"select":{"exist":["org_id","page","page_size","policy_slug_perm"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"slug_perm","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"license_policy_id","orig":"policy_slug_perm","reqd":true,"type":"`$STRING`","index$":1},{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":2}]},"contract":{"id":"GET /orgs/{org}/license-policy/{policy_slug_perm}/evaluation/{slug_perm}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_license-policy_evaluation_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"policy_slug_perm\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"slug_perm\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"evaluation_count\":{\"readOnly\":true,\"title\":\"Evaluation count\",\"type\":\"integer\"},\"policy\":{\"properties\":{\"allow_unknown_licenses\":{\"readOnly\":true,\"title\":\"Allow unknown licenses\",\"type\":\"boolean\"},\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"description\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Name\",\"type\":\"string\"},\"on_violation_quarantine\":{\"readOnly\":true,\"title\":\"On violation quarantine\",\"type\":\"boolean\"},\"package_query_string\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Package query string\",\"type\":\"string\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"spdx_identifiers\":{\"items\":{\"type\":\"string\"},\"type\":\"array\",\"uniqueItems\":true},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"},\"url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Url\",\"type\":\"string\"}},\"required\":[\"spdx_identifiers\"],\"type\":\"object\"},\"slug_perm\":{\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug perm\",\"type\":\"string\"},\"status\":{\"default\":\"Pending\",\"enum\":[\"Pending\",\"In Progress\",\"Complete\",\"Cancelled\",\"Errored\"],\"readOnly\":true,\"title\":\"Status\",\"type\":\"string\"},\"updated_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Updated at\",\"type\":\"string\"},\"violation_count\":{\"readOnly\":true,\"title\":\"Violation count\",\"type\":\"integer\"}},\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/license-policy/{policy_slug_perm}/evaluation/{slug_perm}/","rename":{"param":{"org":"org_id","policy_slug_perm":"license_policy_id","slug_perm":"id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"license-policy"},{"var":"license_policy_id"},{"lit":"evaluation"},{"var":"id"}],"select":{"exist":["id","license_policy_id","org_id"]},"transform":{"req":"`reqdata`","res":"`body.policy`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["org","license_policy"]]},"key$":"package_license_policy_evaluation","name__orig":"package_license_policy_evaluation","Name":"PackageLicensePolicyEvaluation","name_":"package_license_policy_evaluation","name-":"package-license-policy-evaluation","NAME":"PACKAGE_LICENSE_POLICY_EVALUATION","index$":67}, {"active":true,"entity":"package_license_policy_evaluation","key$":"BasicPackageLicensePolicyEvaluationFlow","kind":"basic","name":"BasicPackageLicensePolicyEvaluationFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"package_license_policy_evaluation_ref01"},"match":{"license_policy_id":"license_policy01","org_id":"org01","policy_slug_perm":"policy_slug_perm01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"org_id":"org01","policy_slug_perm":"policy_slug_perm01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"package_license_policy_evaluation_ref01"}}],"index$":1},{"active":true,"data":{},"input":{"ref":"package_license_policy_evaluation_ref01","srcdatavar":"package_license_policy_evaluation_ref01_data","suffix":"_dt0"},"match":{"id":"package_license_policy_evaluation01","license_policy_id":"license_policy01","org_id":"org01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-package_license_policy_evaluation_ref01"}}],"index$":2}]}, 'PackageLicensePolicyEvaluation')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const package_license_policy_evaluation_ref01_ent = client.PackageLicensePolicyEvaluation()
    let package_license_policy_evaluation_ref01_data = setup.data.new.package_license_policy_evaluation['package_license_policy_evaluation_ref01']
    package_license_policy_evaluation_ref01_data['license_policy_id'] = setup.idmap['license_policy01']
    package_license_policy_evaluation_ref01_data['org_id'] = setup.idmap['org01']
    package_license_policy_evaluation_ref01_data['policy_slug_perm'] = setup.idmap['policy_slug_perm01']

    package_license_policy_evaluation_ref01_data = (await package_license_policy_evaluation_ref01_ent.create(package_license_policy_evaluation_ref01_data)).data()
    assert(null != package_license_policy_evaluation_ref01_data.id)


    // LIST
    const package_license_policy_evaluation_ref01_match: any = {}
    package_license_policy_evaluation_ref01_match['org_id'] = setup.idmap['org01']
    package_license_policy_evaluation_ref01_match['policy_slug_perm'] = setup.idmap['policy_slug_perm01']

    const package_license_policy_evaluation_ref01_list = (await package_license_policy_evaluation_ref01_ent.list(package_license_policy_evaluation_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(package_license_policy_evaluation_ref01_list, { id: package_license_policy_evaluation_ref01_data.id })))


    // LOAD
    const package_license_policy_evaluation_ref01_match_dt0: any = {}
    package_license_policy_evaluation_ref01_match_dt0.id = package_license_policy_evaluation_ref01_data.id
    const package_license_policy_evaluation_ref01_data_dt0 = (await package_license_policy_evaluation_ref01_ent.load(package_license_policy_evaluation_ref01_match_dt0)).data()
    assert(package_license_policy_evaluation_ref01_data_dt0.id === package_license_policy_evaluation_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/package_license_policy_evaluation/PackageLicensePolicyEvaluationTestData.json')

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
    ['package_license_policy_evaluation01','package_license_policy_evaluation02','package_license_policy_evaluation03','org01','org02','org03','license_policy01','license_policy02','license_policy03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID']
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
  
