import React, { ReactNode, createContext, useContext, useState } from 'react';

interface SettingsContextProps {
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  isDarkTheme: boolean;
  toggleDarkTheme: () => void;
}

const SettingsContext = createContext<SettingsContextProps | undefined>(
  undefined,
);

export const SettingsProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isDarkTheme, setDarkTheme] = useState(false);

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
