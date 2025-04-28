// ✅ src/components/CalendarWidget.js

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalendarWidget.css';
import AppointmentSlots from './AppointmentSlots';

const CalendarWidget = ({ onDateChange }) => {
  const [date, setDate] = useState(new Date());

  const handleChange = (newDate) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <div className="calendar-appointment-wrapper">
      <div className="calendar-container">
        <h3 className="calendar-title">Online Randevu</h3>
        <Calendar onChange={handleChange} value={date} locale="tr-TR" />
      </div>
      <div className="slots-container-scrollable">
        <AppointmentSlots date={date} />
      </div>
    </div>
  );
};

export default CalendarWidget;