// ✅ src/controllers/servicesController.js

const Service = require('../models/serviceModel');

// Tüm hizmetleri al
const getServices = async (req, res) => {
  const services = await Service.find({});
  res.json(services);
};

// Yeni hizmet oluştur
const createService = async (req, res) => {
  const { category, title, price } = req.body;
  const service = new Service({ category, title, price });
  await service.save();
  res.status(201).json(service);
};

// Mevcut hizmeti güncelle
const updateService = async (req, res) => {
  try {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (!service) {
      return res.status(404).json({ message: 'Hizmet bulunamadı' });
    }

    res.json(service);
  } catch (err) {
    res.status(500).json({ message: 'Güncelleme hatası' });
  }
};

// Hizmeti sil
const deleteService = async (req, res) => {
  try {
    const service = await Service.findByIdAndDelete(req.params.id);

    if (!service) {
      return res.status(404).json({ message: 'Hizmet bulunamadı' });
    }

    res.json({ message: 'Hizmet silindi' });
  } catch (err) {
    res.status(500).json({ message: 'Silme hatası' });
  }
};

module.exports = {
  getServices,
  createService,
  updateService,
  deleteService,
};
