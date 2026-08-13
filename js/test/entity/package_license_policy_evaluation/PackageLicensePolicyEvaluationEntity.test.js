
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


describe('PackageLicensePolicyEvaluationEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.PackageLicensePolicyEvaluation()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const package_license_policy_evaluation_ref01_ent = client.PackageLicensePolicyEvaluation()
    let package_license_policy_evaluation_ref01_data = setup.data.new.package_license_policy_evaluation['package_license_policy_evaluation_ref01']
    package_license_policy_evaluation_ref01_data['license_policy_id'] = setup.idmap['license_policy01']
    package_license_policy_evaluation_ref01_data['org_id'] = setup.idmap['org01']
    package_license_policy_evaluation_ref01_data['policy_slug_perm'] = setup.idmap['policy_slug_perm01']

    package_license_policy_evaluation_ref01_data = await package_license_policy_evaluation_ref01_ent.create(package_license_policy_evaluation_ref01_data)
    assert(null != package_license_policy_evaluation_ref01_data)


    // LIST
    const package_license_policy_evaluation_ref01_match = {}
    package_license_policy_evaluation_ref01_match['org_id'] = setup.idmap['org01']
    package_license_policy_evaluation_ref01_match['policy_slug_perm'] = setup.idmap['policy_slug_perm01']

    const package_license_policy_evaluation_ref01_list = await package_license_policy_evaluation_ref01_ent.list(package_license_policy_evaluation_ref01_match)


    // LOAD
    const package_license_policy_evaluation_ref01_match_dt0 = {}
    const package_license_policy_evaluation_ref01_data_dt0 = await package_license_policy_evaluation_ref01_ent.load(package_license_policy_evaluation_ref01_match_dt0)
    assert(null != package_license_policy_evaluation_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/package_license_policy_evaluation/PackageLicensePolicyEvaluationTestData.json')

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
    ['package_license_policy_evaluation01','package_license_policy_evaluation02','package_license_policy_evaluation03','org01','org02','org03','license_policy01','license_policy02','license_policy03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_PACKAGE_LICENSE_POLICY_EVALUATION_ENTID']

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
  
