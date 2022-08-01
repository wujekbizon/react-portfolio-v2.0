import './Badge.scss';
import React, { useState } from 'react';

const Badge = ({ skills }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onItemClick = (index) => {
    setActiveIndex(index);
  };

  const renderedSkills = skills.map((skill, index) => {
    const onSkill = index === activeIndex ? 'onSkill' : '';

    return (
      <div
        key={index}
        onClick={() => onItemClick(index)}
        className="badge gradient__bg"
      >
        <li className={`${onSkill}`}>{skill}</li>
      </div>
    );
  });

  return <div className="components">{renderedSkills}</div>;
};

export default Badge;
