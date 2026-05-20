<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;

class WooCommerceSyncService
{
    public function pushPrice(int $wooProductId, int $newPrice): array
    {
        $response = Http::withBasicAuth(config('services.woocommerce.key'), config('services.woocommerce.secret'))
            ->put(config('services.woocommerce.url') . "/wp-json/wc/v3/products/{$wooProductId}", [
                'regular_price' => (string) $newPrice,
            ]);

        return ['ok' => $response->successful(), 'body' => $response->json(), 'status' => $response->status()];
    }
}
