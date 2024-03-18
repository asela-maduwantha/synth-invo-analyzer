import React from "react";
import "../HeaderInside/headerinside.css";
import Logo from "../../assets/logo.svg";

const HeaderInside = () => {
  return (
    <div class="header">
      <div class="header-box">
        <div class="logo">
          <img src={Logo} alt="Logo not available"></img>
        </div>
        <div class="header-btns">
          <button type="button" class="login-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderInside;
