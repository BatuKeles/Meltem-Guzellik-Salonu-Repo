// ✅ src/components/admin/CreateAppointment.js
import React, { useState } from 'react';
import networkLayer from "../../api/axios"; // Eğer bulunduğun dosya src/components/... içindeyse
import './AdminPanel.css';

const CreateAppointment = () => {
  const [formData, setFormData] = useState({
    date: '',
    startTime: '',
    endTime: '',
    service: '',
    clientName: '',
    clientPhone: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await networkLayer.post('https://localhost:5000/api/appointments', formData);
      setMessage('✅ Randevu başarıyla oluşturuldu');
      setFormData({
        date: '',
        startTime: '',
        endTime: '',
        service: '',
        clientName: '',
        clientPhone: '',
      });
    } catch (err) {
      console.error(err);
      setMessage('❌ Randevu oluşturulamadı');
    }
  };

  return (
    <div className="admin-box">
      <h2>Yeni Randevu Oluştur</h2>
      <form onSubmit={handleSubmit} className="form-grid">
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <label>Başlangıç Saati:</label>
        <input type="time" name="startTime" value={formData.startTime} onChange={handleChange} step="1800" required />
        <label>Bitiş Saati:</label>
        <input type="time" name="endTime" value={formData.endTime} onChange={handleChange} step="1800" required />
        <input type="text" name="service" placeholder="Hizmet" value={formData.service} onChange={handleChange} required />
        <input type="text" name="clientName" placeholder="Müşteri Adı" value={formData.clientName} onChange={handleChange} />
        <input type="text" name="clientPhone" placeholder="Telefon" value={formData.clientPhone} onChange={handleChange} />
        <button type="submit">Kaydet</button>
      </form>
      {message && <p className="info-message">{message}</p>}
    </div>
  );
};

export default CreateAppointment;
