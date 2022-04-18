import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FormCreateJonal from './components/Jonal/FormCreateJonal';
import Navbar from './components/Layout/Navbar';
import MainJonal from './components/Jonal/MainJonal';
import ItemListjonal from './components/Jonal/ItemListjonal';
import Nomatch from './components/Layout/Nomatch';
import FormUpdateJonal from './components/Jonal/FormUpdateJonal';
import axios from 'axios';

interface ItemListjonalApp {
  id: string,
  title: string,
  url_image: string
}

function App() {
  const [APIData, setAPIData] = useState<ItemListjonalApp[]>([]);

  useEffect(() => {
    getJonalData()
  }, [])

  const getJonalData = () => {
    axios.get("http://localhost:3000/getallJonal").then((response) => {
      setAPIData(response.data)
    }).catch((err) => {
      console.log(err)
    });
  }

  const updateUser = (id: string) => {
    window.location.href = '/update/' + id
  }

  const deleteJonal = (id: string) => {
    axios.delete(`http://localhost:3000/deleteJonal/${id}`)
      .then(() => {
        getJonalData();
      })
  }

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<MainJonal />} />
        <Route path='/create' element={<FormCreateJonal />} />
        <Route path='/listjonal' element={<ItemListjonal 
          APIDatas={APIData}
          updateUser={updateUser}
          deleteJonal={deleteJonal}
        />} />
        <Route path='/update/:id' element={<FormUpdateJonal />} />
        <Route path="*" element={<Nomatch />} />
      </Routes>
    </div>
  );
}

export default App;
