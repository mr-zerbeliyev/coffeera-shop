import React from "react";
import "./style.css";

const ContactCard = ({ img, contact, information }) => {
  return (
    <div className="contact">
      <div className="contact_img">
        <img src={img} alt="Contact" />
      </div>
      <div className="contact_phone">
        <span>{contact}</span>
        <p>{information}</p>
      </div>
    </div>
  );
};

export default ContactCard;
