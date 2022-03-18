import logo from './logo.svg';
import './App.css';
import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import {Routes,Route}from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import Navbar from './Navbar';




const App=()=>
{
  return (
    <>
    <Navbar/>

    <Routes>
    <Route exact path="/"  element={<Home/>} />
    <Route exact path="/about"  element={<About/>} />
    <Route exact path="/contact"  element={<Contact/>} />
    
    </Routes>
    </>
  )
}

export default App;
