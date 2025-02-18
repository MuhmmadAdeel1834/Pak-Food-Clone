import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-contianer">
        <div className="footer-contianer-left">
          <img src={assets.logo} alt="" />
          <p>
            Choose from a diverse menu featuring a delection arrys of dishs
            crafted with the finest ingredients and culinary expertise.Our
            mission is to satisfy your cravings
          </p>
          <div className="social-media">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-contianer-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About US</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-contianer-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-123-456-789</li>
            <li> contact@PakFood.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="copyright">
        copyright 2024 Pak Food.com- All right Raserved
      </p>
    </div>
  );
};

export default Footer;
