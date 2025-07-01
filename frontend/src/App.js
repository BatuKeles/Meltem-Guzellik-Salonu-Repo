// ✅ src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Login from './pages/Login'; // ✅ Login sayfası import
import AdminPanel from './components/admin/AdminPanel';
import PrivateRoute from './routes/PrivateRoute'; // ✅ Giriş koruması

import './components/Header.css';
import './components/About.css';
import './components/Gallery.css';
import './components/Appointment.css';
import './components/Contact.css';
import './components/Footer.css';
import './style/Global.css';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hizmetler" element={<Services />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminPanel />
            </PrivateRoute>
          }
        />
      </Routes>
      
    </Router>
  );
}

export default App;

