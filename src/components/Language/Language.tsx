import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive';
import { iconLanguage } from '../../data/icons';
import { setLocalStorage, getLocalStorage } from '../../utils';
import Button from '../UI/Button/Button';
import Icon from '../UI/Icon/Icon';
import MenuLanguage from './MenuLanguage/MenuLanguage';
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
      <MenuLanguage
        isShowLanguageSettings={isShowLanguageSettings}
        onChangeLanguage={handleChangeLanguage}
        currentLanguage={i18n.resolvedLanguage}
      />
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
      <MenuLanguage
        isShowLanguageSettings={isShowLanguageSettings}
        onChangeLanguage={handleChangeLanguage}
        currentLanguage={i18n.resolvedLanguage}
      />
    </div>
  );
};

export default Language;
