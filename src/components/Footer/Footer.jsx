import './Footer.scss';
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className="container gradient__bg">
      <div className="social-media">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="hsl(231 77% 90%" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/wujekbizon"
        >
          <FontAwesomeIcon icon={faGithubSquare} color="hsl(231 77% 90%" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https:facebook.com/grzegorz.wolfinger"
        >
          <FontAwesomeIcon icon={faFacebookSquare} color="hsl(231 77% 90%" />
        </a>
        <a href="/contact">
          <FontAwesomeIcon icon={faSquareEnvelope} color="hsl(231 77% 90%" />
        </a>
      </div>

      <div className="resumeContainer">
        <a
          className="resume"
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1eSVYNcbEoQ7PqAN59VfUghAzuB056r8v/view?usp=sharing"
        >
          Curriculum Vitae
        </a>
      </div>
    </div>
  );
};

export default Footer;
