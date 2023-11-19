# Locale List

В случае необходимости подключения к проекту только списка доступных локалей, Вы можете воспользоваться
пакетом [`laravel-lang/locale-list`](../../installation/index.md#alternative).

## As enum

```php
use LaravelLang\LocaleList\Locale;

return Locale::Bengali;
```

Result:

```php
LaravelLang\LocaleList\Locale {#11
  +name: "Bengali"
  +value: "bn"
}
```

## List of codes

:::tip
This list is not sorted during output.
:::

```php
use LaravelLang\LocaleList\Locale;

return Locale::values();
```

Result:

```php
array:79 [
  0 => "af"
  1 => "sq"
  2 => "ar"
  3 => "hy"
  4 => "az"
  5 => "eu"
  6 => "be"
  7 => "bn"
  8 => "bs"
  9 => "bg"
  ...
]
```

## List of titles

:::tip
This list is sorted alphabetically because the names are used as the keys of the enum class.
:::

```php
use LaravelLang\LocaleList\Locale;

return Locale::names();
```

Result:

```php
array:79 [
  0 => "Afrikaans"
  1 => "Albanian"
  2 => "Arabic"
  3 => "Armenian"
  4 => "Azerbaijani"
  5 => "Basque"
  6 => "Belarusian"
  7 => "Bengali"
  8 => "Bosnian"
  9 => "Bulgarian"
  ...
]
```

## List of codes and names

```php
use LaravelLang\LocaleList\Locale;

return Locale::options();
```

Result:

```php
array:79 [
  "Afrikaans"   => "af"
  "Albanian"    => "sq"
  "Arabic"      => "ar"
  "Armenian"    => "hy"
  "Azerbaijani" => "az"
  "Basque"      => "eu"
  "Belarusian"  => "be"
  "Bengali"     => "bn"
  "Bosnian"     => "bs"
  "Bulgarian"   => "bg"
  ...
]
```
