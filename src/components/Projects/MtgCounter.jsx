import CounterImage from '../../assets/images/Mtg.png';
// componets
import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ImageContainer from '../ImageContainer/ImageContainer';
import Link from '../Link/Link';
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
      <div>
        <div>
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
        <div>
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
