import config from '../Config';
import { Sell } from '../Models/SnackStockSell';

const { apiUrl } = config;
const { sell: sellsApiUrl } = apiUrl;

export const getSells = async (): Promise<Sell[]> => {
  const response = await fetch(sellsApiUrl);
  const data = await response.json();
  return data;
};
