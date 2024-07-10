import { Box, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StockSellDataGrid from './StockSellDataGrid';
import { Stock, Sell } from '../../Models/SnackStockSell';
import { getStocks } from '../../Services/StockService';

const StockSellPage: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  // const [sells, setSells] = useState<Sell[]>([]);
  // const [isFormOpen, setIsFormOpen] = useState(false);

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
      <Box mb={2}>
        <Toolbar></Toolbar>
        <Typography variant="h6" gutterBottom>
          Stock and Sell List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button
            variant="contained"
            color="primary"
            // onClick={() => setIsFormOpen(true)}
          >
            Add Stock
          </Button>
          <Button
            variant="contained"
            color="primary"
            // onClick={() => setIsFormOpen(true)}
          >
            Add Sell
          </Button>
        </Box>
        <Box display="flex" gap={2} mb={2}>
          <StockSellDataGrid stocks={stocks} />
        </Box>
      </Box>
    </>
  );
};

export default StockSellPage;
