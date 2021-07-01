import React from "react";

import facebook from "../images/facebook.png";
import linkedin from "../images/linked in.png";
import twitter from "../images/twitter.png";

import "./Footer.css";
import logo from "../images/logo aleia.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__items">
        <img src={logo} alt="logo" className="footer__logo"></img>
        <div className="footer__email">
          <div className="footer__email__title">
            Send us your email to stay tuned
          </div>
          <form className="form">
            <input
              type="email"
              placeholder="yourmail@email.com"
              name="email"
              className="email-input"
            ></input>
            <button className="email-btn">xoxo</button>
          </form>
          <div className="copyright">© 2020. All rights reserved.</div>
        </div>
        <div className="footer__social-media">
          <div className="footer__social-media__title">Follow us</div>
          <div className="footer__social-media__icons">
            <img
              src={facebook}
              alt="facebook"
              className="footer__social-media__icon"
            ></img>
            <img
              src={linkedin}
              alt="linkedin"
              className="footer__social-media__icon"
            ></img>
            <img
              src={twitter}
              alt="twitter"
              className="footer__social-media__icon"
            ></img>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default Footer;
