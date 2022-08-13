import './About.scss';
import { fontsAwesomeIcons, reactIcons } from '../../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import AI from '../../assets/images/ai.png';
import Highlight from '../../components/Highlight/Highlight';
import Brand from '../../components/Brand/Brand';

const About = () => {
  return (
    <div className="gradient__bg">
      <Navbar />

      <main className="about">
        <section className="about-top">
          <div className="about-content">
            <h1 className="gradient__text">
              Let&apos;s build something amazing... together!
            </h1>

            <p>Modern , Fully Responsive Websites - Mobile applications</p>
          </div>
          <div className="about-image">
            <div className="design">
              <h1>UI/UX Design</h1>
            </div>
            <div className="jarvis">
              <h1>
                Hello, I am
                <span className="gradient__text"> J.A.R.V.I.S..</span>
              </h1>
            </div>
            <img src={AI} alt="UI/UX face" />
          </div>
        </section>
        <section className="dark-theme">
          <Highlight />
          <div className="copyright">
            <p>Wolfinger Trademark 2022 ⓒ All Rights Reserved</p>
          </div>
          <div className="about-me">
            <p>
              I'm looking for a position as an entry-level web developer. I
              enjoy bridging the gap between engineering and design — combining
              my technical knowledge with my keen eye for designing, to create
              beautiful , user friendly products that are scalable and
              efficient.
            </p>
          </div>
        </section>
        <Brand />
        <section className="about-bottom">
          <div className="tech-stack">
            <h1 className="gradient__text">Tech Stack</h1>
          </div>

          <div className="right">
            <div className="skills">
              <div className="flex">
                {fontsAwesomeIcons.map((skill) => {
                  const { id, className, icon, color } = skill;
                  return (
                    <div className="item" key={id}>
                      <p className={className}>
                        <FontAwesomeIcon icon={icon} color={color} />
                      </p>
                    </div>
                  );
                })}
                {reactIcons.map((item) => {
                  const { id, className, icon } = item;
                  return (
                    <div className="item" key={id}>
                      <p className={className}>{icon}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
