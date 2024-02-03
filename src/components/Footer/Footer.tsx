import BackgroundImage from '../BackgroundImage/BackgroundImage';
import './Footer.scss';

const Footer = () => (
  <footer className="footer">
    <div className="footer-copy">Denis Karazan 2024</div>
    <BackgroundImage
      srcImage="./images/footer.png"
      width="100%"
      height={344}
      additionalStyles={{ position: 'absolute', top: '-300%', right: 0, zIndex: -1 }}
    />
  </footer>
);

export default Footer;
