// import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Skills from './Components/Skills'
import Works from './Components/Works'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar'
function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/Works' element={<Works />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
