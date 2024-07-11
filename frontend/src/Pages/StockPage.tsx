import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StockDataGrid from '../Components/Forms/StockDataGrid';
import { Stock } from '../Models/SnackStockSell';
import { createStock, getStocks } from '../Services/StockService';
import AddStockForm from '../Components/Forms/AddStockForm';

const StockPage: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddStock = async (snackId: number, addStockNum: number) => {
    try {
      console.log('Stock added 1' + snackId + ' ' + addStockNum);
      const newStock = await createStock(snackId, addStockNum);
      console.log('Stock added');
      setStocks((prev) => [...prev, newStock]);
      setIsFormOpen(false);
    } catch (err) {
      console.error('Failed to add stock');
    }
  };

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
          <Button
            variant="contained"
            color="primary"
            onClick={() => setIsFormOpen(true)}
          >
            Add Stock
          </Button>
        </Box>
        <StockDataGrid stocks={stocks} />
        <AddStockForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onAddStock={handleAddStock}
        />
      </Box>
    </>
  );
};

export default StockPage;
