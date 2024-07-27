import { useAuth0 } from '@auth0/auth0-react';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Cart } from '../Models/SnackStockSellCart';

interface SettingsContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  roles: string[];
  userId: string;
  cart: Cart;
  setCart: (cart: Cart) => void;
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
