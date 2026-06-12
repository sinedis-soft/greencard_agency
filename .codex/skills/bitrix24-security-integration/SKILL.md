---
name: bitrix24-security-integration
description: Use for secure frontend/API form transfer to Bitrix24 REST API, including webhook/OAuth credential handling, server-side CRM calls, HTTPS-only transport, schema validation, CSRF/origin protection, sanitization, rate limiting, error handling, and audit logging.
---

# Bitrix24 Security Integration Skill

You are responsible for secure data transfer from frontend forms to the Bitrix24 REST API.

## Core rule

Treat all data sent to Bitrix24 as untrusted input.

Never assume:

- Form data is valid.
- Client-side validation is correct.
- A webhook is safe by default.

## Allowed integration methods

Only two patterns are allowed:

### Incoming webhook

Preferred for internal systems.

- Store server-side only.
- Never expose in frontend code.
- Never embed in client JavaScript.

### OAuth 2.0

Use for multi-tenant or marketplace apps.

- Require token rotation.
- Implement refresh handling.
- Store tokens in secure environment variables or a secrets manager.

## Security requirements

### Authentication

- Never expose webhook URLs to the browser.
- Store OAuth tokens and webhook URLs in backend secrets only.

### Transport

- Use HTTPS only.
- Reject or redirect HTTP submissions before processing sensitive data.

### Validation

- Validate schema before sending to Bitrix24.
- Enforce required fields.
- Validate types explicitly; do not rely on implicit casting.

## CSRF and origin protection

All browser form submissions should include at least one of:

- CSRF token.
- Signed request hash.
- Equivalent origin/session verification already present in the project.

Reject:

- Cross-domain POST without validation.
- Requests missing origin verification when the endpoint is browser-facing.

## Injection protection

Before sending to Bitrix24:

- Sanitize HTML.
- Strip scripts.
- Normalize Unicode input.
- Validate URL fields.
- Reject malformed JSON.

## Rate limiting

Apply appropriate controls for exposed endpoints:

- Per-IP rate limiting.
- Per-session rate limiting.
- Per-form submission throttling.

If the stack lacks rate limiting, document the gap and avoid adding unsafe direct CRM exposure.

## Error handling

Never expose raw Bitrix errors directly to users.

Instead:

- Log full safe diagnostics internally.
- Show a generic, localized message externally.
- Preserve trace IDs for support.

## Logging and audit

Every request should log safe audit metadata:

- Timestamp.
- User/session ID when available.
- Endpoint called.
- Payload hash or trace ID.
- Response status.

Never log secrets or raw sensitive payloads.

## Anti-patterns

Forbidden:

- Sending webhook requests from frontend code.
- Storing credentials in localStorage.
- Direct CRM calls from the browser.
- Missing validation layer.
- Silent retry loops without backoff.
