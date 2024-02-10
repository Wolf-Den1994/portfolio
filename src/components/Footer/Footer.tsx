import LavaLamp from '../LavaLamp/LavaLamp';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-copy">Denis Karazan 2024</div>
    <div className="footer-space" />
    <div className="footer-lava-lamp">
      <LavaLamp />
    </div>
  </footer>
);

export default Footer;
