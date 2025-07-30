import React from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <Link to={`/product/${product.id}`}>
        <img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />
        <div className="product-card-info">
          <h3 className="product-card-title">{product.name}</h3>
          <p className="product-card-price">₹{product.price}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductCard;