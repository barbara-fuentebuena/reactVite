import React, { createContext, useState, useContext, useEffect } from 'react'

export const CartContext = createContext();

export const useCartContext = () => {
  return useContext(CartContext);
};

export const ShoppingCartProvider = ({children}) => {
    const [cart, setCart] = useState(() => {
      const savedCart = localStorage.getItem('cart');
      return savedCart ? JSON.parse(savedCart) : [];
    })

    const addItem = (item, quantity) => {
        const existingItem = cart.find((cartItem) => cartItem.item.id === item.id);
    
    
        if (existingItem) {
          const updatedCart = cart.map((cartItem) =>
            cartItem.item.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + quantity }
              : cartItem
          );
          setCart(updatedCart);
        } else {
          setCart([...cart, { item, quantity }]);
        }
      };
    
      const removeItem = (itemId) => {
        const updatedCart = cart.map((cartItem) =>
          cartItem.item.id === itemId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }  // Reduce the quantity by 1
            : cartItem
        ).filter(cartItem => cartItem.quantity > 0); 

        setCart(updatedCart);
      }
      
    
      const clear = () => {
        setCart([]);
      };
    
      const getTotalQuantity = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
      };

      const getTotalCart = () => {
        return cart;  
      };

    

      useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
      }, [cart]);

    return(
        <CartContext.Provider value={{cart, addItem, removeItem, clear, getTotalQuantity, getTotalCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default ShoppingCartProvider