import React from "react";
import Logo from "../assets/repara.jpg";
import "../style/contact.css";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";


function NouvelleReparation() {

// working
  const initialValues = {
    CIN: "",
    nom: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    CIN: Yup.string().min(3).max(15).required(),
    nom: Yup.string().min(3).max(15).required(),
    password: Yup.string().min(4).max(20).required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/reparation", data).then(() => {
      console.log(data);
    });
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1 className="new"> Ajouter une réparation</h1>
        <form id="contact-form" >
          <label htmlFor="name">Véhicule </label>
          <input name="name" placeholder="Entrer le matricule de la véhicule..." type="text" />
          <label htmlFor="date">Date de réparation</label>
          <input name="date" placeholder="Entrer la date de réparation..." type="date" />
          <label htmlFor="message">Description de la réparation</label>
          <textarea
            rows="6"
            placeholder="Entrer les informations nécessaires..."
            name="message"
            required
          ></textarea>
          <button type="submit" onSubmit={onSubmit} > Ajouter</button>
        </form>
      </div>
    </div>
  );
}

export default NouvelleReparation;