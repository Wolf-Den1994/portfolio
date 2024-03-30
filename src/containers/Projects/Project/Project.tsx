import { useCallback, useMemo, memo } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation();

  const handleClickTech = useCallback(() => dispatch(toggleShowProjectModal(techText)), []);
  const imageChild = useMemo(() => <img src={srcImage} alt={title} className="project-preview__image" />, []);

  return (
    <div className={`project ${photoAlign}`}>
      <div className="project-preview">
        <div className="project-info">
          <div className="project-info__title">{title}</div>
          <div className="project-info__description">{t(description)}</div>
          <div className="project-info__buttons">
            <Button
              type="link"
              linkOptions={{ linkUrl, target: '_blank', rel: 'noreferrer' }}
              className="project-info__link"
              styles={{ borderRadius: 24 }}
            >
              {t('projects.project.button_view')}
            </Button>
            <Button className="project-info__link" styles={{ borderRadius: 24 }} onClick={handleClickTech}>
              {t('projects.project.button_stack')}
            </Button>
          </div>
        </div>
      </div>
      <div className="project-preview">
        <ParallaxWrap>{imageChild}</ParallaxWrap>
      </div>
    </div>
  );
};

export default memo(Project);
