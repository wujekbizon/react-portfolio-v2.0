const ImageContainer = ({ imgSrc, url }) => {
  return (
    <div>
      <a target="_blank" rel="noreferrer" href={url}>
        <img className="image-container" src={imgSrc} alt="project preview" />
      </a>
    </div>
  );
};

export default ImageContainer;
