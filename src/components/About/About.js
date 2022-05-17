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
            <FontAwesomeIcon icon={faJsSquare} color="#f0db4f" />
          </p>
          <p className="react">
            <FontAwesomeIcon icon={faReact} color="#61dbfb" />
          </p>
          <p className="css">
            <FontAwesomeIcon icon={faCss3} color="#264de4" />
          </p>
          <p className="html">
            <FontAwesomeIcon icon={faHtml5} color="#e34c26" />
          </p>
          <p className="typescript">
            <SiTypescript color="#007acc" />
          </p>

          <p className="redux">
            <SiRedux color="#764abc" />
          </p>

          <p className="sass">
            <FontAwesomeIcon icon={faSass} color="#cd6799" />
          </p>

          <p className="node">
            <FontAwesomeIcon icon={faNodeJs} color="#3c873a" />
          </p>
          <p className="mongoDb">
            <SiMongodb color="#4db33d" />
          </p>
          <p className="git">
            <FontAwesomeIcon icon={faGitAlt} color="#f1502f" />
          </p>
          <p className="gitHub">
            <FontAwesomeIcon icon={faGithub} color="hsl(0 0% 100%)" />
          </p>
          <p className="bootstrap">
            <FontAwesomeIcon icon={faBootstrap} color="#563d7c" />
          </p>
          <p className="bulma">
            <SiBulma color="#00d1b2" />
          </p>
          <p className="npm">
            <FontAwesomeIcon icon={faNpm} color="#cc3534" />
          </p>
          <p className="vercel">
            <SiVercel color="hsl(0 0% 100%)" />
          </p>
          <p className="code">
            <SiVisualstudiocode color="#0078d7" />
          </p>
        </div>
      </div>
      <Accordion />
    </div>
  );
};

export default About;
