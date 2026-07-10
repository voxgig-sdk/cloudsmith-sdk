<?php
declare(strict_types=1);

// Cloudsmith SDK exists test

require_once __DIR__ . '/../cloudsmith_sdk.php';

use PHPUnit\Framework\TestCase;

class ExistsTest extends TestCase
{
    public function test_create_test_sdk(): void
    {
        $testsdk = CloudsmithSDK::test(null, null);
        $this->assertNotNull($testsdk);
    }
}
