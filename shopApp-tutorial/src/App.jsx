import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Appbar from "./components/Appbar";
import Box from "@mui/material/Box";
import WovenImageList from "./components/WovenImageList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AvailableMealList from "./components/Meals/AvailableMealList";
import TotalCartModal from "./components/Meals/TotalCartModal";
import { CartProvider } from "./store/CartContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF5733", // ここで AppBar の色を指定
    },
  },
});

function App() {
 
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartOpen = () => {
    console.log("handleCartOpen");
    setIsCartOpen(true);
  };

  const handleCartClose = () => {
    setIsCartOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <CartProvider>
        <Appbar onClickCartBtn={handleCartOpen} />
        <Box paddingTop="64px">
          <WovenImageList />
        </Box>
        <Box paddingTop="64px">
          <AvailableMealList />
        </Box>
        <Box paddingTop="64px">
          <TotalCartModal
            isOpen={isCartOpen}
            handleClose={handleCartClose}
            
          />
        </Box>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
