import './Home.scss';
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/images/logo_sub-v3.png';

const Home = () => {
  const nameArray = [
    'I',
    "'",
    'm',
    ',',
    ' ',
    'G',
    'r',
    'e',
    'g',
    'o',
    'r',
    'y',
    ' ',
  ];
  return (
    <>
      <div className="title">
        <h1>Welcome to my Portfolio!</h1>
      </div>
      <div className="name">
        {nameArray}
        <img className="logo" src={Logo} alt="wolfinger" />
      </div>
      <div className="jobs">Full Stack Developer | Software Engineer</div>

      <div className="social-media" id="media">
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
        <a target="_blank" rel="noreferrer" href="/contact">
          <FontAwesomeIcon icon={faSquareEnvelope} color="hsl(231 77% 90%" />
        </a>
      </div>
      <div id="resume">
        <a href="https://drive.google.com/file/d/1un5VGs5CcW6A3_w9H4ivNc6CxdSHqPsR/view?usp=sharing">
          Curriculum Vitae
        </a>
      </div>
    </>
  );
};

export default Home;
