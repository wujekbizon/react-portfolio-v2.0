import './SmallApps.scss';
import Grocery from '../../components/Grocery/Grocery';

const SmallApps = () => {
  return (
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
  );
};

export default SmallApps;
