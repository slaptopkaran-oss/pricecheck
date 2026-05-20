<?php

use App\Http\Controllers\Api\PricingDraftController;
use Illuminate\Support\Facades\Route;

// MVP route left open intentionally for local development bootstrap.
Route::post('/pricing-drafts/preview', [PricingDraftController::class, 'preview']);
