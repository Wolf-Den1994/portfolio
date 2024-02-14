import Button from '../../components/UI/Button/Button';
import './Intro.scss';

const Intro = () => (
  <div className="intro">
    <div className="intro-major">
      Front-end | Fullstack <span>developer</span>
    </div>
    <div className="intro-bio">
      <div className="intro-bio__title">Hello, my name is Denis Karazan</div>
      <div className="intro-bio__description">
        I can develop websites and web applications from scratch.
        <br />
        I have experience managing a team and working as a team.
        <br />
        I&#39;m constantly developing in the field of web development.
      </div>
      <div className="intro-bio__buttons">
        <Button type="link" kind="primary" linkOptions={{ linkUrl: '#projects' }}>
          Projects
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
