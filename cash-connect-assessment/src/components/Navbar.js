import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Cash Connect</h2>
      <div>
        <Link to="/">Palindrome</Link>
        <Link to="/settlement">Settlement</Link>
      </div>
    </nav>
  );
}

export default Navbar;
