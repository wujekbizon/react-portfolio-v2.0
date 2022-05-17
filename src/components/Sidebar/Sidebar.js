import './Sidebar.scss';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseLaptop,
  faHouseUser,
  faEnvelope,
  faDiagramProject,
} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink to="/" activeclassname="active">
          <FontAwesomeIcon icon={faHouseLaptop} color="hsl(231 77% 90%" />
        </NavLink>
        <NavLink to="/about" className="about-link">
          <FontAwesomeIcon icon={faHouseUser} color="hsl(231 77% 90%" />
        </NavLink>
        <NavLink to="/projects" className="projects-link">
          <FontAwesomeIcon icon={faDiagramProject} color="hsl(231 77% 90%" />
        </NavLink>
        <NavLink to="/contact" className="contact-link">
          <FontAwesomeIcon icon={faEnvelope} color="hsl(231 77% 90%" />
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
