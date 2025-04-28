const express = require('express');
const router = express.Router();
const {
  getServices,
  createService,
  updateService,
  deleteService,
} = require('../controllers/servicesController');
const { protect } = require('../middleware/authMiddleware');

// Herkes listeleyebilir
router.get('/', getServices);

// Sadece admin: ekle, güncelle, sil
router.post('/', createService);
router.put('/:id', updateService);
router.delete('/:id', deleteService);


module.exports = router;