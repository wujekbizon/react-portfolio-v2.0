import './Contact.scss';
import { useRef } from 'react';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import Interview from '../../assets/images/interview.svg';

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        'service_5vl83fl',
        'template_n1gdd0o',
        form.current,
        '_9vPuVNIwteDnNRF2'
      )
      .then(
        () => {
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        () => {
          alert('Failed to send the message, please try again');
        }
      );
  };
  return (
    <>
      <div className="contact">
        <div className="left">
          <div className="contact-content">
            <div className="title">
              <h1>Contact me</h1>
            </div>
            <div className="text">
              <img className="contact-img" src={Interview} alt="Contact Me" />
              <p>
                I am interested in any intern or job offers as a web developer.
                <br />
                Please contact me using below form.
              </p>
            </div>
          </div>
          <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <textarea
                placeholder="Message"
                name="message"
                required
              ></textarea>
              <button type="submit" className="form-btn">
                SEND
              </button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="info-map">
            Grzegorz Wolfinger
            <br />
            Zamieście 99 , 34-650 Tymbark <br />
            Poland
            <span>grzegorz.wolfinger@gmail.com</span>
          </div>
          <div className="map-wrap">
            <MapContainer center={[49.7087783, 20.4086625]} zoom={9}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[49.7087783, 20.3086625]}>
                <Popup>
                  Greg lives here, want some coffee? Come and visit him :)
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
