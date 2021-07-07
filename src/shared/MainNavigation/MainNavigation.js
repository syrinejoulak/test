import React, { useState } from "react";

import logo from "../images/logo aleia.png";
import menu from "../images/Burger Menu.png";

import Backdrop from "../UIElements/Backdrop";
import SideDrawer from "./SideDrawer";

import "./MainNavigation.css";

const MainNavigation = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const openDrawerHandler = () => {
    setDrawerIsOpen(true);
  };

  const closeDrawerHandler = () => {
    setDrawerIsOpen(false);
  };
  return (
    <React.Fragment>
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
        <img
          src={menu}
          alt="menu-burger"
          className="menu"
          onClick={openDrawerHandler}
        ></img>
      </div>
      {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}

      <SideDrawer show={drawerIsOpen} onClick={closeDrawerHandler}>
        <nav className="main-navigation__drawer-nav">
          <ul className="nav-list__side-drawer">
            <li>About us</li>
            <li>Services</li>
            <li>Careers</li>
            <li>Functions</li>
          </ul>
        </nav>
      </SideDrawer>
    </React.Fragment>
  );
};

export default MainNavigation;
