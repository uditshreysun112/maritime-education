import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { Contact } from './Contact';
import { News } from './News';
import { Fq } from './F&q';
import { Industry } from './Industry';
import { Navbar } from './Navbar';
import { Footer } from './Footer';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='contact' element={<Contact />}></Route>
        <Route exact path='news' element={<News />}></Route>
        <Route exact path='F&q' element={<Fq />}></Route>
        <Route exact path='industry' element={<Industry />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App

