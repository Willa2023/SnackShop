import React from 'react';
import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';
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

  const data2 = {
    labels: rows.map((row) => row.snackName),
    datasets: [
      {
        label: 'Total Revenue',
        data: rows.map((row) => row.totalSell),
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
    <>
      <br />
      <br />
      <br />
      <Bar data={data} options={options} />
      <br />
      <br />
      <br />
      <h5>Total Revenue Table</h5>
      <Pie data={data2} options={options} />
    </>
  );
};

export default StockChart;
