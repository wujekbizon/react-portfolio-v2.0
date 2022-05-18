import React, { useState } from 'react';
import './ProjectContainer.scss';
import Button from '../Button/Button';

const ProjectContainer = ({
  projectName,
  description,
  items,
  type,
  content,
  url,
}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onLiClick = (index) => {
    setActiveIndex(index);
  };
  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <div key={index} onClick={() => onLiClick(index)} className={`${active}`}>
        <li>{item}</li>{' '}
      </div>
    );
  });

  return (
    <div className="ui container">
      <div className="project">
        <h3>{type.toUpperCase()}</h3>
        <h1>{projectName}</h1>
        <ul>{renderedItems}</ul>

        <p>{description}</p>
        <Button content={content} url={url} />
      </div>
    </div>
  );
};
export default ProjectContainer;
