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
        id: Date.now(),
        snackId: id,
        quantity: quantity,
      };
      setCart((prevCart) => ({
        ...prevCart,
        cartItems: [...prevCart.cartItems, newCartItem],
      }));
    }
  };

  return (
    <Container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box my={4} mt={10}>
        <Typography variant="h5" gutterBottom>
          Welcome to Willa's SnackShop
        </Typography>
      </Box>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {snacks.map((snack) => (
          <Grid item xs={12} sm={6} md={4} key={snack.id}>
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
    </Container>
  );
};

export default Home;
