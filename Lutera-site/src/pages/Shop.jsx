import React, { useState } from "react";
import ProductList from "../components/product/ProductList";
import allProducts from "../data/products";
import "./Shop.css";


const teeCategories = [
  "All",
  "Genshin",
  "Classic",
];

const posterCategories = [
  "All",
  "Classic",
  "Genshin",
  "Anime",
];

function Shop() {
  const [section, setSection] = useState("tee");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = section === "tee" ? teeCategories : posterCategories;

  const filteredProducts = allProducts.filter(
    (p) =>
      p.type === section &&
      (selectedCategory === "All" || p.category === selectedCategory)
  );

  return (
    <div className="shop">
      <div className="shop-header">
        <h1>Shop {section === "tee" ? "Tees" : "Posters"}</h1>
        <p>
          {section === "tee"
            ? "Browse our collection and find your perfect tee."
            : "Decorate your space with our awesome posters."}
        </p>
        <div className="shop-sections">
          <button
            className={`section-btn${section === "tee" ? " active" : ""}`}
            onClick={() => {
              setSection("tee");
              setSelectedCategory("All");
            }}
          >
            Tees
          </button>
          <button
            className={`section-btn${section === "poster" ? " active" : ""}`}
            onClick={() => {
              setSection("poster");
              setSelectedCategory("All");
            }}
          >
            Posters
          </button>
        </div>
      </div>
      <div className="category-filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`category-btn${selectedCategory === cat ? " active" : ""}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <a
              href={`/product/${product.id}`}
              className="product-card"
              key={product.id}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <div className="price">₹{product.price}</div>
                <button className="add-to-cart-btn">Add to Cart</button>
              </div>
            </a>
          ))
        ) : (
          <p>No products available in this category.</p>
        )}
      </div>
    </div>
  );
}

export default Shop;