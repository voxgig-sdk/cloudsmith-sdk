

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


describe('PackageFilePartsUploadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.PackageFilePartsUpload()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'package_file_parts_upload.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"uri","name":"identifier","readOnly":true,"req":false,"short":"The identifier for the file to use uploading parts.","type":"`$STRING`","index$":0},{"active":true,"name":"upload_querystring","readOnly":true,"req":false,"short":"The querystring to use for the next-step PUT upload.","type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"upload_url","readOnly":true,"req":false,"short":"The URL to use for the next-step PUT upload","type":"`$STRING`","index$":2}],"name":"package_file_parts_upload","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"identifier","orig":"identifier","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"param","name":"repo","orig":"repo","reqd":true,"type":"`$ANY`","index$":2}],"query":[{"active":true,"kind":"query","name":"filename","orig":"filename","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"query","name":"part_number","orig":"part_number","reqd":false,"type":"`$INTEGER`","index$":1}]},"contract":{"id":"GET /files/{owner}/{repo}/{identifier}/info/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"files_info\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"repo\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"},{\"description\":\"The filename of the file being uploaded\",\"in\":\"query\",\"name\":\"filename\",\"required\":true,\"type\":\"string\"},{\"description\":\"The part number to be uploaded next\",\"in\":\"query\",\"name\":\"part_number\",\"required\":false,\"type\":\"integer\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Information for multipart uploaded retrieved successfully.\",\"schema\":{\"properties\":{\"identifier\":{\"description\":\"The identifier for the file to use uploading parts.\",\"format\":\"uri\",\"minLength\":1,\"readOnly\":true,\"title\":\"Identifier\",\"type\":\"string\"},\"upload_querystring\":{\"description\":\"The querystring to use for the next-step PUT upload.\",\"minLength\":1,\"readOnly\":true,\"title\":\"Upload querystring\",\"type\":\"string\"},\"upload_url\":{\"description\":\"The URL to use for the next-step PUT upload\",\"format\":\"uri\",\"minLength\":1,\"readOnly\":true,\"title\":\"Upload url\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"The provided upload file was not a multipart upload.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Namespace (owner), repository or upload file not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/files/{owner}/{repo}/{identifier}/info/","segments":[{"lit":"files"},{"var":"owner"},{"var":"repo"},{"var":"identifier"},{"lit":"info"}],"select":{"exist":["filename","identifier","owner","part_number","repo"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["file"]]},"key$":"package_file_parts_upload","name__orig":"package_file_parts_upload","Name":"PackageFilePartsUpload","name_":"package_file_parts_upload","name-":"package-file-parts-upload","NAME":"PACKAGE_FILE_PARTS_UPLOAD","index$":65}, {"active":true,"entity":"package_file_parts_upload","key$":"BasicPackageFilePartsUploadFlow","kind":"basic","name":"BasicPackageFilePartsUploadFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"package_file_parts_upload_ref01","srcdatavar":"package_file_parts_upload_ref01_data","suffix":"_dt0"},"match":{"id":"package_file_parts_upload01","owner":"owner01","repo":"repo01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-package_file_parts_upload_ref01"}}],"index$":0}]}, 'PackageFilePartsUpload')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let package_file_parts_upload_ref01_data = Object.values(setup.data.existing.package_file_parts_upload)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const package_file_parts_upload_ref01_ent = client.PackageFilePartsUpload()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/package_file_parts_upload/PackageFilePartsUploadTestData.json')

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
    ['package_file_parts_upload01','package_file_parts_upload02','package_file_parts_upload03','file01','file02','file03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_PACKAGE_FILE_PARTS_UPLOAD_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_PACKAGE_FILE_PARTS_UPLOAD_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_PACKAGE_FILE_PARTS_UPLOAD_ENTID']
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
  
