import { Card, CardContent, Checkbox, Grid, IconButton } from '@mui/material';
import { CartItem } from '../Models/SnackStockSellCart';
import { useState } from 'react';
import { Add, Remove } from '@mui/icons-material';
import { useCart } from '../Contexts/CartContext';
import { useSnacks } from '../Contexts/SnacksContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUserInfo } from '../Contexts/UserInfoContext';
// import { deleteCartItemFromDb } from '../Services/CartService';

interface CartCardProps {
  cartItem: CartItem;
}

const CartCard: React.FC<CartCardProps> = ({ cartItem }) => {
  const { userId } = useUserInfo();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const { cartItems, setCartItems, deleteCartItem } = useCart();
  const { snacks } = useSnacks();
  const snack = snacks.find((s) => s.id === cartItem.snackId);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updatedCartItems = cartItems.map((item) =>
      item.snackId === cartItem.snackId
        ? { ...item, checked: event.target.checked }
        : item,
    );
    setCartItems(updatedCartItems);
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
    const updatedCartItems = cartItems.map((item) =>
      item.snackId === cartItem.snackId
        ? { ...item, quantity: newQuantity }
        : item,
    );
    setCartItems(updatedCartItems);
  };
  const handleDeleteCartItem = async () => {
    if (userId) {
      await deleteCartItem(userId, cartItem.snackId);
    }
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
        <Grid item xs={4}>
          <CardContent>{snack ? snack.name : null}</CardContent>
        </Grid>
        <Grid item xs={3}>
          <CardContent>{snack ? snack.sellPrice : null}</CardContent>
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
        <Grid item xs={1}>
          <IconButton onClick={handleDeleteCartItem}>
            <DeleteIcon style={{ color: 'red' }} />
          </IconButton>
        </Grid>
      </Grid>
    </Card>
  );
};

export default CartCard;
