import type { Locale } from '@/types/i18n';

export const vehicleTypes = ['car', 'truck', 'bus', 'motorcycle', 'other'] as const;

export type VehicleType = (typeof vehicleTypes)[number];

export type InsuranceLead = {
  registrationCountry: string;
  vehicleType: VehicleType;
  plateNumber: string;
  vin: string;
  insuranceStartDate: string;
  duration: number;
  routeCountries: string[];
  borderEntryPoint?: string;
  customerName: string;
  phone: string;
  email: string;
  preferredLanguage: Locale;
  consent: boolean;
  utmSource?: string;
  utmCampaign?: string;
  utmMedium?: string;
  utmTerm?: string;
  utmContent?: string;
};
