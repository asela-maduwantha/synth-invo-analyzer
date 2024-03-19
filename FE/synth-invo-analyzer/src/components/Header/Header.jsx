import React from "react";
import "../Header/header.css";
import Logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div class="header">
      <div class="header-box">
        <div class="logo">
          <img src={Logo} alt="Logo not available"></img>
        </div>
        <div class="header-btns">
          <button type="button" class="login-btn">
            Login
          </button>
          <Link to ='/signup' type="button" class="signup-btn">
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
