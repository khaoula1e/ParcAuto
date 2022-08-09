import Table from 'react-bootstrap/Table';
import "../style/Menu.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function Mission() {
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
          <th>Date</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>55018-A-26</td>
          <td>23/06/2022</td>
          <td>Le refroidissement du moteur</td>
        </tr>
        <tr>
          <td>2</td>
          <td>194768-M</td>
          <td>08/06/2022</td>
          <td>Le pare-brise</td>
        </tr>
        <tr>
          <td>3</td>
          <td >207096-M</td>
          <td >03/05/2022</td>                      
          <td>Les pneus</td>
        </tr>
      </tbody>
          </Table>
      <div>
        <Button variant="outline-success" classname="btn-rep"><Link to='/mission'>Ajouter un ordre de mission</Link></Button>
        <Button variant="outline-success" classname="btn-rep">Modifier un ordre de mission</Button>
        <Button variant="outline-success" classname="btn-rep"><Link to='/home'>Home</Link></Button>
        
      </div>
    </div>
  );
}

export default Mission;