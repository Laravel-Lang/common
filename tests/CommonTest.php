<?php

declare(strict_types=1);

namespace Tests;

use LaravelLang\Publisher\Constants\Locales;

class CommonTest extends TestCase
{
    public function testAdd(): void
    {
        $this->assertDirectoryExists(lang_path(Locales::ENGLISH));
        $this->assertDirectoryDoesNotExist(lang_path(Locales::AFRIKAANS));
        $this->assertDirectoryDoesNotExist(lang_path(Locales::ALBANIAN));
        $this->assertDirectoryDoesNotExist(lang_path(Locales::ARABIC));

        $this->artisan('lang:add', [
            'locales' => [Locales::AFRIKAANS, Locales::ALBANIAN, Locales::ARABIC],
        ])->assertSuccessful();

        $this->assertDirectoryExists(lang_path(Locales::ENGLISH));
        $this->assertDirectoryExists(lang_path(Locales::AFRIKAANS));
        $this->assertDirectoryExists(lang_path(Locales::ALBANIAN));
        $this->assertDirectoryExists(lang_path(Locales::ARABIC));
    }

    public function testUpdate(): void
    {
        $this->testAdd();

        $this->artisan('lang:update')->assertSuccessful();

        $this->assertDirectoryExists(lang_path(Locales::ENGLISH));
        $this->assertDirectoryExists(lang_path(Locales::AFRIKAANS));
        $this->assertDirectoryExists(lang_path(Locales::ALBANIAN));
        $this->assertDirectoryExists(lang_path(Locales::ARABIC));
    }

    public function testRemove(): void
    {
        $this->testAdd();

        $this->artisan('lang:rm')
            ->expectsConfirmation('Do you want to remove all localizations?', 'yes')
            ->assertSuccessful();

        $this->assertDirectoryExists(lang_path(Locales::ENGLISH));
        $this->assertDirectoryDoesNotExist(lang_path(Locales::AFRIKAANS));
        $this->assertDirectoryDoesNotExist(lang_path(Locales::ALBANIAN));
        $this->assertDirectoryDoesNotExist(lang_path(Locales::ARABIC));

        //

        $this->testAdd();

        $this->artisan('lang:rm', [
            'locales' => Locales::ALBANIAN,
        ])->assertSuccessful();

        $this->assertDirectoryExists(lang_path(Locales::ENGLISH));
        $this->assertDirectoryExists(lang_path(Locales::AFRIKAANS));
        $this->assertDirectoryDoesNotExist(lang_path(Locales::ALBANIAN));
        $this->assertDirectoryExists(lang_path(Locales::ARABIC));
    }

    public function testReset(): void
    {
        $this->testAdd();

        $this->artisan('lang:reset')
            ->expectsConfirmation('Do you want to reset all localizations?', 'yes')
            ->assertSuccessful();

        $this->assertDirectoryExists(lang_path(Locales::ENGLISH));
        $this->assertDirectoryExists(lang_path(Locales::AFRIKAANS));
        $this->assertDirectoryExists(lang_path(Locales::ALBANIAN));
        $this->assertDirectoryExists(lang_path(Locales::ARABIC));

        $this->artisan('lang:reset', [
            'locales' => Locales::ALBANIAN,
        ])->assertSuccessful();

        $this->assertDirectoryExists(lang_path(Locales::ENGLISH));
        $this->assertDirectoryExists(lang_path(Locales::AFRIKAANS));
        $this->assertDirectoryExists(lang_path(Locales::ALBANIAN));
        $this->assertDirectoryExists(lang_path(Locales::ARABIC));
    }
}
