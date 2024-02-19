import Button from '../../components/UI/Button/Button';
import './AboutMe.scss';

const AboutMe = () => (
  <div className="about-me">
    <div className="about-me-bio">
      <div className="about-me-bio__title wow fadeInLeft">About me</div>
      <div className="about-me-bio__description wow fadeInLeft" data-wow-delay="0.2s">
        I&#39;m an honest and responsible person. I get along well with people. I treat my work with maximum efficiency.
        I&#39;m engaged in self-study. My first encounter with JavaScript was in June 2020. For me, technology is a
        tool.
      </div>
      <div className="about-me-bio__buttons wow fadeInLeft" data-wow-delay="0.4s">
        <Button
          type="link"
          kind="primary"
          linkOptions={{
            linkUrl: 'https://drive.google.com/file/d/1nom46ho5jgztxnxOgQB967hjWqtR5bEO/view',
            target: '_blank',
            rel: 'noreferrer',
          }}
        >
          Download CV
        </Button>
      </div>
    </div>
    <div className="about-me-photo wow fadeInRight" data-wow-delay="0.3s">
      <img src="./images/photos/my_2.jpg" alt="it's my" />
    </div>
  </div>
);

export default AboutMe;
