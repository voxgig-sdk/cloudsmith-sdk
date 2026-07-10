<?php
declare(strict_types=1);

// Cloudsmith SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CloudsmithUtility::setRegistrar(function (CloudsmithUtility $u): void {
    $u->clean = [CloudsmithClean::class, 'call'];
    $u->done = [CloudsmithDone::class, 'call'];
    $u->make_error = [CloudsmithMakeError::class, 'call'];
    $u->feature_add = [CloudsmithFeatureAdd::class, 'call'];
    $u->feature_hook = [CloudsmithFeatureHook::class, 'call'];
    $u->feature_init = [CloudsmithFeatureInit::class, 'call'];
    $u->fetcher = [CloudsmithFetcher::class, 'call'];
    $u->make_fetch_def = [CloudsmithMakeFetchDef::class, 'call'];
    $u->make_context = [CloudsmithMakeContext::class, 'call'];
    $u->make_options = [CloudsmithMakeOptions::class, 'call'];
    $u->make_request = [CloudsmithMakeRequest::class, 'call'];
    $u->make_response = [CloudsmithMakeResponse::class, 'call'];
    $u->make_result = [CloudsmithMakeResult::class, 'call'];
    $u->make_point = [CloudsmithMakePoint::class, 'call'];
    $u->make_spec = [CloudsmithMakeSpec::class, 'call'];
    $u->make_url = [CloudsmithMakeUrl::class, 'call'];
    $u->param = [CloudsmithParam::class, 'call'];
    $u->prepare_auth = [CloudsmithPrepareAuth::class, 'call'];
    $u->prepare_body = [CloudsmithPrepareBody::class, 'call'];
    $u->prepare_headers = [CloudsmithPrepareHeaders::class, 'call'];
    $u->prepare_method = [CloudsmithPrepareMethod::class, 'call'];
    $u->prepare_params = [CloudsmithPrepareParams::class, 'call'];
    $u->prepare_path = [CloudsmithPreparePath::class, 'call'];
    $u->prepare_query = [CloudsmithPrepareQuery::class, 'call'];
    $u->result_basic = [CloudsmithResultBasic::class, 'call'];
    $u->result_body = [CloudsmithResultBody::class, 'call'];
    $u->result_headers = [CloudsmithResultHeaders::class, 'call'];
    $u->transform_request = [CloudsmithTransformRequest::class, 'call'];
    $u->transform_response = [CloudsmithTransformResponse::class, 'call'];
});
