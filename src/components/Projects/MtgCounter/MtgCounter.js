import './MtgCounter.scss';
// image
import Mtg from '../../../assets/images/Mtg.png';
// componets
import ImageContainer from '../../ImageContainer/ImageContainer';
import ProjectContainer from '../../ProjectContainer/ProjectContainer';
import Link from '../../Link/Link';

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
      <ProjectContainer
        type={type}
        projectName={'Mtg Life Counter'}
        description={text}
        items={items}
        content={'View project'}
        url={'https://js-lifecounter.vercel.app/'}
        skills={skills}
      />
      <ImageContainer imgSrc={Mtg} url={'https://js-lifecounter.vercel.app/'} />
      <Link url={'https://github.com/wujekbizon/jS-apps-lifeCounter'} />
    </>
  );
};

export default MtgCounter;
