# JSON Fallback Hotfix

To get the latest version of `Laravel Lang: JSON Fallback Hotfix`, simply require the project using [Composer](https://getcomposer.org):

```bash:no-line-numbers
composer require laravel-lang/json-fallback-hotfix
```

Next, in the `providers` section of the `config/app.php` file, replace `Illuminate\Translation\TranslationServiceProvider::class`
with `LaravelLang\JsonFallbackHotfix\TranslationServiceProvider::class`.

It's all 😊

## What's fixed

Out of the box, Laravel [doesn't allow](https://github.com/laravel/framework/issues/41565#issuecomment-1073572954) fallback translations for JSON keys.

For example, when you call `__('Remember Me')`, you get `Remember Me` instead of `Se souvenir de moi` for French fallback language.

This package solves this problem.
