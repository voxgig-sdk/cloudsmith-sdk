
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


describe('PythonEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Python()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const python_ref01_ent = client.Python()
    let python_ref01_data = setup.data.new.python['python_ref01']
    python_ref01_data['identifier'] = setup.idmap['identifier01']
    python_ref01_data['owner'] = setup.idmap['owner01']

    python_ref01_data = await python_ref01_ent.create(python_ref01_data)
    assert(null != python_ref01_data)


    // LIST
    const python_ref01_match = {}
    python_ref01_match['identifier'] = setup.idmap['identifier01']
    python_ref01_match['owner'] = setup.idmap['owner01']

    const python_ref01_list = await python_ref01_ent.list(python_ref01_match)


    // UPDATE
    const python_ref01_data_up0 = {}
    python_ref01_data_up0 ['identifier'] = setup.idmap['identifier']
    python_ref01_data_up0 ['owner'] = setup.idmap['owner']

    const python_ref01_markdef_up0 = { name: 'auth_mode', value: 'Mark01-python_ref01_' + setup.now }
    python_ref01_data_up0 [python_ref01_markdef_up0.name] = python_ref01_markdef_up0.value

    const python_ref01_resdata_up0 = await python_ref01_ent.update(python_ref01_data_up0)
    assert(null != python_ref01_resdata_up0)

    assert(python_ref01_resdata_up0[python_ref01_markdef_up0.name] === python_ref01_markdef_up0.value)


    // LOAD
    const python_ref01_match_dt0 = {}
    const python_ref01_data_dt0 = await python_ref01_ent.load(python_ref01_match_dt0)
    assert(null != python_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/python/PythonTestData.json')

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
    ['python01','python02','python03','package01','package02','package03','repo01','repo02','repo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_PYTHON_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_PYTHON_ENTID']

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
  
