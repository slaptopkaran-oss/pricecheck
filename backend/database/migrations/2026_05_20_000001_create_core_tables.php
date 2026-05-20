<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password');
            $table->enum('role', ['admin', 'pricing_operator', 'viewer'])->default('viewer');
            $table->timestamps();
        });

        Schema::create('families', function (Blueprint $table) {
            $table->id();
            $table->string('family_code')->unique();
            $table->string('title');
            $table->unsignedTinyInteger('priority')->default(3);
            $table->enum('status', ['active', 'paused', 'archived'])->default('active');
            $table->text('notes')->nullable();
            $table->timestamp('last_checked_at')->nullable();
            $table->timestamp('next_check_at')->nullable();
            $table->timestamps();
        });

        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->foreignId('family_id')->constrained('families');
            $table->unsignedBigInteger('woo_product_id')->unique();
            $table->string('sku')->unique();
            $table->string('title');
            $table->string('cpu')->nullable();
            $table->string('ram')->nullable();
            $table->string('ssd')->nullable();
            $table->string('gpu')->nullable();
            $table->unsignedBigInteger('current_price')->default(0);
            $table->unsignedBigInteger('cost_price')->default(0);
            $table->decimal('minimum_margin', 5, 2)->default(0);
            $table->string('torob_url')->nullable();
            $table->boolean('is_reference_product')->default(false);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });

        Schema::create('product_guarantees', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products')->cascadeOnDelete();
            $table->string('guarantee_name');
            $table->unsignedBigInteger('woo_variation_id')->nullable();
            $table->unsignedBigInteger('current_price')->default(0);
            $table->string('stock_status')->default('instock');
            $table->timestamps();
        });

        Schema::create('review_queue', function (Blueprint $table) {
            $table->id();
            $table->foreignId('family_id')->constrained('families')->cascadeOnDelete();
            $table->enum('queue_status', ['needs_review', 'draft_created', 'pending_approval', 'approved', 'applied', 'rejected', 'ignored'])->default('needs_review');
            $table->integer('priority_score')->default(0);
            $table->foreignId('assigned_to')->nullable()->constrained('users')->nullOnDelete();
            $table->timestamp('reviewed_at')->nullable();
            $table->boolean('is_pinned')->default(false);
            $table->timestamps();
        });

        Schema::create('pricing_drafts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('family_id')->constrained('families');
            $table->foreignId('created_by')->constrained('users');
            $table->enum('draft_type', ['delta', 'rule']);
            $table->bigInteger('delta_value')->nullable();
            $table->json('rule_json')->nullable();
            $table->enum('status', ['draft', 'approved', 'rejected', 'applied'])->default('draft');
            $table->text('notes')->nullable();
            $table->timestamps();
        });

        Schema::create('pricing_draft_items', function (Blueprint $table) {
            $table->id();
            $table->foreignId('pricing_draft_id')->constrained('pricing_drafts')->cascadeOnDelete();
            $table->foreignId('product_id')->constrained('products');
            $table->unsignedBigInteger('old_price');
            $table->unsignedBigInteger('suggested_price');
            $table->unsignedBigInteger('final_price');
            $table->boolean('margin_warning')->default(false);
            $table->boolean('is_selected')->default(true);
            $table->timestamps();
        });

        Schema::create('price_change_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('family_id')->constrained('families');
            $table->foreignId('product_id')->constrained('products');
            $table->foreignId('pricing_draft_id')->nullable()->constrained('pricing_drafts')->nullOnDelete();
            $table->unsignedBigInteger('old_price');
            $table->unsignedBigInteger('new_price');
            $table->bigInteger('delta');
            $table->enum('action_type', ['draft_created', 'approved', 'rejected', 'applied', 'manual_override']);
            $table->foreignId('applied_by')->constrained('users');
            $table->string('reason')->nullable();
            $table->boolean('manual_approval')->default(true);
            $table->timestamps();
        });

        Schema::create('woo_sync_logs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('product_id')->constrained('products');
            $table->enum('action_type', ['pull', 'push', 'variation_update']);
            $table->enum('status', ['success', 'failed', 'retrying']);
            $table->json('request_payload')->nullable();
            $table->json('response_payload')->nullable();
            $table->text('error_message')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('woo_sync_logs');
        Schema::dropIfExists('price_change_logs');
        Schema::dropIfExists('pricing_draft_items');
        Schema::dropIfExists('pricing_drafts');
        Schema::dropIfExists('review_queue');
        Schema::dropIfExists('product_guarantees');
        Schema::dropIfExists('products');
        Schema::dropIfExists('families');
        Schema::dropIfExists('users');
    }
};
