import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Sell } from '../Models/SnackStockSell';
import { getSells } from '../Services/SellService';
import SellDataGrid from '../Components/Forms/SellDataGrid';

const SellPage: React.FC = () => {
  const [sells, setSells] = useState<Sell[]>([]);

  const fetchSells = async () => {
    try {
      const sells = await getSells();
      setSells(sells);
    } catch (err) {
      console.error('Failed to fetch sells, check if server is running.');
    }
  };

  useEffect(() => {
    fetchSells();
  }, []);

  return (
    <>
      <Box mt={8}>
        <Typography variant="h6" gutterBottom>
          Sell List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary">
            Add Sell
          </Button>
        </Box>
        <SellDataGrid sells={sells} />
      </Box>
    </>
  );
};

export default SellPage;
