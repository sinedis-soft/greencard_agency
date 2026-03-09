import { z } from 'zod';
import { locales } from '@/types/i18n';
import { vehicleTypes } from './lead.types';

const isoCountryRegex = /^[A-Z]{2}$/;
const vinRegex = /^[A-HJ-NPR-Z0-9]{17}$/i;

export const normalizePhone = (input: string): string => {
  const normalized = input.replace(/[^\d+]/g, '');
  if (normalized.startsWith('00')) {
    return `+${normalized.slice(2)}`;
  }
  return normalized;
};

const dateStringSchema = z
  .string()
  .regex(/^\d{4}-\d{2}-\d{2}$/)
  .refine((value) => {
    const d = new Date(`${value}T00:00:00Z`);
    return !Number.isNaN(d.getTime()) && d.toISOString().slice(0, 10) === value;
  }, 'Invalid date');

export const insuranceLeadSchema = z.object({
  registrationCountry: z.string().trim().toUpperCase().regex(isoCountryRegex, 'Use ISO 3166-1 alpha-2 country code'),
  vehicleType: z.enum(vehicleTypes),
  plateNumber: z.string().trim().min(3).max(20),
  vin: z.string().trim().regex(vinRegex, 'VIN must be 17 alphanumeric characters without I/O/Q').transform((v) => v.toUpperCase()),
  insuranceStartDate: dateStringSchema,
  duration: z.number().int().min(1).max(365),
  routeCountries: z
    .array(z.string().trim().toUpperCase().regex(isoCountryRegex))
    .min(1)
    .max(25)
    .transform((items) => [...new Set(items)]),
  borderEntryPoint: z.string().trim().max(120).optional(),
  customerName: z.string().trim().min(2).max(120),
  phone: z.string().transform(normalizePhone).refine((value) => /^\+?\d{7,15}$/.test(value), 'Invalid phone number'),
  email: z.string().trim().email(),
  preferredLanguage: z.enum(locales),
  consent: z.literal(true),
  utmSource: z.string().trim().max(80).optional(),
  utmCampaign: z.string().trim().max(120).optional(),
  utmMedium: z.string().trim().max(80).optional(),
  utmTerm: z.string().trim().max(120).optional(),
  utmContent: z.string().trim().max(120).optional()
});

export type InsuranceLeadInput = z.input<typeof insuranceLeadSchema>;
export type InsuranceLeadPayload = z.output<typeof insuranceLeadSchema>;
