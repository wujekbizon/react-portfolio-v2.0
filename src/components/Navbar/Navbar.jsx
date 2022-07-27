import './Navbar.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouseLaptop,
  faHouseUser,
  faEnvelope,
  faDiagramProject,
  faRectangleList,
} from '@fortawesome/free-solid-svg-icons';

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="nav-bar">
      <nav className={`menuNav ${navbarOpen ? 'open' : ''}`}>
        <NavLink to="/" activeclassname="active" onClick={() => closeMenu()}>
          <FontAwesomeIcon icon={faHouseLaptop} color="hsl(231 77% 90%" />
        </NavLink>
        <NavLink to="/about" className="about-link" onClick={() => closeMenu()}>
          <FontAwesomeIcon icon={faHouseUser} color="hsl(231 77% 90%" />
        </NavLink>
        <NavLink
          to="/projects"
          className="projects-link"
          onClick={() => closeMenu()}
        >
          <FontAwesomeIcon icon={faDiagramProject} color="hsl(231 77% 90%" />
        </NavLink>
        <NavLink to="/apps" className="apps-link" onClick={() => closeMenu()}>
          <FontAwesomeIcon icon={faRectangleList} color="hsl(231 77% 90%" />
        </NavLink>

        <NavLink
          to="/contact"
          className="contact-link"
          onClick={() => closeMenu()}
        >
          <FontAwesomeIcon icon={faEnvelope} color="hsl(231 77% 90%" />
        </NavLink>
      </nav>
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}
      </button>
    </div>
  );
};

export default Navbar;
