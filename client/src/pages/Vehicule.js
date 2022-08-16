import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../style/table.css'
import Button from 'react-bootstrap/Button';

export default function Vehicules() {
    const navigate = useNavigate();
    const [cars, setCars] = useState([]);
    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getCar();
    }, []);

    function getCar() {
        axios.get(`http://localhost:80/backend/vehicules/cars`).then(function(response) {
            console.log(response.data);
            setCars(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:80/backend/vehicules/car/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <div className="menu">
              <h1 className="Title">Détails des véhicules </h1>
          <div className="underline3"></div>
          </div>
            <div className="tab">
                <table>
                <thead>
        <tr>
          <th>Matricule</th>
          <th>Marque</th>
          <th>Kilometrage</th>
          <th>Date visite</th>
          <th>Vidange</th>
          <th>Disponibilité</th>
        </tr>
      </thead>
      <tbody>
        {cars.map(p => (
            <tr key={p.matricule}>
              <td>{p.matricule}</td>
              <td>{p.marque}</td>
              <td>{p.kilometrage}</td>
              <td>{p.dateVisite}</td>
              <td>{p.vidange}</td>
              <td>{p.parquee}</td>

            </tr>
            
        ))}
      </tbody>
            </table>
            </div>
            <div classname="bouttons">
                <Button variant="outline-primary" classname="btn"><Link to='/vehicules'>Retour</Link></Button>
                <Button variant="outline-primary" classname="btn">Ajouter </Button>
                <Button variant="outline-primary" classname="btn">Modifier </Button>
            </div>
        </div>
    )
}