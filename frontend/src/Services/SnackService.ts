import config from '../Config';
import { Snack } from '../Models/Snack';

const { apiUrl } = config;

export const getSnacks = async (): Promise<Snack[]> => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
};
