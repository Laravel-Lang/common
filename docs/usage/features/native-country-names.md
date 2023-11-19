# Native Country Names

If you want to get a localized list of countries, then simply call the `Native::get()` method from
the [`laravel-lang/native-country-names`](../../installation/index.md#installation) package.

## Localized Names

```php
use LaravelLang\NativeCountryNames\Native;
use LaravelLang\LocaleList\Locale;

return Native::get('bn');
// or
return Native::get(Locale::Bengali)
```

Result:

```php
array:79 [
  "is" => "আইসল্যান্ড"
  "az" => "আজারবাইজান"
  "ps" => "আফগানিস্তান"
  "hy" => "আর্মেনিয়া"
  "sq" => "আলবেনিয়া"
  "uk" => "ইউক্রেন"
  "he" => "ইজরায়েল"
  "it" => "ইতালি"
  "sc" => "ইতালি"
  "id" => "ইন্দোনেশিয়া"
  "fa" => "ইরান"
  // ...
]
```

## Native Names

You can also get a list of localized names if you call the `get` method without passing parameters.
The same thing will happen if you pass an incorrect or empty value to the parameter.

```php
use LaravelLang\NativeCountryNames\Native;

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
  "az" => "Azərbaycan"
  "bs" => "Bosna I Hercegovina"
  "pt" => "Brasil"
  "pt_BR" => "Brasil"
  "sr_Latn_ME" => "Crna Gora"
  "da" => "Danmark"
  "de" => "Deutschland"
  "et" => "Eesti"
  "eu" => "Espainia"
  "ca" => "Espanya"
  "es" => "España"
  "gl" => "España"
  "oc" => "Fr"
  "fr" => "France"
  "hr" => "Hrvatska"
  "id" => "Indonesia"
  "it" => "Italia"
  "sc" => "Itàlia"
  "lv" => "Latvija"
  "lt" => "Lietuva"
  "hu" => "Magyarország"
  "ms" => "Malaysia"
  "nl" => "Nederland"
  "nn" => "Noreg"
  "nb" => "Norge"
  "uz_Latn" => "Oʻzbekiston"
  "tl" => "Philippines"
  "fil" => "Pilipinas"
  "pl" => "Polska"
  "ro" => "România"
  "de_CH" => "Schweiz"
  "sq" => "Shqipëri"
  "sl" => "Slovenija"
  "sk" => "Slovensko"
  "sr_Latn" => "Srbija"
  "af" => "Suid-Afrika"
  "fi" => "Suomi"
  "sv" => "Sverige"
  "sw" => "Tanzania"
  "tr" => "Türkiye"
  "tk" => "Türkmenistan"
  "en" => "United States"
  "vi" => "Việt Nam"
  "cy" => "Y Deyrnas Unedig"
  "is" => "Ísland"
  "cs" => "Česko"
  "el" => "Ελλάδα"
  "uz_Cyrl" => "Ўзбекистон"
  "be" => "Беларусь"
  "bg" => "България"
  "mn" => "Монгол"
  "ru" => "Россия"
  "mk" => "Северна Македонија"
  "sr_Cyrl" => "Србија"
  "tg" => "Тоҷикистон"
  "uk" => "Україна"
  "kk" => "Қазақстан"
  "hy" => "Հայաստան"
  "he" => "ישראל"
  "ps" => "افغانستان"
  "fa" => "ایران"
  "ug" => "جۇڭگو"
  "ar" => "مصر"
  "ur" => "پاکستان"
  "ne" => "नेपाल"
  "hi" => "भारत"
  "mr" => "भारत"
  "bn" => "বাংলাদেশ"
  "gu" => "ભારત"
  "kn" => "ಭಾರತ"
  "si" => "ශ්\u{200D}රී ලංකාව"
  "th" => "ไทย"
  "ka" => "საქართველო"
  "km" => "កម្ពុជា"
  "zh_CN" => "中国"
  "zh_HK" => "中国香港特别行政区"
  "zh_TW" => "台湾"
  "ja" => "日本"
  "ko" => "대한민국"
]
```

## Sorting

To get the result sorted by key or value, pass `SortBy` to the enum parameter.

By default, sorting by values is applied.

### Sort By Keys

```php
use LaravelLang\NativeCountryNames\Native;
use LaravelLang\NativeCountryNames\Enums\SortBy;

return Native::get('en', SortBy::Key);
```

Result:

```php
array:79 [
  "af" => "South Africa"
  "ar" => "Egypt"
  "az" => "Azerbaijan"
  "be" => "Belarus"
  "bg" => "Bulgaria"
  "bn" => "Bangladesh"
  "bs" => "Bosnia & Herzegovina"
  "ca" => "Spain"
  "cs" => "Czechia"
  // ...
]
```

### Sort By Values

```php
use LaravelLang\NativeCountryNames\Native;
use LaravelLang\NativeCountryNames\Enums\SortBy;

return Native::get('en', SortBy::Value);
// or
return Native::get('en');
```

Result:

```php
array:79 [
  "ps" => "Afghanistan"
  "sq" => "Albania"
  "hy" => "Armenia"
  "az" => "Azerbaijan"
  "bn" => "Bangladesh"
  "be" => "Belarus"
  "bs" => "Bosnia & Herzegovina"
  "pt" => "Brazil"
  // ...
]
```
