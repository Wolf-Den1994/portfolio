import Button from '../../components/UI/Button/Button';
import './Intro.scss';

const Intro = () => (
  <div className="intro">
    <div className="major">Front-end | Fullstack developer</div>
    <div className="bio">
      <div className="bio__title">Hello, my name is Denis Karazan</div>
      <div className="bio__description">
        Short text with details about you, what you do or your professional career. You can add more information on the
        about page.
      </div>
      <div className="bio__buttons">
        <Button kind="primary">Projects</Button>
        <Button>LinkedIn</Button>
      </div>
    </div>
  </div>
);

export default Intro;
