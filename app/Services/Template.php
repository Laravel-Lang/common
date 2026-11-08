<?php

declare(strict_types=1);

namespace App\Services;

class Template
{
    protected static ?string $localeStub = null;

    protected static ?string $pageStub = null;

    public static function locale(string $code, array $names, array $natives): string
    {
        return static::replace(static::localeStub(), [
            'code'   => $code,
            'locale' => static::title($names[$code]),
            'native' => static::title($natives[$code]),
        ]);
    }

    public static function page(array $locales): string
    {
        return static::replace(static::pageStub(), [
            'content' => implode(PHP_EOL . PHP_EOL, $locales),
        ]);
    }

    /** @param  array<string, string>  $values */
    protected static function replace(string $stub, array $values): string
    {
        $replace = [];

        foreach ($values as $key => $value) {
            $replace['{{' . $key . '}}'] = $value;
        }

        return strtr($stub, $replace);
    }

    protected static function title(string $value): string
    {
        return mb_convert_case($value, MB_CASE_TITLE, 'UTF-8');
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
