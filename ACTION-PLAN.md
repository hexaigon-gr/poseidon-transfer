# Poseidon Transfer — Action Plan (Sprint 2 final)

Score: **91 / 100** (was 52 → 84 → 91). Goal of 90 reached.

The remaining 9 points need things that **only the operator can do** — claim a Google Business Profile, get TripAdvisor listing, collect reviews. None of it is coding work.

Effort: 🟢 < 1h · 🟡 1-4h · 🔴 > 4h.

---

## 🚨 CRITICAL — must do first

### C1. Deploy to production 🟡
**Why:** All this work is local. The live https://www.poseidontransfer.com is still pre-sprint with 0 schemas, 4 broken sitemap URLs, English Greek footer, etc. **Nothing ships value until you push.**
**After deploy:**
- Verify schemas: https://search.google.com/test/rich-results?url=https%3A%2F%2Fwww.poseidontransfer.com%2Fen-US%2Ftour%2Fposeidon-temple-sounio
- Submit sitemap in Google Search Console
- Test mobile + LCP on PageSpeed Insights
- Confirm security headers in browser devtools

---

## 🔥 HIGH — within 1 week

### H1. Claim Google Business Profile 🟡
**Why:** Single biggest off-page lever. Local pack appears **above** organic results for "athens private tour" / "luxury athens tour". Free, takes ~30 minutes.
**Action:**
1. https://business.google.com → search "Poseidon Transfers & Tours" → claim
2. Verify by phone, postcard, or video
3. Categories: "Tour operator" + "Limousine service" + "Airport shuttle service"
4. Service area: Athens, Attica, all of Greece
5. Hours: 24/7
6. Phone: +30 6976550034
7. Photos: 5+ (hero, fleet, tours)
8. Once verified, paste profile URL into [lib/data/config.ts](lib/data/config.ts) `SOCIAL.googleBusinessProfile`

### H2. Open TripAdvisor business listing 🟡
**Why:** Tour-intent traffic + strongest `Organization.sameAs` signal for tourism.
**Action:** https://www.tripadvisor.com/GetListedNew → "Tour & Activity" → fill out completely with photos. Once approved, paste URL into `SOCIAL.tripadvisor`.

### H3. Set up review collection workflow 🟡
**Why:** Stars in the SERP via `AggregateRating` schema. Biggest CTR multiplier for tour-intent queries.
**Action:**
1. After every tour, send the customer:
   - Google review request: `https://search.google.com/local/writereview?placeid=<your-place-id>`
   - TripAdvisor review request: from your TA dashboard
2. Aim for 5 reviews in week 1, 10 by month 1.
3. Once you have 5+ real reviews with average rating, set in [lib/data/config.ts](lib/data/config.ts):
```ts
export const AGGREGATE_RATING = { ratingValue: "4.9", reviewCount: 12 };
```
4. Schema activates automatically across `LocalBusiness`, every `TouristTrip`, every `Service`.

**⚠️ Do NOT invent reviews.** Google penalizes fake schema heavily.

### H4. Fill in real BUSINESS metadata in config 🟢
**Where:** [lib/data/config.ts](lib/data/config.ts) `BUSINESS` object. All fields are optional — schema fields are gracefully omitted when null.
**Set when known:**
- `foundedYear` (e.g. `2018`)
- `ownerName` (e.g. `"Dimitris Papadakis"`) — strengthens E-E-A-T
- `vatNumber` (Greek ΑΦΜ)
- `eotLicense` (EOT registration number — Greek tourism law)
- `primaryAddress.streetAddress` if you have a real office
- `primaryAddress.postalCode`
- `geo.latitude` / `geo.longitude` if office isn't Athens center

### H5. Real Instagram / Facebook URLs 🟢
**Where:** [lib/data/config.ts](lib/data/config.ts) `SOCIAL`
**Action:** Replace `null` with real profile URLs. Icons reappear in footer + ContactSection automatically. URLs join `Organization.sameAs` schema.

---

## 🟡 MEDIUM — within 1 month

