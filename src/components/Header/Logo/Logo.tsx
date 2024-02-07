import { iconLogo } from '../../../data/icons';
import Icon from '../../UI/Icon/Icon';
import './Logo.scss';

const Logo = () => (
  <div className="logo">
    <Icon name={iconLogo} />
    <span>Denis Karazan</span>
  </div>
);

export default Logo;
