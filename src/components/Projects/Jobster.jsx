import ProjectContainer from '../ProjectContainer/ProjectContainer';
import ImageContainer from '../ImageContainer/ImageContainer';
import Link from '../Link/Link';
import Job from '../../assets/images/jobster.png';

const type = 'FRONTEND DEVELOPER';
const text =
  'This simply but awesome app can help me track all of my pending job applications and interviews.';
const items = [
  'During the process of building this app I moved my redux skills to highest level , and using Redux toolkit makes the whole process a breeze. ',
  'Full CRUD',
  'Using Recharts',
];
const skills = [
  'Javascript',
  'React',
  'React-Router v6',
  'Redux Toolkit',
  'Axios',
  'Styled Components',
  'CSS 3',
];

const Jobster = () => {
  return (
    <>
      <div>
        <div>
          <ProjectContainer
            type={type}
            projectName={'Jobster'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://react-jobster.vercel.app/'}
            skills={skills}
          />
        </div>
        <div>
          <div className="jobsterImage-container">
            <ImageContainer
              imgSrc={Job}
              url={'https://react-jobster.vercel.app/'}
            />
          </div>
          <div className="jobster-link">
            <Link url={'https://github.com/wujekbizon/react-jobster'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobster;
