import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams, Link } from "react-router-dom";
import '../style/table.css'
import Button from 'react-bootstrap/Button';
import Logo from "../assets/driver2.jpg"
export default function Chauffeurs() {
    const Modifier = () => {
        const [inputs, setInputs] = useState([]);

        const handleChange = (event) => {
            const name = event.target.name;
            const value = event.target.value;
            setInputs(values => ({ ...values, [name]: value }));
        }
        const handleSubmit = (event) => {
            event.preventDefault();

            axios.put(`http://localhost:80/backend/chauffeurs/driver/${id}/edit`, inputs).then(function (response) {
                console.log(response.data);
                navigate('/');
            });
        }
        return (
      <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1 className="new"> Modifier une date de permanence</h1>
        <form onSubmit={handleSubmit} id="contact-form">
              <label  htmlFor="text">Chauffeur </label>
              <input type="text"
                  name="CIN"
                  placeholder="Entrer le CIN du chauffeur..."
                  onChange={handleChange}
              />
              <label >Date début </label>
              <input type="date" name="dateDebut" onChange={handleChange} />
              <label >Date fin </label>
              <input type="date" name="dateFin" onChange={handleChange} />
            <div>
              <button>Ajouter</button>
              <Button variant="outline-success" classname="btn-rep" onClick={() => setShow(!show) }>Retour</Button>
              </div>
            </form>
      </div>
    </div>
    )
    }
    const navigate = useNavigate();
    const [drivers, setDrivers] = useState([]);
    const [show, setShow] = useState(false);


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
                <Button variant="outline-primary" classname="btn" onClick={() => setShow(!show) }>Modifier </Button>
            </div>
            {show && <Modifier />}
        </div>
    )
}