import React from "react";
import "./style.css";
const Clintcard = ({ img, text, name, person }) => {
  return (
    <div className="clintcard">
      <img src={img} />
      <p>{text}</p>
      <h3>{name}</h3>
      <span>{person}</span>
    </div>
  );
};

export default Clintcard;
