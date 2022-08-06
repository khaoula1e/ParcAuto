import React from 'react';
import img from '../img1.jpg';
import "../style/about.css";

const About = () => {
  return (
    <div className='about'>
      
      <div className="aboutBottom">
        
        <h1>Parc Auto de l'Agence Urbaine</h1>
        <div >
           <img className='photo' src={img} alt='parc' />
                  <div className="p-2">
                      <p>
                          Cette application gère l’administration complète d’un ensemble de modules tels que : la gestion des chauffeurs,  la gestion des dotations de carburant
        (les vignettes), la gestion des missions, la gestion des réparations, la gestion des réservations, la gestion des utilisateurs.
        </p></div>
        </div>
        
        
      </div>
    </div>
  );
};

export default About;