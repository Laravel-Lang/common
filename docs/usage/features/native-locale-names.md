# Native Locale Names

If you want to get a localized list of languages, then simply call the `Native::get()` method from
the [`laravel-lang/native-locale-names`](../../installation/index.md) package.

## Localized Names

```php
use LaravelLang\NativeLocaleNames\Native;
use LaravelLang\Locales\Enums\Locale;

return Native::get('bn');
// or
return Native::get(Locale::Bengali)
```

Result:

```php
array:79 [
  "af" => "আফ্রিকান"
  "ar" => "আরবি"
  "az" => "আজারবাইজানীয় (ল্যাটিন)"
  "be" => "বেলারুশিয়ান"
  "bg" => "বুলগেরিয়ান"
  "bn" => "বাংলা"
  // ...
]
```

## Native Names

You can also get a list of localized names if you call the `get` method without passing parameters.
The same thing will happen if you pass an incorrect or empty value to the parameter.

```php
use LaravelLang\NativeLocaleNames\Native;

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
  "af" => "Afrikaans"
  "az" => "Azərbaycan (Latın)"
  "id" => "Bahasa Indonesia"
  "bs" => "Bosanski"
  "ca" => "Català"
  "cy" => "Cymraeg"
  "da" => "Dansk"
  "de" => "Deutsch"
  "et" => "Eesti Keel"
  "en" => "English"
  "es" => "Español"
  "eu" => "Euskara"
  "fil" => "Filipino"
  "fr" => "Français"
  "gl" => "Galego"
  "hr" => "Hrvatski"
  "it" => "Italiano"
  "sw" => "Kiswahili"
  "lv" => "Latviski"
  "lt" => "Lietuvių"
  "hu" => "Magyar"
  "ms" => "Melayu"
  "nl" => "Nederlands"
  "nb" => "Norsk Bokmål"
  "nn" => "Norsk Nynorsk"
  "uz_Cyrl" => "O'zbek (Kirill)"
  "oc" => "Occitan"
  "pl" => "Polski"
  "pt_BR" => "Portugues Do Brasil"
  "pt" => "Português"
  "ro" => "Română"
  "sc" => "Sardinian"
  "de_CH" => "Schweizer Hochdeutsch"
  "sr_Latn" => "Serbian (Latin)"
  "sr_Latn_ME" => "Serbian (Montenegro)"
  "sq" => "Shqiptare"
  "sk" => "Slovenský"
  "sl" => "Slovenščina"
  "fi" => "Suomalainen"
  "sv" => "Svenska"
  "tl" => "Tagalog"
  "vi" => "Tiếng Việt"
  "tk" => "Türkmenler"
  "tr" => "Türkçe"
  "uz_Latn" => "Uzbek (Latin)"
  "is" => "Íslenskur"
  "cs" => "Čeština"
  "el" => "Ελληνικά"
  "be" => "Беларускі"
  "bg" => "Български"
  "mk" => "Македонски"
  "mn" => "Монгол"
  "ru" => "Русский"
  "sr_Cyrl" => "Српски (Ћирилица)"
  "tg" => "Тоҷикӣ (Кириллӣ)"
  "uk" => "Українська"
  "kk" => "Қазақ"
  "hy" => "Հայերեն"
  "he" => "עִברִית"
  "ug" => "ئۇيغۇر"
  "ur" => "اردو"
  "ar" => "عربي"
  "fa" => "فارسی"
  "ps" => "پښتو"
  "ne" => "नेपाली"
  "mr" => "मराठी"
  "hi" => "हिंदी"
  "bn" => "বাংলা"
  "gu" => "ગુજરાતી"
  "kn" => "ಕನ್ನಡ"
  "si" => "සිංහල"
  "th" => "แบบไทย"
  "ka" => "ქართული"
  "km" => "ខ្មែរ"
  "zh_TW" => "中文（台灣）"
  "zh_HK" => "中文（香港）"
  "ja" => "日本語"
  "zh_CN" => "简体中文）"
  "ko" => "한국인"
]
```

## Sorting

To get the result sorted by key or value, pass `SortBy` to the enum parameter.

By default, sorting by values is applied.

### Sort By Keys

```php
use LaravelLang\NativeLocaleNames\Native;
use LaravelLang\NativeLocaleNames\Enums\SortBy;

return Native::get('en', SortBy::Key);
```
Result:
```php
array:79 [
  "af" => "Afrikaans"
  "ar" => "Arabic"
  "az" => "Azerbaijani (Latin)"
  "be" => "Belarusian"
  "bg" => "Bulgarian"
  "bn" => "Bengali"
  "bs" => "Bosnian"
  "ca" => "Catalan"
  "cs" => "Czech"
  // ...
]
```

### Sort By Values

```php
use LaravelLang\NativeLocaleNames\Native;
use LaravelLang\NativeLocaleNames\Enums\SortBy;

return Native::get('en', SortBy::Value);
// or
return Native::get('en');
```
Result:
```php
array:79 [
  "af" => "Afrikaans"
  "sq" => "Albanian"
  "ar" => "Arabic"
  "hy" => "Armenian"
  "az" => "Azerbaijani (Latin)"
  "eu" => "Basque"
  "be" => "Belarusian"
  "bn" => "Bengali"
  "bs" => "Bosnian"
  // ...
]
```
