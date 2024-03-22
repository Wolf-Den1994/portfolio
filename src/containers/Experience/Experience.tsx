import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import SlideToggleWrap from '../../components/SlideToggleWrap/SlideToggleWrap';
import Title from '../../components/Title/Title';
import jobsData from '../../data/jobs';
import './Experience.scss';

const Experience = () => {
  const { t } = useTranslation();
  const theJobsData = useMemo(() => jobsData, []);

  return (
    <div className="experience">
      <Title text={t('experience.title')} />
      <div className="jobs">
        {theJobsData.map(({ company, position, date, moreInfo, blockAlignLeft }) => (
          <SlideToggleWrap
            key={date}
            title={t(company)}
            description={t(position)}
            date={t(date)}
            moreInfo={t(moreInfo)}
            blockAlignLeft={blockAlignLeft}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
