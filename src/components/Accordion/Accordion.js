import './Accordion.scss';
import React, { useState } from 'react';

const aboutMe = [
  {
    title: 'Background',
    content:
      "I'm looking for a position as an entry-level web developer. I enjoy bridging the gap between engineering and design — combining my technical knowledge with my keen eye for designing, to create a beautiful , user friendly products that are scalable and efficient.",
  },
  {
    title: 'My goal',
    content:
      'My career goal as a software developer is to become an expert in a programming languages JavaScript and Typescript master them and other frameworks (React.js, Node.js, Express.js). I’m excited to work on new projects, because I learn something new every time.',
  },
  {
    title: 'Who Am I ?',
    content:
      'I love building stuff! If I need to define myself in one sentence that would be a family person, father of three lovely kids, good husband, a MtG Card game fanatic, JavaScript enthusiast, and someone who cares what it does!!',
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = aboutMe.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';

    return (
      <React.Fragment key={item.title}>
        <div
          id="dropdown-header"
          onClick={() => onTitleClick(index)}
          className={`title ${active}`}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  return (
    <div>
      <div id="about-content" className="ui styled accordion">
        {renderedItems}
      </div>
    </div>
  );
};

export default Accordion;
