import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <div>
      <div id="footerDiv">
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
}
