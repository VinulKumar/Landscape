import React from "react";
import "./Footer.css";
import FooterLogo from "../../../assets/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <div className="footer-logo">
          <img src={FooterLogo} alt="Logo" />
        </div>
        <div className="footer-links">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Garden Care. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
