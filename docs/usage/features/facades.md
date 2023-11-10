# Facades

## With DTOs

```php
use LaravelLang\Locales\Facades\Locales;

// List of available localizations.
Locales::available(): array // array<LocaleData>

// List of installed localizations.
Locales::installed(bool $withProtects = true): array // array<LocaleData>

// List of uninstalled localizations.
Locales::notInstalled(): array // array<LocaleData>

// Retrieving a list of protected locales.
Locales::protects(): array // array<LocaleData>

// Check if language packs are available in requested locale.
Locales::isAvailable(Locale|string|null $locale): bool

// Check if a language pack is installed.
Locales::isInstalled(Locale|string|null $locale): bool

// The checked locale protecting.
Locales::isProtected(Locale|string|null $locale): bool

// Validate and returns the correct localization
Locales::get(mixed $locale): LocaleData

// Getting the default localization name.
Locales::getDefault(): LocaleData

// Getting the fallback localization name.
Locales::getFallback(): LocaleData
```

For example:

```php
use LaravelLang\Locales\Data\LocaleData;
use LaravelLang\Locales\Facades\Locales;

// config('app.locale') // de

return Locales::getDefault();

// Non aliased
LocaleData {
  +code: "de"
  +type: "Latn"
  +name: "German"
  +native: "Deutsch"
  +localized: "Deutsch"
  +regional: "de_DE"
}

// Aliased
LocaleData {
  +code: "de-DE"
  +type: "Latn"
  +name: "German"
  +native: "Deutsch"
  +localized: "Deutsch"
  +regional: "de_DE"
}
```
```php
use LaravelLang\Locales\Data\LocaleData;
use LaravelLang\Locales\Facades\Locales;

// config('app.locale') // vi

return Locales::get('de');

LocaleData {
  +code: "de"
  +type: "Latn"
  +name: "German"
  +native: "Deutsch"
  +localized: "Tiếng Đức"
  +regional: "de_DE"
}
```
```php
use LaravelLang\Locales\Data\LocaleData;
use LaravelLang\Locales\Facades\Locales;

// config('app.locale') // de

return Locales::get('foo');

// Will return the default locale
LocaleData {
  +code: "de"
  +type: "Latn"
  +name: "German"
  +native: "Deutsch"
  +localized: "Deutsch"
  +regional: "de_DE"
}
```

## With Raw Data

```php
use LaravelLang\Locales\Enums\Locale;
use LaravelLang\Locales\Facades\Locales;

// List of available localizations.
Locales::raw()->available(): array // array<string>

// List of installed localizations.
Locales::raw()->installed(bool $withProtects = true): array // array<string>

// List of uninstalled localizations.
Locales::raw()->notInstalled(): array // array<string>

// Retrieving a list of protected locales.
Locales::raw()->protects(): array // array<string>

// Check if language packs are available in requested locale.
Locales::raw()->isAvailable(Locale|string|null $locale): bool

// Check if a language pack is installed.
Locales::raw()->isInstalled(Locale|string|null $locale): bool

// The checked locale protecting.
Locales::raw()->isProtected(Locale|string|null $locale): bool

// Validate and returns the correct localization
Locales::raw()->get(mixed $locale): string

// Getting the default localization name.
Locales::raw()->getDefault(): string

// Getting the fallback localization name.
Locales::raw()->getFallback(): string
```

For example:

```php
return Locales::raw()->getDefault();
// Non aliased
// de

// Aliased
// de-DE
```
```php
return Locales::raw()->get('de');
// de

return Locales::raw()->get('foo');
// Will return the default locale
// de
```

To use this functionality, make sure you have
the [laravel-lang/locales](../../installation/about.md#laravel-lang-locales) package installed.
