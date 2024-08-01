import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Stock } from '../../Models/SnackStockSellCart';

Chart.register(...registerables);

interface StockRevenueCostProps {
  stocks: Stock[];
}

const StockRevenueCost: React.FC<StockRevenueCostProps> = ({ stocks }) => {
  const labels = stocks.map((stock) => `ID:${stock.snackId}`);
  const totalCost = stocks.map((stock) => stock.totalCost);
  const totalSell = stocks.map((stock) => stock.totalSell);

  const totalRevenueCostData = {
    labels,
    datasets: [
      {
        label: 'Total Revenue By SnackID',
        data: totalSell,
        borderWidth: 1,
      },
      {
        label: 'Total Cost By SnackID',
        data: totalCost,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <Bar
      data={totalRevenueCostData}
      options={options}
      style={{ width: '100%', height: '300px', marginTop: '20px' }}
    />
  );
};

export default StockRevenueCost;
