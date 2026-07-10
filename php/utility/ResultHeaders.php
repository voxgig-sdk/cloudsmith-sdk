<?php
declare(strict_types=1);

// Cloudsmith SDK utility: result_headers

class CloudsmithResultHeaders
{
    public static function call(CloudsmithContext $ctx): ?CloudsmithResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
