import React from "react";
import Button from "../Button";

import "./style.css";

const Slide = () => {
  return (
    <section className="slide-wrap">
      <div className="text-wrap">
        <div className="slide-info">
          <h3>Would you like a Cup of Delicious Coffee?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s{" "}
          </p>
          <Button text="Learn More" />
        </div>
      </div>
    </section>
  );
};

export default Slide;
