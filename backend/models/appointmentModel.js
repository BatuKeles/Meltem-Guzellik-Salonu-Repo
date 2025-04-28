const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  clientPhone: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Appointment', appointmentSchema);
