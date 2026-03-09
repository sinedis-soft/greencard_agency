# GreenCard Agency (Next.js)

## 1) Install dependencies

```bash
npm install
```

## 2) Configure environment

```bash
cp .env.example .env.local
```

Required groups:
- Public site/contact variables.
- Bitrix24 webhook + custom field IDs.
- SMTP credentials and recipient.

## 3) Run development server

```bash
npm run dev
```

## Validation commands

```bash
npm run check:dictionaries
npm run validate:migration-sheet
npm run generate:redirect-map
npm run typecheck
npm run build
```
