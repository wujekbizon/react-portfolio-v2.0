import './Link.scss';

const Link = ({ url }) => {
  return (
    <div className="box-btn">
      <a className="link-btn" target="_blank" rel="noreferrer" href={url}>
        Check me on GitHub
      </a>
    </div>
  );
};

export default Link;
