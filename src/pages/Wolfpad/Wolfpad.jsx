import Navbar from '../../components/Navbar/Navbar';
import './Wolfpad.scss';

const Wolfpad = () => {
  return (
    <main>
      <Navbar />
      <div>
        <iframe
          src="http://localhost:4005/"
          frameborder="0"
          width="80%"
          height="500"
        ></iframe>
      </div>
    </main>
  );
};

export default Wolfpad;
