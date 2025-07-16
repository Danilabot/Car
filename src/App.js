import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './components/Footer'
import Cars from './cars/Cars'
import Gle from './cars/Gle'
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Cars />} />
        <Route path="/car/:id" element={<Gle />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
