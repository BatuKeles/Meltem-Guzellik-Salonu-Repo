// src/pages/Home.js

import React from 'react';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';

const Home = () => {
  const services = [
    { title: 'Şekillendirme', desc: 'Profesyonel saç şekillendirme.' },
    { title: 'Kesim', desc: 'Kişiye özel saç kesimi.' },
    { title: 'Saç Bakımı', desc: 'Bakımlı ve sağlıklı saçlar.' },
    { title: 'Kişisel Bakım', desc: 'Cilt, el, ayak bakımı.' },
    { title: 'Epilasyon', desc: 'Kalıcı epilasyon hizmeti.' },
    { title: 'Kalıcı Makyaj', desc: 'Uzun süre kalıcı makyaj.' },
  ];

  return (
    <div>

      <section id="home">
        <Gallery />
      </section>

      <section id="appointment">
        <Appointment />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
};

export default Home;
