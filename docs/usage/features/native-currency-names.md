# Native Currency Names

If you want to get a localized list of currencies, then simply call the `Native::get()` method from
the [`laravel-lang/native-currency-names`](../../installation/index.md#alternative) package.

## Localized Names

```php
use LaravelLang\NativeCurrencyNames\Native;
use LaravelLang\LocaleList\Locale;

return Native::get('bn');
// or
return Native::get(Locale::Bengali)
```

Result:

```php
array:79 [
  "af" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "af"
    +country: "ZA"
    +code: "ZAR"
    +numeric: 710
    +name: "South African Rand"
    +native: "Suid-Afrikaanse rand"
    +localized: "দক্ষিণ আফ্রিকান রেন্ড"
  }
  "sq" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "sq"
    +country: "AL"
    +code: "ALL"
    +numeric: 8
    +name: "Albanian Lek"
    +native: "Leku shqiptar"
    +localized: "আলবেনিয়ান লেক"
  }
  "ar" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "ar"
    +country: "EG"
    +code: "EGP"
    +numeric: 818
    +name: "Egyptian Pound"
    +native: "جنيه مصري"
    +localized: "মিশরীয় পাউন্ড"
  }
  // ...
]
```

## Native Names

You can also get a list of localized names if you call the `get` method without passing parameters.
The same thing will happen if you pass an incorrect or empty value to the parameter.

```php
use LaravelLang\NativeCurrencyNames\Native;

return Native::get();
// or
return Native::get('');
// or
return Native::get(null);
// or
return Native::get('foo');
```

Result:

```php
array:79 [
  "af" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "af"
    +country: "ZA"
    +code: "ZAR"
    +numeric: 710
    +name: "South African Rand"
    +native: "Suid-Afrikaanse rand"
    +localized: "Suid-Afrikaanse rand"
  }
  "sq" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "sq"
    +country: "AL"
    +code: "ALL"
    +numeric: 8
    +name: "Albanian Lek"
    +native: "Leku shqiptar"
    +localized: "Leku shqiptar"
  }
  "ar" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "ar"
    +country: "EG"
    +code: "EGP"
    +numeric: 818
    +name: "Egyptian Pound"
    +native: "جنيه مصري"
    +localized: "جنيه مصري"
  }
  // ...
]
```

## Sorting

To get the result sorted by key or value, pass `SortBy` to the enum parameter.

By default, sorting by values is applied.

### Sort By Keys

```php
use LaravelLang\NativeCurrencyNames\Native;
use LaravelLang\NativeCurrencyNames\Enums\SortByy;

return Native::get('en', SortBy::Key);
```

Result:

```php
array:79 [
  "af" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "af"
    +country: "ZA"
    +code: "ZAR"
    +numeric: 710
    +name: "South African Rand"
    +native: "Suid-Afrikaanse rand"
    +localized: "South African Rand"
  }
  "sq" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "sq"
    +country: "AL"
    +code: "ALL"
    +numeric: 8
    +name: "Albanian Lek"
    +native: "Leku shqiptar"
    +localized: "Albanian Lek"
  }
  "ar" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "ar"
    +country: "EG"
    +code: "EGP"
    +numeric: 818
    +name: "Egyptian Pound"
    +native: "جنيه مصري"
    +localized: "Egyptian Pound"
  }
  // ...
]
```

### Sort By Values

```php
use LaravelLang\NativeCurrencyNames\Native;
use LaravelLang\NativeCurrencyNames\Enums\SortByy;

return Native::get('en', SortBy::Value);
// or
return Native::get('en');
```

Result:

```php
array:79 [
  "af" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "af"
    +country: "ZA"
    +code: "ZAR"
    +numeric: 710
    +name: "South African Rand"
    +native: "Suid-Afrikaanse rand"
    +localized: "South African Rand"
  }
  "sq" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "sq"
    +country: "AL"
    +code: "ALL"
    +numeric: 8
    +name: "Albanian Lek"
    +native: "Leku shqiptar"
    +localized: "Albanian Lek"
  }
  "ar" => LaravelLang\NativeCurrencyNames\Data\CurrencyData {
    +locale: "ar"
    +country: "EG"
    +code: "EGP"
    +numeric: 818
    +name: "Egyptian Pound"
    +native: "جنيه مصري"
    +localized: "Egyptian Pound"
  }
  // ...
]
```
