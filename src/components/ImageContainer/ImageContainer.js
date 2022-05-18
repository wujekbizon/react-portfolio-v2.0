import './ImageContainer.scss';

const ImageContainer = ({ imgSrc, url }) => {
  return (
    <div className="ui container">
      <div className="image">
        <a href={url}>
          <img id="image" src={imgSrc} alt="project preview" />
        </a>
      </div>
    </div>
  );
};

export default ImageContainer;
