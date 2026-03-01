
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './menu/menu.css';
import App from './App.jsx';
import MenuPage from './MenuPage.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
