import { useTranslation } from 'react-i18next';
import Button from '../../components/UI/Button/Button';
import './Intro.scss';
import { getClassLocale } from '../../utils/locale';

const Intro = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className={getClassLocale(i18n, 'intro')}>
      <div className="intro-major wow fadeInLeft">
        <span>Front-end</span>
        <span className="intro-major__spec"> | </span>
        <span>Fullstack</span>
        <span className="intro-major__spec"> {t('intro.spec')}</span>
      </div>
      <div className="intro-bio">
        <div className="intro-bio__title wow fadeInLeft" data-wow-delay="0.2s">
          {t('intro.title')}
        </div>
        <div className="intro-bio__description wow fadeInLeft" data-wow-delay="0.4s">
          {t('intro.description_1')}
          <br />
          {t('intro.description_2')}
          <br />
          {t('intro.description_3')}
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
            {t('intro.button_cv')}
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
};

export default Intro;
