import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid, Button } from '@mui/material';
import CartCard from '../Components/CartCard';
import CheckOutForm from '../Components/Forms/CheckOutForm';
import { CartItem } from '../Models/SnackStockSellCart';
import { createSell } from '../Services/SellService';
import { useCart } from '../Contexts/CartContext';
import { useSnacks } from '../Contexts/SnacksContext';

const CartPage: React.FC = () => {
  const { cartItems, deleteCartItem } = useCart();
  const { snacks } = useSnacks();
  const [checkOutPrice, setCheckOutPrice] = useState(0);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [checkCartItems, setCheckCartItems] = useState([] as CartItem[]);

  const calculatePrice = () => {
    let totalPrice = 0;
    const checkItems = cartItems.filter((item) => item.checked);
    checkItems.forEach((item) => {
      const snack = snacks.find((s) => s.id === item.snackId);
      if (snack) {
        totalPrice += item.quantity * snack.sellPrice;
      }
    });
    setCheckOutPrice(parseFloat(totalPrice.toFixed(2)));
    setCheckCartItems(checkItems);
  };

  useEffect(() => {
    calculatePrice();
  }, [cartItems]);

  const submitCheck = async () => {
    if (checkCartItems.length !== 0) {
      try {
        await Promise.all(
          checkCartItems.map(async (item) => {
            await createSell(item.snackId, item.quantity);
            await deleteCartItem(item.userId, item.snackId);
          }),
        );
        console.log('Items checked out successfully.');
      } catch (error) {
        console.error(error);
      }
    } else {
      alert('Please select items to check out.');
    }
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
        {cartItems.length === 0 ? (
          <Typography>No items in the cart.</Typography>
        ) : (
          <Grid
            container
            rowSpacing={{ xs: 1, sm: 2, md: 3 }}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            {cartItems.map((item) => (
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
            submitCheck={() => submitCheck()}
            price={checkOutPrice}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default CartPage;
