import { forwardRef, Ref, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SwiperProjects from './SwiperProjects/SwiperProjects';
import './Projects.scss';

const WHEN_CHANGE_ROUTE_IN_PX = 120;
let lastScrollTop = 0;

const Projects = forwardRef((props, forwardedRef: Ref<HTMLDivElement>) => {
  const navigate = useNavigate();

  const handleScroll = () => {
    const top = window.pageYOffset;
    if (lastScrollTop > top && window.scrollY < WHEN_CHANGE_ROUTE_IN_PX) {
      navigate('/');
    }
    lastScrollTop = top;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="projects" className="projects" ref={forwardedRef}>
      <div className="projects__title">Projects</div>
      <div className="projects__divider" />
      <SwiperProjects />
    </div>
  );
});

export default Projects;
