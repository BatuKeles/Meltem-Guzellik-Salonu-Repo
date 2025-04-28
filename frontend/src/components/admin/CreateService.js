
// ✅ src/components/admin/CreateService.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreateService = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [newCategory, setNewCategory] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  const fetchCategories = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/categories');
      setCategories(res.data);
    } catch (err) {
      console.error('Kategori alınamadı:', err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddService = async (e) => {
    e.preventDefault();
    if (!selectedCategory || !title || !price) {
      setMessage('Tüm alanlar doldurulmalıdır.');
      return;
    }
    try {
      await axios.post(
        'http://localhost:5000/api/services',
        {
          category: selectedCategory,
          title,
          price: Number(price),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage('✅ Hizmet eklendi');
      setTitle('');
      setPrice('');
    } catch (err) {
      setMessage('❌ Hata: ' + err.response?.data?.message);
    }
  };

  const handleAddCategory = async () => {
    if (!newCategory.trim()) return;
    try {
      await axios.post(
        'http://localhost:5000/api/categories',
        { name: newCategory },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMessage('✅ Kategori eklendi');
      setNewCategory('');
      fetchCategories();
    } catch (err) {
      setMessage('❌ Kategori eklenemedi: ' + err.response?.data?.message);
    }
  };

  const handleDeleteCategory = async () => {
    if (!selectedCategory) return;
    try {
      await axios.delete(`http://localhost:5000/api/categories/${selectedCategory}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessage('✅ Kategori silindi');
      setSelectedCategory('');
      fetchCategories();
    } catch (err) {
      setMessage('❌ Silinemedi: ' + err.response?.data?.message);
    }
  };

  return (
    <div className="admin-box">
      <h2>Hizmet Ekle</h2>

      <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
        <option value="">Kategori Seçin</option>
        {categories.map((c) => (
          <option key={c._id} value={c.name}>{c.name}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="İşlem adı"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="İşlem fiyatı"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleAddService}>Ekle</button>

      <div style={{ marginTop: '1rem' }}>
        <input
          type="text"
          placeholder="Kategori oluştur"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        />
        <button onClick={handleAddCategory}>oluştur</button>
        <button onClick={handleDeleteCategory}>sil</button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateService;
