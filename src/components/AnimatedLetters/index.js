import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, index }) => {
  const renderLetters = strArray.map((char, idx) => {
    return (
      <span key={char + idx} className={`${letterClass} _${idx + index}`}>
        {char}
      </span>
    );
  });

  return <span>{renderLetters}</span>;
};

export default AnimatedLetters;
