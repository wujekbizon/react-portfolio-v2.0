import './Logo.scss';
import logo from '../../assets/images/logo_sub-v3.png';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link to="/">
        <img src={logo} alt="wolfinger" />
      </Link>
    </div>
  );
};

export default Logo;
