<?php

namespace App\Services;

use App\Models\Family;

class PricingEngineService
{
    public function buildDeltaDraftPreview(Family $family, int $delta, array $filters = []): array
    {
        $products = $family->products()->where('is_active', true)->get();

        if (isset($filters['ram'])) {
            $products = $products->where('ram', $filters['ram']);
        }
        if (isset($filters['ssd'])) {
            $products = $products->where('ssd', $filters['ssd']);
        }
        if (!empty($filters['product_ids'])) {
            $products = $products->whereIn('id', $filters['product_ids']);
        }

        return $products->map(function ($product) use ($delta) {
            $suggested = max(0, $product->current_price + $delta);
            $margin = $product->cost_price > 0 ? (($suggested - $product->cost_price) / $product->cost_price) * 100 : 0;
            return [
                'product_id' => $product->id,
                'sku' => $product->sku,
                'title' => $product->title,
                'old_price' => $product->current_price,
                'suggested_price' => $suggested,
                'final_price' => $suggested,
                'margin_warning' => $margin < (float) $product->minimum_margin,
            ];
        })->values()->all();
    }
}
