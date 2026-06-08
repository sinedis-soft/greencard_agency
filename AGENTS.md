# AGENTS.md

## Project overview

Green Card Agency is a multilingual Green Card/OC vehicle-insurance website for private customers. It serves localized marketing/product pages, tariff calculation, policy application lead capture, contact forms, privacy/cookie pages, SEO metadata, and CRM/email submission flows.

## Tech stack

- Next.js 16 App Router, React 19, TypeScript 5, npm (`package-lock.json`).
- Frontend: React function components in `app/components`, global CSS in `app/globals.css`, `next/link`, `next/image`, metadata and JSON-LD helpers.
- Backend/API: Next.js route handlers in `app/api/*/route.ts`; `app/api/lead/route.ts` explicitly uses Node runtime for files, logs, and SMTP sockets.
- Data/config in code: TypeScript dictionaries, SEO route metadata, and tariff tables. No database, cache, queue, worker, ORM, or storage service is visible.
- Integrations visible in code: Bitrix24 webhook CRM, SMTP deal-report email, local rotated lead logs. No payment provider implementation is visible.
- Deployment/runtime: standard Next.js scripts; `README.md` mentions Vercel, but no Vercel config is committed. Production site URL is hard-coded in `app/seo.ts` as `https://greencard.agency`.

## Repository structure

- `app/page.tsx`: redirects `/` to `/en`; do not change the default locale casually.
- `app/[lang]/`: language-prefixed routes. Pages use `generateStaticParams()`, `dynamicParams = false`, `normalizeLang`, SEO alternates, and breadcrumb/JSON-LD helpers.
- `app/api/contact/route.ts`: JSON contact form endpoint; creates a Bitrix lead using `BITRIX_WEBHOOK_URL`.
- `app/api/lead/route.ts`: multipart policy application endpoint; parses contact/policyholder/vehicle/file fields, upserts Bitrix contact/company/deals, logs stages, and optionally sends SMTP reports.
- `app/components/`: page sections, `Header`, `Footer`, `CookieConsent`, `Calculator`, `LeadForm`, `ContactFeedbackForm`, `SubmissionModal`, and structured-data components.
- `app/dictionaries/`: locale dictionaries and `LOCALES`/`Lang` definitions. SEO landing dictionaries are in `app/dictionaries/seo-landings/`.
- `app/lib/insurancePrices.ts`: tariff values and price formatting.
- `app/seo.ts`, `app/sitemap.ts`, `app/robots.ts`: canonical site URL, route metadata dates, hreflang alternates, sitemap, and robots output.
- `scripts/check-relations.mjs`: custom relation check for selected dictionaries.
- `public/`: static assets. Root markdown files are documentation/audits/specs, not application code.

## Development commands

- Install: `npm ci` (preferred for clean installs) or `npm install`.
- Develop: `npm run dev`.
- Production start after build: `npm run start`.
- Lint: `npm run lint`.
- Type check: no npm script exists; use `npx tsc --noEmit`.
- Test: no test script/framework is defined in `package.json`.
- Build: `npm run build`.
- Dictionary relation check: `npm run check:relations`.
- Database migrations / Docker Compose: none found.

## General working rules

- Make small, reviewable changes. Do not refactor broadly, reformat whole files, change dependencies, or change architecture unless explicitly requested.
- Preserve the existing App Router + localized route architecture, path alias style (`@/...`), global CSS class system, dictionary layout, SEO helpers, and JSON-LD behavior.
- Reuse existing components/utilities/dictionaries/tariff helpers. Do not duplicate calculation, CRM mapping, form parsing, or locale logic.
- Do not change route paths, locale lists, `SITE_URL`, robots/sitemap behavior, CRM field IDs, tariff values, or production-facing metadata unless the task explicitly requires it.
- If touching user-facing behavior, report changed files, verification commands, and any assumptions/risks.

## Safety and privacy rules

- Never expose or commit secrets, tokens, webhook URLs, SMTP credentials, API keys, uploaded documents, raw CRM payloads, or personal data.
- Do not edit `.env`, `.env.local`, `.env.production`, `.env.example`, deployment configs, production settings, or secret values unless explicitly requested.
- Treat names, phone/email, passport data, birth dates, addresses, company identifiers, vehicle/VIN/plate data, uploaded documents, UTM data, and Bitrix records as sensitive insurance application data.
- Do not commit generated/high-risk paths: `logs/`, `.env*`, `.next/`, `out/`, `build/`, `.vercel/`, `node_modules/`, coverage output, `next-env.d.ts`, or TypeScript build info.
- If adding/changing logs, keep trace IDs and coarse stage/status details only; avoid full payloads, document contents, credentials, or unnecessary personal data.

## Frontend rules

