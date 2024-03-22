import React from "react";
import "../HeaderInside/headerinside.css";
import Logo from "../../assets/logo.svg";

const HeaderInside = () => {
  return (
    <div className="header">
      <div className="header-box">
        <div className="logo">
          <img src={Logo} alt="Logo not available"></img>
        </div>
        <div class="header-btns">
          <button type="button" className="login-btn">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderInside;
