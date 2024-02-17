import { MutableRefObject, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import BackgroundImage from '../../components/BackgroundImage/BackgroundImage';
import Contacts from '../../containers/Contacts/Contacts';
import Intro from '../../containers/Intro/Intro';
import Projects from '../../containers/Projects/Projects';
import './Main.scss';

interface Containers {
  [key: string]: MutableRefObject<HTMLDivElement | null>;
}

const Main = () => {
  const location = useLocation();

  const containers: Containers = {
    projects: useRef<HTMLDivElement>(null),
    contacts: useRef<HTMLDivElement>(null),
  };

  const scrollToBlock = (container = '') => {
    if (container in containers) {
      containers[container].current?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const { pathname } = location;
    scrollToBlock(pathname.slice(1));
  }, [location]);

  return (
    <main className="main-page">
      <BackgroundImage srcImage="./images/photos/my_1.png" className="main-photo" />
      <Intro />
      <Projects ref={containers.projects} />
      <Contacts ref={containers.contacts} />
    </main>
  );
};

export default Main;
