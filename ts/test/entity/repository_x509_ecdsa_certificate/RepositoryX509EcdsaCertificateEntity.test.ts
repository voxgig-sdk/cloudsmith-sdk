

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


describe('RepositoryX509EcdsaCertificateEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryX509EcdsaCertificate()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_x509_ecdsa_certificate.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"ro":true,"sh":"If selected this is the active key for this repository.","t":"`$BOOLEAN`","key$":"active","index$":0},"certificate":{"a":true,"h":"Certificate","n":"certificate","r":false,"ro":true,"sh":"The issued certificate.","t":"`$STRING`","key$":"certificate","index$":1},"certificate_chain":{"a":true,"h":"Certificate Chain","n":"certificate_chain","r":false,"ro":true,"sh":"Base64 encoded CA certificate chain.","t":"`$STRING`","key$":"certificate_chain","index$":2},"certificate_chain_fingerprint":{"a":true,"h":"Certificate Chain Fingerprint","n":"certificate_chain_fingerprint","r":false,"ro":true,"t":"`$STRING`","key$":"certificate_chain_fingerprint","index$":3},"certificate_chain_fingerprint_short":{"a":true,"h":"Certificate Chain Fingerprint Short","n":"certificate_chain_fingerprint_short","r":false,"ro":true,"t":"`$STRING`","key$":"certificate_chain_fingerprint_short","index$":4},"certificate_fingerprint":{"a":true,"h":"Certificate Fingerprint","n":"certificate_fingerprint","r":false,"ro":true,"sh":"The SHA-256 long identifier used","t":"`$STRING`","key$":"certificate_fingerprint","index$":5},"certificate_fingerprint_short":{"a":true,"h":"Certificate Fingerprint Short","n":"certificate_fingerprint_short","r":false,"ro":true,"t":"`$STRING`","key$":"certificate_fingerprint_short","index$":6},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"ro":true,"t":"`$STRING`","key$":"created_at","index$":7},"default":{"a":true,"h":"Default","n":"default","r":false,"ro":true,"sh":"If selected this is the default key for this repository.","t":"`$BOOLEAN`","key$":"default","index$":8},"issuing_status":{"a":true,"h":"Issuing Status","n":"issuing_status","r":false,"t":"`$STRING`","key$":"issuing_status","index$":9}},"name":"repository_x509_ecdsa_certificate","op":{"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repos/{owner}/{identifier}/x509-ecdsa/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/repos/{owner}/{identifier}/x509-ecdsa/","q":{"exist":["identifier","owner"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"x509-ecdsa"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repo"]]},"key$":"repository_x509_ecdsa_certificate","name__orig":"repository_x509_ecdsa_certificate","Name":"RepositoryX509EcdsaCertificate","name_":"repository_x509_ecdsa_certificate","name-":"repository-x509-ecdsa-certificate","NAME":"REPOSITORY_X509_ECDSA_CERTIFICATE","index$":59}, {"active":true,"entity":"repository_x509_ecdsa_certificate","key$":"BasicRepositoryX509EcdsaCertificateFlow","kind":"basic","name":"BasicRepositoryX509EcdsaCertificateFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"repository_x509_ecdsa_certificate_ref01","srcdatavar":"repository_x509_ecdsa_certificate_ref01_data","suffix":"_dt0"},"m":{"id":"repository_x509_ecdsa_certificate01","owner":"owner01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_x509_ecdsa_certificate_ref01"}}],"index$":0}]}, 'RepositoryX509EcdsaCertificate', {"GET /repos/{owner}/{identifier}/x509-ecdsa/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"identifier","in":"path","required":true,"type":"string","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let repository_x509_ecdsa_certificate_ref01_data = Object.values(setup.data.existing.repository_x509_ecdsa_certificate)[0] as any

    // LOAD: skipped — no entity id field and load requires path params.
    // Entity-var is declared here so later flow steps still compile.
    const repository_x509_ecdsa_certificate_ref01_ent = client.RepositoryX509EcdsaCertificate()


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_x509_ecdsa_certificate/RepositoryX509EcdsaCertificateTestData.json')

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
    ['repository_x509_ecdsa_certificate01','repository_x509_ecdsa_certificate02','repository_x509_ecdsa_certificate03','repo01','repo02','repo03','owner01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_X509_ECDSA_CERTIFICATE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_X509_ECDSA_CERTIFICATE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_X509_ECDSA_CERTIFICATE_ENTID']
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
  
