import { useDispatch } from 'react-redux';
import ParallaxWrap from '../../../components/Paralax/Paralax';
import Button from '../../../components/UI/Button/Button';
import { toggleShowProjectModal } from '../../../slices/layoutSlice';
import './Project.scss';

type ProjectProps = {
  photoAlign: string;
  title: string;
  description: string;
  linkUrl: string;
  srcImage: string;
  techText: string;
};

const Project = ({ photoAlign, title, description, linkUrl, srcImage, techText }: ProjectProps) => {
  const dispatch = useDispatch();

  const handleClickTech = () => {
    dispatch(toggleShowProjectModal(techText));
  };

  return (
    <div className={`project ${photoAlign}`}>
      <div className="project-preview">
        <div className="project-info">
          <div className="project-info__title">{title}</div>
          <div className="project-info__description">{description}</div>
          <div className="project-info__buttons">
            <Button
              type="link"
              linkOptions={{ linkUrl, target: '_blank', rel: 'noreferrer' }}
              className="project-info__link"
              styles={{ borderRadius: 24 }}
            >
              View Project
            </Button>
            <Button className="project-info__link" styles={{ borderRadius: 24 }} onClick={handleClickTech}>
              Tech stack
            </Button>
          </div>
        </div>
      </div>
      <div className="project-preview">
        <ParallaxWrap>
          <img src={srcImage} alt={title} className="project-preview__image" />
        </ParallaxWrap>
      </div>
    </div>
  );
};

export default Project;
