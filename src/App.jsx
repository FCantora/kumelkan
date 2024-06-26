/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Views/Home'
import { Contacto } from './Components/Contact/Contacto'
import { Servicios } from './Components/Servicios/Servicios'
import { Somos } from './Components/Somos/Somos'
import { Laboratorio } from './Components/Laboratorio/Laboratorio.jsx'

function App() {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/somos" element={<Somos />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/laboratorio' element={<Laboratorio />} />
      </Routes>
    </div>
  )
}

export default App
