import './PortfolioV2.scss';
import ImagePortV2 from '../../../assets/images/portfolio-v2.png';
// components
import ProjectContainer from '../../../components/ProjectContainer/ProjectContainer';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import Link from '../../../components/Link/Link';

const type = 'FRONTEND DEVELOPER';
const text = 'My Personal Portfolio v2.0';
const items = [
  'Redesign navbar',
  'Reusable React Components',
  'Reusable',
  'Self Designed SVG logo',
  'Contact Form',
  'Leaflet Map',
];
const skills = [
  'React',
  'Javascript',
  'Sass',
  'CSS 3',
  'Vercel',
  'Animate.css',
  'Inkscape',
];

const PortfolioV2 = () => {
  return (
    <div className="ui stackable grid container">
      <div className="eight wide computer column">
        <ProjectContainer
          type={type}
          projectName={'React Portfolio v 2.0'}
          description={text}
          items={items}
          content={'View project'}
          url={'https://grzegorz-wolfinger-portfoliov2.vercel.app'}
          skills={skills}
        />
      </div>
      <div className="seven wide computer column">
        <div className="portfolioImageV2-container">
          <ImageContainer
            imgSrc={ImagePortV2}
            url={'https://grzegorz-wolfinger-portfoliov2.vercel.app'}
          />
        </div>
        <div className="portfolioV2-link">
          <Link url={'https://github.com/wujekbizon/react-portfolio-v2.0'} />
        </div>
      </div>
    </div>
  );
};

export default PortfolioV2;
