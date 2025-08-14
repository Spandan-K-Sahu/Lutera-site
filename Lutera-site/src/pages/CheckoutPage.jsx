import { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import './CheckoutPage.css'

function CheckoutPage() {
  const navigate = useNavigate()
  const { cart, clearCart } = useContext(CartContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
  })

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      // Here you would typically send the order to your backend
      const orderData = {
        items: cart,
        total,
        customerInfo: formData,
        orderDate: new Date().toISOString()
      }

      // Simulate order processing
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      clearCart()
      navigate('/order-success')
    } catch (error) {
      console.error('Error processing order:', error)
    }
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-form">
          <h2>Checkout</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-section">
              <h3>Contact Information</h3>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Shipping Address</h3>
              <input
                type="text"
                name="address"
                placeholder="Street Address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
              <div className="form-row">
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleInputChange}
                  required
                />
                <input
                  type="text"
                  name="zipCode"
                  placeholder="ZIP Code"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>
            <button type="submit" className="place-order-btn">
              Place Order (₹{total.toFixed(2)})
            </button>
          </form>
        </div>

        <div className="order-summary">
          <h3>Order Summary</h3>
          {cart.map(item => (
            <div key={`${item.id}-${item.size}`} className="summary-item">
              <img src={item.image} alt={item.name} />
              <div className="item-info">
                <h4>{item.name}</h4>
                <p>Size: {item.size}</p>
                {item.color && (
                  <p>
                    Color: <span style={{
                      display: "inline-block",
                      width: "14px",
                      height: "14px",
                      borderRadius: "4px",
                      background: item.color,
                      border: "1px solid #ccc",
                      verticalAlign: "middle",
                      marginLeft: "6px",
                      marginRight: "4px"
                    }}></span>
                    {item.color.charAt(0).toUpperCase() + item.color.slice(1)}
                  </p>
                )}
                <p>Quantity: {item.quantity}</p>
              </div>
              <p className="item-price">₹{(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="total-section">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₹{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage