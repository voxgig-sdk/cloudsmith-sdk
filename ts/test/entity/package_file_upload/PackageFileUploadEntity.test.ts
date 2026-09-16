

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


describe('PackageFileUploadEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.PackageFileUpload()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'package_file_upload.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[],"name":"package_file_upload","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"identifier","orig":"identifier","reqd":true,"type":"`$ANY`","index$":0},{"active":true,"kind":"param","name":"owner","orig":"owner","reqd":true,"type":"`$ANY`","index$":1},{"active":true,"kind":"param","name":"repo","orig":"repo","reqd":true,"type":"`$ANY`","index$":2}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /files/{owner}/{repo}/{identifier}/complete/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"files_complete\",\"parameters\":[{\"in\":\"path\",\"name\":\"owner\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"repo\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"identifier\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"filename\":{\"description\":\"Filename for the package file upload.\",\"minLength\":1,\"title\":\"Filename\",\"type\":\"string\"},\"md5_checksum\":{\"description\":\"MD5 checksum for a POST-based package file upload.\",\"maxLength\":32,\"minLength\":32,\"title\":\"Md5 checksum\",\"type\":\"string\"},\"method\":{\"default\":\"post\",\"description\":\"The method to use for package file upload.\",\"enum\":[\"put_parts\",\"put\",\"post\",\"presigned\",\"unsigned_put\"],\"title\":\"Method\",\"type\":\"string\"},\"sha256_checksum\":{\"description\":\"SHA256 checksum for a PUT-based package file upload.\",\"maxLength\":64,\"minLength\":64,\"title\":\"Sha256 checksum\",\"type\":\"string\"}},\"required\":[\"filename\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"201\":{\"description\":\"The multipart upload was completed successfully.\",\"schema\":{\"properties\":{\"identifier\":{\"description\":\"The identifier for the file to use when creating packages\",\"format\":\"uri\",\"minLength\":1,\"readOnly\":true,\"title\":\"Identifier\",\"type\":\"string\"},\"upload_fields\":{\"description\":\"The dictionary of fields that must be sent with POST uploads\",\"readOnly\":true,\"title\":\"Upload fields\",\"type\":\"object\"},\"upload_headers\":{\"description\":\"The dictionary of headers that must be sent with uploads\",\"readOnly\":true,\"title\":\"Upload headers\",\"type\":\"object\"},\"upload_querystring\":{\"description\":\"The querystring to use for the next-step POST or PUT upload\",\"minLength\":1,\"readOnly\":true,\"title\":\"Upload querystring\",\"type\":\"string\"},\"upload_url\":{\"description\":\"The URL to use for the next-step POST or PUT upload\",\"format\":\"uri\",\"minLength\":1,\"readOnly\":true,\"title\":\"Upload url\",\"type\":\"string\"}},\"type\":\"object\"}},\"400\":{\"description\":\"The multipart upload could not be completed.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Namespace (owner), repository or upload file not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/files/{owner}/{repo}/{identifier}/complete/","segments":[{"lit":"files"},{"var":"owner"},{"var":"repo"},{"var":"identifier"},{"lit":"complete"}],"select":{"exist":["data","identifier","owner","repo"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["file"]]},"key$":"package_file_upload","name__orig":"package_file_upload","Name":"PackageFileUpload","name_":"package_file_upload","name-":"package-file-upload","NAME":"PACKAGE_FILE_UPLOAD","index$":66}, {"active":true,"entity":"package_file_upload","key$":"BasicPackageFileUploadFlow","kind":"basic","name":"BasicPackageFileUploadFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"package_file_upload_ref01"},"match":{"identifier":"identifier01","owner":"owner01","repo":"repo01"},"op":"create","spec":[],"valid":[],"index$":0}]}, 'PackageFileUpload')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const package_file_upload_ref01_ent = client.PackageFileUpload()
    let package_file_upload_ref01_data = setup.data.new.package_file_upload['package_file_upload_ref01']
    package_file_upload_ref01_data['identifier'] = setup.idmap['identifier01']
    package_file_upload_ref01_data['owner'] = setup.idmap['owner01']
    package_file_upload_ref01_data['repo'] = setup.idmap['repo01']

    package_file_upload_ref01_data = (await package_file_upload_ref01_ent.create(package_file_upload_ref01_data)).data()
    assert(null != package_file_upload_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/package_file_upload/PackageFileUploadTestData.json')

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
    ['package_file_upload01','package_file_upload02','package_file_upload03','file01','file02','file03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_PACKAGE_FILE_UPLOAD_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_PACKAGE_FILE_UPLOAD_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_PACKAGE_FILE_UPLOAD_ENTID']
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
  
