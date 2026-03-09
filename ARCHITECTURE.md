# GreenCard Agency Redesign: Stage 1–7

## Stage 1. Audit of current website

> Limitation: direct page scraping from environment is blocked by `403 CONNECT tunnel failed`, so the audit below is based on URL-level IA, insurance-domain heuristics, and page intent inferred from slugs.

### Existing pages (from provided URLs)
1. `/` — Home / offer landing.
2. `/ru/about_us_ru/` — About company.
3. `/ru/towarzystwa_ubezpieczeniowe_ru/` — Insurance companies (partners).
4. `/ru/regulamin_ru/` — Regulations / legal terms.
5. `/ru/dokumenty_do_pobrania_ru/` — Downloadable documents.

### Likely block structure by page
- Home: hero, policy calculator/request CTA, trust blocks, insurer logos, process steps, FAQ, contact form.
- About: mission, company credibility, licenses/experience, support model.
- Insurers: partner list/cards, company details, policy coverage notes.
- Regulations: legal text, terms, conditions, complaint process, privacy/legal basis.
- Documents: document cards with file type/updated date/download action.

### Content/entities to migrate
- Core service proposition (green card insurance and international policy support).
- Legal and compliance text.
- Partner insurer catalog.
- Downloadable forms and templates.
- Contact and lead capture channels.

### Improvement opportunities
- Consolidate duplicate CTAs into one clear hierarchy.
- Move heavy legal text to readable structured sections with TOC.
- Upgrade visual trust cues (licenses, partner entities, process transparency).
- Improve form UX (validation, inline hints, error localization).
- Better multilingual consistency and route semantics.

### CTA and lead generation
- Primary: submit insurance request.
- Secondary: contact support.
- Tertiary: download documents, learn regulations.

### Must-have trust/legal blocks
- Legal entity details.
- Terms/regulations.
- Privacy & consent language.
- Partner insurers and policy legitimacy indicators.

### Future IA
- Home
- About
- Insurers
- Regulations
- Documents
- Contact (inside lead forms + footer contact block)

## Stage 2. Target architecture (Next.js App Router)

- `app/[lang]/*` for localized pages.
- Shared layout + page-specific sections.
- Typed dictionaries loaded server-side.
- Unified API route (`/api/lead`) with modular integrations.

## Stage 3. Design system concept

- Minimal, clean, "liquid glass" layers with high readability.
- Soft translucent surfaces, calm blue palette, strict typography, clear focus states.
- Production-safe contrast and accessibility-first interactions.

## Stage 4. Dictionary system

- Separate page dictionaries + separate form dictionary.
- Global dictionaries: common, header, footer.
- Typed via `SiteDictionary` and nested domain-specific interfaces.
- Languages scaffolded: `ru`, `pl`, `en`, `be`.

## Stage 5. Forms & integrations architecture

- Single route: `POST /api/lead`.
- Modules:
  - validation (`zod`)
  - normalization
  - payload mappers
  - Bitrix24 client
  - email sender (SMTP)
  - anti-spam (honeypot + simple rate limit)

## Stage 6. Delivery plan

1. Bootstrap project.
2. App and layout foundation.
3. i18n routing and dictionaries.
4. Design tokens and global styling.
5. Shared UI components.
6. Home page skeleton.
7. Inner pages skeleton.
8. Lead form wiring.
9. API integrations.
10. Validation and normalization.
11. SEO metadata/hreflang.
12. QA checks (lint/typecheck/build).
13. Polish and content migration.

## Stage 7. Generated implementation (current commit)

Implemented baseline scaffold for:
- App Router project setup.
- `[lang]` multilingual routing.
- Typed dictionary loading (`ru/pl/en/be`).
- Glass-style global/theme CSS.
- Shared header/footer and section components.
- Home skeleton + inner page skeletons.
- Lead form client component.
- API route with separated validation/normalization/mapping/transport modules.
