import './Home.scss';
import Logo from '../../assets/images/logo_sub-v3.png';

const Home = () => {
  const nameArray = ['I', "'", 'm', ' ', 'G', 'r', 'e', 'g', ' '];
  return (
    <div>
      <div className="title">
        <h1>Welcome to my Portfolio!</h1>
      </div>
      <div className="name">
        {nameArray}
        <img className="logo" src={Logo} alt="wolfinger" />
      </div>
    </div>
  );
};

export default Home;
