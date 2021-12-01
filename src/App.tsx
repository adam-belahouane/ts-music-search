import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
    {/* <MyNavBar /> */}
    <Routes>
      <Route path="/"  element={<HomePage/>} />
      {/* <Route path="/:trackId"  element={<CompanyPage />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
