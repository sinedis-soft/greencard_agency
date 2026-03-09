import type { LeadPayload } from './validation';

export function mapLeadToBitrix(payload: LeadPayload) {
  return {
    fields: {
      TITLE: `Lead: ${payload.leadType}`,
      NAME: payload.fullName,
      PHONE: [{ VALUE: payload.phone, VALUE_TYPE: 'WORK' }],
      EMAIL: [{ VALUE: payload.email, VALUE_TYPE: 'WORK' }],
      COMMENTS: payload.message,
      SOURCE_DESCRIPTION: `lang=${payload.lang}`
    }
  };
}

export function mapLeadToEmail(payload: LeadPayload) {
  return {
    subject: `New lead (${payload.leadType})`,
    text: [
      `Name: ${payload.fullName}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone}`,
      `Language: ${payload.lang}`,
      `Message: ${payload.message}`
    ].join('\n')
  };
}
