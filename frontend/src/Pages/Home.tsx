import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SnackCard from '../Components/SnackCard';
import { Snack } from '../Models/SnackStockSell';
import { getSnacks } from '../Services/SnackService';
import { Cart, CartItem } from '../Models/Cart';

const Home: React.FC = () => {
  const [snacks, setSnacks] = useState<Snack[]>([]);
  const [cart, setCart] = useState<Cart>({
    id: 1,
    name: 'Shopping Cart',
    cartItems: [],
  });

  const fetchSnacks = async () => {
    const data = await getSnacks();
    setSnacks(data);
  };
  useEffect(() => {
    fetchSnacks();
  }, []);

  const handleAddToCart = (id: number, quantity: number) => {
    const existingItem = cart.cartItems.find((item) => item.id === id);
    if (existingItem) {
      const updatedCartItems = cart.cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + quantity } : item,
      );
      setCart((prevCart) => ({
        ...prevCart,
        cartItems: updatedCartItems,
      }));
    } else {
      const newCartItem: CartItem = {
        id: Date.now(), // Replace with actual ID from backend or other unique ID generation method
        snackId: id, // Assuming this maps to the ID of the snack
        quantity: quantity,
      };
      setCart((prevCart) => ({
        ...prevCart,
        cartItems: [...prevCart.cartItems, newCartItem],
      }));
    }
  };

  return (
    <Container>
      <Box my={4} mt={10}>
        <Typography variant="h5" gutterBottom>
          Welcome to Willa's SnackShop
        </Typography>
      </Box>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        {snacks.map((snack) => (
          <Grid item xs={4} key={snack.id}>
            <SnackCard
              id={snack.id}
              name={snack.name}
              price={snack.sellPrice}
              image={snack.image}
              onAddToCart={handleAddToCart}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={5}>
        <Typography variant="h6">Shopping Cart</Typography>
        {cart.cartItems.map((item, index) => (
          <Typography key={index}>
            id is {item.id}
            quantity is {item.quantity}
          </Typography>
        ))}
      </Box>
    </Container>
  );
};

export default Home;
