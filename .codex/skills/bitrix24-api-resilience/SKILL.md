---
name: bitrix24-api-resilience
description: Use for Bitrix24 API reliability, retry policy, timeout handling, queue/fallback behavior, idempotency, duplicate lead/deal prevention, circuit breaker decisions, and classifying Bitrix24 4xx/5xx/auth errors.
---

# Bitrix24 API Resilience Skill

## Retry policy

Allowed retry pattern:

- Exponential backoff.
- Maximum 3 retries unless explicitly justified.
- No immediate tight retry loops.
- No silent infinite retries.

## Timeout rules

- All Bitrix24 requests must have a timeout.
- Do not allow infinite waiting.
- Report timeout failures with safe trace IDs.

## Queueing

If Bitrix24 is unavailable and the project has safe storage/queue infrastructure:

- Store request in a queue.
- Retry asynchronously.
- Do not block the user flow indefinitely.

If no queue exists, do not invent one casually; document the limitation and keep failure behavior safe.

## Idempotency

Requests that can create leads, contacts, companies, deals, or files should include or derive an idempotency key when feasible.

Use idempotency to prevent duplicate leads/deals during retries, refreshes, or partial failures.

## Circuit breaker

If failure rate exceeds a defined threshold:

- Temporarily stop direct Bitrix24 requests.
- Switch to queue/fallback mode if available.
- Surface a generic user-facing message.
- Keep safe operational logs.

## Error classification

- `4xx`: fix request or validation/mapping issue; do not blindly retry.
- `5xx`: retry with backoff when safe.
- Auth error: re-authenticate, refresh token, or rotate webhook/token.
- Network timeout: retry with backoff if idempotent or safely deduplicated.

## Reporting

When changing resilience behavior, report:

- Retry count.
- Timeout value.
- Idempotency mechanism.
- Queue/fallback behavior.
- Duplicate prevention risk.
