import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SnackCard from '../Components/SnackCard';
import snack1 from '../assets/SnackImages/snack1.jpg';
import snack2 from '../assets/SnackImages/snack2.jpg';
import snack3 from '../assets/SnackImages/snack3.jpg';
import snack4 from '../assets/SnackImages/snack4.jpg';
import snack5 from '../assets/SnackImages/snack5.jpg';
import snack6 from '../assets/SnackImages/snack6.jpg';

const Home: React.FC = () => {
  return (
    <Container>
      <Box my={4} mt={10}>
        <Typography variant="h5" gutterBottom>
          Welcome to Willa's SnackShop
        </Typography>
      </Box>
      <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
        <Grid item xs={4}>
          <SnackCard name="Chocolate Creamy Milk" price={6.99} image={snack1} />
        </Grid>
        <Grid item xs={4}>
          <SnackCard name="Chips Original" price={4.89} image={snack2} />
        </Grid>
        <Grid item xs={4}>
          <SnackCard name="Coconut wafer rolls" price={4.5} image={snack3} />
        </Grid>
        <Grid item xs={4}>
          <SnackCard
            name="Original Beef Jerky 50g"
            price={5.29}
            image={snack4}
          />
        </Grid>
        <Grid item xs={4}>
          <SnackCard name="Baked Strawberry 80g" price={5.99} image={snack5} />
        </Grid>
        <Grid item xs={4}>
          <SnackCard name="Harvest Snaps Wasabi" price={5.49} image={snack6} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;

//display snack cards to client, can add into cart
