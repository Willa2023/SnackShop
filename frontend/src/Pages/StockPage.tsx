import { Button, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import StockDataGrid from '../Components/Forms/StockDataGrid';
import { Stock } from '../Models/SnackStockSellCart';
import { createStock, getStocks } from '../Services/StockService';
import AddStockForm from '../Components/Forms/AddStockForm';
import StockProfit from '../Components/Charts/StockProfit';
import StockRevenueCost from '../Components/Charts/StockRevenueCost';
import StockSellPie from '../Components/Charts/StockSellPie';

const StockPage: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);

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

  const handleAddStock = async (snackId: number, quantity: number) => {
    try {
      await createStock(snackId, quantity);
      const newStocks = await getStocks();
      setStocks(newStocks);
      setIsFormOpen(false);
    } catch (err) {
      console.error('Failed to add stock');
    }
  };

  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
          Stock List
        </Typography>
      </Grid>
      <Grid item display="flex">
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsFormOpen(true)}
        >
          Add Stock
        </Button>
      </Grid>
      <Grid item xs={12}>
        <StockDataGrid stocks={stocks} />
        <AddStockForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onAddStock={handleAddStock}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={6}
        container
        direction="row"
        spacing={2}
        columnGap={1}
      >
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
            Total Revenue & Cost
          </Typography>
          <StockRevenueCost stocks={stocks} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
            Profit By SnackID
          </Typography>
          <StockProfit stocks={stocks} />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={1}></Grid>
      <Grid item xs={12} sm={5}>
        <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
          Sell Quantity
        </Typography>
        <StockSellPie stocks={stocks} />
      </Grid>
    </Grid>
  );
};

export default StockPage;
