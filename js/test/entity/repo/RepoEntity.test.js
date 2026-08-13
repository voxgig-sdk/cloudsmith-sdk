
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


describe('RepoEntity', async () => {

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Repo()
    assert(null != ent)
  })


  test('basic', async () => {

    const setup = basicSetup()
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const repo_ref01_ent = client.Repo()
    let repo_ref01_data = setup.data.new.repo['repo_ref01']
    repo_ref01_data['identifier'] = setup.idmap['identifier01']
    repo_ref01_data['owner'] = setup.idmap['owner01']

    repo_ref01_data = await repo_ref01_ent.create(repo_ref01_data)
    assert(null != repo_ref01_data)


    // LIST
    const repo_ref01_match = {}

    const repo_ref01_list = await repo_ref01_ent.list(repo_ref01_match)


    // UPDATE
    const repo_ref01_data_up0 = {}
    repo_ref01_data_up0 ['owner'] = setup.idmap['owner']

    const repo_ref01_markdef_up0 = { name: 'cdn_url', value: 'Mark01-repo_ref01_' + setup.now }
    repo_ref01_data_up0 [repo_ref01_markdef_up0.name] = repo_ref01_markdef_up0.value

    const repo_ref01_resdata_up0 = await repo_ref01_ent.update(repo_ref01_data_up0)
    assert(null != repo_ref01_resdata_up0)

    assert(repo_ref01_resdata_up0[repo_ref01_markdef_up0.name] === repo_ref01_markdef_up0.value)


    // LOAD
    const repo_ref01_match_dt0 = {}
    const repo_ref01_data_dt0 = await repo_ref01_ent.load(repo_ref01_match_dt0)
    assert(null != repo_ref01_data_dt0)



    // LIST
    const repo_ref01_match_rt0 = {}

    const repo_ref01_list_rt0 = await repo_ref01_ent.list(repo_ref01_match_rt0)


  })
})



function basicSetup(extra) {
  // TODO: fix test def options
  const options = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname,
      '../../../../.sdk/test/entity/repo/RepoTestData.json')

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
    ['repo01','repo02','repo03','repo01','repo02','repo03','repo01','repo02','repo03','cargo01','cargo02','cargo03','repo01','repo02','repo03','composer01','composer02','composer03','repo01','repo02','repo03','conda01','conda02','conda03','repo01','repo02','repo03','cran01','cran02','cran03','repo01','repo02','repo03','dart01','dart02','dart03','repo01','repo02','repo03','deb01','deb02','deb03','repo01','repo02','repo03','docker01','docker02','docker03','repo01','repo02','repo03','go01','go02','go03','repo01','repo02','repo03','helm01','helm02','helm03','repo01','repo02','repo03','hex01','hex02','hex03','repo01','repo02','repo03','huggingface01','huggingface02','huggingface03','repo01','repo02','repo03','maven01','maven02','maven03','repo01','repo02','repo03','npm01','npm02','npm03','repo01','repo02','repo03','nuget01','nuget02','nuget03','repo01','repo02','repo03','python01','python02','python03','repo01','repo02','repo03','rpm01','rpm02','rpm03','repo01','repo02','repo03','ruby01','ruby02','ruby03','repo01','repo02','repo03','swift01','swift02','swift03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPO_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': 'NONE',
  })

  idmap = env['CLOUDSMITH_TEST_REPO_ENTID']

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
  
