import './ImageContainer.scss';

const ImageContainer = ({ imgSrc, url }) => {
  return (
    <div>
      <a target="_blank" rel="noreferrer" href={url}>
        <img id="image" src={imgSrc} alt="project preview" />
      </a>
    </div>
  );
};

export default ImageContainer;
