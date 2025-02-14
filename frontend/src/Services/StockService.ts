import config from '../Config';
import { Stock } from '../Models/SnackStockSellCart';

const { apiUrl } = config;
const { stock: stocksApiUrl } = apiUrl;

export const getStocks = async (): Promise<Stock[]> => {
  const response = await fetch(stocksApiUrl);
  const data = await response.json();
  return data;
};

export const createStock = async (
  snackId: number,
  quantity: number,
): Promise<Stock> => {
  const response = await fetch(`${stocksApiUrl}/${snackId}/${quantity}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ snackId, quantity }),
  });
  const data = await response.json();
  return data;
};
