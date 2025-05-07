// ✅ src/pages/Login.js

import React, { useState } from 'react';
import networkLayer from "../api/axios"; // Eğer bulunduğun dosya src/components/... içindeyse
import { useNavigate } from 'react-router-dom';
import '../pages/Login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await networkLayer.post('https://localhost:5000/api/auth/login', {
        username,
        password,
      });
      console.log(res);
      localStorage.setItem('token', res.data.token); // 🔐 Token'ı localStorage'a kaydet
      navigate('/admin'); // ✅ Başarılı giriş sonrası admin paneline yönlendir
    } catch (err) {
      setError('Kullanıcı adı veya şifre yanlış'); // ❌ Hatalı giriş mesajı
    }
  };

  return (
    <div className="login-container">
      <h2>Admin Giriş</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Kullanıcı Adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifre"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Giriş Yap</button>
        {error && <p className="error-msg">{error}</p>}
      </form>
    </div>
  );
};

export default Login;
