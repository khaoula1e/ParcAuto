import React, { useState } from "react";
import Table from 'react-bootstrap/Table';
import "../style/Menu.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";

function Reparations() {
  const [reparas, setreparas] = useState([
    { id: 1, Vehicule: "55018-A-26", Date: "23/06/2022", Description: "Le refroidissement du moteur" },
    { id: 2, Vehicule: "194768-M", Date: "29/07/2022", Description: "Le pare-brise" },
    { id: 3, Vehicule: "Leia", Date: "13/03/2021", Description: "Les pneus" },
  ]);

  return (
      <div>
          
          <div className="menu">
              <h1 className="menuTitle2">Historique des réparations </h1>
          <div className="underline3"></div>
          </div>

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Vehicule</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
          {reparas.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.Vehicule}</td>
              <td>{p.Date}</td>
              <td>{p.Description}</td>
            </tr>
          ))}
        </tbody>
          </Table>
      <div>
        <Button variant="outline-success" classname="btn-rep"><Link to='/reparation'>Ajouter une réparation</Link></Button>
        
        <Button variant="outline-success" classname="btn-rep"><Link to='/vehicules'>Retour</Link></Button>
        
      </div>
    </div>
  );
}

export default Reparations;