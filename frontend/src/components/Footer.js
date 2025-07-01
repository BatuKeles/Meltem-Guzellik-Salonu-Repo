// ✅ src/components/Footer.js

import React from 'react';
import './Footer.css';
import { FaInstagram, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  // Admin giriş ikonunu gizli bir şekilde erişilebilir yapıyoruz
  const handleSecretAdmin = (e) => {
    // Örneğin: 5 kez üst üste tıklanırsa login sayfasına yönlendir
    let count = parseInt(localStorage.getItem('adminSecretClick') || '0', 10);
    count++;
    if (count >= 5) {
      localStorage.removeItem('adminSecretClick');
      window.location.href = '/login';
    } else {
      localStorage.setItem('adminSecretClick', count);
      setTimeout(() => localStorage.setItem('adminSecretClick', 0), 2000); // 2 sn içinde 5 tıklama
    }
  };

  return (
    <footer className="footer-section">
      {/* Gizli admin giriş alanı, görünmez ama tıklanabilir */}
      <div className="footer-admin-secret" onClick={handleSecretAdmin} tabIndex={0} />
      <div className="footer-icons">
        <a
          href="https://www.instagram.com/meltem_guzellik_salonu?igsh=bmd6b3B4ZWtoeGN2"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={24} />
        </a>
        <a href="tel:+905385686231" className="phone-icon">
          <FiPhone size={24} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
