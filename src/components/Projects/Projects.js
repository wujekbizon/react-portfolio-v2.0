import './Projects.scss';
import MtgCounter from './MtgCounter/MtgCounter';
import MovieFight from './MovieFight/MovieFight';
import YelpCamp from './YelpCamp/YelpCamp';
import Portfolio from './Portfolio/Portfolio';
import PortfolioV2 from './PortfolioV2/PortfolioV2';
import Mtg from './Mtg/Mtg';
import AdminPanel from './AdminPanel/AdminPanel';
import ColorPalette from './ColorPalette/ColorPalette';

const Projects = () => {
  return (
    <div>
      <div className="projects-page">
        <h1>MY PROJECTS :</h1>
      </div>
      <YelpCamp />
      <AdminPanel />
      <PortfolioV2 />
      <ColorPalette />
      <MtgCounter />
      <MovieFight />
      <Portfolio />
      <Mtg />
    </div>
  );
};

export default Projects;
