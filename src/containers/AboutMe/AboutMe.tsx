import { useTranslation } from 'react-i18next';
import Button from '../../components/UI/Button/Button';
import './AboutMe.scss';

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about-me">
      <div className="about-me-bio">
        <div className="about-me-bio__title wow fadeInLeft">{t('about.title')}</div>
        <div className="about-me-bio__description wow fadeInLeft" data-wow-delay="0.2s">
          {t('about.description')}
        </div>
        <div className="about-me-bio__buttons wow fadeInLeft" data-wow-delay="0.4s">
          <Button
            type="link"
            kind="primary"
            linkOptions={{
              linkUrl: 'https://drive.google.com/file/d/1Jz8uEI286FtEzFMWQa0xUdhO3p06pa3Y/view',
              target: '_blank',
              rel: 'noreferrer',
            }}
          >
            {t('intro.button_cv')}
          </Button>
        </div>
      </div>
      <div className="about-me-photo wow fadeInRight" data-wow-delay="0.3s">
        <img src="./images/photos/my_2.jpg" alt={t('about.alt_text_photo')} />
      </div>
    </div>
  );
};

export default AboutMe;
