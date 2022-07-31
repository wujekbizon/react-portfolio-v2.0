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
import Logo from '../Logo/Logo';

import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

const Menu = ({ closeMenu, navbarOpen }) => (
  <>
    <NavLink to="/" activeclassname="active" onClick={() => closeMenu()}>
      {navbarOpen ? (
        'Home'
      ) : (
        <FontAwesomeIcon icon={faHouseLaptop} color="hsl(231 77% 90%" />
      )}
    </NavLink>
    <NavLink to="/about" className="about-link" onClick={() => closeMenu()}>
      {navbarOpen ? (
        'About'
      ) : (
        <FontAwesomeIcon icon={faHouseUser} color="hsl(231 77% 90%" />
      )}
    </NavLink>
    <NavLink
      to="/projects"
      className="projects-link"
      onClick={() => closeMenu()}
    >
      {navbarOpen ? (
        'Projects'
      ) : (
        <FontAwesomeIcon icon={faDiagramProject} color="hsl(231 77% 90%" />
      )}
    </NavLink>
    <NavLink to="/apps" className="apps-link" onClick={() => closeMenu()}>
      {navbarOpen ? (
        'Small Apps'
      ) : (
        <FontAwesomeIcon icon={faRectangleList} color="hsl(231 77% 90%" />
      )}
    </NavLink>

    <NavLink to="/contact" className="contact-link" onClick={() => closeMenu()}>
      {navbarOpen ? (
        'Contact'
      ) : (
        <FontAwesomeIcon icon={faEnvelope} color="hsl(231 77% 90%" />
      )}
    </NavLink>
  </>
);

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const closeMenu = () => {
    setNavbarOpen(false);
  };

  return (
    <div className="navbar gradient__bg">
      <div className="navbar-btn">
        <button onClick={handleToggle}>
          {navbarOpen ? (
            <MdClose className="mdclose" />
          ) : (
            <FiMenu className="fimenu" />
          )}
        </button>
        {navbarOpen && (
          <div className="navbar-menu-container scale-up-center">
            {/* <Logo /> */}
            <Menu closeMenu={closeMenu} navbarOpen={navbarOpen} />
          </div>
        )}
      </div>
      <Logo />
      <nav className="navbar-menu">
        <Menu closeMenu={closeMenu} />
      </nav>
    </div>
  );
};

export default Navbar;
