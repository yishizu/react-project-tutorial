import { useContext, useState, useEffect, useCallback } from "react";
import { Box, Typography, Container,CircularProgress } from "@mui/material";
// import DUMMY_MEALS from "./dummy-meals";
import MealItem from "./MealItem";
import CartContext from "../../store/CartContext";

const AvailableMealList = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        "https://react-tutorial-app-16b2e-default-rtdb.firebaseio.com/meals.json"
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

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
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  const cartContext = useContext(CartContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Container maxWidth="md">
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h4">Menu</Typography>
        {isLoading && (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
            <CircularProgress />
          </Box>
        )}
        {error && (
          <Typography variant="h4" sx={{ mt: 4, textAlign: "center" }}>
            An error occurred!
          </Typography>
        )}
        {!isLoading && !error && meals.length > 0 && 
            meals.map((meal) => (
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
