import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import About from './pages/About';
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills';
import { changePage } from './store/slices/infoState.slice';
import './App.css'
import React from 'react'

function App() {
  const infoState = useSelector(state => state.infoState);
  const dispatch = useDispatch();
  const pageVisibility = 'visible';

  function toggleDarkMode() {
    document.body.classList.toggle('dark')
  }

  function renderInfo() {
    switch (infoState) {
      case 'about':
        return (<About pageVisibility={pageVisibility} />)
      case 'skills':
        return (<Skills pageVisibility={pageVisibility} />)
      case 'projects':
        return (<Projects pageVisibility={pageVisibility} />)
      case 'contact':
        return (<Contact pageVisibility={pageVisibility} />)
      default:
        return (<Home pageVisibility={pageVisibility} />)
    }
  }

  return (
    <div className="App">
      <div id='stars'></div>
      <div id='stars2'></div>
      <div id='stars3'></div>
      <NavBar />
      {renderInfo()}
    </div>
  )
}

export default App

