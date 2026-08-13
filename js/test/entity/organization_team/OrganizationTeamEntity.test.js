
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


describe('OrganizationTeamEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.OrganizationTeam()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const organization_team_ref01_ent = client.OrganizationTeam()
    let organization_team_ref01_data = setup.data.new.organization_team['organization_team_ref01']
    organization_team_ref01_data['org_id'] = setup.idmap['org01']

    organization_team_ref01_data = await organization_team_ref01_ent.create(organization_team_ref01_data)
    assert(null != organization_team_ref01_data)


    // LIST
    const organization_team_ref01_match = {}
    organization_team_ref01_match['org_id'] = setup.idmap['org01']

    const organization_team_ref01_list = await organization_team_ref01_ent.list(organization_team_ref01_match)


    // UPDATE
    const organization_team_ref01_data_up0 = {}
    organization_team_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const organization_team_ref01_markdef_up0 = { name: 'description', value: 'Mark01-organization_team_ref01_' + setup.now }
    organization_team_ref01_data_up0 [organization_team_ref01_markdef_up0.name] = organization_team_ref01_markdef_up0.value

    const organization_team_ref01_resdata_up0 = await organization_team_ref01_ent.update(organization_team_ref01_data_up0)
    assert(null != organization_team_ref01_resdata_up0)

    assert(organization_team_ref01_resdata_up0[organization_team_ref01_markdef_up0.name] === organization_team_ref01_markdef_up0.value)


    // LOAD
    const organization_team_ref01_match_dt0 = {}
    const organization_team_ref01_data_dt0 = await organization_team_ref01_ent.load(organization_team_ref01_match_dt0)
    assert(null != organization_team_ref01_data_dt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/organization_team/OrganizationTeamTestData.json')

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
    ['organization_team01','organization_team02','organization_team03','org01','org02','org03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_ORGANIZATION_TEAM_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_ORGANIZATION_TEAM_ENTID']

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
  
