import AboutMe from '../../containers/AboutMe/AboutMe';
import Contacts from '../../containers/Contacts/Contacts';
import { SkillsSecondLayout } from '../../containers/Skills';
import './About.scss';

const About = () => (
  <main className="about">
    <AboutMe />
    <SkillsSecondLayout />
    <Contacts />
  </main>
);

export default About;
