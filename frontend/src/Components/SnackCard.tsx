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
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        minWidth: 180,
        minHeight: 250,
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {name}
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <img
            src={`/SnackImages/${image}`}
            alt={name}
            style={{
              width: 'auto',
              height: 'auto',
              maxHeight: '150px',
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
