import { useAuth0 } from '@auth0/auth0-react';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

interface SettingsContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
  roles: string[];
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

  useEffect(() => {
    const fetchRoles = async () => {
      if (isAuthenticated) {
        const tokenClaims = await getIdTokenClaims();
        if (tokenClaims) {
          const roles = tokenClaims['https://snackshop.com/roles'];
          setRoles(roles);
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
        isDrawerOpen: isDrawerOpen,
        toggleDrawer,
        isDarkTheme,
        toggleDarkTheme,
        roles,
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
