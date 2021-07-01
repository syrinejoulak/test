import React from "react";

import trait from "../../shared/images/trait.png";

import "./Conclusion.css";
import ConclusionItems from "./ConclusionItems";

const Conclusion = () => {
  return (
    <div className="conclusion">
      <img src={trait} alt="trait" className="trait"></img>
      <div className="conclusion__title">
        Don’t forget about the spacing! It’s very important
      </div>
      <div className="conclusion__container">
        <ConclusionItems />
      </div>
      <button className="conclusion__btn">
        It’s almost done, don’t give up
      </button>
    </div>
  );
};

export default Conclusion;
