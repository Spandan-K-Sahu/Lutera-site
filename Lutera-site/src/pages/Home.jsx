import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import allProducts from "../data/products";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        right: "-60px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 3,
        background: "#fff",
        borderRadius: "8px",
        width: "54px",
        height: "54px",
        cursor: "pointer",
        fontSize: "2.2rem",
        color: "#00a68a",
      }}
      onClick={onClick}
      aria-label="Next"
    >
      ▶
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        left: "-60px",
        top: "50%",
        transform: "translateY(-50%)",
        zIndex: 3,
        background: "#fff",
        borderRadius: "8px",
        width: "54px",
        height: "54px",
        cursor: "pointer",
        fontSize: "2.2rem",
        color: "#00a68a",
      }}
      onClick={onClick}
      aria-label="Previous"
    >
      ◀
    </div>
  );
}
function Home() {
  const tees = allProducts.filter(p => p.type === "tee").slice(0, 6);
  const posters = allProducts.filter(p => p.type === "poster").slice(0, 3);
  const arrivals = [...tees, ...posters];

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: true,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  autoplay: true,         
  autoplaySpeed: 5000,   
  responsive: [
    { breakpoint: 900, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } }
  ]
};


  return (
    <div className="home">
      <section className="hero hero-vibe">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-brand">
            <img src="\src\assets\images\luteramerch.png"
            alt="lutera-logo"
            className="logo-img"/>Lutera Merch</div>
            <h1>
            <div className="big-text align-left">FIND</div>
            <div className="big-text align-center">YOUR</div>
            <div className="big-text align-right">VIBE</div>
            </h1>
          </div>
          <div className="hero-right">
  <div className="tshirt-stack">
    <img
      src="\src\assets\images\Tshirt.png"
      alt="Tshirt"
      className="tshirt-img tshirt-front"
    />
    <img
      src="\src\assets\images\NeuviTshirt.png"
      alt="TshirtBack"
      className="tshirt-img tshirt-back"
    />
  </div>
</div>
        </div>
      </section>
      <section className="hero hero-proud-row">
  <div className="hero-proud-row-content">
    <Link to="/shop" className="explore-btn">
      EXPLORE HERE
    </Link>
    <div className="hero-proud-meta">
      <h2>
        WHERE <br />
        THE MERCH <br />
        MEETS META
      </h2>
    </div>
  </div>
</section>
      <section className="features-section">
        <div className="features-list">
          <div className="feature-item">
            <img src="/src/assets/images/WindWheelAster.png" alt="Wind Wheel Aster" className="feature-icon" />
            <div className="feature-label">
              FOR REAL-WORLD<br />TRAVELERS
            </div>
          </div>
          <div className="feature-item">
            <img src="/src/assets/images/AcquaintFate.png" alt="Acquaint Fate" className="feature-icon" />
            <div className="feature-label">
              DRESS LIKE YOU JUST<br />PULLED A 5-STAR
            </div>
          </div>
          <div className="feature-item">
            <img src="/src/assets/images/Noqiqi.png" alt="No qiqi" className="feature-icon" />
            <div className="feature-label">
              GUARANTEED STYLE<br />NO 50/50s HERE
            </div>
          </div>
        </div>
      </section>
<section className="new-arrivals-section">
  <h2 className="new-arrivals-title">NEW ARRIVALS</h2>
  <Slider {...sliderSettings}>
    {arrivals.map(product => (
      <Link
        to={`/product/${product.id}`}
        key={product.id}
        className="arrival-card-link"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="arrival-card">
          <img src={product.image} alt={product.name} className="arrival-img" />
          <div className="arrival-info">
            <div className="arrival-name">{product.name}</div>
            <div className="arrival-price">₹{product.price}</div>
            <div className="arrival-type">{product.type.toUpperCase()}</div>
          </div>
        </div>
      </Link>
    ))}
  </Slider>
</section>
    </div>
  );
}

export default Home;