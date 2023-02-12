<?php

declare(strict_types=1);

namespace Tests;

use LaravelLang\Attributes\ServiceProvider as AttributesServiceProvider;
use LaravelLang\Lang\ServiceProvider as LangServiceProvider;
use LaravelLang\Publisher\ServiceProvider as PublisherServiceProvider;
use Orchestra\Testbench\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    protected function getPackageProviders($app): array
    {
        return [
            LangServiceProvider::class,
            AttributesServiceProvider::class,
            PublisherServiceProvider::class,
        ];
    }
}
