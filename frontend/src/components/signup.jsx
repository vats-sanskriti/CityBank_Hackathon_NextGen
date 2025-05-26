import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await fetch("http://localhost:5000/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });
    const data = await res.json();
    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username); // Save username for Home page
      alert("Login successful!");
      navigate("/home"); // <-- Redirect to Home page
    } else {
      setError(data.message || "Login failed");
    }
  } catch (err) {
    alert("Network error");
  }
};

  return (
    <div className="cart cart3">
      <div style={{ zIndex: 1 }} className="column">
        <div className="top-area">
          <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Security</p>
        </div>

        <form onSubmit={handleSubmit} className="log-in-area column">
          <h2>
            <span>New Account</span>
          </h2>

          <label className="column" htmlFor="fullName">
            FULL NAME
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>

          <label className="column" htmlFor="username">
            USER NAME
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>

          <label className="column" htmlFor="email">
            EMAIL
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="column" htmlFor="password">
            PASSWORD
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <div className="button-area column">
            <button type="submit">Sign Up</button>
            <div className="account-area">
              <p>
                Have an account? <Link to="/login">Log in here</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
