import './Button.scss';

const Button = ({ content, url }) => {
  return (
    <div>
      <div className="box">
        <a href={url} className="btn">
          {content}
        </a>
      </div>
    </div>
  );
};
export default Button;
