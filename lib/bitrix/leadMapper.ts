import type { InsuranceLeadPayload } from '@/lib/leads/lead.schema';

type BitrixFields = Record<string, string | number | boolean | Array<{ VALUE: string; VALUE_TYPE: string }>>;

const requiredEnv = [
  'BITRIX_FIELD_REGISTRATION_COUNTRY',
  'BITRIX_FIELD_VEHICLE_TYPE',
  'BITRIX_FIELD_PLATE_NUMBER',
  'BITRIX_FIELD_VIN',
  'BITRIX_FIELD_INSURANCE_START_DATE',
  'BITRIX_FIELD_DURATION',
  'BITRIX_FIELD_ROUTE_COUNTRIES',
  'BITRIX_FIELD_BORDER_ENTRY_POINT',
  'BITRIX_FIELD_PREFERRED_LANGUAGE',
  'BITRIX_FIELD_CONSENT',
  'BITRIX_FIELD_UTM_SOURCE',
  'BITRIX_FIELD_UTM_CAMPAIGN',
  'BITRIX_FIELD_UTM_MEDIUM',
  'BITRIX_FIELD_UTM_TERM',
  'BITRIX_FIELD_UTM_CONTENT'
] as const;

function getFieldId(envKey: (typeof requiredEnv)[number]) {
  const value = process.env[envKey];
  if (!value) {
    throw new Error(`Missing env variable: ${envKey}`);
  }
  return value;
}

export function mapInsuranceLeadToBitrix(lead: InsuranceLeadPayload) {
  const fields: BitrixFields = {
    TITLE: `Insurance lead ${lead.registrationCountry} ${lead.insuranceStartDate}`,
    NAME: lead.customerName,
    PHONE: [{ VALUE: lead.phone, VALUE_TYPE: 'WORK' }],
    EMAIL: [{ VALUE: lead.email, VALUE_TYPE: 'WORK' }],
    COMMENTS: [
      `Route countries: ${lead.routeCountries.join(', ')}`,
      `Plate number: ${lead.plateNumber}`,
      `VIN: ${lead.vin}`,
      lead.borderEntryPoint ? `Border entry point: ${lead.borderEntryPoint}` : null
    ]
      .filter(Boolean)
      .join('\n')
  };

  fields[getFieldId('BITRIX_FIELD_REGISTRATION_COUNTRY')] = lead.registrationCountry;
  fields[getFieldId('BITRIX_FIELD_VEHICLE_TYPE')] = lead.vehicleType;
  fields[getFieldId('BITRIX_FIELD_PLATE_NUMBER')] = lead.plateNumber;
  fields[getFieldId('BITRIX_FIELD_VIN')] = lead.vin;
  fields[getFieldId('BITRIX_FIELD_INSURANCE_START_DATE')] = lead.insuranceStartDate;
  fields[getFieldId('BITRIX_FIELD_DURATION')] = lead.duration;
  fields[getFieldId('BITRIX_FIELD_ROUTE_COUNTRIES')] = lead.routeCountries.join(',');
  fields[getFieldId('BITRIX_FIELD_BORDER_ENTRY_POINT')] = lead.borderEntryPoint ?? '';
  fields[getFieldId('BITRIX_FIELD_PREFERRED_LANGUAGE')] = lead.preferredLanguage;
  fields[getFieldId('BITRIX_FIELD_CONSENT')] = lead.consent;
  fields[getFieldId('BITRIX_FIELD_UTM_SOURCE')] = lead.utmSource ?? '';
  fields[getFieldId('BITRIX_FIELD_UTM_CAMPAIGN')] = lead.utmCampaign ?? '';
  fields[getFieldId('BITRIX_FIELD_UTM_MEDIUM')] = lead.utmMedium ?? '';
  fields[getFieldId('BITRIX_FIELD_UTM_TERM')] = lead.utmTerm ?? '';
  fields[getFieldId('BITRIX_FIELD_UTM_CONTENT')] = lead.utmContent ?? '';

  return { fields };
}
