import React, { useState,useEffect } from "react";
import Logo from "../assets/mission2.jpg";
import "../style/contact.css";
import Button from 'react-bootstrap/Button';
import { useNavigate } from "react-router-dom";
import axios from "axios";

function NouvelleMission() {
  const navigate = useNavigate();

  const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/backend/missions/save', inputs).then(function(response){
          console.log(response.data);
          alert("Ajout effectué avec succès!! ");
          navigate('/missions');
        });
        
    }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ><h1 classname="new"> Nouveau ordre de mission</h1></div>
      <div className="rightSide">
        <form onSubmit={handleSubmit} id="contact-form">
          <label >Véhicule </label>
          <input name="name"
            placeholder="Entrer le matricule de la véhicule..."
            type="text"
            onChange={handleChange}
          />
          <label >Destination </label>
          <input name="name"
            placeholder="Entrer la destination de la mission..."
            type="text"
            onChange={handleChange}
          />
          <label >Date début</label>
          <input name="email"
            placeholder="Entrer la destination..."
            type="date"
            onChange={handleChange}
          />
          <label >Date fin</label>
          <input name="email"
            placeholder="Entrer la date de début..."
            type="date"
            onChange={handleChange}
          />
          <label >Bénéficiaire </label>
          <input name="name"
            placeholder="Entrer le nom du bénéficiaire..."
            type="text"
            onChange={handleChange}
          />
          <label >Mission </label>
          <input name="name"
            placeholder="Entrer votre mission..."
            type="text"
            onChange={handleChange}
          />
          <div>
            <button > Ajouter</button>

            <Button variant="outline-success"> Retour</Button>
          </div>
          
        </form>
      </div>
    </div>
  );
}

export default NouvelleMission;