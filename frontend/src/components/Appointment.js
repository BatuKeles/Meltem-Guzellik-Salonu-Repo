import React, { useState } from 'react';
import CalendarWidget from './CalendarWidget';

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div>
     
      <CalendarWidget onDateChange={setSelectedDate} />
      {/* {selectedDate && (
        <p>Seçilen Tarih: {selectedDate.toLocaleDateString('tr-TR')}</p>
      )} */}
    </div>
  );
};

export default Appointment;
