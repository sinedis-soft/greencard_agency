import type { SiteDictionary } from '@/types/i18n';

export const plDictionary: SiteDictionary = {
  common: {
    brand: 'GreenCard Agency',
    languageLabel: 'Język',
    ctaPrimary: 'Poproś o wycenę',
    ctaSecondary: 'Skontaktuj się z nami'
  },
  header: {
    nav: {
      home: 'Strona główna',
      about: 'O nas',
      insurers: 'Ubezpieczyciele',
      regulations: 'Regulamin',
      documents: 'Dokumenty',
      faq: 'FAQ',
      contacts: 'Kontakt'
    }
  },
  footer: {
    legal: 'Informacje prawne',
    rights: '© GreenCard Agency. Wszelkie prawa zastrzeżone.'
  },
  pages: {
    home: {
      hero: {
        title: 'Rozwiązania ubezpieczeniowe dla podróży międzynarodowych',
        subtitle: 'Niezawodne wsparcie i przejrzyste warunki polisy.',
        trustBadge: 'Profesjonalna obsługa ubezpieczeniowa'
      },
      benefits: {
        title: 'Dlaczego klienci wybierają nas',
        items: [
          'Zweryfikowani partnerzy ubezpieczeniowi',
          'Przejrzyste warunki prawne',
          'Wsparcie wielojęzyczne: RU/PL/EN/BE'
        ]
      }
    },
    about: {
      title: 'O nas',
      intro: 'GreenCard Agency wspiera kierowców w szybkim i zgodnym z przepisami uzyskaniu ubezpieczenia transgranicznego.',
      sections: [
        {
          title: 'Nasza rola',
          body: 'Działamy jako pośrednik ubezpieczeniowy i pomagamy klientom wybrać odpowiednie warianty polis.'
        },
        {
          title: 'Standardy obsługi',
          body: 'Zapewniamy wsparcie wielojęzyczne oraz jasne wymagania przed wystawieniem polisy.'
        }
      ]
    },
    insurers: {
      title: 'Partnerzy ubezpieczeniowi',
      intro: 'Lista partnerskich firm ubezpieczeniowych dostępnych dla polis Zielonej Karty i ubezpieczeń granicznych.',
      sections: [
        {
          title: 'Warunki ochrony',
          body: 'Zakres ochrony zależy od ubezpieczyciela oraz wybranych krajów trasy.'
        },
        {
          title: 'Zasady wystawienia',
          body: 'Ostateczna kwalifikacja zależy od kraju rejestracji, typu pojazdu oraz terminu.'
        }
      ]
    },
    regulations: {
      title: 'Regulamin',
      intro: 'Warunki świadczenia usług oraz warunki prawne wystawienia polisy.',
      sections: [
        {
          title: 'Przetwarzanie danych',
          body: 'Dane osobowe są przetwarzane w celu kalkulacji oferty oraz wystawienia polisy.'
        },
        {
          title: 'Ograniczenia terytorialne',
          body: 'Dostępność może się różnić w zależności od kraju docelowego i ograniczeń ubezpieczyciela.'
        }
      ]
    },
    documents: {
      title: 'Dokumenty',
      intro: 'Pobierz aktualne formularze polis i wymagane wzory dokumentów.',
      sections: [
        {
          title: 'Formularze wniosków',
          body: 'Używaj tylko aktualnych formularzy, aby uniknąć opóźnień w przetwarzaniu.'
        },
        {
          title: 'Wzory dokumentów prawnych',
          body: 'Załączniki regulacyjne i oświadczenia są dostępne do pobrania.'
        }
      ]
    },
    faq: {
      title: 'Najczęściej zadawane pytania',
      intro: 'Najważniejsze odpowiedzi dotyczące wystawienia i ważności polisy.',
      items: [
        {
          question: 'Jak szybko mogę otrzymać polisę?',
          answer: 'Zazwyczaj tego samego dnia po weryfikacji danych.'
        },
        {
          question: 'Jakie kraje są objęte ochroną?',
          answer: 'Zakres ochrony zależy od wybranego produktu i warunków ubezpieczyciela.'
        }
      ]
    },
    contact: {
      title: 'Kontakt',
      intro: 'Skontaktuj się z naszym zespołem i wyślij zapytanie ubezpieczeniowe.',
      detailsTitle: 'Dane kontaktowe',
      mapTitle: 'Mapa',
      details: {
        address: 'Warszawa, Polska (szczegóły biura zostaną wkrótce podane)',
        phone: '+48 000 000 000',
        email: 'contact@greencard.agency',
        hours: 'Pon–Pt 09:00–18:00'
      },
      mapPlaceholder: 'Mapa'
    }
  },
  forms: {
    lead: {
      title: 'Formularz zapytania ubezpieczeniowego',
      loading: 'Wysyłanie...',
      fields: {
        fullName: 'Imię i nazwisko',
        email: 'Email',
        phone: 'Telefon',
        message: 'Komentarz',
        registrationCountry: 'Kraj rejestracji (ISO2)',
        vehicleType: 'Typ pojazdu (samochód/ciężarówka/autobus/motocykl/inne)',
        plateNumber: 'Numer rejestracyjny',
        vin: 'VIN',
        insuranceStartDate: 'Data rozpoczęcia (YYYY-MM-DD)',
        duration: 'Czas trwania w dniach',
        routeCountries: 'Kraje trasy (ISO2, oddzielone przecinkami)',
        borderEntryPoint: 'Przejście graniczne (opcjonalnie)',
        utmSource: 'UTM source (opcjonalnie)',
        utmCampaign: 'UTM campaign (opcjonalnie)',
        utmMedium: 'UTM medium (opcjonalnie)',
        utmTerm: 'UTM term (opcjonalnie)',
        utmContent: 'UTM content (opcjonalnie)',
        consent: 'Wyrażam zgodę na przetwarzanie danych osobowych',
        honeypot: 'Nie wypełniaj tego pola'
      },
      submit: 'Wyślij zapytanie',
      success: 'Zapytanie zostało wysłane. Skontaktujemy się wkrótce.',
      errors: {
        invalid: 'Sprawdź wprowadzone dane.',
        required: 'Wypełnij wymagane pola.',
        server: 'Nie udało się wysłać zapytania. Spróbuj ponownie później.',
        ratelimit: 'Zbyt wiele zapytań. Spróbuj ponownie później.'
      }
    }
  }
};