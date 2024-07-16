import React, { useEffect, useState } from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SnackCard from './SnackCard';
import { Snack } from '../Models/SnackStockSell';
import { getSnacks } from '../Services/SnackService';

const Home: React.FC = () => {
  const [snacks, setSnacks] = useState<Snack[]>([]);
  const fetchSnacks = async () => {
    const data = await getSnacks();
    setSnacks(data);
  };
  useEffect(() => {
    fetchSnacks();
  }, []);

  return (
    <Container>
      <Box my={4} mt={10}>
        <Typography variant="h5" gutterBottom>
          Welcome to Willa's SnackShop
        </Typography>
      </Box>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        {snacks.map((snack) => (
          <Grid item xs={4} key={snack.id}>
            <SnackCard
              name={snack.name}
              price={snack.sellPrice}
              image={`/SnackImages/${snack.image}`}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

//display snack cards to client, can add into cart
