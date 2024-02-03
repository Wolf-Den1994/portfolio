import Contacts from '../../containers/Contacts/Contacts';
import Intro from '../../containers/Intro/Intro';
import Projects from '../../containers/Projects/Projects';
import './Main.scss';

const Main = () => (
  <main className="main-page">
    <Intro />
    <Projects />
    <Contacts />
  </main>
);

export default Main;
