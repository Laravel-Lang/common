# Facades

Perhaps the facades will be useful to you:

```php
use LaravelLang\Publisher\Facades\Helpers\Locales;

// List of available localizations.
Locales::available(): array

// List of installed localizations.
Locales::installed(): array

// List of installed localizations without protected codes.
Locales::installedWithoutProtects(): array

// List of uninstalled localizations.
Locales::notInstalled(): array

// Retrieving a list of protected locales.
Locales::protects(): array

// Check if language packs are available in requested locale.
Locales::isAvailable(LocaleCode|string|null $locale): bool

// Check if a language pack is installed.
Locales::isInstalled(LocaleCode|string|null $locale): bool

// The checked locale protecting.
Locales::isProtected(LocaleCode|string|null $locale): bool

// Getting the default localization name.
Locales::getDefault(): string

// Getting the fallback localization name.
Locales::getFallback(): string
```
