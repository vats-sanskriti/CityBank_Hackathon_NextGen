import React from "react";
import { Link } from "react-router-dom";


export default function Intro() {
  return (
    <div className="cart cart1">
      <div style={{ zIndex: 1 }} className="column">
        <div className="top-area">
          <p>about us</p>
          <p>terms & conditions</p>
          <p>security</p>
        </div>
        <div className="start-your">
          <p>Start</p>
          <p>Your Growth</p>
          <p>Now</p>
        </div>
        <div className="button-area column">
          <button>Sign Up</button>
          <div className="account-area">
           <p>Have account? <Link to="/login">Log in here</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
}
