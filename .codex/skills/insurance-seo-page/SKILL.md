---
name: insurance-seo-page
description: Use for writing, reviewing, or editing localized insurance SEO/product/route/country/FAQ/comparison pages for Google Search, AI Overviews, AI Search, app/[lang], static params, dynamicParams=false, normalizeLang, SEO metadata, JSON-LD, breadcrumbs, sitemap, robots, hreflang, or canonical URLs.
---

# Insurance SEO Page

AGENTS.md already covers routing, i18n, SEO, and insurance-domain rules. Use this page-specific checklist for exact, legally careful insurance landing pages rather than generic SEO articles.

## Preserve

- Language-prefixed route architecture and `/` to `/en` redirect unless explicitly requested.
- Existing SEO helpers/dictionaries, `SITE_URL`, `generateStaticParams`, `dynamicParams = false`, `normalizeLang`, alternates, breadcrumbs, and JSON-LD patterns.
- Product separation: do not mix Green Card, OC graniczne, OSAGO RF, local border insurance, CASCO, Cargo, CMR, or OCP.

## Content goal

Create practical pages for real insurance scenarios: vehicle registration country, travel route, insurance type, purchase/issue country, term, documents, price logic, coverage limits, and application/purchase flow. Every section must help the user decide whether to apply and what to prepare.

## Required facts

State explicitly where relevant:

- Who provides the service and what role the site has: broker, agent, arrangement service, or information page.
- Where the product is arranged and who the insurer/intermediary is when it can be disclosed.
- Who can use it: policyholder, vehicle owner, driver, company/individual, vehicle registration country, vehicle types.
- What the client receives: PDF policy, certificate, quote, or application confirmation.
- Coverage countries and non-covered countries; if coverage depends on a document/map/list, say the policy only applies to countries marked or listed as covered.
- Documents needed: registration certificate, passport/ID, VIN, plate number, make/model, registration country, term, email/phone.
- Manual review, start date, whether backdating is impossible, non-working-hours handling, and how to correct data errors.
- Price or price logic: vehicle type, term, registration country, route, and insurer rules. Never invent unsupported prices.

## Route page structure

Use this structure unless the existing component/dictionary has a stricter schema:

1. H1: `Insurance for travel from {origin_country} to {destination_country}` localized naturally.
2. Short answer in 2–4 sentences: needed policy, eligibility, coverage, online arrangement, and main limitation.
3. `Does this policy fit {origin_country} → {destination_country}?` Answer directly: yes, no, or depends on vehicle registration country.
4. `Who can apply`: registration country, individual/company, vehicle types, limitations.
5. `Where the insurance is valid`: covered countries and the document/list caveat.
6. `Where the insurance is not valid`: exclusions; say directly when a destination is not covered.
7. `Required documents`: practical list.
8. `Price`: fixed amount only when confirmed, otherwise explain calculation factors.
9. `Processing time`: advance purchase, manual review, best submission timing, non-working hours.
10. `How to apply`: fill form, attach documents, wait for check, pay, receive PDF policy by email.
11. `What to check before travel`: plate, VIN, dates, registration country, covered countries, policyholder data.
12. FAQ with 5–8 practical questions.
13. CTA: concrete action such as buy policy, arrange insurance, calculate price, or send application.

## AI Search and anti-spam rules

- Put the direct answer and critical limitations near the top.
- Use extractable sentences: “Yes, this policy fits if…”, “No, it does not fit if…”, “Required documents are…”, “The policy is valid in…”, “The policy is not valid in…”.
- Do not create pages that differ only by country name. Add route-specific border scenario, applicability, exclusions, local details, common mistakes, and practical advice.
- If there is no unique information, do not recommend creating a separate route page.
- Add internal links only when they help the user move to a product, route, FAQ, documents, calculator, form, or coverage limitations.

## Style and legal guardrails

- Keep copy professional, plain, specific, and free of advertising noise.
- Avoid unsupported claims about coverage, prices, guarantees, refunds, eligibility, claims outcomes, or processing time.
- Do not say “valid across all Europe” when coverage is list/map based.
- Do not say “fits all vehicles”; specify vehicle registration and vehicle type limits.
- Do not promise issuance when manual review is required.
- Do not hide exclusions or state that a product fits EU/EEA-registered vehicles unless confirmed.
- Do not invent insurer, license, coverage, terms, or prices.

## Output for requested page drafts

Return:

1. Meta title.
2. Meta description.
3. URL slug.
4. H1.
5. Full page text.
6. FAQ.
7. CTA.
8. Schema.org recommendations.

Schema guidance: use `FAQPage` for visible FAQs, `BreadcrumbList` for breadcrumbs, `Product` or `Service` only for real visible services, `Organization`/`LocalBusiness` when appropriate, and `Offer` only when a concrete visible price and conditions exist.

## Quality check before final answer

Verify that the page has a direct opening answer, eligibility, non-eligibility, documents, limitations, CTA, no empty promotional phrases, no risky promises, route/product uniqueness, and a clear next step.

## Verify

For production-impacting page/SEO edits, run `npm run lint`, `npx tsc --noEmit`, and `npm run build`.

## Report

Changed routes/pages, locales, metadata/JSON-LD impact, verification results, and legal/SEO assumptions.
