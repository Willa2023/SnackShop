import React from 'react';
import { Container, Typography, Box, Grid } from '@mui/material';
import SnackCard from '../Components/SnackCard';
import { useSnacks } from '../Contexts/SnacksContext';

const Home: React.FC = () => {
  const { snacks } = useSnacks();

  return (
    <Container
      sx={{
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <Box my={4} mt={10}>
        <Typography variant="h6" gutterBottom>
          Welcome to Willa's SnackShop
        </Typography>
      </Box>
      <Grid
        container
        rowSpacing={{ xs: 1, sm: 2, md: 3 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {snacks.map((snack) => (
          <Grid item xs={12} sm={6} md={4} key={snack.id}>
            <SnackCard
              id={snack.id}
              name={snack.name}
              price={snack.sellPrice}
              image={snack.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
