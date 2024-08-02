import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { CartItem } from '../Models/SnackStockSellCart';
import { useUserInfo } from './UserInfoContext';
import {
  addCartItemToDb,
  deleteCartItemFromDb,
  getCartItemsByUserId,
  updateCartItemInDb,
} from '../Services/CartService';
import { useAuth0 } from '@auth0/auth0-react';

interface CartContextProps {
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
  addCartItem: (cartItem: Omit<CartItem, 'id'>) => void;
  deleteCartItem: (userId: string, snackId: number) => void;
  updateCartItem: (id: number, quantity: number, checked: boolean) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const { userId } = useUserInfo();
  const { isAuthenticated } = useAuth0();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  if (!userId) {
    console.log('User not logged in');
  }

  const fetchCartItems = async () => {
    if (userId && isAuthenticated) {
      try {
        const newCartItems = await getCartItemsByUserId(userId);
        setCartItems(newCartItems);
      } catch (error) {
        console.log('Failed to fetch cart items', error);
      }
    } else {
      console.log('User not logged in, no cart items to fetch');
    }
  };

  const addCartItem = async (cartItem: Omit<CartItem, 'id'>) => {
    if (userId) {
      try {
        await addCartItemToDb(cartItem);
        fetchCartItems();
      } catch (error) {
        console.log('Failed to add cart item', error);
      }
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, [userId, isAuthenticated, setCartItems]);

  const deleteCartItem = async (userId: string, snackId: number) => {
    try {
      await deleteCartItemFromDb(userId, snackId);
      fetchCartItems();
    } catch (error) {
      console.log('Failed to delete cart item', error);
    }
  };

  const updateCartItem = async (
    id: number,
    quantity: number,
    checked: boolean,
  ) => {
    try {
      await updateCartItemInDb(id, quantity, checked);
      fetchCartItems();
    } catch (error) {
      console.log('Failed to update cart item', error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addCartItem,
        deleteCartItem,
        updateCartItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
