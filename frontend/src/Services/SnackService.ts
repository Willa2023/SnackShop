import config from '../Config';
import { Snack } from '../Models/SnackStockSellCart';

const { apiUrl } = config;
const { snack: snacksApiUrl } = apiUrl;

export const getSnacks = async (): Promise<Snack[]> => {
  const response = await fetch(snacksApiUrl);
  const data = await response.json();
  return data;
};

export const createSnack = async (snack: Omit<Snack, 'id'>): Promise<Snack> => {
  const response = await fetch(snacksApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snack),
  });
  const data = await response.json();
  return data;
};

export const updateSnack = async (snack: Snack): Promise<void> => {
  await fetch(`${snacksApiUrl}/${snack.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snack),
  });
};

export const deleteSnack = async (snackId: number): Promise<void> => {
  await fetch(`${snacksApiUrl}/${snackId}`, {
    method: 'DELETE',
  });
};
