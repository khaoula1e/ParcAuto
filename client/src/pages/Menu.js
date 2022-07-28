import React from "react";
import { MenuList } from "../components/MenuList";
import MenuItem from "../components/MenuItem";
import "../style/Menu.css";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle2">Liste des véhicules</h1>
      <div className="underline2"></div>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              matricule={menuItem.matricule}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;