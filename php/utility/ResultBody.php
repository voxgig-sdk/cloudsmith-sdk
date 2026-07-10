<?php
declare(strict_types=1);

// Cloudsmith SDK utility: result_body

class CloudsmithResultBody
{
    public static function call(CloudsmithContext $ctx): ?CloudsmithResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
