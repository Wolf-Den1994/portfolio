import './JobContent.scss';

type JobContentProps = {
  company: string;
  position: string;
  date: string;
};

const JobContent = ({ company, position, date }: JobContentProps) => (
  <div className="job-content">
    <div className="job-content__company">{company}</div>
    <div className="job-content__position">{position}</div>
    <div className="job-content__date">{date}</div>
  </div>
);

export default JobContent;
