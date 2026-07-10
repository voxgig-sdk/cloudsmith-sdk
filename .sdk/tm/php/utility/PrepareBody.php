<?php
declare(strict_types=1);

// Cloudsmith SDK utility: prepare_body

class CloudsmithPrepareBody
{
    public static function call(CloudsmithContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
