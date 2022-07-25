import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import "./styles/index.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route 
          path='giris-yap'
          element={<LoginPage/>}
        />
        <Route
          path='kayit-ol'
          element={<RegisterPage/>}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);