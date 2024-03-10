import LavaLamp from '../LavaLamp/LavaLamp';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-priority wow fadeInUp">
      Prior to collaboration, it&#39;s essential to acknowledge that, as a seasoned web developer, I&#39;m unable to
      accommodate &#34;urgent tasks&#34; or engage in projects of a duration shorter than a day. My focus is on
      cultivating enduring partnerships rather than pursuing quick, short-term gains.
    </div>
    <div className="footer-copy wow fadeInUp">Denis Karazan 2024</div>
    <div className="footer-space" />
    <div className="footer-lava-lamp">
      <LavaLamp />
    </div>
  </footer>
);

export default Footer;
