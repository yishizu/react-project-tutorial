import { useContext, useState, useEffect, useCallback } from "react";
import { Box, Typography, Container } from "@mui/material";
import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./MealItem";
import CartContext from "../../store/CartContext";

const AvailableMealList = () => {
  const [meals, setMeals] = useState([]);

  const fetchData = async () => {
    const response = await fetch(
      "https://react-tutorial-app-16b2e-default-rtdb.firebaseio.com/meals.json"
    );
    const data = await response.json();

    const loadedMeals = [];

    for (const key in data) {
      loadedMeals.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }

    setMeals(loadedMeals);
    console.log(data);
  };

  const cartContext = useContext(CartContext);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Menu</Typography>
        {meals.map((meal) => (
          <MealItem
            key={meal.id}
            meal={meal}
            onAddToCart={cartContext.addToCart}
          />
        ))}
      </Box>
    </Container>
  );
};

export default AvailableMealList;
