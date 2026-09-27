

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


describe('RepositoryTokenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryToken()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_token.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"clients":{"a":true,"h":"Clients","n":"clients","r":false,"ro":true,"t":"`$INTEGER`","key$":"clients","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"ro":true,"sh":"The datetime the token was updated at.","t":"`$STRING`","key$":"created_at","index$":1},"created_by":{"a":true,"h":"Created By","n":"created_by","r":false,"ro":true,"t":"`$STRING`","key$":"created_by","index$":2},"created_by_url":{"a":true,"fo":"uri","h":"Created By Url","n":"created_by_url","r":false,"ro":true,"t":"`$STRING`","key$":"created_by_url","index$":3},"default":{"a":true,"h":"Default","n":"default","r":false,"ro":true,"sh":"If selected this is the default token for this repository.","t":"`$BOOLEAN`","key$":"default","index$":4},"disable_url":{"a":true,"fo":"uri","h":"Disable Url","n":"disable_url","r":false,"ro":true,"t":"`$STRING`","key$":"disable_url","index$":5},"downloads":{"a":true,"h":"Downloads","n":"downloads","r":false,"ro":true,"t":"`$INTEGER`","key$":"downloads","index$":6},"enable_url":{"a":true,"fo":"uri","h":"Enable Url","n":"enable_url","r":false,"ro":true,"t":"`$STRING`","key$":"enable_url","index$":7},"eula_accepted":{"a":true,"h":"Eula Accepted","n":"eula_accepted","r":false,"t":"`$OBJECT`","key$":"eula_accepted","index$":8},"eula_accepted_at":{"a":true,"fo":"date-time","h":"Eula Accepted At","n":"eula_accepted_at","r":false,"ro":true,"sh":"The datetime the EULA was accepted at.","t":"`$STRING`","key$":"eula_accepted_at","index$":9},"eula_accepted_from":{"a":true,"h":"Eula Accepted From","n":"eula_accepted_from","r":false,"ro":true,"t":"`$STRING`","key$":"eula_accepted_from","index$":10},"eula_required":{"a":true,"h":"Eula Required","n":"eula_required","r":false,"sh":"If checked, a EULA acceptance is required for this token.","t":"`$BOOLEAN`","key$":"eula_required","index$":11},"has_limits":{"a":true,"h":"Has Limits","n":"has_limits","r":false,"ro":true,"t":"`$BOOLEAN`","key$":"has_limits","index$":12},"id":{"a":true,"h":"Id","n":"id","r":false,"t":"`$STRING`","key$":"id","index$":13},"identifier":{"a":true,"h":"Identifier","n":"identifier","r":false,"ro":true,"sh":"Deprecated (23-05-15): Please use 'slug_perm' instead.","t":"`$INTEGER`","key$":"identifier","index$":14},"is_active":{"a":true,"h":"Is Active","n":"is_active","r":false,"sh":"If enabled, the token will allow downloads based on configured restrictions (if any).","t":"`$BOOLEAN`","key$":"is_active","index$":15},"is_limited":{"a":true,"h":"Is Limited","n":"is_limited","r":false,"ro":true,"t":"`$BOOLEAN`","key$":"is_limited","index$":16},"limit_bandwidth":{"a":true,"h":"Limit Bandwidth","n":"limit_bandwidth","r":false,"sh":"The maximum download bandwidth allowed for the token.","t":"`$INTEGER`","key$":"limit_bandwidth","index$":17},"limit_bandwidth_unit":{"a":true,"h":"Limit Bandwidth Unit","n":"limit_bandwidth_unit","r":false,"t":"`$STRING`","key$":"limit_bandwidth_unit","index$":18},"limit_date_range_from":{"a":true,"fo":"date-time","h":"Limit Date Range From","n":"limit_date_range_from","r":false,"sh":"The starting date/time the token is allowed to be used from.","t":"`$STRING`","key$":"limit_date_range_from","index$":19},"limit_date_range_to":{"a":true,"fo":"date-time","h":"Limit Date Range To","n":"limit_date_range_to","r":false,"sh":"The ending date/time the token is allowed to be used until.","t":"`$STRING`","key$":"limit_date_range_to","index$":20},"limit_num_clients":{"a":true,"h":"Limit Num Clients","n":"limit_num_clients","r":false,"sh":"The maximum number of unique clients allowed for the token.","t":"`$INTEGER`","key$":"limit_num_clients","index$":21},"limit_num_downloads":{"a":true,"h":"Limit Num Downloads","n":"limit_num_downloads","r":false,"sh":"The maximum number of downloads allowed for the token.","t":"`$INTEGER`","key$":"limit_num_downloads","index$":22},"limit_package_query":{"a":true,"h":"Limit Package Query","n":"limit_package_query","r":false,"sh":"The package-based search query to apply to restrict downloads to.","t":"`$STRING`","key$":"limit_package_query","index$":23},"limit_path_query":{"a":true,"h":"Limit Path Query","n":"limit_path_query","r":false,"sh":"THIS WILL SOON BE DEPRECATED, please use limit_package_query instead.","t":"`$STRING`","key$":"limit_path_query","index$":24},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"t":"`$OBJECT`","key$":"metadata","index$":25},"name":{"a":true,"h":"Name","n":"name","r":true,"t":"`$STRING`","key$":"name","index$":26},"refresh_url":{"a":true,"fo":"uri","h":"Refresh Url","n":"refresh_url","r":false,"ro":true,"t":"`$STRING`","key$":"refresh_url","index$":27},"reset_url":{"a":true,"fo":"uri","h":"Reset Url","n":"reset_url","r":false,"ro":true,"t":"`$STRING`","key$":"reset_url","index$":28},"scheduled_reset_at":{"a":true,"fo":"date-time","h":"Scheduled Reset At","n":"scheduled_reset_at","r":false,"sh":"The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero.","t":"`$STRING`","key$":"scheduled_reset_at","index$":29},"scheduled_reset_period":{"a":true,"h":"Scheduled Reset Period","n":"scheduled_reset_period","r":false,"t":"`$STRING`","key$":"scheduled_reset_period","index$":30},"self_url":{"a":true,"fo":"uri","h":"Self Url","n":"self_url","r":false,"ro":true,"t":"`$STRING`","key$":"self_url","index$":31},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":32},"token":{"a":true,"h":"Token","n":"token","r":false,"t":"`$STRING`","key$":"token","index$":33},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"ro":true,"sh":"The datetime the token was updated at.","t":"`$STRING`","key$":"updated_at","index$":34},"updated_by":{"a":true,"h":"Updated By","n":"updated_by","r":false,"ro":true,"t":"`$STRING`","key$":"updated_by","index$":35},"updated_by_url":{"a":true,"fo":"uri","h":"Updated By Url","n":"updated_by_url","r":false,"ro":true,"t":"`$STRING`","key$":"updated_by_url","index$":36},"usage":{"a":true,"h":"Usage","n":"usage","r":false,"ro":true,"t":"`$STRING`","key$":"usage","index$":37},"user":{"a":true,"h":"User","n":"user","r":false,"ro":true,"t":"`$STRING`","key$":"user","index$":38},"user_url":{"a":true,"fo":"uri","h":"User Url","n":"user_url","r":false,"ro":true,"t":"`$STRING`","key$":"user_url","index$":39}},"id":{"field":"id","from":{"identifier":"identifier"},"name":"id","parts":["owner","repo","identifier"],"sep":"/"},"name":"repository_token","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /entitlements/{owner}/{repo}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0},{"a":true,"k":"query","n":"show_token","or":"show_token","r":false,"t":"`$ANY`","index$":1}]},"k":"http","m":"POST","o":"/entitlements/{owner}/{repo}/","q":{"exist":["data","owner","repo","show_token"]},"r":{},"s":[{"lit":"entitlements"},{"var":"owner"},{"var":"repo"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /entitlements/{owner}/{repo}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":1}],"query":[{"a":true,"k":"query","n":"active","or":"active","r":false,"t":"`$BOOLEAN`","index$":0},{"a":true,"k":"query","n":"page","or":"page","r":false,"t":"`$INTEGER`","index$":1},{"a":true,"k":"query","n":"page_size","or":"page_size","r":false,"t":"`$INTEGER`","index$":2},{"a":true,"k":"query","n":"query","or":"query","r":false,"t":"`$ANY`","index$":3},{"a":true,"k":"query","n":"show_token","or":"show_token","r":false,"t":"`$ANY`","index$":4},{"a":true,"k":"query","n":"sort","or":"sort","r":false,"t":"`$ANY`","index$":5}]},"k":"http","m":"GET","o":"/entitlements/{owner}/{repo}/","q":{"exist":["active","owner","page","page_size","query","repo","show_token","sort"]},"r":{},"s":[{"lit":"entitlements"},{"var":"owner"},{"var":"repo"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"a":true,"co":{"id":"GET /entitlements/{owner}/{repo}/{identifier}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":2}],"query":[{"a":true,"k":"query","n":"fuzzy","or":"fuzzy","r":false,"t":"`$ANY`","index$":0},{"a":true,"k":"query","n":"show_token","or":"show_token","r":false,"t":"`$ANY`","index$":1}]},"k":"http","m":"GET","o":"/entitlements/{owner}/{repo}/{identifier}/","q":{"exist":["fuzzy","identifier","owner","repo","show_token"]},"r":{},"s":[{"lit":"entitlements"},{"var":"owner"},{"var":"repo"},{"var":"identifier"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"a":true,"co":{"id":"PATCH /entitlements/{owner}/{repo}/{identifier}/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":2}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0},{"a":true,"k":"query","n":"show_token","or":"show_token","r":false,"t":"`$ANY`","index$":1}]},"k":"http","m":"PATCH","o":"/entitlements/{owner}/{repo}/{identifier}/","q":{"exist":["data","identifier","owner","repo","show_token"]},"r":{},"s":[{"lit":"entitlements"},{"var":"owner"},{"var":"repo"},{"var":"identifier"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["$.main.kit.entity.entitlement"]]},"key$":"repository_token","name__orig":"repository_token","Name":"RepositoryToken","name_":"repository_token","name-":"repository-token","NAME":"REPOSITORY_TOKEN","index$":55}, {"active":true,"entity":"repository_token","key$":"BasicRepositoryTokenFlow","kind":"basic","name":"BasicRepositoryTokenFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"repository_token_ref01"},"m":{"owner":"owner01","repo":"repo01"},"o":"create","s":[],"v":[],"index$":0},{"a":true,"d":{},"i":{},"m":{"owner":"owner01","repo":"repo01"},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"repository_token_ref01"}}],"index$":1},{"a":true,"d":{"owner":"owner01","repo":"repo01"},"i":{"ref":"repository_token_ref01","srcdatavar":"repository_token_ref01_data","suffix":"_up0","textfield":"limit_bandwidth_unit"},"m":{},"o":"update","s":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_token_ref01"}}],"v":[],"index$":2},{"a":true,"d":{},"i":{"ref":"repository_token_ref01","srcdatavar":"repository_token_ref01_data","suffix":"_dt0"},"m":{"id":"repository_token01","owner":"owner01","repo":"repo01"},"o":"load","s":[],"v":[{"apply":"TextFieldMark","def":{"mark":"Mark01-repository_token_ref01"}}],"index$":3}]}, 'RepositoryToken', {"POST /entitlements/{owner}/{repo}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"data","in":"body","required":false,"schema":{"required":["name"],"type":"object","properties":{"eula_required":{"title":"Eula required","description":"If checked, a EULA acceptance is required for this token.","type":"boolean"},"is_active":{"title":"Token Active","description":"If enabled, the token will allow downloads based on configured restrictions (if any).","type":"boolean"},"limit_bandwidth":{"title":"Limit bandwidth","description":"The maximum download bandwidth allowed for the token. Values are expressed as the selected unit of bandwidth. Please note that since downloads are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point. ","type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"x-nullable":true},"limit_bandwidth_unit":{"title":"Limit bandwidth unit","type":"string","enum":["Byte","Kilobyte","Megabyte","Gigabyte","Terabyte","Petabyte","Exabyte","Zettabyte","Yottabyte"],"default":"Byte","x-nullable":true},"limit_date_range_from":{"title":"Limit date range from","description":"The starting date/time the token is allowed to be used from.","type":"string","format":"date-time","x-nullable":true},"limit_date_range_to":{"title":"Limit date range to","description":"The ending date/time the token is allowed to be used until.","type":"string","format":"date-time","x-nullable":true},"limit_num_clients":{"title":"Limit num clients","description":"The maximum number of unique clients allowed for the token. Please note that since clients are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.","type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"x-nullable":true},"limit_num_downloads":{"title":"Limit num downloads","description":"The maximum number of downloads allowed for the token. Please note that since downloads are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.","type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"x-nullable":true},"limit_package_query":{"title":"Limit package query","description":"The package-based search query to apply to restrict downloads to. This uses the same syntax as the standard search used for repositories, and also supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. This will still allow access to non-package files, such as metadata.","type":"string","maxLength":1024,"x-nullable":true},"limit_path_query":{"title":"Limit path query","description":"THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. The path-based search query to apply to restrict downloads to. This supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. The path evaluated does not include the domain name, the namespace, the entitlement code used, the package format, etc. and it always starts with a forward slash.","type":"string","maxLength":1024,"x-nullable":true},"metadata":{"title":"Metadata","type":"object","x-nullable":true},"name":{"title":"Name","type":"string","minLength":1},"scheduled_reset_at":{"title":"Scheduled reset at","description":"The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero.","type":"string","format":"date-time","x-nullable":true},"scheduled_reset_period":{"title":"Scheduled reset period","type":"string","enum":["Never Reset","Daily","Weekly","Fortnightly","Monthly","Bi-Monthly","Quarterly","Every 6 months","Annual"],"default":"Never Reset","x-nullable":true},"token":{"title":"Token","type":"string","minLength":1}},"x-ref":"#/definitions/RepositoryTokenRequest"},"index$":2},{"name":"show_tokens","in":"query","description":"Show entitlement token strings in results","required":false,"type":"boolean","default":false,"index$":3}]},"GET /entitlements/{owner}/{repo}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"page","in":"query","description":"A page number within the paginated result set.","required":false,"type":"integer","index$":2},{"name":"page_size","in":"query","description":"Number of results to return per page.","required":false,"type":"integer","index$":3},{"name":"show_tokens","in":"query","description":"Show entitlement token strings in results","required":false,"type":"boolean","default":false,"index$":4},{"name":"query","in":"query","description":"A search term for querying names of entitlements.","required":false,"type":"string","index$":5},{"name":"active","in":"query","description":"If true, only include active tokens","required":false,"type":"boolean","default":false,"index$":6},{"name":"sort","in":"query","description":"A field for sorting objects in ascending or descending order. Use `-` prefix for descending order (e.g., `-name`). Available options: name.","required":false,"type":"string","default":"name","index$":7}]},"GET /entitlements/{owner}/{repo}/{identifier}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"identifier","in":"path","required":true,"type":"string","index$":2},{"name":"fuzzy","in":"query","description":"If true, entitlement identifiers including name will be fuzzy matched.","required":false,"type":"boolean","default":false,"index$":3},{"name":"show_tokens","in":"query","description":"Show entitlement token strings in results","required":false,"type":"boolean","default":false,"index$":4}]},"PATCH /entitlements/{owner}/{repo}/{identifier}/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"identifier","in":"path","required":true,"type":"string","index$":2},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"eula_required":{"title":"Eula required","description":"If checked, a EULA acceptance is required for this token.","type":"boolean"},"is_active":{"title":"Token Active","description":"If enabled, the token will allow downloads based on configured restrictions (if any).","type":"boolean"},"limit_bandwidth":{"title":"Limit bandwidth","description":"The maximum download bandwidth allowed for the token. Values are expressed as the selected unit of bandwidth. Please note that since downloads are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point. ","type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"x-nullable":true},"limit_bandwidth_unit":{"title":"Limit bandwidth unit","type":"string","enum":["Byte","Kilobyte","Megabyte","Gigabyte","Terabyte","Petabyte","Exabyte","Zettabyte","Yottabyte"],"default":"Byte","x-nullable":true},"limit_date_range_from":{"title":"Limit date range from","description":"The starting date/time the token is allowed to be used from.","type":"string","format":"date-time","x-nullable":true},"limit_date_range_to":{"title":"Limit date range to","description":"The ending date/time the token is allowed to be used until.","type":"string","format":"date-time","x-nullable":true},"limit_num_clients":{"title":"Limit num clients","description":"The maximum number of unique clients allowed for the token. Please note that since clients are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.","type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"x-nullable":true},"limit_num_downloads":{"title":"Limit num downloads","description":"The maximum number of downloads allowed for the token. Please note that since downloads are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.","type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"x-nullable":true},"limit_package_query":{"title":"Limit package query","description":"The package-based search query to apply to restrict downloads to. This uses the same syntax as the standard search used for repositories, and also supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. This will still allow access to non-package files, such as metadata.","type":"string","maxLength":1024,"x-nullable":true},"limit_path_query":{"title":"Limit path query","description":"THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. The path-based search query to apply to restrict downloads to. This supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. The path evaluated does not include the domain name, the namespace, the entitlement code used, the package format, etc. and it always starts with a forward slash.","type":"string","maxLength":1024,"x-nullable":true},"metadata":{"title":"Metadata","type":"object","x-nullable":true},"name":{"title":"Name","type":"string","minLength":1},"scheduled_reset_at":{"title":"Scheduled reset at","description":"The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero.","type":"string","format":"date-time","x-nullable":true},"scheduled_reset_period":{"title":"Scheduled reset period","type":"string","enum":["Never Reset","Daily","Weekly","Fortnightly","Monthly","Bi-Monthly","Quarterly","Every 6 months","Annual"],"default":"Never Reset","x-nullable":true},"token":{"title":"Token","type":"string","minLength":1}},"x-ref":"#/definitions/RepositoryTokenRequestPatch"},"index$":3},{"name":"show_tokens","in":"query","description":"Show entitlement token strings in results","required":false,"type":"boolean","default":false,"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const repository_token_ref01_ent = client.RepositoryToken()
    let repository_token_ref01_data = setup.data.new.repository_token['repository_token_ref01']
    repository_token_ref01_data['owner'] = setup.idmap['owner01']
    repository_token_ref01_data['repo'] = setup.idmap['repo01']

    repository_token_ref01_data = (await repository_token_ref01_ent.create(repository_token_ref01_data)).data()
    assert(null != repository_token_ref01_data.id)


    // LIST
    const repository_token_ref01_match: any = {}
    repository_token_ref01_match['owner'] = setup.idmap['owner01']
    repository_token_ref01_match['repo'] = setup.idmap['repo01']

    const repository_token_ref01_list = (await repository_token_ref01_ent.list(repository_token_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(repository_token_ref01_list, { id: repository_token_ref01_data.id })))


    // UPDATE
    const repository_token_ref01_data_up0: any = {}
    repository_token_ref01_data_up0.id = repository_token_ref01_data.id
    repository_token_ref01_data_up0 ['owner'] = setup.idmap['owner']
    repository_token_ref01_data_up0 ['repo'] = setup.idmap['repo']

    const repository_token_ref01_markdef_up0 = { name: 'limit_bandwidth_unit', value: 'Mark01-repository_token_ref01_' + setup.now }
    ;(repository_token_ref01_data_up0 as any)[repository_token_ref01_markdef_up0.name] = repository_token_ref01_markdef_up0.value

    const repository_token_ref01_resdata_up0 = (await repository_token_ref01_ent.update(repository_token_ref01_data_up0)).data()
    assert(repository_token_ref01_resdata_up0.id === repository_token_ref01_data_up0.id)

    assert((repository_token_ref01_resdata_up0 as any)[repository_token_ref01_markdef_up0.name] === repository_token_ref01_markdef_up0.value)


    // LOAD
    const repository_token_ref01_match_dt0: any = {}
    repository_token_ref01_match_dt0.id = repository_token_ref01_data.id
    const repository_token_ref01_data_dt0 = (await repository_token_ref01_ent.load(repository_token_ref01_match_dt0)).data()
    assert(repository_token_ref01_data_dt0.id === repository_token_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_token/RepositoryTokenTestData.json')

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
    ['repository_token01','repository_token02','repository_token03','entitlement01','entitlement02','entitlement03','owner01','repo01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_TOKEN_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_TOKEN_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_TOKEN_ENTID']
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
  
