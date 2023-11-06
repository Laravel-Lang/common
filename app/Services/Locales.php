<?php

declare(strict_types=1);

namespace App\Services;

use DragonCode\Support\Facades\Filesystem\File;

class Locales
{
    protected static string $filePath = __DIR__ . '/../../docs/usage/available-locales.md';

    public static function generate(): void
    {
        static::store(
            static::compilePage(static::compileLocales())
        );
    }

    protected static function compileLocales(): array
    {
        $locales = [];

        foreach (static::available() as $code => $data) {
            $locales[] = Template::locale($code, $data);
        }

        return $locales;
    }

    protected static function available(): array
    {
        $locales = require __DIR__ . '/../../vendor/laravel-lang/locales/config/private.php';

        return $locales['map'] ?? [];
    }

    protected static function compilePage(array $locales): string
    {
        return Template::page($locales);
    }

    protected static function store(string $content): void
    {
        File::store(static::$filePath, $content);
    }
}
