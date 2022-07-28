import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../AUM4.png";
import "../style/Home.css";

function Accueil() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> AUM PARC AUTO </h1>
        <p> La bonne gestion du parc auto</p>
        <Link to="/fonctionnalites">
          <button> START NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Accueil;