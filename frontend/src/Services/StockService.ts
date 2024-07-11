import config from '../Config';
import { Stock } from '../Models/SnackStockSell';

const { apiUrl } = config;
const { stock: stocksApiUrl } = apiUrl;

export const getStocks = async (): Promise<Stock[]> => {
  const response = await fetch(stocksApiUrl);
  const data = await response.json();
  return data;
};

export const createStock = async (
  snackId: number,
  addStockNum: number,
): Promise<Stock> => {
  const response = await fetch(`${stocksApiUrl}/${snackId}/${addStockNum}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ snackId, addStockNum }),
  });
  const data = await response.json();
  return data;
};
