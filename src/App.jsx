import React from 'react'
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import About from './pages/About';
import Contact from './pages/Contact'
import Skills from './pages/Skills';
import Projects from './pages/Projects'
import './App.css'
import './assets/styles/animations.css'
import { HashRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <HashRouter>
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='skills' element={<Skills />} />
        <Route path='projects' element={<Projects />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </HashRouter>
  )
}

export default App

