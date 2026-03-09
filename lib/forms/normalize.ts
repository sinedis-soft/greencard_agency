import type { LeadPayload } from './validation';

export function normalizeLeadPayload(payload: LeadPayload): LeadPayload {
  return {
    ...payload,
    fullName: payload.fullName.trim(),
    email: payload.email.trim().toLowerCase(),
    phone: payload.phone.trim(),
    message: payload.message.trim()
  };
}
