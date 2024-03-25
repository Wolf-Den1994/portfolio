import { useTranslation } from 'react-i18next';
import SlideToggleWrap from '../../components/SlideToggleWrap/SlideToggleWrap';
import Title from '../../components/Title/Title';
import certificateData from '../../data/certificates';
import './Education.scss';

const Education = () => {
  const { t } = useTranslation();

  const handleClick = (link: string) => {
    window.open(link);
  };

  return (
    <div className="education">
      <Title text={t('education.title')} />
      <div className="certificates">
        {certificateData.map(({ sertName, course, date, moreInfo, blockAlignLeft, isMoreInfoImage, linkSert }) => (
          <SlideToggleWrap
            key={date}
            title={t(sertName)}
            description={t(course)}
            date={t(date)}
            moreInfo={isMoreInfoImage ? moreInfo : t(moreInfo)}
            isMoreInfoImage={isMoreInfoImage}
            blockAlignLeft={blockAlignLeft}
            onClick={() => handleClick(linkSert)}
          />
        ))}
      </div>
    </div>
  );
};

export default Education;
