import { z } from 'zod';

export const leadSchema = z.object({
  leadType: z.enum(['insurance', 'contact']),
  lang: z.enum(['ru', 'pl', 'en', 'be']),
  fullName: z.string().min(2).max(120),
  email: z.string().email(),
  phone: z.string().min(6).max(32),
  message: z.string().max(1500).optional().default(''),
  consent: z.literal(true),
  website: z.string().optional().default('')
});

export type LeadPayload = z.infer<typeof leadSchema>;
