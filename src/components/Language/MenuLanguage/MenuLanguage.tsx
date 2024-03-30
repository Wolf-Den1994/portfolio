import ItemsLanguage from '../ItemsLanguage/ItemsLanguage';
import './MenuLanguage.scss';

type MenuLanguageProps = {
  isShowLanguageSettings: boolean;
  currentLanguage: string | undefined;
  onChangeLanguage: (locale: string) => void;
};

const MenuLanguage = ({ isShowLanguageSettings, currentLanguage, onChangeLanguage }: MenuLanguageProps) => (
  <ul className={`menu-language-settings ${isShowLanguageSettings ? 'menu-language-settings_show' : ''}`}>
    <ItemsLanguage currentLanguage={currentLanguage} onChangeLanguage={onChangeLanguage} />
  </ul>
);

export default MenuLanguage;
