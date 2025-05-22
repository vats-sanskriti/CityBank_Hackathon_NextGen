import React from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function Login() {
  return (
    <div className="cart cart2">
      <div style={{ zIndex: 1 }} className="column">
        <div className="top-area">
          <p>about us</p>
          <p>terms & conditions</p>
          <p>security</p>
        </div>
        <div className="log-in-area column">
          <h2>Log in</h2>
          <label className="column" htmlFor="">
            USER NAME
            <input type="text" defaultValue="" />
          </label>
          <label className="column" htmlFor="">
            PASSWORD
            <input type="password" defaultValue="" />
          </label>
        </div>
        <div className="button-area column">
          <button>Log in</button>
          <div className="account-area">
            <p>
              Don't have an account? <Link to="/signup">Sign up here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
