import './Button.scss';

const Button = ({ content, url }) => {
  return (
    <div className="box">
      <a target="_blank" rel="noreferrer" href={url} className="btn">
        {content}
      </a>
    </div>
  );
};
export default Button;
