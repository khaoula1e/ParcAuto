import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../style/table.css'
import Button from 'react-bootstrap/Button';

export default function Chauffeurs() {
    const navigate = useNavigate();
    const [drivers, setDrivers] = useState([]);
    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getDriver();
    }, []);

    function getDriver() {
        axios.get(`http://localhost:80/backend/chauffeurs/drivers`).then(function(response) {
            console.log(response.data);
            setDrivers(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:80/backend/chauffeurs/driver/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
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
                <Button variant="outline-primary" classname="btn"><Link to='/'>Home</Link></Button>
                <Button variant="outline-primary" classname="btn">Ajouter </Button>
                <Button variant="outline-primary" classname="btn">Modifier </Button>
            </div>
        </div>
    )
}