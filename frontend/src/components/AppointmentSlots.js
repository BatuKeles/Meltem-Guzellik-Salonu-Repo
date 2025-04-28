// ✅ src/components/AppointmentSlots.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';

const AppointmentSlots = ({ date }) => {
  const [bookedSlots, setBookedSlots] = useState([]);
  const [loading, setLoading] = useState(true);

  const generateSlots = () => {
    const slots = [];
    let hour = 10;
    let minute = 0;
    while (hour < 21) {
      const start = `${String(hour).padStart(2, '0')}:${minute === 0 ? '00' : '30'}`;
      minute += 30;
      if (minute === 60) {
        hour++;
        minute = 0;
      }
      const end = `${String(hour).padStart(2, '0')}:${minute === 0 ? '00' : '30'}`;
      slots.push({ start, end });
    }
    return slots;
  };

  const allSlots = generateSlots();

  useEffect(() => {
    const fetchAppointments = async () => {
      if (!date) return;
      setLoading(true);
      try {
        const formattedDate = format(date, 'yyyy-MM-dd');
        const res = await axios.get(`http://localhost:5000/api/appointments?date=${formattedDate}`);

        const taken = [];
        res.data.forEach(({ startTime, endTime }) => {
          let [hour, minute] = startTime.split(':').map(Number);
          const [endHour, endMinute] = endTime.split(':').map(Number);

          while (hour < endHour || (hour === endHour && minute < endMinute)) {
            const next = new Date(0, 0, 0, hour, minute + 30);
            const nextHour = next.getHours();
            const nextMinute = next.getMinutes();
            const currentStr = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
            const nextStr = `${String(nextHour).padStart(2, '0')}:${String(nextMinute).padStart(2, '0')}`;
            taken.push(`${currentStr} - ${nextStr}`);
            hour = nextHour;
            minute = nextMinute;
          }
        });

        setBookedSlots(taken);
      } catch (err) {
        console.error('Saatler alınamadı:', err);
        setBookedSlots([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [date]);

  if (!date) return null;

  return (
    <div className="time-slots">
  
    {loading ? (
      <p>Yükleniyor...</p>
    ) : (
      <div className="slots-grid">
        {allSlots.map(({ start, end }, index) => {
          const label = `${start} - ${end}`;
          const isTaken = bookedSlots.includes(label);
          return (
            <div key={index} className="time-slot">
              <span>{label}</span>
              <button
                disabled={isTaken}
                className={isTaken ? 'btn btn-secondary' : 'btn btn-warning'}
                onClick={() => {
                  if (!isTaken) {
                    window.location.href = 'tel:+905385686231';
                  }
                }}
              >
                {isTaken ? 'DOLU' : 'Randevu Al'}
              </button>
            </div>
          );
        })}
      </div>
    )}
  </div>
  
  );
};

export default AppointmentSlots;
