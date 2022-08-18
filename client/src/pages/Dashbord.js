import React from "react";
import '../style/dashboard.css'
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h1 className="Title">Gestionnaire du parc</h1>
      <div className="underline3"></div>
          <div classname='bouttons'>
              <table>
   <tr>
       <td><button className='btnLink'><Link to='/vehicules'>Véhicules</Link></button></td>
      
   </tr>
   <tr>
       <td><button className='btnLink'><Link to='/missions'>Ordres de missions</Link></button></td>
      
                  </tr>
                    <tr>
       <td><button className='btnLink'><Link to='/chauffeurs'>Chauffeurs</Link></button></td>
                  </tr>
                    <tr>
       <td><button className='btnLink'><Link to='/vignettes'>Vignettes</Link></button></td>
      
   </tr>
</table>
        
        
        
        

      </div>
    </div>
  );
}

export default Dashboard;