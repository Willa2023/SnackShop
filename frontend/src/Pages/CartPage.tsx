import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const CartPage: React.FC = () => {
  return (
    <Container>
      <Box my={4}>
        <Typography variant="h4" gutterBottom>
          User Cart Page
        </Typography>
      </Box>
    </Container>
  );
};

export default CartPage;
