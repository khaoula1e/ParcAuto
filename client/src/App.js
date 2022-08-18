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
import Chauffeurs from "./pages/Chauffeurs"; 
import Users from './components/Users'
import Vehicule from './pages/Vehicule'
import Reparations from './pages/Reparations';
import Mission from './pages/Mission';
import Mission_chauffeur from './pages/chauffeur/Chauffeur';
import NouvelleMission from './pages/NouvelleMission';
import SignIn from './pages/SignIn';
import Register from './pages/Register'
import Vignettes from './pages/Vignettes';
import Dashboard from './pages/Dashbord';

//user
import Form from './pages/utilisateur/Form'
const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vehicules" element={<Menu />}></Route>
        <Route path="/driver" element={<Driver />}></Route>
        <Route path="/fonctionnalites" element={<Fonctionnalites />}></Route>
        <Route path="/users" element={<Users />}></Route>
        <Route path="/vehicule" element={<Vehicule />}></Route>
        <Route path="/reparations" element={<Reparations/>}></Route>
        <Route path="/missions" element={<Mission/>}></Route>
        <Route path="/mission" element={<NouvelleMission />}></Route>
        <Route path="/chauffeurs" element={<Chauffeurs />}></Route>
        <Route path="/vignettes" element={<Vignettes />}></Route>
        <Route path="/formulaire" element={<Form />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>

        <Route path="/mission_chauffeur" element={<Mission_chauffeur/>}></Route>

      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
  

};
export default App;
