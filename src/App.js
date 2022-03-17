import logo from './logo.svg';
import './App.css';
import AllStarships from './pages/AllStarships';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Starship from './pages/StarShip';
import Nav from './pages/Nav';

function App() {
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/starships" element={<AllStarships />} />
      <Route path="/starship" element={<Starship />} />
    </Routes>
    </>
  );
}

export default App;
