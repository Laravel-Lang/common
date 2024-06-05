<?php

declare(strict_types=1);

namespace Tests;

use DragonCode\Support\Facades\Filesystem\Directory;
use LaravelLang\Attributes\ServiceProvider as AttributesServiceProvider;
use LaravelLang\Config\ServiceProvider as ConfigServiceProvider;
use LaravelLang\HttpStatuses\ServiceProvider as HttpStatusesServiceProvider;
use LaravelLang\Lang\ServiceProvider as LangServiceProvider;
use LaravelLang\LocaleList\Locale;
use LaravelLang\Locales\ServiceProvider as LocalesServiceProvider;
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
            LocalesServiceProvider::class,
            LangServiceProvider::class,
            AttributesServiceProvider::class,
            HttpStatusesServiceProvider::class,
            PublisherServiceProvider::class,
            ConfigServiceProvider::class,
        ];
    }

    protected function cleanUp(): void
    {
        Directory::ensureDelete($this->langPath());
        Directory::ensureDirectory($this->langPath(Locale::English));
    }

    protected function langPath(?Locale $locale = null): string
    {
        return lang_path($locale->value ?? '');
    }
}
