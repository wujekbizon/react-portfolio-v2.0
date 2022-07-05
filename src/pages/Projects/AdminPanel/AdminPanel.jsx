import './AdminPanel.scss';
import ProjectContainer from '../../../components/ProjectContainer/ProjectContainer';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import Link from '../../../components/Link/Link';
import Admin from '../../../assets/images/admin.png';

const type = 'FULLSTACK DEVELOPER';
const text = 'React Admin Panel for my fullstack MERN application';
const items = [
  'MWD Store Admin Panel',
  'Register new user at client-side then you can access to admin panel in View Mode.',
  'Add, delete and edit products and users , check the latest transactions',
  'Work in progress to add more functionality.',
];
const skills = [
  'React',
  'Redux',
  'Context',
  'Javascript',
  'HTML 5',
  'Sass',
  'React-Router',
  'Mongo Db',
];

const AdminPanel = () => {
  return (
    <>
      <div className="ui stackable grid container">
        <div className="eight wide computer column">
          <ProjectContainer
            type={type}
            projectName={'Admin Panel'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://adminpanelmwd.herokuapp.com/'}
            skills={skills}
          />
        </div>
        <div className="seven wide computer column">
          <div className="adminImage-container">
            <ImageContainer
              imgSrc={Admin}
              url={'https://adminpanelmwd.herokuapp.com/'}
            />
          </div>
          <div className="admin-link">
            <Link url={'https://github.com/wujekbizon/mwd-admin-panel'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
