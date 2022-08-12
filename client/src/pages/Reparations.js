import React, { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';
import "../style/Menu.css";
import Logo from "../assets/repara.jpg";
import "../style/contact.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import axios from "axios";

function Reparations() {
  const Reparation = () => {
    const [inputs, setInputs] = useState([]);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:80/backend/save', inputs).then(function(response){
          console.log(response.data);
          alert("Ajout effectué avec succès!! Actualisez la page");
        });
        
    }
    return (
      <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Logo})` }}
      ></div>
      <div className="rightSide">
        <h1 className="new"> Ajouter une réparation</h1>
        <form onSubmit={handleSubmit} id="contact-form">
                <table cellSpacing="10">
                    <tbody>
                        <tr>
                            <th>
                                <label  htmlFor="date">Date de réparation </label>
                            </th>
                            <td>
                    <input type="date"
                      name="date"
                      placeholder="Entrer la date de réparation..."
                      onChange={handleChange}
                    />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label >Description de la réparation </label>
                            </th>
                            <td> 
                                <input type="text" name="description" onChange={handleChange} />
                            </td>
                        </tr>
                        <tr>
                            <th>
                                <label>Véhicule </label>
                            </th>
                            <td>
                                <input type="text" name="vehicule" onChange={handleChange} />
                            </td>
                        </tr>
                <tr>
                      <button>Ajouter</button>
                      <Button variant="outline-success" classname="btn-rep" onClick={() => setShow(!show) }>Réparations</Button>
                </tr>
                    </tbody>
                </table>
            </form>
      </div>
    </div>
    )
  }
  const [show, setShow] = useState(false);

  
  const [new_data, setNew_data] = useState({
    Vehicule: "",
    Date: "",
    Description:""
  });
  const [repars, setRepars] = useState([]);
  useEffect(() => {
        getRepars();
  }, []);
  function getRepars() {
        axios.get('http://localhost:80/backend/users/').then(function(response) {
            console.log(response.data);
            setRepars(response.data);
        });
    }

  const addhandler = e => {
    e.preventDefault();
    axios.post('http://localhost:80/backend/save', repars).then(function(response){
            console.log(response.data);
            
        });
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
          <th>#</th>
          <th>Vehicule</th>
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
          {repars.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.vehicule}</td>
             <td>{p.date}</td>
             <td>{p.description}</td>
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