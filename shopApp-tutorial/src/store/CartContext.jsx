// CartContext.js
import { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  cartItemNum: 0,
  cartTotalCost: 0,
  addToCart: () => {},
  removeItemFromCart: () => {},
  updateItemQuantityInCart: () => {}, 
});

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const removeItemFromCart = (itemId) => {
    setCartItems((prevState) => prevState.filter((item) => item.id !== itemId));
  };
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

  const updateItemQuantityInCart = (itemId, newQuantity) => { // 追加
    setCartItems((prevCartItems) => {
      return prevCartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
    });
  };


  const cartTotalCost = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const cartItemNum = cartItems.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart , cartTotalCost,cartItemNum, removeItemFromCart, updateItemQuantityInCart}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
