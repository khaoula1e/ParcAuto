import Table from 'react-bootstrap/Table';
import "../style/Menu.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Reparations() {
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
        <Button variant="outline-success" classname="btn-rep"><Link to='/reparation'>Ajouter une réparation</Link></Button>
        
        <Button variant="outline-success" classname="btn-rep"><Link to='/vehicules'>Retour</Link></Button>
        
      </div>
    </div>
  );
}

export default Reparations;