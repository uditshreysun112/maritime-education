import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { Contact } from './Contact';
import { About_amt } from './About_amt';
import { News } from './News';
import { Fq } from './F&q';
import { All_courses } from './All_courses';
import { Industry } from './Industry';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Std_login } from './std/std_login';


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='contact' element={<Contact />}></Route>
        <Route exact path='news' element={<News />}></Route>
        <Route exact path='F&q' element={<Fq />}></Route>
        <Route exact path='about_amt' element={<About_amt />}></Route>
        <Route exact path='all_courses' element={<All_courses />}></Route>
        <Route exact path='industry' element={<Industry />}></Route>
        <Route exact path='std/std_login' element={<Std_login />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App

