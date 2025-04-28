// src/components/Gallery.js

import React from 'react';
import Slider from 'react-slick';
import './Gallery.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Gallery = () => {
  const images = [
    '/images/gallery1.jpg.jpg',
    '/images/gallery2.jpg.jpg',
    '/images/gallery3.jpg.jpg',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <section id="home" className="gallery-section">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="gallery-slide">
            <img src={src} alt={`galeri-${index}`} className="gallery-image" />
            <div className="gallery-overlay">
              <h1>Meltem Güzellik Salonu</h1>
              <p>Şıklığın ve zarafetin adresi</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Gallery;
