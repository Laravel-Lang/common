# Facades

## With DTOs

```php
use LaravelLang\Locales\Data\Locale as LocaleData;
use LaravelLang\Locales\Enums\Locale;
use LaravelLang\Locales\Facades\Locales;

// List of available localizations.
Locales::available(): array // array<LocaleData>

// List of installed localizations.
Locales::installed(): array // array<LocaleData>

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

// Getting the default localization name.
Locales::getDefault(): LocaleData

// Getting the fallback localization name.
Locales::getFallback(): LocaleData
```

For example:

```php
return Locales::getDefault();

// Non aliased
LaravelLang\Locales\Data\Locale {
  +code: "de"
  +type: "Latn"
  +name: "German"
  +native: "Deutsch"
  +regional: "de_DE"
}

// Aliased
LaravelLang\Locales\Data\Locale {
  +code: "de-DE"
  +type: "Latn"
  +name: "German"
  +native: "Deutsch"
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
Locales::raw()->installed(): array // array<string>

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

To use this functionality, make sure you have
the [laravel-lang/locales](../../installation/about.md#laravel-lang-locales) package installed.
