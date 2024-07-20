import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface SellChartByDateProps {
  sellsByDate: { date: string; totalRevenue: number; totalProfit: number }[];
}

const SellChartByDate: React.FC<SellChartByDateProps> = ({ sellsByDate }) => {
  const data = {
    labels: sellsByDate.map((sell) => sell.date),
    datasets: [
      {
        label: 'Revenue By Date',
        data: sellsByDate.map((sell) => sell.totalRevenue),
        borderWidth: 1,
      },
      {
        label: 'Profits By Date',
        data: sellsByDate.map((sell) => sell.totalProfit),
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

export default SellChartByDate;
