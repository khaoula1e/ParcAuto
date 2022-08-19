import React, { useState, useRef, useEffect } from 'react';
import { Button } from "react-bootstrap";
import '../style/dashboard.css'
import { UserAuth } from "../helpers/AuthContext";
import { Link ,useNavigate} from "react-router-dom";

function Dashboard() {
  const { logout} = UserAuth();
  
  
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
  };
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
      <div className="d-grid gap-2">
        <Button variant="primary" onClick={handleLogout}>
          Log out
        </Button>
      </div>
    </div>
  );
}

export default Dashboard;