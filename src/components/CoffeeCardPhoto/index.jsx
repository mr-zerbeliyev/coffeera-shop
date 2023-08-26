import React from "react";
import CoffeeButton from "../CoffeeButton";
import "./style.css";

const CoffeeCardPhoto = ({ name, price }) => {
  return (
    <div className="coffes">
      <div className="coffes_image">
        <img
          src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/26d42fc0-cimg-01_1000000000000000000028.png"
          alt="Coffee"
        />
      </div>
      <div className="coffes_text">
        <h3>{name}</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod
        </p>
      </div>
      <div className="coffes_price">
        <span>{price}</span>
        <CoffeeButton />
      </div>
    </div>
  );
};

export default CoffeeCardPhoto;
