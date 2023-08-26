import React from "react";
import ContactCard from "../ContactCard";

import "./style.css";

const Footer = () => {
  return (
    <div id="contact" className="footer">
      <div className="footer_texts">
        <div className="footer_text1">
          <h3>Coffeera</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            purus sed fames cursus. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Feugiat purus sed fames cursus.
          </p>
          <div className="footer_icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
        </div>
        <div className="footer_texts2">
          <h3>Get in Touch</h3>
          <div className="contacts">
            <ContactCard
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/7b9d25ec-phone55_101e01e000000000000028.png"
              contact="Call Us"
              information="+01 234 567"
            />
            <ContactCard
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/eef888bc-mailbox55_101e01e000000000000028.png"
              contact="E-mail"
              information="info@domain.com"
            />
            <ContactCard
              img="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/054a0155-placeholder55_101e01e000000000000028.png"
              contact="Address"
              information="72, Wall street, King Road, NY 20110"
            />
          </div>
        </div>
      </div>
      <div className="maps">
        <div className="map">
          <button>Shop 1</button>
          <iframe title="shop-1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99938.2548040086!2d27.102412799999996!3d38.486016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1saz!2str!4v1687933216942!5m2!1saz!2str"></iframe>
        </div>
        <div className="map">
          <button>Shop 2</button>
          <iframe title="shop-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99938.2548040086!2d27.102412799999996!3d38.486016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1saz!2str!4v1687933216942!5m2!1saz!2str"></iframe>
        </div>
      </div>
      <div className="copyright">
        <h3>
          © 2021 Copyright <span>Coffeesra.</span> All Rights Reserved.
        </h3>
      </div>
    </div>
  );
};
export default Footer;
