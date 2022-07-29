import { useState } from 'react';
import './ProjectContainer.scss';
// components
import Button from '../Button/Button';
import Badge from '../Badge/Badge';
import ImageContainer from '../ImageContainer/ImageContainer';

const ProjectContainer = ({
  projectName,
  description,
  items,
  type,
  content,
  url,
  skills,
  linkUrl,
  linkContent,
  imgSrc,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div
        key={index}
        onClick={() => onItemClick(index)}
        className={`${active}`}
      >
        <li>{item}</li>{' '}
      </div>
    );
  });

  return (
    <div className="projects-container">
      <div className="projects-content">
        <h3>{type}</h3>
        <h1>{projectName}</h1>
        <ul>
          <Badge skills={skills} />
        </ul>
        <p>{description}</p>
        <div className="items-container">
          <ul className="items">{renderedItems}</ul>
        </div>
      </div>
      <div className="right">
        <div className="img-contanier">
          <ImageContainer url={url} imgSrc={imgSrc} />
        </div>
        <div className="btn-container">
          <Button content={content} url={url} />
          <Button content={linkContent} url={linkUrl} />
        </div>
      </div>
    </div>
  );
};
export default ProjectContainer;
