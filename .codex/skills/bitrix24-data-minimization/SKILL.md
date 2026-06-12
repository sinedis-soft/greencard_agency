---
name: bitrix24-data-minimization
description: Use for Bitrix24 privacy and GDPR/EU/PL data minimization, deciding which contact, vehicle, insurance, file, UTM, or metadata fields may be sent, reducing raw uploads, avoiding middleware retention, and hashing or masking sensitive logs.
---

# Bitrix24 Data Minimization Skill

## Principle

Send only data required for CRM operation, insurance processing, and support.

## Allowed data

Send only when needed:

- Contact information.
- Vehicle data.
- Insurance parameters.
- Required documents or files.
- Operational trace IDs or source metadata needed for support.

## Forbidden data

Do not send:

- Unnecessary personal metadata.
- Unused form fields.
- Raw file uploads unless required for the insurance process.
- Secrets, credentials, or internal debug values.
- Full client payloads when only mapped fields are needed.

## Retention rules

- Avoid long-term storage in middleware.
- Process and forward immediately when possible.
- If temporary storage is required, protect it and define retention.
- Do not commit logs or uploaded documents.

## Privacy compliance

Data transfer should align with:

- GDPR / EU privacy expectations.
- Local insurance regulations.
- Existing privacy and logging rules in the repo.

## Logging rules

- Do not log sensitive payloads.
- Hash or mask sensitive values.
- Prefer trace IDs, stages, response status, and payload hashes.
- Never log webhook URLs, OAuth tokens, SMTP secrets, or uploaded document contents.

## Review checklist

Before sending fields to Bitrix24, ask:

1. Is this field required for CRM operation or insurance processing?
2. Is there a less sensitive representation?
3. Is it already available in Bitrix24 through another linked entity?
4. Will logging or retry storage expose it unnecessarily?
