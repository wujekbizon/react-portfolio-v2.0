import './About.scss';
import Accordion from '../Accordion/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHtml5,
  faSass,
  faCss3,
  faJsSquare,
  faReact,
  faNodeJs,
  faGitAlt,
  faGithub,
  faBootstrap,
  faNpm,
} from '@fortawesome/free-brands-svg-icons';

import {
  SiTypescript,
  SiMongodb,
  SiVercel,
  SiVisualstudiocode,
  SiBulma,
  SiRedux,
} from 'react-icons/si';

const About = () => {
  return (
    <div>
      <div className="about-page">
        <h1>About Me</h1>
      </div>
      <h2>Skills</h2>

      <div className="skills">
        <div className="grid">
          <p className="javascript">
            <FontAwesomeIcon icon={faJsSquare} />
          </p>
          <p className="react">
            <FontAwesomeIcon icon={faReact} />
          </p>
          <p className="css">
            <FontAwesomeIcon icon={faCss3} />
          </p>
          <p className="html">
            <FontAwesomeIcon icon={faHtml5} />
          </p>
          <p className="typescript">
            <SiTypescript />
          </p>

          <p className="redux">
            <SiRedux />
          </p>

          <p className="sass">
            <FontAwesomeIcon icon={faSass} />
          </p>

          <p className="node">
            <FontAwesomeIcon icon={faNodeJs} />
          </p>
          <p className="mongoDb">
            <SiMongodb />
          </p>
          <p className="git">
            <FontAwesomeIcon icon={faGitAlt} />
          </p>
          <p className="gitHub">
            <FontAwesomeIcon icon={faGithub} />
          </p>
          <p className="bootstrap">
            <FontAwesomeIcon icon={faBootstrap} />
          </p>
          <p className="bulma">
            <SiBulma />
          </p>
          <p className="npm">
            <FontAwesomeIcon icon={faNpm} />
          </p>
          <p className="vercel">
            <SiVercel />
          </p>
          <p className="code">
            <SiVisualstudiocode />
          </p>
        </div>
      </div>
      <Accordion />
    </div>
  );
};

export default About;
