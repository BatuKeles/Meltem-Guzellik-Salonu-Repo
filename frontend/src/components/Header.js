import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const controlHeader = () => {
    if (window.scrollY > lastScrollY) setShowHeader(false);
    else setShowHeader(true);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', controlHeader);
    return () => window.removeEventListener('scroll', controlHeader);
  }, [lastScrollY]);

  return (
    <header className={`header ${showHeader ? '' : 'hide'}`}>
      <div className="logo">
        <Link smooth to="/#home" onClick={closeMenu}>
          Meltem Güzellik Salonu
        </Link>
      </div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><Link smooth to="/#home" onClick={closeMenu}>ANASAYFA</Link></li>
          <li><Link smooth to="/hizmetler" onClick={closeMenu}>HİZMETLER</Link></li>
          <li><Link smooth to="/#appointment" onClick={closeMenu}>RANDEVU</Link></li>
          <li><Link smooth to="/#about" onClick={closeMenu}>HAKKIMIZDA</Link></li>
          <li><Link smooth to="/#contact" onClick={closeMenu}>İLETİŞİM</Link></li>
        </ul>
      </nav>

      <div className="hamburger" onClick={toggleMenu}>☰</div>
    </header>
  );
};

export default Header;
