import React from "react";
import "./style.css";
import Coffebutton from "../Coffebutton";

const Coffecardphoto = ({name,price}) => {
  return (
    <div className="coffes">
      <div className="coffes_image">
        <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/26d42fc0-cimg-01_1000000000000000000028.png" />
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
        <Coffebutton/>

      </div>
    </div>
  );
};
export default Coffecardphoto;
