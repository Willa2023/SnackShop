import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Sell } from '../../Models/SnackStockSell';

Chart.register(...registerables);

interface SellChartProps {
  sells: Sell[];
}

const SellChart: React.FC<SellChartProps> = ({ sells }) => {
  const data = {
    labels: sells.map((sell) => `Snack ID: ${sell.snackId}`),
    datasets: [
      {
        label: 'Revenue',
        data: sells.map((sell) => sell.totalPrice),
        borderWidth: 1,
      },
      {
        label: 'Profit',
        data: sells.map((sell) => sell.profit),
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
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context: any) {
            const value = context.raw;
            return `${value}`;
          },
        },
      },
      hover: {
        mode: null,
      },
    },
  };

  return (
    <Bar
      data={data}
      options={options}
      style={{ width: '100%', height: '300px', marginTop: '20px' }}
    />
  );
};

export default SellChart;
