<?php

declare(strict_types=1);

namespace App\Services;

use LaravelLang\LocaleList\Locale;

class Locales
{
    protected static string $filePath = __DIR__ . '/../../docs/usage/available-locales.md';

    public static function generate(): void
    {
        static::store(
            static::compile(
                static::availableNames(),
                static::availableNatives()
            )
        );
    }

    protected static function compile(array $names, array $natives): string
    {
        return static::compilePage(
            static::compileLocales($names, $natives)
        );
    }

    protected static function compileLocales(array $names, array $natives): array
    {
        $locales = [];

        foreach (Locale::values() as $code) {
            $locales[] = Template::locale($code, $names, $natives);
        }

        return $locales;
    }

    protected static function available(): array
    {
        $locales = require __DIR__ . '/../../vendor/laravel-lang/locales/config/private.php';

        return $locales['map'] ?? [];
    }

    protected static function availableNames(): array
    {
        return static::load(__DIR__ . '/../../vendor/laravel-lang/native-locale-names/source/locales.json');
    }

    protected static function availableNatives(): array
    {
        return static::load(__DIR__ . '/../../vendor/laravel-lang/native-locale-names/locales/_native/json.json');
    }

    protected static function compilePage(array $locales): string
    {
        return Template::page($locales);
    }

    protected static function store(string $content): void
    {
        $directory = dirname(static::$filePath);

        if (! is_dir($directory)) {
            mkdir($directory, 0o755, true);
        }

        file_put_contents(static::$filePath, $content);
    }

    protected static function load(string $path): array
    {
        return json_decode(file_get_contents($path), true, 512, JSON_THROW_ON_ERROR);
    }
}
