import { memo } from 'react';
import { locales } from '../../../utils/locale';
import './ItemsLanguage.scss';

type ItemsLanguageProps = {
  currentLanguage: string | undefined;
  onChangeLanguage: (locale: string) => void;
};

const ItemsLanguage = memo(({ currentLanguage, onChangeLanguage }: ItemsLanguageProps) => (
  <>
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
  </>
));

export default ItemsLanguage;
