import React from 'react';
import {  BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import FormNews from './components/FormNews/FormNews';
import Header from './components/header/Header';
import Tablas from './components/Tablas/Tabla';

const App = () => {
  return (
    <div className='contenedorPersonajes'>
      <Router>

      <Header/>

      <Routes>
        <Route path='/Formulario' element={<FormNews/>}/>
        <Route path='/Personajes' element={<Tablas/>}/>
      </Routes>

    </Router>
    </div>
  )
}

export default App