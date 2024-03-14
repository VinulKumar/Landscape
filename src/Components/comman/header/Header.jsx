import { Link } from "react-router-dom";
import Logo from "../../../assets/logo-dark.png";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="navbar">
            <div className="logo-sec">
              <img src={Logo} alt="Logo" className="Logo" />
            </div>
            <div className={`nav-links ${isOpen ? "open" : ""}`}>
              <ul>
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/" className="nav-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
