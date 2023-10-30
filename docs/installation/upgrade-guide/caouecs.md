# From `caouecs/laravel-lang`

If you are using the old version of the `laravel-lang/lang` package when it was called `caouecs/laravel-lang`, then you
need to follow the steps below to upgrade.

You also need to remove all package managers responsible for installing localizations in the project. You can do all
this with one command:

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
