import './Button.scss';

const Button = ({ content, url }) => {
  return (
    <div>
      <div className="box">
        <a target="_blank" rel="noreferrer" href={url} className="btn">
          {content}
        </a>
      </div>
    </div>
  );
};
export default Button;
