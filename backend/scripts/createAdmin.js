// ✅ scripts/createAdmin.js

const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/adminModel');

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    const newAdmin = new Admin({
      username: 'admin',
      password: '123456',
    });

    await newAdmin.save();
    console.log('✅ Admin başarıyla eklendi');
    process.exit();
  })
  .catch(err => {
    console.error('❌ Bağlantı hatası:', err);
    process.exit(1);
  });
