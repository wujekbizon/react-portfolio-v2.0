// components
import ProjectContainer from '../ProjectContainer/ProjectContainer';

import MtgSearch from '../../assets/images/mtgsearch.png';

const type = 'WORK IN PROGRESS';
const text = 'Mtg v0.1';
const items = [
  'WORK IN PROGRESS',
  'Search for a card',
  'Build 60+ cards deck,',
  'Any many many more',
  'WORK IN PROGRESS',
];
const skills = ['Typescript', 'Javascript', 'React', 'Animate.css'];

const Mtg = () => {
  return (
    <>
      <div>
        <div>
          <ProjectContainer
            type={type}
            projectName={'Mtg Card Game'}
            description={text}
            items={items}
            content={'DEMO'}
            url={'https://react-ts-mtg.vercel.app/'}
            skills={skills}
            linkUrl={'https://github.com/wujekbizon/react-ts-mtg'}
            linkContent={'Github Code'}
            imgSrc={MtgSearch}
          />
        </div>
      </div>
    </>
  );
};

export default Mtg;
