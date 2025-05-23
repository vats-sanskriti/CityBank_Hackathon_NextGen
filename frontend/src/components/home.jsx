import React from "react";

export default function Home() {
  const username = localStorage.getItem("username");

  return (
    <div className="cart cart1">
      <div style={{ zIndex: 1 }} className="column">
        <div className="top-area">
          <p>Welcome</p>
          <p>to</p>
          <p>CityBank NextGen</p>
        </div>
        <div className="start-your">
          <p>Welcome{username ? `, ${username}` : ""}!</p>
        </div>
        <div className="button-area column">
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