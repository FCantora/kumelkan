/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom'
import { Navbar } from './Components/Navbar/Navbar'
import { Home } from './Views/Home'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  )
}

export default App
