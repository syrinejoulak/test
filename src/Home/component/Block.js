import React from "react";

import "./Block.css";

const Block = () => {
  return (
    <div className="block">
      <div className="block__left">
        Good luck about this block. Don’t forget to respect the different
        breakpoints
      </div>
      <div className="block__right">
        <div className="block__right__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </div>
        <button className="block__right__btn">Hang in there</button>
      </div>
    </div>
  );
};

export default Block;
