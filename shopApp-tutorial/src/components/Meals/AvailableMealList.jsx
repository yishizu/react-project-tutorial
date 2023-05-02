import { useContext } from "react";
import { Box, Typography, Container} from "@mui/material";
import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./MealItem";
import CartContext from "../../store/CartContext";

const AvailableMealList = () => {
  


    const cartContext = useContext(CartContext);
    
  return (

    <Container
      maxWidth="md"
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Menu</Typography>
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} meal={meal} onAddToCart={cartContext.addToCart} />
        ))}
      </Box>
      
    </Container>
  );
};

export default AvailableMealList;
