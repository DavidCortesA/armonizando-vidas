import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esCommon from './locales/es/common.json';
import enCommon from './locales/en/common.json';

const LANGUAGE_KEY = 'language';
const SUPPORTED_LANGUAGES = new Set(['es', 'en']);

const getInitialLanguage = () => {
  const saved = localStorage.getItem(LANGUAGE_KEY);
  if (saved && SUPPORTED_LANGUAGES.has(saved)) return saved;
  return 'es';
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { common: esCommon },
      en: { common: enCommon },
    },
    lng: getInitialLanguage(),
    fallbackLng: 'es',
    defaultNS: 'common',
    interpolation: { escapeValue: false },
  });

i18n.on('languageChanged', (lng) => {
  if (SUPPORTED_LANGUAGES.has(lng)) {
    localStorage.setItem(LANGUAGE_KEY, lng);
  }
  document.documentElement.lang = lng;
});

document.documentElement.lang = i18n.language;

export default i18n;
