import { useTranslation } from 'react-i18next';
import Title from '../../components/Title/Title';
import Button from '../../components/UI/Button/Button';
import Icon from '../../components/UI/Icon/Icon';
import interestsIconsData from '../../data/interests';
import './Interests.scss';

const Interests = () => {
  const { t } = useTranslation();

  return (
    <div className="interests">
      <Title text={t('interests.title')} />
      <div className="interests-content">
        {interestsIconsData.map(({ icon, text, delayShow }) => (
          <Button key={text} type="button" className="icon-interest wow fadeIn" animateDelay={delayShow}>
            <Icon name={icon} />
            <span>{t(text)}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Interests;
