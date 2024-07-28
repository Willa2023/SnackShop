import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import CartCard from '../Components/CartCard';
import { useSettings } from '../Contexts/SettingsContext';
import CheckOutForm from '../Components/Forms/CheckOutForm';

// interface CartPageProps {
//   cart: Cart;
// }

const CartPage: React.FC = () => {
  const { cart, setCart } = useSettings();
  const [checkOutPrice, setCheckOutPrice] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const calculatePrice = () => {
    var totalPrice = 0;

    cart.cartItems.map((item) => {
      if (item.checked) {
        totalPrice += item.quantity * item.snack.sellPrice;
      }
    });
    setCheckOutPrice(parseFloat(totalPrice.toFixed(2)));
  };

  useEffect(() => {
    calculatePrice();
  }, [cart]);

  const submitCheck = async () => {
    setIsFormOpen(false);
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
          Shopping Cart
        </Typography>
        {cart.cartItems.length === 0 ? (
          <Typography>No items in the cart.</Typography>
        ) : (
          <Grid
            container
            rowSpacing={{ xs: 1, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {cart.cartItems.map((item) => (
              <Grid item xs={12} sm={12} md={12} key={item.id}>
                <CartCard cartItem={item} />
              </Grid>
            ))}
            <Grid item xs={12} container justifyContent="flex-end">
              <Button
                size="medium"
                sx={{ marginTop: '20px' }}
                onClick={() => setIsFormOpen(true)}
              >
                Check Out
              </Button>
              <Typography>{checkOutPrice}</Typography>
            </Grid>
          </Grid>
        )}
        <Grid item xs={12}>
          <CheckOutForm
            open={isFormOpen}
            onClose={() => setIsFormOpen(false)}
            submitCheck={submitCheck}
            price={checkOutPrice}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default CartPage;
