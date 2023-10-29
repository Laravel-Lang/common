# About

Below is a list of projects we are developing with a description of their purpose.

## `laravel-lang/common`

This package is needed for quick installation and updating of all our projects.

When installing it, all the main packages necessary for working with localizations and translations will be installed
in the application.

## `laravel-lang/locales`

This package contains the core mechanics for working with locales.

It can display the following lists of locales:

- available for installation
- installed locales
- not installed locales
- protected localizations

It can also check that the locale:

- available for installation
- installed in the application
- is protected

In addition, the package can receive the main and backup locales and check them for validity.

It can also work with locale aliases.

## `laravel-lang/publisher`

This package is needed to install translations from plug-in packages.

For example, `laravel-lang/lang`.

## `laravel-lang/lang`

This project contains translations of all available official project keys from the [Laravel](https://laravel.com) team:

- Breeze
- Cashier Stripe
- Fortify
- Jetstream
- Nova
- Spark Aurelius Mollie
- Spark Aurelius
- Spark Paddle
- Spark Stripe
- UI
- Laravel Framework
- Lumen Framework

## `laravel-lang/attributes`

This project contains the translation of custom names for form fields. The list of fields is determined by contributors
and translated by our community.

The specified keys are set to the `attributes` section of the validation error file.

## `laravel-lang/http-statuses`

This project contains translations of all HTTP statuses.

## `laravel-lang/json-fallback-hotfix`

This package solves the problem of using JSON translations in applications where the fallback locale is not English.

Out of the box, Laravel [doesn't allow](https://github.com/laravel/framework/issues/41565#issuecomment-1073572954)
fallback translations for JSON keys.

For example, when you call `__('Remember Me')`, you get `Remember Me` instead of `Se souvenir de moi` for French
fallback language.

This package solves this problem.
