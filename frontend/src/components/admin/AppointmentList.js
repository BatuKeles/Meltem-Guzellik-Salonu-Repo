// ✅ src/admin/AppointmentList.js

import React, { useEffect, useState } from 'react';
// Örnek (AppointmentList.js, Login.js vb.)
import networkLayer from "../../api/axios"; // Eğer bulunduğun dosya src/components/... içindeyse

const AppointmentList = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    try {
      const response = await networkLayer.get('http://localhost:5000/api/appointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Randevular alınamadı:', error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  return (
    <div className="panel-section">
      <h2>📅 Randevular</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>Tarih</th>
            <th>Saat</th>
            <th>Hizmet</th>
            <th>İsim</th>
            <th>Telefon</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((item, index) => (
            <tr key={index}>
              <td>{item.date}</td>
      <td>{item.startTime} - {item.endTime}</td>
      <td>{item.service}</td>
      <td>{item.clientName || '-'}</td>
      <td>{item.clientPhone || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentList;
