import Button from '../../components/UI/Button/Button';
import './Intro.scss';

const Intro = () => (
  <div className="intro">
    <div className="intro-major wow fadeInLeft">
      <span>Front-end</span>
      <span className="intro-major__spec"> | </span>
      <span>Fullstack</span>
      <span className="intro-major__spec">developer</span>
    </div>
    <div className="intro-bio">
      <div className="intro-bio__title wow fadeInLeft" data-wow-delay="0.2s">
        Hello, my name is Denis Karazan
      </div>
      <div className="intro-bio__description wow fadeInLeft" data-wow-delay="0.4s">
        I can develop websites and web applications from scratch.
        <br />
        I have experience managing a team and working as a team.
        <br />
        I&#39;m constantly developing in the field of web development.
      </div>
      <div className="intro-bio__buttons wow fadeInLeft" data-wow-delay="0.6s">
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
        <Button
          type="link"
          linkOptions={{ linkUrl: 'https://www.linkedin.com/in/denis-karazan/', target: '_blank', rel: 'noreferrer' }}
        >
          LinkedIn
        </Button>
      </div>
    </div>
  </div>
);

export default Intro;
