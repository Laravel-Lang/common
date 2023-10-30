# From `laravel-lang/*`

::: tip
Check the version of the framework and PHP against the [compatibility](../compatibility/common.md) table.
:::

First remove the old dependencies:

```bash:no-line-numbers
composer remove laravel-lang/publisher laravel-lang/lang laravel-lang/attributes laravel-lang/http-statuses
```

After that, install the `laravel-lang/common` version of the desired version.

```bash:no-line-numbers
composer require laravel-lang/common --dev
```

If you want to use the list of locales in production, then install the dependency separately:

```bash:no-line-numbers
composer require laravel-lang/locales
```

Enjoy! 🙂
