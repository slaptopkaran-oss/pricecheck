<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePricingDraftRequest extends FormRequest
{
    public function authorize(): bool
    {
        // MVP/dev-friendly: allow request without Sanctum session.
        return true;
    }

    public function rules(): array
    {
        return [
            'family_id' => ['required', 'integer', 'exists:families,id'],
            'delta_value' => ['required_if:draft_type,delta', 'nullable', 'integer'],
            'draft_type' => ['required', 'in:delta,rule'],
            'rule_json' => ['required_if:draft_type,rule', 'nullable', 'array'],
            'filters' => ['nullable', 'array'],
            'filters.ram' => ['nullable', 'string', 'max:50'],
            'filters.ssd' => ['nullable', 'string', 'max:50'],
            'filters.product_ids' => ['nullable', 'array'],
            'filters.product_ids.*' => ['integer', 'exists:products,id'],
        ];
    }
}
