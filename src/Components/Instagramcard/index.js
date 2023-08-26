import React from "react";
import "./style.css";

const InstagramCard = ({ img }) => {
  return (
    <div className="insta_photo">
      <img alt="InstagramCard" src={img} />
    </div>
  );
};

export default InstagramCard;
