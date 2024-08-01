import { Add, Remove } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { useCart } from '../Contexts/CartContext';
import { useUserInfo } from '../Contexts/UserInfoContext';

interface SnackCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
}

const SnackCard: React.FC<SnackCardProps> = ({ id, name, price, image }) => {
  const { addCartItem: addToCart } = useCart();
  const { userId } = useUserInfo();

  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    if (userId) {
      var cartItem = {
        userId: userId,
        snackId: id,
        quantity: quantity,
        checked: false,
      };
      addToCart(cartItem);
    }
  };

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        height: 'auto',
      }}
    >
      <CardContent>
        <Typography variant="body1" gutterBottom sx={{ height: '80px' }}>
          {name}
        </Typography>
        <Box
          sx={{
            textAlign: 'center',
            height: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <img
            src={`/SnackImages/${image}`}
            alt={name}
            style={{
              width: 'auto',
              height: 'auto',
              maxHeight: '100%',
              objectFit: 'cover',
            }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          ${price}
        </Typography>
        <Box display="flex" alignItems="center" justifyContent="center">
          <IconButton onClick={handleRemove}>
            <Remove />
          </IconButton>
          <Typography>{quantity}</Typography>
          <IconButton onClick={handleAdd}>
            <Add />
          </IconButton>
        </Box>
      </CardContent>
      <CardActions style={{ justifyContent: 'center' }}>
        <Button size="small" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default SnackCard;
