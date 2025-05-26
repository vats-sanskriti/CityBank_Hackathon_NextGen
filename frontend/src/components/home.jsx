import React, { useState } from "react";

export default function Home() {
  const username = localStorage.getItem("username");

  const [form, setForm] = useState({
    age: "",
    educ: "",
    married: "",
    occu: "",
    kids: "",
    nwcat: "",
    inccl: "",
    risk: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Values (to backend):", form);
    // You can send this to your backend API like this:
    // fetch("/api/submit", { method: "POST", body: JSON.stringify(form) })
  };

  return (
    <div className="cart cart1"
    style={{
        minWidth: "350px",
        maxWidth: "800px",
        margin: "30px auto",
        padding: "32px 24px",
        borderRadius: "16px",
        background: "#fff",
        boxShadow: "0 4px 24px rgba(44,62,80,0.08)",
        minHeight: "70vh",
        maxHeight: "none",
        overflowY: "auto",
        fontFamily: "Segoe UI, Arial, sans-serif",
        color: "black",
        fontSize: "1.15rem"
      }}>
      <div style={{ zIndex: 1 }} className="column">
        {/* <div className="top-area">
          <p>Welcome</p>
          <p>to</p>
          <p>CityBank NextGen</p>
        </div>
        <div className="start-your">
          <p>Welcome{username ? `, ${username}` : ""}!</p>
        </div> */}
        <div className="top-area" style={{ marginBottom: "18px" }}>
  <p
    style={{
      fontWeight: "bold",
      fontSize: "1.7rem",
      color: "black",
      textAlign: "center",
      letterSpacing: "1px",
      margin: 0,
      fontFamily: "'Segoe UI', Arial, sans-serif"
    }}
  >
    Welcome{username ? `, ${username}` : ""} 
  </p>
</div>

        {/* FORM STARTS HERE */}
        <form className="column" onSubmit={handleSubmit} style={{ gap: "10px", marginTop: "20px" }}>
          <label>
            Age Group:
            <select name="age" value={form.age} onChange={handleChange}>
              <option value="" disabled>Select age group</option>
              <option value="1">Less than 35</option>
              <option value="2">35-44</option>
              <option value="3">45-54</option>
              <option value="4">55-64</option>
              <option value="5">65-74</option>
              <option value="6">75 and above</option>
            </select>
          </label>

          <label>
            Education:
            <select name="educ" value={form.educ} onChange={handleChange}>
              <option value="" disabled>Select education</option>
              <option value="1">Up to 10th</option>
              <option value="2">12th / Higher Secondary</option>
              <option value="3">Bachelor / Equivalent</option>
              <option value="4">Postgraduate / PhD</option>
            </select>
          </label>

          <label>
            Marital Status:
            <select name="married" value={form.married} onChange={handleChange}>
              <option value="" disabled>Select status</option>
              <option value="1">Married</option>
              <option value="2">Unmarried</option>
            </select>
          </label>

          <label>
            Occupation:
            <select name="occu" value={form.occu} onChange={handleChange}>
              <option value="" disabled>Select occupation</option>
              <option value="1">Managerial</option>
              <option value="2">Technical</option>
              <option value="3">Clerical</option>
              <option value="4">Unemployed</option>
            </select>
          </label>

          <label>
            Number of Dependents:
            <input
              type="number"
              name="kids"
              value={form.kids}
              onChange={handleChange}
              min="0"
              placeholder="Enter No. of dependents"
            />
          </label>

          <label>
            Net Worth Category:
            <select name="nwcat" value={form.nwcat} onChange={handleChange}>
              <option value="" disabled>Select net worth category</option>
              <option value="1">Below 25th percentile</option>
              <option value="2">25th–50th percentile</option>
              <option value="3">50th–75th percentile</option>
              <option value="4">75th–90th percentile</option>
              <option value="5">Above 90th percentile</option>
            </select>
          </label>

          <label>
            Income Category:
            <select name="inccl" value={form.inccl} onChange={handleChange}>
              <option value="" disabled>Select income category</option>
              <option value="1">Below ₹10,000</option>
              <option value="2">₹10,000–₹30,000</option>
              <option value="3">₹30,000–₹60,000</option>
              <option value="4">₹60,000–₹100,000</option>
              <option value="5">Above ₹100,000</option>
            </select>
          </label>

          <label>
            Risk Willingness:
            <input
              type="range"
              name="risk"
              value={form.risk}
              min="1"
              max="4"
              onChange={handleChange}
              placeholder="Select risk level"
            />
            <br></br>
            <span>Level:(1 = High Risk, 4 = Low Risk) </span>
          </label>

          <button type="submit">Submit</button>
        </form>

        {/* LOGOUT BUTTON */}
        <div className="button-area column" style={{ marginTop: "20px" }}>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("username");
              window.location.href = "/login";
            }}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}