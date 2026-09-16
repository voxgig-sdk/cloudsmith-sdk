

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ServiceEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when CLOUDSMITH_TEST_LIVE=TRUE.
  afterEach(liveDelay('CLOUDSMITH_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = CloudsmithSDK.test()
    const ent = testsdk.Service()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.CLOUDSMITH_TEST_LIVE
    for (const op of ['create', 'list', 'update', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'service.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"format":"date-time","name":"created_at","readOnly":true,"req":false,"type":"`$STRING`","index$":0},{"active":true,"name":"created_by","readOnly":true,"req":false,"type":"`$STRING`","index$":1},{"active":true,"format":"uri","name":"created_by_url","readOnly":true,"req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"description","req":false,"short":"The description of the service","type":"`$STRING`","index$":3},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":4},{"active":true,"name":"key","readOnly":true,"req":false,"short":"The API key of the service","type":"`$STRING`","index$":5},{"active":true,"format":"date-time","name":"key_expires_at","readOnly":true,"req":false,"short":"The time at which the API key will expire.","type":"`$STRING`","index$":6},{"active":true,"name":"name","req":true,"short":"The name of the service","type":"`$STRING`","index$":7},{"active":true,"name":"role","req":false,"short":"The role of the service.","type":"`$STRING`","index$":8},{"active":true,"format":"slug","name":"slug","readOnly":true,"req":false,"short":"The slug of the service","type":"`$STRING`","index$":9},{"active":true,"name":"teams","req":false,"type":"`$ARRAY`","index$":10}],"id":{"field":"id","name":"id"},"name":"service","op":{"create":{"input":"data","name":"create","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"POST /orgs/{org}/services/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_services_create\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"description\":{\"description\":\"The description of the service\",\"maxLength\":1024,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the service\",\"maxLength\":120,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role of the service.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Manager\",\"description\":\"The team role associated with the service\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The teams associated with the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"}},\"required\":[\"slug\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"name\"],\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Created the service within the org\",\"schema\":{\"properties\":{\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"created_by\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Created by\",\"type\":\"string\"},\"created_by_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Created by url\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the service\",\"maxLength\":1024,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"key\":{\"description\":\"The API key of the service\",\"readOnly\":true,\"title\":\"Key\",\"type\":\"string\"},\"key_expires_at\":{\"description\":\"The time at which the API key will expire. This will only be populated if the Organization has an active API Key Policy.\",\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Key expires at\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the service\",\"maxLength\":120,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role of the service.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug of the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Manager\",\"description\":\"The team role associated with the service\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The teams associated with the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"}},\"required\":[\"slug\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"name\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Org namespace not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/orgs/{org}/services/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"}],"select":{"exist":["data","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0},{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"service","reqd":true,"type":"`$STRING`"},{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`"}]},"contract":{"id":"POST /orgs/{org}/services/{service}/refresh/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_services_refresh\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"service\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Refreshed the service token successfully.\",\"schema\":{\"properties\":{\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"created_by\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Created by\",\"type\":\"string\"},\"created_by_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Created by url\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the service\",\"maxLength\":1024,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"key\":{\"description\":\"The API key of the service\",\"readOnly\":true,\"title\":\"Key\",\"type\":\"string\"},\"key_expires_at\":{\"description\":\"The time at which the API key will expire. This will only be populated if the Organization has an active API Key Policy.\",\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Key expires at\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the service\",\"maxLength\":120,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role of the service.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug of the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Manager\",\"description\":\"The team role associated with the service\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The teams associated with the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"}},\"required\":[\"slug\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"name\"],\"type\":\"object\"}},\"400\":{\"description\":\"The service token cannot be refreshed.\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Org namespace not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"POST","orig":"/orgs/{org}/services/{service}/refresh/","rename":{"param":{"org":"org_id","service":"id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"},{"var":"id"},{"lit":"refresh"}],"select":{"$action":"refresh","exist":["id","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":1}],"key$":"create"},"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":0}],"query":[{"active":true,"kind":"query","name":"page","orig":"page","reqd":false,"type":"`$INTEGER`","index$":0},{"active":true,"kind":"query","name":"page_size","orig":"page_size","reqd":false,"type":"`$INTEGER`","index$":1},{"active":true,"kind":"query","name":"query","orig":"query","reqd":false,"type":"`$ANY`","index$":2},{"active":true,"kind":"query","name":"sort","orig":"sort","reqd":false,"type":"`$ANY`","index$":3}]},"contract":{"id":"GET /orgs/{org}/services/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_services_list\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"description\":\"A page number within the paginated result set.\",\"in\":\"query\",\"name\":\"page\",\"required\":false,\"type\":\"integer\"},{\"description\":\"Number of results to return per page.\",\"in\":\"query\",\"name\":\"page_size\",\"required\":false,\"type\":\"integer\"},{\"default\":\"\",\"description\":\"A search term for querying of services within an Organization.Available options are: name, role\",\"in\":\"query\",\"name\":\"query\",\"required\":false,\"type\":\"string\"},{\"default\":\"created_at\",\"description\":\"A field for sorting objects in ascending or descending order. Use `-` prefix for descending order (e.g., `-created_at`). Available options: created_at, name, role.\",\"in\":\"query\",\"name\":\"sort\",\"required\":false,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Retrieved the list of services within the org\",\"schema\":{\"items\":{\"properties\":{\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"created_by\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Created by\",\"type\":\"string\"},\"created_by_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Created by url\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the service\",\"maxLength\":1024,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"key\":{\"description\":\"The API key of the service\",\"readOnly\":true,\"title\":\"Key\",\"type\":\"string\"},\"key_expires_at\":{\"description\":\"The time at which the API key will expire. This will only be populated if the Organization has an active API Key Policy.\",\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Key expires at\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the service\",\"maxLength\":120,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role of the service.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug of the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Manager\",\"description\":\"The team role associated with the service\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The teams associated with the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"}},\"required\":[\"slug\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"name\"],\"type\":\"object\"},\"type\":\"array\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Org namespace not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/services/","rename":{"param":{"org":"org_id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"}],"select":{"exist":["org_id","page","page_size","query","sort"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"service","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":1}]},"contract":{"id":"GET /orgs/{org}/services/{service}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_services_read\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"service\",\"required\":true,\"type\":\"string\"}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"OK\",\"schema\":{\"properties\":{\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"created_by\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Created by\",\"type\":\"string\"},\"created_by_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Created by url\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the service\",\"maxLength\":1024,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"key\":{\"description\":\"The API key of the service\",\"readOnly\":true,\"title\":\"Key\",\"type\":\"string\"},\"key_expires_at\":{\"description\":\"The time at which the API key will expire. This will only be populated if the Organization has an active API Key Policy.\",\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Key expires at\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the service\",\"maxLength\":120,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role of the service.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug of the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Manager\",\"description\":\"The team role associated with the service\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The teams associated with the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"}},\"required\":[\"slug\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"name\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"GET","orig":"/orgs/{org}/services/{service}/","rename":{"param":{"org":"org_id","service":"id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"},{"var":"id"}],"select":{"exist":["id","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"},"update":{"input":"data","name":"update","points":[{"active":true,"args":{"params":[{"active":true,"kind":"param","name":"id","orig":"service","reqd":true,"type":"`$STRING`","index$":0},{"active":true,"kind":"param","name":"org_id","orig":"org","reqd":true,"type":"`$STRING`","index$":1}],"query":[{"active":true,"kind":"query","name":"data","orig":"data","reqd":false,"type":"`$OBJECT`","index$":0}]},"contract":{"id":"PATCH /orgs/{org}/services/{service}/","json":"{\"consumes\":[\"application/json\"],\"operationId\":\"orgs_services_partial_update\",\"parameters\":[{\"in\":\"path\",\"name\":\"org\",\"required\":true,\"type\":\"string\"},{\"in\":\"path\",\"name\":\"service\",\"required\":true,\"type\":\"string\"},{\"in\":\"body\",\"name\":\"data\",\"required\":false,\"schema\":{\"properties\":{\"description\":{\"description\":\"The description of the service\",\"maxLength\":1024,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the service\",\"maxLength\":120,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role of the service.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Manager\",\"description\":\"The team role associated with the service\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The teams associated with the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"}},\"required\":[\"slug\"],\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}],\"produces\":[\"application/json\"],\"protocol\":\"http\",\"responses\":{\"200\":{\"description\":\"Updated the service within the org\",\"schema\":{\"properties\":{\"created_at\":{\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Created at\",\"type\":\"string\"},\"created_by\":{\"minLength\":1,\"readOnly\":true,\"title\":\"Created by\",\"type\":\"string\"},\"created_by_url\":{\"format\":\"uri\",\"readOnly\":true,\"title\":\"Created by url\",\"type\":\"string\"},\"description\":{\"description\":\"The description of the service\",\"maxLength\":1024,\"minLength\":1,\"title\":\"Description\",\"type\":\"string\"},\"key\":{\"description\":\"The API key of the service\",\"readOnly\":true,\"title\":\"Key\",\"type\":\"string\"},\"key_expires_at\":{\"description\":\"The time at which the API key will expire. This will only be populated if the Organization has an active API Key Policy.\",\"format\":\"date-time\",\"readOnly\":true,\"title\":\"Key expires at\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the service\",\"maxLength\":120,\"minLength\":1,\"title\":\"Name\",\"type\":\"string\"},\"role\":{\"default\":\"Member\",\"description\":\"The role of the service.\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The slug of the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"readOnly\":true,\"title\":\"Slug\",\"type\":\"string\"},\"teams\":{\"items\":{\"properties\":{\"role\":{\"default\":\"Manager\",\"description\":\"The team role associated with the service\",\"enum\":[\"Manager\",\"Member\"],\"title\":\"Role\",\"type\":\"string\"},\"slug\":{\"description\":\"The teams associated with the service\",\"format\":\"slug\",\"minLength\":1,\"pattern\":\"^[-a-zA-Z0-9_]+$\",\"title\":\"Slug\",\"type\":\"string\"}},\"required\":[\"slug\"],\"type\":\"object\"},\"type\":\"array\"}},\"required\":[\"name\"],\"type\":\"object\"}},\"400\":{\"description\":\"Request could not be processed (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"404\":{\"description\":\"Org namespace not found\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}},\"422\":{\"description\":\"Missing or invalid parameters (see detail).\",\"schema\":{\"properties\":{\"detail\":{\"description\":\"An extended message for the response.\",\"minLength\":1,\"title\":\"Detail\",\"type\":\"string\"},\"fields\":{\"additionalProperties\":{\"items\":{\"minLength\":1,\"type\":\"string\"},\"type\":\"array\"},\"description\":\"A Dictionary of related errors where key: Field and value: Array of Errors related to that field\",\"title\":\"Fields\",\"type\":\"object\"}},\"required\":[\"detail\"],\"type\":\"object\"}}},\"security\":[{\"apikey\":[]},{\"basic\":[]}],\"securitySchemes\":{\"apikey\":{\"in\":\"header\",\"name\":\"X-Api-Key\",\"type\":\"apiKey\"},\"basic\":{\"type\":\"basic\"}},\"securitySource\":\"definition\"}","source":"swagger2","version":1},"kind":"http","method":"PATCH","orig":"/orgs/{org}/services/{service}/","rename":{"param":{"org":"org_id","service":"id"}},"segments":[{"lit":"orgs"},{"var":"org_id"},{"lit":"services"},{"var":"id"}],"select":{"exist":["data","id","org_id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"update"}},"relations":{"ancestors":[["org"]]},"key$":"service","name__orig":"service","Name":"Service","name_":"service","name-":"service","NAME":"SERVICE","index$":106}, {"active":true,"entity":"service","key$":"BasicServiceFlow","kind":"basic","name":"BasicServiceFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"service_ref01"},"match":{"org_id":"org01","service":"service01"},"op":"create","spec":[],"valid":[],"index$":0},{"active":true,"data":{},"input":{},"match":{"org_id":"org01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"service_ref01"}}],"index$":1},{"active":true,"data":{"org_id":"org01"},"input":{"ref":"service_ref01","srcdatavar":"service_ref01_data","suffix":"_up0","textfield":"description"},"match":{},"op":"update","spec":[{"apply":"TextFieldMark","def":{"mark":"Mark01-service_ref01"}}],"valid":[],"index$":2},{"active":true,"data":{},"input":{"ref":"service_ref01","srcdatavar":"service_ref01_data","suffix":"_dt0"},"match":{"id":"service01","org_id":"org01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-service_ref01"}}],"index$":3}]}, 'Service')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select


    // CREATE
    const service_ref01_ent = client.Service()
    let service_ref01_data = setup.data.new.service['service_ref01']
    service_ref01_data['org_id'] = setup.idmap['org01']
    service_ref01_data['service'] = setup.idmap['service01']

    service_ref01_data = (await service_ref01_ent.create(service_ref01_data)).data()
    assert(null != service_ref01_data.id)


    // LIST
    const service_ref01_match: any = {}
    service_ref01_match['org_id'] = setup.idmap['org01']

    const service_ref01_list = (await service_ref01_ent.list(service_ref01_match)).map((e: any) => e.data())

    assert(!isempty(select(service_ref01_list, { id: service_ref01_data.id })))


    // UPDATE
    const service_ref01_data_up0: any = {}
    service_ref01_data_up0.id = service_ref01_data.id
    service_ref01_data_up0 ['org_id'] = setup.idmap['org_id']

    const service_ref01_markdef_up0 = { name: 'description', value: 'Mark01-service_ref01_' + setup.now }
    ;(service_ref01_data_up0 as any)[service_ref01_markdef_up0.name] = service_ref01_markdef_up0.value

    const service_ref01_resdata_up0 = (await service_ref01_ent.update(service_ref01_data_up0)).data()
    assert(service_ref01_resdata_up0.id === service_ref01_data_up0.id)

    assert((service_ref01_resdata_up0 as any)[service_ref01_markdef_up0.name] === service_ref01_markdef_up0.value)


    // LOAD
    const service_ref01_match_dt0: any = {}
    service_ref01_match_dt0.id = service_ref01_data.id
    const service_ref01_data_dt0 = (await service_ref01_ent.load(service_ref01_match_dt0)).data()
    assert(service_ref01_data_dt0.id === service_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

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
    'CLOUDSMITH_APIKEY': '',
  })

  idmap = env['CLOUDSMITH_TEST_SERVICE_ENTID']

  const live = 'TRUE' === env.CLOUDSMITH_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['CLOUDSMITH_TEST_SERVICE_ENTID']
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
  
