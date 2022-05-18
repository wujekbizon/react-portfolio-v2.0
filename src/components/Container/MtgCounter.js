import './MtgCounter.scss';
import Mtg from '../../assets/images/Mtg.png';
import Button from '../Button/Button';
import ImageContainer from '../ImageContainer/ImageContainer';

const MtgCounter = () => {
  return (
    <>
      <div className="ui container ">
        <div className="project ">
          <h3>FRONT END DEVELOPER</h3>
          <h1>MTG LIFE COUNTER</h1>

          <Button
            content={'View project'}
            url={'https://js-lifecounter.vercel.app/'}
          />
          <p>My first project fully made in JavaScript with Bulma Library.</p>
          <h4>MTG Life Counter Features</h4>
          <ul>
            <li>Clean and simple design</li>
            <li>Customize player names</li>
            <li>Custom Starting Life</li>
          </ul>
        </div>
      </div>
      <ImageContainer imgSrc={Mtg} url={'https://js-lifecounter.vercel.app/'} />
    </>
  );
};

export default MtgCounter;
