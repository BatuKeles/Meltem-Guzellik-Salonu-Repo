// ✅ controllers/categoryController.js
const Category = require('../models/categoryModel');

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find({});
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Kategoriler alınamadı' });
  }
};

exports.createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const exists = await Category.findOne({ name });
    if (exists) return res.status(400).json({ message: 'Zaten var' });

    const newCategory = new Category({ name });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(500).json({ message: 'Kategori oluşturulamadı' });
  }
};

exports.deleteCategory = async (req, res) => {
  const { name } = req.params;
  try {
    const deleted = await Category.findOneAndDelete({ name });
    if (!deleted) return res.status(404).json({ message: 'Kategori bulunamadı' });
    res.json({ message: 'Silindi' });
  } catch (err) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
};
