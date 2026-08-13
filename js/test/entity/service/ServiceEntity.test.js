
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

const Path = require('node:path')
const Fs = require('node:fs')

const { test, describe } = require('node:test')
const assert = require('node:assert')


const { CloudsmithSDK, BaseFeature, stdutil, config } = require('../../..')

const {
  envOverride,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
} = require('../../utility')


describe('ServiceEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Service()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const service_ref01_ent = client.Service()
    let service_ref01_data = setup.data.new.service['service_ref01']
    service_ref01_data['org_id'] = setup.idmap['org01']
    service_ref01_data['service'] = setup.idmap['service01']

    service_ref01_data = await service_ref01_ent.create(service_ref01_data)
    assert(null != service_ref01_data)


    // LIST
    const service_ref01_match = {}
    service_ref01_match['org_id'] = setup.idmap['org01']

    const service_ref01_list = await service_ref01_ent.list(service_ref01_match)


    // UPDATE
    const service_ref01_data_up0 = {}
    service_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const service_ref01_markdef_up0 = { name: 'created_at', value: 'Mark01-service_ref01_' + setup.now }
    service_ref01_data_up0 [service_ref01_markdef_up0.name] = service_ref01_markdef_up0.value

    const service_ref01_resdata_up0 = await service_ref01_ent.update(service_ref01_data_up0)
    assert(null != service_ref01_resdata_up0)

    assert(service_ref01_resdata_up0[service_ref01_markdef_up0.name] === service_ref01_markdef_up0.value)


    // LOAD
    const service_ref01_match_dt0 = {}
    const service_ref01_data_dt0 = await service_ref01_ent.load(service_ref01_match_dt0)
    assert(null != service_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/service/ServiceTestData.json')

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
    ['service01','service02','service03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_SERVICE_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_SERVICE_ENTID']

  if ('TRUE' === env.CLOUDSMITH_TEST_LIVE) {
    client = new CloudsmithSDK(merge([
      {
        apikey: env.CLOUDSMITH_APIKEY,
      },
      extra
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
    now: Date.now(),
  }

  return setup
}
  
