import React from "react";
import { DriverList } from "../components/DriverList";
import DriverItem from "../components/DriverItem";
import { MenuList } from "../components/MenuList";
import MenuItem from "../components/MenuItem";
import "../style/Menu.css";

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
    </div>
  );
}

export default Driver;