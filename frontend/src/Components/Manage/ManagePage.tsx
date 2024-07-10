import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';

const Manage: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          Manage Snack, Stock and Sell
        </Typography>
        <Button
          component={NavLink}
          to="/snack"
          variant="contained"
          color="primary"
        >
          Snack Page
        </Button>
        <Button
          component={NavLink}
          to="/stockSell"
          variant="contained"
          color="primary"
        >
          Stock Page
        </Button>
      </Box>
    </Container>
  );
};

export default Manage;
