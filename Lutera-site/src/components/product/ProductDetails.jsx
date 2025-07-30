import React from "react";
import "./ProductDetails.css";

function ProductDetails({ product }) {
  if (!product) {
    return <div className="product-details-empty">Product not found.</div>;
  }

  return (
    <div className="product-details">
      <img
        src={product.image}
        alt={product.name}
        className="product-details-image"
      />
      <div className="product-details-info">
        <h2 className="product-details-title">{product.name}</h2>
        <p className="product-details-price">₹{product.price}</p>
        <p className="product-details-description">{product.description}</p>
        {/* To ddd more product details or actions here */}
      </div>
    </div>
  );
}

export default ProductDetails;