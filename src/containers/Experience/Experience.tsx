import { useMemo } from 'react';
import SlideToggleWrap from '../../components/SlideToggleWrap/SlideToggleWrap';
import Title from '../../components/Title/Title';
import jobsData from '../../data/jobs';
import './Experience.scss';

const Experience = () => {
  const theJobsData = useMemo(() => jobsData, []);

  return (
    <div className="experience">
      <Title text="Experience" />
      <div className="jobs">
        {theJobsData.map(({ company, position, date, moreInfo, blockAlignLeft }) => (
          <SlideToggleWrap
            key={date}
            title={company}
            description={position}
            date={date}
            moreInfo={moreInfo}
            blockAlignLeft={blockAlignLeft}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
