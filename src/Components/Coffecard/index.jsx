import React from "react";
import "./style.css";
const Coffecard = ({img,title,text}) => {
  return (
    <div>
      <div className="about_coffe">
        <div>
          <img src={img} />
        </div>
        <div className="coffe_glass">
          <h3>{title}</h3>
          <p>
           {text}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Coffecard;
