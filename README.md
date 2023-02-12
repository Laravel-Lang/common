# Laravel Lang Common

![laravel lang common](https://preview.dragon-code.pro/laravel-lang/common.svg?brand=laravel&invert=1)

[![Stable Version][badge_stable]][link_packagist]
[![Unstable Version][badge_unstable]][link_packagist]
[![Total Downloads][badge_downloads]][link_packagist]
[![Github Workflow Status][badge_build]][link_build]
[![License][badge_license]][link_license]


## Installation

To get the latest version of `Laravel Lang Common`, simply require the project using [Composer](https://getcomposer.org):

```bash
composer require laravel-lang/common
```

Or manually update `require` block of `composer.json` and run the `composer update` console command:

```json
{
    "require": {
        "laravel-lang/common": "^3.0"
    }
}
```

## Compatibility

| Laravel, Lumen | PHP                | Package Version | What packages will be installed                              |
|----------------|--------------------|-----------------|--------------------------------------------------------------|
| 8.x, 9.x, 10.x | 8.1, 8.2           | `^3.0`          | Publisher 14.x, Lang 12.x, Attributes 2.x, HTTP Statuses 3.x |
| 7.x, 8.x, 9.x  | 8.0, 8.1           | `^2.0`          | Publisher 13.x, Lang 10.x, Attributes 1.x, HTTP Statuses 2.x |
| 7.x, 8.x, 9.x  | 7.3, 7.4, 8.0, 8.1 | `^1.0`          | Publisher 12.x, Lang 10.x, Attributes 1.x, HTTP Statuses 2.x |

## License

This package is licensed under the [MIT License](LICENSE).


[badge_build]:          https://img.shields.io/github/actions/workflow/status/laravel-lang/common/phpunit.yml?style=flat-square

[badge_downloads]:      https://img.shields.io/packagist/dt/laravel-lang/common.svg?style=flat-square

[badge_license]:        https://img.shields.io/packagist/l/laravel-lang/common.svg?style=flat-square

[badge_stable]:         https://img.shields.io/github/v/release/laravel-lang/common?label=stable&style=flat-square

[badge_unstable]:       https://img.shields.io/badge/unstable-dev--main-orange?style=flat-square

[link_build]:           https://github.com/laravel-lang/common/actions

[link_license]:         LICENSE

[link_packagist]:       https://packagist.org/packages/laravel-lang/common
