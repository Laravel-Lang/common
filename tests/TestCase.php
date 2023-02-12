<?php

declare(strict_types=1);

namespace Tests;

use DragonCode\Support\Facades\Helpers\Filesystem\Directory;
use LaravelLang\Attributes\ServiceProvider as AttributesServiceProvider;
use LaravelLang\HttpStatuses\ServiceProvider as HttpStatusesServiceProvider;
use LaravelLang\Lang\ServiceProvider as LangServiceProvider;
use LaravelLang\Publisher\ServiceProvider as PublisherServiceProvider;
use Orchestra\Testbench\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected function setUp(): void
    {
        parent::setUp();

        $this->cleanUp();
    }

    protected function getPackageProviders($app): array
    {
        return [
            LangServiceProvider::class,
            AttributesServiceProvider::class,
            HttpStatusesServiceProvider::class,
            PublisherServiceProvider::class,
        ];
    }

    protected function cleanUp(): void
    {
        Directory::ensureDelete(lang_path());
        Directory::ensureDirectory(lang_path('en'));
    }
}
