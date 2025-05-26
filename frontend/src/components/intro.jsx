import React from "react";
import { Link } from "react-router-dom";


export default function Intro() {
  return (
    <div className="cart cart1">
      <div style={{ zIndex: 1 }} className="column">
        <div className="top-area">
          <p>About us</p>
          <p>Terms & Conditions</p>
          <p>Security</p>
        </div>
        <div className="start-your">
          <p>Start</p>
          <p>Your Growth</p>
          <p>Now</p>
        </div>
        <div className="button-area column">
      <Link to="/signup">
          <button>Sign Up</button>
        </Link>        
    <div className="account-area">
           <p>Have account? <Link to="/login">Log in here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
