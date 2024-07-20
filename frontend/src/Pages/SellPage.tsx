import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Sell } from '../Models/SnackStockSell';
import { getSells } from '../Services/SellService';
import SellDataGrid from '../Components/Forms/SellDataGrid';
import SellChartByDate from '../Components/Charts/SellByDate';
import SellChartBySnackId from '../Components/Charts/SellBySnackId';

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

  const sellsByDate = () => {
    const uniqueDates = [
      ...new Set(
        sells.map((sell) => new Date(sell.date).toISOString().split('T')[0]),
      ),
    ];

    return uniqueDates.map((date) => {
      const filteredSells = sells.filter(
        (sell) => new Date(sell.date).toISOString().split('T')[0] === date,
      );
      const totalRevenue = filteredSells.reduce(
        (acc, sell) => acc + sell.totalPrice,
        0,
      );
      const totalProfit = filteredSells.reduce(
        (acc, sell) => acc + sell.profit,
        0,
      );

      return {
        date,
        totalRevenue,
        totalProfit,
      };
    });
  };

  const sellsBySnackId = () => {
    const uniqueSnackIds = [...new Set(sells.map((sell) => sell.snackId))];

    const result = uniqueSnackIds.map((snackId) => {
      const filteredSells = sells.filter((sell) => sell.snackId === snackId);
      const totalQuantity = filteredSells.reduce(
        (acc, sell) => acc + sell.quantity,
        0,
      );
      const totalProfits = filteredSells.reduce(
        (acc, sell) => acc + sell.profit,
        0,
      );

      return {
        snackId,
        snackName: filteredSells[0].snack.name,
        quantity: totalQuantity,
        profitsBySnackId: parseFloat(totalProfits.toFixed(2)),
      };
    });

    return result.sort((a, b) => a.snackId - b.snackId);
  };

  useEffect(() => {
    fetchSells();
  }, []);

  return (
    <Grid container spacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom style={{ marginTop: '30px' }}>
          Sell History
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <SellDataGrid sells={sells} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SellChartByDate sellsByDate={sellsByDate()} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <SellChartBySnackId sellsBySnackId={sellsBySnackId()} />
      </Grid>
    </Grid>
  );
};

export default SellPage;
