import logo from './logo.svg';
import React, { Component } from 'react';

import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/footer/Footer.js';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Login from './pages/Login';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp';
import Fonctionnalites from './pages/Fonctionnalites';
import Menu from "./pages/Menu";
import Driver from "./pages/Driver"; 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
        <Route path="/driver" element={<Driver />}></Route>
        <Route path="/fonctionnalites" element={<Fonctionnalites />}></Route>
        <Route path="*" element={<Home/>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
  

};
export default App;