import { useState } from 'react';
import { SlideToggle } from 'react-smooth-slide-toggle';
import Button from '../../../components/UI/Button/Button';
import Icon from '../../../components/UI/Icon/Icon';
import { iconArrowMore } from '../../../data/icons';
import './Job.scss';
import JobContent from '../JobContent/JobContent';
import JobMoreInfo from '../JobMoreInfo/JobMoreInfo';

type JobInfo = {
  company: string;
  position: string;
  date: string;
  moreInfo: string;
  blockAlignLeft: boolean;
};

type JobProps = {
  data: JobInfo;
};

const Job = ({ data: { company, position, date, moreInfo, blockAlignLeft } }: JobProps) => {
  const [active, setActive] = useState(false);

  return (
    <div className={`job wow ${blockAlignLeft ? 'job_left fadeInLeft' : 'job_right fadeInRight'}`}>
      <JobContent company={company} position={position} date={date} />
      <SlideToggle
        trigger={
          <div className={`insides ${active ? 'insides_active' : ''}`} role="presentation">
            <Button className="more">
              <Icon name={iconArrowMore} />
            </Button>
          </div>
        }
        duration={250}
        callBack={() => setActive((prev) => !prev)}
      >
        <JobMoreInfo infoText={moreInfo} key={date} />
      </SlideToggle>
    </div>
  );
};

export default Job;
