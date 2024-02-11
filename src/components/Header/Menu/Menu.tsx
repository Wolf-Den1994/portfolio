import { Link } from 'react-router-dom';
import Button from '../../UI/Button/Button';
import './Menu.scss';

const Menu = () => (
  <nav>
    <ul className="menu">
      <li>
        <Link to="/">Resume</Link>
      </li>
      <li>
        <Link to="about">About</Link>
      </li>
      <li>
        <Button
          type="link"
          kind="link"
          linkOptions={{ linkUrl: '#projects' }}
          styles={{ font: '700 18px/140% "Comfortaa"' }}
        >
          Projects
        </Button>
      </li>
      <li>
        <Button
          type="link"
          kind="link"
          linkOptions={{ linkUrl: '#contacts' }}
          styles={{ font: '700 18px/140% "Comfortaa"' }}
        >
          Contacts
        </Button>
      </li>
    </ul>
  </nav>
);

export default Menu;
