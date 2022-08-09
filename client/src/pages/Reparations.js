import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import "../style/Menu.css";
import Logo from "../assets/repara.jpg";
import "../style/contact.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";

function Reparations() {
  const Reparation = () => {
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
            <input
              name="name"
              placeholder="Entrer le matricule de la véhicule..."
              type="text"
              value={new_data.Vehicule}
              onChange={e => setNew_data({ ...new_data, Vehicule: e.target.value })}
            />
            <label htmlFor="date">Date de réparation</label>

            <input
              name="date"
              placeholder="Entrer la date de réparation..."
              type="date"
              value={new_data.Date}
              onChange={e => setNew_data({ ...new_data, Date: e.target.value })}
            />
            <label htmlFor="date">Description de la réparation</label>
            <textarea
            rows="6"
            placeholder="Entrer les informations nécessaires..."
            name="message"
            required
            value={new_data.Description}
            onChange={e => setNew_data({ ...new_data, Description: e.target.value })}
          ></textarea>
            <div>
            <Button variant="outline-success" classname="btn-rep" onClick={addhandler}>Ajouter</Button>
            <Button variant="outline-success" classname="btn-rep" onClick={() => setShow(!show) }>Réparations</Button>
          </div>
        </form>
      </div>
    </div>
    )
  }
  const [show, setShow] = useState(false);

  const onSubmit = (data) => {
    axios.post("http://localhost:8000/reparation", data).then(() => {
      console.log(data);
    });
  };
  const [new_data, setNew_data] = useState({
    Vehicule: "",
    Date: "",
    Description:""
  });
  const [reparas, setreparas] = useState([
    {  Vehicule: "55018-A-26", Date: "2022-06-23", Description: "Le refroidissement du moteur" },
    {  Vehicule: "194768-M", Date: "2022-11-30", Description: "Le pare-brise" },
    {  Vehicule: "55018-A-26", Date: "2021-01-03", Description: "Les pneus" },
  ]);
  const addhandler = e => {
    e.preventDefault();
    setreparas([...reparas, new_data]);
    setNew_data({ 
    Vehicule: "",
    Date: "",
    Description:"" });
  };
  return (
      <div>
          
          <div className="menu">
              <h1 className="menuTitle2">Historique des réparations </h1>
          <div className="underline3"></div>
          </div>

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Vehicule</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
          {reparas.map(p => (
            <tr key={p.id}>
              <td>{p.Vehicule}</td>
              <td>{p.Date}</td>
              <td>{p.Description}</td>
            </tr>
          ))}
        </tbody>
          </Table>
      <div>
        <Button variant="outline-success" classname="btn-rep" onClick={() => setShow(!show) }>Ajouter une réparation</Button>
        {show && <Reparation />}
      </div>
      
    </div>
  );
}

export default Reparations;