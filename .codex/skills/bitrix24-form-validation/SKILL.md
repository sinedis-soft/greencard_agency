---
name: bitrix24-form-validation
description: Use for validating and normalizing form submissions before Bitrix24 CRM transfer, including schema validation, business rules, security validation, sensitive field handling, masked logs, structured errors, and preventing corrupted or unsafe CRM payloads.
---

# Form Validation Gateway Skill

## Purpose

Validate all form input before sending it to Bitrix24.

This skill acts as a security gateway between public forms and CRM payload construction.

## Validation layers

Every form submission must pass the relevant layers.

### Layer 1 — Schema validation

- Required fields.
- Type checks.
- Format validation.
- File count/type/size limits where uploads exist.

### Layer 2 — Business rules

- Valid vehicle data.
- Valid country or region codes.
- Valid insurance type.
- Valid dates, policy terms, and product-specific constraints.

### Layer 3 — Security validation

- No scripts.
- No injected HTML.
- No malformed JSON.
- No oversized payloads.
- No unexpected nested fields.

## Data normalization

Before CRM mapping:

- Trim strings.
- Normalize whitespace.
- Normalize phone formats where rules exist.
- Normalize UTF-8 / Unicode input.
- Keep canonical enum values stable.

## Field safety rules

Sensitive fields include:

- Passport numbers.
- Phone numbers.
- Email addresses.
- VINs.
- License plates.
- Uploaded documents.

These fields must be:

- Validated.
- Masked or hashed in logs.
- Encrypted if stored temporarily.
- Excluded from unnecessary diagnostics.

## Failure behavior

If validation fails:

- Do not send to Bitrix24.
- Return a structured, localized error when possible.
- Preserve user input except invalid or unsafe parts.
- Include a safe trace ID for support.

## Anti-patterns

Avoid:

- Direct form-to-CRM mapping without a validation layer.
- Sending partial corrupted data.
- Accepting unknown fields silently when they alter CRM semantics.
- Logging raw sensitive fields for debugging.
