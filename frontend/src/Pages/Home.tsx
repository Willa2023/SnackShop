import React from 'react';
import { Container, Typography, Box, Button, Grid } from '@mui/material';
import SnackCard from '../Components/SnackCard';

const Home: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          Willa's SnackShop
        </Typography>
      </Box>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <SnackCard />
        </Grid>
        <Grid item xs={4}>
          <SnackCard />
        </Grid>
        <Grid item xs={4}>
          <SnackCard />
        </Grid>
        <Grid item xs={4}>
          <SnackCard />
        </Grid>
        <Grid item xs={4}>
          <SnackCard />
        </Grid>
        <Grid item xs={4}>
          <SnackCard />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

//display snack cards to client, can add into cart
