# GreenCard Agency — Production Migration Plan (Revision after Stage 1–7)

## A. Executive assessment of current Stage 1–7

The current implementation is a **valid technical scaffold**, but not yet migration-ready for a real insurance business launch.

What is good:
- Next.js App Router + multilingual route foundation exists (`app/[lang]`).
- Dictionary typing and per-language files exist.
- `/api/lead` has modular separation (validation, normalization, mapping, transports).
- Baseline design tokens and reusable sections/components are in place.

What is incomplete for production:
- Stage 1 audit was preliminary and route-inferred only (source pages not fully crawled).
- Content migration requirements are not controlled at URL-level.
- SEO migration controls (redirect map, indexability matrix, schema plan) are missing.
- Legal/compliance scope is incomplete for insurance brokerage realities.
- Lead model is too generic for Green Card/frontier insurance sales qualification.
- Dictionary governance has no enforcement/CI completeness checks.

Status: **Architecture prototype complete; business migration readiness not complete.**

---

## B. Main risks and omissions

1. **Business qualification risk**
   - Current lead form does not capture underwriting-critical details (registration country, VIN, route, start date, duration).
   - Impact: low CRM quality, delayed quoting, reduced conversion.

2. **SEO continuity risk**
   - No authoritative old→new URL control sheet.
   - No redirect policy by page intent and language.
   - Impact: ranking and traffic loss during cutover.

3. **Legal/compliance risk**
   - No explicit privacy/complaints/territorial limitation blocks across templates.
   - Impact: regulatory and trust risk.

4. **Localization governance risk**
   - Typed dictionaries exist, but no CI completeness guard or missing-key policy.
   - Impact: broken UX in secondary languages and translation drift.

5. **Design-conversion risk**
   - “Liquid glass” can reduce legibility/trust if overused for insurance content.
   - Impact: lower perceived reliability and weaker form completion.

6. **Release control risk**
   - No formal migration readiness gate by workstream owner.
   - Impact: untracked blockers and unsafe launch.

---

## C. Revised production-ready roadmap

### Workstream 1 — Architecture hardening
1) Finalize route taxonomy and content domains.
2) Introduce page-model interfaces per template type (marketing/legal/listing/document).
3) Add SEO primitives: canonical builder, hreflang matrix generator, schema injectors.
4) Extend API lead domain model with insurance-specific fields and UTM/session metadata.
5) Add observability hooks (request IDs, lead submission logs, delivery status).

Deliverables:
- `lib/seo/*`, `lib/content/*`, extended `types/*`, strict route config.

### Workstream 2 — Content migration
1) Perform manual source audit and extract exact text/media/doc assets.
2) Populate per-page dictionaries by language.
3) Normalize legal copy versions and “effective date”.
4) Add content review signoff per language.

Deliverables:
- Complete dictionaries and asset manifest.
- Migration Control Sheet statuses updated to “content approved”.

### Workstream 3 — SEO migration
1) Build old→new redirect matrix per language.
2) Define indexability policy by page type.
3) Configure sitemap segments and robots directives.
4) Deploy schema.org blocks (Organization, WebSite, FAQ where applicable).
5) Pre-launch diff: titles/descriptions/H1/canonical/hreflang parity.

Deliverables:
- Redirect config, SEO QA report, launch checklist.

### Workstream 4 — Legal/compliance pages
1) Add dedicated pages/policies (privacy, complaints, legal entity data).
2) Integrate mandatory consent text near every lead form.
3) Add territorial/vehicle-registration limitations pages/blocks.
4) Add insurer partner disclosure and brokerage role clarity.

Deliverables:
- Signed legal content set with owner approval.

### Workstream 5 — Lead forms + CRM mapping
1) Implement quote form variants (quick contact vs qualified quote request).
2) Define canonical lead payload + mapping spec to Bitrix24 fields.
3) Add anti-spam stack (honeypot + rate-limit + challenge strategy if abuse spikes).
4) Add delivery fallback and error telemetry.

Deliverables:
- Bitrix mapping document + tested route handler contract.

### Workstream 6 — Multilingual dictionary governance
1) Enforce namespace conventions and deterministic key ownership.
2) Add CI checks: missing keys, extra keys, type conformity.
3) Add fallback strategy and reporting for unresolved keys.

Deliverables:
- Dictionary governance policy + CI jobs.

