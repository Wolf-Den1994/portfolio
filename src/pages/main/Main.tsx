import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Contacts from '../../containers/Contacts/Contacts';
import Intro from '../../containers/Intro/Intro';
import Projects from '../../containers/Projects/Projects';
import './Main.scss';

const Main = () => (
  <main className="main-page">
    <BackgroundImage srcImage="./images/photos/my.png" className="main-photo" />
    <Intro />
    <Projects />
    <Contacts />
  </main>
);

export default Main;
