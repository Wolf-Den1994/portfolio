import SwiperProjects from './SwiperProjects/SwiperProjects';
import './Projects.scss';

const Projects = () => (
  <div className="projects">
    <div className="projects__title">Projects</div>
    <div className="projects__divider" />
    <SwiperProjects />
  </div>
);

export default Projects;
