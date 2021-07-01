import React from "react";

import icon1 from "../../shared/images/icon 1.png";
import icon2 from "../../shared/images/icon 2.png";
import icon3 from "../../shared/images/icon 3.png";

import "./ConclusionItems.css";

const ConclusionItems = () => {
  return (
    <React.Fragment>
      <div className="conclusion__item icon1">
        <img src={icon1} alt="icon1" className="conclusion__item__icon"></img>
        <div className="conclusion__item__title">Lorem ipsum</div>
        <div className="conclusion__item__text ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <div className="conclusion__item icon2">
        <img src={icon2} alt="icon2" className="conclusion__item__icon"></img>
        <div className="conclusion__item__title">Lorem ipsum</div>
        <div className="conclusion__item__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>

      <div className="conclusion__item icon3">
        <img src={icon3} alt="icon3" className="conclusion__item__icon"></img>
        <div className="conclusion__item__title">Lorem ipsum</div>
        <div className="conclusion__item__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
      </div>
    </React.Fragment>
  );
};

export default ConclusionItems;
