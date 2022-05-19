import './Projects.scss';
import MtgCounter from './MtgCounter/MtgCounter';
import MovieFight from './MovieFight/MovieFight';
import YelpCamp from './YelpCamp/YelpCamp';

const Projects = () => {
  return (
    <div>
      <div className="projects-page">
        <h1>MY PROJECTS :</h1>
      </div>

      <MtgCounter />
      <YelpCamp />
      <MovieFight />
    </div>
  );
};

export default Projects;
