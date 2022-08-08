import React from "react";
import { MenuList } from "../components/MenuList";
import MenuItem from "../components/MenuItem";
import "../style/Menu.css";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle2">Liste des véhicules</h1>
      <div className="underline2"></div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div>
              <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              matricule={menuItem.matricule}
            />
            </div>

          );
        })}
      </div>
      <button className='btnlink'><Link to='/reparations'>Réparations</Link></button>
      

    </div>
  );
}

export default Menu;