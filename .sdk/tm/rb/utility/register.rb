# Cloudsmith SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

CloudsmithUtility.registrar = ->(u) {
  u.clean = CloudsmithUtilities::Clean
  u.done = CloudsmithUtilities::Done
  u.make_error = CloudsmithUtilities::MakeError
  u.feature_add = CloudsmithUtilities::FeatureAdd
  u.feature_hook = CloudsmithUtilities::FeatureHook
  u.feature_init = CloudsmithUtilities::FeatureInit
  u.fetcher = CloudsmithUtilities::Fetcher
  u.make_fetch_def = CloudsmithUtilities::MakeFetchDef
  u.make_context = CloudsmithUtilities::MakeContext
  u.make_options = CloudsmithUtilities::MakeOptions
  u.make_request = CloudsmithUtilities::MakeRequest
  u.make_response = CloudsmithUtilities::MakeResponse
  u.make_result = CloudsmithUtilities::MakeResult
  u.make_point = CloudsmithUtilities::MakePoint
  u.make_spec = CloudsmithUtilities::MakeSpec
  u.make_url = CloudsmithUtilities::MakeUrl
  u.param = CloudsmithUtilities::Param
  u.prepare_auth = CloudsmithUtilities::PrepareAuth
  u.prepare_body = CloudsmithUtilities::PrepareBody
  u.prepare_headers = CloudsmithUtilities::PrepareHeaders
  u.prepare_method = CloudsmithUtilities::PrepareMethod
  u.prepare_params = CloudsmithUtilities::PrepareParams
  u.prepare_path = CloudsmithUtilities::PreparePath
  u.prepare_query = CloudsmithUtilities::PrepareQuery
  u.result_basic = CloudsmithUtilities::ResultBasic
  u.result_body = CloudsmithUtilities::ResultBody
  u.result_headers = CloudsmithUtilities::ResultHeaders
  u.transform_request = CloudsmithUtilities::TransformRequest
  u.transform_response = CloudsmithUtilities::TransformResponse
}
