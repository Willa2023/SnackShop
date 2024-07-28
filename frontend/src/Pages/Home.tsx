import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SnackCard from '../Components/SnackCard';
import { Snack } from '../Models/SnackStockSellCart';
import { getSnacks } from '../Services/SnackService';
import { CartItem } from '../Models/SnackStockSellCart';
import { useSettings } from '../Contexts/SettingsContext';

const Home: React.FC = () => {
  const [snacks, setSnacks] = useState<Snack[]>([]);
  const { cart, setCart } = useSettings();

  const fetchSnacks = async () => {
    const data = await getSnacks();
    setSnacks(data);
  };
  useEffect(() => {
    fetchSnacks();
  }, []);

  const handleAddToCart = (snackId: number, quantity: number) => {
    const existingItem = cart.cartItems.find(
      (item) => item.snackId === snackId,
    );
    if (existingItem) {
      const updatedCartItems = cart.cartItems.map((item) =>
        item.snackId === snackId
          ? { ...item, quantity: item.quantity + quantity }
          : item,
      );
      setCart({ ...cart, cartItems: updatedCartItems });
    } else {
      const newCartItem: CartItem = {
        id: Date.now(),
        snackId: snackId,
        quantity: quantity,
        snack: snacks.find((snack) => snack.id === snackId) as Snack,
      };
      setCart({ ...cart, cartItems: [...cart.cartItems, newCartItem] });
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
        <Typography variant="h6" gutterBottom>
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
