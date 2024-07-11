import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { GridRowsProp } from '@mui/x-data-grid';

Chart.register(...registerables);

interface SellChartProps {
  rows: GridRowsProp;
}

const SellChart: React.FC<SellChartProps> = ({ rows }) => {
  const data = {
    labels: rows.map((row) => `${row.snackName} at ${row.date}`),
    datasets: [
      {
        label: 'Revenue',
        data: rows.map((row) => row.revenue),
        borderWidth: 1,
      },
      {
        label: 'Profit',
        data: rows.map((row) => row.profit),
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
            const label = context.dataset.label || '';
            const value = context.raw;
            return `${label}: ${value}`;
          },
        },
      },
      hover: {
        mode: null,
      },
    },
  };
  return <Bar data={data} options={options} />;
};

export default SellChart;
