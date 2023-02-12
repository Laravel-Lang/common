<?php

declare(strict_types=1);

namespace Tests;

use LaravelLang\Publisher\Constants\Locales;

class CommonTest extends TestCase
{
    public function testAdd(): void
    {
        $this->assertDirectoryExists($this->langPath(Locales::ENGLISH));
        $this->assertDirectoryDoesNotExist($this->langPath(Locales::AFRIKAANS));
        $this->assertDirectoryDoesNotExist($this->langPath(Locales::ALBANIAN));
        $this->assertDirectoryDoesNotExist($this->langPath(Locales::ARABIC));

        $this->artisan('lang:add', [
            'locales' => [Locales::AFRIKAANS, Locales::ALBANIAN, Locales::ARABIC],
        ])->assertSuccessful();

        $this->assertDirectoryExists($this->langPath(Locales::ENGLISH));
        $this->assertDirectoryExists($this->langPath(Locales::AFRIKAANS));
        $this->assertDirectoryExists($this->langPath(Locales::ALBANIAN));
        $this->assertDirectoryExists($this->langPath(Locales::ARABIC));
    }

    public function testUpdate(): void
    {
        $this->testAdd();

        $this->artisan('lang:update')->assertSuccessful();

        $this->assertDirectoryExists($this->langPath(Locales::ENGLISH));
        $this->assertDirectoryExists($this->langPath(Locales::AFRIKAANS));
        $this->assertDirectoryExists($this->langPath(Locales::ALBANIAN));
        $this->assertDirectoryExists($this->langPath(Locales::ARABIC));
    }

    public function testRemove(): void
    {
        $this->testAdd();

        $this->artisan('lang:rm')
            ->expectsConfirmation('Do you want to remove all localizations?', 'yes')
            ->assertSuccessful();

        $this->assertDirectoryExists($this->langPath(Locales::ENGLISH));
        $this->assertDirectoryDoesNotExist($this->langPath(Locales::AFRIKAANS));
        $this->assertDirectoryDoesNotExist($this->langPath(Locales::ALBANIAN));
        $this->assertDirectoryDoesNotExist($this->langPath(Locales::ARABIC));

        //

        $this->testAdd();

        $this->artisan('lang:rm', [
            'locales' => Locales::ALBANIAN,
        ])->assertSuccessful();

        $this->assertDirectoryExists($this->langPath(Locales::ENGLISH));
        $this->assertDirectoryExists($this->langPath(Locales::AFRIKAANS));
        $this->assertDirectoryDoesNotExist($this->langPath(Locales::ALBANIAN));
        $this->assertDirectoryExists($this->langPath(Locales::ARABIC));
    }

    public function testReset(): void
    {
        $this->testAdd();

        $this->artisan('lang:reset')
            ->expectsConfirmation('Do you want to reset all localizations?', 'yes')
            ->assertSuccessful();

        $this->assertDirectoryExists($this->langPath(Locales::ENGLISH));
        $this->assertDirectoryExists($this->langPath(Locales::AFRIKAANS));
        $this->assertDirectoryExists($this->langPath(Locales::ALBANIAN));
        $this->assertDirectoryExists($this->langPath(Locales::ARABIC));

        $this->artisan('lang:reset', [
            'locales' => Locales::ALBANIAN,
        ])->assertSuccessful();

        $this->assertDirectoryExists($this->langPath(Locales::ENGLISH));
        $this->assertDirectoryExists($this->langPath(Locales::AFRIKAANS));
        $this->assertDirectoryExists($this->langPath(Locales::ALBANIAN));
        $this->assertDirectoryExists($this->langPath(Locales::ARABIC));
    }
}
