import './Contact.scss';
import { useRef, useEffect, useState } from 'react';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import emailjs from '@emailjs/browser';
import Interview from '../../assets/images/interview.svg';
import { toast } from 'react-toastify';
import { init } from 'ityped';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const text = [
  'I am interested in any job offers as a web developer.',
  'Please contact me using below form.',
];

const Contact = () => {
  const [debouncedText, setDebouncedText] = useState(text);
  const form = useRef();
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      cursorChar: '_',
      showCursor: true,
      strings: debouncedText,
      backDelay: 1800,
      backSpeed: 50,
    });
  }, [debouncedText]);

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
          toast.success('Message successfully sent!');
        },
        () => {
          toast.error('Failed to send the message, please try again');
        }
      );
  };
  return (
    <div>
      <Navbar />
      <div className="contact">
        <div className="left">
          <div className="contact-content">
            <div className="title">
              <h1>Contact me</h1>
            </div>
            <div className="text">
              <img className="contact-img" src={Interview} alt="Contact Me" />
              <p className="gradient__text">
                <span ref={textRef}></span>
              </p>
            </div>
          </div>
          <div className="form-container">
            <form ref={form} onSubmit={sendEmail}>
              <input
                className="gradient__bg"
                type="text"
                name="name"
                placeholder="Name"
                required
              />
              <input
                className="gradient__bg"
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <input
                className="gradient__bg"
                placeholder="Subject"
                type="text"
                name="subject"
                required
              />
              <textarea
                className="gradient__bg"
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
            Zamieście 99 , 34-650 Tymbark Poland
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
      <Footer />
    </div>
  );
};

export default Contact;
