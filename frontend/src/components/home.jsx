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

  // Separate state for hover info
  const [riskHover, setRiskHover] = useState(undefined);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Values (to backend):", form);
    // fetch("/api/submit", { method: "POST", body: JSON.stringify(form) })
  };

  return (
    <div className="cart cart2">
      <div style={{ zIndex: 1 }} className="column">
    <header
  className="top-area"
  style={{
    marginBottom: "24px",
    marginLeft:"0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 32px",
    borderRadius: "24px",
    background: "rgba(43, 48, 84, 0.45)",
    boxShadow: "0 4px 24px 0 rgba(31, 38, 135, 0.17)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.18)"
  }}
>
  <span
    style={{
      fontWeight: "bold",
      fontSize: "1.5rem",
      color: "#fff",
      letterSpacing: "1px",
      textShadow: "0 2px 8px #4b76e7a0"
    }}
  >
    Welcome{username ? ` ${username}` : ""}
  </span>
  <button
    onClick={() => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      window.location.href = "/login";
    }}
    style={{
      padding: "12px 28px",
      background: "linear-gradient(90deg, #ff6ec4 0%, #7873f5 100%)",
      color: "#fff",
      border: "none",
      cursor: "pointer",
      fontSize: "1rem",
      borderRadius: "40px",
      fontWeight: 700,
      boxShadow: "0 2px 16px #703dd055",
      transition: "background 0.3s, transform 0.2s"
    }}
  >
    Log Out
  </button>
</header>
      
        {/* FORM STARTS HERE */}
        <form className="column" onSubmit={handleSubmit} style={{ gap: "20px", marginTop: "20px" }}>
          <label>
            Age Group:
            <select name="age" value={form.age} onChange={handleChange} style={{ marginLeft: "20px" }}>
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
            <select name="educ" value={form.educ} onChange={handleChange} style={{ marginLeft: "20px" }}>
              <option value="" disabled>Select education</option>
              <option value="1">Up to 10th</option>
              <option value="2">12th / Higher Secondary</option>
              <option value="3">Bachelor / Equivalent</option>
              <option value="4">Postgraduate / PhD</option>
            </select>
          </label>

          <label>
            Marital Status:
            <select name="married" value={form.married} onChange={handleChange} style={{ marginLeft: "20px" }}>
              <option value="" disabled>Select status</option>
              <option value="1">Married</option>
              <option value="2">Unmarried</option>
            </select>
          </label>

          <label>
            Occupation:
            <select name="occu" value={form.occu} onChange={handleChange} style={{ marginLeft: "20px" }}>
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
              style={{ marginLeft: "20px" }}
  />
          
          </label>

          <label>
            Net Worth Category:
            <select name="nwcat" value={form.nwcat} onChange={handleChange} style={{ marginLeft: "20px" }}>
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
            <select name="inccl" value={form.inccl} onChange={handleChange} style={{ marginLeft: "20px" }}>
              <option value="" disabled>Select income category</option>
              <option value="1">Below ₹10,000</option>
              <option value="2">₹10,000–₹30,000</option>
              <option value="3">₹30,000–₹60,000</option>
              <option value="4">₹60,000–₹100,000</option>
              <option value="5">Above ₹100,000</option>
            </select>
          </label>

<label style={{ display: "block" }}>
  Risk Willingness:
  <div style={{ display: "flex", gap: "24px", marginTop: "10px" }}>
    {[1, 2, 3, 4].map((level) => (
      <div
        key={level}
        style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <input
          type="radio"
          name="risk"
          checked={form.risk === String(level)}
          onChange={() => setForm((prev) => ({ ...prev, risk: String(level) }))}
          onMouseEnter={() => setRiskHover(level)}
          onMouseLeave={() => setRiskHover(undefined)}
          style={{ width: "22px", height: "22px", cursor: "pointer" }}
        />
        <span style={{ fontWeight: "bold", marginTop: "4px" }}>
          Level {level}
        </span>
      </div>
    ))}
  </div>
  <div style={{
    fontSize: "1rem",
    color: "#444",
    minHeight: "22px",
    marginTop: "10px",
    fontWeight: "bold",
    transition: "color 0.2s"
  }}>
    {(() => {
      const level = riskHover ?? (form.risk ? Number(form.risk) : null);
      if (!level) return "";
      if (level === 1) return "High Risk";
      if (level === 2) return "Moderate-High Risk";
      if (level === 3) return "Low-Moderate Risk";
      if (level === 4) return "Low Risk";
      return "";
    })()}
  </div>
</label>
 <div className="button-area column" style={{ marginTop: "20px" }}>
          <button
            onClick={() => {
            }}
          >
            Submit
          </button>
        </div>
        </form>

        {/* LOGOUT BUTTON */}
     
      </div>
    </div>
  );
}