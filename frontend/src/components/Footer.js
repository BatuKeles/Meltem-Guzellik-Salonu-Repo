// ✅ src/components/Footer.js

import React from 'react';
import './Footer.css';
import { FaInstagram, FaUserShield } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FiPhone } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-left">
        <Link to="/login">
          <FaUserShield size={20} />
        </Link>
        <a
          href="https://www.instagram.com/meltem_guzellik_salonu?igsh=bmd6b3B4ZWtoeGN2"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram size={20} />
        </a>
      </div>
      <div className="footer-right">
        <a href="tel:+905385686231" className="phone-icon">
          <FiPhone size={20} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
