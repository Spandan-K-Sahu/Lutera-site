import { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : []
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(
        item => item.id === product.id && item.size === product.size
      )

      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        )
      }

      return [...currentCart, { ...product, quantity: product.quantity || 1 }]
    })
  }

  const removeFromCart = (product) => {
    setCart(currentCart => 
      currentCart.filter(item => 
        !(item.id === product.id && item.size === product.size)
      )
    )
  }

  const updateQuantity = (product, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(product)
      return
    }

    setCart(currentCart =>
      currentCart.map(item =>
        item.id === product.id && item.size === product.size
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0)
  }

  const getCartItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  const value = {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}