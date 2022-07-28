import './Error.scss';
import img from '../../assets/images/error.svg';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error">
      <div className="error-container">
        <img src={img} alt="not found" />
        <h3>Ohh! Page Not Found</h3>
        <p>We can't seem to find the page youe're looking for</p>
        <Link to="/">BACK HOME</Link>
      </div>
    </div>
  );
};

export default Error;
