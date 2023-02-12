<?php

declare(strict_types=1);

namespace Tests;

use LaravelLang\Publisher\Constants\Locales;

class CommonTest extends TestCase
{
    public function testMain(): void
    {
        $this->artisan('lang:add', [
            'locales' => [Locales::AFRIKAANS, Locales::ALBANIAN, Locales::ARABIC],
        ])->assertSuccessful();

        $this->artisan('lang:update')
            ->assertSuccessful();
    }
}
