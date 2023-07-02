import React from "react";
import "./style.css";

const InstagramCard = ({ img }) => {
  return (
    <div className="insta_photo">
      <img src={img} />
    </div>
  );
};

export default InstagramCard;
