import React from 'react';
import Slider from '../../components/Slider/Slider'
import Accueil from '../../components/Accueil'
import '../../style/contact.css'
import img from '../../assets/parc1.jpg'
const Home = () => {
  
  return (
    <div>
          
      <Accueil></Accueil>
      <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${img})` }}
        ></div>
      <div className="rightSide">
          <h1> AUM Parc Auto</h1>
          <form id="contact-form" method="POST">
            <p>
              Notre logiciel de parc automobile, de par ses nombreuses possibilités d’analyse, permet d'obtenir une image précise de l’utilisation, du coût et de l’état du parc véhicules. Ces tableaux de bord et bilans sont de véritables outils d’aides à la décision pour les gestionnaires de parc. Ils permettent, notamment, de mener une politique active d’optimisation des processus de fonctionnement, de contrôle des dépenses et de rationalisation des achats.
          </p>
          
        </form>
      </div>
    </div>
    </div>
  );
};

export default Home;