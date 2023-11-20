# Installation

## Quick Start

```bash:no-line-numbers
composer require laravel-lang/common --dev

php artisan lang:add fr

php artisan lang:update
```

## Recommended

To get the latest version of `Laravel Lang: Common`, simply require the project
using [Composer](https://getcomposer.org):

```bash:no-line-numbers
composer require --dev laravel-lang/common
```

::: tip
If you need a list of locales in production, separately install the `laravel-lang/locales` dependency by calling the
console command:

```bash:no-line-numbers
composer require laravel-lang/locales
```

:::

Now you can manage localizations:

* [Add locale](../usage/add-locales.md)
* [Update locale](../usage/update-locales.md)
* [Reset locale](../usage/reset-locales.md)
* [Remove locale](../usage/remove-locales.md)

## Alternative

You can also install certain packages (check the [support policy](../prologue/releases.md)):

```bash:no-line-numbers
composer require --dev laravel-lang/publisher

composer require --dev laravel-lang/lang
composer require --dev laravel-lang/attributes
composer require --dev laravel-lang/http-statuses

composer require laravel-lang/locales
composer require laravel-lang/locale-list
composer require laravel-lang/native-locale-names
composer require laravel-lang/native-country-names
composer require laravel-lang/native-currency-names
```
