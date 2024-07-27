import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Stock } from '../../Models/SnackStockSellCart';

Chart.register(...registerables);

interface StockSellPieProps {
  stocks: Stock[];
}

const StockSellPie: React.FC<StockSellPieProps> = ({ stocks }) => {
  const labels = stocks.map((stock) => stock.snack.name);
  const soldQuantity = stocks.map((stock) => stock.soldQuantity);
  const colors = [
    '#FF6384',
    '#36A2EB',
    '#FFCE56',
    '#4BC0C0',
    '#9966FF',
    '#FF9F40',
  ];

  const totalSellQuantityData = {
    labels,
    datasets: [
      {
        label: 'Sold Quantity',
        data: soldQuantity,
        borderWidth: 1,
        backgroundColor: colors.slice(0, labels.length),
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
    <Pie
      data={totalSellQuantityData}
      options={options}
      style={{ width: '100%', height: '300px', marginTop: '20px' }}
    />
  );
};

export default StockSellPie;
