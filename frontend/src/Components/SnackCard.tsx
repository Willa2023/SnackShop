import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';

const SnackCard: React.FC = () => {
  return (
    <Card>
      <CardContent sx={{ minWidth: 180, minHeight: 150 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Snack 1
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add to Cart</Button>
      </CardActions>
    </Card>
  );
};

export default SnackCard;
