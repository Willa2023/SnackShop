import config from '../Config';
import { Sell } from '../Models/SnackStockSellCart';

const { apiUrl } = config;
const { sell: sellsApiUrl } = apiUrl;

export const getSells = async (): Promise<Sell[]> => {
  const response = await fetch(sellsApiUrl);
  const data = await response.json();
  return data;
};

export const createSell = async (
  snackId: number,
  quantity: number,
): Promise<Sell> => {
  const response = await fetch(`${sellsApiUrl}/${snackId}/${quantity}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ snackId, quantity }),
  });
  const data = await response.json();
  return data;
};
