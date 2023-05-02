// CartContext.js
import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  addToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (meal, quantity) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === meal.id);
  
    // Check if item already exists in the cart
    if (existingItemIndex !== -1) {
      // If the item exists, create a new array with updated quantity
      const updatedCartItems = cartItems.map((item, index) => {
        if (index === existingItemIndex) {
          return {
            ...item,
            quantity: item.quantity + Number(quantity),
          };
        }
        return item;
      });
      setCartItems(updatedCartItems);
    } else {
      // If the item doesn't exist, add the new item with the given quantity
      const updatedCartItems = [
        ...cartItems,
        { ...meal, quantity: Number(quantity) },
      ];
      setCartItems(updatedCartItems);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
