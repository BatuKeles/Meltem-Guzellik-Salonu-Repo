
// ✅ src/pages/Services.js
import React, { useEffect, useState } from 'react';
import networkLayer from "../api/axios"; // Eğer bulunduğun dosya src/components/... içindeyse
import './Services.css';

const categoryImages = {
  'Saç İşlemleri': process.env.PUBLIC_URL + '/default/SacIslemleri.png',
  'Kaş ve yüz': process.env.PUBLIC_URL + '/default/KasVeYuz.png',
  'El ve tırnak': process.env.PUBLIC_URL + '/default/ElVeTirnak.png',
  'Makyaj': process.env.PUBLIC_URL + '/default/Makyaj.png',
  'Ağda': process.env.PUBLIC_URL + '/default/Agda.png',
  'Kirpik': process.env.PUBLIC_URL + '/default/Kirpik.png',
  'Lazer': process.env.PUBLIC_URL + '/default/Lazer.png',
  'Boya': process.env.PUBLIC_URL + '/default/Boya.png'
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await networkLayer.get('http://localhost:5000/api/services');
        setServices(res.data);
      } catch (err) {
        console.error('Hizmetler alınamadı:', err);
      }
    };
    fetchServices();
  }, []);

  const grouped = services.reduce((acc, item) => {
    acc[item.category] = [...(acc[item.category] || []), item];
    return acc;
  }, {});

  return (
    <div className="services-wrapper">
      {Object.entries(grouped).map(([category, items]) => {
        const imageUrl = categoryImages[category];

        return (
          <div key={category} className="service-card no-padding">
            <div
              className="card-image"
              style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'none' }}
            >
              <div className="card-overlay">
                <h3>{category}</h3>
                <ul>
                  {items.map(service => (
                    <li key={service._id}>
                      <span>{service.title}</span>
                      <span>{service.price}₺</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
