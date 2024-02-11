import Button from '../../../components/UI/Button/Button';
import './Project.scss';

type ProjectProps = {
  photoAlign: string;
  title: string;
  description: string;
  linkUrl: string;
  srcImage: string;
};

const Project = ({ photoAlign, title, description, linkUrl, srcImage }: ProjectProps) => (
  <div className={`project ${photoAlign}`}>
    <div className="project-info">
      <div className="project-info__title">{title}</div>
      <div className="project-info__description">{description}</div>
      <Button
        type="link"
        linkOptions={{ linkUrl, target: '_blank', rel: 'noreferrer' }}
        className="project-info__link"
        styles={{ maxWidth: 150, borderRadius: 24 }}
      >
        View Project
      </Button>
    </div>
    <img src={srcImage} alt={title} className="project-info__image" />
  </div>
);

export default Project;
