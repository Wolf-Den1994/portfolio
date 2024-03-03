import './JobMoreInfo.scss';

type JobMoreInfoProps = {
  infoText: string;
};

const JobMoreInfo = ({ infoText }: JobMoreInfoProps) => (
  <>
    <div className="job-more-divider" />
    <div className="job-more-info">{infoText}</div>
  </>
);

export default JobMoreInfo;
