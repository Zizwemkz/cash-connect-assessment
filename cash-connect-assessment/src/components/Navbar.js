import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Cash Connect</h1>
      <div>
        <Link to="/">Palindrome</Link>
        <Link to="/settlement">Settlement</Link>
      </div>
    </nav>
  );
}

export default Navbar;
