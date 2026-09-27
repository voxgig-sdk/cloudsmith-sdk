

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


describe('RepositoryTokenRefreshEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.RepositoryTokenRefresh()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'repository_token_refresh.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"clients":{"a":true,"h":"Clients","n":"clients","r":false,"ro":true,"t":"`$INTEGER`","key$":"clients","index$":0},"created_at":{"a":true,"fo":"date-time","h":"Created At","n":"created_at","r":false,"ro":true,"sh":"The datetime the token was updated at.","t":"`$STRING`","key$":"created_at","index$":1},"created_by":{"a":true,"h":"Created By","n":"created_by","r":false,"ro":true,"t":"`$STRING`","key$":"created_by","index$":2},"created_by_url":{"a":true,"fo":"uri","h":"Created By Url","n":"created_by_url","r":false,"ro":true,"t":"`$STRING`","key$":"created_by_url","index$":3},"default":{"a":true,"h":"Default","n":"default","r":false,"ro":true,"sh":"If selected this is the default token for this repository.","t":"`$BOOLEAN`","key$":"default","index$":4},"disable_url":{"a":true,"fo":"uri","h":"Disable Url","n":"disable_url","r":false,"ro":true,"t":"`$STRING`","key$":"disable_url","index$":5},"downloads":{"a":true,"h":"Downloads","n":"downloads","r":false,"ro":true,"t":"`$INTEGER`","key$":"downloads","index$":6},"enable_url":{"a":true,"fo":"uri","h":"Enable Url","n":"enable_url","r":false,"ro":true,"t":"`$STRING`","key$":"enable_url","index$":7},"eula_accepted":{"a":true,"h":"Eula Accepted","n":"eula_accepted","r":false,"t":"`$OBJECT`","key$":"eula_accepted","index$":8},"eula_accepted_at":{"a":true,"fo":"date-time","h":"Eula Accepted At","n":"eula_accepted_at","r":false,"ro":true,"sh":"The datetime the EULA was accepted at.","t":"`$STRING`","key$":"eula_accepted_at","index$":9},"eula_accepted_from":{"a":true,"h":"Eula Accepted From","n":"eula_accepted_from","r":false,"ro":true,"t":"`$STRING`","key$":"eula_accepted_from","index$":10},"eula_required":{"a":true,"h":"Eula Required","n":"eula_required","r":false,"sh":"If checked, a EULA acceptance is required for this token.","t":"`$BOOLEAN`","key$":"eula_required","index$":11},"has_limits":{"a":true,"h":"Has Limits","n":"has_limits","r":false,"ro":true,"t":"`$BOOLEAN`","key$":"has_limits","index$":12},"identifier":{"a":true,"h":"Identifier","n":"identifier","r":false,"ro":true,"sh":"Deprecated (23-05-15): Please use 'slug_perm' instead.","t":"`$INTEGER`","key$":"identifier","index$":13},"is_active":{"a":true,"h":"Is Active","n":"is_active","r":false,"sh":"If enabled, the token will allow downloads based on configured restrictions (if any).","t":"`$BOOLEAN`","key$":"is_active","index$":14},"is_limited":{"a":true,"h":"Is Limited","n":"is_limited","r":false,"ro":true,"t":"`$BOOLEAN`","key$":"is_limited","index$":15},"limit_bandwidth":{"a":true,"h":"Limit Bandwidth","n":"limit_bandwidth","r":false,"sh":"The maximum download bandwidth allowed for the token.","t":"`$INTEGER`","key$":"limit_bandwidth","index$":16},"limit_bandwidth_unit":{"a":true,"h":"Limit Bandwidth Unit","n":"limit_bandwidth_unit","r":false,"t":"`$STRING`","key$":"limit_bandwidth_unit","index$":17},"limit_date_range_from":{"a":true,"fo":"date-time","h":"Limit Date Range From","n":"limit_date_range_from","r":false,"sh":"The starting date/time the token is allowed to be used from.","t":"`$STRING`","key$":"limit_date_range_from","index$":18},"limit_date_range_to":{"a":true,"fo":"date-time","h":"Limit Date Range To","n":"limit_date_range_to","r":false,"sh":"The ending date/time the token is allowed to be used until.","t":"`$STRING`","key$":"limit_date_range_to","index$":19},"limit_num_clients":{"a":true,"h":"Limit Num Clients","n":"limit_num_clients","r":false,"sh":"The maximum number of unique clients allowed for the token.","t":"`$INTEGER`","key$":"limit_num_clients","index$":20},"limit_num_downloads":{"a":true,"h":"Limit Num Downloads","n":"limit_num_downloads","r":false,"sh":"The maximum number of downloads allowed for the token.","t":"`$INTEGER`","key$":"limit_num_downloads","index$":21},"limit_package_query":{"a":true,"h":"Limit Package Query","n":"limit_package_query","r":false,"sh":"The package-based search query to apply to restrict downloads to.","t":"`$STRING`","key$":"limit_package_query","index$":22},"limit_path_query":{"a":true,"h":"Limit Path Query","n":"limit_path_query","r":false,"sh":"THIS WILL SOON BE DEPRECATED, please use limit_package_query instead.","t":"`$STRING`","key$":"limit_path_query","index$":23},"metadata":{"a":true,"h":"Metadata","n":"metadata","r":false,"t":"`$OBJECT`","key$":"metadata","index$":24},"name":{"a":true,"h":"Name","n":"name","r":false,"ro":true,"t":"`$STRING`","key$":"name","index$":25},"refresh_url":{"a":true,"fo":"uri","h":"Refresh Url","n":"refresh_url","r":false,"ro":true,"t":"`$STRING`","key$":"refresh_url","index$":26},"reset_url":{"a":true,"fo":"uri","h":"Reset Url","n":"reset_url","r":false,"ro":true,"t":"`$STRING`","key$":"reset_url","index$":27},"scheduled_reset_at":{"a":true,"fo":"date-time","h":"Scheduled Reset At","n":"scheduled_reset_at","r":false,"sh":"The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero.","t":"`$STRING`","key$":"scheduled_reset_at","index$":28},"scheduled_reset_period":{"a":true,"h":"Scheduled Reset Period","n":"scheduled_reset_period","r":false,"t":"`$STRING`","key$":"scheduled_reset_period","index$":29},"self_url":{"a":true,"fo":"uri","h":"Self Url","n":"self_url","r":false,"ro":true,"t":"`$STRING`","key$":"self_url","index$":30},"slug_perm":{"a":true,"fo":"slug","h":"Slug Perm","n":"slug_perm","r":false,"ro":true,"t":"`$STRING`","key$":"slug_perm","index$":31},"token":{"a":true,"h":"Token","n":"token","r":false,"t":"`$STRING`","key$":"token","index$":32},"updated_at":{"a":true,"fo":"date-time","h":"Updated At","n":"updated_at","r":false,"ro":true,"sh":"The datetime the token was updated at.","t":"`$STRING`","key$":"updated_at","index$":33},"updated_by":{"a":true,"h":"Updated By","n":"updated_by","r":false,"ro":true,"t":"`$STRING`","key$":"updated_by","index$":34},"updated_by_url":{"a":true,"fo":"uri","h":"Updated By Url","n":"updated_by_url","r":false,"ro":true,"t":"`$STRING`","key$":"updated_by_url","index$":35},"usage":{"a":true,"h":"Usage","n":"usage","r":false,"ro":true,"t":"`$STRING`","key$":"usage","index$":36},"user":{"a":true,"h":"User","n":"user","r":false,"ro":true,"t":"`$STRING`","key$":"user","index$":37},"user_url":{"a":true,"fo":"uri","h":"User Url","n":"user_url","r":false,"ro":true,"t":"`$STRING`","key$":"user_url","index$":38}},"name":"repository_token_refresh","op":{"create":{"input":"data","name":"create","points":[{"a":true,"co":{"id":"POST /entitlements/{owner}/{repo}/{identifier}/refresh/","source":"swagger2","version":2},"g":{"params":[{"a":true,"k":"param","n":"identifier","or":"identifier","r":true,"t":"`$ANY`","index$":0},{"a":true,"k":"param","n":"owner","or":"owner","r":true,"t":"`$ANY`","index$":1},{"a":true,"k":"param","n":"repo","or":"repo","r":true,"t":"`$ANY`","index$":2}],"query":[{"a":true,"k":"query","n":"data","or":"data","r":false,"t":"`$OBJECT`","index$":0},{"a":true,"k":"query","n":"show_token","or":"show_token","r":false,"t":"`$ANY`","index$":1}]},"k":"http","m":"POST","o":"/entitlements/{owner}/{repo}/{identifier}/refresh/","q":{"exist":["data","identifier","owner","repo","show_token"]},"r":{},"s":[{"lit":"entitlements"},{"var":"owner"},{"var":"repo"},{"var":"identifier"},{"lit":"refresh"}],"t":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"create"}},"relations":{"ancestors":[["$.main.kit.entity.entitlement"]]},"key$":"repository_token_refresh","name__orig":"repository_token_refresh","Name":"RepositoryTokenRefresh","name_":"repository_token_refresh","name-":"repository-token-refresh","NAME":"REPOSITORY_TOKEN_REFRESH","index$":56}, {"active":true,"entity":"repository_token_refresh","key$":"BasicRepositoryTokenRefreshFlow","kind":"basic","name":"BasicRepositoryTokenRefreshFlow","param":{},"step":[{"a":true,"d":{},"i":{"ref":"repository_token_refresh_ref01"},"m":{"identifier":"identifier01","owner":"owner01","repo":"repo01"},"o":"create","s":[],"v":[],"index$":0}]}, 'RepositoryTokenRefresh', {"POST /entitlements/{owner}/{repo}/{identifier}/refresh/":{"protocol":"http","parameters":[{"name":"owner","in":"path","required":true,"type":"string","index$":0},{"name":"repo","in":"path","required":true,"type":"string","index$":1},{"name":"identifier","in":"path","required":true,"type":"string","index$":2},{"name":"data","in":"body","required":false,"schema":{"type":"object","properties":{"eula_required":{"title":"Eula required","description":"If checked, a EULA acceptance is required for this token.","type":"boolean"},"is_active":{"title":"Token Active","description":"If enabled, the token will allow downloads based on configured restrictions (if any).","type":"boolean"},"limit_bandwidth":{"title":"Limit bandwidth","description":"The maximum download bandwidth allowed for the token. Values are expressed as the selected unit of bandwidth. Please note that since downloads are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point. ","type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"x-nullable":true},"limit_bandwidth_unit":{"title":"Limit bandwidth unit","type":"string","enum":["Byte","Kilobyte","Megabyte","Gigabyte","Terabyte","Petabyte","Exabyte","Zettabyte","Yottabyte"],"default":"Byte","x-nullable":true},"limit_date_range_from":{"title":"Limit date range from","description":"The starting date/time the token is allowed to be used from.","type":"string","format":"date-time","x-nullable":true},"limit_date_range_to":{"title":"Limit date range to","description":"The ending date/time the token is allowed to be used until.","type":"string","format":"date-time","x-nullable":true},"limit_num_clients":{"title":"Limit num clients","description":"The maximum number of unique clients allowed for the token. Please note that since clients are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.","type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"x-nullable":true},"limit_num_downloads":{"title":"Limit num downloads","description":"The maximum number of downloads allowed for the token. Please note that since downloads are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.","type":"integer","maximum":9223372036854776000,"minimum":-9223372036854776000,"x-nullable":true},"limit_package_query":{"title":"Limit package query","description":"The package-based search query to apply to restrict downloads to. This uses the same syntax as the standard search used for repositories, and also supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. This will still allow access to non-package files, such as metadata.","type":"string","maxLength":1024,"x-nullable":true},"limit_path_query":{"title":"Limit path query","description":"THIS WILL SOON BE DEPRECATED, please use limit_package_query instead. The path-based search query to apply to restrict downloads to. This supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. The path evaluated does not include the domain name, the namespace, the entitlement code used, the package format, etc. and it always starts with a forward slash.","type":"string","maxLength":1024,"x-nullable":true},"metadata":{"title":"Metadata","type":"object","x-nullable":true},"scheduled_reset_at":{"title":"Scheduled reset at","description":"The time at which the scheduled reset period has elapsed and the token limits were automatically reset to zero.","type":"string","format":"date-time","x-nullable":true},"scheduled_reset_period":{"title":"Scheduled reset period","type":"string","enum":["Never Reset","Daily","Weekly","Fortnightly","Monthly","Bi-Monthly","Quarterly","Every 6 months","Annual"],"default":"Never Reset","x-nullable":true},"token":{"title":"Token","type":"string","minLength":1}},"x-ref":"#/definitions/RepositoryTokenRefreshRequest"},"index$":3},{"name":"show_tokens","in":"query","description":"Show entitlement token strings in results","required":false,"type":"boolean","default":false,"index$":4}]}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const repository_token_refresh_ref01_ent = client.RepositoryTokenRefresh()
    let repository_token_refresh_ref01_data = setup.data.new.repository_token_refresh['repository_token_refresh_ref01']
    repository_token_refresh_ref01_data['identifier'] = setup.idmap['identifier01']
    repository_token_refresh_ref01_data['owner'] = setup.idmap['owner01']
    repository_token_refresh_ref01_data['repo'] = setup.idmap['repo01']

    repository_token_refresh_ref01_data = (await repository_token_refresh_ref01_ent.create(repository_token_refresh_ref01_data)).data()
    assert(null != repository_token_refresh_ref01_data)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/repository_token_refresh/RepositoryTokenRefreshTestData.json')

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
    ['repository_token_refresh01','repository_token_refresh02','repository_token_refresh03','entitlement01','entitlement02','entitlement03','identifier01','owner01','repo01'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'CLOUDSMITH_TEST_REPOSITORY_TOKEN_REFRESH_ENTID': idmap,
    'CLOUDSMITH_TEST_LIVE': 'FALSE',
    'CLOUDSMITH_TEST_EXPLAIN': 'FALSE',
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_REPOSITORY_TOKEN_REFRESH_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_REPOSITORY_TOKEN_REFRESH_ENTID']
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
  
