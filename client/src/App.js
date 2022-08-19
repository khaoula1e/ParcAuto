import React, { Component } from 'react';
import ProtectedRoute from "./components/ProtectedRoute";
import { BrowserRouter,Routes ,Route } from 'react-router-dom';
import { AuthContextProvider } from "./helpers/AuthContext";
//style
import './App.css';
//components
import Navbar from './components/Navbar.js'
import Footer from './components/footer/Footer.js';
//pages communes
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Login from './pages/Login';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp';
import Fonctionnalites from './pages/Fonctionnalites';
//pages gestionnaire
import Dashboard from './pages/Dashbord';
import Menu from "./pages/Menu";
import Driver from "./pages/Driver";
import Chauffeurs from "./pages/Chauffeurs"; 
import Vehicule from './pages/Vehicule'
import Reparations from './pages/Reparations';
import Vignettes from './pages/Vignettes';
import Mission from './pages/Mission';
import NouvelleMission from './pages/NouvelleMission';
//chauffeur
import Mission_chauffeur from './pages/chauffeur/Chauffeur';
import Permanence from './pages/chauffeur/Permanence';

//user
import Form from './pages/utilisateur/Form'

//routes
const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <AuthContextProvider>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/contact" element={<ContactUs />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/vehicules" element={<Menu />}></Route>
        <Route path="/driver" element={<Driver />}></Route>
        <Route path="/fonctionnalites" element={<Fonctionnalites />}></Route>
        <Route path="/vehicule" element={<Vehicule />}></Route>
        <Route path="/reparations" element={<Reparations/>}></Route>
        <Route path="/missions" element={<Mission/>}></Route>
        <Route path="/mission" element={<NouvelleMission />}></Route>
        <Route path="/chauffeurs" element={<Chauffeurs />}></Route>
        <Route path="/vignettes" element={<Vignettes />}></Route>
          <Route path="/formulaire" element={
            <ProtectedRoute>
                    <Form />
                  </ProtectedRoute>
          }></Route>
          <Route path="/dashboard" element={
            <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
            }></Route >
          <Route path="/mission_chauffeur" element={
            <ProtectedRoute>
                    <Mission_chauffeur />
                  </ProtectedRoute>
          }></Route>
          <Route path="/permanence" element={
            <ProtectedRoute>
                    <Permanence />
                  </ProtectedRoute>
          }></Route>

      </Routes>
      </AuthContextProvider>
      <Footer></Footer>
    </BrowserRouter>
  );
  

};
export default App;
