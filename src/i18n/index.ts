import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import * as locales from './resources/index';

declare module 'i18next' {
  interface CustomTypeOptions {
    returnNull: false;
  }
}
const DETECTION_OPTIONS = {
  order: ['localStorage'],
  caches: ['localStorage'],
};

i18n
  // pass the i18n instance to react-i18next.
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    returnNull: false,
    fallbackLng: 'ja',
    resources: {
      ...Object.entries(locales).reduce(
        (acc, [key, value]) => ({
          ...acc,
          [key]: value,
        }),
        {},
      ),
    },
    detection: DETECTION_OPTIONS,
    interpolation: {
      escapeValue: false,
    },
  });

export const { t } = i18n;

export default i18n;
