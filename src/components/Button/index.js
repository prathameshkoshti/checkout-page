import React from "react";
import "./style.css";

function index({ onClick, label, classes }) {
  return (
    <button onClick={onClick} className={`button ${classes}`}>
      {label}
    </button>
  );
}

index.displayName = "Button";

export default index;