### Workstream 7 — QA + release control
1) Pre-prod smoke tests by route/language.
2) Form-to-CRM E2E tests with non-prod Bitrix endpoint.
3) SEO crawl and redirect validation.
4) Launch go/no-go meeting with signoff matrix.

Deliverables:
- Release readiness report and rollback playbook.

---

## D. Recommended information architecture

### Core pages (mandatory)
1. Home — yes (primary conversion + trust overview).
2. About — yes (credibility and brokerage positioning).
3. Insurers — yes (partner proof and product availability context).
4. Regulations / Terms — yes (contractual baseline).
5. Documents — yes (download center).

### Additional pages (recommended)
6. Contact — **yes**
   - Needed for non-form contact paths, office/legal coordinates, service hours.
7. FAQ — **yes**
   - Reduces support load and enables FAQ schema opportunities.
8. Coverage / Countries — **yes**
   - Core pre-qualification for Green Card relevance by destination.
9. Claims / How policy works — **yes**
   - Critical trust page: issuance flow, claim process, exclusions, timelines.
10. Segment landing pages — **Requires business decision**
   - Recommended for paid traffic and intent clusters (e.g., border insurance, fleet, frequent cross-border travelers).

### Proposed route skeleton
- `/[lang]`
- `/[lang]/about-us`
- `/[lang]/insurers`
- `/[lang]/coverage-countries`
- `/[lang]/how-it-works`
- `/[lang]/claims`
- `/[lang]/faq`
- `/[lang]/documents`
- `/[lang]/contact`
- `/[lang]/regulations`
- `/[lang]/privacy-policy`
- `/[lang]/complaints`
- `/[lang]/landing/[segment]` (optional)

---

## E. Lead form + Bitrix24 data model

### Recommended lead fields (quote-grade)
- product_type (green_card | frontier_insurance)
- registration_country
- vehicle_type
- plate_number
- vin
- insurance_start_date
- duration_days
- route_countries (array)
- border_entry_point (optional, if frontier product)
- customer_full_name
- phone
- email
- preferred_language (ru/pl/en/be)
- consent_personal_data (boolean)
- consent_marketing (boolean, optional)
- utm_source / utm_medium / utm_campaign / utm_term / utm_content
- referrer_url
- landing_url
- client_time_iso

### Bitrix24 mapping model (recommended)
- `TITLE` = `"{product_type} lead — {registration_country} — {insurance_start_date}"`
- `NAME` = customer_full_name
- `PHONE[WORK]` = phone
- `EMAIL[WORK]` = email
- `COMMENTS` = structured multiline summary (vehicle, route, dates, consents, entry point)
- `SOURCE_ID` = web
- `SOURCE_DESCRIPTION` = JSON-ish compact attribution + lang
- Custom fields (must be provisioned in Bitrix24):
  - `UF_CRM_REG_COUNTRY`
  - `UF_CRM_VEHICLE_TYPE`
  - `UF_CRM_PLATE_NUMBER`
  - `UF_CRM_VIN`
  - `UF_CRM_START_DATE`
  - `UF_CRM_DURATION_DAYS`
  - `UF_CRM_ROUTE_COUNTRIES`
  - `UF_CRM_BORDER_POINT`
  - `UF_CRM_PREF_LANG`
  - `UF_CRM_CONSENT_PD`
  - `UF_CRM_CONSENT_MKT`
  - `UF_CRM_UTM_*`

### Processing sequence
1. Validate payload schema (strict enum/date formats).
2. Normalize values (trim/case/date normalization/country codes).
3. Anti-spam checks.
4. Persist lead delivery log record (status=pending).
5. Send to Bitrix24.
6. Send email notification fallback.
7. Update log record (success/failure + error code).

Note: exact Bitrix custom-field IDs — **Requires business decision** (Bitrix admin setup).

---

## F. SEO migration checklist

1. Redirects
- Build definitive 301 map old→new per language.
- Use 302 only for temporary campaign pages.

2. Sitemaps
- Generate index sitemap + per-language/page-type sitemaps.
- Include only canonical, indexable URLs.

3. robots.txt
- Allow production crawl; disallow internal/search/test paths.
- Add sitemap index URL.

4. Canonical rules
- Self-canonical for unique pages.
- Prevent language/campaign duplicates from self-conflicting canonicals.

