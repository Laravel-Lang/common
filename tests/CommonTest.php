<?php

declare(strict_types=1);

namespace Tests;

use LaravelLang\LocaleList\Locale;

class CommonTest extends TestCase
{
    public function testAdd(): void
    {
        $this->assertDirectoryExists($this->langPath(Locale::English));
        $this->assertDirectoryDoesNotExist($this->langPath(Locale::Afrikaans));
        $this->assertDirectoryDoesNotExist($this->langPath(Locale::Albanian));
        $this->assertDirectoryDoesNotExist($this->langPath(Locale::Arabic));

        $this->artisan('lang:add', [
            'locales' => [Locale::Afrikaans, Locale::Albanian, Locale::Arabic],
        ])->assertExitCode(0);

        $this->assertDirectoryExists($this->langPath(Locale::English));
        $this->assertDirectoryExists($this->langPath(Locale::Afrikaans));
        $this->assertDirectoryExists($this->langPath(Locale::Albanian));
        $this->assertDirectoryExists($this->langPath(Locale::Arabic));
    }

    public function testUpdate(): void
    {
        $this->testAdd();

        $this->artisan('lang:update')->assertExitCode(0);

        $this->assertDirectoryExists($this->langPath(Locale::English));
        $this->assertDirectoryExists($this->langPath(Locale::Afrikaans));
        $this->assertDirectoryExists($this->langPath(Locale::Albanian));
        $this->assertDirectoryExists($this->langPath(Locale::Arabic));
    }

    public function testRemove(): void
    {
        $this->testAdd();

        $this->artisan('lang:rm')
            ->expectsConfirmation('Do you want to remove all localizations?', 'yes')
            ->assertExitCode(0);

        $this->assertDirectoryExists($this->langPath(Locale::English));
        $this->assertDirectoryDoesNotExist($this->langPath(Locale::Afrikaans));
        $this->assertDirectoryDoesNotExist($this->langPath(Locale::Albanian));
        $this->assertDirectoryDoesNotExist($this->langPath(Locale::Arabic));

        $this->testAdd();

        $this->artisan('lang:rm', [
            'locales' => Locale::Albanian,
        ])->assertExitCode(0);

        $this->assertDirectoryExists($this->langPath(Locale::English));
        $this->assertDirectoryExists($this->langPath(Locale::Afrikaans));
        $this->assertDirectoryDoesNotExist($this->langPath(Locale::Albanian));
        $this->assertDirectoryExists($this->langPath(Locale::Arabic));
    }

    public function testReset(): void
    {
        $this->testAdd();

        $this->artisan('lang:reset')
            ->expectsConfirmation('Are you sure you want to reset localization files?', 'yes')
            ->assertExitCode(0);

        $this->assertDirectoryExists($this->langPath(Locale::English));
        $this->assertDirectoryExists($this->langPath(Locale::Afrikaans));
        $this->assertDirectoryExists($this->langPath(Locale::Albanian));
        $this->assertDirectoryExists($this->langPath(Locale::Arabic));
    }
}
