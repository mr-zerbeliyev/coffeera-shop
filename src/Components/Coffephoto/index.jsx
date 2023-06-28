import React from "react";
import "./style.css";

const Coffephoto = ({ img, title, text }) => {
  return (
    <div className="photo_card">
      <img src={img} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Coffephoto;
