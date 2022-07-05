import './Portfolio.scss';
import ImagePort from '../../../assets/images/portfolio-v1.png';
// components
import ProjectContainer from '../../../components/ProjectContainer/ProjectContainer';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import Link from '../../../components/Link/Link';

const type = 'FRONTEND DEVELOPER';
const text = 'My Portfolio ver 1.0 made in React';
const items = [
  'Reusable React Components',
  'Self Designed SVG logo',
  'Animated Letters',
  'Google Map',
  'Fully responsive application',
  'Reusable',
];
const skills = [
  'Javascript',
  'React',
  'Sass',
  'CSS 3',
  'Vercel',
  'Animate.css',
  'GSAP',
  'Inkscape',
];

const Portfolio = () => {
  return (
    <>
      <div className="ui stackable grid container">
        <div className="eight wide computer column">
          <ProjectContainer
            type={type}
            projectName={'React Portfolio v 1.0'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://grzegorz-wolfinger.vercel.app/'}
            skills={skills}
          />
        </div>
        <div className="seven wide computer column">
          <div className="portfolioImage-container">
            <ImageContainer
              imgSrc={ImagePort}
              url={'https://grzegorz-wolfinger.vercel.app/'}
            />
          </div>
          <div className="portfolio-link">
            <Link url={'https://github.com/wujekbizon/react-portfolio'} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Portfolio;
