import React from "react";
import "./style.css";
import Button from "../Button";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <ul className="navbar">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
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
