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

interface SnackCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  onAddToCart: (id: number, quantity: number) => void;
}

const SnackCard: React.FC<SnackCardProps> = ({
  id,
  name,
  price,
  image,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const handleAdd = () => {
    setQuantity(quantity + 1);
  };
  const handleRemove = () => {
    setQuantity(quantity - 1);
  };
  const handleAddToCart = () => {
    onAddToCart(id, quantity);
  };

  return (
    <Card>
      <CardContent sx={{ minWidth: 180, minHeight: 150 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <img
            src={`/SnackImages/${image}`}
            alt={name}
            style={{ width: '100%', height: 'auto' }}
          />
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
