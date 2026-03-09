const DEFAULT_TIMEOUT_MS = 8_000;

export async function sendLeadToBitrix(payload: unknown) {
  const webhookUrl = process.env.BITRIX24_WEBHOOK_URL;
  const timeoutMs = Number(process.env.BITRIX24_TIMEOUT_MS ?? DEFAULT_TIMEOUT_MS);

  if (!webhookUrl) {
    return { ok: true, skipped: true };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      cache: 'no-store',
      signal: controller.signal
    });

    if (!response.ok) {
      throw new Error(`Bitrix24 request failed: ${response.status}`);
    }

    return response.json();
  } finally {
    clearTimeout(timeout);
  }
}
