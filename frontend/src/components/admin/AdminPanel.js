// ✅ src/components/admin/AdminPanel.js

import React from 'react';
import ServiceList from './serviceList';
import CreateService from './CreateService';
import AppointmentList from './AppointmentList';
import CreateAppointment from './CreateAppointment';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel">
      <h1>👩‍💻 Admin Paneli</h1>

      <div className="admin-section">
        <h2>Yeni Hizmet Ekle</h2>
        <CreateService />
      </div>

      <div className="admin-section">
        <h2>Mevcut Hizmetler</h2>
        <ServiceList />
      </div>

      <div className="admin-section">
        <h2>Yeni Randevu Ekle</h2>
        <CreateAppointment />
      </div>

      <div className="admin-section">
        <h2>Randevu Listesi</h2>
        <AppointmentList />
      </div>
    </div>
  );
};

export default AdminPanel;
