# Upgrade Guide

## From `laravel-lang/*` to `laravel-lang/common`

::: tip
Check the version of the framework and PHP against the [compatibility](../compatibility/common.md) table.
:::

First remove the old dependencies:

```bash:no-line-numbers
composer remove laravel-lang/publisher laravel-lang/lang laravel-lang/attributes laravel-lang/http-statuses
```

After that, install the `laravel-lang/common` version of the desired version.

If you are using the list of localizations from the `Laravel Lang: Publisher` package in production, then use this command:

```bash:no-line-numbers
composer require laravel-lang/common
```

Otherwise, we recommend installing dependencies in the `dev` block:

```bash:no-line-numbers
composer require laravel-lang/common --dev
```

Enjoy! 🙂

## From `caouecs/laravel-lang`

If you are using the old version of the `laravel-lang/lang` package when it was called `caouecs/laravel-lang`, then you need to follow the steps below to upgrade.

You also need to remove all package managers responsible for installing localizations in the project. You can do all this with one command:

```bash:no-line-numbers
composer remove caouecs/laravel-lang laravel-lang/publisher overtrue/laravel-lang arcanedev/laravel-lang andrey-helldar/laravel-lang-publisher
```

Next, you need to delete the `config/lang-publisher.php` file if it exists:

```bash:no-line-numbers
rm -f config/lang-publisher.php
```

After that, you can install the latest version of `Laravel Lang`:

```bash:no-line-numbers
composer require laravel-lang/common --dev
```
