<?php
declare(strict_types=1);

// Cloudsmith SDK utility: feature_add

class CloudsmithFeatureAdd
{
    public static function call(CloudsmithContext $ctx, mixed $f): void
    {
        $ctx->client->features[] = $f;
    }
}
