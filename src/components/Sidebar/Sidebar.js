import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHouseLaptop } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <div>
        <nav>
          <NavLink to="/">
            <FontAwesomeIcon icon={faHouseLaptop} />
          </NavLink>
        </nav>
      </div>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/wujekbizon">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </div>
  );
};

export default Sidebar;
