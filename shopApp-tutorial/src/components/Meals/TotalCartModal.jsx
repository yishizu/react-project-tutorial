// TotalCartModal.js
import React from "react";
import { useContext } from "react";
import {
  Box,
  Typography,
  Modal,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Stack,
  IconButton,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

import CartContext from "../../store/CartContext";

const TotalCartModal = ({ isOpen, handleClose }) => {
  const cartContext = useContext(CartContext);
  const cartItems = cartContext.cartItems;
  const cartTotal = cartContext.cartTotalCost;

  const handleDeleteItem = (itemId) => {
    cartContext.removeItemFromCart(itemId);
  };
  const handleQuantityChange = (itemId, newQuantity) => {
    cartContext.updateItemQuantityInCart(itemId, newQuantity);
  };

  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="cart-modal-title"
      aria-describedby="cart-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "80%",
          bgcolor: "background.paper",
          border: "none", // アウトラインを削除
          borderRadius: "16px", // 丸角を追加
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography id="cart-modal-title" variant="h6" component="h2">
          Your Cart
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="cart table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell sx={{ width: "80px" }} align="right">
                  Quantity
                </TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell  align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cartItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell component="th" scope="row">
                    {item.name}
                  </TableCell>
                  <TableCell align="right">
                    <TextField
                      type="number"
                      value={item.quantity}
                      onChange={(event) =>
                        handleQuantityChange(
                          item.id,
                          Number(event.target.value)
                        )
                      }
                      inputProps={{ min: 1 }}
                    />
                  </TableCell>
                  <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                  <TableCell align="right">
                    ${(item.price * item.quantity).toFixed(2)}
                  </TableCell>
                  <TableCell align="center">
                    <IconButton
                      edge="end"
                      color="inherit"
                      onClick={() => handleDeleteItem(item.id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Typography sx={{ marginTop: 2 }} variant="h6" align="right">
          Grand Total: ${cartTotal.toFixed(2)}
        </Typography>
        <Stack spacing={2} direction="row">
          <Button onClick={handleClose}>Close Cart</Button>
          <Button variant="contained" sx={{}} onClick={handleClose}>
            Order
          </Button>
        </Stack>
      </Box>
    </Modal>
  );
};

export default TotalCartModal;
