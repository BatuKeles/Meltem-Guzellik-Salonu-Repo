// ✅ routes/appointmentRoutes.js

const express = require('express');
const router = express.Router();
const {
  getAppointmentsByDate,
  createAppointment,
} = require('../controllers/appointmentController');

// Kullanıcılar için:
// Belirli tarihteki randevuları listele
router.get('/', getAppointmentsByDate);

// Yeni randevu oluştur
router.post('/', createAppointment);

module.exports = router;
