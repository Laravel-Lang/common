<?php

declare(strict_types=1);

namespace App\Services;

use DragonCode\Support\Facades\Helpers\Str;

class Template
{
    protected static ?string $localeStub = null;

    protected static ?string $pageStub = null;

    public static function locale(string $code, array $names, array $natives): string
    {
        return Str::replaceFormat(static::localeStub(), [
            'code'   => $code,
            'locale' => Str::title($names[$code]),
            'native' => Str::title($natives[$code]),
        ], '{{%s}}');
    }

    public static function page(array $locales): string
    {
        return Str::replaceFormat(static::pageStub(), [
            'content' => implode(PHP_EOL . PHP_EOL, $locales),
        ], '{{%s}}');
    }

    protected static function localeStub(): string
    {
        return static::$localeStub ??= static::stub('available-locale');
    }

    protected static function pageStub(): string
    {
        return static::$pageStub ??= static::stub('available-locales');
    }

    protected static function stub(string $filename): string
    {
        return trim(file_get_contents(__DIR__ . '/../../resources/stubs/' . $filename . '.stub'));
    }
}
