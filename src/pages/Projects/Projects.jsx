import './Projects.scss';
import Img from '../../assets/images/projectsImg.svg';
import {
  AdminPanel,
  ColorPalette,
  GithubUser,
  Jobster,
  MovieFight,
  Mtg,
  MtgCounter,
  MwdStore,
  Portfolio,
  PortfolioV2,
  Smakus,
  YelpCamp,
} from '../../components/Projects';

const Projects = () => {
  return (
    <div className="projects">
      <div className="top">
        <div className="title">
          <h2>MY PROJECTS</h2>
        </div>
        <div className="img-container">
          <img src={Img} alt="" />
        </div>
      </div>

      <div className="container">
        <Smakus />
        <Jobster />
        <GithubUser />
        <MwdStore />
        <AdminPanel />
        <YelpCamp />
        <PortfolioV2 />
        <ColorPalette />
        <MtgCounter />
        <MovieFight />
        <Portfolio />
        <Mtg />
      </div>
    </div>
  );
};

export default Projects;
