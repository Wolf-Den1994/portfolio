import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { iconLanguage } from '../../data/icons';
import { RootState } from '../../slices';
import { changeLanguage } from '../../slices/settings';
import { setLocalStorage, getLocalStorage } from '../../utils';
import Button from '../UI/Button/Button';
import Icon from '../UI/Icon/Icon';
import KEY_LANGUAGE from './storageKey';
import './Language.scss';

const Language = () => {
  const [isShowLanguageSettings, setIsShowLanguageSettings] = useState(false);
  const language = useSelector((state: RootState) => state.settings.language);
  const dispatch = useDispatch();

  const showLanguageSettings = () => {
    setIsShowLanguageSettings(true);
  };

  const hideLanguageSettings = () => {
    setIsShowLanguageSettings(false);
  };

  const handleChangeLanguage = (lang: string) => {
    dispatch(changeLanguage(lang));
    setLocalStorage(KEY_LANGUAGE, lang);
  };

  useEffect(() => {
    const lang = getLocalStorage(KEY_LANGUAGE);
    if (lang) {
      dispatch(changeLanguage(lang));
    }
  }, []);

  return (
    <div className="menu-item-language__wrap" onMouseEnter={showLanguageSettings} onMouseLeave={hideLanguageSettings}>
      <Button className="icon-language">
        <Icon name={iconLanguage} />
      </Button>
      <ul className={`menu-language-settings ${isShowLanguageSettings ? 'menu-language-settings_show' : ''}`}>
        <li
          className={`menu-language-settings__item ${language === 'en' ? 'menu-language-settings__item_active' : ''}`}
          onClick={() => handleChangeLanguage('en')}
          role="presentation"
        >
          EU
        </li>
        <li
          className={`menu-language-settings__item ${language === 'ru' ? 'menu-language-settings__item_active' : ''}`}
          onClick={() => handleChangeLanguage('ru')}
          role="presentation"
        >
          RU
        </li>
      </ul>
    </div>
  );
};

export default Language;
