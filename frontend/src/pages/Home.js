// src/pages/Home.js

import React from 'react';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Appointment from '../components/Appointment';
import Contact from '../components/Contact';
import { Link } from 'react-router-dom';
import { FaInstagram } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import './HomeIcons.css';

const Home = () => {
  const services = [
    { title: 'Şekillendirme', desc: 'Profesyonel saç şekillendirme.' },
    { title: 'Kesim', desc: 'Kişiye özel saç kesimi.' },
    { title: 'Saç Bakımı', desc: 'Bakımlı ve sağlıklı saçlar.' },
    { title: 'Kişisel Bakım', desc: 'Cilt, el, ayak bakımı.' },
    { title: 'Epilasyon', desc: 'Kalıcı epilasyon hizmeti.' },
    { title: 'Kalıcı Makyaj', desc: 'Uzun süre kalıcı makyaj.' },
  ];

  // Gizli admin giriş fonksiyonu
  const handleSecretAdmin = () => {
    let count = parseInt(localStorage.getItem('adminSecretClick') || '0', 10);
    count++;
    if (count >= 5) {
      localStorage.removeItem('adminSecretClick');
      window.location.href = '/login';
    } else {
      localStorage.setItem('adminSecretClick', count);
      setTimeout(() => localStorage.setItem('adminSecretClick', 0), 2000);
    }
  };

  return (
    <div style={{ minHeight: '100vh', position: 'relative', paddingBottom: '56px' }}>
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
      {/* Sol alt köşede gizli admin giriş alanı */}
      <div
        onClick={handleSecretAdmin}
        tabIndex={0}
        style={{ position: 'fixed', left: 0, bottom: 0, width: 60, height: 60, opacity: 0, cursor: 'pointer', zIndex: 9999 }}
      />
      <div className="home-bottom-icons" style={{ position: 'absolute', left: 0, bottom: 0 }}>
        <a
          href="https://www.instagram.com/meltem_guzellik_salonu?igsh=bmd6b3B4ZWtoeGN2"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>
        <a href="tel:+905385686231">
          <FiPhone />
        </a>
      </div>
    </div>
  );
};

export default Home;
