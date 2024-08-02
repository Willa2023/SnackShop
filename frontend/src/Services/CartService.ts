import config from '../Config';
import { CartItem } from '../Models/SnackStockSellCart';

const { apiUrl } = config;
const { cart: cartApiUrl } = apiUrl;

export const getCartItemsByUserId = async (
  userId: string,
): Promise<CartItem[]> => {
  const response = await fetch(`${cartApiUrl}/${userId}`);
  const data = await response.json();
  console.log('data:', data);
  return data;
};

export const addCartItemToDb = async (
  cartItem: Omit<CartItem, 'id'>,
): Promise<CartItem> => {
  const response = await fetch(cartApiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cartItem),
  });
  if (!response.ok) {
    const data1 = await response.text();
    console.log('Raw response:', data1);
    throw new Error('Failed to add cart item');
  }

  const data = await response.json();
  return data;
};

export const updateCartItemInDb = async (
  id: number,
  quantity: number,
  checked: boolean,
): Promise<void> => {
  await fetch(`${cartApiUrl}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, quantity, checked }),
  });
};

export const deleteCartItemFromDb = async (
  userId: string,
  snackId: number,
): Promise<void> => {
  const response = await fetch(`${cartApiUrl}/${userId}/${snackId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    const data = await response.text();
    console.log('Raw response:', data);
    throw new Error('Failed to delete cart item');
  }
};
