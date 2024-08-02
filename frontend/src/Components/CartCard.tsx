import { Card, CardContent, Checkbox, Grid, IconButton } from '@mui/material';
import { CartItem } from '../Models/SnackStockSellCart';
import { useEffect, useState } from 'react';
import { Add, Remove } from '@mui/icons-material';
import { useCart } from '../Contexts/CartContext';
import { useSnacks } from '../Contexts/SnacksContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { useUserInfo } from '../Contexts/UserInfoContext';

interface CartCardProps {
  cartItem: CartItem;
}

const CartCard: React.FC<CartCardProps> = ({ cartItem }) => {
  const { userId } = useUserInfo();
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  const [quantity, setQuantity] = useState(cartItem.quantity);
  const { cartItems, setCartItems, deleteCartItem, updateCartItem } = useCart();
  const { snacks } = useSnacks();
  const snack = snacks.find((s) => s.id === cartItem.snackId);
  const [checkState, setCheckState] = useState(cartItem.checked);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckState = event.target.checked;
    setCheckState(newCheckState);

    const updatedCartItems = cartItems.map((item) =>
      item.snackId === cartItem.snackId
        ? { ...item, checked: newCheckState }
        : item,
    );
    setCartItems(updatedCartItems);
    updateCartItem(cartItem.id, quantity, checkState);
  };

  const handleAdd = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    updateCartItem(cartItem.id, newQuantity, checkState);
  };
  const handleRemove = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      updateCartItem(cartItem.id, newQuantity, checkState);
    }
  };
  const handleDeleteCartItem = async () => {
    if (userId) {
      deleteCartItem(userId, cartItem.snackId);
    }
  };

  useEffect(() => {
    updateCartItem(cartItem.id, quantity, checkState);
  }, [quantity, checkState]);

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
            checked={checkState}
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
