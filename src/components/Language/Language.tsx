import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { iconLanguage } from '../../data/icons';
import { setLocalStorage, getLocalStorage } from '../../utils';
import { locales } from '../../utils/locale';
import Button from '../UI/Button/Button';
import Icon from '../UI/Icon/Icon';
import './Language.scss';

const KEY_LANGUAGE = 'KEY_LANGUAGE';

const Language = () => {
  const [isShowLanguageSettings, setIsShowLanguageSettings] = useState(false);
  const { i18n } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 840px)' });

  const handleChangeLanguage = (lang: string) => {
    setLocalStorage(KEY_LANGUAGE, lang);
    i18n.changeLanguage(lang);
  };

  useEffect(() => {
    const lang = getLocalStorage(KEY_LANGUAGE);
    if (lang) {
      i18n.changeLanguage(lang);
    }
  }, []);

  if (isMobile) {
    return (
      <ul className={`menu-language-settings ${isShowLanguageSettings ? 'menu-language-settings_show' : ''}`}>
        {Object.keys(locales).map((locale) => (
          <li
            className={`menu-language-settings__item ${
              i18n.resolvedLanguage === locale ? 'menu-language-settings__item_active' : ''
            }`}
            onClick={() => handleChangeLanguage(locale)}
            role="presentation"
            key={locale}
          >
            {locales[locale].title}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div
      className="menu-item-language__wrap"
      onMouseEnter={() => setIsShowLanguageSettings(true)}
      onMouseLeave={() => setIsShowLanguageSettings(false)}
    >
      <Button className="icon-language">
        <Icon name={iconLanguage} />
      </Button>
      <ul className={`menu-language-settings ${isShowLanguageSettings ? 'menu-language-settings_show' : ''}`}>
        {Object.keys(locales).map((locale) => (
          <li
            className={`menu-language-settings__item ${
              i18n.resolvedLanguage === locale ? 'menu-language-settings__item_active' : ''
            }`}
            onClick={() => handleChangeLanguage(locale)}
            role="presentation"
            key={locale}
          >
            {locales[locale].title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
