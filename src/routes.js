import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage';
import ManagerPage from './pages/ManagerPage';
import EmployeePage from './pages/EmployeePage';
import NotFound from './components/Common/NotFound';

const RoutesConfig = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/admin" element={<AdminPage />} />
    <Route path="/manager" element={<ManagerPage />} />
    <Route path="/employee" element={<EmployeePage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default RoutesConfig;
