import React from "react";
import { DriverList } from "../components/DriverList";
import DriverItem from "../components/DriverItem";
import "../style/Menu.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Driver() {
  return (
    <div className="menu">
          <h1 className="driverTitle">Chauffeurs</h1>
          <div className='underline'></div>
      <div className="menuList">
        {DriverList.map((driverItem, key) => {
          return (
            <DriverItem
              key={key}
              image={driverItem.image}
              name={driverItem.name}
              debut={driverItem.debut}
            />
          );
        })}
      </div>
              <Button variant="outline-success" classname="btn-rep"><Link to='/chauffeurs'>Tableau de permanence</Link></Button>

    </div>
  );
}

export default Driver;