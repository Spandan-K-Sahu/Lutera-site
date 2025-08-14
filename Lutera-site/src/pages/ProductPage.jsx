import { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import allProducts from "../data/products";
import { CartContext } from '../context/CartContext'
import './ProductPage.css'

function ProductPage() {
  const { id } = useParams()
  const product = allProducts.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedColor, setSelectedColor] = useState('black');
  const [quantity, setQuantity] = useState(1)
  const [mainImageIdx, setMainImageIdx] = useState(0)
  const { addToCart } = useContext(CartContext)

  const sizes = ['L', 'XL', 'XXL', 'XXXL']

  if (!product) return <div>Product not found</div>;

  const images = product.images && product.images.length > 0
    ? product.images
    : [product.image];

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size')
      return
    }
    addToCart({
      ...product,
      size: selectedSize,
      quantity,
      color: selectedColor
    })
  }

  return (
    <div className="product-page">
      <div className="product-container">
        <div className="product-images">
          <img 
            src={images[mainImageIdx]} 
            alt={product.name} 
            className="main-image"
          />
          <div className="thumbnail-images">
            {images.map((img, index) => (
              <img 
                key={index}
                src={img} 
                alt={`${product.name} view ${index + 1}`}
                style={{
                  border: mainImageIdx === index ? '2px solid #000' : '1px solid #ddd',
                  opacity: mainImageIdx === index ? 1 : 0.7
                }}
                onClick={() => setMainImageIdx(index)}
              />
            ))}
          </div>
        </div>

        <div className="product-details">
          <h1>{product.name}</h1>
          <p className="price">₹{product.price}</p>
          <p className="description">{product.description}</p>
          <div className="color-selector">
            <h3>Select Color</h3>
            <div className="color-options">
              <button
                className={`color-btn${selectedColor === 'black' ? ' active' : ''}`}
                style={{ background: '#222', color: '#fff' }}
                onClick={() => setSelectedColor('black')}
              >
                Black
              </button>
              <button
                className={`color-btn${selectedColor === 'white' ? ' active' : ''}`}
                style={{ background: '#fff', color: '#222'}}
                onClick={() => setSelectedColor('white')}
              >
                White
              </button>
            </div>
          </div>

          <div className="size-selector">
            <h3>Select Size</h3>
            <div className="size-options">
              {sizes.map(size => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <h3>Quantity</h3>
            <div className="quantity-controls">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button 
                onClick={() => setQuantity(prev => prev + 1)}
              >
                +
              </button>
            </div>
          </div>

          <button 
            className="add-to-cart-btn"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
{product.details && (
  <div className="product-details-section">
    <h3>Product Features</h3>
    <ul>
      {product.details.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  </div>
)}
        </div>
      </div>
    </div>
  )
}

export default ProductPage