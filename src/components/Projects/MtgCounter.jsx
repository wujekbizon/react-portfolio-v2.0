import CounterImage from '../../assets/images/Mtg.png';
// componets
import ProjectContainer from '../ProjectContainer/ProjectContainer';

const type = 'PERSONAL PROJECT';
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
            linkUrl={'https://github.com/wujekbizon/jS-apps-lifeCounter'}
            linkContent={'Github Code'}
            imgSrc={CounterImage}
          />
        </div>
      </div>
    </>
  );
};

export default MtgCounter;
