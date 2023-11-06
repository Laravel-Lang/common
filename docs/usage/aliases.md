# Aliases

If you want to name codes differently, such as `de-DE` instead of `de` or `de-CH` instead of `de_CH`, you can define
aliases in
the [`configuration file`](https://github.com/Laravel-Lang/locales/blob/main/config/public.php).

After that, all adding, updating, and deleting actions will automatically use the specified aliases.

For example, `config/localization.php` config file:

```php
use LaravelLang\Locales\Enums\Locale;

return [
    'aliases' => [
        Locale::German->value => 'de-DE',

        Locale::GermanSwitzerland->value => 'de-CH',
    ],
];
```

If the `config/localization.php` file already exists, then you can add the `aliases` key in it and specify the desired
aliases using a data array.

After this, you can, for example, add new localizations by specifying both the main code and its alias:

```bash:no-line-numbers
php artisan lang:add de de_CH
```

Installed locales will use the specified aliases as folder names for PHP translations and file names for JSON
translations:

```
lang
    de-CH
    de-DE
```
