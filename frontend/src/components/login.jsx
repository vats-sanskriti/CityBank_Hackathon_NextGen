import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
    if (res.ok && data.token) {
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.username); 
      alert("Login successful!");
      navigate("/home"); 
    } else {
      setError(data.message || "Login failed");
    }
    } catch (err) {
      setError("Network error");
    }
  };

  return (
    <div className="cart cart2">
      <div style={{ zIndex: 1 }} className="column">
        <div className="top-area">
          {/* <p>About Us</p>
          <p>Terms & Conditions</p>
          <p>Security</p> */}
        </div>
        <form className="log-in-area column" onSubmit={handleSubmit}>
          <h2>Log in</h2>
          {error && <div style={{ color: "red" }}>{error}</div>}
          <label className="column">
            USER NAME
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </label>
          <label className="column">
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
            <button type="submit">Log in</button>
            <div className="account-area">
              <p>
                Don't have an account? <Link to="/signup">Sign up here</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}