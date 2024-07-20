import React from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface SellChartBySnackIdProps {
  sellsBySnackId: {
    snackId: number;
    snackName: string;
    quantity: number;
    profitsBySnackId: number;
  }[];
}

const SellChartBySnackId: React.FC<SellChartBySnackIdProps> = ({
  sellsBySnackId,
}) => {
  const data = {
    labels: sellsBySnackId.map((sell) => sell.snackId),
    datasets: [
      {
        label: 'Profits By Snack ID',
        data: sellsBySnackId.map((sell) => sell.profitsBySnackId),
        borderWidth: 1,
      },
      {
        label: 'Sell Quantity By Snack ID',
        data: sellsBySnackId.map((sell) => sell.quantity),
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

export default SellChartBySnackId;
