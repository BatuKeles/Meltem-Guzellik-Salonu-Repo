// ✅ src/components/admin/ServiceList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ServiceList = () => {
  const [services, setServices] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', category: '', price: '' });
  const [searchTerm, setSearchTerm] = useState('');

  const fetchServices = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/services');
      setServices(res.data);
    } catch (err) {
      console.error('Hizmetler alınamadı:', err);
    }
  };

  const groupedServices = services
    .filter(service =>
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .reduce((acc, service) => {
      acc[service.category] = acc[service.category] || [];
      acc[service.category].push(service);
      return acc;
    }, {});

  const handleDelete = async (id) => {
    const confirm = window.confirm('Bu hizmeti silmek istediğinize emin misiniz?');
    if (!confirm) return;
    try {
      await axios.delete(`http://localhost:5000/api/services/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setServices((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      console.error('Silme hatası:', err);
    }
  };

  const startEdit = (service) => {
    setEditingId(service._id);
    setEditForm({ title: service.title, category: service.category, price: service.price });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:5000/api/services/${editingId}`, editForm, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setEditingId(null);
      fetchServices();
    } catch (err) {
      console.error('Güncelleme hatası:', err);
    }
  };

  const handleChange = (e) => {
    setEditForm({ ...editForm, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="admin-box">
      <h2>📋 Hizmetler</h2>

      <input
        type="text"
        placeholder="Hizmet Ara..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: '1rem', padding: '0.5rem', width: '100%' }}
      />

      {Object.entries(groupedServices).map(([category, items]) => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h3 style={{ textDecoration: 'underline' }}>{category}</h3>
          <ul>
            {items.map((item) => (
              <li key={item._id}>
                {editingId === item._id ? (
                  <>
                    <input name="title" value={editForm.title} onChange={handleChange} placeholder="Başlık" />
                    <input name="category" value={editForm.category} onChange={handleChange} placeholder="Kategori" />
                    <input name="price" value={editForm.price} onChange={handleChange} placeholder="Fiyat" />
                    <button onClick={handleUpdate}>Kaydet</button>
                    <button onClick={() => setEditingId(null)}>İptal</button>
                  </>
                ) : (
                  <>
                    <strong>{item.title}</strong> - {item.price} ₺
                    <button onClick={() => startEdit(item)} style={{ marginLeft: '1rem' }}>
                      Düzenle
                    </button>
                    <button onClick={() => handleDelete(item._id)} style={{ color: 'red' }}>
                      Sil
                    </button>
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
