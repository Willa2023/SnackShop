import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';

const Home: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h5" gutterBottom>
          SnackShop
        </Typography>
        <Typography variant="h5" gutterBottom>
          HomePage
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;

//display snack info to client, can add into cart
