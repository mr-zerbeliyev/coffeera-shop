import React from "react";
import Icon from "../../assets/icon1.png";
import "./style.css";

const Info = ({ title, description }) => {
  return (
    <div className="coffe_info">
      <img src={Icon} alt="Info" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};
export default Info;
