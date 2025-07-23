import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cars from './cars/Cars'
import AboutTheCar from './cars/AboutTheCar'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Cars />} />
        <Route path="/car/:id" element={<AboutTheCar />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
