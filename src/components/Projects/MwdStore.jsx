import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ImageContainer from '../ImageContainer/ImageContainer';
import Link from '../Link/Link';
import Mwd from '../../assets/images/mwd_store.png';

const type = 'FULLSTACK DEVELOPER';
const text = 'Client-side of my fullstack MERN application';
const items = [
  'E-commerce app',
  'Stripe payment method',
  "It's using my , admin panel application , for adding , editing and removing users and products.",
  'Work in progress to add more functionality.',
];
const skills = [
  'React',
  'Redux',
  'Javascript',
  'HTML 5',
  'Styled',
  'React-Router',
  'REST',
  'Express',
  'Mondo Db',
  'Node.js',
];
const MwdStore = () => {
  return (
    <>
      <div>
        <div>
          <ProjectContainer
            type={type}
            projectName={'Mwd Store'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://react-mwd-store.vercel.app/'}
            skills={skills}
          />
        </div>
        <div>
          <div className="mwdImage-container">
            <ImageContainer
              imgSrc={Mwd}
              url={'https://react-mwd-store.vercel.app/'}
            />
          </div>
          <div className="mwd-link">
            <Link url={'https://github.com/wujekbizon/react-mwd'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MwdStore;
