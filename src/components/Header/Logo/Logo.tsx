import Icon from '../../UI/Icon/Icon';
import { iconLogo } from '../../../utils/icons';
import './Logo.scss';

const Logo = () => (
  <div className="logo">
    <Icon name={iconLogo} />
    <span>Denis Karazan</span>
  </div>
);

export default Logo;
