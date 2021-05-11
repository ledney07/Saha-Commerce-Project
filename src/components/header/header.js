import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          Shop
        </Link>
        <Link className="option" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Header;
