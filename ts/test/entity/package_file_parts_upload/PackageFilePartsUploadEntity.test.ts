

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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"identifier":{"a":true,"fo":"uri","h":"Identifier","n":"identifier","r":false,"ro":true,"sh":"The identifier for the file to use uploading parts.","t":"`$STRING`","key$":"identifier","index$":0},"upload_querystring":{"a":true,"h":"Upload Querystring","n":"upload_querystring","r":false,"ro":true,"sh":"The querystring to use for the next-step PUT upload.","t":"`$STRING`","key$":"upload_querystring","index$":1},"upload_url":{"a":true,"fo":"uri","h":"Upload Url","n":"upload_url","r":false,"ro":true,"sh":"The URL to use for the next-step PUT upload","t":"`$STRING`","key$":"upload_url","index$":2}},"name":"package_file_parts_upload","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /files/{owner}/{repo}/{identifier}/info/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":2}],"query":[{"a":true,"k":"query","n":"filename","or":"filename","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"part_number","or":"part_number","r":false,"t":"`$INTEGER`","index$":1}]},"k":"http","m":"GET","o":"/files/{owner}/{repo}/{identifier}/info/","q":{"exist":["filename","identifier","owner","part_number","repo"]},"r":{},"s":[{"lit":"files"},{"var":"owner"},{"var":"repo"},{"var":"identifier"},{"lit":"info"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.file"]]},"key$":"package_file_parts_upload","name__orig":"package_file_parts_upload","Name":"PackageFilePartsUpload","name_":"package_file_parts_upload","name-":"package-file-parts-upload","NAME":"PACKAGE_FILE_PARTS_UPLOAD","index$":36}, {"active":true,"entity":"package_file_parts_upload","key$":"BasicPackageFilePartsUploadFlow","kind":"basic","name":"BasicPackageFilePartsUploadFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"package_file_parts_upload_ref01","srcdatavar":"package_file_parts_upload_ref01_data","suffix":"_dt0"},"m":{"id":"package_file_parts_upload01","owner":"owner01","repo":"repo01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-package_file_parts_upload_ref01"}}],"index$":0}]}, 'PackageFilePartsUpload', {"GET /files/{owner}/{repo}/{identifier}/info/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"identifier","in":"path","required":true,"type":"string","index$":2},{"name":"filename","in":"query","description":"The filename of the file being uploaded","required":true,"type":"string","index$":3},{"name":"part_number","in":"query","description":"The part number to be uploaded next","required":false,"type":"integer","index$":4}]}})
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
    ['package_file_parts_upload01','package_file_parts_upload02','package_file_parts_upload03','file01','file02','file03','owner01','repo01'],
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
  
