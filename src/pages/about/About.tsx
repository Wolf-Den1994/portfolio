import AboutMe from '../../containers/AboutMe/AboutMe';
import Contacts from '../../containers/Contacts/Contacts';
import Interests from '../../containers/Interests/Interests';

const About = () => (
  <main className="page">
    <AboutMe />
    <Interests />
    <Contacts />
  </main>
);

export default About;
