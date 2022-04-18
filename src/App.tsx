import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormCreateJonal from './components/Jonal/FormCreateJonal';
import Navbar from './components/Layout/Navbar';
import MainJonal from './components/Jonal/MainJonal';
import ItemListjonal from './components/Jonal/ItemListjonal';
import Nomatch from './components/Layout/Nomatch';
import FormUpdateJonal from './components/Jonal/FormUpdateJonal';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainJonal />} />
        <Route path='/create' element={<FormCreateJonal />} />
        <Route path='/listjonal' element={<ItemListjonal/>} />
        <Route path='/update/:id' element={<FormUpdateJonal/>} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </div>
  );
}

export default App;
