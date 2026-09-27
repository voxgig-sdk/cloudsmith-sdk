

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


describe('RepositoryEcdsaKeyEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryEcdsaKey()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_ecdsa_key.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"active":{"a":true,"h":"Active","n":"active","r":false,"ro":true,"sh":"If selected this is the active key for this repository.","t":"`$BOOLEAN`","key$":"active","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"ro":true,"t":"`$STRING`","key$":"created_at","index$":1},"default":{"a":true,"h":"Default","n":"default","r":false,"ro":true,"sh":"If selected this is the default key for this repository.","t":"`$BOOLEAN`","key$":"default","index$":2},"fingerprint":{"a":true,"h":"Fingerprint","n":"fingerprint","r":false,"ro":true,"sh":"The long identifier used by ECDSA for this key.","t":"`$STRING`","key$":"fingerprint","index$":3},"fingerprint_short":{"a":true,"h":"Fingerprint Short","n":"fingerprint_short","r":false,"ro":true,"t":"`$STRING`","key$":"fingerprint_short","index$":4},"public_key":{"a":true,"h":"Public Key","n":"public_key","r":false,"ro":true,"sh":"The public key given to repository users.","t":"`$STRING`","key$":"public_key","index$":5},"ssh_fingerprint":{"a":true,"h":"Ssh Fingerprint","n":"ssh_fingerprint","r":false,"ro":true,"sh":"The SSH fingerprint used by ECDSA for this key.","t":"`$STRING`","key$":"ssh_fingerprint","index$":6}},"name":"repository_ecdsa_key","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /repos/{owner}/{identifier}/ecdsa/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0}]},"k":"http","m":"POST","o":"/repos/{owner}/{identifier}/ecdsa/","q":{"exist":["data","identifier","owner"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"ecdsa"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0},{"a":true,"co":{"id":"POST /repos/{owner}/{identifier}/ecdsa/regenerate/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"POST","o":"/repos/{owner}/{identifier}/ecdsa/regenerate/","q":{"exist":["identifier","owner"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"ecdsa"},{"lit":"regenerate"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /repos/{owner}/{identifier}/ecdsa/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/repos/{owner}/{identifier}/ecdsa/","q":{"exist":["identifier","owner"]},"r":{},"s":[{"lit":"repos"},{"var":"owner"},{"var":"identifier"},{"lit":"ecdsa"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[["$.main.kit.entity.repo"]]},"key$":"repository_ecdsa_key","name__orig":"repository_ecdsa_key","Name":"RepositoryEcdsaKey","name_":"repository_ecdsa_key","name-":"repository-ecdsa-key","NAME":"REPOSITORY_ECDSA_KEY","index$":47}, {"active":true,"entity":"repository_ecdsa_key","key$":"BasicRepositoryEcdsaKeyFlow","kind":"basic","name":"BasicRepositoryEcdsaKeyFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"repository_ecdsa_key_ref01"},"m":{"identifier":"identifier01","owner":"owner01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{"ref":"repository_ecdsa_key_ref01","srcdatavar":"repository_ecdsa_key_ref01_data","suffix":"_dt0"},"m":{"id":"repository_ecdsa_key01","owner":"owner01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_ecdsa_key_ref01"}}],"index$":1}]}, 'RepositoryEcdsaKey', {"POST /repos/{owner}/{identifier}/ecdsa/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"identifier","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"required":["ecdsa_private_key"],"type":"object","properties":{"ecdsa_passphrase":{"title":"Ecdsa passphrase","description":"The ECDSA passphrase used for signing.","type":"string","minLength":1},"ecdsa_private_key":{"title":"Ecdsa private key","description":"The ECDSA private key.","type":"string","minLength":1}},"x-ref":"#/definitions/RepositoryEcdsaKeyCreate"},"index$":2}]},"POST /repos/{owner}/{identifier}/ecdsa/regenerate/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"identifier","in":"path","required":true,"type":"string","index$":1}]},"GET /repos/{owner}/{identifier}/ecdsa/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"identifier","in":"path","required":true,"type":"string","index$":1}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const repository_ecdsa_key_ref01_ent = client.RepositoryEcdsaKey()
    let repository_ecdsa_key_ref01_data = setup.data.new.repository_ecdsa_key['repository_ecdsa_key_ref01']
    repository_ecdsa_key_ref01_data['identifier'] = setup.idmap['identifier01']
    repository_ecdsa_key_ref01_data['owner'] = setup.idmap['owner01']

    repository_ecdsa_key_ref01_data = (await repository_ecdsa_key_ref01_ent.create(repository_ecdsa_key_ref01_data)).data()
    assert(null != repository_ecdsa_key_ref01_data)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_ecdsa_key/RepositoryEcdsaKeyTestData.json')

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
    ['repository_ecdsa_key01','repository_ecdsa_key02','repository_ecdsa_key03','repo01','repo02','repo03','identifier01','owner01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_ECDSA_KEY_ENTID']
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
  
