import React from "react";
import "./CartItem.css";

function CartItem({ item, onRemove, onQuantityChange }) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h4 className="cart-item-title">{item.name}</h4>
        {item.size && <div className="cart-item-size">Size: {item.size}</div>}
        {item.color && (
          <div className="cart-item-color" style={{ margin: "8px 0" }}>
            Color:{" "}
            <span
              style={{
                display: "inline-block",
                width: "16px",
                height: "16px",
                borderRadius: "4px",
                background:
                  item.color === "white"
                    ? "#fff"
                    : item.color === "black"
                    ? "#222"
                    : item.color,
                border: "1px solid #ccc",
                verticalAlign: "middle",
                marginLeft: "6px",
                marginRight: "4px",
                boxShadow:
                  item.color === "white"
                    ? "0 0 0 1px #aaa"
                    : "none",
              }}
            ></span>
            {item.color.charAt(0).toUpperCase() + item.color.slice(1)}
          </div>
        )}
        <div className="cart-item-price">₹{item.price}</div>
        <div className="cart-item-quantity">
          <button
            onClick={() => onQuantityChange(item, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button onClick={() => onQuantityChange(item, item.quantity + 1)}>
            +
          </button>
        </div>
        <button className="cart-item-remove" onClick={() => onRemove(item)}>
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartItem;