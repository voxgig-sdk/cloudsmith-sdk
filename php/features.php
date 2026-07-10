<?php
declare(strict_types=1);

// Cloudsmith SDK feature factory

require_once __DIR__ . '/feature/BaseFeature.php';
require_once __DIR__ . '/feature/TestFeature.php';


class CloudsmithFeatures
{
    public static function make_feature(string $name)
    {
        switch ($name) {
            case "base":
                return new CloudsmithBaseFeature();
            case "test":
                return new CloudsmithTestFeature();
            default:
                return new CloudsmithBaseFeature();
        }
    }
}
