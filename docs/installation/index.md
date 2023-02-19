# Installation

## Quick Start

```bash:no-line-numbers
composer require laravel-lang/common --dev

php artisan lang:add fr

php artisan lang:update
```

## Recommended

To get the latest version of `Laravel Lang: Common`, simply require the project using [Composer](https://getcomposer.org):

```bash:no-line-numbers
composer require --dev laravel-lang/common
```

> Note
> 
> If you are using the list of localizations from the `Laravel Lang: Publisher` package in production, then use this command instead:
> 
> ```bash:no-line-numbers
> composer require laravel-lang/common
> ```

Now you can manage localizations:

* Add
* Update
* Reset
* Remove

## Alternative

You can also install certain packages (check the [compatibility tables](compatibility/index.md)):

```bash:no-line-numbers
composer require --dev laravel-lang/publisher

composer require --dev laravel-lang/lang
composer require --dev laravel-lang/attributes
composer require --dev laravel-lang/http-statuses
```
