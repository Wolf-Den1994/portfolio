import { useTranslation } from 'react-i18next';
import { iconLogo } from '../../../data/icons';
import Icon from '../../UI/Icon/Icon';
import './Logo.scss';

const Logo = () => {
  const { t } = useTranslation();

  return (
    <div className="logo">
      <Icon name={iconLogo} />
      <span>{t('logo.name')}</span>
    </div>
  );
};

export default Logo;
