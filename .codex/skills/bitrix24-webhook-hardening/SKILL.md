---
name: bitrix24-webhook-hardening
description: Use for Bitrix24 incoming webhook security, storage, exposure prevention, server-to-server isolation, rotation policy, monitoring, fail-safe behavior, and preventing webhook leaks in frontend code, HTML, logs, analytics, or Git.
---

# Bitrix24 Webhook Hardening Skill

## Webhook classification

Treat every Bitrix24 webhook as a high-risk credential equivalent to a password.

## Storage rules

Webhook URLs must be stored:

- Backend only: `.env`, deployment secrets, or a secrets manager.
- Never in frontend code.
- Never in the Git repository.
- Never in logs.

## Exposure prevention

Forbidden:

- Client-side webhook calls.
- Public API endpoints returning the webhook URL.
- Embedding webhook URLs in HTML templates.
- Sending webhook URLs to analytics or telemetry tools.

## Network isolation

Webhook calls must be:

- Server-to-server only.
- Behind a backend API layer.
- Isolated from UI components and client bundles.

## Rotation policy

Rotate the webhook if it is:

- Leaked.
- Exposed in frontend code.
- Committed to the repository.
- Shared in logs or screenshots.
- Sent to a third-party tool unnecessarily.

## Monitoring

Detect and investigate:

- Unusual request spikes.
- Repeated failures.
- Unknown field submissions.
- Unexpected Bitrix methods.

## Fail-safe behavior

On webhook failure:

- Do not retry infinitely.
- Use bounded retry with exponential backoff when retries are implemented.
- Log a safe trace and surface a generic user message.
- Queue retry jobs only if the project has a safe queue/storage design.

## Anti-patterns

Avoid:

- Using the webhook as a public API.
- Exposing webhook URLs in analytics tools.
- Mixing webhook logic with UI layer code.
- Printing webhook URLs during debugging.
