'use client';

import { useState, type FormEvent } from 'react';
import { Alert } from '@/components/ui/Alert';
import { Button } from '@/components/ui/Button';
import { FormField } from '@/components/ui/FormField';
import { InputField } from '@/components/ui/InputField';
import type { LeadFormDictionary, Locale } from '@/types/i18n';
import styles from './LeadForm.module.css';

type FormState = 'idle' | 'loading' | 'success' | 'error';

export function LeadForm({ dictionary, lang }: { dictionary: LeadFormDictionary; lang: Locale }) {
  const [state, setState] = useState<FormState>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    setState('loading');

    const payload = {
      registrationCountry: String(formData.get('registrationCountry') ?? '').toUpperCase(),
      vehicleType: String(formData.get('vehicleType') ?? 'car'),
      plateNumber: String(formData.get('plateNumber') ?? ''),
      vin: String(formData.get('vin') ?? ''),
      insuranceStartDate: String(formData.get('insuranceStartDate') ?? ''),
      duration: Number(formData.get('duration') ?? 15),
      routeCountries: String(formData.get('routeCountries') ?? '')
        .split(',')
        .map((item) => item.trim().toUpperCase())
        .filter(Boolean),
      borderEntryPoint: String(formData.get('borderEntryPoint') ?? ''),
      customerName: String(formData.get('fullName') ?? ''),
      phone: String(formData.get('phone') ?? ''),
      email: String(formData.get('email') ?? ''),
      preferredLanguage: lang,
      consent: formData.get('consent') === 'on',
      utmSource: String(formData.get('utmSource') ?? ''),
      utmCampaign: String(formData.get('utmCampaign') ?? ''),
      utmMedium: String(formData.get('utmMedium') ?? ''),
      utmTerm: String(formData.get('utmTerm') ?? ''),
      utmContent: String(formData.get('utmContent') ?? ''),
      website: String(formData.get('website') ?? '')
    };

    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });

    setState(response.ok ? 'success' : 'error');
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2>{dictionary.title}</h2>
      <div className={styles.grid}>
        <FormField>
          {dictionary.fields.fullName}
          <InputField name="fullName" required />
        </FormField>
        <FormField>
          {dictionary.fields.email}
          <InputField name="email" type="email" required />
        </FormField>
        <FormField>
          {dictionary.fields.phone}
          <InputField name="phone" required />
        </FormField>
        <FormField>
          {dictionary.fields.registrationCountry}
          <InputField name="registrationCountry" required />
        </FormField>
        <FormField>
          {dictionary.fields.vehicleType}
          <InputField name="vehicleType" required />
        </FormField>
        <FormField>
          {dictionary.fields.plateNumber}
          <InputField name="plateNumber" required />
        </FormField>
        <FormField>
          {dictionary.fields.vin}
          <InputField name="vin" required />
        </FormField>
        <FormField>
          {dictionary.fields.insuranceStartDate}
          <InputField name="insuranceStartDate" required />
        </FormField>
        <FormField>
          {dictionary.fields.duration}
          <InputField name="duration" type="number" required />
        </FormField>
        <FormField>
          {dictionary.fields.routeCountries}
          <InputField name="routeCountries" required />
        </FormField>
        <FormField>
          {dictionary.fields.borderEntryPoint}
          <InputField name="borderEntryPoint" />
        </FormField>
      </div>
      <input className={styles.honeypot} name="website" tabIndex={-1} autoComplete="off" />
      <label className={styles.consentLabel}>
        <input name="consent" type="checkbox" required />
        {dictionary.fields.consent}
      </label>
      <Button type="submit" disabled={state === 'loading'}>
        {state === 'loading' ? dictionary.loading : dictionary.submit}
      </Button>
      {state === 'success' ? <Alert tone="success">{dictionary.success}</Alert> : null}
      {state === 'error' ? <Alert tone="error">{dictionary.errors.server}</Alert> : null}
    </form>
  );
}
