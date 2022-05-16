import './Home.scss';
import Logo from '../../assets/images/logo_sub-v3.png';
import Sidebar from '../Sidebar/Sidebar';

const Home = () => {
  const nameArray = ['I', "'", 'm', ',', ' ', 'G', 'r', 'e', 'g', ' '];
  return (
    <>
      <div>
        <div className="title">
          <h1>Welcome to my Portfolio!</h1>
        </div>
        <div className="name">
          {nameArray}
          <img className="logo" src={Logo} alt="wolfinger" />
        </div>
        <div className="jobs">Full Stack Developer | Software Engineer</div>
        <Sidebar />
      </div>
    </>
  );
};

export default Home;
