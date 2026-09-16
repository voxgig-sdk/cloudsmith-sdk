

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


describe('FormatEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Format()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'format.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"description","req":true,"short":"Description of the package format","type":"`$STRING`","index$":0},{"active":true,"name":"distributions","req":false,"short":"The distributions supported by this package format","type":"`$ARRAY`","index$":1},{"active":true,"name":"extensions","req":true,"short":"A non-exhaustive list of extensions supported","type":"`$ARRAY`","index$":2},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"name","req":true,"short":"Name for the package format","type":"`$STRING`","index$":4},{"active":true,"name":"premium","req":true,"short":"If true the package format is a premium-only feature","type":"`$BOOLEAN`","index$":5},{"active":true,"name":"premium_plan_id","req":false,"short":"The minimum plan id required for this package format","type":"`$STRING`","index$":6},{"active":true,"name":"premium_plan_name","req":false,"short":"The minimum plan name required for this package format","type":"`$STRING`","index$":7},{"active":true,"name":"slug","req":true,"short":"Slug for the package format","type":"`$STRING`","index$":8},{"active":true,"name":"supports","req":true,"short":"A set of what the package format supports","type":"`$OBJECT`","index$":9}],"id":{"field":"id","name":"id"},"name":"format","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /formats/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"formats_list\",\"parameters\":[],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Available package formats retrieved\",\"schema\":{\"items\":{\"properties\":{\"description\":{\"description\":\"Description of the package format\",\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"distributions\":{\"description\":\"The distributions supported by this package format\",\"items\":{\"description\":\"The distributions supported by this package format\",\"properties\":{\"name\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"self_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Self url\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug identifier for this distribution\",\"minLength\":1,\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"variants\":{\"maxLength\":128,\"title\":\"Variants\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"extensions\":{\"description\":\"A non-exhaustive list of extensions supported\",\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"Name for the package format\",\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"premium\":{\"description\":\"If true the package format is a premium-only feature\",\"title\":\"Premium\",\"type\":\"boolean\"},\"premium_plan_id\":{\"description\":\"The minimum plan id required for this package format\",\"minLength\":1,\"title\":\"Premium plan id\",\"type\":\"string\"},\"premium_plan_name\":{\"description\":\"The minimum plan name required for this package format\",\"minLength\":1,\"title\":\"Premium plan name\",\"type\":\"string\"},\"slug\":{\"description\":\"Slug for the package format\",\"minLength\":1,\"title\":\"Slug\",\"type\":\"string\"},\"supports\":{\"description\":\"A set of what the package format supports\",\"properties\":{\"dependencies\":{\"description\":\"If true the package format supports dependencies\",\"title\":\"Dependencies\",\"type\":\"boolean\"},\"distributions\":{\"description\":\"If true the package format supports distributions\",\"title\":\"Distributions\",\"type\":\"boolean\"},\"file_lists\":{\"description\":\"If true the package format supports file lists\",\"title\":\"File lists\",\"type\":\"boolean\"},\"metadata\":{\"description\":\"If true the package format supports metadata\",\"title\":\"Metadata\",\"type\":\"boolean\"},\"upstreams\":{\"description\":\"The upstream support for the package format\",\"properties\":{\"auth_modes\":{\"description\":\"The authentication modes supported by the upstream format\",\"items\":{\"default\":\"Username and Password\",\"enum\":[\"Username and Password\",\"Token\",\"Certificate and Key\"],\"type\":\"string\"},\"type\":\"array\"},\"caching\":{\"description\":\"If true the upstream format supports caching\",\"title\":\"Caching\",\"type\":\"boolean\"},\"indexing\":{\"description\":\"If true the upstream format supports indexing\",\"title\":\"Indexing\",\"type\":\"boolean\"},\"indexing_behavior\":{\"default\":\"Unsupported\",\"description\":\"The behavior of the upstream when indexing\",\"enum\":[\"Unsupported\",\"Ahead-of-time (static) indexing\",\"Just-in-time (dynamic) indexing\"],\"title\":\"Indexing behavior\",\"type\":\"string\"},\"proxying\":{\"description\":\"If true the upstream format supports proxying\",\"title\":\"Proxying\",\"type\":\"boolean\"},\"signature_verification\":{\"default\":\"Unsupported\",\"description\":\"The signature verification supported by the upstream format\",\"enum\":[\"Unsupported\",\"Repository Metadata\",\"Packages\",\"Repository Metadata and Packages\"],\"title\":\"Signature verification\",\"type\":\"string\"}},\"required\":[\"auth_modes\",\"caching\",\"indexing\",\"proxying\"],\"type\":\"object\"},\"versioning\":{\"description\":\"If true the package format supports versioning\",\"title\":\"Versioning\",\"type\":\"boolean\"}},\"required\":[\"dependencies\",\"distributions\",\"file_lists\",\"metadata\",\"upstreams\",\"versioning\"],\"type\":\"object\"}},\"required\":[\"description\",\"extensions\",\"name\",\"premium\",\"slug\",\"supports\"],\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/formats/","segments":[{"lit":"formats"}],"select":{},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"slug","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /formats/{slug}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"formats_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"slug\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"description\":{\"description\":\"Description of the package format\",\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"distributions\":{\"description\":\"The distributions supported by this package format\",\"items\":{\"description\":\"The distributions supported by this package format\",\"properties\":{\"name\":{\"maxLength\":32,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"self_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Self url\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug identifier for this distribution\",\"minLength\":1,\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"variants\":{\"maxLength\":128,\"title\":\"Variants\",\"type\":\"string\"}},\"required\":[\"name\"],\"type\":\"object\"},\"type\":\"array\"},\"extensions\":{\"description\":\"A non-exhaustive list of extensions supported\",\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"name\":{\"description\":\"Name for the package format\",\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"premium\":{\"description\":\"If true the package format is a premium-only feature\",\"title\":\"Premium\",\"type\":\"boolean\"},\"premium_plan_id\":{\"description\":\"The minimum plan id required for this package format\",\"minLength\":1,\"title\":\"Premium plan id\",\"type\":\"string\"},\"premium_plan_name\":{\"description\":\"The minimum plan name required for this package format\",\"minLength\":1,\"title\":\"Premium plan name\",\"type\":\"string\"},\"slug\":{\"description\":\"Slug for the package format\",\"minLength\":1,\"title\":\"Slug\",\"type\":\"string\"},\"supports\":{\"description\":\"A set of what the package format supports\",\"properties\":{\"dependencies\":{\"description\":\"If true the package format supports dependencies\",\"title\":\"Dependencies\",\"type\":\"boolean\"},\"distributions\":{\"description\":\"If true the package format supports distributions\",\"title\":\"Distributions\",\"type\":\"boolean\"},\"file_lists\":{\"description\":\"If true the package format supports file lists\",\"title\":\"File lists\",\"type\":\"boolean\"},\"metadata\":{\"description\":\"If true the package format supports metadata\",\"title\":\"Metadata\",\"type\":\"boolean\"},\"upstreams\":{\"description\":\"The upstream support for the package format\",\"properties\":{\"auth_modes\":{\"description\":\"The authentication modes supported by the upstream format\",\"items\":{\"default\":\"Username and Password\",\"enum\":[\"Username and Password\",\"Token\",\"Certificate and Key\"],\"type\":\"string\"},\"type\":\"array\"},\"caching\":{\"description\":\"If true the upstream format supports caching\",\"title\":\"Caching\",\"type\":\"boolean\"},\"indexing\":{\"description\":\"If true the upstream format supports indexing\",\"title\":\"Indexing\",\"type\":\"boolean\"},\"indexing_behavior\":{\"default\":\"Unsupported\",\"description\":\"The behavior of the upstream when indexing\",\"enum\":[\"Unsupported\",\"Ahead-of-time (static) indexing\",\"Just-in-time (dynamic) indexing\"],\"title\":\"Indexing behavior\",\"type\":\"string\"},\"proxying\":{\"description\":\"If true the upstream format supports proxying\",\"title\":\"Proxying\",\"type\":\"boolean\"},\"signature_verification\":{\"default\":\"Unsupported\",\"description\":\"The signature verification supported by the upstream format\",\"enum\":[\"Unsupported\",\"Repository Metadata\",\"Packages\",\"Repository Metadata and Packages\"],\"title\":\"Signature verification\",\"type\":\"string\"}},\"required\":[\"auth_modes\",\"caching\",\"indexing\",\"proxying\"],\"type\":\"object\"},\"versioning\":{\"description\":\"If true the package format supports versioning\",\"title\":\"Versioning\",\"type\":\"boolean\"}},\"required\":[\"dependencies\",\"distributions\",\"file_lists\",\"metadata\",\"upstreams\",\"versioning\"],\"type\":\"object\"}},\"required\":[\"description\",\"extensions\",\"name\",\"premium\",\"slug\",\"supports\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/formats/{slug}/","rename":{"param":{"slug":"id"}},"segments":[{"lit":"formats"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"format","name__orig":"format","Name":"Format","name_":"format","name-":"format","NAME":"FORMAT","index$":26}, {"active":true,"entity":"format","key$":"BasicFormatFlow","kind":"basic","name":"BasicFormatFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"format_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"format_ref01","srcdatavar":"format_ref01_data","suffix":"_dt0"},"match":{"id":"format01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-format_ref01"}}],"index$":1}]}, 'Format')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let format_ref01_data = Object.values(setup.data.existing.format)[0] as any

    // LIST
    const format_ref01_ent = client.Format()
    const format_ref01_match: any = {}

    const format_ref01_list = (await format_ref01_ent.list(format_ref01_match)).map((e: any) => e.data())


    // LOAD
    const format_ref01_match_dt0: any = {}
    format_ref01_match_dt0.id = format_ref01_data.id
    const format_ref01_data_dt0 = (await format_ref01_ent.load(format_ref01_match_dt0)).data()
    assert(format_ref01_data_dt0.id === format_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/format/FormatTestData.json')

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
    ['format01','format02','format03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_FORMAT_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_FORMAT_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_FORMAT_ENTID']
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
  
