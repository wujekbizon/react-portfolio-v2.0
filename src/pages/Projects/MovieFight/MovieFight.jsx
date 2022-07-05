import './MovieFight.scss';
import ProjectContainer from '../../../components/ProjectContainer/ProjectContainer';
import ImageContainer from '../../../components/ImageContainer/ImageContainer';
import Link from '../../../components/Link/Link';
import Movie from '../../../assets/images/Movie.png';

const type = 'Personal Project';
const text =
  "It's a Search application that's using a free movie API and makes the comparison of two chosen movies - let's the fight begin...";
const items = [
  'Search your favorites movies',
  'Compare with your friend pick',
  'Fully responsive application',
  'Reusable',
];
const skills = ['Javascript', 'CSS 3', 'HTML 5', 'Bulma', 'Vercel', 'API'];

const MovieFight = () => {
  return (
    <>
      <div className="ui stackable grid container">
        <div className="eight wide computer column">
          <ProjectContainer
            type={type}
            projectName={'Movie Fight'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://js-apps-movie-fight.vercel.app/'}
            skills={skills}
          />
        </div>
        <div className="seven wide computer column">
          <div className="movieImage-container">
            <ImageContainer
              imgSrc={Movie}
              url={'https://js-apps-movie-fight.vercel.app/'}
            />
          </div>
          <div className="movie-link">
            <Link url={'https://github.com/wujekbizon/js-apps-movieFight'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieFight;
