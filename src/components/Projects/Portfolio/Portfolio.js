import './Portfolio.scss';
// components
import ProjectContainer from '../../ProjectContainer/ProjectContainer';
import ImageContainer from '../../ImageContainer/ImageContainer';
import Link from '../../Link/Link';

const Portfolio = () => {
  return (
    <>
      <ProjectContainer
        type={type}
        projectName={'Yelp Camp'}
        description={text}
        items={items}
        content={'View project'}
        url={'https://grzegorz-wolfinger.vercel.app/'}
        skills={skills}
      />
      <div className="movie-image">
        <ImageContainer
          imgSrc={Yelp}
          url={'https://grzegorz-wolfinger.vercel.app/'}
        />
      </div>
      <div className="movie-btn">
        <Link url={'https://github.com/wujekbizon/react-portfolio'} />
      </div>
    </>
  );
};
export default Portfolio;
