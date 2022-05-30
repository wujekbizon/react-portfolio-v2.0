import './Projects.scss';
import MtgCounter from './MtgCounter/MtgCounter';
import MovieFight from './MovieFight/MovieFight';
import YelpCamp from './YelpCamp/YelpCamp';
import Portfolio from './Portfolio/Portfolio';
import PortfolioV2 from './PortfolioV2/PortfolioV2';
import Mtg from './Mtg/Mtg';

const Projects = () => {
  return (
    <div>
      <div className="projects-page">
        <h1>MY PROJECTS :</h1>
      </div>
      <YelpCamp />
      <PortfolioV2 />
      <MtgCounter />
      <MovieFight />
      <Portfolio />
      <Mtg />
    </div>
  );
};

export default Projects;
