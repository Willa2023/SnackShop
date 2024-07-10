import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StockDataGrid from '../Components/Forms/StockDataGrid';
import { Stock } from '../Models/SnackStockSell';
import { getStocks } from '../Services/StockService';

const StockPage: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  const fetchStocks = async () => {
    try {
      const stocks = await getStocks();
      setStocks(stocks);
    } catch (err) {
      console.error('Failed to fetch stocks, check if server is running.');
    }
  };
  useEffect(() => {
    fetchStocks();
  }, []);

  return (
    <>
      <Box mt={8}>
        <Typography variant="h6" gutterBottom>
          Stock List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button variant="contained" color="primary">
            Add Stock
          </Button>
        </Box>
        <StockDataGrid stocks={stocks} />
      </Box>
    </>
  );
};

export default StockPage;
