import React from "react";
import "./style.css";

const CoffeePhoto = ({ img, title, text }) => {
  return (
    <div className="photo_card">
      <img src={img} alt="CoffeePhoto" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default CoffeePhoto;
