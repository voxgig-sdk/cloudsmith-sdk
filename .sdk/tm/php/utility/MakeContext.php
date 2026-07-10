<?php
declare(strict_types=1);

// Cloudsmith SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class CloudsmithMakeContext
{
    public static function call(array $ctxmap, ?CloudsmithContext $basectx): CloudsmithContext
    {
        return new CloudsmithContext($ctxmap, $basectx);
    }
}
