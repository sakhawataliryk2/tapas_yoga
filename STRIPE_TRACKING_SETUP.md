# Stripe → GTM Purchase Tracking — Setup Reference

## What Was Built

| File | Purpose |
|------|---------|
| `app/api/stripe/create-session/route.ts` | Creates a Stripe Checkout Session with `success_url` pointing to `/thank-you` |
| `app/api/stripe/session/route.ts` | Retrieves session details server-side (keeps secret key off client) |
| `app/checkout/CheckoutButtons.tsx` | Client component — replaces static `<a>` links, calls the API, redirects to Stripe |
| `app/checkout/page.tsx` | Updated to use `CheckoutButtons` instead of hardcoded Payment Links |
| `app/thank-you/page.tsx` | Confirmation page — fetches session, pushes `purchase` event to GTM dataLayer |
| `.env.local` | Environment variables (fill in real values before deploying) |

---

## Before Going Live — Required Steps

### 1. Fill in `.env.local`

```
STRIPE_SECRET_KEY=sk_live_...       ← from Stripe Dashboard → Developers → API Keys
NEXT_PUBLIC_BASE_URL=https://thetapasyoga.com
```

> Use `sk_test_...` for testing, `sk_live_...` for production.

### 2. Verify Stripe Account Settings

In **Stripe Dashboard → Settings → Checkout**:
- Enable the payment methods you want (Card is already set)
- Optionally enable Apple Pay / Google Pay

---

## GTM Configuration (Manual — in GTM UI)

### Step 1 — Data Layer Variables

Create these in **Variables → User-Defined Variables → Data Layer Variable**:

| Variable Name | Data Layer Variable Name |
|---|---|
| `dlv - transaction_id` | `ecommerce.transaction_id` |
| `dlv - value` | `ecommerce.value` |
| `dlv - currency` | `ecommerce.currency` |
| `dlv - items` | `ecommerce.items` |

### Step 2 — Trigger

**Triggers → New → Custom Event**
- Event name: `purchase`
- Name it: `CE - purchase`

### Step 3 — GA4 Event Tag

**Tags → New → Google Analytics: GA4 Event**
- Event name: `purchase`
- Trigger: `CE - purchase`
- Event parameters:
  - `transaction_id` → `{{dlv - transaction_id}}`
  - `value` → `{{dlv - value}}`
  - `currency` → `{{dlv - currency}}`
  - `items` → `{{dlv - items}}`

### Step 4 — Google Ads Conversion Tag (if applicable)

**Tags → New → Google Ads Conversion Tracking**
- Conversion ID + Label: from Google Ads → Tools → Conversions
- Conversion value: `{{dlv - value}}`
- Transaction ID: `{{dlv - transaction_id}}` ← this is the deduplication key
- Trigger: `CE - purchase`

### Step 5 — Publish

Click **Submit** in GTM to publish the container.

---

## How the Full Flow Works

```
User clicks "Pay Deposit" or "Pay in Full"
        ↓
POST /api/stripe/create-session
  → Creates Checkout Session with success_url:
    https://thetapasyoga.com/thank-you?session_id={CHECKOUT_SESSION_ID}
        ↓
User redirected to Stripe hosted checkout
        ↓
Payment completed
        ↓
Stripe redirects to:
  https://thetapasyoga.com/thank-you?session_id=cs_live_xxx
        ↓
/thank-you page loads
  → GET /api/stripe/session?session_id=cs_live_xxx
  → Receives: { id, amount_total, currency, metadata, payment_status }
        ↓
Deduplication check (sessionStorage)
  → If already fired for this session_id → skip
        ↓
window.dataLayer.push({
  event: "purchase",
  ecommerce: {
    transaction_id: "cs_live_xxx",
    value: 4170,
    currency: "USD",
    items: [{ item_name: "200HR Foundation...", ... }]
  }
})
        ↓
GTM fires GA4 Purchase event + Google Ads Conversion
```

---

## Testing Checklist

- [ ] Set `STRIPE_SECRET_KEY=sk_test_...` in `.env.local`
- [ ] Run `npm run dev` locally
- [ ] Go to `/checkout?product=200hr&tier=0&session=0`
- [ ] Click "Pay in Full" — should redirect to Stripe test checkout
- [ ] Use Stripe test card: `4242 4242 4242 4242`, any future date, any CVC
- [ ] After payment, should land on `/thank-you` with order summary
- [ ] Open browser DevTools → Console → check `window.dataLayer` for `purchase` event
- [ ] Refresh the thank-you page — confirm the event does NOT fire again (deduplication)
- [ ] In GTM → Preview mode, verify the `purchase` trigger fires

---

## Deduplication

The thank-you page uses `sessionStorage` to prevent duplicate events:

```js
const dedupKey = `purchased_${data.id}`;
if (sessionStorage.getItem(dedupKey)) return;   // already fired — skip
sessionStorage.setItem(dedupKey, "true");        // mark as fired
// ... push to dataLayer
```

This means: refreshing the page won't double-count. Opening in a new tab won't double-count (sessionStorage is tab-scoped). The Google Ads `transaction_id` field provides a second layer of deduplication on Google's side.
