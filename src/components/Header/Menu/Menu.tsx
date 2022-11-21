import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => (
  <ul className="menu">
    <li>
      <Link to="/">Resume</Link>
    </li>
    <li>
      <Link to="about">About</Link>
    </li>
    <li>
      <Link to="projects">Projects</Link>
    </li>
    <li>
      <Link to="contacts">Contacts</Link>
    </li>
  </ul>
);

export default Menu;
