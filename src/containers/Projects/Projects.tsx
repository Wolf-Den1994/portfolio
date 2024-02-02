import projectsData from '../../utils/projects-data';
import Project from '../Project/Project';
import './Projects.scss';

const Projects = () => (
  <div className="projects">
    <div className="projects__title">Projects</div>
    <div className="projects__divider" />
    {projectsData.map(({ photoAlign, title, description, linkUrl, srcImage }) => (
      <Project photoAlign={photoAlign} title={title} description={description} linkUrl={linkUrl} srcImage={srcImage} />
    ))}
  </div>
);

export default Projects;
