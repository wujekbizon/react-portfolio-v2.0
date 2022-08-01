import './Home.scss';
import { useState, useEffect, useRef } from 'react';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Logo from '../../assets/images/logo_sub-v3.png';
import Dev from '../../assets/images/developer.svg';
import AnimatedLetters from '../../components/AnimatedLetters/index';
import { init } from 'ityped';

const nameArray = ['G', 'R', 'Z', 'E', 'G', 'O', 'R', 'Z'];
const text = [
  'FULL STACK DEVELOPER | SOFTWARE ENGINEER',
  'REACT.JS/REDUX | EXPRESS.JS | MONGO DB',
];

const Home = () => {
  const textRef = useRef();
  const [letterClass, setLetterClass] = useState('text-animate');
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    init(textRef.current, {
      cursorChar: '_',
      showCursor: true,
      strings: debouncedText,
      backDelay: 1800,
      backSpeed: 50,
    });
  }, [debouncedText]);

  useEffect(() => {
    async function wait() {
      return setTimeout(() => {
        setLetterClass('text-animate-hover');
      }, 4000);
    }
    wait();
  }, []);

  return (
    <div className="gradient__bg">
      <Navbar />
      <div className="home">
        <div className="left">
          <div className="name">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              index={1}
            />
          </div>
          <div className="img-container">
            <img className="logo" src={Logo} alt="wolfinger" />
          </div>
          <div className="jobs">
            <span className="ityped gradient__text" ref={textRef}></span>
          </div>
        </div>
        <div className="right">
          <div className="logo-container">
            <img src={Dev} alt="Developer" />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
