import './SmallApps.scss';
import Grocery from '../../components/Grocery/Grocery';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const SmallApps = () => {
  return (
    <div className="gradient__bg">
      <Navbar />
      <div className="apps">
        <div className="top">
          <h3 className="title">REACT SMALL APPS</h3>
        </div>

        <section className="bottom">
          <div className="container">
            <Grocery />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default SmallApps;
