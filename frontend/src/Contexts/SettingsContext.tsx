import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SettingsContextProps {
  drawerOpen: boolean;
  toggleDrawer: () => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined,
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <SettingsContext.Provider value={{ drawerOpen, toggleDrawer }}>
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
