import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Welcome to Willa's Snack Shop!
        </Typography>
        <Button
          component={NavLink}
          to="/manage"
          variant="contained"
          color="primary"
        >
          Manage Snack, Stock and Sell
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
