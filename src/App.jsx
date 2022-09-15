import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import MainPage from './pages/MainPage/MainPage';
import ShowModal from './components/ShowModal/ShowModal';
import UserPage from './pages/UserPage/UserPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/user/:id" element={<UserPage />} />
        </Routes>
        <ShowModal />
      </BrowserRouter>
    </div>
  );
}

export default App;
