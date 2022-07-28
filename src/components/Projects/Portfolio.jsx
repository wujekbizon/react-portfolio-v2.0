import ImagePort from '../../assets/images/portfolio-v1.png';
// components
import ProjectContainer from '../ProjectContainer/ProjectContainer';

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
      <div>
        <div>
          <ProjectContainer
            type={type}
            projectName={'React Portfolio v 1.0'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://grzegorz-wolfinger.vercel.app/'}
            skills={skills}
            linkUrl={'https://github.com/wujekbizon/react-portfolio'}
            linkContent={'Github Code'}
            imgSrc={ImagePort}
          />
        </div>
      </div>
    </>
  );
};
export default Portfolio;
