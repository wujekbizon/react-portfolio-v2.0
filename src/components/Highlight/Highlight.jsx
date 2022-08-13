import './Highlight.scss';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';

const Highlight = () => {
  return (
    <div className="highlights-container">
      <div className="highlight-projects">
        <h1>Dive Deep Into My Virtual Reality.</h1>
        <p>
          Come and check the variety of all of my projects. E-commerce App,
          UI/UX Restaurant Design. React Apps and many more...
        </p>
        <Link to="/projects" className="btn-highlight">
          My Projects
          <BsArrowRight />
        </Link>
      </div>
      <div className="highlight-contacts">
        <h1>Want to hire me ? Yeahh!!!</h1>

        <p>
          You can find me via my contact page or check my{' '}
          <a
            href="https://www.linkedin.com/in/grzegorz-wolfinger-b88856229/"
            target="_blank"
            rel="noreferrer"
          >
            Linkedin.
          </a>{' '}
          I'm excited to start work on a new project. Are You ready?
        </p>
        <Link to="/contact" className="btn-highlight">
          Contact me
          <BsArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Highlight;
