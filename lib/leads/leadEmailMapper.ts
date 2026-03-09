import type { InsuranceLeadPayload } from './lead.schema';

export function mapInsuranceLeadToEmail(payload: InsuranceLeadPayload) {
  return {
    subject: `Insurance lead ${payload.registrationCountry} ${payload.insuranceStartDate}`,
    text: [
      `Customer: ${payload.customerName}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email}`,
      `Vehicle: ${payload.vehicleType}`,
      `Plate: ${payload.plateNumber}`,
      `VIN: ${payload.vin}`,
      `Registration country: ${payload.registrationCountry}`,
      `Start date: ${payload.insuranceStartDate}`,
      `Duration: ${payload.duration}`,
      `Route countries: ${payload.routeCountries.join(', ')}`,
      `Border entry point: ${payload.borderEntryPoint ?? ''}`,
      `Preferred language: ${payload.preferredLanguage}`,
      `UTM source: ${payload.utmSource ?? ''}`,
      `UTM campaign: ${payload.utmCampaign ?? ''}`,
      `UTM medium: ${payload.utmMedium ?? ''}`,
      `UTM term: ${payload.utmTerm ?? ''}`,
      `UTM content: ${payload.utmContent ?? ''}`
    ].join('\n')
  };
}
