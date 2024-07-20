import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { Stock } from '../../Models/SnackStockSell';

Chart.register(...registerables);

interface StockProfitProps {
  stocks: Stock[];
}

const StockProfit: React.FC<StockProfitProps> = ({ stocks }) => {
  const labels = stocks.map((stock) => `ID:${stock.snackId}`);
  const profits = stocks.map((stock) => stock.totalProfit);

  const totalProfitData = {
    labels,
    datasets: [
      {
        label: 'Profit By SnackID',
        data: profits,
        borderWidth: 1,
        backgroundColor: profits.map((profit) =>
          profit >= 0 ? 'rgba(75, 192, 192, 0.6)' : 'rgba(255, 99, 132, 0.6)',
        ),
        borderColor: profits.map((profit) =>
          profit >= 0 ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)',
        ),
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
      legend: {
        labels: {
          generateLabels: () => {
            const positiveColor = 'rgba(75, 192, 192, 0.6)';
            const negativeColor = 'rgba(255, 99, 132, 0.6)';

            return [
              {
                text: 'Positive Profit',
                fillStyle: positiveColor,
                strokeStyle: positiveColor,
                hidden: false,
                index: 0,
              },
              {
                text: 'Negative Profit',
                fillStyle: negativeColor,
                strokeStyle: negativeColor,
                hidden: false,
                index: 0,
              },
            ];
          },
        },
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const profit = context.raw as number;
            return `Profit: ${profit.toFixed(2)}`;
          },
        },
      },
    },
  };
  return (
    <Bar
      data={totalProfitData}
      options={options}
      style={{ width: '100%', height: '300px', marginTop: '20px' }}
    />
  );
};

export default StockProfit;
