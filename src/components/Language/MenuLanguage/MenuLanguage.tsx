import { locales } from '../../../utils/locale';
import './MenuLanguage.scss';

type MenuLanguageProps = {
  isShowLanguageSettings: boolean;
  currentLanguage: string | undefined;
  onChangeLanguage: (locale: string) => void;
};

const MenuLanguage = ({ isShowLanguageSettings, currentLanguage, onChangeLanguage }: MenuLanguageProps) => (
  <ul className={`menu-language-settings ${isShowLanguageSettings ? 'menu-language-settings_show' : ''}`}>
    {Object.keys(locales).map((locale) => (
      <li
        className={`menu-language-settings__item ${
          currentLanguage === locale ? 'menu-language-settings__item_active' : ''
        }`}
        onClick={() => onChangeLanguage(locale)}
        role="presentation"
        key={locale}
      >
        {locales[locale].title}
      </li>
    ))}
  </ul>
);

export default MenuLanguage;
