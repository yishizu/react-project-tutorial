import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Appbar from "./components/Appbar";
import Box from "@mui/material/Box";
import WovenImageList from "./components/WovenImageList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AvailableMealList from "./components/Meals/AvailableMealList";
import TotalCartModal from "./components/Meals/TotalCartModal";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5733", // ここで AppBar の色を指定
    },
  },
});

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    console.log("handleCartOpen");
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  const addToCart = (meal, quantity) => {
    // Find index of the existing item in the cart
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
  }

  console.log(cartItems)

  return (
    <ThemeProvider theme={theme}>
      <Appbar onClickCartBtn={handleCartOpen} cartItems={cartItems}/>
      <Box paddingTop="64px">
        <WovenImageList />
      </Box>
      <Box paddingTop="64px">
        <AvailableMealList addToCart={addToCart} />
      </Box>
      <Box paddingTop="64px">
        <TotalCartModal
          isOpen={isCartOpen}
          handleClose={handleCartClose}
          cartItems={cartItems}
        />
      </Box>
    </ThemeProvider>
  );
}

export default App;
