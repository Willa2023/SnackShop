import React from 'react';
import {
  Container,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { Cart } from '../Models/SnackStockSellCart';

interface CartPageProps {
  cart: Cart;
}

const CartPage: React.FC<CartPageProps> = ({ cart }) => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Shopping Cart
        </Typography>
        {cart.cartItems.length === 0 ? (
          <Typography>No items in the cart.</Typography>
        ) : (
          <List>
            {cart.cartItems.map((item) => (
              <ListItem key={item.id}>
                <ListItemText
                  primary={`Snack ID: ${item.snackId}, Quantity: ${item.quantity}`}
                />
              </ListItem>
            ))}
          </List>
        )}
      </Box>
    </Container>
  );
};

export default CartPage;
