import { Box, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StockSellDataGrid from './StockSellDataGrid';

const StockSellPage: React.FC = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <Box mb={2}>
        <Toolbar></Toolbar>
        <Typography variant="h6" gutterBottom>
          Stock and Sell List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsFormOpen(true)}
          >
            Add Stock
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsFormOpen(true)}
          >
            Add Sell
          </Button>
        </Box>
        <Box display="flex" gap={2} mb={2}>
          <StockSellDataGrid />
        </Box>
      </Box>
    </>
  );
};

export default StockSellPage;
