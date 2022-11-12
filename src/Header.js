import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <p>LOGO</p>
      </div>
      <div className="header__navigation">
        <button className="header__navigationButton">Login</button>
        <button className="header__navigationButton">Register</button>
      </div>
    </div>
  );
}

export default Header;
