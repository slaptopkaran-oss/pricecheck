# Production Architecture Plan (MVP)

## Backend (Laravel)
- Domain modules: Auth, Dashboard, Families, Products, ReviewQueue, PricingDrafts, PricingApplication, WooSync, History, Settings, Users.
- Layers per module: Controller -> Request Validator -> Service -> Repository -> Model.
- Cross-cutting services: `PricingEngineService`, `WooCommerceSyncService`, Audit logger.
- Auth: Sanctum token auth, role checks (`admin`, `pricing_operator`, `viewer`).

## Data integrity
- Source-of-truth keys: `family_id`, `family_code`, `product_id`, `sku`, `woo_product_id`.
- Product title is presentation-only.
- One active family per product via FK relation.
- Pricing drafts are immutable audit artifacts after approval/rejection.

## Queue strategy
- `review_queue` sorted by `is_pinned DESC`, `priority_score DESC`, overdue (`next_check_at ASC`), `last_checked_at ASC`.
- status flow: Needs Review -> Draft Created -> Pending Approval -> Approved -> Applied/Rejeted/Ignored.

## Frontend (Next.js App Router)
- Route groups by modules.
- Shared components: data grids, filters, modal preview, toasts, confirm dialogs, skeletons.
- Keyboard-first: cmd+k action bar, row selection shortcuts, enter-to-approve in draft preview.

## Pricing engine behavior
- Delta and rule-based modes.
- Subset targeting by RAM/SSD/product set/custom set.
- Margin guardrail computes warning from `cost_price` and `minimum_margin`.
- Partial apply supported via `pricing_draft_items.is_selected`.

## WooCommerce integration
- Pull products by paging and map by `woo_product_id`/`sku`.
- Push batch price updates with retry/backoff and per-item log entries in `woo_sync_logs`.
- Variation updates supported through `product_guarantees.woo_variation_id`.
