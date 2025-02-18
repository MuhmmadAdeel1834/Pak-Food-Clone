import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Outlet, Link } from "react-router-dom";
import { Storecontext } from "../../context/Storecontext";
const Navbar = ({ setshowlogin }) => {
  const [menu, setmenu] = useState("home");
  const { getTotalCartAmount } = useContext(Storecontext);
  return (
    <div className="navbar">
      <Link to="/">
        {" "}
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="mainmenu">
        <Link
          to="/"
          onClick={() => setmenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => setmenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a
          href="#app-download"
          onClick={() => setmenu("moblie-App")}
          className={menu === "moblie-App" ? "active" : ""}
        >
          moblie-App
        </a>
        <a
          href="#footer"
          onClick={() => setmenu("contact-us")}
          className={menu === "contact-us" ? "active" : ""}
        >
          contact-us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/Card">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmount() === 0 ? " " : "dot"}></div>
        </div>
        <button onClick={() => setshowlogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Navbar;
