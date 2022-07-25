import './GithubUser.scss';
import Github from '../../../assets/images/github_user.png';
import ProjectContainer from '../../../components/ProjectContainer/ProjectContainer';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import Link from '../../../components/Link/Link';

const type = 'FRONT END DEVELOPER';
const text = 'search for any github user ';
const items = [
  "Check who's repos got the most stars.",
  'Search thru all Github Database, to find any User',
  'Check which is the most used programming language by Github community.',
];
const skills = [
  'Javascript',
  'React',
  'Context',
  'Axios',
  'CSS 3',
  'React-Router v6',
  'Auth0',
  'Fusion Charts',
];

const GithubUser = () => {
  return (
    <>
      <div className="ui stackable grid container">
        <div className="eight wide computer column">
          <ProjectContainer
            type={type}
            projectName={'Github User'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://react-github-users-gw.vercel.app/'}
            skills={skills}
          />
        </div>
        <div className="seven wide computer column">
          <div className="githubUserImage-container">
            <ImageContainer
              imgSrc={Github}
              url={'https://react-github-users-gw.vercel.app/'}
            />
          </div>
          <div className="githubUser-link">
            <Link url={'https://github.com/wujekbizon/react-github-users'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default GithubUser;
