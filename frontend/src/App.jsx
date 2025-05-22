import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Intro from "./components/Intro";
import Login from "./components/login.jsx";
import SignUp from "./components/signup.jsx";

export default function App() {
  return (
    <Router> {/* <- Missing in your version */}
      <section id="cart-section">
        <div className="container">
          <div className="row">
            <Routes>
              <Route path="/" element={<Intro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </div>
      </section>
    </Router>
  );
}
