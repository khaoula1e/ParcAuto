import React from "react";
import Logo from "../assets/repara.jpg";
import "../style/contact.css";
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styled from "styled-components";



function NouvelleReparation() {
  //styling
  const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
    background: linear-gradient(0.25turn,#093B8D,#93F2F8);
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 55%;
  padding: 20px;
  background-color: white;
  margin-top: 40px;
  
`;

const Title = styled.h1`
  font-size: 44px;
  font-weight: 300;
  margin-top: 100px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Field = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  
`;

const Button = styled.button`
  width: 20%;
  border: none;
  padding: 15px 20px;
  background-color: #e5a775;
  color: black;
  text-decoration: solid;
  cursor: pointer;
  margin-bottom: 30px;
  margin-top: 30px;
  margin-left: 280px;
  font-family: "Oleo Script", cursive;
  height: 70px;
  transform: rotate(-0.07deg);
`;

const Linki = styled.a`
  margin: 5px 0px;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
  margin-bottom: 40px;
  margin-top: 30px;
  margin-left: 300px;
`;
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