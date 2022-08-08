import React from "react";
import "../style/Menu.css";
import { Link } from 'react';

function MenuItem({id, image, name, matricule }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 > {name} </h1>
      <p> {matricule} </p>
    </div>
  );
}

export default MenuItem;