import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty</h2>
        <Link to="/shop" className="cart-shop-link">Go to Shop</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cart.map((item) => (
          <CartItem
            key={item.id + (item.size || "")}
            item={item}
            onRemove={removeFromCart}
            onQuantityChange={updateQuantity}
          />
        ))}
      </div>
      <div className="cart-summary">
        <div className="cart-total">
          Total: <span>₹{getCartTotal().toFixed(2)}</span>
        </div>
        <Link to="/checkout" className="cart-checkout-btn">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}

export default Cart;