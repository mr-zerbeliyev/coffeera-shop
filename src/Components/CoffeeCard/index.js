import React from "react";
import "./style.css";

const CoffeeCard = ({ img, title, text }) => {
  return (
    <div>
      <div className="about_coffe">
        <div>
          <img src={img} alt="Coffee" />
        </div>
        <div className="coffe_glass">
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
