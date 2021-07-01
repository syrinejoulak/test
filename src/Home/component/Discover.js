import React from "react";

import font from "../../shared/images/fond 1.png";

import "./Discover.css";

const Discover = () => {
  return (
    <div className="discover">
      <img src={font} alt="font" className="discover__font"></img>
      <div className="discover__text-container">
        <div className="discover__title">BE CAREFUL TO RESPECT THE DESIGN!</div>
        <div className="discover__text">
          Technologies : HTML CSS JS Détail des specs front : Zeplin 3 maquettes
          desktop, tablet et mobile, 2 breakpoints Desktop/ tablet : 1200px
          (Desktop) / 1199 tablet Tablet / Mobile : 600px (Tablet) / 599
          (mobile)
        </div>
        <button className="discover__btn">Let's discover</button>
      </div>
    </div>
  );
};

export default Discover;
