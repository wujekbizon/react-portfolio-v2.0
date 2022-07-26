import './Home.scss';
import { useState, useEffect } from 'react';
import {
  faGithubSquare,
  faLinkedin,
  faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../../assets/images/logo_sub-v3.png';
import AnimatedLetters from '../../components/AnimatedLetters/index';

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
  ' ',
];

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    async function wait() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
    }
    wait();
  }, []);

  return (
    <>
      <div className="title">
        <h1>Welcome to my Portfolio!</h1>
      </div>
      <div className="name">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={nameArray}
          index={1}
        />

        <img className="logo" src={Logo} alt="wolfinger" />
      </div>
      <div className="jobs">
        {' '}
        <span className={`${letterClass} _17`}>F</span>ull{' '}
        <span className={`${letterClass} _18`}>S</span>tack{' '}
        <span className={`${letterClass} _19`}>D</span>eveloper |{' '}
        <span className={`${letterClass} _20`}>S</span>oftware{' '}
        <span className={`${letterClass} _21`}>E</span>ngineer
      </div>

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
        <a href="/contact">
          <FontAwesomeIcon icon={faSquareEnvelope} color="hsl(231 77% 90%" />
        </a>
      </div>
      <div id="resume">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://drive.google.com/file/d/1wjgih8Sy6TRL-soqw3IvIResjhW_MxYF/view?usp=sharing"
        >
          Curriculum Vitae
        </a>
      </div>
    </>
  );
};

export default Home;
