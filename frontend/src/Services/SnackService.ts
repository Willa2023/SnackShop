import config from '../Config';
import { Snack } from '../Models/Snack';

const { apiUrl } = config;

export const getSnacks = async (): Promise<Snack[]> => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};

export const createSnack = async (snack: Omit<Snack, 'Id'>): Promise<Snack> => {
  const response = await fetch(apiUrl, {
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
  await fetch(`${apiUrl}/${snack.Id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(snack),
  });
};

export const deleteSnack = async (snackId: number): Promise<void> => {
  await fetch(`${apiUrl}/${snackId}`, {
    method: 'DELETE',
  });
};
