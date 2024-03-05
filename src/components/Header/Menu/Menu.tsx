import { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { iconMenu, iconTwoArrowRight } from '../../../data/icons';
import menuNav from '../../../data/menu';
import Cover from '../../Cover/Cover';
import Button from '../../UI/Button/Button';
import Icon from '../../UI/Icon/Icon';
import './Menu.scss';

const Menu = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const toggleShowMenu = () => {
    setIsShowMobileMenu((prev) => !prev);
  };

  return (
    <>
      <nav className={`navigation ${isShowMobileMenu ? 'navigation-show' : ''}`}>
        <ul className="menu">
          {menuNav.map(({ to, text }) => (
            <li key={text}>
              <NavLink
                to={to}
                className={({ isActive }) => (isActive ? 'menu__link_active' : '')}
                onClick={() => setIsShowMobileMenu(false)}
              >
                {text}
              </NavLink>
            </li>
          ))}
          <li className="menu-item-close">
            <Button className="icon-link" onClick={toggleShowMenu}>
              <Icon name={iconTwoArrowRight} />
            </Button>
          </li>
        </ul>
      </nav>
      <Button className={`icon-link menu-button ${isShowMobileMenu ? '' : 'button-show'}`} onClick={toggleShowMenu}>
        <Icon name={iconMenu} />
      </Button>
      {isShowMobileMenu && createPortal(<Cover onClose={toggleShowMenu} />, document.body)}
    </>
  );
};

export default Menu;
