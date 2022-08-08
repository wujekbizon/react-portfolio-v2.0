import './Projects.scss';
import Img from '../../assets/images/possibility.png';
import { projectsData } from '../../utils/data';
import ProjectContainer from '../../components/ProjectContainer/ProjectContainer';

import Navbar from '../../components/Navbar/Navbar';
const Projects = () => {
  return (
    <>
      <Navbar className="projects__bg" />
      <div className="projects projects__bg ">
        <div className="top">
          <div className="img-container">
            <img src={Img} alt="" />
          </div>
        </div>

        <div className="container">
          {projectsData.map((project) => {
            const {
              id,
              type,
              projectName,
              text,
              items,
              skills,
              content,
              url,
              linkUrl,
              linkContent,
              imgSrc,
            } = project;
            return (
              <ProjectContainer
                key={id}
                type={type}
                projectName={projectName}
                skills={skills}
                description={text}
                items={items}
                url={url}
                linkUrl={linkUrl}
                linkContent={linkContent}
                content={content}
                imgSrc={imgSrc}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
