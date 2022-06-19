import './AdminPanel.scss';
import ProjectContainer from '../../ProjectContainer/ProjectContainer';
import ImageContainer from '../../ImageContainer/ImageContainer';
import Link from '../../Link/Link';
import Admin from '../../../assets/images/admin.png';

const type = 'FRONTEND DEVELOPER';
const text = 'React Admin Panel';
const items = [
  'Reusable React Components',
  'Admin Panel that can be reused in many projects',
  'Work in progress to add more functionality.',
];
const skills = ['React', 'Javascript', 'HTML 5', 'Sass', 'React-Router'];

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
            url={'https://react-admin-panel-rc.vercel.app/'}
            skills={skills}
          />
        </div>
        <div className="seven wide computer column">
          <div className="adminImage-container">
            <ImageContainer
              imgSrc={Admin}
              url={'https://react-admin-panel-rc.vercel.app/'}
            />
          </div>
          <div className="admin-link">
            <Link url={'https://github.com/wujekbizon/react-admin-panel'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPanel;
