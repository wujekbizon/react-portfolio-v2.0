import React, { useState } from 'react';
import './ProjectContainer.scss';
// components
import Button from '../Button/Button';
import Badge from '../Badge/Badge';

const ProjectContainer = ({
  projectName,
  description,
  items,
  type,
  content,
  url,
  skills,
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
    <div className="project-container">
      <h3>{type.toUpperCase()}</h3>
      <h1>{projectName}</h1>
      <ul>
        <Badge skills={skills} />
      </ul>
      <p>{description}</p>
      <ul className="items">{renderedItems}</ul>
      <Button content={content} url={url} />
    </div>
  );
};
export default ProjectContainer;
