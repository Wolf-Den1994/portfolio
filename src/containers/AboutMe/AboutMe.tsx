import Button from '../../components/UI/Button/Button';
import './AboutMe.scss';

const AboutMe = () => (
  <div className="about-me">
    <div className="about-me-bio">
      <div className="about-me-bio__title">About me</div>
      <div className="about-me-bio__description">
        I&#39;m an honest and responsible person. I get along well with people. I treat my work with maximum efficiency.
        I&#39;m engaged in self-study. My first encounter with JavaScript was in June 2020. For me, technology is a
        tool.
      </div>
      <div className="about-me-bio__buttons">
        <Button kind="primary">Resume</Button>
      </div>
    </div>
  </div>
);

export default AboutMe;
