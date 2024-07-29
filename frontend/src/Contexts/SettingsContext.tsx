import { useAuth0 } from '@auth0/auth0-react';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Cart, Snack } from '../Models/SnackStockSellCart';
import { getSnacks } from '../Services/SnackService';
import { createCart } from '../Services/CartService';

interface SettingsContextProps {
  snacks: Snack[];
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  roles: string[];
  userId: string;
  cart: Cart;
  setCart: (cart: Cart) => void;
  addToCart: (id: number, quantity: number) => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined,
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const { isAuthenticated, getIdTokenClaims } = useAuth0();
  const [roles, setRoles] = useState<string[]>([]);
  const [userId, setUserId] = useState<string>('');
  const [cart, setCart] = useState<Cart>({
    id: 0,
    userId: '',
    cartItems: [],
  });

  const [snacks, setSnacks] = useState<Snack[]>([]);
  const fetchSnacks = async () => {
    const fetchedSnacks = await getSnacks();
    setSnacks(fetchedSnacks);
  };
  useEffect(() => {
    fetchSnacks();
  }, []);

  const addToCart = (id: number, quantity: number) => {
    const snack = snacks.find((snack) => snack.id === id);

    if (!snack) {
      console.error(`Snack with id ${id} not found`);
      return;
    }
    const newItem = {
      id,
      snack,
      snackId: id,
      quantity,
      checked: true,
    };
    setCart((prev) => ({
      ...prev,
      cartItems: [...prev.cartItems, newItem],
    }));
  };

  useEffect(() => {
    const fetchRoles = async () => {
      if (isAuthenticated) {
        const tokenClaims = await getIdTokenClaims();
        if (tokenClaims) {
          const roles = tokenClaims['https://snackshop.com/roles'];
          const userId = tokenClaims.sub;
          setRoles(roles);
          setUserId(userId);
          setCart((prev) => ({ ...prev, userId: userId }));
        }
      }
    };
    fetchRoles();
  }, [isAuthenticated, getIdTokenClaims]);

  const createNewCart = async (cart: Cart) => {
    try {
      await createCart(cart);
    } catch (error) {
      console.error('Failed to create cart:', error);
    }
  };

  useEffect(() => {
    if (isAuthenticated && cart.cartItems.length > 0) {
      createNewCart(cart);
    }
  }, [cart, isAuthenticated]);

  const toggleDrawer = () => {
    setDrawerOpen(!isDrawerOpen);
  };
  const toggleDarkTheme = () => {
    setDarkTheme(!isDarkTheme);
  };

  return (
    <SettingsContext.Provider
      value={{
        isDrawerOpen,
        toggleDrawer,
        isDarkTheme,
        toggleDarkTheme,
        roles,
        userId,
        cart,
        setCart,
        addToCart,
        snacks,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error('useSettings must be used within a SettingsProvider');
  }
  return context;
};
