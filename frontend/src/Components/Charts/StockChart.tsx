import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { GridRowsProp } from '@mui/x-data-grid';

Chart.register(...registerables);

interface StockChartProps {
  rows: GridRowsProp;
}

const StockChart: React.FC<StockChartProps> = ({ rows }) => {
  const data = {
    labels: rows.map((row) => row.snackName),
    datasets: [
      {
        label: 'Total Revenue',
        data: rows.map((row) => row.totalSell),
        borderWidth: 1,
      },
      {
        label: 'Total Cost',
        data: rows.map((row) => row.totalCost),
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
  return <Bar data={data} options={options} />;
};

export default StockChart;
