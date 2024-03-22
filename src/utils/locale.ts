import { i18n } from 'i18next';

type Locales = {
  [k: string]: {
    title: string;
  };
};

const english = 'en';
const russian = 'ru';

export const locales: Locales = {
  [english]: { title: 'EN' },
  [russian]: { title: 'RU' },
};

export const getClassLocale = (i18next: i18n, prevClass: string) =>
  i18next.resolvedLanguage === 'ru' ? `${prevClass} ${prevClass}-ru` : `${prevClass} ${prevClass}-en`;
