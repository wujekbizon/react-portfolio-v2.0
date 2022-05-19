import './MovieFight.scss';
import ProjectContainer from '../../ProjectContainer/ProjectContainer';
import ImageContainer from '../../ImageContainer/ImageContainer';
import Movie from '../../../assets/images/Movie.png';
import Link from '../../Link/Link';

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
      <ProjectContainer
        type={type}
        projectName={'Movie Fight'}
        description={text}
        items={items}
        content={'View project'}
        url={'https://js-apps-movie-fight.vercel.app/'}
        skills={skills}
      />
      <div className="movie-image">
        <ImageContainer
          imgSrc={Movie}
          url={'https://js-apps-movie-fight.vercel.app/'}
        />
      </div>
      <div className="movie-btn">
        <Link url={'https://github.com/wujekbizon/js-apps-movieFight'} />
      </div>
    </>
  );
};

export default MovieFight;
