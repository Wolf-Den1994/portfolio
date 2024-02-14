import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
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
            <Link to="/" onClick={toggleShowMenu}>Resume</Link>
          </li>
          <li>
            <Link to="about" onClick={toggleShowMenu}>About</Link>
          </li>
          <li>
            <Button
              type="link"
              kind="link"
              linkOptions={{ linkUrl: '#projects' }}
              styles={{ font: '700 1.8rem/140% "Comfortaa"' }}
              onClick={toggleShowMenu}
            >
              Projects
            </Button>
          </li>
          <li>
            <Button
              type="link"
              kind="link"
              linkOptions={{ linkUrl: '#contacts' }}
              styles={{ font: '700 1.8rem/140% "Comfortaa"' }}
              onClick={toggleShowMenu}
            >
              Contacts
            </Button>
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
