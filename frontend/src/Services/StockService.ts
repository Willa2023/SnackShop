import config from '../Config';
import { Stock } from '../Models/SnackStockSell';

const { apiUrl } = config;
const { stock: stocksApiUrl } = apiUrl;

export const getStocks = async (): Promise<Stock[]> => {
  const response = await fetch(stocksApiUrl);
  const data = await response.json();
  return data;
};
