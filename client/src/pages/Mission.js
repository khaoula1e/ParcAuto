import React, { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import "../style/Menu.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


function Mission() {
  const [missions, setmissions] = useState([]);
  useEffect(() => {
        getMissions();
  }, []);
  function getMissions() {
        axios.get('http://localhost:80/backend/missions/missions').then(function(response) {
            console.log(response.data);
            setmissions(response.data);
        });
    }

  return (
      <div>
          <div className="menu">
              <h1 className="menuTitle2">Liste des missions </h1>
          <div className="underline3"></div>
          </div>

          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Vehicule</th>
          <th>Destination</th>
          <th>Date début</th>
          <th>Date fin</th>
          <th>Bénéficiaire</th>
          <th>Mission</th>
        </tr>
      </thead>
      <tbody>
          {missions.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.vehicule}</td>
              <td>{p.destination}</td>
              <td>{p.dateDebut}</td>
              <td>{p.dateFin}</td>
              <td>{p.beneficiaire}</td>
              <td>{p.mission}</td>
            </tr>
          ))}
        </tbody>
          </Table>
      <div>
        <Button variant="outline-success" classname="btn-rep"><Link to='/mission'>Ajouter un ordre de mission</Link></Button>
        <Button variant="outline-success" classname="btn-rep">Modifier un ordre de mission</Button>
        <Button variant="outline-success" classname="btn-rep"><Link to='/'>Home</Link></Button>
        
      </div>
    </div>
  );
}

export default Mission;