import './MtgCounter.scss';
// image
import CounterImage from '../../../assets/images/Mtg.png';
// componets
import ProjectContainer from '../../../components/ProjectContainer/ProjectContainer';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import Link from '../../../components/Link/Link';
const type = 'Personal Project';
const text = 'My first project fully made in JavaScript with Bulma Library.';
const items = [
  'Clean and simple design',
  'Customize player names',
  'Custom Starting Life',
  'Option with setting a Timer',
  'Fully responsive',
];

const skills = ['Javascript', 'CSS 3', 'HTML 5', 'Bulma', 'Vercel'];

const MtgCounter = () => {
  return (
    <>
      <div className="ui stackable grid container">
        <div className="eight wide computer column">
          <ProjectContainer
            type={type}
            projectName={'Mtg Life Counter'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://js-lifecounter.vercel.app/'}
            skills={skills}
          />
        </div>
        <div className=" seven wide computer column">
          <div className="mtgImage-container">
            <ImageContainer
              imgSrc={CounterImage}
              url={'https://js-lifecounter.vercel.app/'}
            />
          </div>
          <div className="mtg-link">
            <Link url={'https://github.com/wujekbizon/jS-apps-lifeCounter'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MtgCounter;
