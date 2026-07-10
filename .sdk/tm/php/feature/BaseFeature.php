<?php
declare(strict_types=1);

// Cloudsmith SDK base feature

class CloudsmithBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(CloudsmithContext $ctx, array $options): void {}
    public function PostConstruct(CloudsmithContext $ctx): void {}
    public function PostConstructEntity(CloudsmithContext $ctx): void {}
    public function SetData(CloudsmithContext $ctx): void {}
    public function GetData(CloudsmithContext $ctx): void {}
    public function GetMatch(CloudsmithContext $ctx): void {}
    public function SetMatch(CloudsmithContext $ctx): void {}
    public function PrePoint(CloudsmithContext $ctx): void {}
    public function PreSpec(CloudsmithContext $ctx): void {}
    public function PreRequest(CloudsmithContext $ctx): void {}
    public function PreResponse(CloudsmithContext $ctx): void {}
    public function PreResult(CloudsmithContext $ctx): void {}
    public function PreDone(CloudsmithContext $ctx): void {}
    public function PreUnexpected(CloudsmithContext $ctx): void {}
}
