import React from "react";
import "./style.css";
const Instagramcard = ({img}) => {
  return (
    <div className="insta_photo">
      <img src={img} />
    </div>
  );
};
export default Instagramcard;
