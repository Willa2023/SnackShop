import config from '../Config';
import { Cart } from '../Models/SnackStockSellCart';

const { apiUrl } = config;
const { cart: cartApiUrl } = apiUrl;

export const getCartByUserId = async (userId: string): Promise<Cart | null> => {
  const response = await fetch(`${cartApiUrl}/${userId}`);
  if (!response.ok) {
    return null;
  }
  const data = await response.json();
  return data;
};

export const createCart = async (cart: Cart): Promise<void> => {
  const response = await fetch(`${cartApiUrl}/CreateCart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', errorText);
    throw new Error('Failed to create cart');
  }
};

export const updateCart = async (cart: Cart): Promise<void> => {
  const response = await fetch(`${cartApiUrl}/${cart.userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cart),
  });
  if (!response.ok) {
    const errorText = await response.text();
    console.error('Error response:', errorText);
    throw new Error('Failed to update cart');
  }
};
