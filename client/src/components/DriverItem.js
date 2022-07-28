import React from "react";
import "../style/Menu.css";

function DriverItem({ image, name, debut }) {
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1 > {name} </h1>
      <p> Depuis : {debut} </p>
    </div>
  );
}

export default DriverItem;