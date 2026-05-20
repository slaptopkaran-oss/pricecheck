<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePricingDraftRequest extends FormRequest
{
    public function authorize(): bool
    {
        return in_array($this->user()?->role, ['admin', 'pricing_operator']);
    }

    public function rules(): array
    {
        return [
            'family_id' => ['required', 'exists:families,id'],
            'delta_value' => ['nullable', 'integer'],
            'draft_type' => ['required', 'in:delta,rule'],
            'rule_json' => ['nullable', 'array'],
            'filters' => ['nullable', 'array'],
            'filters.ram' => ['nullable', 'string'],
            'filters.ssd' => ['nullable', 'string'],
            'filters.product_ids' => ['nullable', 'array'],
            'filters.product_ids.*' => ['integer', 'exists:products,id'],
        ];
    }
}
