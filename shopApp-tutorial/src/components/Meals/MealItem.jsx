import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

const MealItem = ({ meal, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
  };

  const handleAddToCart = () => {
    onAddToCart(meal, quantity);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: 2,
        border: 1, // Add border
        borderColor: "grey.300", // Set border color
        borderRadius: 1, // Add rounded corners
        padding: 2, // Add padding
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <Typography variant="h6">{meal.name}</Typography>
        <Typography variant="body2">{meal.description}</Typography>
        <Typography variant="body1">${meal.price.toFixed(2)}</Typography>
      </Box>
      <TextField
        label="Quantity"
        type="number"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        size="small"
        
        value={quantity}
        onChange={handleQuantityChange}
        inputProps={{
            min: 1, // Set the minimum value
            max: 99, // Set the maximum value
          }}
      />
      <Button variant="contained" onClick={handleAddToCart} sx={{ marginLeft: 2 }}>
        Add
      </Button>
    </Box>
  );
};

export default MealItem;
