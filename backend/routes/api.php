<?php

use App\Http\Controllers\Api\PricingDraftController;
use Illuminate\Support\Facades\Route;

Route::middleware('auth:sanctum')->group(function () {
    Route::post('/pricing-drafts/preview', [PricingDraftController::class, 'preview']);
});
