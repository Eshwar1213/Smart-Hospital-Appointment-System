import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserDashboard from './pages/UserDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import AdminDashboard from './pages/AdminDashboard';
import HomePage from './pages/HomePage';

function App() {
  const navigate = useNavigate();
  // A simple check for a logged-in user. In a real app, this would come from context or Redux.
  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  const handleLogout = () => {
      localStorage.removeItem('userInfo');
      navigate('/login/user');
      window.location.reload(); // Force a reload to clear state
  };

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-white shadow-md">
        <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-blue-600">SmartHospital</Link>
          <div>
            {!userInfo ? (
              <>
                <Link to="/login/user" className="px-4 py-2 text-gray-700 hover:text-blue-600">User Login</Link>
                <Link to="/login/doctor" className="px-4 py-2 text-gray-700 hover:text-blue-600">Doctor Login</Link>
                <Link to="/login/admin" className="px-4 py-2 text-gray-700 hover:text-blue-600">Admin Login</Link>
                <Link to="/register" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">Register</Link>
              </>
            ) : (
               <button onClick={handleLogout} className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">Logout</button>
            )}
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login/:role" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard/user" element={<UserDashboard />} />
          <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
