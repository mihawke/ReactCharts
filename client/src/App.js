import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './Pages/Home/HomePage';
import DashBoard from './Pages/DashBoard/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
