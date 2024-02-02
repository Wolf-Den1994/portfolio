import Intro from '../../containers/Intro/Intro';
import Projects from '../../containers/Projects/Projects';
import './Main.scss';

const Main = () => (
  <main className="main-page">
    <Intro />
    <Projects />
  </main>
);

export default Main;
