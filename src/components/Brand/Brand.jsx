import './Brand.scss';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import logo from '../../assets/images/logo_sub-v3.png';

const Brand = () => {
  return (
    <div className="brand section__padding">
      <div>
        <img src={logo} alt="wolfinger" className="img-logo" />
      </div>
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
    </div>
  );
};

export default Brand;
