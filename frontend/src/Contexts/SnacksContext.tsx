import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import { Snack } from '../Models/SnackStockSellCart';
import { getSnacks } from '../Services/SnackService';

interface SnacksContextProps {
  snacks: Snack[];
}

const SnacksContext = createContext<SnacksContextProps | undefined>(undefined);

export const SnacksProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [snacks, setSnacks] = useState<Snack[]>([]);

  const fetchSnacks = async () => {
    const data = await getSnacks();
    setSnacks(data);
  };

  useEffect(() => {
    fetchSnacks();
  }, []);

  return (
    <SnacksContext.Provider value={{ snacks }}>
      {children}
    </SnacksContext.Provider>
  );
};

export const useSnacks = () => {
  const context = useContext(SnacksContext);
  if (context === undefined) {
    throw new Error('useSnacks must be used within a SnacksProvider');
  }
  return context;
};
