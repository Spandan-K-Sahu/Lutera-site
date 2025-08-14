import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-link" end>
        Home
      </NavLink>
      <NavLink to="/shop" className="navbar-link">
        Shop
      </NavLink>
      <NavLink to="/cart" className="navbar-link">
        Cart
      </NavLink>
    </nav>
  );
}

export default Navbar;