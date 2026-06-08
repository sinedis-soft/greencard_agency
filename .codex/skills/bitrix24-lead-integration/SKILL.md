---
name: bitrix24-lead-integration
description: Use for edits to app/api/lead/route.ts or app/api/contact/route.ts involving Bitrix24 methods, UF_CRM mappings, duplicate lookup/upserts, file attachments, partial success, SMTP reports, trace IDs, or lead logs.
---

# Bitrix24 Lead Integration

AGENTS.md already contains global safety, privacy, and command rules. This skill adds only the integration checklist.

## Before editing

- Inspect the current request/response contract and identify affected Bitrix methods.
- List any touched CRM fields, especially `UF_CRM_*` fields and enum IDs.

## Do not change unless explicitly requested

- Field mappings, enum/source IDs, duplicate lookup/upsert flow, default company ID, stage names, trace IDs, partial-success response, SMTP fallback/reporting, or fallback deal creation without files.

## Privacy check

- Do not expose webhook URLs, credentials, raw/full CRM payloads, uploaded documents, or personal data.
- Logs should stay at trace ID + coarse stage/status + safe diagnostics.

## Report

Changed files, affected Bitrix methods/fields, verification commands, and integration/privacy risks.
