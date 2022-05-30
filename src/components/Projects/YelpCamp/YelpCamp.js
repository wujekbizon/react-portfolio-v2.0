import './YelpCamp.scss';
import ProjectContainer from '../../ProjectContainer/ProjectContainer';
import ImageContainer from '../../ImageContainer/ImageContainer';
import Link from '../../Link/Link';
import Yelp from '../../../assets/images/YelpCamp.png';

const type = 'FULL STACK DEVELOPER';
const text = 'This is my biggest application I made so far.';
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
  'Passport',
  'Cloudinary',
  'Mapbox',
  'Heroku',
];

const YelpCamp = () => {
  return (
    <>
      <div className="ui stackable grid container">
        <div className="eight wide computer column">
          <ProjectContainer
            type={type}
            projectName={'Yelp Camp'}
            description={text}
            items={items}
            content={'View project'}
            url={'https://yelp-camp2022-gw.herokuapp.com/'}
            skills={skills}
          />
        </div>
        <div className="seven wide computer column">
          <div className="yelpImage-container">
            <ImageContainer
              imgSrc={Yelp}
              url={'https://yelp-camp2022-gw.herokuapp.com/'}
            />
          </div>
          <div className="yelp-link">
            <Link url={'https://github.com/wujekbizon/github-yelpcamp'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default YelpCamp;
