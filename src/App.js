import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Dashboard from './pages/auth/dashboard';
import DetailProduk from './pages/auth/detail';
import ForgotPassword from './pages/auth/forgotPassword';
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ResetPassword from './pages/auth/resetPassword';

function App() {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/produk/detail/:uuid" element={<DetailProduk />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
          <Route path="*" element={<Navigate to={'/login'} replace={true} />} />
        </Routes>
      </section>
    </React.Fragment>
  );
}

export default App;
