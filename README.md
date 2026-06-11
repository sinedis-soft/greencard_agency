This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Environment variables

Create `.env` based on `.env.example` and configure:

- `BITRIX_WEBHOOK_URL` - Bitrix webhook URL.
- `SMTP_HOST` - SMTP host.
- `SMTP_PORT` - SMTP port (usually `465` for SSL or `587` for STARTTLS/non-SSL connection).
- `SMTP_SECURE` - `true` for SSL SMTP connection, `false` for plain SMTP.
- `SMTP_USER` - SMTP login.
- `SMTP_PASS` - SMTP password.
- `SMTP_FROM` - From email address.
- `DEAL_REPORT_EMAIL_TO` - email address to receive per-deal full reports.

## SEO landing pages and locale indexation

Localized SEO landing pages live under the language-prefixed App Router tree:

```text
app/[lang]/route/<source-country>/<destination-country>/page.tsx
```

Current route landing pages:

- `/[lang]/route/belarus/poland`
- `/[lang]/route/georgia/romania`

The public URL always starts with the locale, for example:

- `/be/route/belarus/poland`
- `/en/route/georgia/romania`

### Central route metadata

All indexable app routes are listed in `app/seo.ts` in `ROUTE_META`. This metadata drives:

- `sitemap.xml` URL generation.
- `hreflang` alternates.
- canonical metadata helpers.
- static params for SEO landing pages.
- locale availability checks used by the home page SEO carousel.

Example:

```ts
export const ROUTE_META = {
  "/route/belarus/poland": {
    lastModified: "2026-05-14",
    disabledLocales: ["pl"],
  },
  "/route/georgia/romania": { lastModified: "2026-05-14" },
} as const;
```

`lastModified` is the date used in the sitemap. Update it when the page content changes materially.

### Disabling or enabling a route for a locale

Use `disabledLocales` on the route entry in `app/seo.ts`.

To disable the Polish version of Belarus -> Poland while keeping the Belarusian version enabled:

```ts
"/route/belarus/poland": {
  lastModified: "2026-05-14",
  disabledLocales: ["pl"],
},
```

Result:

- `/be/route/belarus/poland` is generated, appears in the sitemap, appears in `hreflang`, and may be shown in the home SEO carousel.
- `/pl/route/belarus/poland` is not generated as a static SEO landing page, is excluded from the sitemap and `hreflang`, and is hidden from the home SEO carousel.

To re-enable a locale, remove it from `disabledLocales`. If no locales are disabled, remove `disabledLocales` entirely:

```ts
"/route/belarus/poland": { lastModified: "2026-05-14" },
```

### Required SEO landing page pattern

Each SEO landing page should define a route constant and use the SEO helpers from `app/seo.ts`:

```ts
const BELARUS_POLAND_ROUTE = "/route/belarus/poland";

export function generateStaticParams() {
  return routeStaticParams(BELARUS_POLAND_ROUTE);
}
```

In `generateMetadata`, guard disabled locale-route combinations:

```ts
if (!isRouteLocaleIndexable(lang, BELARUS_POLAND_ROUTE)) {
  return { robots: { index: false, follow: false } };
}
```

In the page component, also guard direct access:

```ts
if (!isRouteLocaleIndexable(lang, BELARUS_POLAND_ROUTE)) {
  notFound();
}
```

Use the same route constant for:

- `pageAlternates(lang, ROUTE)`
- `pageSocialMetadata(lang, ROUTE, title, description)`
- FAQ JSON-LD `@id`
- `BreadcrumbListJsonLd` `pagePath`

This keeps canonical URLs, structured data, sitemap and page rendering in sync.

### Adding a new route SEO page

Example: add Armenia -> Germany.

1. Create the route page:

```text
app/[lang]/route/armenia/germany/page.tsx
```

2. Add route metadata in `app/seo.ts`:

```ts
"/route/armenia/germany": {
  lastModified: "2026-06-11",
  disabledLocales: ["pl", "tr"], // optional
},
```

3. Add or reuse a localized SEO dictionary for the page content and carousel copy.

4. In the page file, use the required pattern above with:

```ts
const ARMENIA_GERMANY_ROUTE = "/route/armenia/germany";
```

5. Run the verification commands below.

### Adding a page to the home SEO carousel

The home page SEO carousel is built in `app/components/Home.tsx` from the `seoCards` array. Add a card only through `isRouteLocaleIndexable` so disabled locale-route combinations stay hidden.

Example:

```ts
isRouteLocaleIndexable(lang, "/route/armenia/germany")
  ? {
      href: `/${lang}/route/armenia/germany`,
      title: armeniaGermany.carousel.cardTitle,
      text: armeniaGermany.carousel.cardText,
      cta: armeniaGermany.carousel.cta,
    }
  : null,
```

The JSX renders `seoCards.map(...)`, so after adding an item to the array no extra markup is needed.

If every SEO card is disabled for the current locale, the whole carousel section is not rendered.

### Verification after SEO route changes

After changing SEO route metadata, route pages, sitemap behavior or the home SEO carousel, run:

```bash
npm run lint
npx tsc --noEmit
npm run build
```

If dictionaries covered by the relation checker are changed, also run:

```bash
npm run check:relations
```
