import './ColorPalette.scss';
import ProjectContainer from '../../../components/ProjectContainer/ProjectContainer';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import Link from '../../../components/Link/Link';
import Color from '../../../assets/images/colorPalette.png';

const type = 'PERSONAL PROJECTS';
const text = 'React Color Palette';
const items = [
  'Reusable React Components',
  'Small projects done as as job interview task',
];
const skills = ['React', 'Javascript', 'HTML 5', 'Sass'];

const ColorPalette = () => {
  return (
    <>
      <div className="ui stackable grid container">
        <div className="eight wide computer column">
          <ProjectContainer
            type={type}
            projectName={'Color Palette'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://react-colorpalette.vercel.app/'}
            skills={skills}
          />
        </div>
        <div className="seven wide computer column">
          <div className="colorImage-container">
            <ImageContainer
              imgSrc={Color}
              url={'https://react-colorpalette.vercel.app/'}
            />
          </div>
          <div className="color-link">
            <Link
              url={'https://github.com/wujekbizon/react-Frontend_Intern-task'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ColorPalette;
