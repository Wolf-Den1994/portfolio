import { useTranslation } from 'react-i18next';
import LavaLamp from '../LavaLamp/LavaLamp';
import './Footer.scss';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-priority wow fadeInUp">{t('footer.priority')}</div>
      <div className="footer-copy wow fadeInUp">{t('logo.name')}, 2024</div>
      <div className="footer-space" />
      <div className="footer-lava-lamp">
        <LavaLamp />
      </div>
    </footer>
  );
};

export default Footer;
