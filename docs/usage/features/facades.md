# Facades

Perhaps the facades will be useful to you:

```php
use LaravelLang\Locales\Facades\Locales;
use LaravelLang\Locales\Enums\Locale;

// List of available localizations.
Locales::available(): array

// List of installed localizations.
Locales::installed(): array

// List of uninstalled localizations.
Locales::notInstalled(): array

// Retrieving a list of protected locales.
Locales::protects(): array

// Check if language packs are available in requested locale.
Locales::isAvailable(Locale|string|null $locale): bool

// Check if a language pack is installed.
Locales::isInstalled(Locale|string|null $locale): bool

// The checked locale protecting.
Locales::isProtected(Locale|string|null $locale): bool

// Getting the default localization name.
Locales::getDefault(): string

// Getting the fallback localization name.
Locales::getFallback(): string
```

To use this functionality, make sure you have
the [laravel-lang/locales](../../installation/about.md#laravel-lang-locales) package installed.
