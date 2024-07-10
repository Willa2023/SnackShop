import { Box, Button, Toolbar, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StockDataGrid from './StockDataGrid';
import { Stock, Sell } from '../../Models/SnackStockSell';
import { getStocks } from '../../Services/StockService';
import { getSells } from '../../Services/SellService';
import SellDataGrid from './SellDataGrid';

const StockSellPage: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [sells, setSells] = useState<Sell[]>([]);
  // const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchStocks = async () => {
    try {
      const stocks = await getStocks();
      setStocks(stocks);
    } catch (err) {
      console.error('Failed to fetch stocks, check if server is running.');
    }
  };

  const fetchSells = async () => {
    try {
      const sells = await getSells();
      setSells(sells);
    } catch (err) {
      console.error('Failed to fetch sells, check if server is running.');
    }
  };

  useEffect(() => {
    fetchStocks();
    fetchSells();
  }, []);

  return (
    <>
      <Box mt={8}>
        <Typography variant="h6" gutterBottom>
          Stock List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button
            variant="contained"
            color="primary"
            // onClick={() => setIsFormOpen(true)}
          >
            Add Stock
          </Button>
        </Box>
        <StockDataGrid stocks={stocks} />
      </Box>
      <Box mt={8}>
        <Typography variant="h6" gutterBottom>
          Sell List
        </Typography>
        <Box display="flex" gap={2} mb={2}>
          <Button
            variant="contained"
            color="primary"
            // onClick={() => setIsFormOpen(true)}
          >
            Add Sell
          </Button>
        </Box>
        <SellDataGrid sells={sells} />
      </Box>
    </>
  );
};

export default StockSellPage;
{
  /* <Button
variant="contained"
color="primary"
// onClick={() => setIsFormOpen(true)}
>
Add Sell
</Button> */
}
