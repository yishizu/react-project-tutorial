import React, { useState } from "react";
import { Box, Typography, Container} from "@mui/material";
import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./MealItem";

const AvailableMealList = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (meal, quantity) => {
    const updatedCartItems = [
      ...cartItems,
      { ...meal, quantity: Number(quantity) },
    ];
    setCartItems(updatedCartItems);
  };

  return (

    <Container
      maxWidth="md"
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Menu</Typography>
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} meal={meal} onAddToCart={addToCart} />
        ))}
      </Box>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default AvailableMealList;
