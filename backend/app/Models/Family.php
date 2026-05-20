<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Family extends Model
{
    use HasFactory;

    protected $fillable = ['family_code', 'title', 'priority', 'status', 'notes', 'last_checked_at', 'next_check_at'];

    public function products(): HasMany
    {
        return $this->hasMany(Product::class);
    }
}
