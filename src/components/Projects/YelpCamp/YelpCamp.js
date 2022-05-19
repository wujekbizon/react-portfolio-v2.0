import './YelpCamp.scss';
import ProjectContainer from '../../ProjectContainer/ProjectContainer';
import ImageContainer from '../../ImageContainer/ImageContainer';
import Link from '../../Link/Link';
import Yelp from '../../../assets/images/YelpCamp.png';

const type = 'FULL STACK DEVELOPER';
const text =
  "This is my biggest application I made so far. For the frontend part I've used Bootstrap Library , the backend was done by using a Express.js and MongoDB.";
const items = [
  'Do You know any campgrounds and want to share?',
  'Welcome to the Yelp Camp',
  'Create a campground, add photos, leave a review!',
];
const skills = [
  'Javascript',
  'HTML 5',
  'Bootstrap',
  'Express.js',
  'REST',
  'Mongo Db',
  'Mongoose',
  'Node.js',
  'EJS',
  'Joi',
  'Helmet',
  'Passport',
  'Cloudinary',
  'Mapbox',
  'Heroku',
  'Mongo Atlas',
];

const YelpCamp = () => {
  return (
    <>
      <ProjectContainer
        type={type}
        projectName={'Yelp Camp'}
        description={text}
        items={items}
        content={'View project'}
        url={'https://yelp-camp2022-gw.herokuapp.com/'}
        skills={skills}
      />
      <div className="movie-image">
        <ImageContainer
          imgSrc={Yelp}
          url={'https://yelp-camp2022-gw.herokuapp.com/'}
        />
      </div>
      <div className="movie-btn">
        <Link url={'https://github.com/wujekbizon/github-yelpcamp'} />
      </div>
    </>
  );
};

export default YelpCamp;
