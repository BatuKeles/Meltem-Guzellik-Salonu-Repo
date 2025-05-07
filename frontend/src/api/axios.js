// frontend/src/api/axios.js
import axios from 'axios';

const networkLayer = axios.create({
  baseURL: 'https://localhost:5000/api', // ✅ /api ekleyin ve HTTPS/HTTP tutarlı olsun
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true
});

export default networkLayer;