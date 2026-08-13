
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


describe('CondaEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Conda()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const conda_ref01_ent = client.Conda()
    let conda_ref01_data = setup.data.new.conda['conda_ref01']
    conda_ref01_data['identifier'] = setup.idmap['identifier01']
    conda_ref01_data['owner'] = setup.idmap['owner01']

    conda_ref01_data = await conda_ref01_ent.create(conda_ref01_data)
    assert(null != conda_ref01_data)


    // LIST
    const conda_ref01_match = {}
    conda_ref01_match['identifier'] = setup.idmap['identifier01']
    conda_ref01_match['owner'] = setup.idmap['owner01']

    const conda_ref01_list = await conda_ref01_ent.list(conda_ref01_match)


    // UPDATE
    const conda_ref01_data_up0 = {}
    conda_ref01_data_up0 ['identifier'] = setup.idmap['identifier']
    conda_ref01_data_up0 ['owner'] = setup.idmap['owner']

    const conda_ref01_markdef_up0 = { name: 'auth_mode', value: 'Mark01-conda_ref01_' + setup.now }
    conda_ref01_data_up0 [conda_ref01_markdef_up0.name] = conda_ref01_markdef_up0.value

    const conda_ref01_resdata_up0 = await conda_ref01_ent.update(conda_ref01_data_up0)
    assert(null != conda_ref01_resdata_up0)

    assert(conda_ref01_resdata_up0[conda_ref01_markdef_up0.name] === conda_ref01_markdef_up0.value)


    // LOAD
    const conda_ref01_match_dt0 = {}
    const conda_ref01_data_dt0 = await conda_ref01_ent.load(conda_ref01_match_dt0)
    assert(null != conda_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/conda/CondaTestData.json')

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
    ['conda01','conda02','conda03','package01','package02','package03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_CONDA_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_CONDA_ENTID']

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
  
