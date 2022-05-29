import './Mtg.scss';
import MtgSearch from '../../../assets/images/mtgsearch.png';
// components
import ProjectContainer from '../../ProjectContainer/ProjectContainer';
import ImageContainer from '../../ImageContainer/ImageContainer';
import Link from '../../Link/Link';

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
      <div className="ui stackable grid container">
        <div className="eight wide computer column mtgSearch-project">
          <ProjectContainer
            type={type}
            projectName={'Mtg Card Game'}
            description={text}
            items={items}
            content={'DEMO'}
            url={'https://react-ts-mtg.vercel.app/'}
            skills={skills}
          />
        </div>
        <div className="seven wide computer column">
          <div className="mtgSearch-container">
            <ImageContainer
              imgSrc={MtgSearch}
              url={'https://react-ts-mtg.vercel.app/'}
            />
          </div>
          <div className="mtgSearch-link">
            <Link url={'https://github.com/wujekbizon/react-ts-mtg'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mtg;
