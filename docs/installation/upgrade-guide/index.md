# Upgrade Guide

## From several projects to `laravel-lang/common`

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
