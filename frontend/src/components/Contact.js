// src/components/Contact.js

import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Lokasyon</h2>
      <p>Deniz cad semtsehir sok Erbay pasaji no 39 
      Meltem güzellik salonu Altkaynarca pendik istanbul</p>
     
      <div className="map-container">
        <iframe
          title="Salon Konumu"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.803014317803!2d29.25700707606982!3d40.87619697136929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadc9ec03f97dd%3A0x1bd3ca27250d389e!2sMeltem%20kuafor%20ve%20g%C3%BCzellik%20salonu!5e0!3m2!1str!2str!4v1743935306965!5m2!1str!2str"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
