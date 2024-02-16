import { useState } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { iconMenu, iconTwoArrowRight } from '../../../data/icons';
import Cover from '../../Cover/Cover';
import Button from '../../UI/Button/Button';
import Icon from '../../UI/Icon/Icon';
import './Menu.scss';

const Menu = () => {
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  const toggleShowMenu = () => {
    setIsShowMobileMenu((prev) => !prev);
  };
  const classNameNavigationMoblie = isShowMobileMenu ? 'navigation-show' : '';
  const classNameButtonMoblie = isShowMobileMenu ? '' : 'button-show';

  return (
    <>
      <nav className={`navigation ${classNameNavigationMoblie}`}>
        <ul className="menu">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'menu__link_active' : '')}
              onClick={() => setIsShowMobileMenu(false)}
            >
              Resume
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) => (isActive ? 'menu__link_active' : '')}
              onClick={() => setIsShowMobileMenu(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? 'menu__link_active' : '')}
              onClick={() => setIsShowMobileMenu(false)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className={({ isActive }) => (isActive ? 'menu__link_active' : '')}
              onClick={() => setIsShowMobileMenu(false)}
            >
              Contacts
            </NavLink>
          </li>
          <li className="menu-item-close">
            <Button className="icon-link" onClick={toggleShowMenu} styles={{ maxWidth: '100%' }}>
              <Icon name={iconTwoArrowRight} />
            </Button>
          </li>
        </ul>
      </nav>
      <Button className={`icon-link menu-button ${classNameButtonMoblie}`} onClick={toggleShowMenu}>
        <Icon name={iconMenu} />
      </Button>
      {isShowMobileMenu && createPortal(<Cover onClose={toggleShowMenu} />, document.body)}
    </>
  );
};

export default Menu;
