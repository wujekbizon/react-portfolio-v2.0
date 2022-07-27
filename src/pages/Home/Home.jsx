import './Home.scss';
import { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Logo from '../../assets/images/logo_sub-v3.png';
import Dev from '../../assets/images/developer.svg';
import AnimatedLetters from '../../components/AnimatedLetters/index';

const nameArray = ['I', "'", 'M', ' ', 'G', 'R', 'E', 'G', 'O', 'R', 'Y'];

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
      <div className="home">
        {/* <div className="title">
          <h1>Welcome to my Portfolio!</h1>
        </div> */}
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
            <span className={`${letterClass} _17`}>F </span>ull
            <span className={`${letterClass} _18`}>S </span>tack
            <span className={`${letterClass} _19`}>D </span>eveloper |
            <span className={`${letterClass} _20`}>S </span>oftware
            <span className={`${letterClass} _21`}>E </span>ngineer
          </div>
        </div>
        <div className="right">
          <div className="logo-container">
            <img src={Dev} alt="Developer" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
