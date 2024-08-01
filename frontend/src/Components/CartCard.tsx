import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  Grid,
  IconButton,
} from '@mui/material';
import { CartItem } from '../Models/SnackStockSellCart';
import { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';
import { useCart } from '../Contexts/CartContext';

interface CartCardProps {
  cartItem: CartItem;
}

const CartCard: React.FC<CartCardProps> = ({ cartItem }) => {
  //   const [checked, setChecked] = useState([1]);
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const { cart, setCart } = useCart();

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCartItems = cart.cartItems.map((item) =>
      item.snackId === cartItem.snackId
        ? { ...item, checked: event.target.checked }
        : item,
    );
    setCart({ ...cart, cartItems: updatedCartItems });
  };

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCart(newQuantity);
  };
  const handleRemove = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCart(newQuantity);
    }
  };
  const updateCart = (newQuantity: number) => {
    const updatedCartItems = cart.cartItems.map((item) =>
      item.snackId === cartItem.snackId
        ? { ...item, quantity: newQuantity }
        : item,
    );
    setCart({ ...cart, cartItems: updatedCartItems });
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
        backgroundColor: 'lightgrey',
        padding: 1,
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <Checkbox
            {...label}
            checked={cartItem.checked}
            onChange={handleCheckboxChange}
          />
        </Grid>
        <Grid item xs={5}>
          <CardContent>{cartItem.snack.name}</CardContent>
        </Grid>
        <Grid item xs={3}>
          <CardContent>{cartItem.snack.sellPrice}</CardContent>
        </Grid>
        <Grid item xs={3}>
          <CardContent>
            <IconButton onClick={handleRemove}>
              <Remove />
            </IconButton>
            {quantity}
            <IconButton onClick={handleAdd}>
              <Add />
            </IconButton>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartCard;
