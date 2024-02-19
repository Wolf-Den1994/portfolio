import Logo from './Logo/Logo';
import Menu from './Menu/Menu';
import './Header.scss';

const Header = () => (
  <header className="header wow fadeInDown">
    <Logo />
    <Menu />
  </header>
)

export default Header;
