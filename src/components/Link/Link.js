import './Link.scss';

const Link = ({ url }) => {
  return (
    <div>
      <div className="box-btn">
        <a className="link-btn" target="_blank" rel="noreferrer" href={url}>
          Check me on GitHub
        </a>
      </div>
    </div>
  );
};

export default Link;
