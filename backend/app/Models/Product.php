<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['family_id', 'woo_product_id', 'sku', 'title', 'cpu', 'ram', 'ssd', 'gpu', 'current_price', 'cost_price', 'minimum_margin', 'torob_url', 'is_reference_product', 'is_active'];

    public function family(): BelongsTo
    {
        return $this->belongsTo(Family::class);
    }

    public function guarantees(): HasMany
    {
        return $this->hasMany(ProductGuarantee::class);
    }
}