### M1. More cornerstone blog posts (5 more) 🔴
**Why:** Each = fresh chance to rank for a long-tail commercial query, more internal links to tours.
**Suggested next:**
- "Mycenae, Nafplio, Epidaurus day trip: complete guide" → `mycenae day trip from athens`
- "Best private tours from Athens for first-time visitors" → `best ancient places tours athens`
- "Private vs group tours in Athens: which is worth it?" → `private vs group tour athens`
- "Athens with kids: private family-friendly tours" → `athens family tours`
- "Wedding car service in Athens: planning guide" → `athens wedding car`

Pattern in [lib/data/blog.ts](lib/data/blog.ts) — clean, just add objects. Each: 1,500-2,000 words, 6-8 sections, FAQ schema, related-tour cards.

### M2. More service landing pages 🔴
Same pattern as `/services/athens-airport-private-transfer` — add:
- `/services/piraeus-cruise-port-transfer` → targeting `piraeus cruise port pickup`, `piraeus to athens transfer`
- `/services/wedding-car-service-athens` → niche but premium
- `/services/business-travel-athens` → corporate

Each ~1,200 words with `Service` schema + FAQ.

### M3. Replace static testimonials with real Google Reviews 🟡
Once GBP is set up and you have 5+ reviews, embed them via the Google Places API. Adds real `Review` markup to LocalBusiness schema.

### M4. Switch 307 redirects to 308 🟢
Add `permanent: true` to next.config.ts redirects when you build any custom redirects. Vercel/next-intl defaults stay 307 but those don't materially hurt rankings.

---

## 🔵 LOW — backlog

### L1. CSP header 🟡
Adds a few Lighthouse Best Practices points. Define in `next.config.ts` `headers()`.

### L2. Tour-specific images for blog posts 🟡
Currently all 3 blog posts reuse tour photos. Hiring a photographer for original shots strengthens uniqueness signals.

### L3. YouTube channel 🔴
5 short tour videos (Sounion sunset, Acropolis morning, Meteora drive) on YouTube linked from `Organization.sameAs` strengthens entity recognition for AI engines. Big lift but high payoff.

### L4. Schedule a follow-up audit 🟢
After deploy + GBP claim + 1 month of real reviews, re-audit. Realistic target: 95-97.

---

## Suggested order

If you can spend ~3 hours total on the operator-side work this week:

1. **Hour 1**: Deploy + verify in Search Console
2. **Hour 2**: Claim Google Business Profile, fill out completely
3. **Hour 3**: Open TripAdvisor listing, fill out, plus paste real social URLs into config

That's the **path from 91 to ~95**.

Past that, M1 (more blog posts) and M2 (more service pages) are the long-term content moat. Doing one a week for 3 months gets you to a competitive content footprint vs. Viator/GetYourGuide on the long-tail queries you can actually win.

---

## What's now ranking-ready vs. what isn't

### Ready to compete (post-deploy)
- `temple of poseidon day tour`, `cape sounion sunset tour` → Sounio page + blog
- `athens private tour`, `luxury athens tour`, `private tours athens` → hub page
- `athens half day tour`, `athens day tours` → half-day tour + hub
- `athens to delphi day trip`, `delphi private tour` → Delphi tour + blog
- `meteora tour from athens` → Meteora tour
- `mycenae tour from athens` → Mycenae tour
- `athens cruise port to acropolis`, `piraeus shore excursion` → cruise blog post + half-day tour
- `athens airport private transfer`, `ATH airport private pickup` → service page (new)
- `corinth canal tour`, `ancient corinth tour` → Corinth tour
- `ancient olympia private tour` → Olympia tour
- `athens food tour private` → food tour

### Still needs Google Business Profile to compete
- `athens private tour` (local pack)
- `luxury car service athens` (local pack)
- `tour operator athens` (local pack)
- "Near me" mobile searches — entirely depend on GBP

### Still needs reviews to compete on CTR
- Any query where Viator/GetYourGuide already rank with star ratings — without `AggregateRating` your organic listings show no stars even if they rank.
