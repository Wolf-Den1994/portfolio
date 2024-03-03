import { useMemo } from 'react';
import Title from '../../components/Title/Title';
import jobsData from '../../data/jobs';
import './Experience.scss';
import Job from './Job/Job';

const Experience = () => {
  const theJobsData = useMemo(() => jobsData, []);

  return (
    <div className="experience">
      <Title text="Experience" />
      <div className="jobs">
        {theJobsData.map((job) => (
          <Job data={job} key={job.date} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
