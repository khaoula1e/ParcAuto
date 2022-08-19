import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../../style/table.css'
import Button from 'react-bootstrap/Button';

export default function Permanence() {
    const navigate = useNavigate();
    const [drivers, setDrivers] = useState([]);


    useEffect(() => {
        getDriver();
    }, []);

    function getDriver() {
        axios.get(`http://localhost:80/backend/chauffeurs/drivers`).then(function(response) {
            console.log(response.data);
            setDrivers(response.data);
        });
    }

    
    return (
        <div>
            <div className="menu">
              <h1 className="Title">Tableau de permanence des chauffeurs </h1>
          <div className="underline3"></div>
          </div>
            <div className="tab">
                <table>
                <thead>
        <tr>
          <th>#</th>
          <th>CIN</th>
          <th>Nom</th>
          <th>Date début</th>
          <th>Date fin</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.CIN}</td>
              <td>{p.nom}</td>
              <td>{p.dateDebut}</td>
              <td>{p.dateFin}</td>
            </tr>
            
        ))}
      </tbody>
            </table>
            </div>
            <div classname="bouttons">
                <Button variant="outline-primary" classname="btn"><Link to='/mission_chauffeur'>Retour</Link></Button>
            </div>
        </div>
    )
}