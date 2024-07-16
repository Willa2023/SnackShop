import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

interface SnackCardProps {
  name: string;
  price: number;
  image: string;
}

const SnackCard: React.FC<SnackCardProps> = ({ name, price, image }) => {
  return (
    <Card>
      <CardContent sx={{ minWidth: 180, minHeight: 150 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {name}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          <img
            src={image}
            alt={name}
            style={{ width: '100%', height: 'auto' }}
          />
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          ${price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default SnackCard;
