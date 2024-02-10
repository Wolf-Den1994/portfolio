import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Contacts from '../../containers/Contacts/Contacts';
import Intro from '../../containers/Intro/Intro';
import Projects from '../../containers/Projects/Projects';
import './Main.scss';

const Main = () => (
  <main className="main-page">
    <BackgroundImage
      srcImage="./images/photos/my.png"
      width={720}
      height={620}
      additionalStyles={{ position: 'absolute', top: 0, right: 0, zIndex: -1 }}
    />
    <Intro />
    <Projects />
    <Contacts />
  </main>
);

export default Main;
