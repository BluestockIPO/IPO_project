import React from "react";
import "./Navbar.css"; 

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left: Logo */}
      <div className="navbar-logo">
        <img src="src/assets/bluestock-logo.png" alt="Bluestock" />
      </div>

      {/* Middle: Navigation Links */}
      <ul className="navbar-links">
        <li><a href="#">Products</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a href="#">Community</a></li>
        <li><a href="#">Media</a></li>
        <li><a href="#">Support</a></li>
      </ul>

      {/* Right: Sign In / Sign Up */}
      <div className="navbar-buttons">
        <button className="signin-button">Sign In</button>
        <button className="signup-button">Sign Up Now</button>
      </div>
    </nav>
  );
};

export default Navbar;
