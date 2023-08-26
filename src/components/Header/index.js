import React from "react";
import Button from "../Button";

import "./style.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="navbar">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <a href="#contact"> Contact Us</a>
            </li>
          </ul>
        </nav>
        <div className="coffera">
          <h3>Coffeera</h3>
        </div>
        <div className="btn-wrap">
          <Button text="Shop Now" />
        </div>
        <div className="menu">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
};

export default Header;