- Add `"use client"` only for components needing React state/events/browser APIs. Keep server pages/layouts server-side where possible.
- Styling is global CSS with BEM-like classes and CSS variables in `app/globals.css`; extend existing patterns instead of adding CSS frameworks or inline style systems.
- Localized navigation should use `Lang`, `LOCALES`, locale-aware links, `pageAlternates`, and existing SEO helpers. Preserve RTL handling for Persian (`fa`).
- Forms use controlled React state plus native validation (`required`, input types, `checkValidity`, `reportValidity`) and loading/error/success states via `SubmissionModal` where applicable.
- `LeadForm` posts multipart `FormData` to `/api/lead`, includes `lang`, `pageUrl`, optional `utm` from `localStorage`, and vehicle fields named like `vehicles[index][field]`.
- File upload UI currently accepts images/PDFs and rejects archives/audio/video with 10 MB single-file and 20 MB total limits; keep client and API behavior aligned.
- Preserve responsive/mobile-first layout, sticky header behavior, skip link, visible focus styles, labels, landmarks, and accessible button/link text.
- Put user-facing text in dictionaries unless following an existing localized inline pattern; avoid hard-coded single-language UI strings in shared components.

## Backend/API rules

- API endpoints are route handlers under `app/api/*/route.ts`; return JSON with appropriate status codes.
- `app/api/contact/route.ts` accepts JSON fields (`firstName`, `lastName`, `phone`, `email`, `comment`) and calls `crm.lead.add`.
- `app/api/lead/route.ts` accepts multipart data, validates email/phone/vehicles, parses vehicle blocks, performs Bitrix duplicate lookup and contact/company/deal upserts, converts files to Bitrix `fileData`, and returns `traceId`/`partialSuccess` when relevant.
- Preserve existing Bitrix enum maps, custom `UF_CRM_*` fields, default company ID behavior, duplicate lookup by email, stage names, trace IDs, SMTP fallback logging, and deal creation fallback without files.
- Do not add retries, queues, authentication changes, CRM mapping changes, or new external services unless requested.
- Use environment variables for integrations: `BITRIX_WEBHOOK_URL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`, `DEAL_REPORT_EMAIL_TO`.
- Never wrap imports in `try/catch`.

## Multilingual/i18n rules

- Supported locales are `ru`, `pl`, `en`, `be`, `uz`, `ka`, `kk`, `tr`, `fa`, and `hy` in `app/dictionaries/header.ts`.
- Translation dictionaries are TypeScript files keyed by `Lang`; maintain object shapes, exported getter functions, and type definitions.
- When changing user-facing copy, update all relevant locales or explicitly document incomplete translations. Also update SEO dictionaries/metadata when page titles/descriptions change.
- Validate TypeScript after dictionary edits; malformed objects can break the build. Run `npm run check:relations` when editing `calculator.ts`, `home.ts`, or `infoCompare.ts` dictionaries.
- Preserve `REGIONAL_HREFLANG_MAP`, `pageAlternates`, and language-prefixed URLs unless the task is explicitly about SEO/i18n routing.
- Insurance/legal/privacy/cookie translations must be accurate and natural, not literal machine-style wording.

## Insurance/business-domain rules

- Legal/tariff accuracy is more important than conversion copy.
- Do not make unsupported claims about coverage, prices, guarantees, processing time, validity, claims handling, eligibility, refunds, or required documents.
- Preserve `app/lib/insurancePrices.ts` tariff values and `getPolicyPrice`/`formatCurrency` behavior unless explicitly asked to change tariff calculation.
- Product pages/forms should remain clear about product, eligibility, required documents, coverage territory, start date, term, payment, delivery, restrictions, and support contacts whenever those topics are changed.
- Treat policy applications and uploaded vehicle documents as confidential insurance records.

## Integration rules

- Bitrix24 code is in `app/api/contact/route.ts` and `app/api/lead/route.ts`; preserve field mappings, enum IDs, duplicate lookup/upsert semantics, source values, and file attachment field behavior.
- SMTP reporting is implemented directly with `net`/`tls` in `app/api/lead/route.ts`; preserve config via `SMTP_*` env vars and avoid logging credentials or message bodies containing personal data.
- Lead API logs are written to ignored `logs/` with rotation/retention; keep that path ignored and do not commit log files.
- File handling must preserve filename normalization, base64 conversion, allowed upload types/sizes, and fallback behavior when Bitrix rejects files.
- A Telegram bot technical spec exists (`TECH_SPEC_TELEGRAM_BOT.md`), but no runnable bot code is visible; do not document or implement bot behavior unless requested.
- No payment provider code is visible; do not add or describe payment integration as existing.

## Testing and verification

- Documentation-only changes: run `git diff --check -- AGENTS.md`.
- General code changes: run `npm run lint` and `npx tsc --noEmit`.
- Production-impacting UI/API/SEO changes: also run `npm run build`.
- Dictionary changes: run `npx tsc --noEmit`; also run `npm run check:relations` for dictionaries covered by that script.
- API changes: inspect request/response shapes and env usage; use only safe dummy data for manual checks and never real client documents or real credentials.
- If a relevant automated check is unavailable, say so and describe manual verification.

## Response format after future tasks

Report:

1. Summary of changes.
2. Files changed.
3. Verification performed, with pass/warning/fail status.
4. Risks or assumptions.
5. Suggested next step, only if relevant.
