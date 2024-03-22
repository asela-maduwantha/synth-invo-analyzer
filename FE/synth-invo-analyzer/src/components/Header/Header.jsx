import React from "react";
import "../Header/header.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="header-box">
        <div className="logo">
          <img src={Logo} alt="Logo not available"></img>
        </div>
        <div className="header-btns">
          <button type="button" class="login-btn">
            Login
          </button>
          <Link to ='/signup' type="button" className="signup-btn">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