5. hreflang rules
- Full reciprocal matrix across `ru/pl/en/be` + optional `x-default`.
- Exclude non-indexable pages from hreflang cluster.

6. Structured data
- Organization schema (legal identity/contact).
- WebSite schema + SearchAction if site-search exists.
- FAQ schema on FAQ page only when visible content matches.
- BreadcrumbList for deep pages.

7. 404/410 strategy
- 404 for unknown URLs.
- 410 for intentionally removed assets/pages with no replacement.

8. Duplicate control
- De-index low-value duplicates (query variants, staging mirrors).
- Canonicalize segment pages carefully to avoid cannibalization.

9. Ranking preservation
- Keep key intent pages equivalent in topical focus/H1/title.
- Preserve internal linking pathways from top traffic pages.
- Monitor GSC after launch: coverage, crawl anomalies, keyword drop.

10. SEO QA gates before launch
- Crawl comparison old vs new (titles, H1, canonicals, status codes).
- Redirect chain and loop check.
- Hreflang reciprocity validation.

Items dependent on legacy metadata extraction: **Requires manual content audit**.

---

## G. Legal/compliance checklist (insurance brokerage practical set)

Mandatory blocks/pages:
1. Legal entity information (name, registration data, address, contacts).
2. Brokerage status and role disclosure (broker/agent scope).
3. Regulations/terms of service.
4. Privacy policy (data basis, retention, rights, contacts).
5. Complaints procedure and handling timeline.
6. Partner insurer disclosure list.
7. Territorial limitations (where policy valid/not valid).
8. Vehicle registration country eligibility limitations.
9. Policy issuance limitations and required documents.
10. Consent language near forms (purpose + controller + checkbox text).
11. Document versioning/effective date for legal texts.

Operational requirement:
- Legal owner signs off each localized legal page before production.

Exact legal wording for each jurisdiction: **Requires business decision** + legal review.

---

## H. Dictionary governance rules

### Namespace convention
- `common.*` shared UI/system labels
- `nav.*`, `footer.*`
- `pages.{pageKey}.{sectionKey}.*`
- `forms.{formKey}.fields.*`
- `forms.{formKey}.errors.*`
- `seo.{pageKey}.title|description|ogTitle|ogDescription`

### Separation rules
- One page dictionary namespace per route.
- One form namespace per form variant.
- No reuse of legal copy from marketing namespaces.

### Missing-key prevention
- Source locale (`ru`) is schema baseline.
- CI fails if any locale is missing/extra keys against baseline.
- Runtime should not silently hide missing keys in production.

### Fallback policy
- Fallback to source locale only in non-production preview.
- In production: surface observability event when fallback is used.

### CI validation approach
- Script 1: deep key parity check (all locales vs baseline).
- Script 2: type-level compile check (`satisfies` + TS strict mode).
- Script 3: forbidden hardcoded string scan in components/pages (allowlisted exceptions).

### Translation completeness checks
- PR gate requires `translationStatus` metadata per language/page.
- Release gate: no page goes live with “draft” legal text.

---

## I. Design recommendation

Recommendation: **reduce liquid-glass intensity, keep only subtle depth accents**.

Rationale (UX/conversion for insurance):
- Insurance users prioritize clarity, legitimacy, and low cognitive load.
- Heavy blur/transparency can reduce readability and “institutional trust” perception.
- Use glass effect only on hero and key cards; keep body/legal/form areas mostly solid high-contrast surfaces.

Target style direction:
- Trust-first visual system (calm neutrals + restrained brand blue).
- Strong typography and spacing hierarchy.
- High-contrast form fields and legal text zones.
- Minimal motion and conservative interaction cues.

---

## J. Immediate next actions (next sprint)

1. Build and approve Migration Control Sheet template and ownership matrix.
2. Run manual source content audit and fill URL-by-URL records.
3. Finalize expanded IA and route map with business owner signoff.
4. Define Bitrix24 custom fields and field IDs with CRM admin.
5. Upgrade lead schema and API mapping to quote-grade model.
6. Add SEO migration modules (redirect map + sitemap/robots + schema).
7. Add dictionary CI checks and translation completeness gates.
8. Prepare legal page set with localized signoff workflow.

Critical blockers:
- Legacy content capture: **Requires manual content audit**.
- Legal final copy and jurisdiction nuances: **Requires business decision**.
- Bitrix24 custom-field provisioning: **Requires business decision**.
