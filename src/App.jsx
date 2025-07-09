import React from 'react'
// import NavBar from './components/NavBar';
import Home from './pages/Home'
import './App.css'
import './assets/styles/animations.css'
import './assets/styles/bgStars.css'
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      {/* <NavBar /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} /> */}
      </Routes>
    </HashRouter>
  )
}

export default App

