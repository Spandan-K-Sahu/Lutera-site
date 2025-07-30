import React from "react";
import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products }) {
  return (
    <div className="product-list">
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p className="product-list-empty">No products available.</p>
      )}
    </div>
  );
}

export default ProductList;