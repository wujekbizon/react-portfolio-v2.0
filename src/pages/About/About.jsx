import './About.scss';
import Accordion from '../../components/Accordion/Accordion';
import { fonstAwesomeIcons, reactIcons } from '../../utils/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const About = () => {
  return (
    <div className="about gradient__bg">
      <div className="left">
        <div className="title">
          <h2>About Me</h2>
        </div>
        <Accordion />
      </div>
      <div className="right">
        <div className="title">
          <h2>Skills</h2>
        </div>
        <div className="skills">
          <div className="flex">
            {fonstAwesomeIcons.map((skill) => {
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
    </div>
  );
};

export default About;
