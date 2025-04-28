// ✅ src/models/serviceModel.js

const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, 'Kategori zorunludur.'],
    trim: true,
  },
  title: {
    type: String,
    required: [true, 'Başlık zorunludur.'],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, 'Fiyat zorunludur.'],
    min: [0, 'Fiyat negatif olamaz.']
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);
