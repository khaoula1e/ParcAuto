import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../style/table.css'
import Button from 'react-bootstrap/Button';

export default function Vignettes() {
    const navigate = useNavigate();
    const [vignettes, setVignettes] = useState([]);
    const [inputs, setInputs] = useState([]);

    const {id} = useParams();

    useEffect(() => {
        getVignette();
    }, []);

    function getVignette() {
        axios.get(`http://localhost:80/backend/vignettes/vignettes`).then(function(response) {
            console.log(response.data);
            setVignettes(response.data);
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.put(`http://localhost:80/backend/vignettes/vignette/${id}/edit`, inputs).then(function(response){
            console.log(response.data);
            navigate('/');
        });
        
    }
    return (
        <div>
            <div className="menu">
              <h1 className="Title">Vignettes de Gasoil </h1>
          <div className="underline3"></div>
          </div>
            <div className="tab">
                <table>
                <thead>
        <tr>
          <th>Matricule</th>
          <th>Type d'essence</th>
          <th>Prix</th>
          <th>Kilometrage</th>
          <th>Date</th>
          <th>Station</th>
        </tr>
      </thead>
      <tbody>
        {vignettes.map(p => (
            <tr key={p.matricule}>
              <td>{p.matricule}</td>
              <td>{p.typeEssence}</td>
              <td>{p.prix}</td>
              <td>{p.kilometrage}</td>
              <td>{p.date}</td>
              <td>{p.stationCode}</td>

            </tr>
            
        ))}
      </tbody>
            </table>
            </div>
            <div className="bouttons">
                <Button variant="outline-primary" className="btn"><Link to='/vehicules'>Retour</Link></Button>
                <Button variant="outline-primary" className="btn">Ajouter </Button>
                <Button variant="outline-primary" className="btn">Modifier </Button>
            </div>
        </div>
    )
}