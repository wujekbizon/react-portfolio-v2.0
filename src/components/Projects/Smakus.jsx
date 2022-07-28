import ProjectContainer from '../ProjectContainer/ProjectContainer';
import Bar from '../../assets/images/smakus.png';

const type = 'REAL WORLD PROJECT';
const text = 'Food E-Commerce Website';
const items = [
  "I made this website for some local vendor, who's running small family business.",
  'My own design - ready for future expansion.',
  'Earlier, fully functional version - still working for adding new features.',
];
const skills = [
  'Javascript',
  'React',
  'Sass',
  'React-Redux',
  'Redux Toolkit',
  'Context',
  'React-Leaflet',
  'Material UI',
  'React-Toasify',
  'I18Next',
  'Ityped',
];
const Smakus = () => {
  return (
    <>
      <div>
        <div>
          <ProjectContainer
            type={type}
            projectName={'Smakus'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://smakus.vercel.app/'}
            skills={skills}
            linkUrl={'https://github.com/wujekbizon/react-smakus'}
            linkContent={'Github Code'}
            imgSrc={Bar}
          />
        </div>
      </div>
    </>
  );
};

export default Smakus;
