import './Contact.scss';
import React, { useRef } from 'react';
import { MapContainer, Popup, TileLayer, Marker } from 'react-leaflet';
import emailjs from '@emailjs/browser';

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
      <div className="container-contact contact-page">
        <div className="text-zone">
          <h1>Contact me</h1>
          <p>
            I am interested in any intern or job offers as an web developer.
            Please contact with me using below form.
          </p>
          <p>&nbsp;</p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul id="form">
                <li className="half">
                  <input type="text" name="name" placeholder="Name" required />
                </li>
                <li className="half">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
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
    </>
  );
};

export default Contact;
