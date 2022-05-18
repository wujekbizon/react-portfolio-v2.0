import './ImageContainer.scss';

const ImageContainer = ({ imgSrc, url }) => {
  return (
    <div className="ui container">
      <a href={url}>
        <img id="image" src={imgSrc} alt="project preview" />
      </a>
    </div>
  );
};

export default ImageContainer;
