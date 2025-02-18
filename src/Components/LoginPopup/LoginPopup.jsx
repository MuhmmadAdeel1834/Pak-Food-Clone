import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";
const LoginPopup = ({ setshowlogin }) => {
  const [currentState, setState] = useState("Login");
  return (
    <div className="login-popup">
      <form className="login-pupop-contianer">
        <div className="login-pupop-tittle">
          <h2>{currentState}</h2>
          <img
            onClick={() => {
              setshowlogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-pupop-input">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your Name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="password" required />
        </div>
        <button>
          {currentState === "Sign Up" ? "create account" : "Login"}
        </button>
        <div className="login-pupop-condition">
          <input type="checkbox" required />
          <p>By continuing i agree to the tarms of use & privacy policy </p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setState("Sign Up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account account?{" "}
            <span onClick={() => setState("Login")}>login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
