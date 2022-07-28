import ImagePortV2 from '../../assets/images/portfolio-v2.png';
// components
import ProjectContainer from '../ProjectContainer/ProjectContainer';

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
    <div>
      <ProjectContainer
        type={type}
        projectName={'React Portfolio v 2.0'}
        description={text}
        items={items}
        content={'View project'}
        url={'https://grzegorz-wolfinger-portfoliov2.vercel.app'}
        skills={skills}
        linkUrl={'https://github.com/wujekbizon/react-portfolio-v2.0'}
        linkContent={'Github Code'}
        imgSrc={ImagePortV2}
      />
    </div>
  );
};

export default PortfolioV2;
