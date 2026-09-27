

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{},"name":"package_file_upload","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /files/{owner}/{repo}/{identifier}/complete/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":2}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/files/{owner}/{repo}/{identifier}/complete/","q":{"exist":["data","identifier","owner","repo"]},"r":{},"s":[{"lit":"files"},{"var":"owner"},{"var":"repo"},{"var":"identifier"},{"lit":"complete"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.file"]]},"key$":"package_file_upload","name__orig":"package_file_upload","Name":"PackageFileUpload","name_":"package_file_upload","name-":"package-file-upload","NAME":"PACKAGE_FILE_UPLOAD","index$":37}, {"active":true,"entity":"package_file_upload","key$":"BasicPackageFileUploadFlow","kind":"basic","name":"BasicPackageFileUploadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"package_file_upload_ref01"},"m":{"identifier":"identifier01","owner":"owner01","repo":"repo01"},"o":"create","s":[],"v":[],"index$":0}]}, 'PackageFileUpload', {"POST /files/{owner}/{repo}/{identifier}/complete/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"identifier","in":"path","required":true,"type":"string","index$":2},{"name":"data","in":"body","required":false,"schema":{"required":["filename"],"type":"object","properties":{"filename":{"title":"Filename","description":"Filename for the package file upload.","type":"string","minLength":1},"md5_checksum":{"title":"Md5 checksum","description":"MD5 checksum for a POST-based package file upload.","type":"string","maxLength":32,"minLength":32},"method":{"title":"Method","description":"The method to use for package file upload.","type":"string","enum":["put_parts","put","post","presigned","unsigned_put"],"default":"post"},"sha256_checksum":{"title":"Sha256 checksum","description":"SHA256 checksum for a PUT-based package file upload.","type":"string","maxLength":64,"minLength":64}},"x-ref":"#/definitions/PackageFileUploadRequest"},"index$":3}]}})
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
    ['package_file_upload01','package_file_upload02','package_file_upload03','file01','file02','file03','identifier01','owner01','repo01'],
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
  
