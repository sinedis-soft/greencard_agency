import { NextResponse } from 'next/server';
import { mapInsuranceLeadToBitrix } from '@/lib/bitrix/leadMapper';
import { createLeadSignature, isDuplicateLead } from '@/lib/forms/dedupe';
import { checkRateLimit } from '@/lib/forms/rateLimit';
import { sendLeadToBitrix } from '@/lib/integrations/bitrix24';
import { sendLeadEmail } from '@/lib/integrations/email';
import { mapInsuranceLeadToEmail } from '@/lib/leads/leadEmailMapper';
import { insuranceLeadSchema } from '@/lib/leads/lead.schema';

export async function POST(request: Request) {
  const requestId = crypto.randomUUID();

  try {
    const ip = request.headers.get('x-forwarded-for') ?? 'unknown';
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: 'ratelimit', requestId }, { status: 429 });
    }

    const raw = await request.json();
    if (typeof raw.website === 'string' && raw.website.length > 0) {
      return NextResponse.json({ ok: true, requestId });
    }

    const parsed = insuranceLeadSchema.safeParse(raw);
    if (!parsed.success) {
      return NextResponse.json({ error: 'invalid', details: parsed.error.flatten(), requestId }, { status: 400 });
    }

    const lead = parsed.data;
    const signature = createLeadSignature(lead);
    if (isDuplicateLead(signature)) {
      return NextResponse.json({ error: 'duplicate', requestId }, { status: 409 });
    }

    const results: { channel: 'bitrix' | 'email'; ok: boolean; error?: string }[] = [];

    try {
      await sendLeadToBitrix(mapInsuranceLeadToBitrix(lead));
      results.push({ channel: 'bitrix', ok: true });
    } catch (error) {
      console.error('[lead][bitrix]', { requestId, error });
      results.push({ channel: 'bitrix', ok: false, error: 'bitrix_failed' });
    }

    try {
      await sendLeadEmail(mapInsuranceLeadToEmail(lead));
      results.push({ channel: 'email', ok: true });
    } catch (error) {
      console.error('[lead][email]', { requestId, error });
      results.push({ channel: 'email', ok: false, error: 'email_failed' });
    }

    const hasSuccess = results.some((result) => result.ok);
    if (!hasSuccess) {
      console.error('[lead][delivery_failed]', { requestId, results });
      return NextResponse.json({ error: 'delivery_failed', requestId }, { status: 502 });
    }

    return NextResponse.json({ ok: true, requestId, delivery: results });
  } catch (error) {
    console.error('[lead][unexpected_error]', { requestId, error });
    return NextResponse.json({ error: 'server', requestId }, { status: 500 });
  }
}
