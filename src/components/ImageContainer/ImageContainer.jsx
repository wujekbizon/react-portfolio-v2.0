const ImageContainer = ({ imgSrc, url }) => {
  return (
    <>
      <a target="_blank" rel="noreferrer" href={url}>
        <img className="image-container" src={imgSrc} alt="project preview" />
      </a>
    </>
  );
};

export default ImageContainer;
