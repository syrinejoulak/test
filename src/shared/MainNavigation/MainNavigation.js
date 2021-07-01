import React from "react";

import logo from "../images/logo aleia.png";
import menu from "../images/Burger Menu.png";

import "./MainNavigation.css";

const MainNavigation = () => {
  return (
    <div className="main-navigation">
      <img src={logo} alt="logo" className="logo"></img>
      <div className="nav">
        <ul className="nav-list">
          <li>About us</li>
          <li>Services</li>
          <li>Careers</li>
          <li>Functions</li>
        </ul>
      </div>
      <div className="nav-opt">
        <button className="nav-btn">Contact us</button>
        <h1 className="nav-language">Fr</h1>
      </div>
      <img src={menu} alt="logo" className="menu"></img>
    </div>
  );
};

export default MainNavigation;
