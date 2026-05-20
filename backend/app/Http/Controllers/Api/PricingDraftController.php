<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePricingDraftRequest;
use App\Models\Family;
use App\Services\PricingEngineService;
use Illuminate\Http\JsonResponse;

class PricingDraftController extends Controller
{
    public function __construct(private readonly PricingEngineService $pricingEngine)
    {
    }

    public function preview(StorePricingDraftRequest $request): JsonResponse
    {
        $family = Family::findOrFail($request->integer('family_id'));
        $preview = $this->pricingEngine->buildDeltaDraftPreview(
            $family,
            (int) $request->input('delta_value', 0),
            (array) $request->input('filters', [])
        );

        return response()->json([
            'family' => $family->only(['id', 'family_code', 'title']),
            'items' => $preview,
        ]);
    }
}
