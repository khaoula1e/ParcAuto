import React from "react";
import Logo from "../assets/mission2.jpg";
import "../style/contact.css";

function NouvelleMission() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1 classname="new"> Nouveau ordre de mission</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Véhicule </label>
          <input name="name" placeholder="Entrer le matricule de la véhicule..." type="text" />
          <label htmlFor="email">Date de réparation</label>
          <input name="email" placeholder="Entrer la date de réparation..." type="email" />
          <label htmlFor="message">Description de la réparation</label>
          <textarea
            rows="6"
            placeholder="Entrer les informations nécessaires..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default NouvelleMission;