import type { SiteDictionary } from '@/types/i18n';

export const enDictionary: SiteDictionary = {
  common: { brand: 'GreenCard Agency', languageLabel: 'Language', ctaPrimary: 'Request a quote', ctaSecondary: 'Contact us' },
  header: { nav: { home: 'Home', about: 'About', insurers: 'Insurers', regulations: 'Regulations', documents: 'Documents', faq: 'FAQ', contacts: 'Contact' } },
  footer: { legal: 'Legal information', rights: '© GreenCard Agency. All rights reserved.' },
  pages: {
    home: {
      hero: { title: 'Insurance solutions for international travel', subtitle: 'Reliable support and transparent policy terms.', trustBadge: 'Professional insurance service' },
      benefits: { title: 'Why clients choose us', items: ['Verified insurer partners', 'Transparent legal terms', 'Multilingual support: RU/PL/EN/BE'] }
    },
    about: {
      title: 'About us',
      intro: 'GreenCard Agency supports drivers with fast and compliant cross-border insurance.',
      sections: [
        { title: 'Our role', body: 'We act as an insurance intermediary and help clients choose suitable policy options.' },
        { title: 'Service standards', body: 'We provide multilingual support and clear requirements before policy issuance.' }
      ]
    },
    insurers: {
      title: 'Insurer partners',
      intro: 'List of partner insurance companies available for Green Card and frontier policies.',
      sections: [
        { title: 'Coverage terms', body: 'Coverage scope depends on insurer and selected route countries.' },
        { title: 'Issuance rules', body: 'Final eligibility is based on registration country, vehicle type, and timing.' }
      ]
    },
    regulations: {
      title: 'Regulations',
      intro: 'Terms of service and legal conditions for policy issuance.',
      sections: [
        { title: 'Data processing', body: 'Personal data is processed for quote calculation and policy issuance workflows.' },
        { title: 'Territorial limitations', body: 'Availability may vary by destination and insurer restrictions.' }
      ]
    },
    documents: {
      title: 'Documents',
      intro: 'Download current policy forms and required templates.',
      sections: [
        { title: 'Application forms', body: 'Use updated forms only to avoid processing delays.' },
        { title: 'Legal templates', body: 'Regulatory attachments and declarations are available in downloadable format.' }
      ]
    },
    faq: {
      title: 'Frequently Asked Questions',
      intro: 'Key answers about policy issuance and validity.',
      items: [
        { question: 'How fast can I get a policy?', answer: 'Usually on the same day after data verification.' },
        { question: 'Which countries are covered?', answer: 'Coverage depends on the selected product and insurer terms.' }
      ]
    },
    contact: {
      title: 'Contact',
      intro: 'Reach our support team and submit an insurance request.',
      detailsTitle: 'Contact details',
      mapTitle: 'Map',
      details: {
        address: 'Warsaw, Poland (office details to be finalized)',
        phone: '+48 000 000 000',
        email: 'contact@greencard.agency',
        hours: 'Mon–Fri 09:00–18:00'
      },
      mapPlaceholder: 'Map placeholder'
    }
  },
  forms: {
    lead: {
      title: 'Insurance request form',
      loading: 'Sending...',
      fields: {
        fullName: 'Full name',
        email: 'Email',
        phone: 'Phone',
        message: 'Comment',
        registrationCountry: 'Registration country (ISO2)',
        vehicleType: 'Vehicle type (car/truck/bus/motorcycle/other)',
        plateNumber: 'Plate number',
        vin: 'VIN',
        insuranceStartDate: 'Start date (YYYY-MM-DD)',
        duration: 'Duration in days',
        routeCountries: 'Route countries (comma-separated ISO2)',
        borderEntryPoint: 'Border entry point (optional)',
        utmSource: 'UTM source (optional)',
        utmCampaign: 'UTM campaign (optional)',
        utmMedium: 'UTM medium (optional)',
        utmTerm: 'UTM term (optional)',
        utmContent: 'UTM content (optional)',
        consent: 'I agree to personal data processing',
        honeypot: 'Do not fill this field'
      },
      submit: 'Send request',
      success: 'Request sent. We will contact you shortly.',
      errors: {
        invalid: 'Please check entered data.',
        required: 'Please fill required fields.',
        server: 'Failed to send request. Try again later.',
        ratelimit: 'Too many requests. Try later.'
      }
    }
  }
};
