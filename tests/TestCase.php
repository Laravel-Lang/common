<?php

declare(strict_types=1);

namespace Tests;

use DragonCode\Support\Facades\Filesystem\Directory;
use LaravelLang\Attributes\ServiceProvider as AttributesServiceProvider;
use LaravelLang\HttpStatuses\ServiceProvider as HttpStatusesServiceProvider;
use LaravelLang\Lang\ServiceProvider as LangServiceProvider;
use LaravelLang\Publisher\Constants\Locales;
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
        Directory::ensureDelete($this->langPath());
        Directory::ensureDirectory($this->langPath(Locales::ENGLISH));
    }

    protected function langPath(?Locales $locale = null): string
    {
        return lang_path($locale->value ?? '');
    }
}
