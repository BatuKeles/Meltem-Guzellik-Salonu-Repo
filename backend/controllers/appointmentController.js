// ✅ src/controllers/appointmentController.js
const Appointment = require('../models/appointmentModel');

// GET /api/appointments?date=YYYY-MM-DD
exports.getAppointmentsByDate = async (req, res) => {
  try {
    const { date } = req.query;
    if (!date) return res.status(400).json({ message: 'Tarih parametresi gerekli' });

    const appointments = await Appointment.find({ date });
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
};

// POST /api/appointments → Yeni randevu oluştur
exports.createAppointment = async (req, res) => {
  try {
    const { date, startTime, endTime, clientName, clientPhone, service } = req.body;

    const newAppointment = new Appointment({
      date,
      startTime,
      endTime,
      clientName,
      clientPhone,
      service,
    });

    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Sunucu hatası' });
  }
};
