import './ImageContainer.scss';

const ImageContainer = ({ imgSrc, url }) => {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={url}>
        <img className="image" src={imgSrc} alt="project preview" />
      </a>
    </>
  );
};

export default ImageContainer;
