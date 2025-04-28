const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  // Görsel alanı kaldırıldı
});

module.exports = mongoose.model('Category', categorySchema);
