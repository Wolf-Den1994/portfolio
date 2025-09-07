import { forwardRef, Ref, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ModalDefault from '../../components/ModalDefault/ModalDefault';
import Title from '../../components/Title/Title';
import { RootState } from '../../slices';
import { toggleShowProjectModal } from '../../slices/layoutSlice';
import SwiperProjects from './SwiperProjects/SwiperProjects';
import './Projects.scss';

const WHEN_CHANGE_ROUTE_IN_PX = 120;
let lastScrollTop = 0;

const Projects = forwardRef((props, forwardedRef: Ref<HTMLDivElement>) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const modalProject = useSelector((state: RootState) => state.layout.modalProject);

  const handleScroll = () => {
    const top = window.scrollY;
    if (lastScrollTop > top && window.scrollY < WHEN_CHANGE_ROUTE_IN_PX && window.location.pathname !== '/') {
      navigate('/');
    }
    lastScrollTop = top;
  };

  const handleClose = useCallback(() => dispatch(toggleShowProjectModal(null)), []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="projects" className="projects" ref={forwardedRef}>
      <Title text={t('projects.title')} />
      <SwiperProjects />
      {modalProject &&
        createPortal(
          <ModalDefault
            prevText={modalProject.prevText}
            text={modalProject.text}
            textStyle={{ textAlign: 'right' }}
            prevTextStyle={{
              fontWeight: 700,
              textShadow: '0px 4px 4px #00000040',
              display: 'block',
              textAlign: 'left',
            }}
            onClose={handleClose}
          />,
          document.body,
        )}
    </div>
  );
});

export default Projects;
