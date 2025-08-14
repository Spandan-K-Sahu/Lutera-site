import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "./Header.css";

function Header() {
  const { getCartItemCount } = useContext(CartContext);
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="header-logo">
        <img
            src="\src\assets\images\GoliLuteraPfp.png"
            alt="logo"
            className="logo-img"
          />
          GOLI LUTERA
        </Link>
        <nav className="header-nav">
          <NavLink to="/" className="header-link" end>
            Home
          </NavLink>
          <NavLink to="/shop" className="header-link">
            Shop
          </NavLink>
          <NavLink to="/cart" className="header-link header-cart-link">
            Cart
            <span className="header-cart-count">{getCartItemCount()}</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;