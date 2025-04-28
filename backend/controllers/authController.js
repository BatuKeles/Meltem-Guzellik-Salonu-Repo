// ✅ controllers/authController.js

const Admin = require('../models/adminModel');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });
};

exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });

    if (!admin) {
      return res.status(401).json({ message: 'Geçersiz kullanıcı' });
    }

    // DÜZ karşılaştırma (bcrypt yok!)
    if (admin.password !== password) {
      return res.status(401).json({ message: 'Hatalı şifre' });
    }

    const token = generateToken(admin._id);
    res.status(200).json({ token });

  } catch (error) {
    res.status(500).json({ message: 'Sunucu hatası' });
  }
};
